'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import '@/styles/sections/career-hero.scss';
import { getGsapWithScrollTrigger } from '@/lib/gsap';

export default function CareerHero() {
  const t = useTranslations('career.hero');

  useEffect(() => {
    let tween;
    let mounted = true;

    (async () => {
      const { gsap } = await getGsapWithScrollTrigger();
      if (!mounted) return;

      const items = gsap.utils?.toArray('.career-hero__item') ?? Array.from(document.querySelectorAll('.career-hero__item'));

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
    <section className="career-hero">
      <div className="container">
        <div className="career-hero__header">
          <h1 className="career-hero__title title">
            <img src="/images/career-icon.svg" alt="" />
            {t('title')} <strong>{t('titleStrong')}</strong>
          </h1>
          <span className="career-hero__label label">{t('label')}</span>
        </div>

        <ul className="career-hero__list">
          <li className="career-hero__item">
            <picture className="career-hero__item-img">
              <source
                srcSet="/images/webp/career-img-d.webp"
                media="(min-width: 768px)"
                type="image/webp"
              />
              <img src="/images/webp/career-img-m.webp" alt="" />
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
              src="/images/webp/career-lines.webp"
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

