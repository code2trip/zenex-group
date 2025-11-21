'use client';

import { useTranslations } from 'next-intl';
import '@/styles/sections/numbers-section.scss';

export default function NumbersSection() {
  const t = useTranslations('home.numbers');

  return (
    <section className="numbers-section">
      <img
        className="numbers-section__decor"
        src="/images/career-decor-2.svg"
        alt=""
      />
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
            <div className="numbers-section__item-text-wrapper">
              <p className="numbers-section__item-text">{t('sinceText')}</p>
            </div>
          </li>
          <li className="numbers-section__item">
            <img
              src="/images/webp/number-img-2.webp"
              alt=""
              className="numbers-section__item-img"
            />
            <h3 className="numbers-section__item-title">{t('brands')}</h3>
            <div className="numbers-section__item-text-wrapper">
              <p className="numbers-section__item-text">
                {(() => {
                  const text = t('brandsText');
                  const match = text.match(/^(.+?)\s*\((.+)\)$/);
                  return match ? match[1] : text;
                })()}
              </p>
              {(() => {
                const text = t('brandsText');
                const match = text.match(/^(.+?)\s*\((.+)\)$/);
                return match ? (
                  <p className="numbers-section__item-text numbers-section__item-text--sub">
                    ({match[2]})
                  </p>
                ) : null;
              })()}
            </div>
          </li>
          <li className="numbers-section__item">
            <img
              src="/images/webp/number-img-3.webp"
              alt=""
              className="numbers-section__item-img"
            />
            <h3 className="numbers-section__item-title">{t('countries')}</h3>
            <div className="numbers-section__item-text-wrapper">
              <p className="numbers-section__item-text">{t('countriesText')}</p>
            </div>
          </li>
          <li className="numbers-section__item">
            <img
              src="/images/webp/number-img-4.webp"
              alt=""
              className="numbers-section__item-img"
            />
            <h3 className="numbers-section__item-title">{t('team')}</h3>
            <div className="numbers-section__item-text-wrapper">
              <p className="numbers-section__item-text">{t('teamText')}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

