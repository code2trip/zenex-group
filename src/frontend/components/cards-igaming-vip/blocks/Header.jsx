'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';

export default function Header() {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';
  const tCardsVip = useTranslations('cardsVip.header');

  return (
    <div className="cards-vip-header tablet:min-h-[905px] mobile:min-h-[800px]">
      {/* Content group (title, subtitle, CTA) */}
      <div className="hero-content tablet:flex-col tablet:items-start tablet:py-20 tablet:px-10 tablet:pb-12 tablet:min-h-0 tablet:w-full tablet:max-w-full tablet:gap-10 mobile:flex-col mobile:items-start mobile:pt-[70px] mobile:px-[19.5px] mobile:pb-[35px] mobile:gap-6 mobile:w-full mobile:max-w-full">
        <div className="hero-left tablet:order-0 tablet:w-full tablet:max-w-[720px] tablet:pl-0 tablet:gap-10 tablet:transform-none mobile:order-0 mobile:w-full mobile:max-w-[350px] mobile:pl-0 mobile:gap-6">
          <div className="hero-title-group tablet:gap-5 tablet:w-full mobile:gap-3 mobile:w-full">
            <p className="hero-title tablet:text-[50px] tablet:leading-[50px] mobile:text-[30px] mobile:leading-9">{tCardsVip('title')}</p>
            <div className="hero-subtitle-group tablet:items-start tablet:gap-4 tablet:h-auto mobile:flex-row mobile:items-center mobile:gap-2 mobile:h-auto">
              <div className="subtitle-icon-box tablet:[&>img]:w-[46px] tablet:[&>img]:h-[46px] mobile:[&>img]:w-[46px] mobile:[&>img]:h-[46px]">
                <img src="/assets/card-header-icon.svg" alt="" />
              </div>
              <p className="hero-subtitle tablet:text-base tablet:leading-6 tablet:max-w-[720px] mobile:text-base mobile:leading-6 mobile:max-w-full">{tCardsVip('subtitle')}</p>
            </div>
          </div>
          <Link
            href={`/${locale}/career#form`}
            className="hero-cta-button tablet:w-auto tablet:h-[85px] tablet:px-[54px] tablet:py-[15px] mobile:w-full mobile:max-w-full mobile:min-h-[55px] mobile:px-[18px] mobile:py-[15px]"
          >
            {tCardsVip('cta')}
            <img src="/images/right.png" alt="" aria-hidden="true" />
          </Link>
        </div>
        <div className="hero-right flex desktop:justify-start desktop:items-center tablet:order-[-1] tablet:w-full tablet:justify-center tablet:items-start tablet:mb-0 tablet:ml-0 tablet:transform-none desktop:-translate-y-[10%] desktop:ml-[-50px] mobile:order-[-1] mobile:w-full mobile:justify-center mobile:items-center mobile:mt-0 mobile:mb-0 mobile:ml-0 relative z-[5] overflow-visible">
          <img src="/assets/image_47237f05.png" className="vip-image block desktop:w-[646px] desktop:h-[773px] desktop:object-contain desktop:max-w-none tablet:w-[462px] tablet:h-[553px] tablet:max-w-full tablet:object-cover tablet:left-auto tablet:top-auto tablet:transform-none mobile:w-[300px] mobile:h-[359px] mobile:max-w-full mobile:object-cover" alt="VIP Cards" style={{ display: 'block', visibility: 'visible', opacity: 1 }} />
        </div>
      </div>
    </div>
  );
}


