/* ============================================================
   NV INDIVIDUALES — main.js
   ============================================================ */

/* ---- NAV TEMPLATE ---- */
function buildNav(base) {
  return `
<nav class="navbar" id="navbar">
  <div class="nav-container">
    <a href="${base}index.html" class="nav-logo">
      <div class="logo-circle"><span>NV</span></div>
      <div class="logo-label">
        <span class="nv">NV</span>
        <span class="ind">Individuales</span>
      </div>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="${base}index.html">Inicio</a></li>
      <li><a href="${base}nosotros.html">Nosotros</a></li>
      <li class="has-drop">
        <a href="#">Servicios <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M2 3.5L5 6.5L8 3.5"/></svg></a>
        <ul class="drop-menu">
          <li><a href="${base}servicios/nico-grosso.html">Nico Grosso</a></li>
          <li><a href="${base}servicios/victor-morreale.html">Víctor Morreale</a></li>
        </ul>
      </li>
      <li><a href="${base}blog.html">Blog</a></li>
      <li><a href="${base}contacto.html">Contacto</a></li>
    </ul>
    <a href="${base}contacto.html" class="btn btn-orange nav-cta">Anotarme</a>
    <button class="hamburger" id="hamburger" aria-label="Menú"><span></span><span></span><span></span></button>
  </div>
</nav>
<nav class="mob-nav" id="mobNav">
  <a href="${base}index.html">Inicio</a>
  <a href="${base}nosotros.html">Nosotros</a>
  <a href="${base}servicios/nico-grosso.html">Nico Grosso</a>
  <a href="${base}servicios/victor-morreale.html">Víctor Morreale</a>
  <a href="${base}blog.html">Blog</a>
  <a href="${base}contacto.html">Contacto</a>
  <div class="mob-cta"><a href="${base}contacto.html" class="btn btn-orange">Anotarme</a></div>
</nav>`;
}

/* ---- FOOTER TEMPLATE ---- */
function buildFooter(base) {
  return `
<footer>
  <div class="container">
    <div class="footer-g">
      <div class="ft-brand">
        <a href="${base}index.html" class="nav-logo" style="display:inline-flex;">
          <div class="logo-circle"><span>NV</span></div>
          <div class="logo-label">
            <span class="nv">NV</span>
            <span class="ind">Individuales</span>
          </div>
        </a>
        <p>Entrenamientos individuales de técnica de básquetbol. Formamos jugadores completos con los mejores entrenadores de la Provincia de Buenos Aires.</p>
        <div class="social-row">
          <a href="#" class="soc-btn" aria-label="Instagram">
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" class="soc-btn" aria-label="TikTok">
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z"/></svg>
          </a>
          <a href="#" class="soc-btn" aria-label="YouTube">
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
          </a>
        </div>
      </div>
      <div class="ft-col">
        <h5>Navegación</h5>
        <ul>
          <li><a href="${base}index.html">Inicio</a></li>
          <li><a href="${base}nosotros.html">Nosotros</a></li>
          <li><a href="${base}blog.html">Blog</a></li>
          <li><a href="${base}contacto.html">Contacto</a></li>
        </ul>
      </div>
      <div class="ft-col">
        <h5>Entrenadores</h5>
        <ul>
          <li><a href="${base}servicios/nico-grosso.html">Nico Grosso</a></li>
          <li><a href="${base}servicios/victor-morreale.html">Víctor Morreale</a></li>
          <li><a href="${base}contacto.html">Ver disponibilidad</a></li>
        </ul>
      </div>
      <div class="ft-col">
        <h5>Contacto</h5>
        <ul>
          <li><a href="${base}contacto.html">Inscribirse</a></li>
          <li><a href="https://wa.me/5491100000000" target="_blank">WhatsApp</a></li>
          <li><a href="mailto:info@nvindividuales.com.ar">Email</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 NV Individuales — Nicolás Grosso &amp; Víctor Morreale</span>
      <span style="color:rgba(255,255,255,.3)">Provincia de Buenos Aires, Argentina</span>
    </div>
  </div>
</footer>
<a href="https://wa.me/5491100000000" class="wa-float" target="_blank" rel="noopener" aria-label="WhatsApp">
  <svg width="28" height="28" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>`;
}

