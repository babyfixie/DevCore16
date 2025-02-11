import eng1x from '../img/covers/eng-1x.png';
import eng2x from '../img/covers/eng-2x.png';
import powerpulse1x from '../img/covers/powerpulse-1x.png';
import powerpulse2x from '../img/covers/powerpulse-2x.png';
import energy1x from '../img/covers/energy-1x.png';
import energy2x from '../img/covers/energy-2x.png';
import wallet1x from '../img/covers/wallet-1x.png';
import wallet2x from '../img/covers/wallet-2x.png';
import greenharvest1x from '../img/covers/greenharvest-1x.png';
import greenharvest2x from '../img/covers/greenharvest-2x.png';
import starlight1x from '../img/covers/starlight-1x.png';
import starlight2x from '../img/covers/starlight-2x.png';
import fruitbox1x from '../img/covers/fruitbox-1x.png';
import fruitbox2x from '../img/covers/fruitbox-2x.png';
import chego1x from '../img/covers/chego-1x.png';
import chego2x from '../img/covers/chego-2x.png';
import ukrainian1x from '../img/covers/ukrainian-1x.png';
import ukrainian2x from '../img/covers/ukrainian-2x.png';
import mimino1x from '../img/covers/mimino-1x.png';
import mimino2x from '../img/covers/mimino-2x.png';

const images = {
  eng: {
    srcset: eng1x,
    src: eng2x,
  },
  powerpulse: {
    srcset: powerpulse1x,
    src: powerpulse2x,
  },
  energy: {
    srcset: energy1x,
    src: energy2x,
  },
  wallet: {
    srcset: wallet1x,
    src: wallet2x,
  },
  green: {
    srcset: greenharvest1x,
    src: greenharvest2x,
  },
  starlight: {
    srcset: starlight1x,
    src: starlight2x,
  },
  fruitbox: {
    srcset: fruitbox1x,
    src: fruitbox2x,
  },
  chego: {
    srcset: chego1x,
    src: chego2x,
  },
  ukrain: {
    srcset: ukrainian1x,
    src: ukrainian2x,
  },
  mimino: {
    srcset: mimino1x,
    src: mimino2x,
  },
};

export default images;

document.addEventListener('DOMContentLoaded', () => {
  Object.keys(images).forEach(className => {
    const imgs = document.querySelectorAll(`.${className}`);
    imgs.forEach(img => {
      img.srcset = images[className].srcset;
      img.src = images[className].src;
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const covers = document.querySelectorAll('.covers');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
          entry.target.classList.add('active');
          setTimeout(() => {
            entry.target.classList.add('slow-start');
          }, 1000);
        } else {
          entry.target.classList.remove('active');
          entry.target.classList.remove('slow-start');
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  covers.forEach(cover => {
    observer.observe(cover);
  });
});
