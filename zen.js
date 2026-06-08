// ==========================================
// CONFIGURATION DE L'ESPACE ZEN & LECTEUR INTERACTIF - SÉLECTION VALIDÉE
// ==========================================

const citationsZen = [
    { text: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.", author: "Winston Churchill" },
    { text: "La discipline est le pont entre les objectifs et la réussite.", author: "Jim Rohn" },
    { text: "Crois en toi-même et en tout ce que tu es. Sache qu'il y a en toi quelque chose de plus grand que n'importe quel obstacle.", author: "Christian D. Larson" },
    { text: "Il n'y a qu'un moyen d'échouer, c'est d'abandonner avant d'avoir réussi.", author: "Georges Clemenceau" },
    { text: "Le meilleur moyen de prédire l'avenir, c'est de le créer.", author: "Peter Drucker" }
];

const categoriesMusique = [
    {
        id: "islam",
        titre: "🕌 Récitations, Doua & Dhikr (Islam)",
        icon: "🕋",
        tracks: [
            { id: "is1", title: "Sourate Al-Fatiha - Récitation par Mishary Rashid Al-Afasy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "is2", title: "Ayat Al-Kursi (Verset du Trône) - Protection & Focus", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "is3", title: "Sourate Al-Mulk (La Royauté) - Sérénité de l'esprit", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "is4", title: "Doua Al-Afasy pour la réussite et la mémorisation", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { id: "is5", title: "Sourate Ar-Rahman - Récitation apaisante du cœur", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { id: "is6", title: "Doua de l'étudiant - Clarté d'esprit avant l'effort", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { id: "is7", title: "Dhikr Répété (SubhanAllah, Alhamdulillah) - Calme absolu", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { id: "is8", title: "Sourate Yassin - Récitation pour surmonter les épreuves", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { id: "is9", title: "Anachid Tala'al Badru Alayna - Voix pure sans instruments", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { id: "is10", title: "Doua du Matin - Ouverture des portes de la subsistance", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { id: "is11", title: "Récitation des 99 Noms d'Allah - Méditation spirituelle", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { id: "is12", title: "Sourate Al-Kahf (Extraits choisis) - Guidance et Lumière", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { id: "is13", title: "Doua contre le stress, l'angoisse et les blocages", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { id: "is14", title: "Dhikr Estighfar (Demande de pardon) - Paix de la conscience", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { id: "is15", title: "Sourate Al-Baqarah (Fin de la sourate) - Force spirituelle", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { id: "is16", title: "Appel à la prière (Adhan) - Récitation spirituelle douce", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { id: "is17", title: "Doua Al-Qunoot - Invocation fervente et profonde", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "is18", title: "Sourate Al-Ikhlas, Al-Falaq, An-Nas - Protection continue", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "is19", title: "Dhikr du Soir - Apaisement mental pré-sommeil", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "is20", title: "Doua de clôture - Remerciement pour l'effort accompli", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
        ]
    },
    {
        id: "chretien",
        titre: "✝️ Cantiques, Louange & Adoration (Chrétien)",
        icon: "⛪",
        tracks: [
            { id: "ch1", title: "Amazing Grace (Grâce Infinie) - Version Symphonique", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { id: "ch2", title: "10 000 Raisons (Bénis le Seigneur Ô mon âme) - Matt Redman", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { id: "ch3", title: "Oceans (Where Feet May Fail) - Hillsong Worship", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { id: "ch4", title: "Mon Dieu est si bon - Cantique traditionnel de foi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { id: "ch5", title: "Piano d'Adoration - Session instrumentale de recueillement", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { id: "ch6", title: "I Surrender All (Je t'abandonne tout) - Guitare acoustique", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { id: "ch7", title: "Medley Gospel Africain - Chants de victoire et de joie", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { id: "ch8", title: "Hosanna - Chant d'élévation spirituelle et de gloire", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { id: "ch9", title: "Voici le jour que le Seigneur a fait - Chœur traditionnel", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { id: "ch10", title: "Tu es Dieu (Alpha & Oméga) - Adoration universelle", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { id: "ch11", title: "How Great Is Our God (Combien Dieu est grand) - Chris Tomlin", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { id: "ch12", title: "Je t'exalte Ô mon Roi - Hymne classique d'assemblée", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { id: "ch13", title: "Sainte Présence - Nappe musicale d'intercession et calme", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "ch14", title: "Le Dieu des miracles - Chant de persévérance et de foi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "ch15", title: "Violon & Piano - Musique de dévotion matinale", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "ch16", title: "Abba Père (Mon abri secret) - Chant d'intimité profonde", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { id: "ch17", title: "Chœur Grégorien - Immersion spirituelle et clarté d'esprit", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { id: "ch18", title: "Agneau de Dieu (Worthy Is the Lamb) - Chant de révérence", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { id: "ch19", title: "Jésus, Espoir du monde - Chant chorale de rassemblement", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { id: "ch20", title: "Cantique Final - Bénédiction et paix suprême sur l'âme", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
        ]
    },
    {
        id: "tiktok",
        titre: "🎵 ✨ Tendance Hits & Pop (TikTok Style)",
        icon: "🕺",
        tracks: [
            { id: "tk1", title: "TikTok Global Viral LoFi - Ambiance chill", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { id: "tk2", title: "Trending Mashup Mix 2026 - Rythmes actuels doux", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { id: "tk3", title: "Aesthetic Chill Vibes - Fond sonore relaxant", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { id: "tk4", title: "Upbeat Pop Study Break - Pause dynamique", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { id: "tk5", title: "Synthwave Vintage Loop - Focus rétro moderne", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { id: "tk6", title: "Speed Up Radio Hits (Instrumental) - Énergie soft", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { id: "tk7", title: "Slowed & Reverb Melancholy - Pour dev la nuit", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "tk8", title: "Catchy Bassline Drive - Rythme régulier d'écriture", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "tk9", title: "Summer Anthems Reimagined - Ambiance solaire", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "tk10", title: "Clubhouse Acoustic Session - Guitare légère", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { id: "tk11", title: "HipHop Chill Trend - Beats relaxants pour révisions", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { id: "tk12", title: "Future Bass Study Hype - Motivation moderne", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { id: "tk13", title: "Sad Boy Hours Piano Version - Concentration melodic", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { id: "tk14", title: "Vibes d'Afrique - Afrobeat Chill Trend", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { id: "tk15", title: "Hyperpop Clean Focus - Rythme électronique linéaire", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { id: "tk16", title: "Groovy Modern Funk Beats - Énergie positive", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { id: "tk17", title: "Tropical House Study Chills - Évasion et focus", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { id: "tk18", title: "Viral Piano Cover Medley - Reprises célèbres", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { id: "tk19", title: "Cyberpunk Neon Energy - Immersion code intense", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { id: "tk20", title: "Indie Pop Sunset Ride - Fin de session tranquille", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" }
        ]
    },
    {
        id: "sport",
        titre: "🔥 Détermination & Force (Motivation Mentale)",
        icon: "🦖",
        tracks: [
            { id: "sp1", title: "Mindset de Guerrier - Discours d'impact & Rythme lourd", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "sp2", title: "Epic Cinematic Workout - Tambours de guerre orchestraux", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "sp3", title: "Aggressive Gym Hype - Beats percutants anti-abandon", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "sp4", title: "Power & Focus - Motivation mentale sans concession", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { id: "sp5", title: "Never Give Up - Hard Bass de relance d'effort", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { id: "sp6", title: "Beast Mode Activated - Énergie pure de ligne droite", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { id: "sp7", title: "Iron Paradise Theme - Détermination brute de leader", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { id: "sp8", title: "No Pain No Gain Beat - Cadence militaire de focus", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { id: "sp9", title: "Victory Lap Chronicles - Musique triomphale de succès", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { id: "sp10", title: "Limitless Energy Stream - Flux d'adrénaline continu", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { id: "sp11", title: "Warrior Spirit Sound - Éveil de la force de travail", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { id: "sp12", title: "Push It to the Edge - Accélération du rythme d'exécution", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { id: "sp13", title: "Alpha Mindset Music - Idéal pour le focus d'élite", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { id: "sp14", title: "Rising Champion Loop - Montée en puissance mentale", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { id: "sp15", title: "Thunder Dome Gym Mix - Énergie brute entraînante", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { id: "sp16", title: "Ultimate Focus Trax - Concentration maximale sous pression", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { id: "sp17", title: "Heavy Duty Lifters - Musique sombre de persévérance", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "sp18", title: "Stamina Builder Music - Idéal pour endurer les longues nuits", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "sp19", title: "Grind & Shine Everyday - Rappel rythmique de discipline", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "sp20", title: "Final Round Countdown - Clôture de session en vainqueur", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
        ]
    },
    {
        id: "alpha",
        titre: "🧠 Ondes Alpha & Focus Intellectuel (Étude)",
        icon: "🧬",
        tracks: [
            { id: "al1", title: "Ondes Alpha 8Hz - Focus Absolu et hyper-apprentissage", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { id: "al2", title: "Binaural Beats - Stimulation synaptique pour la mémoire", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { id: "al3", title: "Deep Focus Ambient Spaces - Isolation phonique mentale", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "al4", title: "Rain Sound + Piano Cozy - Atmosphère de bibliothèque", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "al5", title: "Super Intelligence Frequency - Augmentation d'attention", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { id: "al6", title: "Studying In Tokyo (Lofi Focus) - Rythme d'étude calme", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { id: "al7", title: "Brain Stimulation Session - Amélioration cognitive", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
            { id: "al8", title: "Minimalist Coding Beats - Idéal pour aligner le code", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
            { id: "al9", title: "Zen Garden Relaxation - Paix de l'esprit pré-examen", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
            { id: "al10", title: "Cosmic Reading Atmosphere - Sons profonds de lecture", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
            { id: "al11", title: "Neuroscience Flow State - Activation de la zone de concentration", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
            { id: "al12", title: "Soft Thunderstorm Focus - Pluie fine anti-bruits extérieurs", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
            { id: "al13", title: "White Noise Pure Isolation - Blocage total de l'environnement", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
            { id: "al14", title: "Chilling In the Library Piano - Accords calmes et inspirants", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
            { id: "al15", title: "Spatial Audio Focus Engine - Immersion à 360 degrés", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
            { id: "al16", title: "Cognitive Boost Melodies - Rythmes mathématiques", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
            { id: "al17", title: "Endless Horizon Chillwave - Nappe linéaire de concentration", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
            { id: "al18", title: "Sublime Concentration Loop - Zéro distraction", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
            { id: "al19", title: "Astral Projection Study - Sons éthérés d'assimilation", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "al20", title: "Deep Sleep & Study Wave - Resynchronisation des ondes", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
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
