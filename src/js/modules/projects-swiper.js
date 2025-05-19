import Swiper from 'swiper';
import 'swiper/css';
import { FreeMode, Mousewheel } from 'swiper/modules';

export function projectsSwiper() {
  const swiper = new Swiper('.projects-swiper', {
    modules: [FreeMode, Mousewheel],
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    mousewheel: true,
  });

  return swiper;
}
