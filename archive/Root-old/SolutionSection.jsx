'use client';
import Image from'next/image';

export default function SolutionSection() {
  return (
    <section className="w-full bg-background-main py-[51px] sm:py-[76px] lg:py-[102px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1294px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] justify-start items-start w-full mb-[19px] sm:mb-[28px] lg:lg-[38px]">
            <div className="flex justify-start items-start w-full">
              <div className="w-[23px] sm:w-[34px] lg:w-[46px] h-[23px] sm:h-[34px] lg:h-[46px] border border-border-accent rounded-sm p-3 sm:p-4 lg:p-[12px] flex items-center justify-center mt-[3px] sm:mt-[4px] lg:mt-[6px]">
                <Image
                  src="/images/img_user_centricity.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-[25px] sm:text-[37px] lg:text-[50px] font-bold leading-[30px] sm:leading-[45px] lg:leading-[61px] text-left text-text-primary font-['Inter'] self-center ml-4 sm:ml-6 lg:ml-[16px]">
                <span className="text-text-primary">Our Solution — </span>
                <span className="text-text-accent">Ns.Сards iGaming VIP</span>
              </h2>
            </div>
            <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[10px] sm:leading-[15px] lg:leading-[20px] text-left font-['Inter'] w-auto">
              <span className="text-text-secondary">The first </span>
              <span className="text-text-primary font-bold leading-[12px] sm:leading-[18px] lg:leading-[24px]">card product</span>
              <span className="text-text-secondary"> built specifically for iGaming — offering unlimited transactions, privacy, and </span>
              <span className="text-text-primary font-bold leading-[12px] sm:leading-[18px] lg:leading-[24px]">service excellence.</span>
            </p>
          </div>

          {/* Solution Cards */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[24px] justify-start items-center w-full">
            {/* First Row */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[24px] justify-start items-center w-full">
              {/* Unlimited Card */}
              <div className="relative bg-[linear-gradient(180deg,#d4e2e4_0%,#7096a4_100%)] rounded-lg w-full lg:w-[412px] h-[159px] sm:h-[238px] lg:h-[318px] overflow-hidden">
                <div className="absolute top-[16px] sm:top-[24px] lg:top-[32px] left-[16px] sm:left-[24px] lg:left-[32px] flex flex-col gap-[62px] sm:gap-[93px] lg:lg-[124px] justify-start items-start w-full h-auto z-20">
                  <h3 className="text-[13px] sm:text-[20px] lg:text-[27px] font-bold leading-[16px] sm:leading-[24px] lg:leading-[33px] text-left text-white font-['Inter'] w-auto">
                    Unlimited
                  </h3>
                  <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-white font-['Inter'] w-[60%]">
                    Unlimited deposits and withdrawals by amount or number of transactions for your brand
                  </p>
                </div>

                {/* Card Images */}
                <div className="absolute top-[21px] sm:top-[31px] lg:top-[42px] right-[16px] sm:right-[24px] lg:right-[32px] w-[117px] sm:w-[175px] lg:lg-[234px] h-[112px] sm:h-[168px] lg:h-[224px] z-10">
                  <Image
                    src="/images/img_untitled_3_copy.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-0 right-[-58px] sm:right-[-87px] lg:right-[-116px] w-[133px] sm:w-[199px] lg:w-[266px] h-[184px] sm:h-[276px] lg:h-[368px] z-15">
                  <Image
                    src="/images/img_untitled_3_copy_368x266.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-[18px] sm:top-[27px] lg:top-[36px] right-[22px] sm:right-[33px] lg:right-[44px] w-[166px] sm:w-[249px] lg:w-[332px] h-[166px] sm:h-[249px] lg:h-[332px] border-0 border-accent-light rounded-full z-5">
                  <div className="absolute top-[21px] sm:top-[31px] lg:top-[42px] left-[20px] sm:left-[30px] lg:left-[40px] right-[20px] sm:right-[30px] lg:right-[40px] bottom-[21px] sm:bottom-[31px] lg:bottom-[42px] border-0 border-accent-light rounded-full">
                  </div>
                </div>
              </div>

              {/* 100% Approval Rate Card */}
              <div className="relative bg-[linear-gradient(225deg,#17494d_0%,#07181c_100%)] rounded-lg w-full lg:w-[412px] h-[159px] sm:h-[238px] lg:h-[318px] overflow-hidden">
                <div className="absolute top-[16px] sm:top-[24px] lg:top-[32px] left-[16px] sm:left-[24px] lg:left-[32px] flex flex-col gap-[73px] sm:gap-[109px] lg:gap-[146px] justify-start items-start w-full h-auto z-20">
                  <h3 className="text-[13px] sm:text-[20px] lg:text-[27px] font-bold leading-[16px] sm:leading-[24px] lg:leading-[33px] text-left text-white font-['Inter'] w-auto">
                    100% approval rate
                  </h3>
                  <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-white font-['Inter'] w-[56%]">
                    100% transaction approval rate and instant payouts delivery to players
                  </p>
                </div>

                {/* Approval Rate Visual */}
                <div className="absolute top-[-68px] sm:top-[-102px] lg:top-[-137px] right-[16px] sm:right-[24px] lg:right-[32px] w-[200px] sm:w-[300px] lg:w-[400px] h-[219px] sm:h-[328px] lg:h-[438px] z-10">
                  <Image
                    src="/images/img_designers_te.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-[44px] sm:bottom-[66px] lg:bottom-[88px] left-[61px] sm:left-[91px] lg:left-[122px] w-[59px] sm:w-[88px] lg:w-[118px] h-[85px] sm:h-[127px] lg:h-[170px] bg-[url('/images/img_vector_30.png')] bg-cover bg-center p-[23px] sm:p-[34px] lg:p-[46px] flex justify-end items-end">
                    <div className="w-[28px] sm:w-[42px] lg:w-[56px] h-[26px] sm:h-[39px] lg:h-[52px] mb-[11px] sm:mb-[16px] lg:mb-[22px]">
                      <Image
                        src="/images/img_vector_31_stroke.png"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute top-[34px] sm:top-[51px] lg:top-[68px] right-[82px] sm:right-[123px] lg:right-[164px] w-[177px] sm:w-[265px] lg:w-[354px] h-[177px] sm:h-[265px] lg:h-[354px] z-5">
                  <Image
                    src="/images/img_group_48100372.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Protection Card */}
              <div className="relative bg-[linear-gradient(223deg,#00cdc3_0%,#006f66_100%)] rounded-lg w-full lg:w-[360px] h-[159px] sm:h-[238px] lg:h-[318px] overflow-hidden">
                <div className="absolute top-[16px] sm:top-[24px] lg:top-[32px] left-[16px] sm:left-[24px] lg:left-[32px] flex flex-col gap-[86px] sm:gap-[129px] lg:gap-[172px] justify-start items-start w-full h-auto z-20">
                  <h3 className="text-[13px] sm:text-[20px] lg:text-[27px] font-bold leading-[16px] sm:leading-[24px] lg:leading-[33px] text-left text-white font-['Inter'] w-auto">
                    Protection
                  </h3>
                  <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-white font-['Inter'] w-[70%]">
                    Protection from fines and chargeback dispute options
                  </p>
                </div>

                {/* Protection Visual */}
                <div className="absolute bottom-0 right-0 w-[168px] sm:w-[252px] lg:w-[336px] h-[188px] sm:h-[282px] lg:h-[376px] z-10">
                  <div className="absolute top-[21px] sm:top-[31px] lg:top-[42px] left-[23px] sm:left-[34px] lg:left-[46px] w-[123px] sm:w-[184px] lg:w-[246px] h-[123px] sm:h-[184px] lg:h-[246px] border-0 border-accent-light rounded-full">
                    <div className="absolute top-[21px] sm:top-[31px] lg:top-[42px] left-[20px] sm:left-[30px] lg:left-[40px] right-[20px] sm:right-[30px] lg:right-[40px] bottom-[21px] sm:bottom-[31px] lg:bottom-[42px] border-0 border-accent-light rounded-full">
                    </div>
                  </div>
                  <div className="absolute top-[-1px] sm:top-[-1px] lg:top-[-1px] left-[19px] sm:left-[28px] lg:left-[38px] w-[149px] sm:w-[223px] lg:w-[298px] h-[176px] sm:h-[264px] lg:h-[352px]">
                    <Image
                      src="/images/img_111111_firefly_3d.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[24px] justify-start items-center w-full">
              {/* Transparent Fees Card */}
              <div className="relative bg-[linear-gradient(315deg,#cab97f_0%,#705f37_100%)] rounded-lg w-full lg:w-[632px] h-[147px] sm:h-[220px] lg:h-[294px] overflow-hidden">
                <div className="absolute top-[16px] sm:top-[24px] lg:top-[32px] left-[16px] sm:left-[24px] lg:left-[32px] flex flex-col gap-[73px] sm:gap-[109px] lg:gap-[146px] justify-start items-start w-full h-auto z-20">
                  <h3 className="text-[13px] sm:text-[20px] lg:text-[27px] font-bold leading-[16px] sm:leading-[24px] lg:leading-[33px] text-left text-white font-['Inter'] w-auto">
                    Transparent fees
                  </h3>
                  <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-white font-['Inter'] w-[54%]">
                    Transparent fees and no hidden charges: up to 4% on deposits and 2% on payouts
                  </p>
                </div>

                {/* Coins Visual */}
                <div className="absolute top-[5px] sm:top-[7px] lg:top-[10px] right-[98px] sm:right-[147px] lg:right-[196px] w-[196px] sm:w-[294px] lg:w-[392px] h-[138px] sm:h-[207px] lg:h-[276px] z-10">
                  <div className="absolute top-[7px] sm:top-[10px] lg:top-[14px] left-[7px] sm:left-[10px] lg:left-[14px] w-[166px] sm:w-[249px] lg:w-[332px] h-[166px] sm:h-[249px] lg:h-[332px] border-0 border-accent-light rounded-full">
                    <div className="absolute top-[21px] sm:top-[31px] lg:top-[42px] left-[20px] sm:left-[30px] lg:left-[40px] right-[20px] sm:right-[30px] lg:right-[40px] bottom-[21px] sm:bottom-[31px] lg:bottom-[42px] border-0 border-accent-light rounded-full">
                    </div>
                  </div>

                  <div className="absolute bottom-[12px] sm:bottom-[18px] lg:bottom-[24px] left-[125px] sm:left-[187px] lg:left-[250px] w-[125px] sm:w-[187px] lg:w-[250px] h-[90px] sm:h-[135px] lg:h-[180px]">
                    <Image
                      src="/images/img_11untitled_1_copy.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute bottom-[18px] sm:bottom-[27px] lg:bottom-[36px] left-[98px] sm:left-[147px] lg:left-[196px] w-[125px] sm:w-[187px] lg:w-[250px] h-[90px] sm:h-[135px] lg:h-[180px]">
                    <Image
                      src="/images/img_11untitled_1_copy_180x250.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute top-0 left-[105px] sm:left-[157px] lg:left-[210px] w-[125px] sm:w-[187px] lg:w-[250px] h-[90px] sm:h-[135px] lg:h-[180px]">
                    <Image
                      src="/images/img_11untitled_1_copy_180x250.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute bottom-[27px] sm:bottom-[40px] lg:bottom-[54px] left-[73px] sm:left-[109px] lg:left-[146px] w-[125px] sm:w-[187px] lg:w-[250px] h-[90px] sm:h-[135px] lg:h-[180px]">
                    <Image
                      src="/images/img_11untitled_1_copy_180x250.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Access Worldwide Card */}
              <div className="relative bg-background-accent border border-border-primary rounded-lg w-full lg:w-[632px] h-[148px] sm:h-[222px] lg:h-[296px] overflow-hidden shadow-[0px_4px_36px_#0000000c]">
                <div className="absolute top-[16px] sm:top-[24px] lg:top-[32px] left-[16px] sm:left-[24px] lg:left-[32px] flex flex-col gap-[75px] sm:gap-[112px] lg:gap-[150px] justify-start items-start w-full h-auto z-20">
                  <h3 className="text-[13px] sm:text-[20px] lg:text-[27px] font-bold leading-[16px] sm:leading-[24px] lg:leading-[33px] text-left text-text-primary font-['Inter'] w-auto">
                    Access worldwide
                  </h3>
                  <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-text-primary font-['Inter'] w-[46%]">
                    Access to hard-to-reach regions and local top-up methods
                  </p>
                </div>

                {/* Globe Visual */}
                <div className="absolute top-[-28px] sm:top-[-42px] lg:top-[-57px] right-[25px] sm:right-[37px] lg:right-[50px] w-[166px] sm:w-[249px] lg:w-[332px] h-[194px] sm:h-[291px] lg:h-[388px] z-10">
                  <div className="absolute top-[28px] sm:top-[42px] lg:top-[57px] left-[23px] sm:left-[34px] lg:left-[46px] w-[123px] sm:w-[184px] lg:w-[246px] h-[123px] sm:h-[184px] lg:h-[246px] border-0 border-accent-light rounded-full">
                    <div className="absolute top-[21px] sm:top-[31px] lg:top-[42px] left-[20px] sm:left-[30px] lg:left-[40px] right-[20px] sm:right-[30px] lg:right-[40px] bottom-[21px] sm:bottom-[31px] lg:bottom-[42px] border-0 border-accent-light rounded-full">
                    </div>
                  </div>

                  <div className="absolute top-0 right-[17px] sm:right-[25px] lg:right-[34px] w-[122px] sm:w-[183px] lg:w-[244px] h-[161px] sm:h-[241px] lg:h-[322px]">
                    <Image
                      src="/images/img_www.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                    <div className="absolute bottom-[20px] sm:bottom-[30px] lg:bottom-[40px] left-[45px] sm:left-[67px] lg:left-[90px] w-[21px] sm:w-[31px] lg:w-[42px] h-[11px] sm:h-[16px] lg:h-[22px]">
                      <Image
                        src="/images/img_intersect.png"
                        alt=""
                        fill
                        className="object-contain"
                      />
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
