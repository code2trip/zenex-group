'use client';
import Image from'next/image';
 import Button from'../components/ui/Button';

export default function CTASection() {
  const handleContactSales = () => {
    // Contact sales action
  }

  return (
    <section className="w-full bg-background-main py-[37px] sm:py-[55px] lg:py-[74px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1294px] mx-auto">
          <div className="relative bg-[linear-gradient(270deg,#16464a_0%,#07171b_100%)] rounded-lg w-full h-[140px] sm:h-[210px] lg:h-[280px] overflow-hidden">
            {/* Background Cards */}
            <div className="absolute top-0 right-[94px] sm:right-[141px] lg:right-[188px] w-[339px] sm:w-[508px] lg:w-[678px] h-[136px] sm:h-[204px] lg:h-[272px] z-5">
              <Image
                src="/images/img_4_copy_12.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-0 right-[-112px] sm:right-[-168px] lg:right-[-224px] w-[360px] sm:w-[540px] lg:w-[720px] h-[140px] sm:h-[210px] lg:h-[280px] z-10">
              <Image
                src="/images/img_4_copy_13.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Main Content */}
            <div className="relative z-20 w-full h-full px-[20px] sm:px-[30px] lg:px-[40px]">
              <div className="absolute top-0 left-[20px] sm:left-[30px] lg:left-[40px] right-[20px] sm:right-[30px] lg:right-[40px] bottom-0 flex justify-center items-center w-auto h-full">
                <div className="w-full max-w-[605px] sm:max-w-[907px] lg:max-w-[1210px] h-full px-[17px] sm:px-[25px] lg:px-[34px]">
                  {/* Card Visual Background */}
                  <div className="absolute top-0 left-[148px] sm:left-[222px] lg:left-[296px] right-[17px] sm:right-[25px] lg:right-[34px] bottom-0 w-auto h-full">
                    <div className="absolute top-0 right-[118px] sm:right-[177px] lg:right-[236px] w-[319px] sm:w-[478px] lg:w-[638px] h-full">
                      <Image
                        src="/images/img_group_48100370.png"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-[38px] sm:top-[57px] lg:top-[76px] right-[118px] sm:right-[177px] lg:right-[236px] w-[48px] sm:w-[72px] lg:w-[96px] h-[38px] sm:h-[57px] lg:h-[76px]">
                      <Image
                        src="/images/img_gift_box_concep_76x96.png"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* VIP Cards */}
                    <div className="absolute top-[9px] sm:top-[13px] lg:top-[18px] right-[3px] sm:right-[4px] lg:right-[6px] w-[311px] sm:w-[466px] lg:w-[622px] h-[131px] sm:h-[196px] lg:h-[262px]">
                      <div className="absolute top-[18px] sm:top-[27px] lg:top-[36px] left-[20px] sm:left-[30px] lg:left-[32px] w-[265px] sm:w-[397px] lg:w-[530px] h-[131px] sm:h-[196px] lg:h-[262px]">
                        <div className="absolute top-[18px] sm:top-[27px] lg:top-[36px] left-[20px] sm:left-[30px] lg:left-[40px] w-[146px] sm:w-[219px] lg:w-[292px] h-[113px] sm:h-[169px] lg:h-[226px] bg-[linear-gradient(315deg,#1f6a65_0%,#43a9a1_100%)] rounded-md p-[2px] sm:p-[3px] lg:p-[4px] pr-[8px] sm:pr-[12px] lg:pr-[16px] pb-[2px] sm:pb-[3px] lg:pb-[4px]">
                          <div className="flex flex-col gap-[19px] sm:gap-[28px] lg:gap-[38px] justify-start items-end w-full h-auto">
                            <div className="flex justify-between items-start w-full mt-[55px] sm:mt-[82px] lg:lg-[110px]">
                              <div className="w-[63px] sm:w-[94px] lg:w-[126px] h-[8px] sm:h-[12px] lg:h-[16px] self-end mt-[15px] sm:mt-[22px] lg:mt-[30px]">
                                <Image
                                  src="/images/img_frame_1000006077.svg"
                                  alt=""
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-black italic leading-[10px] sm:leading-[15px] lg:leading-[21px] text-left uppercase text-white font-['Montserrat'] w-auto">
                                vip players
                              </p>
                            </div>
                            <div className="w-[23px] sm:w-[34px] lg:w-[46px] h-[14px] sm:h-[21px] lg:h-[28px] mr-[31px] sm:mr-[46px] lg:mr-[62px]">
                              <Image
                                src="/images/img_frame_1000006081.svg"
                                alt=""
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="absolute top-0 right-0 w-[164px] sm:w-[246px] lg:w-[328px] h-[108px] sm:h-[162px] lg:h-[216px] bg-[linear-gradient(315deg,#000000_0%,#3f3f3f_100%)] rounded-md shadow-[1px_1px_2px_#ffffff4c] p-[12px] sm:p-[18px] lg:p-[24px]">
                          <div className="flex flex-col gap-[53px] sm:gap-[79px] lg:gap-[106px] justify-start items-end w-full h-auto">
                            <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-black italic leading-[10px] sm:leading-[15px] lg:leading-[21px] text-left uppercase text-text-muted font-['Montserrat'] w-auto mt-[4px] sm:mt-[6px] lg:mt-[8px]">
                              vip players
                            </p>
                            <div className="w-[27px] sm:w-[40px] lg:w-[54px] h-[1px] sm:h-[2px] lg:h-[3px] mr-[31px] sm:mr-[46px] lg:mr-[62px]">
                              <Image
                                src="/images/img_frame_1000006081_yellow_800.png"
                                alt=""
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-0 left-[15px] sm:left-[22px] lg:left-[30px] w-[200px] sm:w-[300px] lg:w-[400px] h-[131px] sm:h-[196px] lg:h-[262px] bg-[url('/images/img_credit_card_mockup.png')] bg-cover bg-center p-[52px] sm:p-[78px] lg:p-[104px] pr-[11px] sm:pr-[16px] lg:pr-[22px] pb-[52px] sm:pb-[78px] lg:pb-[104px] shadow-[1px_1px_2px_#ffffff4c]">
                        <div className="flex justify-end items-start w-[80%] h-auto">
                          <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-black italic leading-[10px] sm:leading-[15px] lg:leading-[21px] text-left uppercase text-white font-['Montserrat'] w-auto mb-[17px] sm:mb-[25px] lg:mb-[34px]">
                            vip players
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Left Content */}
                  <div className="absolute top-[36px] sm:top-[54px] lg:top-[72px] left-[17px] sm:left-[25px] lg:left-[34px] flex justify-center items-center w-auto h-auto">
                    <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-start items-center w-full">
                      <div className="flex justify-start items-center w-full">
                        <div className="w-[16px] sm:w-[24px] lg:w-[32px] h-[11px] sm:h-[16px] lg:h-[22px]">
                          <Image
                            src="/images/img_frame_1000006066.svg"
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="w-[67px] sm:w-[100px] lg:w-[134px] h-[10px] sm:h-[15px] lg:h-[20px] ml-[2px] sm:ml-[3px] lg:ml-[4px]">
                          <Image
                            src="/images/img_union.svg"
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-[1px] sm:gap-[1px] lg:gap-[2px] justify-start items-start w-full">
                        <h3 className="text-[13px] sm:text-[20px] lg:text-[27px] font-bold leading-[16px] sm:leading-[24px] lg:leading-[33px] text-left bg-[linear-gradient(37deg,#9a885c_0%,#e5d294_100%)] bg-clip-text text-transparent font-['Inter'] w-auto">
                          Your Competitive Edge
                        </h3>
                        <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-secondary-light font-['Inter'] w-[34%]">
                          Give your players true transactional freedom — and grow your revenue.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="absolute top-[66px] sm:top-[99px] lg:top-[133px] right-0 w-auto h-auto">
                    <Button
                      text="Contact sales"
                      onClick={handleContactSales}
                      className="text-[8px] sm:text-[12px] lg:text-[16px] font-bold leading-[10px] sm:leading-[15px] lg:leading-[20px] text-center uppercase text-text-primary bg-secondary-background rounded-md px-[17px] sm:px-[25px] lg:px-[34px] pr-[29px] sm:pr-[43px] lg:pr-[58px] py-[15px] sm:py-[22px] lg:py-[30px] gap-[5px] sm:gap-[7px] lg:gap-[10px] hover:bg-secondary-light transition-all duration-200 flex items-center"
                    >
                      <span>Contact sales</span>
                      <Image
                        src="/images/img_right_gray_900.svg"
                        alt=""
                        width={12}
                        height={12}
                        className="w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6"
                      />
                    </Button>
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
