'use client';

import { useTranslations } from 'next-intl';

export default function OurSolution() {
  const t = useTranslations('aff.ourSolution');
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
          <div className="solution-card-text">
            <h3>{t('features.unlimited.title')}</h3>
            <p>{t('features.unlimited.description')}</p>
          </div>
          {/* Group 48100372 - изображение */}
          <div className="card-image-unlimited">
            <img src="/assets/image_c92b986575685687.svg" alt="" />
          </div>
        </div>

        {/* 100% Approval Rate Card */}
        <div className="solution-card card-approval">
          <div className="solution-card-text">
            <h3>{t('features.approval.title')}</h3>
            <p>{t('features.approval.description')}</p>
          </div>
          {/* Group 48100371 - изображение */}
          <div className="card-image-approval">
            <img src="/assets/image_c92b98657687.svg" alt="" />
          </div>
        </div>

        {/* Protection Card */}
        <div className="solution-card card-protection">
          <div className="solution-card-text">
            <h3>{t('features.protection.title')}</h3>
            <p>{t('features.protection.description')}</p>
          </div>
          {/* Group 48100372 - изображение */}
          <div className="card-image-protection">
            <img src="/assets/image_c92b98456545.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Вторая строка: Transparent fees и Access worldwide */}
      <div className="solution-cards-row solution-cards-row-second">
        {/* Transparent Fees Card */}
        <div className="solution-card card-fees">
          <div className="solution-card-text">
            <h3>{t('features.fees.title')}</h3>
            <p>{t('features.fees.description')}</p>
          </div>
          {/* Group 48100372 - монеты */}
          <div className="card-image-fees">
            <img src="/assets/image_c92b91848987.svg" alt="" />
          </div>
        </div>

        {/* Access Worldwide Card */}
        <div className="solution-card card-worldwide">
          <div className="solution-card-text">
            <h3>{t('features.worldwide.title')}</h3>
            <p>{t('features.worldwide.description')}</p>
          </div>
          {/* Group с эллипсами и глобусом */}
          <div className="card-image-worldwide">
            <div className="worldwide-globe">
              <img src="/assets/image_c92b7055.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

