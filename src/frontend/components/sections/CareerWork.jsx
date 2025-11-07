'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import '@/styles/sections/career-work.scss';
import { getGsapWithScrollTrigger } from '@/lib/gsap';

const workItems = [
  {
    key: 'professional',
    icon: '/images/work-icon-1.svg',
    checkIcon: '/images/check-gold.svg',
  },
  {
    key: 'workLife',
    icon: '/images/work-icon-2.svg',
    checkIcon: '/images/check-green.svg',
  },
  {
    key: 'benefits',
    icon: '/images/work-icon-3.svg',
    checkIcon: '/images/check-green.svg',
  },
  {
    key: 'culture',
    icon: '/images/work-icon-4.svg',
    checkIcon: '/images/check-gold.svg',
  },
];

export default function CareerWork() {
  const t = useTranslations('career.work');

  useEffect(() => {
    let tween;
    let mounted = true;

    (async () => {
      const { gsap } = await getGsapWithScrollTrigger();
      if (!mounted) return;

      const items = gsap.utils?.toArray('.career-work__item') ?? Array.from(document.querySelectorAll('.career-work__item'));

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
    <section className="career-work">
      <img
        src="/images/career-decor-2.svg"
        alt=""
        className="career-work__decor"
      />
      <div className="container">
        <div className="career-work__header">
          <h2 className="career-work__title title">
            <img src="/images/work-icon.svg" alt="" />
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

