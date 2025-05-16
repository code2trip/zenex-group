import Swiper from 'swiper';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';

export function projectsSwiper() {
  const swiper = new Swiper('.projects-swiper', {
    modules: [FreeMode],
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
  });

  return swiper;
}
