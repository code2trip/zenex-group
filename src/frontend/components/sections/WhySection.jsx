'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import '@/styles/sections/why-section.scss';

export default function WhySection() {
  const t = useTranslations('home.why');
  const locale = useLocale();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const cards = [
    { key: 'clearPath', icon: '/images/why-icon-1.svg' },
    { key: 'web3', icon: '/images/why-icon-2.svg' },
    { key: 'speed', icon: '/images/why-icon-3.svg' },
    { key: 'independent', icon: '/images/why-icon-4.svg' },
  ];

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
            <span className="title__text">
              {t('title')} <strong>{t('titleStrong')}</strong>
            </span>
          </h2>
          <p className="why-section__text">{t('text')}</p>
          <span className="why-section__label label">{t('label')}</span>
        </div>
        <ul className="why-section__list">
          <li className="why-section__item">
            <article className="why-big-card">
              <h3 className="why-big-card__title">{t('fullCommitment.title')}</h3>
              <p
                className="why-big-card__text"
                dangerouslySetInnerHTML={{
                  __html: (() => {
                    let text = t('fullCommitment.text');
                    
                    if (locale === 'ru') {
                      if (isSmallScreen) {
                        // При <1024px перенос после "стратегически,"
                        text = text.replace(/стратегически, /g, 'стратегически,<br />');
                      } else {
                        // По умолчанию перенос после "финансово," и "—"
                        text = text.replace(/финансово, /g, 'финансово,<br />');
                        text = text.replace(/ — /g, ' —<br />');
                      }
                    } else {
                      // Английская версия
                      if (isSmallScreen) {
                        text = text.replace(/operationally, /g, 'operationally,<br />');
                      } else {
                        text = text.replace(/ — /g, ' —<br />')
                          .replace(/operationally, /g, 'operationally,<br />')
                          .replace(/creatively /g, 'creatively<br />');
                      }
                    }
                    
                    return text;
                  })()
                }}
              />
              <svg
                width="39"
                height="38"
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="19.5001" cy="19.0001" r="19.0001" fill="#05ACA4" />
                <path
                  d="M20.5955 8.29102L8.79102 15.7859H13.7999L18.0857 12.966L18.3797 15.7859H21.3421C21.3421 15.7859 20.7588 8.74468 20.5955 8.29102Z"
                  fill="white"
                />
                <path
                  d="M8.80762 17.7603L11.0203 20.7243H30.9642L28.7516 17.7603H8.80762Z"
                  fill="white"
                />
                <path
                  d="M19.1594 30.1931L30.9639 22.6982H25.955L21.6692 25.5181L21.3753 22.6982H18.4128L19.1594 30.1931Z"
                  fill="white"
                />
              </svg>
            </article>
          </li>
          {cards.map(({ key, icon }) => (
            <li className="why-section__item" key={key}>
              <article className="why-card">
                <div className="why-card__inner">
                  <h3 className="why-card__title">{t(`${key}.title`)}</h3>
                  <p className="why-card__text">{t(`${key}.text`)}</p>
                </div>
                <img src={icon} alt="" className="why-card__icon" />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

