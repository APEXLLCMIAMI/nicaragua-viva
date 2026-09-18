/* =====================================================
   NICARAGUA VIVA — JavaScript Principal
   Funcionalidades: Buscador, Filtros, Mapa, FAQ,
   Galería, Formulario, Audio, Animaciones
   ===================================================== */

'use strict';

// ============================================================
// INICIALIZACIÓN PRINCIPAL
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initSearch();
  initFilters();
  initDepartmentCards();
  initRegionButtons();
  initTravelerQuiz();
  initItinerary();
  initFAQ();
  initGallery();
  initLightbox();
  initForm();
  initScrollAnimations();
  initMap();
  initFoodCards();
  renderDepartmentCards();
  renderFoodSection();
  renderGastronomy();
  renderPostcards();
  initSmoothScroll();
  initBackToTop();
});

// ============================================================
// HEADER — Sticky & Scroll Effect
// ============================================================
function initHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ============================================================
// MOBILE MENU
// ============================================================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen.toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Cerrar al hacer click en un enlace
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// ============================================================
// BÚSQUEDA FUNCIONAL
// ============================================================
function initSearch() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchBtn = document.getElementById('search-btn');
  if (!searchInput || !searchResults) return;

  const allData = NICARAGUA_DATA;
  let searchTimeout;

  const searchIndex = buildSearchIndex(allData);

  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    const query = searchInput.value.trim().toLowerCase();

    if (query.length < 2) {
      searchResults.classList.remove('visible');
      return;
    }

    searchTimeout = setTimeout(() => {
      const results = performSearch(query, searchIndex);
      renderSearchResults(results, searchResults, query);
    }, 200);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchResults.classList.remove('visible');
      searchInput.value = '';
    }
    if (e.key === 'Enter') {
      const query = searchInput.value.trim().toLowerCase();
      if (query.length > 0) {
        const results = performSearch(query, searchIndex);
        renderSearchResults(results, searchResults, query);
      }
    }
  });

  // Cerrar al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.remove('visible');
    }
  });

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (query.length > 1) {
        const results = performSearch(query, searchIndex);
        renderSearchResults(results, searchResults, query);
      }
    });
  }
}

function buildSearchIndex(data) {
  const index = [];

  // Departamentos
  data.departments.forEach(dept => {
    index.push({
      id: dept.id,
      title: dept.name,
      type: 'Departamento',
      icon: '🗺️',
      keywords: [
        dept.name,
        dept.regionName,
        dept.tagline,
        dept.climate,
        ...(dept.tourismTypes || []),
        ...(dept.highlights || []),
        ...(dept.activities || []),
        ...(dept.tags || [])
      ].join(' ').toLowerCase(),
      action: () => openDeptModal(dept.id)
    });

    // Atractivos
    dept.attractions?.forEach(attr => {
      index.push({
        id: `attr-${dept.id}-${attr.name}`,
        title: attr.name,
        subtitle: `En ${dept.name}`,
        type: 'Atractivo',
        icon: '📍',
        keywords: [
          attr.name,
          dept.name,
          attr.type,
          attr.description,
          ...(attr.activities || []),
          ...(attr.tags || [])
        ].join(' ').toLowerCase(),
        action: () => openDeptModal(dept.id)
      });
    });

    // Gastronomía departamental
    dept.gastronomy?.forEach(food => {
      index.push({
        id: `food-${dept.id}-${food.name}`,
        title: food.name,
        subtitle: `Gastronomía de ${dept.name}`,
        type: 'Gastronomía',
        icon: '🍽️',
        keywords: [
          food.name,
          dept.name,
          food.description,
          ...(food.ingredients || [])
        ].join(' ').toLowerCase(),
        action: () => openDeptModal(dept.id)
      });
    });
  });

  // Gastronomía general
  data.gastronomy.forEach(food => {
    index.push({
      id: `gastronomy-${food.id}`,
      title: food.name,
      subtitle: food.region,
      type: 'Gastronomía',
      icon: '🍽️',
      keywords: [
        food.name,
        food.category,
        food.description,
        food.region,
        food.context,
        ...(food.ingredients || [])
      ].join(' ').toLowerCase(),
      action: () => scrollToSection('gastronomia')
    });
  });

  // Actividades
  data.activities.forEach(act => {
    index.push({
      id: `activity-${act.id}`,
      title: act.name,
      type: 'Actividad',
      icon: act.icon,
      keywords: [act.name, act.id].join(' ').toLowerCase(),
      action: () => {
        const filterBtn = document.querySelector(`[data-filter="${act.id}"]`);
        if (filterBtn) { filterBtn.click(); scrollToSection('departamentos'); }
      }
    });
  });

  return index;
}

