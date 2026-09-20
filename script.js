/* ══════════════════════════════════════════════════════════════
   LOUIS AMIEL ROLLORATA — DIGITAL WORKS
   ══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─────────────────────────────────────────────────────────
     THEME
     ───────────────────────────────────────────────────────── */
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const next = theme === 'dark' ? 'light' : 'dark';
    if (themeToggle) themeToggle.setAttribute('aria-label', `Switch to ${next} mode`);
  }

  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved);
  } else {
    applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* ─────────────────────────────────────────────────────────
     IMAGE PLACEHOLDERS
     Reads data-image="path/to/file.jpg" and applies it.
     If the image fails to load, falls back to the CSS gradient.
     ───────────────────────────────────────────────────────── */
  function applyImagePlaceholders() {
    const targets = document.querySelectorAll('[data-image]');
    targets.forEach(el => {
      const file = (el.dataset.image || '').trim();
      if (!file) return;

      // Optimistically apply the image
      el.style.setProperty('--img', `url('${file}')`);
      el.classList.add('has-image');

      // Verify the image actually loads; if not, revert to placeholder
      const test = new Image();
      test.onload = () => {
        // Confirmed loaded — keep image
        el.classList.add('has-image');
      };
      test.onerror = () => {
        // Failed — revert to gradient placeholder
        el.classList.remove('has-image');
        el.style.removeProperty('--img');
        // eslint-disable-next-line no-console
        console.warn(`[Exhibition] Image not found: ${file}`);
      };
      test.src = file;
    });
  }

  /* ─────────────────────────────────────────────────────────
     HERO ENTRANCE
     ───────────────────────────────────────────────────────── */
  function playHeroEntrance() {
    if (prefersReducedMotion || !window.anime) return;

    const heroSelectors = '.entrance-meta, .entrance-headline, .entrance-desc, .entrance-footer';

    anime.set(heroSelectors, { opacity: 0 });

    anime.animate('.entrance-meta', {
      opacity: [0, 1],
      translateY: [14, 0],
      duration: 700,
      delay: 100,
      ease: 'outQuart'
    });

    anime.animate('.entrance-headline', {
      opacity: [0, 1],
      translateY: [28, 0],
      duration: 1100,
      delay: 250,
      ease: 'outExpo'
    });

    anime.animate('.entrance-desc', {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 900,
      delay: 550,
      ease: 'outQuart'
    });

    anime.animate('.entrance-footer', {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 900,
      delay: 750,
      ease: 'outQuart'
    });
  }

  /* ─────────────────────────────────────────────────────────
     NAV SCROLL STATE
     ───────────────────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ─────────────────────────────────────────────────────────
     MOBILE NAV
     ───────────────────────────────────────────────────────── */
  const mobileNav = document.getElementById('mobile-nav');
  const navToggle = document.getElementById('nav-toggle');
  const closeNavBtn = document.getElementById('close-nav');

  function openMobileNav() {
    if (!mobileNav) return;
    mobileNav.style.display = 'flex';
    requestAnimationFrame(() => mobileNav.classList.add('open'));
    navToggle.setAttribute('aria-expanded', 'true');
    if (closeNavBtn) closeNavBtn.focus();
  }
  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    mobileNav.addEventListener('transitionend', () => {
      if (!mobileNav.classList.contains('open')) mobileNav.style.display = 'none';
    }, { once: true });
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.focus();
  }
  if (navToggle) navToggle.addEventListener('click', openMobileNav);
  if (closeNavBtn) closeNavBtn.addEventListener('click', closeMobileNav);
  if (mobileNav) {
    mobileNav.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileNav();
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setTimeout(closeMobileNav, 100));
    });
  }

  /* ─────────────────────────────────────────────────────────
     REVEAL ON SCROLL
     ───────────────────────────────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => revealObserver.observe(el));

  /* ─────────────────────────────────────────────────────────
     SECTION EYEBROW LINES — draw in
     ───────────────────────────────────────────────────────── */
  if (!prefersReducedMotion && window.anime) {
    const lines = document.querySelectorAll('.section-eyebrow .line');
    lines.forEach(line => { line.style.transform = 'scaleX(0)'; });

    const lineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        anime.animate(entry.target, {
          scaleX: [0, 1],
          duration: 1000,
          ease: 'outQuart'
        });
        lineObserver.unobserve(entry.target);
      });
    }, { threshold: 0.4 });

    lines.forEach(l => lineObserver.observe(l));
  }

  /* ─────────────────────────────────────────────────────────
     EXHIBIT IMAGE CLIP REVEAL
     ───────────────────────────────────────────────────────── */
  if (!prefersReducedMotion && window.anime) {
    const clips = document.querySelectorAll('[data-clip-reveal]');
    clips.forEach(el => { el.style.clipPath = 'inset(0 0 100% 0)'; });

    const clipObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        anime.animate(entry.target, {
          clipPath: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
          duration: 1100,
          ease: 'outQuart'
        });
        clipObserver.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    clips.forEach(el => clipObserver.observe(el));
  }

  /* ─────────────────────────────────────────────────────────
     TESTIMONIALS
     ───────────────────────────────────────────────────────── */
  const slides = Array.from(document.querySelectorAll('.test-slide'));
  const counter = document.getElementById('test-counter');
  let current = 0;

  function goTo(n) {
    if (!slides.length) return;
    slides[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (counter) {
      counter.textContent =
        `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    }
  }

  const prevBtn = document.querySelector('.test-btn.prev');
  const nextBtn = document.querySelector('.test-btn.next');
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  const carousel = document.querySelector('.test-carousel');
  if (carousel) {
    let tsX = null;
    carousel.addEventListener('touchstart', e => { tsX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', e => {
      if (tsX === null) return;
      const diff = tsX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
      tsX = null;
    }, { passive: true });
  }

  /* ─────────────────────────────────────────────────────────
     FOOTER YEAR
     ───────────────────────────────────────────────────────── */
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ─────────────────────────────────────────────────────────
     BOOT
     ───────────────────────────────────────────────────────── */
  function boot() {
    applyImagePlaceholders();
    playHeroEntrance();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();