import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export function slider() {
  const sliders = document.querySelectorAll('.slider-section__swiper');
  sliders.forEach((el) => {
    const nextEl = el.querySelector('.swiper-pagination__button.next');
    const prevEl = el.querySelector('.swiper-pagination__button.prev');

    return new Swiper(el, {
      modules: [Navigation],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl,
        prevEl,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    });
  });
}
