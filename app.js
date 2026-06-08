// Configuration de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAeN0FgegSGIbgeTTczRJrrwxDhaQqNKUo",
    authDomain: "argon-shore-02gpt.firebaseapp.com",
    projectId: "argon-shore-02gpt",
    storageBucket: "argon-shore-02gpt.firebasestorage.app",
    messagingSenderId: "285764787960",
    appId: "1:285764787960:web:25e8df238c7fc51c7fe50d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

let currentUser = null;
let activeChatId = null;
let unsubscribeChat = null;
let lastArticleDoc = null;
let isLoadingMore = false;
let allArticlesLoaded = false;

// FONCTIONS UTILITAIRES DE NAVIGATION ET GESTION DES NOTIFICATIONS
function switchView(v) {
    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('view-' + v);
    if (target) target.classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active-nav');
        btn.classList.add('text-gray-400');
    });
    
    const activeBtn = document.getElementById('nav-' + v);
    if (activeBtn) {
        activeBtn.classList.add('active-nav');
        activeBtn.classList.remove('text-gray-400');
    }
    if (v === 'home') loadInitialFeed();
}

function showToast(m) {
    const t = document.getElementById('ua-toast');
    const msg = document.getElementById('toast-message');
    if (t && msg) {
        msg.innerText = m;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3000);
    }
}

// ========== 1. NAVIGATION DE BASE ET OUTILS DE L'INTERFACE ==========
function openSidebar() {
    document.getElementById('sidebar')?.classList.add('open');
    document.getElementById('sidebarOverlay')?.classList.add('open');
}

function closeSidebar() {
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('sidebarOverlay')?.classList.remove('open');
}

function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('modalImage');
    if (modal && img) {
        img.src = src;
        modal.classList.remove('hidden');
    }
}

function closeImageModal() {
    document.getElementById('imageModal')?.classList.add('hidden');
}

function handleLogout() {
    if (confirm("Supprimer vos données ?")) {
        localStorage.clear();
        location.reload();
    }
}

// ========== 2. FIL D'ACTUALITÉ ET SCROLL INFINI ==========
async function loadMoreArticles() {
    if (isLoadingMore || allArticlesLoaded) return;
    isLoadingMore = true;
    
    let q = db.collection("articles").orderBy("createdAt", "desc");
    if (lastArticleDoc) q = q.startAfter(lastArticleDoc);
    q = q.limit(5);
    
    try {
        const snap = await q.get();
        if (snap.empty) {
            allArticlesLoaded = true;
            document.getElementById('load-more-container')?.classList.add('hidden');
            isLoadingMore = false;
            return;
        }
        
        lastArticleDoc = snap.docs[snap.docs.length - 1];
        const feed = document.getElementById('news-feed');
        
        snap.forEach(doc => {
            const art = doc.data();
            const titreArticle = art.title || art.titre || "";
            const contenuArticle = art.content || art.contenu || art.texte || "";
            const lienImage = art.imageUrl || art.image || null;
            const imageHtml = lienImage ? `<img src="${lienImage}" class="w-full h-auto max-h-64 object-cover rounded-xl mb-3 mt-1" onerror="this.style.display='none'">` : '';
            
            feed.innerHTML += `
                <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-4 text-left">
                    <div class="p-5">
                        ${titreArticle ? `<h3 class="font-black text-lg text-gray-800 mb-1">${titreArticle.replace(/</g, '&lt;')}</h3>` : ''}
                        ${imageHtml}
                        <p class="text-sm text-gray-600 leading-relaxed">${contenuArticle.replace(/\n/g, '<br>').replace(/</g, '&lt;')}</p>
                    </div>
                </div>`;
        });
        
        if (snap.docs.length < 5) allArticlesLoaded = true;
        document.getElementById('load-more-container')?.classList.toggle('hidden', allArticlesLoaded);
    } catch (err) { console.error(err); }
    isLoadingMore = false;
}

