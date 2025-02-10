import descdog1x from '../img/projects/desc-dog-1x.jpg';
import descdog2x from '../img/projects/desc-dog-2x.jpg';
import descmob1x from '../img/projects/desc-mob-1x.jpg';
import descmob2x from '../img/projects/desc-mob-2x.jpg';
import descvoc1x from '../img/projects/desc-voc-1x.jpg';
import descvoc2x from '../img/projects/desc-voc-2x.jpg';
import mobdog1x from '../img/projects/mob-dog-1x.jpg';
import mobdog2x from '../img/projects/mob-dog-2x.jpg';
import mobmob1x from '../img/projects/mob-mob-1x.jpg';
import mobmob2x from '../img/projects/mob-mob-2x.jpg';
import mobvoc1x from '../img/projects/mob-voc-1x.jpg';
import mobvoc2x from '../img/projects/mob-voc-2x.jpg';
import tabdog1x from '../img/projects/tab-dog-1x.jpg';
import tabdog2x from '../img/projects/tab-dog-2x.jpg';
import tabmob1x from '../img/projects/tab-mob-1x.jpg';
import tabmob2x from '../img/projects/tab-mob-2x.jpg';
import tabvoc1x from '../img/projects/tab-voc-1x.jpg';
import tabvoc2x from '../img/projects/mob-voc-2x.jpg';

import Swiper from 'swiper';
import 'swiper/css';

import { Navigation, Keyboard } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Кількість слайдів одночасно
    spaceBetween: 20, // Відстань між слайдами
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // breakpoints: {
    //   768: { slidesPerView: 1 },
    //   1024: { slidesPerView: 2 },
    // },
  });

  // Автоматична деактивація кнопок на краях слайдера
  function updateNavButtons() {
    document.querySelector('.swiper-button-prev').disabled = swiper.isBeginning;
    document.querySelector('.swiper-button-next').disabled = swiper.isEnd;
  }

  swiper.on('slideChange', updateNavButtons);
  updateNavButtons(); // Виклик при завантаженні
});
