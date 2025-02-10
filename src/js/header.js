import header1x from '../img/header/header_logo@1x.png';
import header2x from '../img/header/header_logo@2x.png';

const images = {
  header: {
    srcset: header2x,
    src: header1x,
  },
};

export default images;

document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll(`.header-image`);
  imgs.forEach(img => {
    img.srcset = images.header.srcset;
    img.src = images.header.src;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.header-burger-button');
  const closeButton = document.querySelector(
    '.header-mobile-menu-close-button'
  );
  const menuBackground = document.querySelector(
    '.header-mobile-menu-background'
  );
  const menuLinks = document.querySelectorAll('.header-mobile-menu-link');
  const desktopMenuButton = document.querySelector('.menu');
  const orderButton = document.querySelector(
    '.header-mobile-menu-order-button'
  );

  function openMenu() {
    menuBackground.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuBackground.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  burgerButton.addEventListener('click', openMenu);

  desktopMenuButton.addEventListener('click', openMenu);

  closeButton.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth',
        });
      }
      closeMenu();
    });
  });

  menuBackground.addEventListener('click', event => {
    if (event.target === menuBackground) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  if (orderButton) {
    orderButton.addEventListener('click', event => {
      event.preventDefault();
      const workTogetherSection = document.getElementById('work-together');
      if (workTogetherSection) {
        window.scrollTo({
          top: workTogetherSection.offsetTop - 50,
          behavior: 'smooth',
        });
      }
      closeMenu();
    });
  }
});
