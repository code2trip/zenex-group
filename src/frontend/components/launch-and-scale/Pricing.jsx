'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

export default function Pricing() {
  const t = useTranslations('launchAndScale.pricing');
  const locale = useLocale();
  const [isMobile700, setIsMobile700] = useState(false);
  const features = [
    { key: 'branding' },
    { key: 'promos' },
    { key: 'brandedCards' },
    { key: 'communications' },
    { key: 'flexiblePayments' },
    { key: 'license' },
    { key: 'customFees' },
    { key: 'newCurrencies' },
  ];
  const notices = t.raw('notices');

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 700px)');
    const update = () => setIsMobile700(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const splitIntoThreeLines = (text) => {
    const words = text.split(' ');
    if (words.length < 3) return [text, '', ''];
    const part = Math.ceil(words.length / 3);
    const line1 = words.slice(0, part).join(' ');
    const line2 = words.slice(part, part * 2).join(' ');
    const line3 = words.slice(part * 2).join(' ');
    return [line1, line2, line3];
  };

  return (
    <section className="ls-pricing">
      <div className="container">
        <div className="ls-pricing__head">
          <div className="ls-pricing__title-wrapper">
            <span className="ls-badge">
              <img src="/images/rocket.svg" alt="" />
            </span>
            <h2 className="ls-pricing__title section-heading"><span>{t('title').split(' ').slice(0, 4).join(' ')}</span> {t('title').split(' ').slice(4).join(' ')}</h2>
          </div>
          <p className="ls-pricing__subtitle">{t('subtitle')}</p>
        </div>

        <div className="ls-pricing__main">
          <img src="/images/crown.svg" alt="" className="ls-pricing__crown" aria-hidden="true" />
          <div className="ls-pricing__price">
            <span className="ls-pricing__price-from">{t('from')}</span><br />
            <strong>€2,500</strong><br />
            <span className="ls-pricing__price-month">{t('monthlyFee')}</span>
          </div>
          <h3 className="ls-pricing__big-title">
            {locale === 'ru' ? (
              <>
                <strong>{t('mainTitle').split(' ').slice(0, -2).join(' ')}</strong><br /> <span className="ls-pricing__big-title-light">{t('mainTitle').split(' ').slice(-2).join(' ')}</span>
              </>
            ) : (
              <>
                <strong>{t('mainTitle').split(' ').slice(0, -4).join(' ')}</strong><br /> <span className="ls-pricing__big-title-light">{t('mainTitle').split(' ').slice(-4).join(' ')}</span>
              </>
            )}
          </h3>

          <div className="ls-pricing__features">
            {features.map((feature, index) => (
              <div key={index} className="ls-pricing__feature">
                <h4 className="ls-pricing__feature-title">{t(`features.${feature.key}.title`)}</h4>
                <p className="ls-pricing__feature-text">{t(`features.${feature.key}.text`)}</p>
              </div>
            ))}
          </div>

          <div className="ls-pricing__pre-notices" />

          <div className="ls-pricing__notices">
            {notices.map((notice, index) => (
              <div key={index} className="ls-pricing__notice">
                <img src="/images/attention.svg" alt="" className="ls-pricing__notice-icon" />
                {notice}
              </div>
            ))}
          </div>

          <a className="btn btn--primary ls-pricing__button" href="#offer">
            {t('getOffer')}
            <img src="/images/right.png" alt="" aria-hidden="true" className="btn__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}


