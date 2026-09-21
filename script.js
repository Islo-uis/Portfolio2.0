/* ══════════════════════════════════════════════════════════════
   LOUIS AMIEL ROLLORATA — DIGITAL WORKS
   ══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════════
     CARD DATA
     Featured exhibits are hand-written in index.html.
     ══════════════════════════════════════════════════════════════ */

  /* NDA cards — inside Featured Web */
  var WEB_PROJECTS = [
    {
      title: 'Smart Cacao Monitoring System',
      role: 'Front-End Developer · UI Designer',
      year: '2025',
      thumb: 'Thumbnails/Smart.webp',
      excerpt: 'IoT dashboard for DOST-PCAARD — real-time sensor data rendered as readable, decision-ready interfaces for agricultural researchers.',
      description: 'Led front-end development and UI/UX design for an IoT-based cacao monitoring platform under DOST-PCAARD. Implemented algorithms to process real-time sensor data — soil moisture, temperature, humidity — into readable dashboards for research use.',
      unavailable: true,
      ndaBadge: true
    },
    {
      title: 'PcByte Integrated Business System',
      role: 'Developer · UI Designer',
      year: '2023',
      thumb: 'Thumbnails/PcByte.webp',
      excerpt: 'POS, inventory, and stock management combined with sales analytics and financial reporting — all in a single admin interface.',
      description: 'Developed an integrated business management system with POS, inventory, and stock modules, plus sales analytics and financial reporting features. Designed for small-to-medium retail operations with minimal technical training required.',
      unavailable: true,
      ndaBadge: true
    },
    {
      title: 'Atlas Edge Global — Web Presence',
      role: 'Web Designer · Wix Developer',
      year: '2024',
      thumb: 'Logo/AE.webp',
      excerpt: 'A responsive Wix Studio site with workflow and email automation, improving lead generation and operational efficiency.',
      description: 'Responsive Wix Studio site with workflow and email automation, improving lead generation and operational efficiency for a global services firm.',
      unavailable: true,
      ndaBadge: true
    }
  ];

  /* Additional Works cards — remaining reels + design pieces */
  var ADDITIONAL_PROJECTS = [
    {
      category: 'reel',
      title: 'Additional Reels',
      role: 'Editor · Content Designer',
      year: '2024',
      thumb: 'Thumbnails/SF_Thumb.webp',
      excerpt: 'A wider selection of short-form reels — additional event highlights and content edits outside the main Sport Court selection.',
      description: 'Additional short-form video reels produced for social media — event highlights, promotional clips, and behind-the-scenes content.',
      videos: [
        'Videos/SF_1.mp4',
        'Videos/SF_3.mp4',
        'Videos/SF_4.mp4',
        'Videos/SF_7.mp4'
      ]
    },
    {
      category: 'graphics',
      title: 'Medicard Design Assets',
      role: 'Graphic Designer',
      year: '2025',
      thumb: 'Thumbnails/MediCard_Thumbnail.webp',
      excerpt: 'Medical card designs and promotional materials — brand identity work for a healthcare client.',
      description: 'Medical card designs, promotional materials, and brand identity.',
      images: [
        'Graphics/Medicard/MediCard_1.webp',
        'Graphics/Medicard/MediCard_2.webp',
        'Graphics/Medicard/MediCard_3.webp'
      ]
    },
    {
      category: 'graphics',
      title: 'Shirt Designs',
      role: 'Graphic Designer',
      year: '2024',
      thumb: 'Graphics/Shirt Designs/1.webp',
      excerpt: 'Custom apparel designs for clients and events — prints, cuts, and typographic treatments.',
      description: 'Custom shirt designs for various clients and events.',
      images: [
        'Graphics/Shirt Designs/1.webp',
        'Graphics/Shirt Designs/2.webp',
        'Graphics/Shirt Designs/3.webp'
      ]
    },
    {
      category: 'graphics',
      title: 'PcByte Brand Graphics',
      role: 'Graphic Designer',
      year: '2023',
      thumb: 'Thumbnails/PcByte.webp',
      excerpt: 'Branding and promotional graphics for a technology retail and services company.',
      description: 'Branding and promotional graphics for PcByte.',
      images: [
        'Graphics/PcByte/PcByte_1.webp',
        'Graphics/PcByte/PcByte_2.webp',
        'Graphics/PcByte/PcByte_3.webp'
      ]
    },
    {
      category: 'graphics',
      title: 'Other Graphic Work',
      role: 'Graphic Designer',
      year: '2022–25',
      thumb: null,
      excerpt: 'A selection of logos, posters, tarpaulins, and event materials — pieces that don\'t fit a single category.',
      description: 'Various design projects including logos, posters, tarpaulins, and event materials.',
      images: [
        'Graphics/Others/Boss Kol Logo.webp',
        'Graphics/Others/G&S Poster.webp',
        'Graphics/Others/Info_1.webp',
        'Graphics/Others/Info_2.webp',
        'Graphics/Others/STS.webp',
        'Graphics/Others/Tarp_1.webp',
        'Graphics/Others/Tarp_2.webp',
        'Graphics/Others/TSC_1.webp',
        'Graphics/Others/TSC_2.webp'
      ]
    }
  ];

  /* ══════════════════════════════════════════════════════════════
     THEME
     ══════════════════════════════════════════════════════════════ */
  var root = document.documentElement;
  var themeToggle = document.getElementById('theme-toggle');

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', 'Switch to ' + (t === 'dark' ? 'light' : 'dark') + ' mode');
    }
  }

  var saved = localStorage.getItem('theme');
  applyTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* ══════════════════════════════════════════════════════════════
     NAV
     ══════════════════════════════════════════════════════════════ */
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  var mobileNav = document.getElementById('mobile-nav');
  var navToggle = document.getElementById('nav-toggle');
  var closeNavBtn = document.getElementById('close-nav');

  function openMobileNav() {
    if (!mobileNav) return;
    mobileNav.style.display = 'flex';
    requestAnimationFrame(function () { mobileNav.classList.add('open'); });
    if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
    if (closeNavBtn) closeNavBtn.focus();
  }

  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    mobileNav.addEventListener('transitionend', function () {
      if (!mobileNav.classList.contains('open')) mobileNav.style.display = 'none';
    }, { once: true });
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  }

  if (navToggle) navToggle.addEventListener('click', openMobileNav);
  if (closeNavBtn) closeNavBtn.addEventListener('click', closeMobileNav);

  if (mobileNav) {
    mobileNav.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMobileNav();
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setTimeout(closeMobileNav, 100); });
    });
  }

  /* ══════════════════════════════════════════════════════════════
     REVEAL
     ══════════════════════════════════════════════════════════════ */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(function (el) { revealObs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ══════════════════════════════════════════════════════════════
     CARD RENDERING
     ══════════════════════════════════════════════════════════════ */
  var CAT_BADGE = { web: 'badge-web', graphics: 'badge-graphics', reel: 'badge-reel' };
  var CAT_LABEL = { web: 'Website', graphics: 'Graphics', reel: 'Reel' };
  var CAT_ACTION = { web: 'View case', graphics: 'View gallery', reel: 'Play reels' };

  function createCard(p, defaultCat) {
    var cat = p.category || defaultCat;
    var card = document.createElement('article');
    card.className = 'g-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Open ' + p.title);

    var badgeClass, badgeText;
    if (p.ndaBadge) {
      badgeClass = 'badge-nda';
      badgeText = 'Under NDA';
    } else {
      badgeClass = CAT_BADGE[cat] || '';
      badgeText = CAT_LABEL[cat] || '';
    }
    var actionLabel = p.ndaBadge ? 'Request case study' : (CAT_ACTION[cat] || 'View');

    var thumbHTML = p.thumb ? '<img src="' + p.thumb + '" alt="" loading="lazy" data-thumb>' : '';
    var isVideo = cat === 'reel';
    var playHTML = isVideo
      ? '<div class="g-play"><svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>'
      : '';

    card.innerHTML =
      '<div class="g-thumb">' +
        thumbHTML +
        '<span class="g-badge ' + badgeClass + '">' + badgeText + '</span>' +
        playHTML +
      '</div>' +
      '<div class="g-body">' +
        '<h3 class="g-title">' + p.title + '</h3>' +
        '<p class="g-meta">' + p.role + (p.year ? ' · ' + p.year : '') + '</p>' +
        '<p class="g-excerpt">' + p.excerpt + '</p>' +
        '<div class="g-footer"><span>' + actionLabel + '</span><span>→</span></div>' +
      '</div>';

    var img = card.querySelector('[data-thumb]');
    if (img) {
      img.addEventListener('error', function () {
        console.warn('[Gallery] Missing thumbnail → ' + p.thumb);
        img.remove();
      });
    }

    card.addEventListener('click', function () { openModal(p, cat); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(p, cat);
      }
    });

    return card;
  }

  function renderGrid(items, gridId, defaultCat) {
    var grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = '';
    items.forEach(function (p) { grid.appendChild(createCard(p, defaultCat)); });
  }

  /* ══════════════════════════════════════════════════════════════
     GALLERY MODAL
     ══════════════════════════════════════════════════════════════ */
  var modal = document.getElementById('modal');
  var modalClose = document.getElementById('modalClose');
  var modalCat = document.getElementById('modalCat');
  var modalTitle = document.getElementById('modalTitle');
  var modalDesc = document.getElementById('modalDesc');
  var modalLiveWrap = document.getElementById('modalLiveWrap');
  var modalImagesSection = document.getElementById('modalImagesSection');
  var modalImagesLabel = document.getElementById('modalImagesLabel');
  var modalGrid = document.getElementById('modalGrid');
  var modalVideosSection = document.getElementById('modalVideosSection');
  var modalVideoPlayer = document.getElementById('modalVideoPlayer');
  var modalVideoStrip = document.getElementById('modalVideoStrip');
  var modalNdaSection = document.getElementById('modalNdaSection');

  var currentVideos = [];
  var currentVideoIndex = 0;
  var currentImages = [];
  var currentImageTitle = '';
  var lastFocused = null;

  function parseList(raw) {
    if (!raw) return [];
    try { return JSON.parse(raw); } catch (e) { return []; }
  }

  function renderImages(images, title, label) {
    currentImages = images.slice();
    currentImageTitle = title;
    modalGrid.innerHTML = '';

    if (!images.length) {
      modalImagesSection.style.display = 'none';
      return;
    }
    modalImagesSection.style.display = '';
    if (modalImagesLabel) modalImagesLabel.textContent = label || 'Gallery';

    images.forEach(function (src, i) {
      var fig = document.createElement('figure');
      fig.setAttribute('role', 'button');
      fig.setAttribute('tabindex', '0');
      fig.setAttribute('aria-label', 'View image ' + (i + 1) + ' of ' + images.length);

      var img = document.createElement('img');
      img.src = src;
      img.alt = title + ' — ' + (i + 1);
      img.loading = 'lazy';

      img.addEventListener('error', function () {
        console.warn('[Modal] Missing image → ' + src);
        fig.style.background = 'repeating-linear-gradient(45deg, #1a1a1a, #1a1a1a 8px, #222 8px, #222 16px)';
        fig.style.cursor = 'default';
        var lbl = document.createElement('div');
        lbl.style.cssText = 'display:flex;align-items:center;justify-content:center;height:100%;color:#666;font-size:.55rem;letter-spacing:.15em;text-transform:uppercase;text-align:center;padding:1rem;';
        lbl.textContent = src.split('/').pop();
        fig.innerHTML = '';
        fig.appendChild(lbl);
      });

      fig.appendChild(img);
      fig.addEventListener('click', function () { openImageLightbox(i); });
      fig.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openImageLightbox(i);
        }
      });

      modalGrid.appendChild(fig);
    });
  }

  function renderVideos(videos) {
    modalVideoStrip.innerHTML = '';
    modalVideoPlayer.removeAttribute('src');
    modalVideoPlayer.load();

    if (!videos.length) {
      modalVideosSection.style.display = 'none';
      return;
    }
    modalVideosSection.style.display = '';

    videos.forEach(function (src, i) {
      var thumb = document.createElement('div');
      thumb.className = 'modal-video-thumb' + (i === 0 ? ' active' : '');
      var v = document.createElement('video');
      v.src = src;
      v.muted = true;
      v.playsInline = true;
      v.preload = 'metadata';
      v.addEventListener('loadedmetadata', function () {
        try { this.currentTime = Math.min(1, this.duration / 3); } catch (e) {}
      });
      thumb.appendChild(v);
      thumb.addEventListener('click', function () { selectVideo(i); });
      modalVideoStrip.appendChild(thumb);
    });

    selectVideo(0);
  }

  function renderLive(url) {
    modalLiveWrap.innerHTML = '';
    if (!url) return;
    var live = document.createElement('a');
    live.className = 'modal-live';
    live.href = url;
    live.target = '_blank';
    live.rel = 'noopener';
    live.innerHTML = 'Visit live site <span aria-hidden="true">↗</span>';
    modalLiveWrap.appendChild(live);
  }

  function openModal(p, cat) {
    lastFocused = document.activeElement;

    modalCat.textContent = (CAT_LABEL[cat] || '') + (p.year ? ' · ' + p.year : '');
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.description || p.excerpt || '';

    renderLive(p.url);
    renderImages(p.images || [], p.title, 'Gallery');
    currentVideos = p.videos || [];
    currentVideoIndex = 0;
    renderVideos(currentVideos);

    if (modalNdaSection) modalNdaSection.style.display = p.unavailable ? '' : 'none';

    showModal();
  }

  function openFromExhibit(el) {
    lastFocused = document.activeElement;

    var title = el.getAttribute('data-gallery-title') || 'Project';
    var cat = el.getAttribute('data-gallery-cat') || '';
    var desc = el.getAttribute('data-gallery-desc') || '';
    var url = el.getAttribute('data-gallery-url');
    var isNda = el.getAttribute('data-gallery-nda') === 'true';
    var images = parseList(el.getAttribute('data-images'));

    currentVideos = parseList(el.getAttribute('data-videos'));
    currentVideoIndex = 0;

    modalCat.textContent = cat;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    renderLive(url);
    renderImages(images, title, 'Gallery');
    renderVideos(currentVideos);

    if (modalNdaSection) modalNdaSection.style.display = isNda ? '' : 'none';

    showModal();
  }

  function showModal() {
    modal.style.display = 'flex';
    requestAnimationFrame(function () {
      modal.classList.add('open');
      requestAnimationFrame(function () { modal.classList.add('visible'); });
    });
    document.body.classList.add('modal-open');
    setTimeout(function () { if (modalClose) modalClose.focus(); }, 100);
  }

  function selectVideo(i) {
    if (i < 0 || i >= currentVideos.length) return;
    currentVideoIndex = i;
    modalVideoPlayer.src = currentVideos[i];
    modalVideoPlayer.load();
    modalVideoPlayer.play().catch(function () {});
    modalVideoStrip.querySelectorAll('.modal-video-thumb').forEach(function (t, idx) {
      t.classList.toggle('active', idx === i);
    });
  }

  function closeModal() {
    modalVideoPlayer.pause();
    modal.classList.remove('visible');
    setTimeout(function () {
      modal.classList.remove('open');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }, 350);
  }

  document.querySelectorAll('.exhibit-img[data-gallery="true"]').forEach(function (el) {
    el.addEventListener('click', function () { openFromExhibit(el); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openFromExhibit(el);
      }
    });
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', 'Open gallery — ' + (el.getAttribute('data-gallery-title') || 'project'));
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });

  /* ══════════════════════════════════════════════════════════════
     IMAGE LIGHTBOX
     ══════════════════════════════════════════════════════════════ */
  var ilb = document.getElementById('imageLightbox');
  var ilbImage = document.getElementById('ilbImage');
  var ilbClose = document.getElementById('ilbClose');
  var ilbPrev = document.getElementById('ilbPrev');
  var ilbNext = document.getElementById('ilbNext');
  var ilbCounter = document.getElementById('ilbCounter');
  var ilbIndex = 0;

  function openImageLightbox(index) {
    if (!currentImages.length) return;
    ilbIndex = Math.max(0, Math.min(index, currentImages.length - 1));
    renderLightboxImage();

    ilb.style.display = 'flex';
    requestAnimationFrame(function () {
      ilb.classList.add('open');
      requestAnimationFrame(function () { ilb.classList.add('visible'); });
    });
    document.body.classList.add('modal-open');
    setTimeout(function () { if (ilbClose) ilbClose.focus(); }, 80);
  }

  function renderLightboxImage() {
    if (!currentImages.length) return;
    var src = currentImages[ilbIndex];
    ilbImage.src = src;
    ilbImage.alt = currentImageTitle + ' — ' + (ilbIndex + 1);

    var showNav = currentImages.length > 1;
    if (ilbPrev) ilbPrev.style.display = showNav ? 'flex' : 'none';
    if (ilbNext) ilbNext.style.display = showNav ? 'flex' : 'none';
    if (ilbCounter) {
      ilbCounter.textContent = showNav ? (ilbIndex + 1) + ' / ' + currentImages.length : '';
    }
  }

  function lightboxNext() {
    if (currentImages.length < 2) return;
    ilbIndex = (ilbIndex + 1) % currentImages.length;
    renderLightboxImage();
  }

  function lightboxPrev() {
    if (currentImages.length < 2) return;
    ilbIndex = (ilbIndex - 1 + currentImages.length) % currentImages.length;
    renderLightboxImage();
  }

  function closeImageLightbox() {
    ilb.classList.remove('visible');
    setTimeout(function () {
      ilb.classList.remove('open');
      ilb.style.display = 'none';
      ilbImage.removeAttribute('src');
    }, 300);
  }

  if (ilbClose) ilbClose.addEventListener('click', closeImageLightbox);
  if (ilbPrev) ilbPrev.addEventListener('click', lightboxPrev);
  if (ilbNext) ilbNext.addEventListener('click', lightboxNext);
  if (ilb) {
    ilb.addEventListener('click', function (e) {
      if (e.target === ilb) closeImageLightbox();
    });
  }

  /* ══════════════════════════════════════════════════════════════
     GLOBAL KEYBOARD
     ══════════════════════════════════════════════════════════════ */
  document.addEventListener('keydown', function (e) {
    if (ilb && ilb.classList.contains('open')) {
      if (e.key === 'Escape') closeImageLightbox();
      if (e.key === 'ArrowRight') lightboxNext();
      if (e.key === 'ArrowLeft') lightboxPrev();
      return;
    }
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight' && currentVideos.length > 1) selectVideo(currentVideoIndex + 1);
    if (e.key === 'ArrowLeft' && currentVideos.length > 1) selectVideo(currentVideoIndex - 1);
  });

  /* IMAGE ERROR LOGGING */
  document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('error', function () {
      console.warn('[Exhibition] Image not found → ' + img.getAttribute('src'));
    });
  });

  /* ══════════════════════════════════════════════════════════════
     TESTIMONIALS
     ══════════════════════════════════════════════════════════════ */
  var slides = Array.prototype.slice.call(document.querySelectorAll('.test-slide'));
  var counter = document.getElementById('test-counter');
  var current = 0;

  function goTo(n) {
    if (!slides.length) return;
    slides[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (counter) {
      counter.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    }
  }

  var prevBtn = document.querySelector('.test-btn.prev');
  var nextBtn = document.querySelector('.test-btn.next');
  if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });

  var carousel = document.querySelector('.test-carousel');
  if (carousel) {
    var tsX = null;
    carousel.addEventListener('touchstart', function (e) { tsX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', function (e) {
      if (tsX === null) return;
      var diff = tsX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
      tsX = null;
    }, { passive: true });
  }

  /* FOOTER YEAR */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* BOOT */
  renderGrid(WEB_PROJECTS, 'gridWeb', 'web');
  renderGrid(ADDITIONAL_PROJECTS, 'gridCreative', 'graphics');
})();