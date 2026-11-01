(() => {
  // Lights off + flashlight
  const root = document.documentElement;
  const move = (x, y) => { root.style.setProperty('--x', x + 'px'); root.style.setProperty('--y', y + 'px'); };
  move(innerWidth / 2, innerHeight / 2);
  addEventListener('mousemove', (e) => move(e.clientX, e.clientY));
  addEventListener('touchmove', (e) => move(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  const lights = document.querySelector('#lights-btn');
  if (lights) lights.addEventListener('click', () => document.body.classList.toggle('dark'));

  const pinboard = document.querySelector('#memory-board');
  if (!pinboard) return;

  const carousel = pinboard.querySelector('#pin-carousel');
  const slides = [...carousel.querySelectorAll('.pin-slide')];
  const status = pinboard.querySelector('#pinboard-status');
  const boardLink = pinboard.querySelector('#pinboard-link');
  const shuffleButton = pinboard.querySelector('#shuffle-board');
  const pauseButton = pinboard.querySelector('#pause-board');
  const previousButton = pinboard.querySelector('#previous-pin');
  const nextButton = pinboard.querySelector('#next-pin');
  let currentIndex = 0;
  let paused = false;
  let scrollFrame;

  const updateActiveSlide = (index, shouldCenter = true) => {
    currentIndex = (index + slides.length) % slides.length;
    const activeSlide = slides[currentIndex];

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === currentIndex;
      slide.classList.toggle('is-active', isActive);
      if (isActive) {
        slide.setAttribute('aria-current', 'true');
      } else {
        slide.removeAttribute('aria-current');
      }
    });

    status.textContent = `${activeSlide.dataset.title} · ${activeSlide.dataset.section}`;
    boardLink.href = activeSlide.href;

    if (shouldCenter) {
      const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
      const slideCenter = activeSlide.getBoundingClientRect().left + activeSlide.getBoundingClientRect().width / 2;
      carousel.scrollBy({
        left: slideCenter - carouselCenter,
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    }
  };

  const showRandomSlide = () => {
    const choices = slides.map((_, index) => index).filter((index) => index !== currentIndex);
    updateActiveSlide(choices[Math.floor(Math.random() * choices.length)]);
  };

  carousel.addEventListener('scroll', () => {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => {
      const center = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      slides.forEach((slide, index) => {
        const bounds = slide.getBoundingClientRect();
        const distance = Math.abs(bounds.left + bounds.width / 2 - center);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      updateActiveSlide(closestIndex, false);
    });
  });

  shuffleButton.addEventListener('click', showRandomSlide);
  previousButton.addEventListener('click', () => updateActiveSlide(currentIndex - 1));
  nextButton.addEventListener('click', () => updateActiveSlide(currentIndex + 1));
  pauseButton.addEventListener('click', () => {
    paused = !paused;
    pauseButton.setAttribute('aria-pressed', String(paused));
    pauseButton.textContent = paused ? 'resume' : 'pause';
  });

  updateActiveSlide(Math.floor(Math.random() * slides.length));
  setInterval(() => {
    if (!paused) showRandomSlide();
  }, 10000);
})();
