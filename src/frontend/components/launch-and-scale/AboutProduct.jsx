'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function AboutProduct() {
  const t = useTranslations('launchAndScale.about');
  const locale = useLocale();

  const items = [
    { icon: '/images/analytics.svg', titleKey: 'dashboards' },
    { icon: '/images/devices_other.svg', titleKey: 'crossPlatform' },
    { icon: '/images/wallet.svg', titleKey: 'cryptoFiat' },
    { icon: '/images/credit_card2.svg', titleKey: 'cards' },
    { icon: '/images/palette.svg', titleKey: 'branding' },
  ];
  return (
    <section className="ls-about">
      <div className="container">
        <div className="ls-about__head">
          <span className="ls-badge" aria-hidden>
            <img src="/images/medal.svg" alt="" />
          </span>
          <h2 className="ls-about__title section-heading">
            {locale === 'en' ? (
              <>
                {t('title').split(' ').slice(0, 2).join(' ')} <span>{t('title').split(' ').slice(2).join(' ')}</span>
              </>
            ) : (
              t('title')
            )}
          </h2>
        </div>

        <div className="ls-about__grid">
          <div className="ls-about__hero">
            <img src="/images/prod2.svg" alt="Product preview" className="ls-about__hero-img" />
          </div>

          {items.map((it) => (
            <div key={it.titleKey} className="ls-about__item">
              <div className="ls-about__icon" aria-hidden>
                <img src={it.icon} alt="" />
              </div>
              <div className="ls-about__content">
                <div className="ls-about__name">{t(`${it.titleKey}.title`)}</div>
                <div className="ls-about__text">{t(`${it.titleKey}.text`)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


