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
