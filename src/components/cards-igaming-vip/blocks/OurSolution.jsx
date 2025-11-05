'use client';

import { useTranslations } from 'next-intl';

export default function OurSolution() {
  const t = useTranslations('cardsVip.ourSolution');
  const titleText = t('title');
  const titleParts = titleText.split(' — ');
  const titleFirst = titleParts.length > 1 ? titleParts[0] + ' — ' : '';
  const titleSecond = titleParts.length > 1 ? titleParts[1] : titleText;

  return (
    <div className="our-solution-section section-container">
      <div className="section-title-group section-inner">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/User-Centricity-icon.svg" alt="" />
          </div>
          <p className="title-text">
            <span className="dark">{titleFirst}</span>
            <span className="accent">{titleSecond}</span>
          </p>
        </div>
        <div className="solution-description">
          <p>{t('description')}</p>
        </div>
      </div>
      {/* Первая строка: Unlimited, 100% approval rate, Protection */}
      <div className="solution-cards-row">
        {/* Unlimited Card */}
        <div className="solution-card card-unlimited">
          <h3>{t('features.unlimited.title')}</h3>
          <p>{t('features.unlimited.description')}</p>
          {/* Group 48100372 - изображение */}
          <div className="card-image-unlimited">
            <img src="/assets/image_a9ae2e7c.png" alt="" />
          </div>
        </div>

        {/* 100% Approval Rate Card */}
        <div className="solution-card card-approval">
          <h3>{t('features.approval.title')}</h3>
          <p>{t('features.approval.description')}</p>
          {/* Group 48100371 - изображение */}
          <div className="card-image-approval">
            <img src="/assets/image_a70b7741.png" alt="" />
          </div>
        </div>

        {/* Protection Card */}
        <div className="solution-card card-protection">
          <h3>{t('features.protection.title')}</h3>
          <p>{t('features.protection.description')}</p>
          {/* Group 48100372 - изображение */}
          <div className="card-image-protection">
            <img src="/assets/image_b60a68d7.png" alt="" />
          </div>
        </div>
      </div>

      {/* Вторая строка: Transparent fees и Access worldwide */}
      <div className="solution-cards-row solution-cards-row-second">
        {/* Transparent Fees Card */}
        <div className="solution-card card-fees">
          <h3>{t('features.fees.title')}</h3>
          <p>{t('features.fees.description')}</p>
          {/* Group 48100372 - монеты */}
          <div className="card-image-fees">
            <img src="/assets/image_c5ebdd65.png" alt="" />
          </div>
        </div>

        {/* Access Worldwide Card */}
        <div className="solution-card card-worldwide">
          <h3>{t('features.worldwide.title')}</h3>
          <p>{t('features.worldwide.description')}</p>
          {/* Group с эллипсами и глобусом */}
          <div className="card-image-worldwide">
            <div className="worldwide-ellipses">
              <div className="ellipse-outer"></div>
              <div className="ellipse-inner"></div>
            </div>
            <div className="worldwide-globe">
              <img src="/assets/image_7d6021e4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


