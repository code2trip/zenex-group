'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/sections/career-hero.scss';

gsap.registerPlugin(ScrollTrigger);

export default function CareerHero() {
  const t = useTranslations('career.hero');

  useEffect(() => {
    const items = document.querySelectorAll('.career-hero__item');
    gsap.fromTo(items, {
      opacity: 0,
      yPercent: 15,
    }, {
      scrollTrigger: {
        trigger: items,
        start: 'top 75%',
      },
      duration: 1,
      opacity: 1,
      yPercent: 0,
      stagger: 0.4,
    });
  }, []);

  return (
    <section className="career-hero">
      <div className="container">
        <div className="career-hero__header">
          <h1 className="career-hero__title title">
            <img src="/src/assets/images/career-icon.svg" alt="" />
            {t('title')} <strong>{t('titleStrong')}</strong>
          </h1>
          <span className="career-hero__label label">{t('label')}</span>
        </div>

        <ul className="career-hero__list">
          <li className="career-hero__item">
            <picture className="career-hero__item-img">
              <source
                srcSet="/src/assets/images/webp/career-img-d.webp"
                media="(min-width: 768px)"
                type="image/webp"
              />
              <img src="/src/assets/images/webp/career-img-m.webp" alt="" />
            </picture>
            <span className="career-hero__item-label">{t('brands')}</span>
            <h2 className="career-hero__item-title">{t('joinTitle')}</h2>
            <p className="career-hero__item-text">
              {t('joinText').split(t('joinTextStrong'))[0]}
              <strong>{t('joinTextStrong')}</strong>
              {t('joinText').split(t('joinTextStrong'))[1]}
            </p>
          </li>
          <li className="career-hero__item">
            <img
              src="/src/assets/images/webp/career-lines.webp"
              alt=""
              className="career-hero__item-img"
            />
            <span className="career-hero__item-label">{t('brands')}</span>
            <h2 className="career-hero__item-title">{t('missionTitle')}</h2>
            <p className="career-hero__item-text">
              {t('missionText').split(t('missionTextStrong'))[0]}
              <strong>{t('missionTextStrong')}</strong>
              {t('missionText').split(t('missionTextStrong'))[1]}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

