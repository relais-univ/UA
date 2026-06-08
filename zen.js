// ==========================================
// CONFIGURATION DE L'ESPACE ZEN & LECTEUR INTERACTIF - PARTIE 1
// ==========================================

const citationsZen = [
    { text: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.", author: "Winston Churchill" },
    { text: "La discipline est le pont entre les objectifs et la réussite.", author: "Jim Rohn" },
    { text: "Crois en toi-même et en tout ce que tu es. Sache qu'il y a en toi quelque chose de plus grand que n'importe quel obstacle.", author: "Christian D. Larson" },
    { text: "Il n'y a qu'un moyen d'échouer, c'est d'abandonner avant d'avoir réussi.", author: "Georges Clemenceau" },
    { text: "Le meilleur moyen de prédire l'avenir, c'est de le créer.", author: "Peter Drucker" }
];

// Base de données : 20 vraies pistes distinctes et uniques par catégorie
const categoriesMusique = [
    {
        id: "islam",
        titre: "🕌 🤲 Doua, Anachid & Spiritualité (Islam)",
        icon: "🕋",
        tracks: [
            { id: "is1", title: "Doua pour la réussite aux examens", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "is2", title: "Anachid Calme pour l'Esprit", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "is3", title: "Récitation Subliminale Apaisante", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "is4", title: "Doua du Matin (Protection)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { id: "is5", title: "Apaisement Spirituel Profond", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { id: "is6", title: "Sourate Al-Mulk (Protection de la nuit)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { id: "is7", title: "Anachid de la Fraternité", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { id: "is8", title: "Doua Contre l'Anxiété et le Stress", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { id: "is9", title: "Dhikr Méditation Matinale", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { id: "is10", title: "Doua pour la Paix de l'Âme", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { id: "is11", title: "Récitation Douceur de la Foi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { id: "is12", title: "Doua de Repentir & Sérénité", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { id: "is13", title: "Oasis Spirituelle Audio", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { id: "is14", title: "Anachid sans Instruments (Paix)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { id: "is15", title: "Sourate Ar-Rahman (Apaisement)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { id: "is16", title: "Chant Spirituel Éveil de l'Âme", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { id: "is17", title: "Doua pour la Guidance", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "is18", title: "Récitation Al-Fatiha (Concentration)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "is19", title: "Dhikr du Soir pour Étudiants", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "is20", title: "Clarté Divine Recueillement", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
        ]
    },
    {
        id: "chretien",
        titre: "✝️ 🙏 Louange & Gospel (Chrétien)",
        icon: "⛪",
        tracks: [
            { id: "ch1", title: "Gospel Worship Mix Part 1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { id: "ch2", title: "Acoustic Praise Session", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { id: "ch3", title: "Chants de Grâce et Victoire", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { id: "ch4", title: "Piano Instrumental Adoration", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { id: "ch5", title: "Holy Spirit Atmosphere", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { id: "ch6", title: "Deep Worship Hours", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { id: "ch7", title: "Louange Africaine Non-Stop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { id: "ch8", title: "Gospel Choir Uplifting", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { id: "ch9", title: "Broken Vessels Melody", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { id: "ch10", title: "Hosanna Instrumental Hymn", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { id: "ch11", title: "Amazing Grace Symphony", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { id: "ch12", title: "Tu es Dieu Medley", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { id: "ch13", title: "Morning Devotion Tracks", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "ch14", title: "Faithful & True Melodies", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "ch15", title: "Sainte Présence Instrumentale", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "ch16", title: "Reign Forever Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { id: "ch17", title: "Chœur d'Anges Adoration", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { id: "ch18", title: "Redeemed Soul Anthem", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { id: "ch19", title: "Clarté Divine & Calme", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { id: "ch20", title: "Douce Voix - Paix Intérieure", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
        ]
    },
    {
        id: "tiktok",
        titre: "🎵 ✨ Tendance Hits & Pop (TikTok Style)",
        icon: "🕺",
        tracks: [
            { id: "tk1", title: "TikTok Global Viral LoFi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { id: "tk2", title: "Trending Mashup Mix 2026", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { id: "tk3", title: "Aesthetic Chill Vibes", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { id: "tk4", title: "Upbeat Pop Study Break", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { id: "tk5", title: "Synthwave Trending Loop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { id: "tk6", title: "Speed Up Radio Hits Mix", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { id: "tk7", title: "Slowed & Reverb Melancholy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "tk8", title: "Catchy Bassline Drive", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "tk9", title: "Summer Anthems Reimagined", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "tk10", title: "Clubhouse Acoustic Session", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { id: "tk11", title: "HipHop Instrumental Trend", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { id: "tk12", title: "Future Bass Study Hype", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { id: "tk13", title: "Sad Boy Hours Piano Version", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { id: "tk14", title: "Vibes d'Afrique - Afrobeat Trend", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { id: "tk15", title: "Hyperpop Clean Focus", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { id: "tk16", title: "Groovy Modern Funk Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { id: "tk17", title: "Tropical House Study Chills", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { id: "tk18", title: "Viral Piano Cover Medley", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { id: "tk19", title: "Cyberpunk Focus Energy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { id: "tk20", title: "Indie Pop Sunset Ride", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" }
        ]
    },
    {
        id: "sport",
        titre: "🔥 Détermination & Sport (Motivation Universelle)",
        icon: "🦖",
        tracks: [
            { id: "sp1", title: "Motivation Beats Vol. 1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "sp2", title: "Epic Cinematic Workout", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "sp3", title: "Aggressive Gym Hype", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "sp4", title: "Power & Focus Track", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { id: "sp5", title: "Never Give Up - Hard Trax", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { id: "sp6", title: "Beast Mode Activated", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { id: "sp7", title: "Iron Paradise Theme", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { id: "sp8", title: "No Pain No Gain Beat", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { id: "sp9", title: "Victory Lap Chronicles", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { id: "sp10", title: "Limitless Energy Stream", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { id: "sp11", title: "Warrior Spirit Sound", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { id: "sp12", title: "Push It to the Edge", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { id: "sp13", title: "Alpha Mindset Music", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { id: "sp14", title: "Rising Champion Loop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { id: "sp15", title: "Thunder Dome Gym Mix", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { id: "sp16", title: "Ultimate Focus Trax", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { id: "sp17", title: "Heavy Duty Lifters", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "sp18", title: "Stamina Builder Music", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "sp19", title: "Grind & Shine Everyday", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "sp20", title: "Final Round Countdown", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
        ]
    },
    {
        id: "alpha",
        titre: "🧠 🧠 Concentration Alpha (Musique d'étude)",
        icon: "🧬",
        tracks: [
            { id: "al1", title: "Ondes Alpha 8Hz - Focus Absolu", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { id: "al2", title: "Binaural Beats for Memory", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { id: "al3", title: "Deep Focus Ambient Spaces", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "al4", title: "Rain Sound + Piano Cozy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "al5", title: "Super Intelligence Frequency", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "al6", title: "Studying In Tokyo (Lofi)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { id: "al7", title: "Brain Stimulation Session", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { id: "al8", title: "Minimalist Coding Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { id: "al9", title: "Zen Garden Relaxation", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { id: "al10", title: "Cosmic Reading Atmosphere", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { id: "al11", title: "Neuroscience Flow State", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { id: "al12", title: "Soft Thunderstorm Focus", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { id: "al13", title: "White Noise Pure Isolation", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { id: "al14", title: "Chilling In the Library Piano", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { id: "al15", title: "Spatial Audio Focus Engine", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { id: "al16", title: "Cognitive Boost Melodies", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { id: "al17", title: "Endless Horizon Chillwave", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { id: "al18", title: "Sublime Concentration Loop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { id: "al19", title: "Astral Projection Study", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "al20", title: "Deep Sleep & Study Wave", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
        ]
    }
];

let globalAudioElement = null;
let currentActivePlaylist = [];
let currentTrackIndex = 0;
let isAudioPlaying = false;
let trackEnCoursId = null; 

function initialiserEspaceZen() {
    afficherCitationDuJour();
    genererCategoriesInterface();
}

function afficherCitationDuJour() {
    const textTxt = document.getElementById("citation-text");
    const authTxt = document.getElementById("citation-author");
    if (textTxt && authTxt) {
        const indexAleatoire = Math.floor(Math.random() * citationsZen.length);
        const citation = citationsZen[indexAleatoire];
        textTxt.innerText = `"${citation.text}"`;
        authTxt.innerText = `— ${citation.author}`;
    }
}
// ==========================================
// CONFIGURATION DE L'ESPACE ZEN & LECTEUR INTERACTIF - PARTIE 2
// ==========================================

function genererCategoriesInterface() {
    const container = document.getElementById("liste-musiques-container");
    if (!container) return;
    container.innerHTML = "";
    
    categoriesMusique.forEach(cat => {
        const catBox = document.createElement("div");
        catBox.className = "w-full mb-3 border border-gray-100 rounded-xl bg-white shadow-sm overflow-hidden";
        
        const headerBtn = document.createElement("button");
        headerBtn.className = "w-full text-left p-4 flex items-center justify-between bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors focus:outline-none";
        headerBtn.onclick = () => toggleRepertoireAffichage(cat.id);
        
        headerBtn.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="text-lg">${cat.icon}</span>
                <span class="text-xs font-bold text-gray-700">${cat.titre}</span>
            </div>
            <i id="arrow-${cat.id}" class="fas fa-chevron-down text-xs text-gray-400 transition-transform duration-200"></i>
        `;
        
        const tracksListDiv = document.createElement("div");
        tracksListDiv.id = `repertoire-${cat.id}`;
        tracksListDiv.className = "hidden bg-gray-50 border-t border-gray-50 max-h-64 overflow-y-auto divide-y divide-gray-100";
        
        cat.tracks.forEach((track, index) => {
            const trackItem = document.createElement("div");
            trackItem.id = `item-piste-${track.id}`;
            trackItem.className = "p-3 flex items-center justify-between hover:bg-green-50/50 transition-colors cursor-pointer group";
            trackItem.onclick = (e) => {
                e.stopPropagation(); 
                selectionnerEtJouerMorceau(cat.id, index);
            };
            
            trackItem.innerHTML = `
                <div class="flex items-center gap-3 overflow-hidden">
                    <span class="text-xxs font-mono text-gray-400 w-4">${String(index + 1).padStart(2, '0')}</span>
                    <p class="text-xs font-medium text-gray-600 truncate group-hover:text-green-600 transition-colors">${track.title}</p>
                </div>
                <div id="status-icon-${track.id}" class="text-green-600 text-xxs pl-2">
                    <i class="fas fa-play text-gray-300 group-hover:text-green-500 transition-colors"></i>
                </div>
            `;
            tracksListDiv.appendChild(trackItem);
        });
        
        catBox.appendChild(headerBtn);
        catBox.appendChild(tracksListDiv);
        container.appendChild(catBox);
    });
}

function toggleRepertoireAffichage(catId) {
    const cibleDiv = document.getElementById(`repertoire-${catId}`);
    const iconeFleche = document.getElementById(`arrow-${catId}`);
    
    if (!cibleDiv) return;
    
    const estMasque = cibleDiv.classList.contains("hidden");
    
    categoriesMusique.forEach(c => {
        if (c.id !== catId) {
            document.getElementById(`repertoire-${c.id}`)?.classList.add("hidden");
            document.getElementById(`arrow-${c.id}`)?.classList.remove("rotate-180");
        }
    });
    
    if (estMasque) {
        cibleDiv.classList.remove("hidden");
        iconeFleche?.classList.add("rotate-180");
    } else {
        cibleDiv.classList.add("hidden");
        iconeFleche?.classList.remove("rotate-180");
    }
}

function selectionnerEtJouerMorceau(catId, trackIndex) {
    const cibleCat = categoriesMusique.find(c => c.id === catId);
    if (!cibleCat) return;
    
    currentActivePlaylist = cibleCat.tracks;
    currentTrackIndex = trackIndex;
    
    const trackSelectionnee = currentActivePlaylist[currentTrackIndex];
    trackEnCoursId = trackSelectionnee.id;
    
    lancerPisteSpecifique(trackSelectionnee.title, trackSelectionnee.url);
}

function lancerPisteSpecifique(titre, url) {
    if (globalAudioElement) {
        globalAudioElement.pause();
    }
    
    globalAudioElement = new Audio(url);
    
    globalAudioElement.play()
        .then(() => {
            isAudioPlaying = true;
            synchroniserLecteurUI(titre);
        })
        .catch(err => {
            console.log("Lecture en attente d'interaction mobile.");
            isAudioPlaying = false;
            synchroniserLecteurUI(titre);
        });
        
    globalAudioElement.ontimeupdate = () => {
        const progressionBarre = document.getElementById("player-progress");
        if (progressionBarre && globalAudioElement.duration) {
            const pourcentage = (globalAudioElement.currentTime / globalAudioElement.duration) * 100;
            progressionBarre.style.width = `${pourcentage}%`;
        }
    };
    
    globalAudioElement.onended = () => {
        currentTrackIndex++;
        if (currentTrackIndex < currentActivePlaylist.length) {
            const nextTrack = currentActivePlaylist[currentTrackIndex];
            trackEnCoursId = nextTrack.id;
            lancerPisteSpecifique(nextTrack.title, nextTrack.url);
        } else {
            isAudioPlaying = false;
            trackEnCoursId = null;
            document.getElementById("zen-player-ui")?.classList.add("hidden");
            rafraichirIconesRepertoire();
        }
    };
}

function synchroniserLecteurUI(titre) {
    const playerUI = document.getElementById("zen-player-ui");
    const labelTitre = document.getElementById("current-track-title");
    const declencheurPlay = document.getElementById("player-play-trigger");
    
    if (playerUI) playerUI.classList.remove("hidden");
    if (labelTitre) labelTitre.innerText = titre;
    if (declencheurPlay) {
        declencheurPlay.innerHTML = isAudioPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    }
    
    rafraichirIconesRepertoire();
}

function rafraichirIconesRepertoire() {
    categoriesMusique.forEach(cat => {
        cat.tracks.forEach(track => {
            const iconDiv = document.getElementById(`status-icon-${track.id}`);
            const itemRow = document.getElementById(`item-piste-${track.id}`);
            if (iconDiv && itemRow) {
                if (track.id === trackEnCoursId) {
                    itemRow.classList.add("bg-green-50");
                    iconDiv.innerHTML = isAudioPlaying 
                        ? '<i class="fas fa-volume-up text-green-600 animate-pulse"></i>' 
                        : '<i class="fas fa-pause text-green-600"></i>';
                } else {
                    itemRow.classList.remove("bg-green-50");
                    iconDiv.innerHTML = '<i class="fas fa-play text-gray-300 group-hover:text-green-500"></i>';
                }
            }
        });
    });
}

function toggleZenPlayback() {
    if (!globalAudioElement) return;
    
    if (isAudioPlaying) {
        globalAudioElement.pause();
        isAudioPlaying = false;
    } else {
        globalAudioElement.play().catch(() => {});
        isAudioPlaying = true;
    }
    
    synchroniserLecteurUI(currentActivePlaylist[currentTrackIndex]?.title || "Musique");
}

document.addEventListener("DOMContentLoaded", initialiserEspaceZen);
if (document.readyState === "interactive" || document.readyState === "complete") {
    initialiserEspaceZen();
    }
