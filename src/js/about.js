import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Accordion

new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: true,
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});

//======= Swiper
// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

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

  navigation: {
    nextEl: '.about-me-swiper-btn-next',
    // prevEl: '.about-me-swiper-btn-prev',
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
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: true,
});
// const swiper = new Swiper('.about-me-swiper', {
//   // Default parameters
//   loop: true,
//   centeredSlides: false,
//   loopAdditionalSlides: 4,
//   slidesPerView: 2,
//   spaceBetween: 0,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     375: {
//       slidesPerView: 2,
//       spaceBetween: 0,
//     },
//     // when window width is >= 375px
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 0,
//     },
//     // when window width is >= 768px
//     1440: {
//       slidesPerView: 6,
//       spaceBetween: 0,
//     },
//   },
//   centeredSlides: false,
// //   // loopAdditionalSlides: 1,
//    navigation: {
//      nextEl: '.swiper-button-next',
//      prevEl: '.swiper-button-prev',
//    },
//    pagination: {
//      el: '.swiper-pagination',
// /    clickable: true,
//    },
//    keyboard: {
//      enabled: true,
//      onlyInViewport: true,
//    },
//    mousewheel: true,
//  });
