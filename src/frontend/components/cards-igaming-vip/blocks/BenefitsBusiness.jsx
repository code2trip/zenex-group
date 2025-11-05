'use client';

import { useTranslations } from 'next-intl';

export default function BenefitsBusiness() {
  const t = useTranslations('cardsVip.benefitsBusiness');

  return (
    <div className="benefits-business-section section-container">
      {/* Левая иллюстрация по макету */}
      <img src="/assets/image_3cac8981.png" alt="Benefits illustration" className="business-left-img" />

      {/* Title */}
      <div className="section-title-group section-inner">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/Benefits-icon.svg" alt="" />
          </div>
          <p className="title-text">
            <span className="dark">{t('title')}</span>
          </p>
        </div>
      </div>

      {/* Frame 2085662083 - основной контент */}
      <div className="benefits-content-wrapper section-inner">
        {/* Cards list */}
        <div className="benefits-cards-list">
          {/* Card 1 */}
          <div className="benefit-card">
            <div className="card-text">
              <p>{t('benefits.customization')}</p>
            </div>
            <div className="card-icon-box gradient-teal">
              <div className="icon-inner">
                <img src="/assets/image_50727951.png" alt="" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="benefit-card">
            <div className="card-text">
              <p>{t('benefits.unlimited')}</p>
            </div>
            <div className="card-icon-box gradient-dark">
              <div className="icon-inner">
                <img src="/assets/image_77a6e2e0.png" alt="" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="benefit-card">
            <div className="card-text">
              <p>{t('benefits.communication')}</p>
            </div>
            <div className="card-icon-box gradient-gold">
              <div className="icon-inner">
                <img src="/assets/image_39df2c01.png" alt="" />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="benefit-card">
            <div className="card-text">
              <p>{t('benefits.loyalty')}</p>
            </div>
            <div className="card-icon-box gradient-teal">
              <div className="icon-inner">
                <img src="/assets/image_dd8ecfcf.png" alt="" />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="benefit-card">
            <div className="card-text">
              <p>{t('benefits.analytics')}</p>
            </div>
            <div className="card-icon-box gradient-dark">
              <div className="icon-inner">
                <img src="/assets/image_1351319b.png" alt="" />
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="benefit-card">
            <div className="card-text">
              <p>{t('benefits.support')}</p>
            </div>
            <div className="card-icon-box gradient-gold">
              <div className="icon-inner">
                <img src="/assets/image_a8493888.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Choose zenex 1 block */}
        <div className="zenex-showcase-card">
          {/* Background pattern */}
          <div className="absolute w-[552px] h-[414px] left-0 top-0 opacity-10" style={{ transform: 'rotate(-90deg)' }}>
            <div className="box-border flex flex-row flex-wrap items-start w-[1440px] h-[1440px] absolute left-[calc(50%-1440px/2+444px)] top-[-444px]" style={{ transform: 'rotate(-90deg)' }}>
              {Array.from({ length: 300 }).map((_, i) => (
                <div
                  key={i}
                  className={`box-border w-24 h-24 border-0 border-r border-b border-[#E9EAEB] border-solid ${i % 13 === 0 || i % 13 === 5 ? 'bg-[#F5F5F5]' : ''}`}
                  style={{ transform: 'rotate(-90deg)' }}
                />
              ))}
            </div>
          </div>

          {/* ZNX_Icon */}
          <div className="zenex-icon">
            <div className="icon-bg"></div>
            <img src="/assets/icon-zenex.svg" alt="" />
          </div>

          {/* Group 48100369 - карточки */}
          <div className="absolute w-[429.25px] h-[439.9px] left-[calc(50%-429.25px/2+1.17px)] top-[calc(50%-439.9px/2+10.95px)] relative z-10">
            {/* Credit card mockup my 3 - черная карточка (сзади) */}
            <img
              src="/assets/credit-card-mockup-my-3.svg"
              alt=""
              className="absolute block"
              style={{
                width: '368.66px',
                height: '322.54px',
                left: '0px',
                top: '100px',
                transform: 'rotate(0deg) translateY(45%)',
                transformOrigin: 'center center',
                zIndex: 2
              }}
            />

            {/* Credit card mockup my 1 - зеленая карточка (спереди, перекрывает черную) */}
            <img
              src="/assets/credit-card-mockup-my-1.svg"
              alt=""
              className="absolute block"
              style={{
                width: '322.54px',
                height: '368.66px',
                left: '106.7px',
                top: '100px',
                transform: 'rotate(360deg) translateX(30%) translateY(-80%)',
                transformOrigin: 'center center',
                zIndex: 1
              }}
            />
          </div>

          {/* Картинка поверх паттерна */}
          <img src="/assets/image_fd8cdccf.png" alt="" className="h-[447px] max-w-[initial] w-[410px] block ml-[-410px] box-border relative z-10" />
        </div>
      </div>
    </div>
  );
}
