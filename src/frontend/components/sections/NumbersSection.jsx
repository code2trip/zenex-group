'use client';

import { useTranslations } from 'next-intl';
import '@/styles/sections/numbers-section.scss';

export default function NumbersSection() {
  const t = useTranslations('home.numbers');

  return (
    <section className="numbers-section">
      <div className="container">
        <div className="numbers-section__header">
          <h2 className="numbers-section__title title">
            <img src="/images/number-icon.svg" alt="" />
            {t('title')} <strong>{t('titleStrong')}</strong>
          </h2>
          <p className="numbers-section__text">{t('text')}</p>
          <span className="label numbers-section__label">{t('label')}</span>
        </div>

        <ul className="numbers-section__list">
          <li className="numbers-section__item">
            <img
              src="/images/webp/number-img-1.webp"
              alt=""
              className="numbers-section__item-img"
            />
            <span className="numbers-section__item-label">{t('since')}</span>
            <h3 className="numbers-section__item-title">{t('sinceValue')}</h3>
            <p 
              className="numbers-section__item-text"
              dangerouslySetInnerHTML={{
                __html: t('sinceText').replace(/2022\s/g, '2022<br />')
              }}
            />
          </li>
          <li className="numbers-section__item">
            <img
              src="/images/webp/number-img-2.webp"
              alt=""
              className="numbers-section__item-img"
            />
            <h3 className="numbers-section__item-title">{t('brands')}</h3>
            <p 
              className="numbers-section__item-text"
              dangerouslySetInnerHTML={{
                __html: t('brandsText').replace(/launching\s/g, 'launching<br />')
              }}
            />
          </li>
          <li className="numbers-section__item">
            <img
              src="/images/webp/number-img-3.webp"
              alt=""
              className="numbers-section__item-img"
            />
            <h3 className="numbers-section__item-title">{t('countries')}</h3>
            <p className="numbers-section__item-text">{t('countriesText')}</p>
          </li>
          <li className="numbers-section__item">
            <img
              src="/images/webp/number-img-4.webp"
              alt=""
              className="numbers-section__item-img"
            />
            <h3 className="numbers-section__item-title">{t('team')}</h3>
            <p className="numbers-section__item-text">{t('teamText')}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

