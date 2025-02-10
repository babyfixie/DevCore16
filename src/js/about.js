import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Accordion

document.addEventListener('DOMContentLoaded', function () {
  // Inicializa el acordeón usando la biblioteca Accordion
  const accordion = new Accordion('.about-me-list', {
    duration: 400, // Duración de la animación
    showMultiple: false, // Permite abrir solo un elemento a la vez
    openOnInit: [0], // Abre el primer bloque al cargar la página
    collapse: true, // Asegura que los demás bloques estén cerrados al inicio
  });
});

//======= Swiper
//======= import Swiper JS

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const aboutMeSwiperBtnNextEl = document.querySelector(
  '.about-me-swiper-btn-next'
);

console.log(aboutMeSwiperBtnNextEl);

aboutMeSwiperBtnNextEl.addEventListener('mousedown', function () {
  setTimeout(() => {
    this.blur();
  }, 1000);
});

const aboutSwiper = new Swiper('.about-me-swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,
  direction: 'horizontal',
  watchOverflow: true,

  navigation: {
    nextEl: '.about-me-swiper-btn-next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: true,
});
