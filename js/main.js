document.addEventListener('DOMContentLoaded', () => {
  // ─── FAQ accordion ─────────────────────────────────────────────
  document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.faq-item__question')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ─── Pill filter switching (works-slider + portfolio) ──────────
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const row = pill.closest('.works-slider__pills, .portfolio__pills, .portfolio__pills-desktop');
      if (!row) return;
      row.querySelectorAll('.pill').forEach(p => {
        p.classList.remove('pill--active');
        p.classList.add('pill--inactive');
      });
      pill.classList.remove('pill--inactive');
      pill.classList.add('pill--active');
    });
  });

  // ─── Navbar: add scrolled class for background on scroll ───────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('navbar--scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ─── Smooth scroll for anchor links ────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ─── Floating book button: hide until scrolled past hero ───────
  const floatBtn = document.querySelector('.float-btn');
  const hero = document.querySelector('.hero');
  if (floatBtn && hero) {
    const observer = new IntersectionObserver(
      ([entry]) => floatBtn.classList.toggle('float-btn--visible', !entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
  }

  // ─── Specialists carousel ──────────────────────────────────────
  initCarousel({
    wrap: '.specialists__carousel',
    viewport: '.specialists__cards-viewport',
    item: '.specialist-card',
    prevBtn: '[aria-label="Попередній"]',
    nextBtn: '[aria-label="Наступний"]',
  });

  // ─── Works slider carousel ─────────────────────────────────────
  initCarousel({
    wrap: '.works-slider__slider-row',
    viewport: '.works-slider__cards',
    item: '.works-card',
    prevBtn: '.nav-arrow:first-child',
    nextBtn: '.nav-arrow:last-child',
  });

  function initCarousel({ wrap: wrapSel, viewport: viewportSel, item: itemSel, prevBtn: prevSel, nextBtn: nextSel }) {
    const wrap = document.querySelector(wrapSel);
    if (!wrap) return;
    const viewport = wrap.querySelector(viewportSel);
    if (!viewport) return;

    const prev = wrap.querySelector(prevSel);
    const next = wrap.querySelector(nextSel);
    if (!prev || !next) return;

    const getStep = () => {
      const item = viewport.querySelector(itemSel);
      if (!item) return 280;
      return item.offsetWidth + parseInt(getComputedStyle(viewport).columnGap || getComputedStyle(viewport).gap || 0);
    };

    prev.addEventListener('click', () => viewport.scrollBy({ left: -getStep(), behavior: 'smooth' }));
    next.addEventListener('click', () => viewport.scrollBy({ left: getStep(), behavior: 'smooth' }));
  }

  // ─── Mobile hamburger menu ──────────────────────────────────────
  const menuBtn = document.querySelector('.navbar__menu');
  const mobileNav = document.querySelector('.navbar__mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      mobileNav.setAttribute('aria-hidden', String(!isOpen));
    });
    // Close on nav link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }
});
