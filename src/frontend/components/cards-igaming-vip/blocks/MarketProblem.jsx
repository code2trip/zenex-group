'use client';

import { useTranslations } from 'next-intl';

export default function MarketProblem() {
  const t = useTranslations('cardsVip.marketProblem');
  const cards = [
    { key: 'blocked', image: '/assets/image_c92b9845.png' },
    { key: 'fees', image: '/assets/image_8daddbc1.png' },
    { key: 'limits', image: '/assets/image_a5190a7d.png' },
    { key: 'settlement', image: '/assets/image_e31ad966.png' },
    { key: 'regions', image: '/assets/image_31bfa3fb.png' },
    { key: 'privacy', image: '/assets/image_ba116ca.png' },
  ];

  return (
    <div className="market-problem-section section-container">
      <div className="section-title-group section-inner">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/problem-icon.svg" alt="" />
          </div>
          <p className="title-text">
            <span className="dark">{t('title').split(' ')[0]} </span>
            <span className="accent">{t('title').split(' ').slice(1).join(' ')}</span>
          </p>
        </div>
        <div className="problem-description">
          <p>{t('description')}</p>
        </div>
      </div>

      <div className="market-problem__grid">
        {cards.map(({ key, image }) => (
          <div key={key} className="market-problem__card">
            <p className="market-problem__text">{t(`problems.${key}`)}</p>
            <div className="market-problem__icon">
              <div className="market-problem__icon-inner">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


