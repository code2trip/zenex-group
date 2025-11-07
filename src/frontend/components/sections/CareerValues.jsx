'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import '@/styles/sections/career-values.scss';
import { getGsapWithScrollTrigger } from '@/lib/gsap';

const values = [
  { key: 'innovation', icon: '/images/value-icon-1.svg' },
  { key: 'integrity', icon: '/images/value-icon-2.svg' },
  { key: 'excellence', icon: '/images/value-icon-3.svg' },
  { key: 'collaboration', icon: '/images/value-icon-4.svg' },
  { key: 'growth', icon: '/images/value-icon-5.svg' },
  { key: 'impact', icon: '/images/value-icon-6.svg' },
];

export default function CareerValues() {
  const t = useTranslations('career.values');

  useEffect(() => {
    let tween;
    let mounted = true;

    (async () => {
      const { gsap } = await getGsapWithScrollTrigger();
      if (!mounted) return;

      const items = gsap.utils?.toArray('.career-values__item') ?? Array.from(document.querySelectorAll('.career-values__item'));

      tween = gsap.fromTo(
        items,
        { opacity: 0, yPercent: 15 },
        {
          scrollTrigger: {
            trigger: items,
            start: 'top 75%',
          },
          duration: 1,
          opacity: 1,
          yPercent: 0,
          stagger: 0.4,
        },
      );
    })();

    return () => {
      mounted = false;
      tween?.kill();
    };
  }, []);

  return (
    <section className="career-values">
      <img
        src="/images/career-decor-1.svg"
        alt=""
        className="career-values__decor"
      />
      <div className="career-values__blur-1"></div>
      <div className="career-values__blur-2"></div>
      <div className="container">
        <div className="career-values__header">
          <h2 className="career-values__title title">
            <img src="/images/core-icon.svg" alt="" />
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

