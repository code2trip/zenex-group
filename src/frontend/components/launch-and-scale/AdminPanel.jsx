'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function AdminPanel() {
  const t = useTranslations('launchAndScale.admin');
  const locale = useLocale();
  const items = t.raw('items');
  return (
    <section className="ls-admin">
      <div className="container">
        <div className="ls-admin__head">
          <span className="ls-badge">
            <img src="/images/adminpanel.svg" alt="" />
          </span>
          <h2 className="ls-admin__title">
            {locale === 'ru' ? (
              <>
                <span>{t('title').split(' ')[0]}</span> {t('title').split(' ').slice(1).join(' ')}
              </>
            ) : (
              <>
                {t('title').split(' ').slice(0, -2).join(' ')} <span>{t('title').split(' ').slice(-2).join(' ')}</span>
              </>
            )}
          </h2>
        </div>

        <div className="ls-admin__grid">
          {items.map((item, index) => {
            const icons = ['/images/currencypair.svg', '/images/stakingstrategy.svg', '/images/statistics.svg', '/images/depositandwithdrawal.svg', '/images/cardproduct.svg', '/images/balancecontrol.svg', '/images/apikey.svg', '/images/kyc.svg'];
            const text = item.text;
            return (
              <div className="ls-admin__card" key={index}>
                <div className="ls-admin__icon" aria-hidden>
                  <img src={icons[index]} alt="" />
                </div>
                <p className="ls-admin__text">
                  {text}
                </p>
              </div>
            );
          })}
          <div className="ls-admin__highlight">
            <img src="/images/shturval.svg" alt="" className="ls-admin__shturval" aria-hidden="true" />
            <img src="/images/shturval2.svg" alt="" className="ls-admin__shturval2" aria-hidden="true" />
            <img src="/images/logo2.svg" alt="" className="ls-admin__logo" aria-hidden="true" />
            <h3 className="ls-admin__big"><strong>{t('highlight').split(' ')[0]} {t('highlight').split(' ')[1]}</strong> {t('highlight').split(' ').slice(2).join(' ')}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}


