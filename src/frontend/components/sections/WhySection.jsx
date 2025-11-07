'use client';

import { useTranslations } from 'next-intl';
import '@/styles/sections/why-section.scss';

export default function WhySection() {
  const t = useTranslations('home.why');

  return (
    <section className="why-section">
      <img
        className="why-section__decor"
        src="/images/career-decor-2.svg"
        alt=""
      />
      <div className="container">
        <div className="why-section__header">
          <h2 className="why-section__title title">
            <img src="/images/why-icon.svg" alt="" />
            {t('title')} <strong>{t('titleStrong')}</strong>
          </h2>
          <p className="why-section__text">{t('text')}</p>
          <span className="why-section__label label">{t('label')}</span>
        </div>
      </div>
    </section>
  );
}