function loadInitialFeed() {
    lastArticleDoc = null;
    allArticlesLoaded = false;
    const feed = document.getElementById('news-feed');
    if (feed) feed.innerHTML = '';
    loadMoreArticles();
}

// ========== 3. ENREGISTREMENT ET GESTION DES PROFILS ==========
async function registerUser() {
    const nom = document.getElementById('reg-nom').value.trim();
    const prenom = document.getElementById('reg-prenom').value.trim();
    const filiere = document.getElementById('reg-filiere').value.trim();
    
    if (!nom || !prenom) return showToast("⚠️ Nom/Prénom requis");
    
    const userData = { 
        nom: nom.replace(/</g, '&lt;'), 
        prenom: prenom.replace(/</g, '&lt;'), 
        filiere: filiere.replace(/</g, '&lt;'), 
        avatar: document.getElementById('user-img').src || "", 
        date: firebase.firestore.FieldValue.serverTimestamp() 
    };
    
    localStorage.setItem('ua_user_data', JSON.stringify(userData));
    localStorage.setItem('ua_registered', 'true');
    
    await db.collection("users").doc(currentUser.uid).set(userData);
    updateProfileUI(userData);
    showToast("✅ Profil enregistré !");
    switchView('home');
}

async function compressAndConvertToBase64(file) {
    const options = { maxSizeMB: 0.2, maxWidthOrHeight: 800, useWebWorker: true };
    try {
        const compressedFile = await imageCompression(file, options);
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(compressedFile);
        });
    } catch (error) { return null; }
}

async function previewImage(e, instant = false) {
    const file = e.target.files[0];
    if (!file) return;
    
    showToast("⚡ Traitement de l'image...");
    const base64Img = await compressAndConvertToBase64(file);
    if (!base64Img) return showToast("❌ Échec du traitement de l'image");
    
    document.getElementById('temp-avatar').src = base64Img;
    document.getElementById('user-img').src = base64Img;
    
    if (instant && currentUser) {
        const data = JSON.parse(localStorage.getItem('ua_user_data')) || {};
        data.avatar = base64Img;
        await db.collection("users").doc(currentUser.uid).set(data);
        localStorage.setItem('ua_user_data', JSON.stringify(data));
        showToast("📸 Photo mise à jour !");
    }
}

function updateProfileUI(data) {
    document.getElementById('register-ui').classList.add('hidden');
    document.getElementById('profile-ui').classList.remove('hidden');
    document.getElementById('user-full-name').innerText = `${data.prenom || ''} ${data.nom || ''}`;
    document.getElementById('user-sub').innerText = data.filiere || '';
    if (data.avatar) document.getElementById('user-img').src = data.avatar;
}

// ========== 4. MESSAGERIE EN TEMPS RÉEL (CHAT) ==========
function startChat(amiId, amiNom) {
    activeChatId = amiId;
    document.getElementById('chatPartnerName').innerText = amiNom;
    document.getElementById('chatWindow').classList.remove('hidden');
    const roomId = [currentUser.uid, amiId].sort().join('_');
    
    if (unsubscribeChat) unsubscribeChat();
    
    unsubscribeChat = db.collection("messages")
        .where("roomId", "==", roomId)
        .orderBy("date", "asc")
        .onSnapshot(snap => {
            const box = document.getElementById('chatMessages');
            if (!box) return;
            box.innerHTML = "";
            snap.forEach(doc => {
                const m = doc.data();
                const isMe = m.senderId === currentUser.uid;
                const safeText = (m.text || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                box.innerHTML += `<div class="max-w-[80%] chat-message ${isMe ? 'self-end bg-green-600 text-white rounded-l-2xl rounded-tr-2xl' : 'self-start bg-white border rounded-r-2xl rounded-tl-2xl shadow-sm'} p-3 text-sm">${safeText}</div>`;
            });
            box.scrollTo({ top: box.scrollHeight, behavior: 'smooth' });
        });
}

async function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text || !activeChatId) return;
    
    const roomId = [currentUser.uid, activeChatId].sort().join('_');
    input.value = "";
    
    await db.collection("messages").add({ 
        roomId, 
        senderId: currentUser.uid, 
        text: text.replace(/</g, '&lt;').replace(/>/g, '&gt;'), 
        date: firebase.firestore.FieldValue.serverTimestamp() 
    });
}

