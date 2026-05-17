document.addEventListener('DOMContentLoaded', () => {
  // ─── FAQ accordion ─────────────────────────────────────────────
  document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-item__question').forEach(q => {
        q.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) btn.setAttribute('aria-expanded', 'true');
    });
  });

  // ─── Pill filter switching (works-slider + portfolio) ──────────
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const row = pill.closest('.works-slider__pills, .portfolio__pills');
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
    viewport: '.specialists__track',
    item: '.specialist-card',
    prevBtn: '[aria-label="Попередній"]',
    nextBtn: '[aria-label="Наступний"]',
  });

  // ─── Testimonials carousel (desktop) ───────────────────────────
  initCarousel({
    wrap: '.testimonials__carousel',
    viewport: '.reviews__grid',
    item: '.testimonial-card',
    prevBtn: '[aria-label="Попередній"]',
    nextBtn: '[aria-label="Наступний"]',
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

    const maxScroll = () => viewport.scrollWidth - viewport.clientWidth;

    prev.addEventListener('click', () => {
      if (viewport.scrollLeft <= 1) {
        viewport.scrollTo({ left: maxScroll(), behavior: 'smooth' });
      } else {
        viewport.scrollBy({ left: -getStep(), behavior: 'smooth' });
      }
    });
    next.addEventListener('click', () => {
      if (viewport.scrollLeft >= maxScroll() - 1) {
        viewport.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        viewport.scrollBy({ left: getStep(), behavior: 'smooth' });
      }
    });
  }

  // ─── Testimonials dots (mobile) ────────────────────────────────
  const dots = document.querySelectorAll('.testimonials__dot');
  const cards = document.querySelectorAll('.reviews__grid .testimonial-card');
  if (dots.length && cards.length) {
    const dotsContainer = dots[0]?.parentElement;
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        if (dotsContainer && getComputedStyle(dotsContainer).display === 'none') return;
        cards.forEach((c, j) => { c.style.display = j === i ? 'flex' : 'none'; });
        dots.forEach(d => { d.classList.toggle('testimonials__dot--active', d === dot); d.classList.toggle('testimonials__dot--inactive', d !== dot); });
      });
    });
  }

  // ─── Booking modal ─────────────────────────────────────────────
  const bookingModal = document.getElementById('booking-modal');
  if (bookingModal) {
    const modalBody = bookingModal.querySelector('.booking-modal__body');
    const form = bookingModal.querySelector('.booking-modal__form');
    const errorEl = bookingModal.querySelector('.booking-modal__error');

    const FOCUSABLE = 'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';

    function openModal() {
      bookingModal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      const first = bookingModal.querySelector(FOCUSABLE);
      first?.focus();
    }

    function closeModal() {
      bookingModal.classList.remove('is-open');
      document.body.style.overflow = '';
      modalBody.classList.remove('booking-modal__body--success', 'booking-modal__body--submitting', 'booking-modal__body--error');
      form?.reset();
    }

    document.querySelectorAll('[data-booking-open]').forEach(btn => {
      btn.addEventListener('click', openModal);
    });

    document.querySelectorAll('[data-booking-close]').forEach(btn => {
      btn.addEventListener('click', closeModal);
    });

    bookingModal.addEventListener('click', e => {
      if (e.target === bookingModal) closeModal();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && bookingModal.classList.contains('is-open')) closeModal();
    });

    // focus trap
    bookingModal.addEventListener('keydown', e => {
      if (e.key !== 'Tab' || !bookingModal.classList.contains('is-open')) return;
      const focusable = [...bookingModal.querySelectorAll(FOCUSABLE)];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    form?.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const service = form.service.value;
      const consent = form.consent.checked;

      if (!name || !phone || !service || !consent) {
        modalBody.classList.add('booking-modal__body--error');
        return;
      }
      modalBody.classList.remove('booking-modal__body--error');
      modalBody.classList.add('booking-modal__body--submitting');
      form.querySelector('.booking-modal__submit').disabled = true;

      console.log('Booking submit:', { name, phone, service, master: form.master?.value, date: form.date?.value, comment: form.comment?.value });

      setTimeout(() => {
        modalBody.classList.remove('booking-modal__body--submitting');
        modalBody.classList.add('booking-modal__body--success');
        form.querySelector('.booking-modal__submit').disabled = false;
      }, 800);
    });
  }

  // ─── Lang switcher (UI stub) ────────────────────────────────────
  document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      document.querySelectorAll(`.lang-switcher__btn[data-lang="${lang}"]`).forEach(b => b.setAttribute('aria-pressed', 'true'));
      document.querySelectorAll(`.lang-switcher__btn:not([data-lang="${lang}"])`).forEach(b => b.setAttribute('aria-pressed', 'false'));
    });
  });

  // ─── Mobile hamburger menu ──────────────────────────────────────
  const menuBtn = document.querySelector('.navbar__menu');
  const mobileNav = document.querySelector('.navbar__mobile-nav');
  const overlay = document.querySelector('.navbar__overlay');

  function openDrawer() {
    mobileNav.classList.add('is-open');
    overlay?.classList.add('is-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    mobileNav.classList.remove('is-open');
    overlay?.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.contains('is-open') ? closeDrawer() : openDrawer();
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    overlay?.addEventListener('click', closeDrawer);
  }
});
