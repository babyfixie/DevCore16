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

document.addEventListener('DOMContentLoaded', () => {
  const aboutMeItems = document.querySelectorAll('.about-me-item');

  aboutMeItems.forEach(item => {
    const btn = item.querySelector('.about-me-btn');
    const texts = item.querySelectorAll('.about-me-item-text');
    const icon = btn.querySelector('.about-me-icon');

    texts.forEach(text => (text.style.display = 'none'));

    btn.addEventListener('click', () => {
      const isVisible = texts[0].style.display === 'block';

      aboutMeItems.forEach(otherItem => {
        otherItem.querySelectorAll('.about-me-item-text').forEach(text => {
          text.style.display = 'none';
        });
        otherItem.querySelector('.about-me-icon').style.transform =
          'rotate(0deg)';
      });

      texts.forEach(text => {
        text.style.display = isVisible ? 'none' : 'block';
      });
      icon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });
});
