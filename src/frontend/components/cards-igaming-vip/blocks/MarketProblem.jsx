'use client';

import { useTranslations } from 'next-intl';

export default function MarketProblem() {
  const t = useTranslations('cardsVip.marketProblem');
  const cards = [
    { key: 'blocked', image: '/assets/image_c92b9845.png' },
    { key: 'fees', image: '/assets/image_8daddbc1.png' },
    { key: 'limits', image: '/assets/image_a5190a7d.png' },
    { key: 'settlement', image: '/assets/image_e31ad966.png' },
    { key: 'regions', image: '/assets/image_31bfa3fb.png' },
    { key: 'privacy', image: '/assets/image_ba116ca.png' },
  ];

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
      <div className="problem-cards-grid grid w-full max-w-[1290px] mx-auto grid-cols-1 gap-4 tablet:max-w-[720px] tablet:grid-cols-2 tablet:gap-5 desktop:max-w-[1290px] desktop:grid-cols-3 desktop:gap-6">
        {cards.map(({ key, image }) => (
          <div
            key={key}
            className="flex w-full items-center gap-[10px] rounded-[20px] bg-white px-[18px] py-[18px] shadow-[0_4px_36.8px_rgba(0,0,0,0.05)] tablet:h-[116px] tablet:max-w-[350px] tablet:min-w-[350px] tablet:justify-between desktop:max-w-[414px]"
          >
            <p className="m-0 flex-1 text-[16px] font-normal leading-[24px] text-[#757575] tablet:text-[27px] tablet:leading-[27px] tablet:w-[150px] tablet:min-w-[150px] tablet:max-w-[150px] tablet:flex-none desktop:text-[18px] desktop:leading-[23.5px] desktop:font-bold">
              {t(`problems.${key}`)}
            </p>
            <div className="flex h-[100px] w-[100px] flex-none items-center justify-center gap-[10px] rounded-[18px] bg-[linear-gradient(180deg,#D4E2E4_0%,#7096A4_100%)] p-[16px] tablet:h-[122px] tablet:w-[122px] tablet:p-[19px]">
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.40)] bg-[rgba(255,255,255,0.25)] p-3 tablet:h-[72px] tablet:w-[72px] tablet:p-4">
                <img src={image} alt="" className="h-8 w-8 tablet:h-10 tablet:w-10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


