import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import Accordion from 'accordion-js';

new Accordion('.accordion-container-first', {
  duration: 600,
  showMultiple: true,
  openOnInit: [0],
});

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.about-me-btn');

  buttons.forEach((button, index) => {
    const icon = button.querySelector('.about-me-icon');
    const panel = button.closest('.ac').querySelector('.ac-panel');

    if (index === 0) {
      panel.classList.add('active');
      icon.style.transform = 'rotate(0deg)';
    } else {
      icon.style.transform = 'rotate(180deg)';
    }

    button.addEventListener('click', function () {
      panel.classList.toggle('active');
      icon.style.transform = panel.classList.contains('active')
        ? 'rotate(0deg)'
        : 'rotate(180deg)';
    });
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
