'use client';

import { useTranslations } from 'next-intl';

export default function BenefitsVip() {
  const t = useTranslations('cardsVip.benefitsVip');

  return (
    <div className="benefits-vip-section section-container tablet:py-[50px] tablet:px-10 mobile:py-[35px] mobile:px-5">
      {/* Декоративный фон справа снизу */}
      <img
        src="/assets/code_decor-vip.svg"
        alt=""
        className="benefits-vip-decor"
      />

      {/* Title */}
      <div className="section-title-group section-inner tablet:w-full tablet:max-w-[720px] mobile:w-full mobile:max-w-[350px] mobile:items-start">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/Excellence-icon.svg" alt="" />
          </div>
          <p className="title-text tablet:text-[50px] tablet:leading-[50px] mobile:text-[27px] mobile:leading-[27px]">
            <span className="dark">{t('title').split(' ').slice(0, 2).join(' ')} </span>
            <span className="accent">{t('title').split(' ').slice(2).join(' ')}</span>
          </p>
        </div>
        <div className="solution-description tablet:w-full tablet:max-w-[720px] tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:max-w-[350px] mobile:[&>p]:text-base mobile:[&>p]:leading-6">
          <p>{t('description')}</p>
        </div>
      </div>

      {/* Frame 2085662083 - основной контент */}
      <div className="vip-content-wrapper section-inner desktop:grid desktop:[grid-template-columns:40%_60%] desktop:items-stretch desktop:gap-10 tablet:!flex-col tablet:!gap-6 tablet:!w-full tablet:!max-w-full mobile:!flex-col mobile:!gap-3 mobile:!w-full mobile:!max-w-full">
        {/* Изображение слева */}
        <picture className="desktop:!order-1 desktop:ml-0 desktop:shrink-0 tablet:!w-full tablet:!max-w-full tablet:!order-0 mobile:!w-full mobile:!max-w-full mobile:!order-0">
          <source media="(min-width: 1025px)" srcSet="/assets/background-pattern-vip.png" />
          <source media="(min-width: 768px) and (max-width: 1024px)" srcSet="/assets/background-pattern-vip-tablet.png" />
          <img
            src="/assets/background-pattern-vip-mobile.png"
            alt="VIP background pattern"
            className="w-full h-auto desktop:!max-h-[522px] desktop:!h-auto tablet:!max-h-[522px] mobile:!h-[200px] object-contain rounded-[20px]"
          />
        </picture>

        {/* Cards list - карточки справа */}
        <div className="vip-cards-list desktop:!order-2 desktop:flex-col desktop:gap-6 desktop:w-auto tablet:!w-full tablet:!flex tablet:!flex-row tablet:!flex-wrap tablet:!gap-5 tablet:!order-1 mobile:!w-full mobile:!flex mobile:!flex-col mobile:!gap-2.5 mobile:!order-1">
          {/* Card 1 */}
          <div className="vip-benefit-card tablet:!w-[calc(50%-10px)] tablet:!min-w-0 tablet:!h-auto tablet:!p-[18px] mobile:w-full mobile:min-w-0 mobile:h-auto mobile:min-h-0 mobile:p-[18px] mobile:flex-row mobile:items-center mobile:gap-2.5">
            <div className="card-text tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:flex-1 mobile:[&>p]:text-base mobile:[&>p]:leading-6">
              <p>{t('benefits.instant')}</p>
            </div>
            <div className="card-icon-box gradient-teal tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
              <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
                <img src="/assets/vip-beenhere.svg" alt="Instant payouts icon" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="vip-benefit-card tablet:!w-[calc(50%-10px)] tablet:!min-w-0 tablet:!h-auto tablet:!p-[18px] mobile:w-full mobile:min-w-0 mobile:h-auto mobile:min-h-0 mobile:p-[18px] mobile:flex-row mobile:items-center mobile:gap-2.5">
            <div className="card-text tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:flex-1 mobile:[&>p]:text-base mobile:[&>p]:leading-6">
              <p>{t('benefits.limits')}</p>
            </div>
            <div className="card-icon-box gradient-dark tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
              <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
                <img src="/assets/vip-speed.svg" alt="Spending limits icon" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="vip-benefit-card tablet:!w-[calc(50%-10px)] tablet:!min-w-0 tablet:!h-auto tablet:!p-[18px] mobile:w-full mobile:min-w-0 mobile:h-auto mobile:min-h-0 mobile:p-[18px] mobile:flex-row mobile:items-center mobile:gap-2.5">
            <div className="card-text tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:flex-1 mobile:[&>p]:text-base mobile:[&>p]:leading-6">
              <p>{t('benefits.integration')}</p>
            </div>
            <div className="card-icon-box gradient-gold tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
              <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
                <img src="/assets/vip-reviews.svg" alt="Apple/Google Pay icon" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="vip-benefit-card tablet:!w-[calc(50%-10px)] tablet:!min-w-0 tablet:!h-auto tablet:!p-[18px] mobile:w-full mobile:min-w-0 mobile:h-auto mobile:min-h-0 mobile:p-[18px] mobile:flex-row mobile:items-center mobile:gap-2.5">
            <div className="card-text tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:flex-1 mobile:[&>p]:text-base mobile:[&>p]:leading-6">
              <p>{t('benefits.withdrawals')}</p>
            </div>
            <div className="card-icon-box gradient-teal tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
              <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
                <img src="/assets/vip-web3.svg" alt="Cash withdrawals icon" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="vip-benefit-card tablet:!w-[calc(50%-10px)] tablet:!min-w-0 tablet:!h-auto tablet:!p-[18px] mobile:w-full mobile:min-w-0 mobile:h-auto mobile:min-h-0 mobile:p-[18px] mobile:flex-row mobile:items-center mobile:gap-2.5">
            <div className="card-text tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:flex-1 mobile:[&>p]:text-base mobile:[&>p]:leading-6">
              <p>{t('benefits.deposits')}</p>
            </div>
            <div className="card-icon-box gradient-dark tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
              <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
                <img src="/assets/vip-credit_card_clock.svg" alt="Deposits methods icon" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="vip-benefit-card tablet:!w-[calc(50%-10px)] tablet:!min-w-0 tablet:!h-auto tablet:!p-[18px] mobile:w-full mobile:min-w-0 mobile:h-auto mobile:min-h-0 mobile:p-[18px] mobile:flex-row mobile:items-center mobile:gap-2.5">
            <div className="card-text tablet:[&>p]:text-lg tablet:[&>p]:leading-7 mobile:w-full mobile:flex-1 mobile:[&>p]:text-base mobile:[&>p]:leading-6">
              <p>{t('benefits.recovery')}</p>
            </div>
            <div className="card-icon-box gradient-gold tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
              <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
                <img src="/assets/vip-credit_card_gear.svg" alt="Balance recovery icon" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
