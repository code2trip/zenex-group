'use client';
import Image from'next/image';

export default function MarketProblemSection() {
  const problems = [
    {
      id: 1,
      title: "Blocked or declined transactions",
      icon: "/images/img_frame_2131328106.svg"
    },
    {
      id: 2,
      title: "High transaction fees",
      icon: "/images/img_frame_2131328106_white_a700.svg"
    },
    {
      id: 3,
      title: "Deposit and withdrawal limits",
      icon: "/images/img_frame_2131328106_white_a700_72x72.svg"
    },
    {
      id: 4,
      title: "Long settlement times for deposits and winnings accrual",
      icon: "/images/img_frame_2131328106_72x72.svg"
    },
    {
      id: 5,
      title: "Difficulty in funding accounts and withdrawals in certain regions",
      icon: "/images/img_frame_2131328106_1.svg"
    },
    {
      id: 6,
      title: "No privacy",
      icon: "/images/img_frame_2131328106_2.svg"
    }
  ]

  return (
    <section className="w-full bg-background-main py-[70px] sm:py-[105px] lg:py-[140px] relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-[579px] sm:top-[868px] lg:top-[1158px] left-0 w-[259px] sm:w-[388px] lg:w-[518px] h-[282px] sm:h-[423px] lg:h-[564px] z-10">
        <Image
          src="/images/img_bg_blur_1.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1294px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-[3px] sm:gap-[4px] lg:gap-[6px] justify-start items-start w-full mb-[20px] sm:mb-[30px] lg:mb-[40px]">
            <div className="flex justify-start items-center w-full">
              <div className="w-[23px] sm:w-[34px] lg:w-[46px] h-[23px] sm:h-[34px] lg:h-[46px] border border-border-accent rounded-sm p-3 sm:p-4 lg:p-[12px] flex items-center justify-center">
                <Image
                  src="/images/img_icon_teal_a700.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-[25px] sm:text-[37px] lg:text-[50px] font-bold leading-[30px] sm:leading-[45px] lg:leading-[61px] text-left text-text-primary font-['Inter'] ml-4 sm:ml-6 lg:ml-[16px]">
                <span className="text-text-primary">Market </span>
                <span className="text-text-accent">Problem</span>
              </h2>
            </div>
            <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[12px] sm:leading-[18px] lg:leading-[24px] text-left text-text-secondary font-['Inter'] w-full max-w-[70%] ml-1 sm:ml-2 lg:ml-[2px]">
              Traditional card solutions don't meet the expectations of VIP players and high-rollers. They face constant friction and limitations when managing their funds:
            </p>
          </div>

          {/* Problems Grid */}
          <div className="relative w-full">
            {/* Background Pattern */}
            <div className="absolute inset-0 flex flex-col justify-start items-center w-full h-auto opacity-10">
              {/* Pattern rows - simplified for mobile */}
              <div className="hidden lg:flex justify-end items-start w-full mb-[27px]">
                <div className="flex justify-end items-start self-center w-[48%] gap-4">
                  <span className="text-[15px] font-normal leading-[26px] tracking-[7px] text-center text-text-muted font-['Articulat_CF']">Z</span>
                  <div className="flex justify-end items-start self-center w-[48%] gap-8">
                    <span className="text-[15px] font-normal leading-[26px] tracking-[7px] text-center text-text-muted font-['Articulat_CF'] ml-7">Z</span>
                    <span className="text-[15px] font-normal leading-[26px] tracking-[7px] text-center text-text-muted font-['Articulat_CF']">X</span>
                  </div>
                </div>
              </div>
              {/* Additional pattern elements hidden on mobile for simplicity */}
            </div>

            {/* Problems Cards */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[24px] w-full">
              {problems.map((problem, index) => (
                <div
                  key={problem.id}
                  className="flex gap-[5px] sm:gap-[7px] lg:gap-[10px] justify-center items-center w-full bg-background-card rounded-lg shadow-[0px_4px_18px_#6d7e9e19] p-[9px] sm:p-[13px] lg:p-[18px]"
                >
                  <p className="text-[9px] sm:text-[13px] lg:text-[18px] font-bold leading-[11px] sm:leading-[17px] lg:leading-[23px] text-left text-text-secondary font-['Inter'] w-[66%]">
                    {problem.title}
                  </p>
                  <div className="flex justify-start items-center w-auto h-auto">
                    <div className="bg-[linear-gradient(180deg,#d4e2e4_0%,#7096a4_100%)] rounded-[9px] sm:rounded-[13px] lg:rounded-[18px] p-[12px] sm:p-[18px] lg:p-[24px] flex justify-start items-center w-auto h-auto">
                      <div className="bg-iconButton-background border-0 border-border-light rounded-[18px] sm:rounded-[27px] lg:rounded-[36px] p-[8px] sm:p-[12px] lg:p-[16px] flex items-center justify-center w-auto">
                        <Image
                          src={problem.icon}
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
          </div>
        </div>
      </div>
    </section>
  )
}
