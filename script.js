const LEVEL_LABELS = { "6e": "6e", "5e": "5e", "4e": "4e" };

function render() {
  const hash = window.location.hash.replace('#', '');
  const main = document.getElementById('main');
  const crumbs = document.getElementById('crumbs');

  if (!hash) {
    renderHome(main, crumbs);
    window.scrollTo(0, 0);
    return;
  }

  // hash peut être "6e", "6e-chapitres" ou "6e-automatismes"
  const parts = hash.split('-');
  const lvl = parts[0];
  const section = parts[1]; // undefined, "chapitres" ou "automatismes"

  if (!SITE_DATA[lvl]) {
    main.innerHTML = '<p class="empty">Page introuvable.</p>';
    crumbs.innerHTML = '<a href="#">Accueil</a>';
    window.scrollTo(0, 0);
    return;
  }

  const hasAutomatismes = (typeof AUTOMATISMES_DATA !== 'undefined') && AUTOMATISMES_DATA[lvl];

  if (!section) {
    // "#6e" : si le niveau a des automatismes -> menu à 3 boutons
    // sinon (ex: 4e) -> comportement historique, liste des chapitres directe
    if (hasAutomatismes) {
      renderLevelMenu(main, crumbs, lvl);
    } else {
      renderChapitres(main, crumbs, lvl, { showMateriel: true });
    }
  } else if (section === 'chapitres') {
    renderChapitres(main, crumbs, lvl, { showMateriel: false });
  } else if (section === 'automatismes' && hasAutomatismes) {
    renderAutomatismes(main, crumbs, lvl);
  } else {
    main.innerHTML = '<p class="empty">Page introuvable.</p>';
    crumbs.innerHTML = '<a href="#">Accueil</a>';
  }

  window.scrollTo(0, 0);
  checkResourceLinks();
}

// Vérifie discrètement (en arrière-plan) si les fichiers locaux (pdfs/...)
// référencés par les boutons existent vraiment sur GitHub Pages.
// S'ils sont introuvables (404), le bouton passe en gris comme un bouton vide,
// au lieu de rester actif et de mener à un lien cassé.
// N'affecte que les liens locaux (pdfs/...) : les liens externes (https://...)
// restent inchangés, impossible de vérifier leur existence depuis le navigateur.
function checkResourceLinks() {
  const links = document.querySelectorAll('.btn[data-checkable]');
  links.forEach(link => {
    const href = link.getAttribute('href');
    fetch(href, { method: 'HEAD' })
      .then(res => {
        if (!res.ok) markAsMissing(link);
      })
      .catch(() => markAsMissing(link));
  });
}

function markAsMissing(link) {
  const span = document.createElement('span');
  span.className = 'btn disabled';
  span.textContent = link.textContent;
  link.replaceWith(span);
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

// Page niveau avec 3 boutons : Matériel / Chapitres / Automatismes
function renderLevelMenu(main, crumbs, lvl) {
  crumbs.innerHTML = `<a href="#">Accueil</a><span class="sep">/</span>${LEVEL_LABELS[lvl]}`;
  const materielLink = (typeof MATERIEL_LINKS !== 'undefined') ? MATERIEL_LINKS[lvl] : null;

  main.innerHTML = `
    <h2>${LEVEL_LABELS[lvl]}</h2>
    <div class="grid">
      ${materielLink ? `
        <a class="level-card" href="${materielLink}" target="_blank" rel="noopener">
          Matériel
        </a>
      ` : ''}
      <a class="level-card" href="#${lvl}-chapitres">
        Chapitres
        <span class="count">${SITE_DATA[lvl].length} chapitre${SITE_DATA[lvl].length > 1 ? 's' : ''}</span>
      </a>
      <a class="level-card" href="#${lvl}-automatismes">
        Automatismes
        <span class="count">${AUTOMATISMES_DATA[lvl].length} notion${AUTOMATISMES_DATA[lvl].length > 1 ? 's' : ''}</span>
      </a>
    </div>
  `;
}

// Liste des chapitres (boutons Leçon / Corrections / Flash à côté du titre)
function renderChapitres(main, crumbs, lvl, opts) {
  const hasAutomatismes = (typeof AUTOMATISMES_DATA !== 'undefined') && AUTOMATISMES_DATA[lvl];

  crumbs.innerHTML = hasAutomatismes
    ? `<a href="#">Accueil</a><span class="sep">/</span><a href="#${lvl}">${LEVEL_LABELS[lvl]}</a><span class="sep">/</span>Chapitres`
    : `<a href="#">Accueil</a><span class="sep">/</span>${LEVEL_LABELS[lvl]}`;

  const chapters = SITE_DATA[lvl];
  const materielLink = (typeof MATERIEL_LINKS !== 'undefined') ? MATERIEL_LINKS[lvl] : null;

  const materielButton = (opts.showMateriel && materielLink) ? `
    <a class="btn" href="${materielLink}" target="_blank" rel="noopener" style="display:inline-block; margin: 10px 0 22px; flex:none;">
      Matériel de mathématiques
    </a>
  ` : '';

  const titre = hasAutomatismes ? `${LEVEL_LABELS[lvl]} — Chapitres` : LEVEL_LABELS[lvl];

  if (!chapters.length) {
    main.innerHTML = `<h2>${titre}</h2>${materielButton}<p class="empty">Aucun chapitre en ligne pour l'instant.</p>`;
    return;
  }

  main.innerHTML = `
    <h2>${titre}</h2>
    ${materielButton}
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

// Liste des notions d'automatismes (boutons Image / Vidéo / Entraînement)
function renderAutomatismes(main, crumbs, lvl) {
  crumbs.innerHTML = `<a href="#">Accueil</a><span class="sep">/</span><a href="#${lvl}">${LEVEL_LABELS[lvl]}</a><span class="sep">/</span>Automatismes`;
  const notions = AUTOMATISMES_DATA[lvl];

  if (!notions.length) {
    main.innerHTML = `<h2>${LEVEL_LABELS[lvl]} — Automatismes</h2><p class="empty">Aucune notion en ligne pour l'instant.</p>`;
    return;
  }

  main.innerHTML = `
    <h2>${LEVEL_LABELS[lvl]} — Automatismes</h2>
    <div class="grid">
      ${notions.map(n => `
        <div class="chapter-card">
          <h3>${n.titre}</h3>
          <div class="resource-row">
            ${resourceButton(n.image, 'Image')}
            ${resourceButton(n.video, 'Vidéo')}
            ${resourceButton(n.entrainement, 'Entraînement')}
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
  // Les liens locaux (pdfs/...) sont marqués "vérifiables" : on contrôle
  // ensuite en arrière-plan qu'ils existent bien (voir checkResourceLinks).
  // Les liens externes (http/https) ne sont pas vérifiés (restrictions du navigateur).
  const isLocal = !/^https?:\/\//i.test(link);
  const checkAttr = isLocal ? ' data-checkable' : '';
  return `<a class="btn" href="${link}" target="_blank" rel="noopener"${checkAttr}>${label}</a>`;
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
