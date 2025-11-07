'use client';
import Image from'next/image';


export default function GetStartedSection() {
  const handleContactSales = () => {
    // Contact sales action
  }

  return (
    <section className="w-full bg-background-main py-[37px] sm:py-[55px] lg:py-[74px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1294px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-[15px] sm:gap-[22px] lg:lg-[30px] justify-start items-center w-full mb-[37px] sm:mb-[55px] lg:mb-[74px]">
            <div className="flex gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-center items-center w-full">
              <div className="w-[23px] sm:w-[34px] lg:w-[46px] h-[23px] sm:h-[34px] lg:h-[46px] border border-border-accent rounded-sm p-3 sm:p-4 lg:p-[12px] flex items-center justify-center">
                <Image
                  src="/images/img_career.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-[25px] sm:text-[37px] lg:text-[50px] font-bold leading-[25px] sm:leading-[37px] lg:leading-[50px] text-left font-['Inter'] w-[96%]">
                <span className="text-text-accent">Get Started </span>
                <span className="text-text-primary">with Ns.Сards iGaming VIP in Just 96 Hours</span>
              </h2>
            </div>

            {/* Integration Options and Card Issuance */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[24px] justify-start items-center w-full">
              {/* Integration Options */}
              <div className="relative bg-[linear-gradient(315deg,#cab97f_0%,#705f37_100%)] rounded-lg w-full lg:w-[414px] h-[227px] sm:h-[340px] lg:h-[454px] overflow-hidden">
                <div className="absolute top-[30px] sm:top-[45px] lg:top-[60px] left-[12px] sm:left-[18px] lg:lg-[24px] right-[12px] sm:right-[18px] lg:right-[24px] flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-start items-start w-auto h-auto z-20">
                  <h3 className="text-[25px] sm:text-[37px] lg:text-[50px] font-bold leading-[25px] sm:leading-[37px] lg:leading-[50px] text-left text-white font-['Inter'] w-[84%]">
                    Integration Options
                  </h3>

                  <div className="flex gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-start items-center w-full">
                    <div className="text-[13px] sm:text-[20px] lg:text-[27px] font-bold leading-[16px] sm:leading-[24px] lg:leading-[33px] text-left text-accent-color bg-secondary-background rounded-sm px-[8px] sm:px-[12px] lg:px-[16px] py-[1px] sm:py-[1px] lg:py-[2px]">
                      1
                    </div>
                    <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-white font-['Inter'] w-[86%]">
                      <span className="font-bold">Turnkey API Integrations </span>
                      <span>— seamless connection to your existing platforms</span>
                    </p>
                  </div>

                  <div className="flex gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-start items-center w-full">
                    <div className="text-[13px] sm:text-[20px] lg:text-[27px] font-bold leading-[16px] sm:leading-[24px] lg:leading-[33px] text-left text-accent-color bg-secondary-background rounded-sm px-[7px] sm:px-[10px] lg:px-[14px] py-[1px] sm:py-[1px] lg:py-[2px]">
                      2
                    </div>
                    <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-white font-['Inter'] w-[86%]">
                      <span className="font-bold">Custom API Integrations </span>
                      <span>— product setup based on your technical requirements</span>
                    </p>
                  </div>
                </div>

                {/* Integration Visual */}
                <div className="absolute bottom-[30px] sm:bottom-[45px] lg:bottom-[60px] right-[57px] sm:right-[85px] lg:right-[114px] w-[150px] sm:w-[225px] lg:w-[300px] h-[82px] sm:h-[123px] lg:h-[164px] z-10">
                  <Image
                    src="/images/img_frame_352281.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Card Issuance Options */}
              <div className="flex flex-col justify-start items-end w-full lg:w-[962px]">
                <div className="w-[143px] sm:w-[214px] lg:w-[286px] h-[48px] sm:h-[72px] lg:h-[96px] mr-[58px] sm:mr-[87px] lg:mr-[116px]">
                  <Image
                    src="/images/img_ellipse_42.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="relative bg-[linear-gradient(225deg,#01645c_0%,#0a2125_100%)] rounded-lg w-[92%] h-[218px] sm:h-[327px] lg:h-[436px] overflow-hidden mt-[-40px] sm:mt-[-60px] lg:lg-[-80px]">
                  <div className="absolute top-[22px] sm:top-[33px] lg:top-[44px] left-0 right-0 flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-start items-start w-full h-auto z-20 px-4 sm:px-6 lg:px-8">
                    <h3 className="text-[25px] sm:text-[37px] lg:text-[50px] font-bold leading-[25px] sm:leading-[37px] lg:leading-[50px] text-left text-white font-['Inter'] w-full">
                      Card issuance options
                    </h3>

                    <div className="flex justify-start items-center w-full">
                      <div className="text-[13px] sm:text-[20px] lg:text-[27px] font-bold leading-[16px] sm:leading-[24px] lg:leading-[33px] text-left text-white bg-primary-background rounded-sm px-[8px] sm:px-[12px] lg:px-[16px] py-[1px] sm:py-[1px] lg:py-[2px]">
                        1
                      </div>
                      <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[10px] sm:leading-[15px] lg:leading-[20px] text-left text-border-neutral font-['Inter'] self-end w-auto mb-[5px] sm:mb-[7px] lg:mb-[10px] ml-[10px] sm:ml-[15px] lg:ml-[20px]">
                        <span>Players receive a link to apply for a card </span>
                        <span className="font-bold leading-[12px] sm:leading-[18px] lg:leading-[24px] text-white">directly</span>
                      </p>
                    </div>

                    <div className="flex justify-start items-center w-full">
                      <div className="text-[13px] sm:text-[20px] lg:text-[27px] font-bold leading-[16px] sm:leading-[24px] lg:leading-[33px] text-left text-white bg-primary-background rounded-sm px-[7px] sm:px-[10px] lg:px-[14px] py-[1px] sm:py-[1px] lg:py-[2px]">
                        2
                      </div>
                      <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-border-neutral font-['Inter'] w-[50%] ml-[10px] sm:ml-[15px] lg:ml-[20px]">
                        <span>You provide </span>
                        <span className="font-bold text-white">client data via API — we set-up a card and give you a link to receive it</span>
                      </p>
                    </div>

                    <div className="flex justify-start items-center w-full">
                      <div className="text-[13px] sm:text-[20px] lg:text-[27px] font-bold leading-[16px] sm:leading-[24px] lg:leading-[33px] text-left text-white bg-primary-background rounded-sm px-[7px] sm:px-[10px] lg:px-[14px] py-[1px] sm:py-[1px] lg:py-[2px]">
                        3
                      </div>
                      <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left font-['Inter'] w-[46%] ml-[10px] sm:ml-[15px] lg:ml-[20px]">
                        <span className="font-bold text-white">Fully custom onboarding flow </span>
                        <span className="text-border-neutral">adapted to your business processes</span>
                      </p>
                    </div>
                  </div>

                  {/* 3D Visual */}
                  <div className="absolute top-0 right-[28px] sm:right-[42px] lg:right-[56px] w-[218px] sm:w-[327px] lg:w-[436px] h-[218px] sm:h-[327px] lg:h-[436px] z-10">
                    <div className="absolute top-[83px] sm:top-[124px] lg:top-[166px] left-[8px] sm:left-[12px] lg:lg-[16px] w-[218px] sm:w-[327px] lg:w-[436px] h-[201px] sm:h-[301px] lg:h-[402px]">
                      <div className="absolute top-0 left-[45px] sm:left-[67px] lg:left-[90px] w-[201px] sm:w-[301px] lg:w-[402px] h-[201px] sm:h-[301px] lg:h-[402px] border border-accent-light rounded-full p-[26px] sm:p-[39px] lg:p-[52px]">
                        <div className="w-full h-full border border-accent-light rounded-full p-[37px] sm:p-[55px] lg:p-[74px]">
                          <div className="w-full h-full border border-accent-light rounded-full p-[11px] sm:p-[16px] lg:p-[22px]">
                            <div className="w-full h-full border border-accent-light rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-[218px] sm:w-[327px] lg:w-[436px] h-[218px] sm:h-[327px] lg:h-[436px]">
                      <Image
                        src="/images/img_111111_firefly_3d_436x436.png"
                        alt=""
                        fill
                        className="object-contain"
                      />

                      <div className="absolute top-[66px] sm:top-[99px] lg:top-[133px] right-[28px] sm:right-[42px] lg:right-[56px] left-[43px] sm:left-[64px] lg:left-[86px] flex flex-col gap-[59px] sm:gap-[88px] lg:gap-[118px] justify-start items-start w-auto h-auto">
                        <div className="text-[10px] sm:text-[15px] lg:text-[20px] font-bold leading-[12px] sm:leading-[18px] lg:leading-[25px] text-left bg-[linear-gradient(37deg,#9a885c_0%,#e5d294_100%)] bg-clip-text text-transparent bg-[linear-gradient(85deg,#0c2326_0%,#0f4944_100%)] rounded-[9px] sm:rounded-[13px] lg:rounded-[18px] shadow-[3px_9px_7px_#0000004f] border-0 border-accent-light px-[21px] sm:px-[31px] lg:px-[42px] py-[2px] sm:py-[3px] lg:py-[4px] self-end w-auto flex items-center gap-[2px] sm:gap-[3px] lg:gap-[4px]">
                          <span>Sync</span>
                          <Image
                            src="/images/img_power.png"
                            alt=""
                            width={6}
                            height={9}
                            className="w-[6px] sm:w-[9px] lg:w-[12px] h-[9px] sm:h-[13px] lg:h-[18px]"
                          />
                        </div>

                        <div className="text-[10px] sm:text-[15px] lg:text-[20px] font-bold leading-[12px] sm:leading-[18px] lg:leading-[25px] text-left bg-[linear-gradient(37deg,#9a885c_0%,#e5d294_100%)] bg-clip-text text-transparent bg-[linear-gradient(85deg,#0c2326_0%,#0f4944_100%)] rounded-[9px] sm:rounded-[13px] lg:rounded-[18px] shadow-[3px_9px_7px_#0000004f] border-0 border-accent-light px-[18px] sm:px-[27px] lg:px-[36px] py-[2px] sm:py-[3px] lg:py-[4px] w-auto flex items-center gap-[2px] sm:gap-[3px] lg:gap-[4px] ml-[10px] sm:ml-[15px] lg:ml-[20px]">
                          <span>Api</span>
                          <Image
                            src="/images/img_key.png"
                            alt=""
                            width={10}
                            height={10}
                            className="w-[10px] sm:w-[15px] lg:w-[20px] h-[10px] sm:h-[15px] lg:h-[20px]"
                          />
                        </div>
                      </div>

                      <div className="absolute top-[83px] sm:top-[124px] lg:top-[166px] left-[49px] sm:left-[73px] lg:left-[98px] w-[218px] sm:w-[327px] lg:w-[436px] h-[125px] sm:h-[187px] lg:lg-[250px]">
                        <div className="absolute top-0 left-[49px] sm:left-[73px] lg:left-[98px] text-[10px] sm:text-[15px] lg:text-[20px] font-bold leading-[12px] sm:leading-[18px] lg:leading-[25px] text-left bg-[linear-gradient(37deg,#9a885c_0%,#e5d294_100%)] bg-clip-text text-transparent bg-[linear-gradient(85deg,#0c2326_0%,#0f4944_100%)] rounded-[9px] sm:rounded-[13px] lg:rounded-[18px] shadow-[3px_9px_7px_#0000004f] border-0 border-accent-light px-[12px] sm:px-[18px] lg:px-[24px] py-[2px] sm:py-[3px] lg:py-[4px] w-auto flex items-center gap-[2px] sm:gap-[3px] lg:gap-[4px]">
                          <span>Ready</span>
                          <Image
                            src="/images/img_bolt.png"
                            alt=""
                            width={7}
                            height={9}
                            className="w-[7px] sm:w-[10px] lg:w-[14px] h-[9px] sm:h-[13px] lg:h-[18px]"
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
    </section>
  )
}
