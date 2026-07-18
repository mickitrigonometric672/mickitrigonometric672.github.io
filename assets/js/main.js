/* =========================================================
   Tania St Vil — Portfolio interactions
   Mobile menu · Tabs · Scroll-spy nav · Reveal on scroll ·
   Animated progress bars · Footer year
   ========================================================= */
(function () {
  "use strict";

  /* ---- Mobile menu ---- */
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var navClose = document.getElementById("navClose");

  function openMenu() {
    nav.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
  if (navToggle) navToggle.addEventListener("click", openMenu);
  if (navClose) navClose.addEventListener("click", closeMenu);

  /* Close menu when a link is clicked (mobile) */
  var navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  /* ---- Tabs (skills) ---- */
  var tabBtns = document.querySelectorAll(".tabs__btn");
  var tabPanels = document.querySelectorAll(".tabs__panel");
  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = btn.getAttribute("data-tab");
      tabBtns.forEach(function (b) { b.classList.remove("active"); });
      tabPanels.forEach(function (p) { p.classList.remove("active"); });
      btn.classList.add("active");
      var panel = document.getElementById(target);
      if (panel) {
        panel.classList.add("active");
        animateBars(panel);
      }
    });
  });

  /* ---- Animate progress bars ---- */
  function animateBars(scope) {
    var bars = (scope || document).querySelectorAll(".progress-bar-fill");
    bars.forEach(function (bar) {
      var w = bar.getAttribute("data-width");
      if (w) {
        bar.style.width = "0";
        // next frame -> transition to target width
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { bar.style.width = w; });
        });
      }
    });
  }

  /* ---- Reveal on scroll + first bar animation ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.querySelector) {
            var bars = entry.target.querySelectorAll(".progress-bar-fill");
            if (bars.length) animateBars(entry.target);
          }
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
    animateBars(document);
  }

  /* ---- Scroll-spy: highlight active nav link ---- */
  var sections = document.querySelectorAll("section[id], header[id]");
  var linkMap = {};
  navLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href && href.charAt(0) === "#") linkMap[href.slice(1)] = link;
  });

  function onScroll() {
    var pos = window.scrollY + 120;
    var currentId = "top";
    sections.forEach(function (sec) {
      if (sec.offsetTop <= pos) currentId = sec.id;
    });
    // "home" section maps to the "Home"/#top link
    if (currentId === "home") currentId = "top";
    navLinks.forEach(function (l) { l.classList.remove("active"); });
    if (linkMap[currentId]) linkMap[currentId].classList.add("active");

    // header shadow after scrolling
    var header = document.querySelector(".header");
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
