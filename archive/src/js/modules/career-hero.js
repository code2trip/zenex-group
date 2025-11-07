import gsap from 'gsap';

export function careerHero() {
  const items = document.querySelectorAll('.career-hero__item');

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
