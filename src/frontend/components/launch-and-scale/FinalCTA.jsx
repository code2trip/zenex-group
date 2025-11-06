'use client';

import { useTranslations } from 'next-intl';

export default function FinalCTA() {
  const t = useTranslations('launchAndScale.finalCta');
  return (
    <section className="ls-final">
      <div className="container">
        <div className="ls-final__box">
          <img src="/images/3rockets.svg" alt="" className="ls-final__rockets" aria-hidden="true" />
          <div className="ls-final__text">
            <h3 className="ls-final__title">{t('title').split(' ').slice(0, 2).join(' ')}<br /><span>{t('title').split(' ').slice(2).join(' ')}</span></h3>
            <p className="ls-final__desc">{t('subtitle')}</p>
          </div>
          <div className="ls-final__actions">
            <a className="btn btn--secondary" href="#demo">
              {t('requestDemo')}
              <img src="/images/right.png" alt="" aria-hidden="true" className="btn__icon" />
            </a>
            <a className="btn btn--primary" href="#contact">
              {t('contactSales')}
              <img src="/images/right.png" alt="" aria-hidden="true" className="btn__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


