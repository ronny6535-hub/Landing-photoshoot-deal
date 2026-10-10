(function () {
  'use strict';

  /* ------------------------------------------------------------------
     SETTINGS
     Set to false to hide the whole Reviews section.
  ------------------------------------------------------------------ */
  var SHOW_TESTIMONIALS = true;

  /* Reviews section flag */
  if (SHOW_TESTIMONIALS) {
    var reviews = document.getElementById('testimonials');
    if (reviews) reviews.hidden = false;
  }

  /* Current year in the footer */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* Meta Pixel: fire a Contact event on call and text taps.
     Does nothing until the Pixel base code is added in index.html. */
  document.addEventListener('click', function (event) {
    var link = event.target.closest('[data-track="contact"]');
    if (link && typeof window.fbq === 'function') {
      window.fbq('track', 'Contact');
    }
  });

  /* Fade-up on scroll */
  var revealItems = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach(function (el) { observer.observe(el); });
  }

  /* Gallery lightbox */
  var dialog = document.getElementById('lightbox');
  var bigImage = document.getElementById('lightbox-img');
  var tiles = Array.prototype.slice.call(document.querySelectorAll('.gallery__item'));
  var current = 0;
  var opener = null;

  function show(index) {
    current = (index + tiles.length) % tiles.length;
    var img = tiles[current].querySelector('img');
    bigImage.src = img.currentSrc || img.src;
    bigImage.alt = img.alt;
  }

  if (dialog && tiles.length) {
    tiles.forEach(function (tile, index) {
      tile.addEventListener('click', function () {
        opener = tile;
        show(index);
        dialog.showModal();
      });
    });

    dialog.querySelector('.lightbox__close').addEventListener('click', function () { dialog.close(); });
    dialog.querySelector('.lightbox__prev').addEventListener('click', function () { show(current - 1); });
    dialog.querySelector('.lightbox__next').addEventListener('click', function () { show(current + 1); });

    /* Tap the dark area to close */
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') show(current - 1);
      if (event.key === 'ArrowRight') show(current + 1);
    });

    dialog.addEventListener('close', function () {
      if (opener) opener.focus();
    });
  }
})();
