import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import Accordion from 'accordion-js';

new Accordion('.accordion-container-first', {
  duration: 600,
  showMultiple: true,
  openOnInit: [0],
});

const accordionsList = document.querySelectorAll('.about-me-list');
accordionsList.forEach(function (item) {
  const title = item.querySelector('.aboutus-title-accordion');
  const btnDown = item.querySelector('.ac-trigger');
  btnDown.addEventListener('mouseenter', function () {
    title.classList.add('hovered');
  });

  btnDown.addEventListener('mouseleave', function () {
    title.classList.remove('hovered');
  });
});

const aboutMeSwiperBtnNextEl = document.querySelector(
  '.about-me-swiper-btn-next'
);

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
  loop: true,
  slidesPerView: 2,

  navigation: {
    nextEl: '.about-me-swiper-btn-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: true,
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
});
