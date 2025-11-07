'use client';

import { useTranslations } from 'next-intl';

export default function Customization() {
  const t = useTranslations('launchAndScale.customization');
  const leftColumn = {
    icon: '/images/palette2.svg',
    titleKey: 'interface',
  };
  const rightColumn = {
    icon: '/images/sound.svg',
    titleKey: 'marketing',
  };
  return (
    <section className="ls-customization">
      <div className="container">
        <div className="ls-customization__head">
          <span className="ls-badge">
            <img src="/images/custom.svg" alt="" />
          </span>
          <h2 className="ls-customization__title">
            {t('title').split(' ')[0]} <span>{t('title').split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <div className="ls-customization__grid">
          <div className="ls-customization__card">
            <div className="ls-customization__card-head">
              <div className="ls-customization__icon">
                <img src={leftColumn.icon} alt="" />
              </div>
              <h3 className="ls-customization__card-title">{t(`${leftColumn.titleKey}.title`)}</h3>
            </div>
            <ul className="ls-customization__list">
              {t.raw(`${leftColumn.titleKey}.items`).map((item, index) => {
                const text = item;
                return (
                  <li key={index}>
                    <img src="/images/checkcircle2.svg" alt="" className="ls-customization__check" />
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="ls-customization__card">
            <div className="ls-customization__card-head">
              <div className="ls-customization__icon">
                <img src={rightColumn.icon} alt="" />
              </div>
              <h3 className="ls-customization__card-title">{t(`${rightColumn.titleKey}.title`)}</h3>
            </div>
            <ul className="ls-customization__list">
              {t.raw(`${rightColumn.titleKey}.items`).map((item, index) => {
                const text = item;
                return (
                  <li key={index}>
                    <img src="/images/checkcircle3.svg" alt="" className="ls-customization__check" />
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