function performSearch(query, index) {
  const terms = query.split(' ').filter(t => t.length > 1);
  const results = index
    .map(item => {
      let score = 0;
      terms.forEach(term => {
        if (item.title.toLowerCase().includes(term)) score += 3;
        if (item.keywords.includes(term)) score += 1;
      });
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
  return results;
}

function renderSearchResults(results, container, query) {
  if (results.length === 0) {
    container.innerHTML = `
      <div class="search-result-item">
        <span class="search-result-icon">🔍</span>
        <div>
          <p class="search-result-title" style="color:rgba(255,255,255,0.6)">No se encontraron resultados para "<strong>${escapeHtml(query)}</strong>"</p>
          <p class="search-result-type">Prueba con: volcán, playa, café, surf, historia...</p>
        </div>
      </div>`;
  } else {
    container.innerHTML = results.map(r => `
      <div class="search-result-item" role="button" tabindex="0" data-result-id="${r.id}">
        <span class="search-result-icon">${r.icon}</span>
        <div>
          <p class="search-result-title">${highlightText(r.title, query)}</p>
          <p class="search-result-type">${r.type}${r.subtitle ? ' · ' + r.subtitle : ''}</p>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.search-result-item').forEach((el, i) => {
      const action = results[i]?.action;
      el.addEventListener('click', () => {
        action?.();
        container.classList.remove('visible');
        document.getElementById('search-input').value = '';
      });
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { action?.(); container.classList.remove('visible'); }
      });
    });
  }
  container.classList.add('visible');
}

function highlightText(text, query) {
  const terms = query.split(' ').filter(t => t.length > 1);
  let result = escapeHtml(text);
  terms.forEach(term => {
    const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
    result = result.replace(regex, '<mark style="background:rgba(116,198,157,0.3);border-radius:2px;padding:0 2px">$1</mark>');
  });
  return result;
}

// ============================================================
// FILTROS FUNCIONALES
// ============================================================
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      applyFilter(filter);
    });
  });
}

function applyFilter(filter) {
  const cards = document.querySelectorAll('[data-dept-id]');
  cards.forEach(card => {
    const tags = card.dataset.tags?.split(',') || [];
    if (filter === 'todos') {
      card.style.display = '';
      card.style.opacity = '1';
    } else if (tags.includes(filter)) {
      card.style.display = '';
      setTimeout(() => { card.style.opacity = '1'; }, 10);
    } else {
      card.style.opacity = '0.25';
    }
  });
}

// ============================================================
// RENDER DEPARTAMENTOS
// ============================================================
function renderDepartmentCards() {
  const container = document.getElementById('departments-grid');
  if (!container) return;

  const departments = NICARAGUA_DATA.departments;

  container.innerHTML = departments.map((dept, i) => {
    const isFeatured = i === 0 || i === 5;
    const imageUrl = dept.image || `https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800`;
    const tagsStr = dept.tags?.join(',') || '';
    const isCaribe = dept.isAutonomousRegion;

    return `
      <article class="dept-card${isFeatured ? ' dept-card-featured' : ''}"
               data-dept-id="${dept.id}"
               data-tags="${tagsStr}"
               role="button"
               tabindex="0"
               aria-label="Ver información sobre ${dept.name}"
               onclick="openDeptModal('${dept.id}')">
        <div class="dept-card-image">
          <img src="${imageUrl}"
               alt="Vista de ${dept.name}, Nicaragua"
               class="dept-img"
               loading="lazy">
          <div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(10,20,15,0.5) 0%, transparent 50%)"></div>
          <span class="dept-card-badge ${isCaribe ? 'autonomous-badge' : ''}">
            ${isCaribe ? 'Región Autónoma' : dept.regionName}
          </span>
        </div>
        <div class="dept-card-body">
          <h3 class="dept-card-name">${dept.name}</h3>
          <p class="dept-card-tagline">"${dept.tagline}"</p>
          <p class="dept-card-desc">${dept.description}</p>
          <div class="dept-card-highlights">
            ${dept.highlights?.slice(0, 3).map(h =>
      `<span class="dept-highlight-tag">${h}</span>`
    ).join('') || ''}
          </div>
          <div class="dept-card-footer">
            <button class="btn btn-verde btn-sm" onclick="event.stopPropagation();openDeptModal('${dept.id}')">
              Ver departamento →
            </button>
            <div style="display:flex;gap:4px;flex-wrap:wrap;">
              ${dept.tags?.slice(0, 2).map(tag =>
      `<span style="font-size:0.65rem;color:var(--color-gris);text-transform:uppercase;letter-spacing:0.05em">${tag}</span>`
    ).join(' · ') || ''}
            </div>
          </div>
        </div>
      </article>`;
  }).join('');

  // Keyboard accessibility
  container.querySelectorAll('[data-dept-id]').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDeptModal(card.dataset.deptId);
      }
    });
  });
}

// ============================================================
// MODAL DEPARTAMENTO
// ============================================================
function initDepartmentCards() {
  // Delegación de eventos desde el overlay
  const overlay = document.getElementById('dept-modal-overlay');
  if (!overlay) return;

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeDeptModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDeptModal();
  });
}

function openDeptModal(deptId) {
  const dept = NICARAGUA_DATA.departments.find(d => d.id === deptId);
  if (!dept) return;

  const overlay = document.getElementById('dept-modal-overlay');
  const modal = document.getElementById('dept-modal');
  if (!overlay || !modal) return;

  const imageUrl = dept.image || 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800';

  modal.innerHTML = `
    <div class="dept-modal-hero" role="img" aria-label="Imagen de ${dept.name}">
      <img src="${imageUrl}" alt="${dept.name}, Nicaragua" loading="eager">
      <div class="dept-modal-hero-overlay"></div>
      <div class="dept-modal-title">
        ${dept.isAutonomousRegion ? `<span class="autonomous-badge" style="display:inline-block;margin-bottom:8px">Región Autónoma</span>` : ''}
        <h2>${dept.name}</h2>
        <p>"${dept.tagline}"</p>
      </div>
      <button class="dept-modal-close" onclick="closeDeptModal()" aria-label="Cerrar">✕</button>
    </div>

    <div class="dept-modal-body">
      ${dept.isAutonomousRegion ? `<div class="autonomous-note" role="note">ℹ️ ${dept.autonomousNote}</div>` : ''}

      <p style="margin-bottom:var(--space-8);font-size:var(--text-base);line-height:1.8;color:var(--color-gris-oscuro)">${dept.description}</p>

      <!-- Datos rápidos -->
      <div class="dept-quick-facts">
        <div class="quick-fact">
          <p class="quick-fact-label">Región</p>
          <p class="quick-fact-value">${dept.regionName}</p>
        </div>
        <div class="quick-fact">
          <p class="quick-fact-label">Clima</p>
          <p class="quick-fact-value">${dept.climate}</p>
        </div>
        <div class="quick-fact">
          <p class="quick-fact-label">Turismo</p>
          <p class="quick-fact-value">${dept.tourismTypes?.join(', ') || 'Variado'}</p>
        </div>
      </div>

      <!-- Atractivos -->
      <h3 class="dept-section-title"><span>📍</span> Atracciones turísticas</h3>
      <div class="attractions-grid">
        ${dept.attractions?.map(attr => `
          <div class="attraction-card">
            <p class="attraction-type">${attr.type}</p>
            <h4 class="attraction-name">${attr.name}</h4>
            <p class="attraction-desc">${attr.description}</p>
            ${attr.activities?.length ? `
              <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:8px;">
                ${attr.activities.map(a => `<span class="dept-highlight-tag">${a}</span>`).join('')}
              </div>` : ''}
          </div>
        `).join('') || '<p class="text-gris">Información disponible próximamente.</p>'}
      </div>

      <!-- Gastronomía -->
      <h3 class="dept-section-title"><span>🍽️</span> Sabor local</h3>
      <p style="font-family:var(--font-titulo);font-style:italic;color:var(--color-terracota);font-size:var(--text-xl);margin-bottom:var(--space-5)">¿A qué sabe ${dept.name}?</p>
      <div class="food-cards">
        ${dept.gastronomy?.map(food => `
          <div class="food-card">
            <div class="food-card-icon">🍴</div>
            <div>
              <h4 class="food-card-name">${food.name}</h4>
              <p class="food-card-desc">${food.description}</p>
              <p style="font-size:var(--text-xs);color:var(--color-gris);margin-bottom:var(--space-2)">
                <strong>Dónde encontrarlo:</strong> ${food.where}
              </p>
              <div class="food-ingredients">
                ${food.ingredients?.map(i => `<span class="ingredient-tag">${i}</span>`).join('') || ''}
              </div>
            </div>
          </div>
        `).join('') || '<p class="text-gris">Información gastronómica disponible próximamente.</p>'}
      </div>

      <!-- Actividades -->
      <h3 class="dept-section-title"><span>⚡</span> ¿Qué se hace aquí?</h3>
      <div style="display:flex;flex-wrap:wrap;gap:var(--space-3);margin-bottom:var(--space-8)">
        ${dept.activities?.map(act =>
    `<span style="background:var(--color-arena);color:var(--color-verde-profundo);padding:var(--space-2) var(--space-4);border-radius:var(--radius-full);font-size:var(--text-sm);font-weight:600;border:1px solid rgba(45,106,79,0.2)">${act}</span>`
  ).join('') || ''}
      </div>

      <!-- Cultura -->
      ${dept.culture ? `
        <h3 class="dept-section-title"><span>🎭</span> Personalidad del lugar</h3>
        <p style="color:var(--color-gris-oscuro);line-height:1.8;margin-bottom:var(--space-8);font-size:var(--text-base)">${dept.culture}</p>
      ` : ''}

      <!-- Experiencias -->
      <h3 class="dept-section-title"><span>✨</span> No te puedes ir sin...</h3>
      <div class="experiences-list">
        ${dept.experiences?.map(exp => `
          <div class="experience-item">
            <div class="experience-check">✓</div>
            <p class="experience-text">${exp}</p>
          </div>
        `).join('') || ''}
      </div>

      <!-- CTA -->
      <div style="text-align:center;padding:var(--space-6);background:var(--color-arena-claro);border-radius:var(--radius-xl);margin-top:var(--space-4)">
        <p style="font-family:var(--font-titulo);font-size:var(--text-xl);color:var(--color-verde-profundo);margin-bottom:var(--space-4)">"El mejor momento para ir es cuando puedas."</p>
        <div style="display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
          <button class="btn btn-verde" onclick="closeDeptModal()">← Explorar otros destinos</button>
          <button class="btn btn-outline-verde" onclick="scrollToSection('mapa');closeDeptModal()">Ver en el mapa</button>
        </div>
      </div>
    </div>`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;
  modal.focus();
}

function closeDeptModal() {
  const overlay = document.getElementById('dept-modal-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Exponer globalmente
window.openDeptModal = openDeptModal;
window.closeDeptModal = closeDeptModal;

// ============================================================
// REGION BUTTONS
// ============================================================
function initRegionButtons() {
  document.querySelectorAll('[data-region-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const regionId = btn.dataset.regionFilter;
      scrollToSection('departamentos');
      setTimeout(() => {
        filterByRegion(regionId);
      }, 500);
    });
  });
}

function filterByRegion(regionId) {
  const cards = document.querySelectorAll('[data-dept-id]');
  cards.forEach(card => {
    const dept = NICARAGUA_DATA.departments.find(d => d.id === card.dataset.deptId);
    if (!dept) return;
    if (regionId === 'all' || dept.region === regionId) {
      card.style.display = '';
      card.style.opacity = '1';
    } else {
      card.style.opacity = '0.2';
    }
  });
}

// ============================================================
// QUIZ — ¿Qué tipo de viajero eres?
// ============================================================
function initTravelerQuiz() {
  const btns = document.querySelectorAll('.traveler-type-btn');
  const resultsSection = document.getElementById('quiz-results');
  if (!btns.length || !resultsSection) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const type = btn.dataset.type;
      renderQuizResults(type, resultsSection);
    });
  });
}

function renderQuizResults(type, container) {
  const typeData = NICARAGUA_DATA.travelerTypes[type];
  if (!typeData) return;

  const depts = NICARAGUA_DATA.departments.filter(d => typeData.departments.includes(d.id));

  container.innerHTML = `
    <div style="max-width:900px;margin:0 auto">
      <div style="text-align:center;margin-bottom:var(--space-8)">
        <p style="font-family:var(--font-titulo);font-size:var(--text-2xl);color:var(--color-verde-profundo);margin-bottom:var(--space-2)">${typeData.label}</p>
        <p style="color:var(--color-gris)">${typeData.description}</p>
        <p style="font-weight:700;color:var(--color-verde-natural);margin-top:var(--space-4)">Estos son tus destinos en Nicaragua:</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:var(--space-4)">
        ${depts.map(dept => `
          <div style="background:white;border-radius:var(--radius-xl);overflow:hidden;box-shadow:var(--shadow);cursor:pointer;transition:all 0.3s ease"
               onclick="openDeptModal('${dept.id}')"
               onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='var(--shadow-xl)'"
               onmouseout="this.style.transform='';this.style.boxShadow='var(--shadow)'">
            <div style="height:160px;overflow:hidden;position:relative">
              <img src="${dept.image || 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400'}"
                   alt="${dept.name}"
                   style="width:100%;height:100%;object-fit:cover"
                   loading="lazy">
              <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,20,15,0.7),transparent)"></div>
              <p style="position:absolute;bottom:12px;left:12px;color:white;font-family:var(--font-titulo);font-size:var(--text-xl);font-weight:700">${dept.name}</p>
            </div>
            <div style="padding:var(--space-5)">
              <p style="color:var(--color-terracota);font-style:italic;font-family:var(--font-titulo);font-size:var(--text-sm);margin-bottom:var(--space-2)">"${dept.tagline}"</p>
              <div style="display:flex;flex-wrap:wrap;gap:4px">
                ${dept.tourismTypes?.slice(0, 3).map(t => `<span style="background:var(--color-arena);color:var(--color-verde-selva);font-size:0.7rem;padding:2px 8px;border-radius:999px;font-weight:500">${t}</span>`).join('') || ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;

  container.classList.add('visible');
  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================================
// ITINERARIO
// ============================================================
function initItinerary() {
  const tabs = document.querySelectorAll('.itinerary-tab');
  const contents = document.querySelectorAll('.itinerary-content');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(`itinerary-${tab.dataset.itinerary}`);
      if (target) target.classList.add('active');
    });
  });
}

// ============================================================
// RENDER GASTRONOMÍA
// ============================================================
function renderFoodSection() {
  const container = document.getElementById('gastronomy-grid');
  if (!container) return;

  const foods = NICARAGUA_DATA.gastronomy;
  container.innerHTML = foods.map(food => `
    <article class="food-feature-card" onclick="openFoodModal('${food.id}')" role="button" tabindex="0"
             aria-label="Ver información sobre ${food.name}"
             onkeydown="if(event.key==='Enter')openFoodModal('${food.id}')">
      <img src="${food.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600'}"
           alt="${food.name}"
           class="food-feature-img"
           loading="lazy">
      <div class="food-feature-body">
        <p class="food-feature-category">${food.category}</p>
        <h3 class="food-feature-name">${food.name}</h3>
        <p class="food-feature-region">🗺️ ${food.region}</p>
      </div>
    </article>
  `).join('');
}

function initFoodCards() {
  const modal = document.getElementById('food-modal-overlay');
  if (!modal) return;
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeFoodModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeFoodModal();
  });
}

function openFoodModal(foodId) {
  const food = NICARAGUA_DATA.gastronomy.find(f => f.id === foodId);
  if (!food) return;

  const modal = document.getElementById('food-modal-overlay');
  const content = document.getElementById('food-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <button style="position:absolute;top:16px;right:16px;background:rgba(0,0,0,0.1);border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center" onclick="closeFoodModal()" aria-label="Cerrar">✕</button>
    <img src="${food.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800'}"
         alt="${food.name}"
         style="width:100%;height:240px;object-fit:cover;border-radius:var(--radius-2xl) var(--radius-2xl) 0 0"
         loading="lazy">
    <div style="padding:var(--space-8)">
      <span style="background:var(--color-arena);color:var(--color-verde-selva);font-size:var(--text-xs);font-weight:700;padding:2px 10px;border-radius:999px;text-transform:uppercase;letter-spacing:0.08em">${food.category}</span>
      <h2 style="font-family:var(--font-titulo);font-size:var(--text-3xl);margin:var(--space-3) 0 var(--space-2)">${food.name}</h2>
      <p style="color:var(--color-verde-natural);font-size:var(--text-sm);margin-bottom:var(--space-5)">🗺️ ${food.region}</p>
      <p style="color:var(--color-gris-oscuro);line-height:1.8;margin-bottom:var(--space-5)">${food.description}</p>
      <div style="background:var(--color-arena-claro);border-radius:var(--radius-xl);padding:var(--space-5);margin-bottom:var(--space-5)">
        <p style="font-weight:700;font-size:var(--text-sm);color:var(--color-verde-profundo);margin-bottom:var(--space-3)">Ingredientes principales:</p>
        <div style="display:flex;flex-wrap:wrap;gap:var(--space-2)">
          ${food.ingredients?.map(i => `<span class="ingredient-tag">${i}</span>`).join('') || ''}
        </div>
      </div>
      <p style="font-family:var(--font-titulo);font-style:italic;color:var(--color-gris);font-size:var(--text-base);line-height:1.7">"${food.context}"</p>
    </div>`;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeFoodModal() {
  const modal = document.getElementById('food-modal-overlay');
  if (modal) { modal.style.display = 'none'; document.body.style.overflow = ''; }
}

window.openFoodModal = openFoodModal;
window.closeFoodModal = closeFoodModal;

// ============================================================
// POSTCARDS RENDER
// ============================================================
function renderPostcards() {
  const container = document.getElementById('postcards-grid');
  if (!container) return;

  const icons = { 'Un olor': '👃', 'Un sonido': '👂', 'Un sabor': '👅', 'Una tradición': '🎉', 'Un paisaje': '🏔️', 'Una frase': '💬' };

  container.innerHTML = NICARAGUA_DATA.postcards.map(pc => `
    <div class="postcard" data-animate>
      <p class="postcard-category">${icons[pc.category] || '🇳🇮'} ${pc.category}</p>
      <p class="postcard-content">"${pc.content}"</p>
      <p class="postcard-related">📌 ${pc.related}</p>
    </div>
  `).join('');
}

// ============================================================
// RENDER GASTRONOMÍA (sección dedicada - listado adicional)
// ============================================================
function renderGastronomy() {
  // La galería de comidas ya la maneja renderFoodSection()
  // Aquí podemos hacer render de items adicionales si hay una sección especial
}

// ============================================================
// FAQ — Accordion
// ============================================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Cerrar todos
      faqItems.forEach(i => i.classList.remove('open'));
      // Abrir el clicado si estaba cerrado
      if (!isOpen) item.classList.add('open');
    });

    // Keyboard nav
    question?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
}

// ============================================================
// GALERÍA FOTOGRÁFICA
// ============================================================
function initGallery() {
  // Solo necesitamos el lightbox para la galería
}

let currentLightboxIndex = 0;
let galleryImages = [];

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  if (!lightbox) return;

  // Recopilar imágenes de la galería
  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    const img = item.querySelector('.gallery-img');
    if (img) {
      galleryImages.push({ src: img.src, alt: img.alt });
      item.addEventListener('click', () => openLightbox(i));
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') openLightbox(i);
      });
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', `Ver imagen: ${img.alt}`);
    }
  });

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => navigateLightbox(-1));
  nextBtn?.addEventListener('click', () => navigateLightbox(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxImage();
  const lightbox = document.getElementById('lightbox');
  lightbox?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox?.classList.remove('open');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  currentLightboxIndex = (currentLightboxIndex + direction + galleryImages.length) % galleryImages.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const img = document.getElementById('lightbox-img');
  const current = galleryImages[currentLightboxIndex];
  if (img && current) {
    img.src = current.src;
    img.alt = current.alt;
  }
}

window.closeLightbox = closeLightbox;

// ============================================================
// FORMULARIO CON VALIDACIÓN
// ============================================================
function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(form)) {
      submitForm(form);
    }
  });

  // Validación en tiempo real
  form.querySelectorAll('.form-control').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) validateField(field);
    });
  });
}

