// ==========================================
// CONFIGURATION DE L'ESPACE ZEN & MOTIVATION
// ==========================================

// 1. Base de données des Citations Inspirantes
const citationsZen = [
    { text: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.", author: "Winston Churchill" },
    { text: "La discipline est le pont entre les objectifs et la réussite.", author: "Jim Rohn" },
    { text: "Crois en toi-même et en tout ce que tu es. Sache qu'il y a en toi quelque chose de plus grand que n'importe quel obstacle.", author: "Christian D. Larson" },
    { text: "Il n'y a qu'un moyen d'échouer, c'est d'abandonner avant d'avoir réussi.", author: "Georges Clemenceau" },
    { text: "Le meilleur moyen de prédire l'avenir, c'est de le créer.", author: "Peter Drucker" },
    { text: "Les opportunités ne se produisent pas, c'est vous qui les créez.", author: "Chris Grosser" }
];

// 2. Base de données des Catégories et des Pistes Audio (Minimum 20 par catégorie)
const categoriesMusique = [
    {
        id: "sport",
        titre: "🔥 Détermination & Sport (Combat/Motivation)",
        icon: "🦖",
        tracks: [
            { title: "Motivation Beats Vol. 1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { title: "Epic Cinematic Workout", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { title: "Aggressive Gym Hype", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { title: "Power & Focus", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { title: "Never Give Up - Hard Trax", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { title: "Beast Mode Activated", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { title: "Iron Paradise Theme", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { title: "No Pain No Gain Beat", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { title: "Victory Lap Chronicles", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { title: "Limitless Energy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { title: "Warrior Spirit Sound", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { title: "Push It to the Edge", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { title: "Alpha Mindset Music", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { title: "Rising Champion Loop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { title: "Thunder Dome Gym", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { title: "Ultimate Focus Trax", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { title: "Heavy Duty Lifters", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { title: "Stamina Builder", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { title: "Grind & Shine Everyday", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { title: "Final Round Countdown", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
        ]
    },
    {
        id: "chretien",
        titre: "✝️ 🙏 Louange & Gospel (Chrétien)",
        icon: "⛪",
        tracks: [
            { title: "Douce Voix - Paix Intérieure", url: "https://stream.radiojar.com/vcrb770p4g0uv" }, // Live Radio Gospel
            { title: "Gospel Worship Mix Part 1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { title: "Acoustic Praise Session", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { title: "Chants de Grâce et Victoire", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { title: "Piano Instrumental Adoration", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { title: "Holy Spirit Atmosphere", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { title: "Deep Worship Hours", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { title: "Louange Africaine Non-Stop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { title: "Gospel Choir Uplifting", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { title: "Broken Vessels Melody", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { title: "Hosanna Instrumental Hymn", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { title: "Amazing Grace Symphony", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { title: "Tu es Dieu Medley", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { title: "Morning Devotion Tracks", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { title: "Faithful & True Melodies", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { title: "Sainte Présence Instrumentale", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { title: "Reign Forever Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { title: "Chœur d'Anges Adoration", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { title: "Redeemed Soul Anthem", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { title: "Clarté Divine & Calme", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" }
        ]
    },
    {
        id: "islam",
        titre: "🕌 🤲 Doua, Anachid & Spiritualité (Islam)",
        icon: "🕋",
        tracks: [
            { title: "Coran - Paix du Cœur (Live)", url: "https://stream.radiojar.com/0336w613yv8uv" }, // Coran Radio stream direct
            { title: "Doua Magnifique Apaisement", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { title: "Anachid Calme pour l'Esprit", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { title: "Récitation Subliminale Apaisante", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { title: "Doua du Matin (Protection)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { title: "Anachid sans Instruments 01", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { title: "Doua de la Réussite & Examen", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { title: "Paix Spirituelle Intérieure", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { title: "Récitation Sourate Al-Mulk", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { title: "Anachid Rythme Doux", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { title: "Doua Contre l'Anxiété", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { title: "Dhikr Méditation Calme", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { title: "Récitation Relaxante Nuit", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { title: "Anachid de la Fraternité", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { title: "Doua pour les Parents", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { title: "Oasis Spirituelle Audio", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { title: "Récitation Apaisement Profond", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { title: "Anachid Douceur de la Foi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { title: "Doua Repentir & Sérénité", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { title: "Clarté de l'Âme Recueillement", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" }
        ]
    },
    {
        id: "tiktok",
        titre: "🎵 ✨ Tendance Hits & Pop (TikTok Style)",
        icon: "🕺",
        tracks: [
            { title: "TikTok Global Viral LoFi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { title: "Trending Mashup Mix 2026", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { title: "Aesthetic Chill Vibes", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { title: "Upbeat Pop Study Break", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { title: "Synthwave Trending Loop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { title: "Speed Up Radio Hits Mix", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { title: "Slowed & Reverb Melancholy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { title: "Catchy Bassline Drive", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { title: "Summer Anthems Reimagined", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { title: "Clubhouse Acoustic Session", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { title: "HipHop Instrumental Trend", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { title: "Future Bass Study Hype", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { title: "Sad Boy Hours Piano Version", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { title: "Vibes d'Afrique - Afrobeat Trend", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { title: "Hyperpop Clean Focus", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { title: "Groovy Modern Funk Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { title: "Tropical House Study Chills", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { title: "Viral Piano Cover Medley", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { title: "Cyberpunk Focus Energy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { title: "Indie Pop Sunset Ride", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" }
        ]
    },
    {
        id: "alpha",
        titre: "🧠 🧠 Concentration Alpha (Musique d'étude)",
        icon: "🧬",
        tracks: [
            { title: "Ondes Alpha 8Hz - Focus Absolu", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { title: "Binaural Beats for Memory", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { title: "Deep Focus Ambient Spaces", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { title: "Rain Sound + Piano Cozy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { title: "Super Intelligence Frequency", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { title: "Studying In Tokyo (Lofi)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { title: "Brain Stimulation Session", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { title: "Minimalist Coding Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { title: "Zen Garden Relaxation", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { title: "Cosmic Reading Atmosphere", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { title: "Neuroscience Flow State", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { title: "Soft Thunderstorm Focus", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { title: "White Noise Pure Isolation", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { title: "Chilling In the Library Piano", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { title: "Spatial Audio Focus Engine", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { title: "Cognitive Boost Melodies", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { title: "Endless Horizon Chillwave", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { title: "Sublime Concentration Loop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { title: "Astral Projection Study", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { title: "Deep Sleep & Study Wave", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
        ]
    }
];

// 3. Variables de contrôle de l'état audio global
let globalAudioElement = null;
let currentActivePlaylist = [];
let currentTrackIndex = 0;
let isAudioPlaying = false;

// ==========================================
// FONCTIONS LOGIQUES DE L'INTERFACE ZEN
// ==========================================

// Initialisation globale de la section Motivation & Ambiance
function initialiserEspaceZen() {
    afficherCitationDuJour();
    genererCategoriesInterface();
}

// Sélectionne et affiche une pensée positive aléatoire
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

// Génère la liste graphique interactive des catégories
function genererCategoriesInterface() {
    const container = document.getElementById("liste-musiques-container");
    if (!container) return;
    
    container.innerHTML = ""; // Nettoyage de sécurité
    
    categoriesMusique.forEach(cat => {
        const catBtn = document.createElement("button");
        catBtn.className = "w-full text-left p-4 bg-white hover:bg-green-50 active:bg-green-100 rounded-xl border flex items-center justify-between transition group shadow-sm";
        catBtn.onclick = () => lancerPlaylistCategorie(cat.id);
        
        catBtn.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="text-xl group-hover:scale-110 transition-transform">${cat.icon}</span>
                <span class="text-xs font-bold text-gray-700">${cat.titre}</span>
            </div>
            <i class="fas fa-play text-xs text-gray-400 group-hover:text-green-600 transition-colors"></i>
        `;
        container.appendChild(catBtn);
    });
}

// Lance la lecture d'une catégorie et enchaîne ses pistes de façon séquentielle
function lancerPlaylistCategorie(catId) {
    const cible = categoriesMusique.find(c => c.id === catId);
    if (!cible || cible.tracks.length === 0) return;
    
    currentActivePlaylist = cible.tracks;
    currentTrackIndex = 0; // Remise à zéro pour démarrer la playlist du début
    
    lancerPisteSpecifique(currentActivePlaylist[currentTrackIndex].title, currentActivePlaylist[currentTrackIndex].url);
}

// Joue la piste sélectionnée et configure l'écouteur de fin pour passer au morceau suivant automatiquement
function lancerPisteSpecifique(titre, url) {
    // Si un lecteur tourne déjà, on l'arrête proprement
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
            console.warn("Erreur de lecture audio : ", err);
            window.afficherToast ? window.afficherToast("⚠️ Appuie de nouveau pour lancer la musique") : alert("Appuie de nouveau pour lancer la musique");
        });
        
    // Écouteur de progression pour la barre d'avancement
    globalAudioElement.ontimeupdate = () => {
        const progressionBarre = document.getElementById("player-progress");
        if (progressionBarre && globalAudioElement.duration) {
            const pourcentage = (globalAudioElement.currentTime / globalAudioElement.duration) * 100;
            progressionBarre.style.width = `${pourcentage}%`;
        }
    };
    
    // CHAÎNAGE AUTOMATIQUE : Quand la piste se termine, passe au morceau suivant de la playlist
    globalAudioElement.onended = () => {
        currentTrackIndex++;
        if (currentTrackIndex < currentActivePlaylist.length) {
            const nextTrack = currentActivePlaylist[currentTrackIndex];
            lancerPisteSpecifique(nextTrack.title, nextTrack.url);
        } else {
            // Fin de la playlist complète, on réinitialise l'affichage
            isAudioPlaying = false;
            document.getElementById("zen-player-ui")?.classList.add("hidden");
        }
    };
}

// Aligne l'interface du mini-lecteur flottant
function synchroniserLecteurUI(titre) {
    const playerUI = document.getElementById("zen-player-ui");
    const labelTitre = document.getElementById("current-track-title");
    const déclencheurPlay = document.getElementById("player-play-trigger");
    
    if (playerUI) playerUI.classList.remove("hidden");
    if (labelTitre) labelTitre.innerText = titre;
    if (déclencheurPlay) {
        déclencheurPlay.innerHTML = isAudioPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    }
}

// Gère l'action de pause/reprise sur le mini-lecteur actif
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

// Initialisation dès que le script se charge en mémoire
document.addEventListener("DOMContentLoaded", initialiserEspaceZen);
// Lancement forcé au cas où le DOM est déjà chargé
if (document.readyState === "interactive" || document.readyState === "complete") {
    initialiserEspaceZen();
      }
          
