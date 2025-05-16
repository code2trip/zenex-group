import { gsap } from 'gsap';

export default function accordion() {
  const accordionsList = document.querySelectorAll('.accordions');

  accordionsList.forEach((accordions) => {
    const accordionItems = accordions.querySelectorAll('.accordion');

    accordionItems.forEach((card) => {
      const header = card.querySelector('.accordion__header');
      header.addEventListener('click', () => {
        const isActive = card.classList.contains('active');

        accordionItems.forEach((c) => {
          if (c.classList.contains('active')) {
            c.classList.remove('active');
            gsap.to(c.querySelector('.accordion__body'), {
              height: 0,
              duration: 0.5,
            });
          }
        });

        if (!isActive) {
          const body = card.querySelector('.accordion__body');
          card.classList.add('active');
          gsap.set(body, { height: 'auto' });
          const targetHeight = body.offsetHeight;
          gsap.fromTo(
            body,
            { height: 0 },
            {
              height: targetHeight,
              duration: 0.5,
            },
          );
        }
      });
    });
  });
}
