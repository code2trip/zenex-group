import gsap from 'gsap';

export function heroSection() {
  const textLines = document.querySelectorAll('.hero-section__text .line');
  const titleLines = document.querySelectorAll('.hero-section__title .line');

  gsap.from(textLines, {
    duration: 1,
    opacity: 0,
    yPercent: 50,
    stagger: 0.2,
  });

  gsap.from(titleLines, {
    duration: 1,
    opacity: 0,
    yPercent: 50,
    stagger: 0.2,
    delay: 0.5,
  });
}
