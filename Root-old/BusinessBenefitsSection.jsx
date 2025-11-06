'use client';
import Image from'next/image';

export default function BusinessBenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: "Custom client dashboard",
      subtitle: "and branded card design",
      icon: "/images/img_frame_2131328106_3.svg",
      gradient: "linear-gradient(223deg,#00cdc3_0%,#006f66_100%)"
    },
    {
      id: 2,
      title: "Unlimited issuance",
      subtitle: "of virtual and physical cards — with worldwide delivery",
      icon: "/images/img_frame_2131328106_4.svg",
      gradient: "linear-gradient(225deg,#17494d_0%,#07181c_100%)"
    },
    {
      id: 3,
      title: "Easy communication with players through push notifications, pop-ups, banners, and email campaigns",
      subtitle: "",
      icon: "/images/img_frame_2131328106_5.svg",
      gradient: "linear-gradient(37deg,#9a885c_0%,#e5d294_100%)"
    },
    {
      id: 4,
      title: "Tailored",
      subtitle: "loyalty and bonus programs to strengthen retention",
      icon: "/images/img_frame_2131328106_6.svg",
      gradient: "linear-gradient(223deg,#00cdc3_0%,#006f66_100%)"
    },
    {
      id: 5,
      title: "Full control and analytics",
      subtitle: "over player balances and transactions",
      icon: "/images/img_numbers.svg",
      gradient: "linear-gradient(225deg,#17494d_0%,#07181c_100%)"
    },
    {
      id: 6,
      title: "24/7 support",
      subtitle: "for users",
      icon: "/images/img_icon.svg",
      gradient: "linear-gradient(37deg,#9a885c_0%,#e5d294_100%)"
    }
  ]

  return (
    <section className="w-full bg-background-main py-[34px] sm:py-[51px] lg:py-[68px] relative overflow-hidden">
      {/* Background Blur */}
      {/* <div className="absolute top-[541px] sm:top-[811px] lg:top-[1081px] right-0 w-[190px] sm:w-[285px] lg:w-[380px] h-[224px] sm:h-[336px] lg:h-[448px] z-10">
        <Image
          src="/images/img_bg_blur_2.png"
          alt=""
          fill
          className="object-contain"
        />
      </div> */}

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1294px] mx-auto">
          {/* Header */}
          <div className="flex justify-start items-start w-full mb-[13px] sm:mb-[19px] lg:lg-[26px]">
            <div className="w-[23px] sm:w-[34px] lg:w-[46px] h-[23px] sm:h-[34px] lg:h-[46px] border border-border-accent rounded-sm p-3 sm:p-4 lg:p-[12px] flex items-center justify-center mt-[3px] sm:mt-[4px] lg:mt-[6px]">
              <Image
                src="/images/img_icon_teal_a700_46x46.svg"
                alt=""
                width={22}
                height={22}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-[25px] sm:text-[37px] lg:text-[50px] font-bold leading-[30px] sm:leading-[45px] lg:leading-[61px] text-left text-text-primary font-['Inter'] self-center ml-4 sm:ml-6 lg:ml-[16px]">
              <span className="text-text-primary">Benefits for </span>
              <span className="text-text-accent">your Business</span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="flex flex-col lg:flex-row gap-[14px] sm:gap-[21px] lg:gap-[28px] justify-start items-center w-full">
            {/* Benefits Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-[24px] w-full lg:w-[852px]">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  className="flex gap-[5px] sm:gap-[7px] lg:gap-[10px] justify-center items-center w-full bg-background-card rounded-lg shadow-[0px_4px_18px_#6d7e9e19] p-[9px] sm:p-[13px] lg:p-[18px]"
                >
                  <div className="w-[66%]">
                    {benefit.subtitle ? (
                      <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left font-['Inter']">
                        <span className="text-text-primary font-bold">{benefit.title} </span>
                        <span className="text-text-secondary">{benefit.subtitle}</span>
                      </p>
                    ) : (
                      <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-text-secondary font-['Inter']">
                        {benefit.title}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-start items-center w-auto h-auto">
                    <div
                      className="rounded-[9px] sm:rounded-[13px] lg:rounded-[18px] p-[12px] sm:p-[18px] lg:p-[24px] flex justify-start items-center w-auto h-auto"
                      style={{ background: benefit.gradient }}
                    >
                      <div className="bg-iconButton-background border-0 border-border-light rounded-[18px] sm:rounded-[27px] lg:rounded-[36px] p-[8px] sm:p-[12px] lg:p-[16px] flex items-center justify-center w-auto">
                        <Image
                          src={benefit.icon}
                          alt=""
                          width={36}
                          height={36}
                          className="w-[36px] sm:w-[54px] lg:w-[72px] h-[36px] sm:h-[54px] lg:h-[72px] object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* VIP Card Visual */}
            <div className="relative bg-[linear-gradient(225deg,#01645c_0%,#0a2125_100%)] rounded-lg w-full lg:w-[410px] h-[261px] sm:h-[391px] lg:h-[522px] overflow-hidden shadow-[0px_4px_36px_#0000000c]">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 bg-[url('/images/img_background_pattern_gray_200.png')] bg-cover bg-center opacity-20 p-[20px] sm:p-[30px] lg:p-[40px] flex justify-start items-center w-full h-full"
                style={{ backgroundImage: "url('/images/img_background_pattern_gray_200.png')" }}
              >
                <div className="flex flex-col gap-[23px] sm:gap-[34px] lg:gap-[46px] justify-start items-start w-full h-auto mb-[42px] sm:mb-[63px] lg:mb-[84px]">
                  <div className="w-[19px] sm:w-[28px] lg:w-[38px] h-[19px] sm:h-[28px] lg:h-[38px]">
                    <Image
                      src="/images/img_znx_icon.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-primary-light w-full h-[137px] sm:h-[205px] lg:h-[274px] rounded-[81px] sm:rounded-[121px] lg:rounded-[162px] shadow-[0px_4px_300px_#888888ff]"></div>
                </div>
              </div>

              {/* VIP Cards */}
              <div className="absolute bottom-[26px] sm:bottom-[39px] lg:bottom-[52px] left-[-30px] sm:left-[-45px] lg:left-[-60px] w-[214px] sm:w-[321px] lg:w-[428px] h-[219px] sm:h-[328px] lg:h-[438px] z-10">
                <div className="absolute bottom-0 left-[30px] sm:left-[45px] lg:left-[60px] w-[271px] sm:w-[406px] lg:w-[542px] h-[146px] sm:h-[219px] lg:h-[292px] bg-[linear-gradient(315deg,#000000_0%,#3f3f3f_100%)] rounded-md shadow-[2px_4px_4px_#ffffff4c] p-[12px] sm:p-[18px] lg:p-[24px] pr-[11px] sm:pr-[16px] lg:pr-[22px]">
                  <div className="flex flex-col gap-[19px] sm:gap-[28px] lg:gap-[38px] justify-start items-end w-full h-auto">
                    <div className="flex justify-between items-start w-full mt-[40px] sm:mt-[60px] lg:mt-[80px]">
                      <div className="w-[57px] sm:w-[85px] lg:w-[114px] h-[37px] sm:h-[55px] lg:h-[74px] self-end mt-[15px] sm:mt-[22px] lg:mt-[30px]">
                        <Image
                          src="/images/img_frame_1000006073.png"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-black italic leading-[10px] sm:leading-[15px] lg:leading-[20px] text-left uppercase text-text-muted font-['Montserrat'] w-auto">
                        vip players
                      </p>
                    </div>
                    <div className="w-[26px] sm:w-[39px] lg:w-[52px] h-[23px] sm:h-[34px] lg:h-[46px] mr-[30px] sm:mr-[45px] lg:mr-[60px]">
                      <Image
                        src="/images/img_frame_1000006081.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-[30px] sm:right-[45px] lg:right-[60px] w-[239px] sm:w-[358px] lg:w-[478px] h-[146px] sm:h-[219px] lg:h-[292px] bg-[linear-gradient(315deg,#1f6a65_0%,#43a9a1_100%)] rounded-md shadow-[2px_4px_4px_#ffffff4c] p-[11px] sm:p-[16px] lg:p-[22px] pr-[12px] sm:pr-[18px] lg:pr-[24px]">
                  <div className="flex justify-between items-end w-full h-full">
                    <div className="w-[37px] sm:w-[55px] lg:w-[74px] h-[57px] sm:h-[85px] lg:h-[114px] self-start mt-[32px] sm:mt-[48px] lg:mt-[64px] mb-[71px] sm:mb-[106px] lg:mb-[142px] ml-[2px] sm:ml-[3px] lg:ml-[4px]">
                      <Image
                        src="/images/img_frame_1000006077.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="w-[23px] sm:w-[34px] lg:w-[46px] h-[26px] sm:h-[39px] lg:h-[52px]">
                      <Image
                        src="/images/img_frame_1000006081.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-black italic leading-[10px] sm:leading-[15px] lg:leading-[20px] text-left uppercase text-white font-['Montserrat'] w-auto mb-[32px] sm:mb-[48px] lg:mb-[64px]">
                      vip players
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
