import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function numbersSection() {
  const items = document.querySelectorAll('.numbers-section__item');

  gsap.from(items, {
    scrollTrigger: {
      trigger: items,
      start: 'top 75%',
    },
    duration: 1,
    opacity: 0,
    yPercent: 15,
    stagger: 0.4,
  });
}
