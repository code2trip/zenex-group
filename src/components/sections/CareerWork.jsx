'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/sections/career-work.scss';

gsap.registerPlugin(ScrollTrigger);

const workItems = [
  {
    key: 'professional',
    icon: '/src/assets/images/work-icon-1.svg',
    checkIcon: '/src/assets/images/check-gold.svg',
  },
  {
    key: 'workLife',
    icon: '/src/assets/images/work-icon-2.svg',
    checkIcon: '/src/assets/images/check-green.svg',
  },
  {
    key: 'benefits',
    icon: '/src/assets/images/work-icon-3.svg',
    checkIcon: '/src/assets/images/check-green.svg',
  },
  {
    key: 'culture',
    icon: '/src/assets/images/work-icon-4.svg',
    checkIcon: '/src/assets/images/check-gold.svg',
  },
];

export default function CareerWork() {
  const t = useTranslations('career.work');

  useEffect(() => {
    const items = document.querySelectorAll('.career-work__item');
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
  }, []);

  return (
    <section className="career-work">
      <img
        src="/src/assets/images/career-decor-2.svg"
        alt=""
        className="career-work__decor"
      />
      <div className="container">
        <div className="career-work__header">
          <h2 className="career-work__title title">
            <img src="/src/assets/images/work-icon.svg" alt="" />
            {t('title')} <strong>{t('titleStrong')}</strong>
          </h2>
          <span className="career-work__label label">{t('label')}</span>
        </div>

        <ul className="career-work__list">
          {workItems.map((item, index) => (
            <li key={index} className="career-work__item">
              <h3 className="career-work__item-title">
                <img src={item.icon} alt="" />
                {t(`${item.key}.title`)}
              </h3>
              <ul className="career-work__item-list">
                {t.raw(`${item.key}.items`).map((listItem, itemIndex) => (
                  <li key={itemIndex}>
                    <img src={item.checkIcon} alt="" />
                    {listItem}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