function closeChat() {
    document.getElementById('chatWindow').classList.add('hidden');
    if (unsubscribeChat) unsubscribeChat();
}

// ========== 5. GESTION DES STORIES (PHOTOS ET VIDÉOS PUBLIQUES) ==========
async function postStory(e) {
    const file = e.target.files[0];
    if (!file || !currentUser) return showToast("❌ Connectez-vous d'abord");
    
    const isVideo = file.type.startsWith('video/');
    const isImage = file.type.startsWith('image/');
    if (!isVideo && !isImage) return showToast("❌ Images ou vidéos uniquement");
    
    const maxSize = isVideo ? 12 * 1024 * 1024 : 5 * 1024 * 1024;
    if (file.size > maxSize) return showToast("❌ Fichier trop lourd");
    
    showToast("⏳ Publication de votre story...");
    try {
        const userData = JSON.parse(localStorage.getItem('ua_user_data'));
        let mediaUrl = "";
        
        if (isVideo) {
            const fileName = `${Date.now()}_${file.name}`;
            const storageRef = storage.ref(`stories/${currentUser.uid}/${fileName}`);
            const snapshot = await storageRef.put(file);
            mediaUrl = await snapshot.ref.getDownloadURL();
        } else {
            mediaUrl = await compressAndConvertToBase64(file);
        }
        
        if (!mediaUrl) return showToast("❌ Erreur de traitement du fichier");

        await db.collection("stories").add({
            mediaUrl: mediaUrl,
            mediaType: isVideo ? 'video' : 'image',
            userName: `${userData?.prenom || "Étudiant"}`,
            userId: currentUser.uid,
            date: firebase.firestore.FieldValue.serverTimestamp()
        });
        showToast("✨ Story en ligne ! Visible par tous.");
    } catch (error) {
        console.error(error);
        showToast("❌ Erreur lors de l'envoi de la story");
    }
    e.target.value = '';
}

function openMediaModal(url, type) {
    const modal = document.getElementById('mediaModal');
    const content = document.getElementById('mediaContent');
    content.innerHTML = type === 'video' 
        ? `<video src="${url}" controls autoplay class="max-w-full max-h-[80vh] rounded-lg"></video>`
        : `<img src="${url}" class="max-w-full max-h-[80vh] rounded-lg">`;
    modal.classList.remove('hidden');
}

function closeMediaModal() {
    const content = document.getElementById('mediaContent');
    if (content) content.innerHTML = '';
    document.getElementById('mediaModal')?.classList.add('hidden');
}

async function supprimerAnciennesStories() {
    const ilYa24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const snap = await db.collection("stories").where("date", "<", ilYa24h).get();
    snap.forEach(doc => doc.ref.delete());
}

