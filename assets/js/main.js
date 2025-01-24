const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navItems = document.querySelectorAll(".nav__item");
const header = document.getElementById("header");

// Toggle navigation menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  updateNavIcon();
});

// Close menu on nav link click
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    updateNavIcon();
  });
});

// Update navigation toggle icon
function updateNavIcon() {
  const iconClass = navMenu.classList.contains("nav__menu--open") ? "ri-close-line" : "ri-menu-3-line";
  navToggle.classList.replace(navToggle.classList[1], iconClass);
}

// Initialize testimonial slider
const testimonialSlider = new Swiper(".testimonial__wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// Initialize scroll reveal animations
const scrollRevealConfig = {
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
};

ScrollReveal().reveal(
  ".hero__content, .about__content, .hero__img, .hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content", 
  scrollRevealConfig
);

ScrollReveal().reveal(".hero__img", { origin: "top" });
ScrollReveal().reveal(".qualification__footer-text, .contact__content", { origin: "left" });
ScrollReveal().reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });
