'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Pricing() {
  const t = useTranslations('launchAndScale.pricing');
  const locale = useLocale();
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
  return (
    <section className="ls-pricing">
      <div className="container">
        <div className="ls-pricing__head">
          <div className="ls-pricing__title-wrapper">
            <span className="ls-badge">
              <img src="/images/rocket.svg" alt="" />
            </span>
            <h2 className="ls-pricing__title"><span>{t('title').split(' ').slice(0, 4).join(' ')}</span> {t('title').split(' ').slice(4).join(' ')}</h2>
          </div>
          <p className="ls-pricing__subtitle">{t('subtitle')}</p>
        </div>

        <div className="ls-pricing__main">
          <img src="/images/crown.svg" alt="" className="ls-pricing__crown" aria-hidden="true" />
          <div className="ls-pricing__price">{t('from')} <strong>€2,500</strong> {t('monthlyFee')}</div>
          <h3 className="ls-pricing__big-title">
            {locale === 'ru' ? (
              <>
                <strong>{t('mainTitle').split(' ').slice(0, 4).join(' ')}</strong> {t('mainTitle').split(' ').slice(4).join(' ')}
              </>
            ) : (
              <>
                {t('mainTitle').split(' ').slice(0, -3).join(' ')}<br /> <span className="ls-pricing__big-title-light">{t('mainTitle').split(' ').slice(-3).join(' ')}</span>
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

          <a className="btn btn--primary ls-pricing__button" href="#offer">
            {t('getOffer')}
            <img src="/images/right.png" alt="" aria-hidden="true" className="btn__icon" />
          </a>

          <div className="ls-pricing__notices">
            {notices.map((notice, index) => (
              <div key={index} className="ls-pricing__notice">
                <img src="/images/attention.svg" alt="" className="ls-pricing__notice-icon" />
                {notice}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