function validateField(field) {
  const errorEl = document.getElementById(`${field.id}-error`);
  let valid = true;
  let errorMsg = '';

  if (field.required && !field.value.trim()) {
    valid = false;
    errorMsg = 'Este campo es obligatorio.';
  } else if (field.type === 'email' && field.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      valid = false;
      errorMsg = 'Por favor, introduce un correo electrónico válido.';
    }
  }

  if (!valid) {
    field.classList.add('error');
    if (errorEl) { errorEl.textContent = errorMsg; errorEl.classList.add('visible'); }
  } else {
    field.classList.remove('error');
    if (errorEl) errorEl.classList.remove('visible');
  }

  return valid;
}

function validateForm(form) {
  let isValid = true;
  form.querySelectorAll('.form-control[required]').forEach(field => {
    if (!validateField(field)) isValid = false;
  });
  return isValid;
}

function submitForm(form) {
  const successMsg = document.getElementById('form-success');
  form.style.display = 'none';
  if (successMsg) successMsg.classList.add('visible');

  // Simular reset después de 8 segundos
  setTimeout(() => {
    form.style.display = '';
    form.reset();
    if (successMsg) successMsg.classList.remove('visible');
  }, 8000);
}



// ============================================================
// MAPA INTERACTIVO DE NICARAGUA
// ============================================================
function initMap() {
  const mapContainer = document.getElementById('nicaragua-map');
  if (!mapContainer) return;

  const mapDepts = [
    {
      id: 'chinandega', name: 'Chinandega', color: '#c1440e', labelX: 108, labelY: 148,
      d: 'M 60,80 L 145,72 L 168,95 L 175,125 L 158,155 L 130,170 L 95,165 L 68,148 L 55,120 Z'
    },
    {
      id: 'leon', name: 'Leon', color: '#e63946', labelX: 162, labelY: 210,
      d: 'M 130,170 L 158,155 L 175,125 L 195,140 L 215,155 L 220,185 L 205,215 L 180,230 L 155,225 L 135,205 Z'
    },
    {
      id: 'nueva-segovia', name: 'N. Segovia', color: '#344e41', labelX: 228, labelY: 68,
      d: 'M 145,72 L 235,40 L 295,45 L 310,65 L 295,90 L 265,100 L 230,95 L 200,105 L 168,95 Z'
    },
    {
      id: 'madriz', name: 'Madriz', color: '#588157', labelX: 248, labelY: 120,
      d: 'M 200,105 L 230,95 L 265,100 L 280,120 L 268,140 L 245,148 L 218,140 L 205,125 Z'
    },
    {
      id: 'esteli', name: 'Esteli', color: '#606c38', labelX: 265, labelY: 170,
      d: 'M 218,140 L 245,148 L 268,140 L 285,158 L 278,185 L 258,195 L 232,190 L 215,175 Z'
    },
    {
      id: 'jinotega', name: 'Jinotega', color: '#1b4332', labelX: 340, labelY: 110,
      d: 'M 265,100 L 310,65 L 370,60 L 410,80 L 415,115 L 390,145 L 355,155 L 320,148 L 295,130 L 280,120 Z'
    },
    {
      id: 'matagalpa', name: 'Matagalpa', color: '#386641', labelX: 348, labelY: 195,
      d: 'M 278,185 L 285,158 L 320,148 L 355,155 L 390,145 L 400,175 L 388,210 L 358,225 L 322,222 L 295,210 Z'
    },
    {
      id: 'managua', name: 'Managua', color: '#e76f51', labelX: 214, labelY: 258,
      d: 'M 180,230 L 205,215 L 232,218 L 252,235 L 248,262 L 228,272 L 200,268 L 182,252 Z'
    },
    {
      id: 'masaya', name: 'Masaya', color: '#f4a261', labelX: 262, labelY: 275,
      d: 'M 248,262 L 270,258 L 280,272 L 270,285 L 252,285 L 244,275 Z'
    },
    {
      id: 'carazo', name: 'Carazo', color: '#8ecae6', labelX: 210, labelY: 292,
      d: 'M 182,275 L 200,268 L 228,272 L 244,275 L 240,295 L 220,308 L 196,305 L 182,290 Z'
    },
    {
      id: 'granada', name: 'Granada', color: '#e9c46a', labelX: 278, labelY: 305,
      d: 'M 252,285 L 270,285 L 292,295 L 298,315 L 282,328 L 260,322 L 250,305 Z'
    },
    {
      id: 'rivas', name: 'Rivas', color: '#52b788', labelX: 225, labelY: 348,
      d: 'M 196,305 L 220,308 L 240,295 L 250,305 L 260,322 L 252,350 L 235,375 L 210,380 L 192,360 L 188,335 Z'
    },
    {
      id: 'boaco', name: 'Boaco', color: '#bc6c25', labelX: 342, labelY: 262,
      d: 'M 295,210 L 322,222 L 358,225 L 372,248 L 365,272 L 338,280 L 310,272 L 295,252 Z'
    },
    {
      id: 'chontales', name: 'Chontales', color: '#9c6644', labelX: 368, labelY: 318,
      d: 'M 310,272 L 338,280 L 365,272 L 390,285 L 398,315 L 385,342 L 352,350 L 322,338 L 308,310 Z'
    },
    {
      id: 'rio-san-juan', name: 'Rio San Juan', color: '#0a7e3f', labelX: 358, labelY: 395,
      d: 'M 260,322 L 282,328 L 308,310 L 322,338 L 352,350 L 368,375 L 358,415 L 330,435 L 295,428 L 262,410 L 248,385 L 252,358 Z'
    },
    {
      id: 'costa-caribe-norte', name: 'Caribe Norte', color: '#0077b6', labelX: 530, labelY: 165,
      d: 'M 410,80 L 490,65 L 570,72 L 615,100 L 620,160 L 600,215 L 560,245 L 510,255 L 460,248 L 420,225 L 400,175 L 415,115 Z'
    },
    {
      id: 'costa-caribe-sur', name: 'Caribe Sur', color: '#00b4d8', labelX: 520, labelY: 355,
      d: 'M 398,315 L 420,225 L 460,248 L 510,255 L 560,245 L 575,290 L 580,350 L 558,405 L 520,440 L 475,455 L 430,448 L 400,420 L 385,375 Z'
    }
  ];

  let deptsHTML = '';
  for (const d of mapDepts) {
    deptsHTML += '<g class="map-dept-group" data-dept="' + d.id + '" role="button" tabindex="0" aria-label="' + d.name + '" style="cursor:pointer">' +
      '<path d="' + d.d + '" fill="' + d.color + '" opacity="0.82" stroke="rgba(255,255,255,0.35)" stroke-width="1" stroke-linejoin="round" class="map-dept-path" style="transition:opacity 0.2s,stroke-width 0.2s"/>' +
      '<text x="' + d.labelX + '" y="' + d.labelY + '" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="8.5" font-family="Inter,sans-serif" font-weight="700" style="pointer-events:none;text-shadow:0 1px 3px rgba(0,0,0,0.8)">' + d.name + '</text>' +
      '</g>';
  }

  mapContainer.innerHTML = '<svg viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;filter:drop-shadow(0 8px 24px rgba(0,0,0,0.4))" role="img" aria-label="Mapa interactivo de Nicaragua">' +
    '<rect width="680" height="480" fill="rgba(0,40,80,0.3)" rx="12"/>' +
    '<ellipse cx="282" cy="330" rx="48" ry="30" fill="rgba(0,119,182,0.55)" stroke="rgba(100,200,255,0.4)" stroke-width="1"/>' +
    '<text x="282" y="328" text-anchor="middle" fill="rgba(255,255,255,0.55)" font-size="7.5" font-family="Inter,sans-serif">Lago</text>' +
    '<text x="282" y="338" text-anchor="middle" fill="rgba(255,255,255,0.55)" font-size="7.5" font-family="Inter,sans-serif">Cocibolca</text>' +
    '<ellipse cx="200" cy="238" rx="24" ry="14" fill="rgba(0,119,182,0.45)" stroke="rgba(100,200,255,0.3)" stroke-width="1"/>' +
    '<text x="200" y="242" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-size="6" font-family="Inter,sans-serif">Xolotlan</text>' +
    deptsHTML +
    '<text x="650" y="28" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="13" font-family="Inter,sans-serif" font-weight="700">N</text>' +
    '<polygon points="650,32 645,48 650,44 655,48" fill="rgba(255,255,255,0.5)"/>' +
    '<rect x="12" y="440" width="10" height="10" rx="2" fill="#e63946" opacity="0.85"/>' +
    '<text x="26" y="449" fill="rgba(255,255,255,0.65)" font-size="9" font-family="Inter,sans-serif">Pacifico</text>' +
    '<rect x="78" y="440" width="10" height="10" rx="2" fill="#386641" opacity="0.85"/>' +
    '<text x="92" y="449" fill="rgba(255,255,255,0.65)" font-size="9" font-family="Inter,sans-serif">Central</text>' +
    '<rect x="144" y="440" width="10" height="10" rx="2" fill="#0077b6" opacity="0.85"/>' +
    '<text x="158" y="449" fill="rgba(255,255,255,0.65)" font-size="9" font-family="Inter,sans-serif">Caribe</text>' +
    '</svg>';

  const infoPanel = document.getElementById('map-dept-info');

  mapContainer.querySelectorAll('.map-dept-group').forEach(function (group) {
    const deptId = group.dataset.dept;
    const path = group.querySelector('.map-dept-path');

    const handleEnter = function () {
      if (path) { path.setAttribute('opacity', '1'); path.setAttribute('stroke-width', '2.5'); path.setAttribute('stroke', 'white'); }
      updateMapInfo(deptId, infoPanel);
    };
    const handleLeave = function () {
      if (path) { path.setAttribute('opacity', '0.82'); path.setAttribute('stroke-width', '1'); path.setAttribute('stroke', 'rgba(255,255,255,0.35)'); }
    };

    group.addEventListener('mouseenter', handleEnter);
    group.addEventListener('mouseleave', handleLeave);
    group.addEventListener('click', function () { openDeptModal(deptId); });
    group.addEventListener('focus', handleEnter);
    group.addEventListener('blur', handleLeave);
    group.addEventListener('keydown', function (e) { if (e.key === 'Enter') openDeptModal(deptId); });
  });
}

