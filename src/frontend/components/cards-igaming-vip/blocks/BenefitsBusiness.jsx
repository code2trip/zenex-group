'use client';

import { useTranslations } from 'next-intl';

export default function BenefitsBusiness() {
  const t = useTranslations('cardsVip.benefitsBusiness');
  const titleFull = t('title');
  const titleWords = titleFull.split(' ');
  const titleDark = titleWords.slice(0, Math.max(0, titleWords.length - 2)).join(' ');
  const titleAccent = titleWords.slice(-2).join(' ');

  return (
    <div className="benefits-business-section section-container">
      {/* Левая иллюстрация по макету */}
      {/* <img src="/assets/image_3cac8981.png" alt="Benefits illustration" className="business-left-img" /> */}

      {/* Title */}
      <div className="section-title-group section-inner">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/Benefits-icon.svg" alt="" />
          </div>
          <p className="title-text">
            <span className="dark">{titleDark} </span>
            <span className="accent">{titleAccent}</span>
          </p>
        </div>
      </div>

      {/* Frame 2085662083 - основной контент */}
      <div className="benefits-content-wrapper">
        {/* Изображение первым */}
        <picture className="benefits-visual">
          <source media="(min-width: 1025px)" srcSet="/assets/background-pattern-bussines.png" />
          <source media="(min-width: 768px) and (max-width: 1024px)" srcSet="/assets/background-pattern-bussines-tablet.png" />
          <img
            src="/assets/background-pattern-bussines-mobile.png"
            alt="Business background pattern"
            className="benefits-visual__image"
          />
        </picture>

        {/* Cards list - карточки вторыми */}
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
      </div>
    </div>
  );
}
