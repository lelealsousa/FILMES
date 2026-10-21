// Catálogo configurado com os trailers enviados do YouTube
const catalog = {
    hero: {
        title: "Stranger Things",
        desc: "Quando um jovem garoto desaparece, uma pequena cidade descobre um mistério envolvendo experimentos secretos, forças sobrenaturais e uma garota com poderes.",
        cover: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1200&auto=format&fit=crop",
        youtubeEmbed: "https://www.youtube.com/embed/RMmGQNNl164?autoplay=1"
    },
    series: [
        {
            title: "Stranger Things",
            rating: "9.2",
            year: "2016",
            cover: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop",
            youtubeEmbed: "https://www.youtube.com/embed/RMmGQNNl164?autoplay=1",
            desc: "Acontece em Hawkins na década de 1980, quando um garoto desaparece em circunstâncias misteriosas e uma garota com habilidades psíquicas aparece para ajudar seus amigos."
        },
        {
            title: "Henry Danger",
            rating: "8.6",
            year: "2014",
            cover: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop",
            youtubeEmbed: "https://www.youtube.com/embed/fn-06vvRebo?autoplay=1",
            desc: "Henry Hart, de 13 anos, consegue um emprego de meio período como Kid Danger, o parceiro do super-herói invencível Captain Man."
        },
        {
            title: "Outer Banks",
            rating: "8.8",
            year: "2020",
            cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
            youtubeEmbed: "https://youtu.be/pfY3j-3uQhk?si=mfvRWjZ58Smz3II9",
            desc: "Um grupo de adolescentes locais embarca em uma caça ao tesouro que revela um segredo há muito enterrado na comunidade das ilhas de Outer Banks."
        }
    ]
};

// Elementos do DOM
const heroBanner = document.getElementById('heroBanner');
const heroTitle = document.getElementById('heroTitle');
const heroDescription = document.getElementById('heroDescription');
const heroPlayBtn = document.getElementById('heroPlayBtn');

const seriesGrid = document.getElementById('seriesGrid');

const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const youtubeIframe = document.getElementById('youtubeIframe');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

// Inicializa Ícones
lucide.createIcons();

// Configura o Hero Banner
function initHero() {
    heroBanner.style.backgroundImage = `url('${catalog.hero.cover}')`;
    heroTitle.textContent = catalog.hero.title;
    heroDescription.textContent = catalog.hero.desc;

    heroPlayBtn.addEventListener('click', () => {
        openPlayer(catalog.hero.title, catalog.hero.desc, catalog.hero.youtubeEmbed);
    });
}

// Cria os Cards de Mídia
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'media-card';
    card.innerHTML = `
        <img src="${item.cover}" alt="${item.title}">
        <div class="card-play-icon">
            <i data-lucide="play"></i>
        </div>
        <div class="card-overlay">
            <h4 class="card-title">${item.title}</h4>
            <div class="card-info">
                <span>★ ${item.rating}</span>
                <span>•</span>
                <span>${item.year}</span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        openPlayer(item.title, item.desc, item.youtubeEmbed);
    });

    return card;
}

// Renderiza a Galeria
function renderCatalog() {
    seriesGrid.innerHTML = "";
    catalog.series.forEach(item => {
        seriesGrid.appendChild(createCard(item));
    });

    lucide.createIcons();
}

// Abrir Modal e Carregar Trailer do YouTube
function openPlayer(title, desc, youtubeEmbed) {
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    youtubeIframe.src = youtubeEmbed;
    videoModal.classList.add('active');
}

// Fechar Modal e Limpar o src para parar o áudio do YouTube
function closePlayer() {
    videoModal.classList.remove('active');
    youtubeIframe.src = ""; // Para a reprodução do vídeo
}

closeModal.addEventListener('click', closePlayer);

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closePlayer();
    }
});

// Inicialização
initHero();
renderCatalog();