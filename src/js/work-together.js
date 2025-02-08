const reviewForm = document.querySelector('.footer-review-form');
console.log(reviewForm);

const onSumbitForm = event => {
  event.preventDefault();
};

reviewForm.addEventListener('submit', onSumbitForm);