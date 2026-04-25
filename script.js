// Kishlay Kumar - SEBI RA Website
// Small enhancement script (accessibility-friendly)

(function () {
  'use strict';

  // Set current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  var nav = document.querySelector('nav[aria-label="Primary"]');
  var btn = document.querySelector('.nav-toggle');
  if (nav && btn) {
    btn.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', open ? 'false' : 'true');
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  }

  // Close mobile nav after clicking a link
  document.querySelectorAll('#primary-nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (nav && nav.getAttribute('data-open') === 'true') {
        nav.setAttribute('data-open', 'false');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
