'use client';
import Header from'../components/common/Header';

import Image from 'next/image';
 import Button from'../components/ui/Button';

export default function HeroSection() {
  const handleContactSales = () => {
    // Contact sales action
  }

  return (
    <section className="relative w-full bg-[linear-gradient(225deg,#17494d_0%,#07181c_100%)] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-[url('/images/img_background_pattern.png')] bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/img_background_pattern.png')" }}
      />

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[234px] sm:w-[351px] lg:w-[468px] h-[184px] sm:w-[276px] lg:h-[368px] z-10">
        <Image
          src="/images/img_ellipse_4.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-0 left-[66px] sm:left-[99px] lg:left-[132px] right-[66px] sm:right-[99px] lg:right-[132px] h-[44px] sm:h-[66px] lg:h-[88px] z-10">
        <Image
          src="/images/img_ellipse_2642.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="pt-4 sm:pt-6 lg:pt-[16px] pb-4 sm:pb-6 lg:pb-[18px]">
          <Header />
        </div>

        {/* Main Content */}
        <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[664px] flex items-center">
          {/* Decorative Gift Boxes */}
          <div className="absolute top-[54px] sm:top-[81px] lg:top-[108px] left-[3px] sm:left-[4px] lg:left-[6px] w-[46px] sm:w-[69px] lg:w-[92px] h-[48px] sm:h-[72px] lg:h-[96px] z-10">
            <Image
              src="/images/img_gift_box_concep.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute top-[37px] sm:top-[55px] lg:top-[74px] right-[36px] sm:right-[54px] lg:right-[72px] w-[46px] sm:w-[69px] lg:w-[92px] h-[48px] sm:h-[72px] lg:h-[96px] z-10">
            <Image
              src="/images/img_gift_box_concep.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-[-55px] sm:bottom-[-82px] lg:bottom-[-110px] right-[18px] sm:right-[27px] lg:right-[36px] w-[46px] sm:w-[69px] lg:w-[92px] h-[48px] sm:h-[72px] lg:h-[96px] z-10">
            <Image
              src="/images/img_gift_box_concep.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Content Container */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-0">
            {/* Left Content */}
            <div className="flex flex-col items-start w-full lg:w-[50%] px-4 sm:px-6 lg:px-[10px]">
              {/* Small Gift Box */}
              <div className="w-[65px] sm:w-[97px] lg:w-[130px] h-[69px] sm:h-[103px] lg:h-[138px] mb-2 sm:mb-3 lg:mb-[8px]">
                <Image
                  src="/images/img_gift_box_concep.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Main Heading */}
              <h1 className="text-[35px] sm:text-[52px] lg:text-[70px] font-bold leading-[35px] sm:leading-[52px] lg:leading-[70px] text-left text-white font-['Inter'] mb-6 sm:mb-8 lg:mb-[24px] ml-[20px] sm:ml-[30px] lg:ml-[40px]">
                Сards<br />iGaming VIP
              </h1>

              {/* Feature Row */}
              <div className="flex items-center gap-4 sm:gap-6 lg:gap-[16px] mb-12 sm:mb-16 lg:mb-[48px] ml-[20px] sm:ml-[30px] lg:ml-[40px]">
                <div className="w-[23px] sm:w-[34px] lg:w-[46px] h-[23px] sm:h-[34px] lg:h-[46px] border border-white rounded-sm p-3 sm:p-4 lg:p-[12px] flex items-center justify-center">
                  <Image
                    src="/images/img_icon.svg"
                    alt=""
                    width={22}
                    height={22}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[12px] sm:text-[18px] lg:text-[24px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-white font-['Inter'] max-w-[200px] sm:max-w-[300px] lg:max-w-[36%]">
                  A New Level of Freedom and Convenience for Your VIP Players
                </p>
              </div>

              {/* CTA Button */}
              <div className="ml-[20px] sm:ml-[30px] lg:ml-[40px]">
                <Button
                  text="contact sales"
                  onClick={handleContactSales}
                  className="text-[8px] sm:text-[12px] lg:text-[16px] font-bold leading-[10px] sm:leading-[15px] lg:leading-[20px] text-center uppercase text-white bg-primary-background rounded-md px-[17px] sm:px-[25px] lg:px-[34px] pr-[29px] sm:pr-[43px] lg:pr-[58px] py-[15px] sm:py-[22px] lg:py-[30px] gap-[5px] sm:gap-[7px] lg:gap-[10px] hover:bg-primary-dark transition-all duration-200 flex items-center"
                >
                  <span>contact sales</span>
                  <Image
                    src="/images/img_right.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6"
                  />
                </Button>
              </div>
            </div>

            {/* Right Content - VIP Card Image */}
            <div className="w-full lg:w-[46%] flex justify-center lg:justify-end relative">
              <div className="w-[323px] sm:w-[484px] lg:w-[646px] h-[386px] sm:w-[579px] lg:h-[772px] relative">
                <Image
                  src="/images/img_vip_main_1.png"
                  alt="VIP Gaming Card"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
