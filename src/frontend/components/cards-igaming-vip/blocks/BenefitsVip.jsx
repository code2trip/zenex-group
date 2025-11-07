'use client';

import { useTranslations } from 'next-intl';

export default function BenefitsVip() {
  const t = useTranslations('cardsVip.benefitsVip');

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
          <p className="title-text">
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
          <source media="(min-width: 1025px)" srcSet="/assets/background-pattern-vip.png" />
          <source media="(min-width: 768px) and (max-width: 1024px)" srcSet="/assets/background-pattern-vip-tablet.png" />
          <img
            src="/assets/background-pattern-vip-mobile.png"
            alt="VIP background pattern"
            className="vip-visual__image"
          />
        </picture>

        {/* Cards list - карточки справа */}
        <div className="vip-cards-list">
          {/* Card 1 */}
          <div className="vip-benefit-card">
            <div className="card-text">
              <p>{t('benefits.instant')}</p>
            </div>
            <div className="card-icon-box gradient-teal">
              <div className="icon-inner">
                <img src="/assets/vip-beenhere.svg" alt="Instant payouts icon" />
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="vip-benefit-card">
            <div className="card-text">
              <p>{t('benefits.limits')}</p>
            </div>
            <div className="card-icon-box gradient-dark">
              <div className="icon-inner">
                <img src="/assets/vip-speed.svg" alt="Spending limits icon" />
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="vip-benefit-card">
            <div className="card-text">
              <p>{t('benefits.integration')}</p>
            </div>
            <div className="card-icon-box gradient-gold">
              <div className="icon-inner">
                <img src="/assets/vip-reviews.svg" alt="Apple/Google Pay icon" />
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="vip-benefit-card">
            <div className="card-text">
              <p>{t('benefits.withdrawals')}</p>
            </div>
            <div className="card-icon-box gradient-teal">
              <div className="icon-inner">
                <img src="/assets/vip-web3.svg" alt="Cash withdrawals icon" />
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="vip-benefit-card">
            <div className="card-text">
              <p>{t('benefits.deposits')}</p>
            </div>
            <div className="card-icon-box gradient-dark">
              <div className="icon-inner">
                <img src="/assets/vip-credit_card_clock.svg" alt="Deposits methods icon" />
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="vip-benefit-card">
            <div className="card-text">
              <p>{t('benefits.recovery')}</p>
            </div>
            <div className="card-icon-box gradient-gold">
              <div className="icon-inner">
                <img src="/assets/vip-credit_card_gear.svg" alt="Balance recovery icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
