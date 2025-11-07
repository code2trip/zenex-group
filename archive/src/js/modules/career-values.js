import gsap from 'gsap';

export function careerValues() {
  const items = document.querySelectorAll('.career-values__item');

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
