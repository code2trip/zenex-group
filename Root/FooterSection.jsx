'use client';
export default function FooterSection() {
  const footerLinks = [
    { id: 1, label: 'О продукте', href: '#product' },
    { id: 2, label: 'Модули', href: '#modules' },
    { id: 3, label: 'Инструменты', href: '#tools' },
    { id: 4, label: 'Пакеты', href: '#packages' },
    { id: 5, label: 'Контакты', href: '#contacts' }
  ]

  return (
    <footer className="w-full bg-secondary-background shadow-[0px_4px_36px_#0000000c]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1294px] mx-auto py-[40px] sm:py-[60px] lg:py-[80px]">
          <div className="flex flex-col gap-[16px] sm:gap-[24px] lg:gap-[32px] justify-start items-center w-[94%] mx-auto">
            {/* Contact Info */}
            <div className="flex flex-col gap-[1px] sm:gap-[1px] lg:gap-[2px] justify-start items-center w-auto px-[26px] sm:px-[39px] lg:px-[52px]">
              <h3 className="text-[15px] sm:text-[22px] lg:text-[30px] font-bold leading-[18px] sm:leading-[27px] lg:leading-[37px] text-center text-text-primary font-['Inter'] w-auto">
                Let's succed together!
              </h3>
              <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-medium leading-[10px] sm:leading-[15px] lg:leading-[20px] text-center text-text-primary font-['Inter'] w-auto">
                info@zenex-coin.com
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center sm:justify-between items-center w-full sm:w-[48%] gap-4 sm:gap-0">
              {footerLinks?.map((link) => (
                <a
                  key={link?.id}
                  href={link?.href}
                  className="text-[8px] sm:text-[12px] lg:text-[16px] font-medium leading-[10px] sm:leading-[15px] lg:leading-[20px] text-left text-text-primary font-['Inter'] hover:text-text-accent transition-colors duration-200"
                >
                  {link?.label}
                </a>
              ))}
            </div>

            {/* Company Information */}
            <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-4 lg:gap-0">
              <div className="flex justify-center items-center w-full lg:w-auto">
                <div className="w-[0.5px] sm:w-[0.75px] lg:w-[1px] h-[27px] sm:h-[40px] lg:h-[54px] bg-border-primary"></div>
                <p className="text-[6px] sm:text-[9px] lg:text-[12px] font-normal leading-[9px] sm:leading-[13px] lg:leading-[18px] text-left text-text-secondary font-['Inter'] w-[96%] ml-[6px] sm:ml-[9px] lg:ml-[12px]">
                  Name: ZENEX Game Ltd. Address: 10 ANSON ROAD #20-05, INTERNATIONAL PLAZA, SINGAPORE, 079903. Reg.number: (UEN): 202243071W. Activities: Development of software and applications (except games and cybersecurity)
                </p>
              </div>

              <div className="flex justify-center items-center w-full lg:w-auto">
                <div className="w-[0.5px] sm:w-[0.75px] lg:w-[1px] h-[27px] sm:h-[40px] lg:h-[54px] bg-border-primary"></div>
                <p className="text-[6px] sm:text-[9px] lg:text-[12px] font-normal leading-[9px] sm:leading-[13px] lg:leading-[18px] text-left text-text-secondary font-['Inter'] w-[96%] ml-[6px] sm:ml-[9px] lg:ml-[12px]">
                  Name: TAU impex s.r.o. Address: Klecanska 369 Zdiby; Stredocesky; 25066. Reg.number: 247 09 891 Klecanská 369, 250 66 Zdiby, Czech republic. Activity: Poskytování služeb spojených s virtuálním aktivem (Provision of services related to virtual assets)
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex justify-center items-center w-full">
              <div className="bg-secondary-light rounded-md p-[5px] sm:p-[7px] lg:p-[10px]">
                <p className="text-[6px] sm:text-[9px] lg:text-[12px] font-normal leading-[9px] sm:leading-[13px] lg:leading-[18px] text-center text-text-secondary font-['Inter'] w-[20%]">
                  Copyright © 2025<br />Zenex. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
