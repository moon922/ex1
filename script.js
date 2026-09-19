// Michuhol-gu Tourism Data & Interactive Logic

const attractions = [
  {
    id: "subong-park",
    category: "nature",
    title_en: "Subong Park & Starlight Walk",
    title_ko: "수봉공원 & 수봉별빛프로젝트",
    subtitle_en: "Panoramic Incheon night views & glowing lights",
    subtitle_ko: "인천 야경 명소 & 야간 경관 조명",
    tag: "Night View",
    image: "subong_park_night.jpg",
    desc_en: "Subong Park sits on Subong Mountain, offering stunning panoramic views of Incheon city. At night, it transforms into 'Starlight Park' with magical glowing light displays, walking paths, and peaceful nature.",
    desc_ko: "수봉산에 위치한 수봉공원은 인천 시내를 한눈에 조망할 수 있는 곳입니다. 밤이 되면 환상적인 빛의 예술인 '수봉별빛프로젝트'로 화려한 야경을 선사합니다.",
    address_en: "Subong-an-gil 84, Michuhol-gu, Incheon",
    address_ko: "인천광역시 미추홀구 수봉안길 84",
    subway: "Jemulpo Station (Line 1) - Exit 2, 15 min walk or Bus 511",
    duration: "1.5 - 2 Hours",
    fee: "Free Entrance",
    map_url: "https://map.kakao.com/link/search/수봉공원"
  },
  {
    id: "dohobu-cheongsa",
    category: "culture",
    title_en: "Incheon Dohobu Cheongsa",
    title_ko: "인천도호부관아",
    subtitle_en: "Joseon Dynasty government office & heritage",
    subtitle_ko: "조선시대 행정관청 & 전통문화 체험",
    tag: "Heritage",
    image: "dohobu_cheongsa.jpg",
    desc_en: "A historic venue representing the central government administration of Incheon during the Joseon Dynasty. Visitors can try traditional Korean games (Tuho, Neolttwigi), wear Hanbok, and admire traditional architecture.",
    desc_ko: "조선시대 인천 행정의 중심이었던 역사적인 유적지입니다. 전통 한옥 건축미와 함께 투호, 널뛰기 등 다양한 민속놀이와 문화 체험을 즐길 수 있습니다.",
    address_en: "136 매소홀로, Michuhol-gu, Incheon",
    address_ko: "인천광역시 미추홀구 매소홀로 136",
    subway: "Munhak Sports Complex Station (Incheon Line 1) - Exit 2, 8 min walk",
    duration: "1 Hour",
    fee: "Free Entrance",
    map_url: "https://map.kakao.com/link/search/인천도호부관아"
  },
  {
    id: "sinki-market",
    category: "food",
    title_en: "Sinki Traditional Market",
    title_ko: "신기시장",
    subtitle_en: "Brass coin 'Yeopjeon' food tour & street eats",
    subtitle_ko: "엽전 체험 & 전통시장 먹거리 탐방",
    tag: "Food & Shopping",
    image: "sinki_market.jpg",
    desc_en: "Famous for its traditional Brass Coin (Yeopjeon) experience! Exchange real money for traditional brass coins to buy delicious Korean street foods like Tteokbokki, Sundae, Dakgangjeong, and Hotteok.",
    desc_ko: "조선시대 엽전으로 음식을 사먹는 특색있는 체험이 가능한 전통시장입니다. 떡볶이, 닭강정, 족발, 전 등 맛있는 한국 길거리 음식이 가득합니다.",
    address_en: "Sinki-시장길 12, Michuhol-gu, Incheon",
    address_ko: "인천광역시 미추홀구 신기시장길 12",
    subway: "Citizen's Park Station (Incheon Line 2) or Bus 511 / 515 from Juan Station",
    duration: "1 - 2 Hours",
    fee: "Pay as you eat",
    map_url: "https://map.kakao.com/link/search/신기시장"
  },
  {
    id: "juan-underground",
    category: "shopping",
    title_en: "Juan Station Underground Shopping",
    title_ko: "주안역 지하상가 & 2030 거리",
    subtitle_en: "Trendy Korean fashion, cosmetics & nightlife",
    subtitle_ko: "트렌디한 패션, 화장품 & 젊음의 거리",
    tag: "Shopping & Nightlife",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80",
    desc_en: "One of the largest underground shopping complexes in Incheon. Perfect for finding affordable Korean fashion, K-beauty cosmetics, phone accessories, and experiencing vibrant youth dining and nightlife nearby.",
    desc_ko: "인천의 대표적인 지하쇼핑몰로 저렴하고 감각적인 의류, K-뷰티 화장품, 악세사리를 구입할 수 있습니다. 밖으로 나가면 번화한 2030 거리가 펼쳐집니다.",
    address_en: "Juan Station (Line 1 / Incheon Line 2), Michuhol-gu",
    address_ko: "인천광역시 미추홀구 주안로 95 (주안역 지하)",
    subway: "Directly connected to Juan Station (Line 1 & Incheon Line 2)",
    duration: "2 - 3 Hours",
    fee: "Free Access",
    map_url: "https://map.kakao.com/link/search/주안역 지하상가"
  },
  {
    id: "munhak-stadium",
    category: "spots",
    title_en: "Incheon Munhak Sports Complex",
    title_ko: "인천문학경기장 & SSG랜더스필드",
    subtitle_en: "K-Baseball excitement & outdoor activities",
    subtitle_ko: "K-프로야구 열기 & 문화 스포츠 공간",
    tag: "Sports & Culture",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
    desc_en: "Home of the SSG Landers KBO baseball team! Experience the incredible energy of Korean baseball culture, enjoy stadium snacks like fried chicken and beer, or walk around the spacious sports park.",
    desc_ko: "SSG 랜더스의 홈구장이 있는 대한민국 야구의 성지 중 하나입니다. 치맥과 함께 열정적인 K-야구 응원 문화를 경험할 수 있습니다.",
    address_en: "618 Maesohol-ro, Michuhol-gu, Incheon",
    address_ko: "인천광역시 미추홀구 매소홀로 618",
    subway: "Munhak Sports Complex Station (Incheon Line 1) - Exit 2",
    duration: "3 - 4 Hours (Match day)",
    fee: "Varies by match / Park area free",
    map_url: "https://map.kakao.com/link/search/인천문학경기장"
  },
  {
    id: "soosambong-san",
    category: "nature",
    title_en: "Sutgol Neighborhood Park & Trails",
    title_ko: "쑥골 어린이공원 & 도심 산책로",
    subtitle_en: "Relaxing neighborhood greenery & cozy cafes",
    subtitle_ko: "도심속 휴식 공간 & 아늑한 카페",
    tag: "Relaxation",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    desc_en: "A cozy neighborhood sanctuary featuring peaceful trees, rest areas, and local cafes. A great spot to take a slow morning stroll and observe authentic daily life in Michuhol-gu.",
    desc_ko: "조용하고 평화로운 도심 속 녹지 공간입니다. 현지 주민들의 일상을 느끼며 여유로운 산책과 인근 카페 탐방을 즐길 수 있습니다.",
    address_en: "Jemulpo Area, Michuhol-gu, Incheon",
    address_ko: "인천광역시 미추홀구 숭의동 일대",
    subway: "Jemulpo Station (Line 1) - Exit 1",
    duration: "1 Hour",
    fee: "Free",
    map_url: "https://map.kakao.com/link/search/제물포역"
  }
];