/* ---- BASKETBALL SVG ---- */
const BB_SVG = `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="56" fill="#FF7120"/>
  <path d="M4 60 Q30 38 60 38 Q90 38 116 60" stroke="rgba(0,0,0,0.35)" stroke-width="3.5" fill="none"/>
  <path d="M4 60 Q30 82 60 82 Q90 82 116 60" stroke="rgba(0,0,0,0.35)" stroke-width="3.5" fill="none"/>
  <line x1="60" y1="4" x2="60" y2="116" stroke="rgba(0,0,0,0.35)" stroke-width="3.5"/>
  <circle cx="60" cy="60" r="55" stroke="rgba(0,0,0,0.2)" stroke-width="2" fill="none"/>
</svg>`;

/* ---- COURT SVG ---- */
const COURT_SVG = `<svg viewBox="0 0 400 500" fill="none" class="court-deco">
  <path d="M40 500 L40 180 A190 190 0 0 1 360 180 L360 500" stroke="white" stroke-width="4"/>
  <rect x="115" y="320" width="170" height="180" stroke="white" stroke-width="4" fill="none"/>
  <ellipse cx="200" cy="320" rx="65" ry="65" stroke="white" stroke-width="4" fill="none"/>
  <circle cx="200" cy="140" r="22" stroke="white" stroke-width="4" fill="none"/>
  <line x1="40" y1="500" x2="360" y2="500" stroke="white" stroke-width="4"/>
</svg>`;

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  const depth = parseInt(document.body.dataset.depth || 0);
  const base  = depth > 0 ? '../'.repeat(depth) : './';

  // Inject nav
  const navEl = document.getElementById('nav-inject');
  if (navEl) navEl.innerHTML = buildNav(base);

  // Inject footer
  const ftEl = document.getElementById('footer-inject');
  if (ftEl) ftEl.innerHTML = buildFooter(base);

  // Inject basketball icons where needed
  document.querySelectorAll('.bb-inject').forEach(el => {
    el.innerHTML = BB_SVG;
    el.style.width  = el.dataset.size || '100px';
    el.style.height = el.dataset.size || '100px';
  });

  // Inject court decoration
  document.querySelectorAll('.court-inject').forEach(el => {
    el.innerHTML = COURT_SVG;
  });

  setActiveLink();
  initNavScroll();
  initHamburger();
  initDropdowns();
  initScrollAnim();
  initCounters();
  initContactForm();
});

/* ---- ACTIVE NAV LINK ---- */
function setActiveLink() {
  const path = window.location.pathname.replace(/\\/g, '/');
  const file = path.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a, .mob-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const hfile = href.split('/').pop();
    if (hfile && hfile === file) a.classList.add('active');
  });
}

/* ---- NAV SCROLL ---- */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const solid = nav.classList.contains('solid');
  const onScroll = () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else if (!solid) nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---- DROPDOWN ---- */
function lockScroll()   { document.body.style.overflow = 'hidden'; }
function unlockScroll() { document.body.style.overflow = ''; }

function initDropdowns() {
  document.querySelectorAll('.has-drop').forEach(item => {
    const trigger = item.querySelector(':scope > a');
    if (!trigger) return;
    trigger.addEventListener('click', e => {
      e.preventDefault();
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.has-drop.open').forEach(d => d.classList.remove('open'));
      if (!isOpen) { item.classList.add('open'); lockScroll(); }
      else unlockScroll();
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.has-drop')) {
      document.querySelectorAll('.has-drop.open').forEach(d => d.classList.remove('open'));
      unlockScroll();
    }
  });
}

/* ---- HAMBURGER ---- */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const mob = document.getElementById('mobNav');
  if (!btn || !mob) return;
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    mob.classList.toggle('open');
    mob.classList.contains('open') ? lockScroll() : unlockScroll();
  });
  mob.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      mob.classList.remove('open');
      unlockScroll();
    });
  });
}

/* ---- SCROLL ANIMATIONS ---- */
function initScrollAnim() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-up, .fade-in').forEach(el => obs.observe(el));
}

/* ---- COUNTER ANIMATION ---- */
function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = parseInt(el.dataset.count);
      const suf    = el.dataset.suffix || '';
      const dur    = 1800;
      const steps  = 60;
      let cur = 0;
      const inc = target / steps;
      const t = setInterval(() => {
        cur += inc;
        if (cur >= target) { el.textContent = target + suf; clearInterval(t); }
        else el.textContent = Math.floor(cur) + suf;
      }, dur / steps);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  els.forEach(el => obs.observe(el));
}

/* ---- CONTACT FORM ---- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '¡Mensaje enviado!';
      btn.style.background = '#22c55e';
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 3200);
    }, 1400);
  });
}
