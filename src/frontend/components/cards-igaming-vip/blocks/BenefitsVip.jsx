'use client';

import { useTranslations } from 'next-intl';

export default function BenefitsVip() {
  const t = useTranslations('cardsVip.benefitsVip');
  const benefits = t.raw('benefits');
  const benefitOrder = ['instant', 'limits', 'integration', 'withdrawals', 'deposits', 'recovery'];

  return (
    <div className="benefits-vip-section section-container">
      {/* Декоративный фон справа снизу */}
      <img
        src="/assets/code_decor-vip.svg"
        alt=""
        className="benefits-vip-decor"
      />

      {/* Title */}
      <div className="section-title-group section-inner">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/Excellence-icon.svg" alt="" />
          </div>
          <p className="title-text section-heading">
            <span className="dark">{t('title').split(' ').slice(0, 2).join(' ')} </span>
            <span className="accent">{t('title').split(' ').slice(2).join(' ')}</span>
          </p>
        </div>
        <div className="benefits-vip-description">
          <p>{t('description')}</p>
        </div>
      </div>

      {/* Frame 2085662083 - основной контент */}
      <div className="vip-content-wrapper section-inner">
        {/* Изображение слева */}
        <picture className="vip-visual">
          <source media="(max-width: 600px)" srcSet="/assets/background-pattern-vip-mobile.svg" />
          <source media="(max-width: 1024px)" srcSet="/assets/background-pattern-vip-tablet.svg" />
          <img
            src="/assets/background-pattern-vip.png"
            alt="VIP background pattern"
            className="vip-visual__image"
          />
        </picture>

        {/* Cards list - карточки справа */}
        <div className="vip-cards-list">
          {benefitOrder.map((key) => {
            const benefit = benefits[key];
            if (!benefit) return null;

            const iconMap = {
              instant: '/assets/vip-beenhere.svg',
              limits: '/assets/vip-speed.svg',
              integration: '/assets/vip-reviews.svg',
              withdrawals: '/assets/vip-web3.svg',
              deposits: '/assets/vip-credit_card_clock.svg',
              recovery: '/assets/vip-credit_card_gear.svg',
            };

            const gradientMap = {
              instant: 'gradient-teal',
              limits: 'gradient-dark',
              integration: 'gradient-gold',
              withdrawals: 'gradient-teal',
              deposits: 'gradient-dark',
              recovery: 'gradient-gold',
            };

            const value = typeof benefit === 'string'
              ? { before: '', highlight: benefit, after: '' }
              : benefit;
            const { before = '', highlight = '', after = '' } = value;

            return (
              <div className="vip-benefit-card" key={key}>
                <div className="card-text">
                  <p>
                    {before}
                    {highlight && <strong>{highlight}</strong>}
                    {after}
                  </p>
                </div>
                <div className={`card-icon-box ${gradientMap[key] || ''}`}>
                  <div className="icon-inner">
                    <img src={iconMap[key]} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
