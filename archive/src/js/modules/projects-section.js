import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function projectsSection() {
  const items = document.querySelectorAll('.project-card');

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