// ========== 6. RECHERCHE DE NOTES ACADÉMIQUES ==========
async function searchNotes() {
    const ine = document.getElementById('matSearch').value.trim();
    const res = document.getElementById('resultArea');
    if (!ine) return showToast("Entrez votre INE");
    
    res.innerHTML = '<div class="text-center text-gray-500"><i class="fas fa-spinner fa-spin text-green-700"></i> Recherche...</div>';
    try {
        const snap = await db.collection("notes").where("ine", "==", ine).get();
        if (snap.empty) {
            res.innerHTML = `<div class="bg-blue-50 p-6 rounded-2xl text-center"><p class="font-bold text-blue-700">📭 Aucune note trouvée pour ${ine.replace(/</g, '&lt;')}</p></div>`;
            return;
        }
        let html = `<div class="space-y-4">`;
        snap.forEach(doc => {
            const n = doc.data();
            html += `<div class="bg-white rounded-2xl border p-4 text-left shadow-sm">
                        <div class="font-bold text-green-800">📚 ${(n.matiere || "Sans matière").replace(/</g, '&lt;')}</div>
                        <div class="text-2xl font-black text-green-700">${n.note || "?"}/20</div>
                        ${n.commentaire ? `<div class="text-sm italic mt-1 text-gray-500">“${n.commentaire.replace(/</g, '&lt;')}”</div>` : ''}
                    </div>`;
        });
        res.innerHTML = html + `</div>`;
    } catch (error) { res.innerHTML = `<div class="text-red-500">❌ Erreur de chargement</div>`; }
}

// ========== 7. ESPACE ZEN & MOTIVATION AUTOMATIQUE ==========
const LISTE_CITATIONS = [
    { texte: "Seul, on va plus vite. Ensemble, on va plus loin. Unissons nos intelligences pour bâtir l'avenir de notre continent.", auteur: "Proverbe Africain" },
    { texte: "Le succès n'est pas le fruit du hasard. C'est le résultat du travail, de la persévérance, de l'apprentissage et de l'amour de ce que l'on fait.", auteur: "Pelé" },
    { texte: "S'aimer soi-même et se faire confiance est le premier secret de la réussite et du bonheur.", auteur: "Oscar Wilde" },
    { texte: "Aucun d'entre nous ne pourra jamais accomplir de grandes choses seul. Mais ensemble, en nous soutenant, notre impact devient magnifique.", auteur: "Mère Teresa" },
    { texte: "Le courage ne rugit pas toujours. Parfois, le courage est cette petite voix calme à la fin de la journée qui dit : 'J'essayerai encore demain'.", auteur: "Mary Anne Radmacher" },
    { texte: "La vraie grandeur d'un leader ne réside pas dans sa richesse personnelle, mais dans sa capacité à impacter positivement sa communauté.", auteur: "Bob Marley" },
    { texte: "Le travail d'équipe et l'entraide transforment les efforts individuels les plus simples en victoires éclatantes.", auteur: "Anonyme" },
    { texte: "Ne limitez jamais vos défis. Apprenez à relever et surmonter vos limites au quotidien.", auteur: "Anonyme" }
];

const FLUX_MUSIQUES = [
    { titre: "🔥 Détermination & Sport (Combat/Motivation)", url: "https://ais-edge-104-live365-dal02.cdnstream.com/a64287", icon: "fa-fire" },
    { titre: "🙏 Louange & Gospel (Chrétien)", url: "https://icecast.rcvi.fr/rcv-gospel.mp3", icon: "fa-cross" },
    { titre: "🤲 Doua, Anachid & Spiritualité (Islam)", url: "https://shaincast.stream.publicradio.tn/misk_live", icon: "fa-mosque" },
    { titre: "✨ Tendance Hits & Pop (TikTok Style)", url: "https://audio.nrj.fr/fr/30001/mp3_128.mp3", icon: "fa-music" },
    { titre: "🧠 Concentration Alpha (Musique d'étude)", url: "https://icecast.radiofrance.fr/fip-midfi.mp3", icon: "fa-brain" }
];

let zenAudio = null;
let currentMusicBtn = null;

function genererListeMusiques() {
    const container = document.getElementById('liste-musiques-container');
    if (!container) return;
    
    container.innerHTML = FLUX_MUSIQUES.map(m => `
        <button onclick="playZenMusic('${m.url}', '${m.titre.replace(/'/g, "\\'")}', this)" class="music-btn w-full bg-white hover:bg-green-50 p-3 rounded-xl border text-left text-xs font-bold text-gray-700 flex items-center justify-between transition">
            <span><i class="fas ${m.icon} text-green-600 mr-2"></i> ${m.titre}</span>
            <i class="fas fa-play text-gray-400 stream-icon"></i>
        </button>
    `).join('');
}

