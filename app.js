// =========================================================================
// 1. CONFIGURATION ET INITIALISATION DE FIREBASE
// =========================================================================
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

// =========================================================================
// 2. FONCTIONS UTILITAIRES DE NAVIGATION ET NOTIFICATIONS
// =========================================================================
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

// Outils de l'interface
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

// =========================================================================
// 3. FIL D'ACTUALITÉ ET SCROLL INFINI (AUTONOME)
// =========================================================================
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

// Détecteur de défilement pour le Scroll Infini
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        const activeSection = document.getElementById('view-home');
        if (activeSection && activeSection.classList.contains('active')) {
            loadMoreArticles();
        }
    }
});

// =========================================================================
// 4. ENREGISTREMENT ET GESTION DES PROFILS
// =========================================================================
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

// =========================================================================
// 5. MESSAGERIE EN TEMPS RÉEL (CHAT)
// =========================================================================
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

// =========================================================================
// 6. GESTION DES STORIES (PHOTOS ET VIDÉOS PUBLIQUES)
// =========================================================================
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

// =========================================================================
// 7. RECHERCHE DE NOTES ACADÉMIQUES
// =========================================================================
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

// =========================================================================
// 8. SYNCHRONISATION DES LISTES ET ÉCOUTEURS COMPLETS
// =========================================================================
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
                <div class="flex-1">
                    <div class="font-bold text-sm text-gray-800">${u.prenom || ''} ${u.nom || ''}</div>
                    <div class="text-xs text-gray-400 truncate">${u.filiere || 'Étudiant'}</div>
                </div>
                <i class="fas fa-comment-alt text-green-600 opacity-60"></i>
            </div>`;
    });
}

// Écouteur Firebase pour l'état en ligne
firebase.auth().onAuthStateChanged(async (user) => {
    const statusIcon = document.getElementById('statusIcon');
    const statusText = document.getElementById('statusText');

    if (user) {
        currentUser = user;
        if (statusIcon) statusIcon.className = "fas fa-circle text-green-400 text-[8px]";
        if (statusText) statusText.innerText = "En ligne";

        const doc = await db.collection("users").doc(user.uid).get();
        if (doc.exists) {
            const userData = doc.data();
            localStorage.setItem('ua_user_data', JSON.stringify(userData));
            updateProfileUI(userData);
        } else {
            switchView('profile');
        }
    } else {
        currentUser = null;
        if (statusIcon) statusIcon.className = "fas fa-circle text-gray-400 text-[8px]";
        if (statusText) statusText.innerText = "Hors ligne";
        firebase.auth().signInAnonymously().catch(err => console.log("Mode invité"));
    }
});

// Écouteurs en temps réel pour Firestore
db.collection("users").orderBy("date", "desc").limit(20).onSnapshot(snap => updateFriendsList(snap), e => console.log(e));

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
}, err => console.log(err));

// Lancement automatique global au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    switchView('home');
    
    // Appel des fonctions situées dans zen.js
    if (typeof afficherCitationDuJour === "function") afficherCitationDuJour();
    if (typeof genererListeMusiques === "function") genererListeMusiques();
    
    supprimerAnciennesStories().catch(err => console.log(err));
});
      
