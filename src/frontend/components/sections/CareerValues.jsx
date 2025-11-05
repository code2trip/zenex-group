'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/sections/career-values.scss';

gsap.registerPlugin(ScrollTrigger);

const values = [
  { key: 'innovation', icon: '/src/assets/images/value-icon-1.svg' },
  { key: 'integrity', icon: '/src/assets/images/value-icon-2.svg' },
  { key: 'excellence', icon: '/src/assets/images/value-icon-3.svg' },
  { key: 'collaboration', icon: '/src/assets/images/value-icon-4.svg' },
  { key: 'growth', icon: '/src/assets/images/value-icon-5.svg' },
  { key: 'impact', icon: '/src/assets/images/value-icon-6.svg' },
];

export default function CareerValues() {
  const t = useTranslations('career.values');

  useEffect(() => {
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
  }, []);

  return (
    <section className="career-values">
      <img
        src="/src/assets/images/career-decor-1.svg"
        alt=""
        className="career-values__decor"
      />
      <div className="career-values__blur-1"></div>
      <div className="career-values__blur-2"></div>
      <div className="container">
        <div className="career-values__header">
          <h2 className="career-values__title title">
            <img src="/src/assets/images/core-icon.svg" alt="" />
            {t('title')} <strong>{t('titleStrong')}</strong>
          </h2>
          <span className="career-values__label label">{t('label')}</span>
        </div>
        <ul className="career-values__list">
          {values.map((value, index) => (
            <li key={index} className="career-values__item">
              <div className="career-values__item-inner">
                <h3 className="career-values__item-title">{t(`${value.key}.title`)}</h3>
                <p className="career-values__item-text">{t(`${value.key}.text`)}</p>
              </div>
              <img src={value.icon} alt="" className="career-values__item-icon" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