function updateMapInfo(deptId, panel) {
  if (!panel) return;
  const dept = NICARAGUA_DATA.departments.find(d => d.id === deptId);
  if (!dept) return;

  panel.innerHTML = `
    <h4>${dept.name}</h4>
    <p style="font-style:italic;color:rgba(255,255,255,0.6);margin-bottom:8px">"${dept.tagline}"</p>
    <p>${dept.description.slice(0, 200)}...</p>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;margin-top:8px">
      ${dept.highlights?.slice(0, 3).map(h => `<span style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.8);font-size:11px;padding:2px 8px;border-radius:999px">${h}</span>`).join('') || ''}
    </div>
    <button class="btn btn-verde btn-sm" onclick="openDeptModal('${dept.id}')">Explorar ${dept.name}</button>
  `;
}

// ============================================================
// SCROLL ANIMATIONS — Intersection Observer
// ============================================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ============================================================
// SMOOTH SCROLL PARA ANCLAS
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function scrollToSection(id) {
  const el = document.getElementById(id) || document.querySelector(`[data-section="${id}"]`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

window.scrollToSection = scrollToSection;

// ============================================================
// BACK TO TOP BUTTON
// ============================================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.style.opacity = window.scrollY > 600 ? '1' : '0';
    btn.style.pointerEvents = window.scrollY > 600 ? 'auto' : 'none';
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============================================================
// PARALLAX LIGERO EN HERO
// ============================================================
window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-video-bg');
  if (heroBg && window.scrollY < window.innerHeight) {
    heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
}, { passive: true });
