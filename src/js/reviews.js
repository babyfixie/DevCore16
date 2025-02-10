import axios from 'axios';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const listReviews = document.querySelector('.reviews-list');

const getReviewsApi = async () => {
  const response = await axios.get(
    'https://portfolio-js.b.goit.study/api/reviews'
  );
  return response.data;
};

const getReviews = async () => {
  try {
    const searchedReviews = await getReviewsApi();

    if (searchedReviews.length > 0) {
      createReviews(searchedReviews);
    } else {
      createNotFound();
    }
  } catch (error) {
    createNotFound();
  }
};

const createReviews = reviews => {
  const createListEl = reviews
    .map(
      ({
        author,
        avatar_url,
        review,
      }) => `<li class='reviews-list-item swiper-slide'>
      <picture>
        <source srcset ='${avatar_url}'
        type='image/jpeg'>
        <img 
          class='photo-review'
          src= '${avatar_url}'
        alt ='${author}'
        width ='48'
        height ='48'
        loading ='lazy'/>
      </picture>
      <h3 class= 'autor-review'>${author}</h3>
       <div class='review-text-wraper'>
      <p class='review-text'>${review}</p>
      </div>
    </li>`
    )
    .join('');

  listReviews.innerHTML = createListEl;
};

const createNotFound = (message = 'Not found') => {
  const p = document.createElement('p');
  p.textContent = message;

  listReviews.insertAdjacentElement('afterbegin', p);
};

let isSwiping = false;

getReviews();

const reviewsSwiper = new Swiper('.reviews-swiper-container', {
  modules: [Navigation, Keyboard],
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,
  direction: 'horizontal',
  watchOverflow: true,
  spaceBetween: 16,

  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    1440: {
      slidesPerGroup: 4,
      slidesPerView: 4,
    },
  },

  on: {
    slideChange: () => {
      if (isSwiping) {
        document
          .querySelector('.reviews-button-next')
          .classList.add('swiper-button-disabled');
        document
          .querySelector('.reviews-button-prev')
          .classList.add('swiper-button-disabled');
      }

      setTimeout(() => {
        document
          .querySelector('.reviews-button-next')
          .classList.remove('swiper-button-disabled');
        document
          .querySelector('.reviews-button-prev')
          .classList.remove('swiper-button-disabled');
        reviewsSwiper.navigation.update();
        isSwiping = false;
      }, 0);
    },
  },
});
