const images = {
  eng: {
    srcset: '../img/covers/eng-1x.png',
    src: '../img/covers/eng-2x.png',
  },
  powerpulse: {
    srcset: '../img/covers/powerpulse-1x.png',
    src: '../img/covers/powerpulse-2x.png',
  },
  energy: {
    srcset: '../img/covers/energy-1x.png',
    src: '../img/covers/energy-2x.png',
  },
  wallet: {
    srcset: '../img/covers/wallet-1x.png',
    src: '../img/covers/wallet-2x.png',
  },
  green: {
    srcset: '../img/covers/greenharvest-1x.png',
    src: '../img/covers/greenharvest-2x.png',
  },
  starlight: {
    srcset: '../img/covers/starlight-1x.png',
    src: '../img/covers/starlight-2x.png',
  },
  fruitbox: {
    srcset: '../img/covers/fruitbox-1x.png',
    src: '../img/covers/fruitbox-2x.png',
  },
  chego: {
    srcset: '../img/covers/chego-1x.png',
    src: '../img/covers/chego-2x.png',
  },
  ukrain: {
    srcset: '../img/covers/ukrainian-1x.png',
    src: '../img/covers/ukrainian-2x.png',
  },
  mimino: {
    srcset: '../img/covers/mimino-1x.png',
    src: '../img/covers/mimino-2x.png',
  },
};

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
