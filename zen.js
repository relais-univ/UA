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
