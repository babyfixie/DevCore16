// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import styles bundle
import 'swiper/css/bundle';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import axios from 'axios';
// register Swiper custom elements
register();

// swiper element
const swiperEl = document.querySelector('swiper-container');

const buttonPrev = document.querySelector('.reviews-button-prev');
const buttonNext = document.querySelector('.reviews-button-next');
const userName = document.querySelector('.reviews-user-name');
const userFoto = document.querySelector('.user-foto');
console.dir(userFoto);
const userReview = document.querySelector('.reviews-text');

const getReviews = () => {
  return axios.get('https://portfolio-js.b.goit.study/api/reviews');
};

const createReview = el => {
  userReview.textContent = 'el.review';
  userFoto.setAttribute('src', 'el.avatar_url');
  userName.textContent = 'el.author';
  return;
};

getReviews()
  .then(response => {
    console.dir(response);
    const fullFillReview = response.data.map(element => createReview(element));
  })
  .catch(err => {
    console.log(err);
  });

// swiper parameters
const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);

// and now initialize it
swiperEl.initialize();

buttonNext.addEventListener('click', () => {
  swiperEl.swiper.slideNext();
});

buttonPrev.addEventListener('click', () => {
  swiperEl.swiper.slidePrev();
});
