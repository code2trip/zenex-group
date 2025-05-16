import Swiper from 'swiper';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';

export function mapSection() {
  function updateActiveFromSlide() {
    const { slides } = this;
    slides.forEach((slide) => slide.classList.remove('prev', 'middle', 'next'));
    const midIndex = this.activeIndex;
    const prevIndex = (midIndex - 1 + slides.length) % slides.length;
    const nextIndex = (midIndex + 1) % slides.length;
    slides[prevIndex].classList.add('prev');
    slides[midIndex].classList.add('middle');
    slides[nextIndex].classList.add('next');

    const mid = slides[midIndex];
    if (mid && mid.dataset && mid.dataset.value) {
      document.querySelector('.map-section__panel-value').textContent =
        mid.dataset.value;
    }
    document
      .querySelectorAll('.map-section__svg [id]')
      .forEach((p) => p.classList.remove('active'));
    if (mid && mid.dataset && mid.dataset.target) {
      const path = document.getElementById(mid.dataset.target);
      if (path) path.classList.add('active');
    }
  }

  const swiper = new Swiper('.map-section__scroll', {
    direction: 'vertical',
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 24,
    mousewheel: true,
    modules: [Mousewheel],
    on: {
      slideChange: updateActiveFromSlide,
    },
  });

  updateActiveFromSlide.call(swiper);
}
