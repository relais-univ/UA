// =========================================================================
// ESPACE ZEN & MOTIVATION (100% INDÉPENDANT ET SANS ERREUR)
// =========================================================================
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
    const jourDeLAnnee = Math.floor((maintenant - new Date(maintenant.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const selection = LISTE_CITATIONS[jourDeLAnnee % LISTE_CITATIONS.length];

    txtElem.innerText = selection.texte;
    authElem.innerText = `— ${selection.auteur}`;
}

function playZenMusic(url, titre, buttonElement) {
    const playerUi = document.getElementById('zen-player-ui');
    const titleUi = document.getElementById('current-track-title');
    const triggerIcon = document.getElementById('player-play-trigger')?.querySelector('i');

    document.querySelectorAll('.music-btn').forEach(btn => {
        btn.querySelector('.stream-icon').className = "fas fa-play text-gray-400 stream-icon";
        btn.classList.remove('bg-green-50', 'border-green-300');
    });

    if (zenAudio && zenAudio.src === url) {
        if (!zenAudio.paused) {
            zenAudio.pause();
            if (triggerIcon) triggerIcon.className = "fas fa-play";
            buttonElement.querySelector('.stream-icon').className = "fas fa-play text-gray-400 stream-icon";
        } else {
            zenAudio.play().catch(e => console.log("Lecture bloquée"));
            if (triggerIcon) triggerIcon.className = "fas fa-pause";
            buttonElement.querySelector('.stream-icon').className = "fas fa-volume-up text-green-600 stream-icon";
            buttonElement.classList.add('bg-green-50', 'border-green-300');
        }
        return;
    }

    if (zenAudio) {
        zenAudio.pause();
        zenAudio = null;
    }

    zenAudio = new Audio(url);
    zenAudio.preload = "none";
    currentMusicBtn = buttonElement;

    if (titleUi) titleUi.innerText = titre;
    if (playerUi) playerUi.classList.remove('hidden');

    zenAudio.play().then(() => {
        if (triggerIcon) triggerIcon.className = "fas fa-pause";
        buttonElement.querySelector('.stream-icon').className = "fas fa-volume-up text-green-600 stream-icon";
        buttonElement.classList.add('bg-green-50', 'border-green-300');
    }).catch(err => {
        showToast("🔊 Appuyez à nouveau pour lancer la musique");
    });
}

function toggleZenPlayback() {
    if (!zenAudio) return;
    const triggerIcon = document.getElementById('player-play-trigger')?.querySelector('i');
    
    if (!zenAudio.paused) {
        zenAudio.pause();
        if (triggerIcon) triggerIcon.className = "fas fa-play";
        if (currentMusicBtn) currentMusicBtn.querySelector('.stream-icon').className = "fas fa-play text-gray-400 stream-icon";
    } else {
        zenAudio.play().catch(e => console.log("Erreur"));
        if (triggerIcon) triggerIcon.className = "fas fa-pause";
        if (currentMusicBtn) currentMusicBtn.querySelector('.stream-icon').className = "fas fa-volume-up text-green-600 stream-icon";
    }
}

function telechargerIA() { showToast("💡 Espace Réussite synchronisé !"); }
      
