'use client';

import { useTranslations } from 'next-intl';

export default function GetStarted() {
  const t = useTranslations('cardsVip.getStarted');

  return (
    <div className="get-started-section">
      {/* Get Started with Ns.Cards iGaming VIP in Just 96 Hours */}
      <div className="get-started-container tablet:py-[50px] tablet:px-10 tablet:pb-[100px] mobile:py-[35px] mobile:px-5 mobile:pb-[70px]">
        {/* Title */}
        <div className="section-title-group section-inner tablet:w-full tablet:max-w-[720px] mobile:w-full mobile:max-w-[350px]">
          <div className="title-row">
            <div className="icon-box">
              <img src="/assets/Career-icon.svg" alt="" />
            </div>
            <p className="title-text tablet:text-[50px] tablet:leading-[50px] mobile:text-[27px] mobile:leading-[27px]">
              <span className="accent">{t('title')}</span>
            </p>
          </div>
        </div>

        {/* Frame 352282 - две колонки */}
        <div className="get-started-columns tablet:flex-row tablet:h-[454px] tablet:gap-6 mobile:flex-col mobile:h-auto mobile:gap-5">
          {/* Left column: Frame 352165 - Integration Options */}
          <div className="integration-column tablet:w-[414px] tablet:h-[454px] tablet:py-[60px] tablet:px-6 tablet:pb-20 mobile:w-full mobile:h-auto mobile:min-h-0 mobile:py-6 mobile:px-[18px] mobile:pb-[30px]">
            {/* Frame 352279 - контент */}
            <div className="integration-content tablet:w-full tablet:gap-6 mobile:w-full mobile:gap-6">
              {/* Integration Options */}
              <h2 className="tablet:text-[50px] tablet:leading-[50px] tablet:h-[100px] tablet:w-[312px] mobile:text-[27px] mobile:leading-[27px] mobile:h-auto mobile:w-full">{t('integration.title')}</h2>

              {/* Frame 2085661939 - пункт 1 */}
              <div className="integration-item tablet:gap-5 tablet:w-full mobile:flex-row mobile:gap-2.5 mobile:w-full">
                {/* Icon */}
                <div className="item-number tablet:w-[46px] tablet:h-[46px] tablet:px-2 tablet:py-[9px] mobile:w-[46px] mobile:h-[46px] mobile:px-2 mobile:py-[9px] mobile:flex-none">
                  <span className="tablet:text-[27px] tablet:leading-[27px] mobile:text-[27px] mobile:leading-[27px]">1</span>
                </div>
                {/* Text */}
                <p className="tablet:text-base tablet:leading-6 mobile:text-base mobile:leading-6 mobile:flex-1">{t('integration.option1')}</p>
              </div>

              {/* Frame 2085661940 - пункт 2 */}
              <div className="integration-item tablet:gap-5 tablet:w-full mobile:flex-row mobile:gap-2.5 mobile:w-full">
                {/* Icon */}
                <div className="item-number tablet:w-[46px] tablet:h-[46px] tablet:px-2 tablet:py-[9px] mobile:w-[46px] mobile:h-[46px] mobile:px-2 mobile:py-[9px] mobile:flex-none">
                  <span className="tablet:text-[27px] tablet:leading-[27px] mobile:text-[27px] mobile:leading-[27px]">2</span>
                </div>
                {/* Text */}
                <p className="tablet:text-base tablet:leading-6 mobile:text-base mobile:leading-6 mobile:flex-1">{t('integration.option2')}</p>
              </div>
            </div>

            {/* Frame 352281 - декоративный элемент справа внизу */}
            <div className="absolute w-[300px] h-[164px] right-0 bottom-0 transform scale-y-[-1] z-10">
              {/* SVG декор */}
              <img src="/assets/image_frame_352281.svg" alt="" className="w-full h-full object-contain" />
            </div>

            {/* Декоративные эллипсы */}
            <div className="absolute w-[399px] h-[397px] left-[40px] top-[45px] transform rotate-[-180deg] opacity-20 pointer-events-none" />
            <div className="absolute w-[481px] h-[487px] left-0 top-0 opacity-40 transform rotate-[180deg] pointer-events-none" />
          </div>

          {/* Right column: Frame 352141 - Card issuance options */}
          <div className="issuance-column tablet:w-[calc(100%-414px-24px)] tablet:h-[454px] tablet:py-[60px] tablet:px-6 tablet:pb-20 mobile:w-full mobile:h-auto mobile:min-h-0 mobile:py-6 mobile:px-[18px]">
            {/* Frame 352279 - контент */}
            <div className="issuance-content tablet:w-full tablet:gap-6 mobile:w-full mobile:gap-6">
              {/* Card issuance options */}
              <h2 className="tablet:text-[50px] tablet:leading-[50px] tablet:h-[100px] tablet:w-[360px] mobile:text-[27px] mobile:leading-[27px] mobile:h-auto mobile:w-full">{t('issuance.title')}</h2>

              {/* Frame 2085661939 - пункт 1 */}
              <div className="issuance-item tablet:gap-5 tablet:w-full mobile:flex-row mobile:gap-2.5 mobile:w-full">
                {/* Icon */}
                <div className="item-number tablet:w-[46px] tablet:h-[46px] tablet:px-2 tablet:py-[9px] mobile:w-[46px] mobile:h-[46px] mobile:px-2 mobile:py-[9px] mobile:flex-none">
                  <span className="tablet:text-[27px] tablet:leading-[27px] mobile:text-[27px] mobile:leading-[27px]">1</span>
                </div>
                {/* Text */}
                <p className="tablet:text-base tablet:leading-6 mobile:text-base mobile:leading-6 mobile:flex-1">{t('issuance.option1')}</p>
              </div>

              {/* Frame 2085661940 - пункт 2 */}
              <div className="issuance-item tablet:gap-5 tablet:w-full mobile:flex-row mobile:gap-2.5 mobile:w-full">
                {/* Icon */}
                <div className="item-number tablet:w-[46px] tablet:h-[46px] tablet:px-2 tablet:py-[9px] mobile:w-[46px] mobile:h-[46px] mobile:px-2 mobile:py-[9px] mobile:flex-none">
                  <span className="tablet:text-[27px] tablet:leading-[27px] mobile:text-[27px] mobile:leading-[27px]">2</span>
                </div>
                {/* Text */}
                <p className="tablet:text-base tablet:leading-6 mobile:text-base mobile:leading-6 mobile:flex-1">{t('issuance.option2')}</p>
              </div>

              {/* Frame 2085661941 - пункт 3 */}
              <div className="issuance-item tablet:gap-5 tablet:w-full mobile:flex-row mobile:gap-2.5 mobile:w-full">
                {/* Icon */}
                <div className="item-number tablet:w-[46px] tablet:h-[46px] tablet:px-2 tablet:py-[9px] mobile:w-[46px] mobile:h-[46px] mobile:px-2 mobile:py-[9px] mobile:flex-none">
                  <span className="tablet:text-[27px] tablet:leading-[27px] mobile:text-[27px] mobile:leading-[27px]">3</span>
                </div>
                {/* Text */}
                <p className="tablet:text-base tablet:leading-6 mobile:text-base mobile:leading-6 mobile:flex-1">{t('issuance.option3')}</p>
              </div>
            </div>

            {/* Img Badge desktop - 3D визуал справа */}
            <div className="img-badge-desktop mobile:hidden">
              {/* Декоративные эллипсы */}
              <div className="ellipse-decorative ellipse-39" />
              <div className="ellipse-decorative ellipse-43" />
              <div className="ellipse-decorative ellipse-40" />

              {/* Бейдж "Ready" */}
              <div className="badge badge-ready">
                <span>Ready</span>
                <svg viewBox="0 0 14 20" fill="none">
                  <defs>
                    <linearGradient id="bolt-gradient-ready" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="5.99%" stopColor="#9A885D" />
                      <stop offset="108.23%" stopColor="#E5D395" />
                    </linearGradient>
                  </defs>
                  <path d="M7 0L8.5 5L14 7L8.5 9L7 14L5.5 9L0 7L5.5 5L7 0Z" fill="url(#bolt-gradient-ready)" />
                </svg>
              </div>

              {/* 3D изображение hourglass */}
              <div className="hourglass-3d">
                <img src="/assets/image_hourglass_3d.png" alt="Hourglass" />
              </div>

              {/* Бейдж "Sync" */}
              <div className="badge badge-sync">
                <span>Sync</span>
                <svg viewBox="0 0 12 18" fill="none">
                  <defs>
                    <linearGradient id="power-gradient-sync" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="5.99%" stopColor="#9A885D" />
                      <stop offset="108.23%" stopColor="#E5D395" />
                    </linearGradient>
                  </defs>
                  <path d="M6 0L8 6L12 9L8 12L6 18L4 12L0 9L4 6L6 0Z" fill="url(#power-gradient-sync)" />
                </svg>
              </div>

              {/* Бейдж "Api" */}
              <div className="badge badge-api">
                <span>Api</span>
                <svg viewBox="0 0 22 22" fill="none">
                  <defs>
                    <linearGradient id="key-gradient-api" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="5.99%" stopColor="#9A885D" />
                      <stop offset="108.23%" stopColor="#E5D395" />
                    </linearGradient>
                  </defs>
                  <path d="M11 2L13 8L19 10L13 12L11 18L9 12L3 10L9 8L11 2Z" fill="url(#key-gradient-api)" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - нижний баннер */}
        <div className="cta-banner tablet:h-[600px] tablet:mt-[50px] tablet:p-10 tablet:px-5 mobile:h-auto mobile:min-h-[600px] mobile:mt-0 mobile:p-10 mobile:px-5">
          {/* Декоративные элементы - ш 4 copy 12 */}
          <div className="absolute w-[463.82px] h-[531.89px] left-[113px] top-[-374.43px] bg-[url('/assets/image_decorative_pattern.png')] mix-blend-screen transform rotate-[64.62deg] pointer-events-none opacity-30" />

          {/* Декоративные элементы - ш 4 copy 13 */}
          <div className="absolute w-[463.82px] h-[677.94px] left-[568.23px] top-[-282.41px] bg-[url('/assets/image_decorative_pattern.png')] mix-blend-screen transform matrix-[-0.75,0.66,0.66,0.75,0,0] pointer-events-none opacity-30" />

          {/* Card Visual Background - контейнер для карточек */}
          <div className="cta-card-visual-background mobile:hidden">
            {/* Credit card mockup my 1 - зеленая карточка (нижняя) */}
            <img
              src="/assets/image_bbc94c23-green.png"
              alt="Credit card mockup VIP"
              className="cta-card-green"
            />

            {/* Credit card mockup my 3 - черная карточка (верхняя) */}
            <img
              src="/assets/image_bbc94c23.png"
              alt="Credit card mockup"
              className="cta-card-black"
            />
          </div>

          {/* Content - контент с логотипом, текстом и кнопкой */}
          <div className="cta-content tablet:flex-row tablet:w-[720px] tablet:max-w-full tablet:h-[134.58px] tablet:left-1/2 tablet:transform tablet:translate-x-[-50%] tablet:top-[calc(50%-67.29px)] tablet:gap-6 mobile:flex-col mobile:relative mobile:left-0 mobile:top-0 mobile:transform-none mobile:w-full mobile:max-w-[350px] mobile:h-auto mobile:gap-6">
            {/* Frame 2085662057 - левая часть с логотипом и текстом */}
            <div className="cta-left tablet:w-[318px] tablet:gap-6 mobile:w-full">
              {/* Logo */}
              <div className="cta-logo mobile:w-[175px] mobile:h-[23.58px]">
                <img src="/assets/logo_ns_cards.svg" alt="NS.CARDS" />
              </div>

              {/* Frame 2085662131 - текст */}
              <div className="cta-text-group tablet:w-[318px] mobile:w-full">
                {/* Your Competitive Edge */}
                <h3 className="tablet:text-[27px] tablet:leading-[27px] tablet:w-[303px] mobile:text-[27px] mobile:leading-[27px] mobile:w-full">{t('cta.title')}</h3>

                {/* Описание */}
                <p className="tablet:text-base tablet:leading-6 tablet:w-[318px] tablet:h-12 mobile:text-base mobile:leading-6 mobile:w-full mobile:h-auto">{t('cta.description')}</p>
              </div>
            </div>

            {/* Frame 352257 - правая часть с кнопкой */}
            <div className="cta-right tablet:w-[277px] tablet:h-[85px] mobile:w-full">
              {/* Buttons - кнопка CONTACT SALES */}
              <button className="tablet:w-[277px] tablet:h-[85px] tablet:px-[54px] tablet:py-[15px] mobile:w-full mobile:h-auto mobile:min-h-[55px] mobile:px-[54px] mobile:py-[15px]">
                <span>{t('cta.button')}</span>
                <img src="/assets/contacts_arrow.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
