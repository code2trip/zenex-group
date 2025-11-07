'use client';

import { useTranslations } from 'next-intl';

export default function OurSolution() {
  const t = useTranslations('cardsVip.ourSolution');
  const titleText = t('title');
  const titleParts = titleText.split(' — ');
  const titleFirst = titleParts.length > 1 ? titleParts[0] + ' — ' : '';
  const titleSecond = titleParts.length > 1 ? titleParts[1] : titleText;

  return (
    <div className="our-solution-section section-container tablet:py-[50px] tablet:px-10 mobile:py-[35px] mobile:px-5">
      <div className="section-title-group section-inner tablet:w-full tablet:max-w-[720px] mobile:w-full mobile:max-w-[350px]">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/User-Centricity-icon.svg" alt="" />
          </div>
          <p className="title-text tablet:text-[50px] tablet:leading-[50px] mobile:text-[27px] mobile:leading-[27px]">
            <span className="dark">{titleFirst}</span>
            <span className="accent">{titleSecond}</span>
          </p>
        </div>
        <div className="solution-description tablet:w-full tablet:max-w-[720px] tablet:[&>p]:text-base tablet:[&>p]:leading-6 mobile:w-full mobile:max-w-[350px] mobile:[&>p]:text-base mobile:[&>p]:leading-6">
          <p>{t('description')}</p>
        </div>
      </div>
      {/* Первая строка: Unlimited, 100% approval rate, Protection */}
      <div className="solution-cards-row tablet:flex-wrap tablet:gap-5 tablet:w-full tablet:max-w-full mobile:flex-col mobile:gap-5 mobile:w-full mobile:max-w-[350px]">
        {/* Unlimited Card */}
        <div className="solution-card card-unlimited tablet:w-[calc(50%-10px)] tablet:min-w-0 tablet:h-[318px] mobile:w-full mobile:h-auto mobile:min-h-[200px] mobile:p-[24px_18px]">
          <h3 className="tablet:text-[27px] tablet:leading-[27px] mobile:text-lg mobile:leading-[23.5px] mobile:relative mobile:top-auto mobile:left-auto mobile:mb-10">{t('features.unlimited.title')}</h3>
          <p className="tablet:text-base tablet:leading-6 tablet:w-1/2 tablet:max-w-[333px] mobile:text-base mobile:leading-6 mobile:relative mobile:bottom-auto mobile:left-auto mobile:mt-auto mobile:w-full mobile:max-w-[250px]">{t('features.unlimited.description')}</p>
          {/* Group 48100372 - изображение */}
          <div className="card-image-unlimited">
            <img src="/assets/image_a9ae2e7c.png" alt="" />
          </div>
        </div>

        {/* 100% Approval Rate Card */}
        <div className="solution-card card-approval tablet:w-[calc(50%-10px)] tablet:min-w-0 tablet:h-[318px] mobile:w-full mobile:h-auto mobile:min-h-[200px] mobile:p-[24px_18px]">
          <h3 className="tablet:text-[27px] tablet:leading-[27px] mobile:text-lg mobile:leading-[23.5px] mobile:relative mobile:top-auto mobile:left-auto mobile:mb-10">{t('features.approval.title')}</h3>
          <p className="tablet:text-base tablet:leading-6 tablet:w-1/2 tablet:max-w-[333px] mobile:text-base mobile:leading-6 mobile:relative mobile:bottom-auto mobile:left-auto mobile:mt-auto mobile:w-full mobile:max-w-[250px]">{t('features.approval.description')}</p>
          {/* Group 48100371 - изображение */}
          <div className="card-image-approval">
            <img src="/assets/image_a70b7741.png" alt="" />
          </div>
        </div>

        {/* Protection Card */}
        <div className="solution-card card-protection tablet:w-[calc(50%-10px)] tablet:min-w-0 tablet:h-[318px] mobile:w-full mobile:h-auto mobile:min-h-[200px] mobile:p-[24px_18px]">
          <h3 className="tablet:text-[27px] tablet:leading-[27px] mobile:text-lg mobile:leading-[23.5px] mobile:relative mobile:top-auto mobile:left-auto mobile:mb-10">{t('features.protection.title')}</h3>
          <p className="tablet:text-base tablet:leading-6 tablet:w-1/2 tablet:max-w-[333px] mobile:text-base mobile:leading-6 mobile:relative mobile:bottom-auto mobile:left-auto mobile:mt-auto mobile:w-full mobile:max-w-[250px]">{t('features.protection.description')}</p>
          {/* Group 48100372 - изображение */}
          <div className="card-image-protection">
            <img src="/assets/image_b60a68d7.png" alt="" />
          </div>
        </div>
      </div>

      {/* Вторая строка: Transparent fees и Access worldwide */}
      <div className="solution-cards-row solution-cards-row-second tablet:mt-5 mobile:mt-5">
        {/* Transparent Fees Card */}
        <div className="solution-card card-fees tablet:w-[calc(50%-10px)] tablet:min-w-0 tablet:h-[318px] mobile:w-full mobile:h-auto mobile:min-h-[200px] mobile:p-[24px_18px]">
          <h3 className="tablet:text-[27px] tablet:leading-[27px] mobile:text-lg mobile:leading-[23.5px] mobile:relative mobile:top-auto mobile:left-auto mobile:mb-10">{t('features.fees.title')}</h3>
          <p className="tablet:text-base tablet:leading-6 tablet:w-1/2 tablet:max-w-[333px] mobile:text-base mobile:leading-6 mobile:relative mobile:bottom-auto mobile:left-auto mobile:mt-auto mobile:w-full mobile:max-w-[250px]">{t('features.fees.description')}</p>
          {/* Group 48100372 - монеты */}
          <div className="card-image-fees">
            <img src="/assets/image_c5ebdd65.png" alt="" />
          </div>
        </div>

        {/* Access Worldwide Card */}
        <div className="solution-card card-worldwide tablet:w-[calc(50%-10px)] tablet:min-w-0 tablet:h-[318px] mobile:w-full mobile:h-auto mobile:min-h-[200px] mobile:p-[24px_18px]">
          <h3 className="tablet:text-[27px] tablet:leading-[27px] mobile:text-lg mobile:leading-[23.5px] mobile:relative mobile:top-auto mobile:left-auto mobile:mb-10">{t('features.worldwide.title')}</h3>
          <p className="tablet:text-base tablet:leading-6 tablet:w-1/2 tablet:max-w-[333px] mobile:text-base mobile:leading-6 mobile:relative mobile:bottom-auto mobile:left-auto mobile:mt-auto mobile:w-full mobile:max-w-[250px]">{t('features.worldwide.description')}</p>
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