function afficherCitationDuJour() {
    const txtElem = document.getElementById('citation-text');
    const authElem = document.getElementById('citation-author');
    if (!txtElem || !authElem) return;

    const maintenant = new Date();
    const debutAnnee = new Date(maintenant.getFullYear(), 0, 0);
    const diff = maintenant - debutAnnee;
    const jourDeLAnnee = Math.floor(diff / (1000 * 60 * 60 * 24));

    const index = jourDeLAnnee % LISTE_CITATIONS.length;
    const selection = LISTE_CITATIONS[index];

    txtElem.innerText = selection.texte;
    authElem.innerText = `— ${selection.auteur}`;
}

function playZenMusic(url, titre, buttonElement) {
    const playerUi = document.getElementById('zen-player-ui');
    const titleUi = document.getElementById('current-track-title');
    const triggerIcon = document.getElementById('player-play-trigger').querySelector('i');
    const progressUi = document.getElementById('player-progress');

    document.querySelectorAll('.music-btn').forEach(btn => {
        btn.querySelector('.stream-icon').className = "fas fa-play text-gray-400 stream-icon";
        btn.classList.remove('bg-green-50', 'border-green-300');
    });

    if (zenAudio && zenAudio.src === url) {
        if (!zenAudio.paused) {
            zenAudio.pause();
            triggerIcon.className = "fas fa-play";
            buttonElement.querySelector('.stream-icon').className = "fas fa-play text-gray-400 stream-icon";
        } else {
            showToast("⏳ Connexion au flux direct...");
            zenAudio.play();
            triggerIcon.className = "fas fa-pause";
            buttonElement.querySelector('.stream-icon').className = "fas fa-volume-up text-green-600 stream-icon";
            buttonElement.classList.add('bg-green-50', 'border-green-300');
        }
        return;
    }

    if (zenAudio) {
        zenAudio.pause();
        zenAudio = null;
    }

    showToast("⏳ Chargement du flux en direct...");
    zenAudio = new Audio(url);
    currentMusicBtn = buttonElement;

    if (titleUi) titleUi.innerText = titre;
    if (playerUi) playerUi.classList.remove('hidden');
    if (progressUi) progressUi.style.width = "100%"; 

    zenAudio.play().then(() => {
        triggerIcon.className = "fas fa-pause";
        buttonElement.querySelector('.stream-icon').className = "fas fa-volume-up text-green-600 stream-icon";
        buttonElement.classList.add('bg-green-50', 'border-green-300');
    }).catch(err => {
        console.error(err);
        showToast("❌ Flux audio saturé. Réessaye dans un instant.");
    });
}

function toggleZenPlayback() {
    if (!zenAudio) return;
    const triggerIcon = document.getElementById('player-play-trigger').querySelector('i');
    
    if (!zenAudio.paused) {
        zenAudio.pause();
        triggerIcon.className = "fas fa-play";
        if (currentMusicBtn) currentMusicBtn.querySelector('.stream-icon').className = "fas fa-play text-gray-400 stream-icon";
    } else {
        zenAudio.play();
        triggerIcon.className = "fas fa-pause";
        if (currentMusicBtn) currentMusicBtn.querySelector('.stream-icon').className = "fas fa-volume-up text-green-600 stream-icon";
    }
}

function telechargerIA() { showToast("💡 Espace Réussite synchronisé en local !"); }

