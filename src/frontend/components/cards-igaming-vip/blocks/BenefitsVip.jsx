'use client';

import { useTranslations } from 'next-intl';

export default function BenefitsVip() {
  const t = useTranslations('cardsVip.benefitsVip');

  return (
    <div className="benefits-vip-section section-container">
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
        <div className="solution-description">
          <p>{t('description')}</p>
        </div>
      </div>

      {/* Frame 2085662083 - основной контент */}
      <div className="vip-content-wrapper section-inner">
        {/* Choose zenex 1 block - зеленый блок слева */}
        <div className="vip-showcase-card">
          {/* ZNX_Icon */}
          <div className="zenex-icon">
            <div className="icon-bg"></div>
            <img src="/assets/icon-zenex.svg" alt="" />
          </div>

          {/* Frame 2085662128 - кредитные карточки */}
          <div className="absolute w-[414px] h-[309px] left-[calc(50%-414px/2)] top-[calc(50%-309px/2-0.5px)] z-10 overflow-visible">
            {/* Credit card mockup my2 - черная карточка (сзади) */}
            <img
              src="/assets/credit-card-mockup-vip-2.svg"
              alt="Credit card mockup"
              className="absolute block"
              style={{
                width: '368.66px',
                height: '322.54px',
                left: 'calc(50%)',
                top: 'calc(50%)',
                transform: 'rotate(-5deg) translateX(-5%) translateY(55%)',
                transformOrigin: 'center center',
                objectFit: 'fill',
                zIndex: 1
              }}
            />
            {/* Credit card mockup my 1 - зеленая карточка (спереди, перекрывает черную) */}
            <img
              src="/assets/credit-card-mockup-vip-1.svg"
              alt="Credit card mockup VIP"
              className="absolute block"
              style={{
                width: '368.66px',
                height: '322.54px',
                left: '50%',
                top: '50%',
                transform: 'rotate(5deg) translateX(10%) translateY(-65%)',
                transformOrigin: 'center center',
                objectFit: 'fill',
                zIndex: 2
              }}
            />
          </div>
        </div>

        {/* Cards list */}
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
