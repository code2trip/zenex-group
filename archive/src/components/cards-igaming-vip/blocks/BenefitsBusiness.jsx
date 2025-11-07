'use client';

import { useTranslations } from 'next-intl';

export default function BenefitsBusiness() {
  const t = useTranslations('cardsVip.benefitsBusiness');
  const titleFull = t('title');
  const titleWords = titleFull.split(' ');
  const titleDark = titleWords.slice(0, Math.max(0, titleWords.length - 2)).join(' ');
  const titleAccent = titleWords.slice(-2).join(' ');

  return (
    <div className="benefits-business-section section-container tablet:py-[50px] tablet:px-10 mobile:py-[35px] mobile:px-5">
      {/* Левая иллюстрация по макету */}
      {/* <img src="/assets/image_3cac8981.png" alt="Benefits illustration" className="business-left-img tablet:hidden mobile:hidden" /> */}

      {/* Title */}
      <div className="section-title-group section-inner tablet:w-full tablet:max-w-[720px] mobile:w-full mobile:max-w-[350px] mobile:items-start">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/Benefits-icon.svg" alt="" />
          </div>
          <p className="title-text tablet:text-[50px] tablet:leading-[50px] mobile:text-[27px] mobile:leading-[27px]">
            <span className="dark">{titleDark} </span>
            <span className="accent">{titleAccent}</span>
          </p>
        </div>
      </div>

      {/* Frame 2085662083 - основной контент */}
      <div className="benefits-content-wrapper section-inner desktop:grid desktop:[grid-template-columns:60%_40%] desktop:items-stretch desktop:gap-10 tablet:!flex-col tablet:!gap-6 tablet:!w-full tablet:!max-w-full tablet:!h-auto mobile:!flex-col mobile:!gap-3 mobile:!w-full mobile:!max-w-full">
        {/* Изображение первым */}
        <picture className="desktop:!order-2 desktop:ml-0 desktop:shrink-0 tablet:!w-full tablet:!max-w-full tablet:!order-0 mobile:!w-full mobile:!max-w-full mobile:!order-0">
          <source media="(min-width: 1025px)" srcSet="/assets/background-pattern-bussines.png" />
          <source media="(min-width: 768px) and (max-width: 1024px)" srcSet="/assets/background-pattern-bussines-tablet.png" />
          <img
            src="/assets/background-pattern-bussines-mobile.png"
            alt="Business background pattern"
            className="w-full h-auto desktop:!h-[522px] tablet:!max-h-[522px] mobile:!h-[200px] object-contain rounded-[20px]"
          />
        </picture>

        {/* Cards list - карточки вторыми */}
        <div className="benefits-cards-list desktop:!order-1 desktop:flex-col desktop:gap-6 desktop:w-auto tablet:!w-full tablet:!flex tablet:!flex-row tablet:!flex-wrap tablet:!gap-5 tablet:!order-1 mobile:!w-full mobile:!flex mobile:!flex-col mobile:!gap-2.5 mobile:!order-1">
          {/* Card 1 */}
          <div className="benefit-card tablet:!w-[calc(50%-10px)] tablet:!min-w-0 tablet:!h-[167px] tablet:!p-[18px] mobile:w-full mobile:min-w-0 mobile:h-auto mobile:min-h-0 mobile:p-[18px] mobile:flex-row mobile:items-center mobile:gap-2.5">
            <div className="card-text tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:flex-1 mobile:[&>p]:text-base mobile:[&>p]:leading-6">
              <p>{t('benefits.customization')}</p>
            </div>
            <div className="card-icon-box gradient-teal tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
              <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
                <img src="/assets/image_50727951.png" alt="" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="benefit-card tablet:!w-[calc(50%-10px)] tablet:!min-w-0 tablet:!h-[167px] tablet:!p-[18px] mobile:w-full mobile:min-w-0 mobile:h-auto mobile:min-h-0 mobile:p-[18px] mobile:flex-row mobile:items-center mobile:gap-2.5">
            <div className="card-text tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:flex-1 mobile:[&>p]:text-base mobile:[&>p]:leading-6">
              <p>{t('benefits.unlimited')}</p>
            </div>
            <div className="card-icon-box gradient-dark tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
              <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
                <img src="/assets/image_77a6e2e0.png" alt="" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="benefit-card tablet:!w-[calc(50%-10px)] tablet:!min-w-0 tablet:!h-[167px] tablet:!p-[18px] mobile:w-full mobile:min-w-0 mobile:h-auto mobile:min-h-0 mobile:p-[18px] mobile:flex-row mobile:items-center mobile:gap-2.5">
            <div className="card-text tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:flex-1 mobile:[&>p]:text-base mobile:[&>p]:leading-6">
              <p>{t('benefits.communication')}</p>
            </div>
            <div className="card-icon-box gradient-gold tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
              <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
                <img src="/assets/image_39df2c01.png" alt="" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="benefit-card tablet:!w-[calc(50%-10px)] tablet:!min-w-0 tablet:!h-[167px] tablet:!p-[18px] mobile:w-full mobile:min-w-0 mobile:h-auto mobile:min-h-0 mobile:p-[18px] mobile:flex-row mobile:items-center mobile:gap-2.5">
            <div className="card-text tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:flex-1 mobile:[&>p]:text-base mobile:[&>p]:leading-6">
              <p>{t('benefits.loyalty')}</p>
            </div>
            <div className="card-icon-box gradient-teal tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
              <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
                <img src="/assets/image_dd8ecfcf.png" alt="" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="benefit-card tablet:!w-[calc(50%-10px)] tablet:!min-w-0 tablet:!h-[167px] tablet:!p-[18px] mobile:w-full mobile:min-w-0 mobile:h-auto mobile:min-h-0 mobile:p-[18px] mobile:flex-row mobile:items-center mobile:gap-2.5">
            <div className="card-text tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:flex-1 mobile:[&>p]:text-base mobile:[&>p]:leading-6">
              <p>{t('benefits.analytics')}</p>
            </div>
            <div className="card-icon-box gradient-dark tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
              <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
                <img src="/assets/image_1351319b.png" alt="" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="benefit-card tablet:!w-[calc(50%-10px)] tablet:!min-w-0 tablet:!h-[167px] tablet:!p-[18px] mobile:w-full mobile:min-w-0 mobile:h-auto mobile:min-h-0 mobile:p-[18px] mobile:flex-row mobile:items-center mobile:gap-2.5">
            <div className="card-text tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:flex-1 mobile:[&>p]:text-base mobile:[&>p]:leading-6">
              <p>{t('benefits.support')}</p>
            </div>
            <div className="card-icon-box gradient-gold tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
              <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
                <img src="/assets/image_a8493888.png" alt="" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