// ========== 8. SYNCHRONISATION DES ÉCOUTEURS GLOBAUX ==========
function updateFriendsList(users) {
    const list = document.getElementById('friendsList');
    if (!list) return;
    list.innerHTML = "";
    users.forEach(doc => {
        const u = doc.data();
        if (currentUser && doc.id === currentUser.uid) return;
        list.innerHTML += `
            <div class="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer text-left" onclick="startChat('${doc.id}', '${u.prenom} ${u.nom}')">
                <img src="${u.avatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}" class="w-12 h-12 rounded-full object-cover border-2 border-green-500 shadow-sm">
                <d                <div class="flex-1">
                    <div class="font-bold text-sm text-gray-800">${u.prenom || ''} ${u.nom || ''}</div>
                    <div class="text-xs text-gray-400 truncate">${u.filiere || 'Étudiant'}</div>
                </div>
                <i class="fas fa-comment-alt text-green-600 opacity-60"></i>
            </div>`;
    });
}

// ========== 9. INITIALISATION ET ÉCOUTE DE L'ÉTAT DE CONNEXION ==========

// 1. Écouteur Firebase pour suivre la connexion de l'utilisateur
firebase.auth().onAuthStateChanged(async (user) => {
    const statusIcon = document.getElementById('statusIcon');
    const statusText = document.getElementById('statusText');

    if (user) {
        currentUser = user;
        if (statusIcon) statusIcon.className = "fas fa-circle text-green-400 text-[8px]";
        if (statusText) statusText.innerText = "En ligne";

        // Récupération du profil de l'étudiant
        const doc = await db.collection("users").doc(user.uid).get();
        if (doc.exists) {
            const userData = doc.data();
            localStorage.setItem('ua_user_data', JSON.stringify(userData));
            updateProfileUI(userData);
        } else {
            // S'il n'a pas encore de profil, on l'envoie sur l'onglet Profil pour s'enregistrer
            switchView('profile');
            showToast("👋 Créez votre profil pour continuer !");
        }
    } else {
        currentUser = null;
        if (statusIcon) statusIcon.className = "fas fa-circle text-gray-400 text-[8px]";
        if (statusText) statusText.innerText = "Hors ligne";
        
        // Connexion anonyme automatique pour naviguer librement
        firebase.auth().signInAnonymously().catch(err => console.error("Erreur Auth:", err));
    }
});

// 2. Synchronisation en temps réel de la liste des membres
db.collection("users").orderBy("date", "desc").onSnapshot(snap => {
    updateFriendsList(snap);
}, err => console.error(err));

// 3. Synchronisation en temps réel des stories (24h)
db.collection("stories").orderBy("date", "desc").onSnapshot(snap => {
    const container = document.getElementById('stories-container');
    if (!container) return;
    container.innerHTML = "";
    
    snap.forEach(doc => {
        const s = doc.data();
        const badgeMedia = s.mediaType === 'video' ? '<i class="fas fa-video absolute bottom-1 right-1 text-[10px] text-white bg-black/50 p-1 rounded-sm"></i>' : '';
        
        container.innerHTML += `
            <div class="flex-shrink-0 w-16 text-center cursor-pointer relative" onclick="openMediaModal('${s.mediaUrl}', '${s.mediaType}')">
                <div class="w-14 h-14 rounded-full border-2 border-green-500 p-[2px] mx-auto bg-white shadow-sm">
                    <img src="${s.mediaType === 'video' ? 'https://cdn-icons-png.flaticon.com/512/1179/1179069.png' : s.mediaUrl}" class="w-full h-full rounded-full object-cover">
                </div>
                ${badgeMedia}
                <span class="text-[9px] mt-1 block truncate font-medium text-gray-600">${s.userName}</span>
            </div>`;
    });
}, err => console.error(err));

// 4. Lancement des fonctions au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    // Force l'affichage initial sur l'onglet d'accueil
    switchView('home');
    
    // Lance l'Espace Zen (Citations et Musiques)
    afficherCitationDuJour();
    genererListeMusiques();
    
    // Nettoie les anciennes stories en arrière-plan
    supprimerAnciennesStories().catch(err => console.error(err));
});