// Current State
let currentLang = 'en';
let currentFilter = 'all';
let favorites = JSON.parse(localStorage.getItem('michuhol_favs') || '[]');

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  renderAttractions();
  setupEventListeners();
  updateFavoritesBadge();
});

function renderAttractions() {
  const container = document.getElementById('attractions-grid');
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

  const filtered = attractions.filter(item => {
    const matchesFilter = currentFilter === 'all' || item.category === currentFilter;
    const title = currentLang === 'en' ? item.title_en : item.title_ko;
    const desc = currentLang === 'en' ? item.desc_en : item.desc_ko;
    const matchesSearch = title.toLowerCase().includes(searchTerm) || desc.toLowerCase().includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <h3>No places found</h3>
        <p>Try searching for a different keyword or category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isFav = favorites.includes(item.id);
    const title = currentLang === 'en' ? item.title_en : item.title_ko;
    const sub = currentLang === 'en' ? item.subtitle_en : item.subtitle_ko;
    const desc = currentLang === 'en' ? item.desc_en : item.desc_ko;

    return `
      <div class="card">
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${title}" class="card-img" loading="lazy">
          <span class="card-tag">${item.tag}</span>
          <button class="bookmark-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${item.id}', event)" title="Save to Favorites">
            ★
          </button>
        </div>
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <div class="card-sub">${sub}</div>
          <p class="card-desc">${desc}</p>
          <div class="card-meta">
            <span>📍 ${item.fee}</span>
            <button class="card-action-btn" onclick="openModal('${item.id}')">
              ${currentLang === 'en' ? 'Explore Details →' : '자세히 보기 →'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function setupEventListeners() {
  // Search input event listener
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', renderAttractions);
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.filter;
      renderAttractions();
    });
  });

  // Language Toggle Button
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ko' : 'en';
      langBtn.textContent = currentLang === 'en' ? '🌐 KOR' : '🌐 ENG';
      updatePageLanguageText();
      renderAttractions();
    });
  }

  // Favorites Drawer Button
  const favBtn = document.getElementById('fav-toggle-btn');
  if (favBtn) {
    favBtn.addEventListener('click', showFavoritesModal);
  }
}

function toggleFavorite(id, event) {
  event.stopPropagation();
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('michuhol_favs', JSON.stringify(favorites));
  updateFavoritesBadge();
  renderAttractions();
}

function updateFavoritesBadge() {
  const badge = document.getElementById('fav-count');
  if (badge) {
    badge.textContent = favorites.length;
  }
}

function openModal(id) {
  const item = attractions.find(a => a.id === id);
  if (!item) return;

  const modal = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');

  const title = currentLang === 'en' ? item.title_en : item.title_ko;
  const desc = currentLang === 'en' ? item.desc_en : item.desc_ko;
  const address = currentLang === 'en' ? item.address_en : item.address_ko;

  modalBody.innerHTML = `
    <img src="${item.image}" alt="${title}" class="modal-header-img">
    <div class="modal-content">
      <div class="badge">${item.tag}</div>
      <h2 class="modal-title">${title}</h2>
      <p style="color: var(--accent-secondary); font-weight: 600; margin-bottom: 1rem;">
        ${currentLang === 'en' ? item.subtitle_en : item.subtitle_ko}
      </p>

      <p style="color: var(--text-main); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
        ${desc}
      </p>

      <div class="modal-info-bar">
        <div class="modal-info-item">
          <span>🚇</span>
          <div>
            <strong>${currentLang === 'en' ? 'Public Transit' : '대중교통'}:</strong><br>
            ${item.subway}
          </div>
        </div>
      </div>

      <div class="modal-info-bar" style="margin-top: 0.5rem;">
        <div class="modal-info-item">
          <span>📍</span>
          <div>
            <strong>${currentLang === 'en' ? 'Address' : '주소'}:</strong><br>
            ${address}
          </div>
        </div>
      </div>

      <div class="modal-info-bar" style="margin-top: 0.5rem;">
        <div class="modal-info-item">
          <span>⏱️</span>
          <div>
            <strong>${currentLang === 'en' ? 'Suggested Duration' : '권장 소요시간'}:</strong> ${item.duration}
          </div>
        </div>
        <div class="modal-info-item" style="margin-left: auto;">
          <span>🎟️</span>
          <div>
            <strong>${currentLang === 'en' ? 'Fee' : '입장료'}:</strong> ${item.fee}
          </div>
        </div>
      </div>

      <a href="${item.map_url}" target="_blank" rel="noopener noreferrer" class="modal-map-link">
        🗺️ ${currentLang === 'en' ? 'Open in Kakao Map' : '카카오맵에서 위치 보기'}
      </a>
    </div>
  `;

  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('modal-overlay');
  if (modal) modal.classList.remove('active');
}

function showFavoritesModal() {
  const modal = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');

  const favItems = attractions.filter(a => favorites.includes(a.id));

  modalBody.innerHTML = `
    <div class="modal-content" style="padding-top: 3rem;">
      <h2 class="modal-title">❤️ ${currentLang === 'en' ? 'Saved Favorite Places' : '보관함'}</h2>
      <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
        ${currentLang === 'en' ? 'Places you bookmarked for your trip in Michuhol-gu.' : '여행 전 저장해둔 미추홀구 명소 목록입니다.'}
      </p>

      ${favItems.length === 0 ? `
        <div style="text-align: center; padding: 3rem 0; color: var(--text-muted);">
          <p>${currentLang === 'en' ? 'No saved items yet! Click the star icon on any place to save it.' : '아직 저장된 장소가 없습니다. 명소 카드의 별 아이콘을 눌러 저장해보세요.'}</p>
        </div>
      ` : `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${favItems.map(item => `
            <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-primary); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
              <div style="display: flex; align-items: center; gap: 1rem;">
                <img src="${item.image}" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;">
                <div>
                  <h4 style="font-size: 1rem; margin-bottom: 0.2rem;">${currentLang === 'en' ? item.title_en : item.title_ko}</h4>
                  <span style="font-size: 0.8rem; color: var(--accent-primary);">${item.tag}</span>
                </div>
              </div>
              <button class="btn-icon" onclick="openModal('${item.id}')">${currentLang === 'en' ? 'View' : '보기'}</button>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;

  modal.classList.add('active');
}

function updatePageLanguageText() {
  const isEn = currentLang === 'en';
  document.getElementById('hero-badge').textContent = isEn ? '✨ Official Foreigner Tourism Guide' : '✨ 외국인 관광객 공식 가이드';
  document.getElementById('hero-title').innerHTML = isEn 
    ? 'Discover <span>Michuhol-gu</span>, The Heart of Incheon' 
    : '인천의 중심, <span>미추홀구</span>를 만나다';
  document.getElementById('hero-desc').textContent = isEn 
    ? 'Explore historic heritage, glowing night park views, authentic traditional food markets, and vibrant shopping streets in Incheon Michuhol-gu.'
    : '역사적인 유적지, 환상적인 야경 공원, 정겨운 전통시장과 활기찬 쇼핑거리까지 미추홀구의 특별한 매력을 탐험하세요.';
}
