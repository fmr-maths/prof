const LEVEL_LABELS = { "6e": "6e", "5e": "5e", "4e": "4e" };

function render() {
  const hash = window.location.hash.replace('#', '');
  const main = document.getElementById('main');
  const crumbs = document.getElementById('crumbs');

  if (!hash) {
    renderHome(main, crumbs);
  } else if (SITE_DATA[hash]) {
    renderLevel(main, crumbs, hash);
  } else {
    main.innerHTML = '<p class="empty">Page introuvable.</p>';
    crumbs.innerHTML = '<a href="#">Accueil</a>';
  }
  window.scrollTo(0, 0);
}

function renderHome(main, crumbs) {
  crumbs.innerHTML = '';
  const levels = Object.keys(SITE_DATA);
  const extras = (typeof EXTRA_LINKS !== 'undefined') ? EXTRA_LINKS : [];

  main.innerHTML = `
    <h2>Choisis ta classe</h2>
    <div class="grid">
      ${levels.map(lvl => `
        <a class="level-card" href="#${lvl}">
          ${LEVEL_LABELS[lvl]}
          <span class="count">${SITE_DATA[lvl].length} chapitre${SITE_DATA[lvl].length > 1 ? 's' : ''}</span>
        </a>
      `).join('')}
      ${extras.map(ex => `
        <a class="level-card" href="${ex.fichier}" target="_blank" rel="noopener">
          ${ex.titre}
        </a>
      `).join('')}
    </div>
  `;
}

function renderLevel(main, crumbs, lvl) {
  crumbs.innerHTML = `<a href="#">Accueil</a><span class="sep">/</span>${LEVEL_LABELS[lvl]}`;
  const chapters = SITE_DATA[lvl];

  if (!chapters.length) {
    main.innerHTML = `<h2>${LEVEL_LABELS[lvl]}</h2><p class="empty">Aucun chapitre en ligne pour l'instant.</p>`;
    return;
  }

  main.innerHTML = `
    <h2>${LEVEL_LABELS[lvl]}</h2>
    <div class="grid">
      ${chapters.map(ch => `
        <div class="chapter-card">
          <h3>${ch.titre}</h3>
          <div class="resource-row">
            ${resourceButton(ch.lecon, 'Leçon')}
            ${resourceButton(ch.corrections, 'Corrections')}
            ${resourceButton(ch.flash, 'Flash')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function resourceButton(link, label) {
  if (!link) {
    return `<span class="btn disabled">${label}</span>`;
  }
  return `<a class="btn" href="${link}" target="_blank" rel="noopener">${label}</a>`;
}

function checkAccess() {
  if (sessionStorage.getItem('authed') === 'yes') {
    showSite();
    return;
  }
  const gate = document.getElementById('gate');
  const main = document.getElementById('main');
  const crumbs = document.getElementById('crumbs');
  main.style.display = 'none';
  crumbs.style.display = 'none';
  gate.style.display = 'block';

  document.getElementById('gate-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('gate-input').value;
    if (input === SITE_PASSWORD) {
      sessionStorage.setItem('authed', 'yes');
      showSite();
    } else {
      document.getElementById('gate-error').style.display = 'block';
    }
  });
}

function showSite() {
  document.getElementById('gate').style.display = 'none';
  document.getElementById('main').style.display = '';
  document.getElementById('crumbs').style.display = '';
  render();
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', showSite);
