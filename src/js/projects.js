import first_mob1x from '../img/projects/img_1_320.png';
import first_mob2x from '../img/projects/img_1_320_retina.jpg';
import first_tab1x from '../img/projects/img_1_768.png';
import first_tab2x from '../img/projects/img_1_768_retina.jpg';
import first_desk1x from '../img/projects/img_1_1440.png';
import first_desk2x from '../img/projects/img_1_1440.png';

import second_mob1x from '../img/projects/img_2_320.png';
import second_mob2x from '../img/projects/img_2_320_retina.jpg';
import second_tab1x from '../img/projects/img_2_768.png';
import second_tab2x from '../img/projects/img_2_768_retina.jpg';
import second_desk1x from '../img/projects/img_2_1440.png';
import second_desk2x from '../img/projects/img_2_1440.png';

import third_mob1x from '../img/projects/img_3_320.png';
import third_mob2x from '../img/projects/img_3_320_retina.jpg';
import third_tab1x from '../img/projects/img_3_768.png';
import third_tab2x from '../img/projects/img_3_768_retina.jpg';
import third_desk1x from '../img/projects/img_3_1440.png';
import third_desk2x from '../img/projects/img_3_1440.png';

const images = {
  first: {
    mob: { srcset: first_mob2x, src: first_mob1x },
    tab: { srcset: first_tab2x, src: first_tab1x },
    desk: { srcset: first_desk2x, src: first_desk1x },
  },
  second: {
    mob: { srcset: second_mob2x, src: second_mob1x },
    tab: { srcset: second_tab2x, src: second_tab1x },
    desk: { srcset: second_desk2x, src: second_desk1x },
  },
  third: {
    mob: { srcset: third_mob2x, src: third_mob1x },
    tab: { srcset: third_tab2x, src: third_tab1x },
    desk: { srcset: third_desk2x, src: third_desk1x },
  },
};

export default images;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-item-img').forEach(container => {
    const imgClass = container.dataset.img; // атрибут для вибору потрібного ключа
    if (!images[imgClass]) return;

    const { mob, tab, desk } = images[imgClass];

    container.innerHTML = `
      <picture>
        <source srcset="${desk.srcset} 2x, ${desk.src} 1x" media="(min-width: 1440px)" />
        <source srcset="${tab.srcset} 2x, ${tab.src} 1x" media="(min-width: 768px)" />
        <source srcset="${mob.srcset} 2x, ${mob.src} 1x" media="(max-width: 767px)" />
        <img src="${desk.src}" alt="mobil" width="614" height="385" />
      </picture>
    `;
  });
});

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const swiperProject = new Swiper('.project-swiper', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 600,
  direction: 'horizontal',
  watchOverflow: true,
  allowTouchMove: true,
  grabCursor: true,
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
