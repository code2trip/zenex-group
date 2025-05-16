/* eslint-disable no-new */
import Marquee from 'vanilla-marquee';

export function marquee() {
  const wrapper = document.querySelector('.marquee');
  const inner = wrapper?.querySelector('.marquee__inner');
  const contents = wrapper?.querySelectorAll('.marquee__content');

  if (!wrapper || !inner || !contents?.length) return;

  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  if (isMobile) {
    contents.forEach((content) => {
      new Marquee(content, {
        direction: content.dataset.direction === 'right' ? 'right' : 'left',
        duplicated: true,
        speed: 20,
        startVisible: true,
        pauseOnHover: false,
        delayBeforeStart: 0,
      });
    });
  } else {
    new Marquee(inner, {
      direction: 'left',
      duplicated: true,
      speed: 70,
      startVisible: true,
      pauseOnHover: false,
      delayBeforeStart: 0,
    });
  }
}
