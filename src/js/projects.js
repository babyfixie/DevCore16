import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const swiperProject = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 600,
  direction: 'horizontal',
  watchOverflow: true,
  allowTouchMove: true,
  // grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    768: { slidesPerView: 1 },
    1440: { slidesPerView: 1 },
  },
});
