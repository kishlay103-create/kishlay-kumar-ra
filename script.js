// Mobile nav toggle, year stamp, scroll-reveal, header behavior, smooth anchors
(function () {
  // --- Mobile nav -------------------------------------------------------
  const btn = document.querySelector('[data-menu-btn]');
  const nav = document.querySelector('[data-nav]');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // --- Year stamp -------------------------------------------------------
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Auto-tag content for scroll reveal ------------------------------
  // Mark common content blocks with .reveal so authors don't have to.
  if (!reduce) {
    const autoSelectors = [
      '.section h2',
      '.section .lead',
      '.feature-card',
      '.card',
      '.esc-step',
      '.service-item',
      '.regtable',
      '.tbl-wrap',
      '.notice',
      '.cta-band',
      '.hero-stat',
    ];
    document.querySelectorAll(autoSelectors.join(',')).forEach((el) => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
    });

    // Mark grids of cards as staggered parents
    document.querySelectorAll('.grid--2, .grid--3, .grid--4, .service-list, .escalation').forEach((el) => {
      el.classList.add('stagger');
    });
  }

  // --- IntersectionObserver scroll reveal ------------------------------
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal, .stagger').forEach((el) => io.observe(el));
  } else {
    // Reduced motion: show everything immediately
    document.querySelectorAll('.reveal, .stagger').forEach((el) => el.classList.add('is-in'));
  }

  // --- Header: hide on scroll down, show on scroll up ------------------
  const header = document.querySelector('.site-header');
  if (header && !reduce) {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY && y > 120;
      header.classList.toggle('is-hidden', goingDown);
      header.classList.toggle('is-elevated', y > 8);
      lastY = y;
      ticking = false;
    };
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(onScroll);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // --- Smooth anchor scroll --------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    const id = a.getAttribute('href');
    if (!id || id === '#' || id.length < 2) return;
    a.addEventListener('click', (e) => {
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: reduce ? 'auto' : 'smooth',
        block: 'start',
      });
      // Update hash without jumping
      history.pushState(null, '', id);
    });
  });

  // --- Subtle parallax on cred-card ------------------------------------
  const cred = document.querySelector('.cred-card');
  if (cred && !reduce && window.matchMedia('(pointer: fine)').matches) {
    cred.addEventListener('mousemove', (e) => {
      const r = cred.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      cred.style.transform = `perspective(900px) rotateX(${(-dy * 2).toFixed(2)}deg) rotateY(${(dx * 2).toFixed(2)}deg) translateZ(0)`;
    });
    cred.addEventListener('mouseleave', () => {
      cred.style.transform = '';
    });
  }
})();
