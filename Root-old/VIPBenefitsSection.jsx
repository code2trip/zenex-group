'use client';
import Image from'next/image';

export default function VIPBenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: "Instant payouts to players",
      icon: "/images/img_frame_2131328106_7.svg",
      gradient: "linear-gradient(223deg,#00cdc3_0%,#006f66_100%)"
    },
    {
      id: 2,
      title: "Spending limits up to $100,000 per month per card",
      icon: "/images/img_speed.svg",
      gradient: "linear-gradient(225deg,#17494d_0%,#07181c_100%)"
    },
    {
      id: 3,
      title: "Integration with",
      subtitle: "Apple Pay and Google Pay",
      icon: "/images/img_frame_2131328106_5.svg",
      gradient: "linear-gradient(37deg,#9a885c_0%,#e5d294_100%)"
    },
    {
      id: 4,
      title: "Cash withdrawals",
      subtitle: "in 150+ countries",
      icon: "/images/img_web3.svg",
      gradient: "linear-gradient(223deg,#00cdc3_0%,#006f66_100%)"
    },
    {
      id: 5,
      title: "Deposits via cryptocurrency, SWIFT and SEPA — with the option to add local methods",
      icon: "/images/img_frame_2131328106_8.svg",
      gradient: "linear-gradient(225deg,#17494d_0%,#07181c_100%)"
    },
    {
      id: 6,
      title: "Balance recovery options in case the card gets blocked",
      icon: "/images/img_frame_2131328106_9.svg",
      gradient: "linear-gradient(37deg,#9a885c_0%,#e5d294_100%)"
    }
  ]

  return (
    <section className="w-full bg-background-main py-[-80px] sm:py-[-120px] lg:py-[-160px] relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-[541px] sm:top-[811px] lg:top-[1081px] right-0 w-[190px] sm:w-[285px] lg:w-[380px] h-[224px] sm:h-[336px] lg:h-[448px] z-10">
        <Image
          src="/images/img_bg_blur_2.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1294px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-[19px] sm:gap-[28px] lg:gap-[38px] justify-start items-center w-full mb-[19px] sm:mb-[28px] lg:mb-[38px]">
            <div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] justify-start items-start w-full">
              <div className="flex justify-start items-start w-full">
                <div className="w-[23px] sm:w-[34px] lg:w-[46px] h-[23px] sm:h-[34px] lg:h-[46px] border border-border-accent rounded-sm p-3 sm:p-4 lg:p-[12px] flex items-center justify-center mt-[3px] sm:mt-[4px] lg:mt-[6px]">
                  <Image
                    src="/images/img_excellence.svg"
                    alt=""
                    width={22}
                    height={22}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-[25px] sm:text-[37px] lg:text-[50px] font-bold leading-[30px] sm:leading-[45px] lg:leading-[61px] text-left text-text-primary font-['Inter'] self-center ml-4 sm:ml-6 lg:ml-[16px]">
                  <span className="text-text-primary">Benefits for </span>
                  <span className="text-text-accent">VIP Players</span>
                </h2>
              </div>
              <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[10px] sm:leading-[15px] lg:leading-[20px] text-left text-text-secondary font-['Inter'] w-auto">
                Give your top clients the premium experience they expect — and increase loyalty and LTV.
              </p>
            </div>

            {/* Content Layout */}
            <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-6 lg:gap-0">
              {/* VIP Card Visual */}
              <div className="relative bg-[linear-gradient(225deg,#01645c_0%,#0a2125_100%)] rounded-lg w-full lg:w-[414px] h-[261px] sm:h-[391px] lg:h-[522px] overflow-hidden">
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 bg-[url('/images/img_background_pattern_gray_200_522x414.png')] bg-cover bg-center opacity-20 p-[20px] sm:p-[30px] lg:p-[40px] flex justify-start items-center w-full h-full"
                  style={{ backgroundImage: "url('/images/img_background_pattern_gray_200_522x414.png')" }}
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
                <div className="absolute bottom-[26px] sm:bottom-[39px] lg:bottom-[52px] left-[-23px] sm:left-[-34px] lg:left-[-46px] w-[230px] sm:w-[345px] lg:w-[460px] h-[181px] sm:h-[271px] lg:h-[362px] z-10">
                  <div className="absolute top-[26px] sm:top-[39px] lg:top-[152px] left-[46px] sm:left-[69px] lg:left-[92px] w-[200px] sm:w-[300px] lg:w-[400px] h-[155px] sm:h-[232px] lg:h-[310px] bg-[url('/images/img_credit_card_mockup.png')] bg-cover bg-center p-[52px] sm:p-[78px] lg:p-[104px] pr-[11px] sm:pr-[16px] lg:pr-[22px] pb-[52px] sm:pb-[78px] lg:pb-[104px]">
                    <div className="flex justify-end items-start w-[80%] h-auto">
                      <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-black italic leading-[10px] sm:leading-[15px] lg:leading-[20px] text-left uppercase text-white font-['Montserrat'] w-auto mb-[17px] sm:mb-[25px] lg:mb-[34px]">
                        vip players
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-0 left-[23px] sm:left-[34px] lg:left-[46px] w-[200px] sm:w-[300px] lg:w-[400px] h-[155px] sm:h-[232px] lg:h-[310px] bg-[linear-gradient(315deg,#1f6a65_0%,#43a9a1_100%)] rounded-[6px] sm:rounded-[9px] lg:rounded-[12px] shadow-[2px_4px_4px_#ffffff4c] p-[12px] sm:p-[18px] lg:p-[24px] pr-[11px] sm:pr-[16px] lg:pr-[22px]">
                    <div className="flex flex-col gap-[19px] sm:gap-[28px] lg:gap-[38px] justify-start items-end w-full h-auto">
                      <div className="flex justify-between items-start w-full mt-[40px] sm:mt-[60px] lg:mt-[80px]">
                        <div className="w-[57px] sm:w-[85px] lg:w-[114px] h-[37px] sm:h-[55px] lg:h-[74px] self-end mt-[15px] sm:mt-[22px] lg:mt-[30px]">
                          <Image
                            src="/images/img_frame_1000006077.svg"
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-black italic leading-[10px] sm:leading-[15px] lg:leading-[20px] text-left uppercase text-white font-['Montserrat'] w-auto">
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
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[24px] justify-start items-center align-self-center w-full lg:w-auto ml-0 lg:ml-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-[24px] w-full lg:w-[852px]">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div
                      key={benefit.id}
                      className="flex gap-[5px] sm:gap-[7px] lg:gap-[10px] justify-center items-center w-full bg-background-card rounded-lg shadow-[0px_4px_18px_#6d7e9e19] p-[9px] sm:p-[13px] lg:p-[18px]"
                    >
                      <div className="w-[66%]">
                        {benefit.subtitle ? (
                          <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left font-['Inter']">
                            <span className="text-text-secondary">{benefit.title} </span>
                            <span className="text-text-primary font-bold">{benefit.subtitle}</span>
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

                {/* Bottom Row with Background Pattern */}
                <div className="relative w-full lg:w-[870px] h-[148px] sm:h-[222px] lg:h-[296px]">
                  <div className="flex flex-col justify-start items-start w-full h-full">
                    <div className="flex gap-[5px] sm:gap-[7px] lg:gap-[10px] justify-center items-center w-[48%] bg-background-card rounded-lg shadow-[0px_4px_18px_#6d7e9e19] p-[9px] sm:p-[13px] lg:p-[18px] ml-[9px] sm:ml-[13px] lg:ml-[18px]">
                      <div className="w-[66%]">
                        <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-text-secondary font-['Inter']">
                          {benefits[4].title}
                        </p>
                      </div>
                      <div className="flex justify-start items-center w-auto h-auto">
                        <div
                          className="rounded-[9px] sm:rounded-[13px] lg:rounded-[18px] p-[12px] sm:p-[18px] lg:p-[24px] flex justify-start items-center w-auto h-auto"
                          style={{ background: benefits[4].gradient }}
                        >
                          <div className="bg-iconButton-background border-0 border-border-light rounded-[18px] sm:rounded-[27px] lg:rounded-[36px] p-[8px] sm:p-[12px] lg:p-[16px] flex items-center justify-center w-auto">
                            <Image
                              src={benefits[4].icon}
                              alt=""
                              width={36}
                              height={36}
                              className="w-[36px] sm:w-[54px] lg:w-[72px] h-[36px] sm:h-[54px] lg:h-[72px] object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Background Pattern - simplified for mobile */}
                    <div className="absolute inset-0 flex flex-col justify-start items-center w-full h-auto opacity-10 mt-[-28px] sm:mt-[-42px] lg:mt-[-56px] mr-[9px] sm:mr-[13px] lg:mr-[18px]">
                      {/* Pattern elements hidden on mobile for simplicity */}
                      <div className="hidden lg:flex justify-center items-start w-full">
                        <span className="text-[15px] font-normal leading-[26px] tracking-[7px] text-center text-text-muted font-['Articulat_CF']">Z</span>
                        {/* Additional pattern elements */}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 w-[46%] h-auto flex justify-center items-center">
                    <div className="flex gap-[5px] sm:gap-[7px] lg:gap-[10px] justify-center items-center w-full bg-background-card rounded-lg shadow-[0px_4px_18px_#6d7e9e19] p-[9px] sm:p-[13px] lg:p-[18px]">
                      <div className="w-[66%]">
                        <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-text-secondary font-['Inter']">
                          {benefits[5].title}
                        </p>
                      </div>
                      <div className="flex justify-start items-center w-auto h-auto">
                        <div
                          className="rounded-[9px] sm:rounded-[13px] lg:rounded-[18px] p-[12px] sm:p-[18px] lg:p-[24px] flex justify-start items-center w-auto h-auto"
                          style={{ background: benefits[5].gradient }}
                        >
                          <div className="bg-iconButton-background border-0 border-border-light rounded-[18px] sm:rounded-[27px] lg:rounded-[36px] p-[8px] sm:p-[12px] lg:p-[16px] flex items-center justify-center w-auto">
                            <Image
                              src={benefits[5].icon}
                              alt=""
                              width={36}
                              height={36}
                              className="w-[36px] sm:w-[54px] lg:w-[72px] h-[36px] sm:h-[54px] lg:h-[72px] object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
