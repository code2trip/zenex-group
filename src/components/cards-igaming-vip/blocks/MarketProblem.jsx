'use client';

import { useTranslations } from 'next-intl';

export default function MarketProblem() {
  const t = useTranslations('cardsVip.marketProblem');

  return (
    <div className="market-problem-section section-container tablet:pt-[100px] tablet:pb-[50px] tablet:px-10 mobile:pt-[70px] mobile:pb-[35px] mobile:px-0">
      {/* Заголовок и иконка как в market problem/src */}
      <div className="section-title-group section-inner tablet:w-full tablet:max-w-[720px] mobile:w-full mobile:max-w-[350px] mobile:gap-4">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/problem-icon.svg" alt="" />
          </div>
          <p className="title-text tablet:text-[50px] tablet:leading-[50px] mobile:text-[27px] mobile:leading-[27px]">
            <span className="dark">{t('title').split(' ')[0]} </span>
            <span className="accent">{t('title').split(' ').slice(1).join(' ')}</span>
          </p>
        </div>
        <div className="problem-description tablet:w-full tablet:max-w-[720px] mobile:w-full mobile:max-w-[350px] mobile:[&>p]:text-base mobile:[&>p]:leading-6">
          <p>{t('description')}</p>
        </div>
      </div>

      {/* Карточки проблем — 3 колонки × 2 строки, во всю ширину контейнера */}
      <div className="problem-cards-grid tablet:grid-cols-2 tablet:gap-5 tablet:w-full mobile:grid-cols-1 mobile:gap-2.5 mobile:w-full mobile:max-w-[350px]">
        {/* Blocked or declined transactions */}
        <div className="problem-card tablet:p-[18px] tablet:gap-2.5 mobile:flex-row mobile:items-center mobile:p-[18px] mobile:gap-2.5 mobile:h-auto mobile:min-h-0">
          <p className="tablet:text-[27px] tablet:leading-[27px] mobile:text-lg mobile:leading-[23.5px] mobile:flex-1">{t('problems.blocked')}</p>
          <div className="problem-icon-box tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
            <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
              <img src="/assets/image_c92b9845.png" alt="" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
            </div>
          </div>
        </div>

        {/* High transaction fees */}
        <div className="problem-card tablet:p-[18px] tablet:gap-2.5 mobile:flex-row mobile:items-center mobile:p-[18px] mobile:gap-2.5 mobile:h-auto mobile:min-h-0">
          <p className="tablet:text-[27px] tablet:leading-[27px] mobile:text-lg mobile:leading-[23.5px] mobile:flex-1">{t('problems.fees')}</p>
          <div className="problem-icon-box tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
            <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
              <img src="/assets/image_8daddbc1.png" alt="" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
            </div>
          </div>
        </div>

        {/* Deposit and withdrawal limits */}
        <div className="problem-card tablet:p-[18px] tablet:gap-2.5 mobile:flex-row mobile:items-center mobile:p-[18px] mobile:gap-2.5 mobile:h-auto mobile:min-h-0">
          <p className="tablet:text-[27px] tablet:leading-[27px] mobile:text-lg mobile:leading-[23.5px] mobile:flex-1">{t('problems.limits')}</p>
          <div className="problem-icon-box tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
            <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
              <img src="/assets/image_a5190a7d.png" alt="" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
            </div>
          </div>
        </div>

        {/* Long settlement times */}
        <div className="problem-card tablet:p-[18px] tablet:gap-2.5 mobile:flex-row mobile:items-center mobile:p-[18px] mobile:gap-2.5 mobile:h-auto mobile:min-h-0">
          <p className="tablet:text-[27px] tablet:leading-[27px] mobile:text-lg mobile:leading-[23.5px] mobile:flex-1">{t('problems.settlement')}</p>
          <div className="problem-icon-box tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
            <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
              <img src="/assets/image_e31ad966.png" alt="" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
            </div>
          </div>
        </div>

        {/* Difficulty in regions */}
        <div className="problem-card tablet:p-[18px] tablet:gap-2.5 mobile:flex-row mobile:items-center mobile:p-[18px] mobile:gap-2.5 mobile:h-auto mobile:min-h-0">
          <p className="tablet:text-[27px] tablet:leading-[27px] mobile:text-lg mobile:leading-[23.5px] mobile:flex-1">{t('problems.regions')}</p>
          <div className="problem-icon-box tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
            <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
              <img src="/assets/image_31bfa3fb.png" alt="" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
            </div>
          </div>
        </div>

        {/* No privacy */}
        <div className="problem-card tablet:p-[18px] tablet:gap-2.5 mobile:flex-row mobile:items-center mobile:p-[18px] mobile:gap-2.5 mobile:h-auto mobile:min-h-0">
          <p className="tablet:text-[27px] tablet:leading-[27px] mobile:text-lg mobile:leading-[23.5px] mobile:flex-1">{t('problems.privacy')}</p>
          <div className="problem-icon-box tablet:w-[122px] tablet:h-[122px] tablet:p-[19px] mobile:w-20 mobile:h-20 mobile:p-[12.459px] mobile:flex-none">
            <div className="icon-inner tablet:w-[72px] tablet:h-[72px] tablet:p-4 mobile:w-12 mobile:h-12 mobile:p-[10.492px]">
              <img src="/assets/image_ba116ca.png" alt="" className="tablet:w-10 tablet:h-10 mobile:w-7 mobile:h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


