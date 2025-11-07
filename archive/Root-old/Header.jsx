'use client';
import { useState } from 'react';
 import Image from'next/image';
 import Button from'../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { id: 'main', label: 'Main', href: '#main' },
    { id: 'career', label: 'Career', href: '#career' },
    { id: 'news', label: 'News', href: '#news' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ]

  return (
    <header className="w-full bg-header-background shadow-[0px_4px_18px_#6d7e9e19] rounded-lg mx-[26px] sm:mx-[39px] lg:mx-[52px] px-4 sm:px-6 lg:px-[16px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex justify-between items-start py-4 lg:py-[16px]">
          {/* Logo Section */}
          <div className="flex justify-between items-center w-full lg:w-[60%] ml-4 sm:ml-6 lg:ml-[16px]">
            <div className="flex gap-2 sm:gap-[8px] justify-center items-center self-end w-auto">
              <div className="w-6 sm:w-[24px] h-6 sm:h-[24px] relative">
                <Image
                  src="/images/img_vector.png"
                  alt="Zenex Group Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight sm:leading-normal lg:leading-[27px] text-center uppercase text-text-dark font-['Montserrat']">
                zenex GROUP
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-8 sm:gap-10 lg:gap-[42px] justify-center items-start w-auto mb-1 sm:mb-[4px]">
              {menuItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-3 sm:gap-[14px] justify-start items-center w-auto">
                  <div className="w-[46px] h-3 sm:h-[12px] relative">
                    <Image
                      src="/images/img_rectangle_17.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <a
                    href={item.href}
                    className="text-sm sm:text-base font-medium leading-tight sm:leading-snug text-center text-text-primary font-['Inter'] hover:text-text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          {/* Right Section - Language & CTA */}
          <div className="flex gap-2 sm:gap-[8px] justify-center items-center self-center w-auto py-4 sm:py-[16px]">
            {/* Language Button */}
            <Button
              text="EN"
              variant="outline"
              className="text-sm sm:text-base font-bold leading-tight sm:leading-snug text-center text-text-accent border border-border-accent rounded-sm bg-secondary-background px-2 sm:px-[10px] py-2 sm:py-[10px] hover:bg-primary-light transition-colors duration-200"
            />

            {/* Learn More Button */}
            <Button
              text="Learn more"
              className="text-sm sm:text-base font-bold leading-tight sm:leading-snug text-center text-primary-foreground bg-primary-background rounded-sm px-6 sm:px-8 lg:px-[34px] py-2 sm:py-[10px] shadow-[0px_4px_100px_#888888ff] hover:bg-primary-dark transition-all duration-200"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block lg:hidden p-2 ml-4"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-text-primary mt-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-text-primary mt-1 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4 border-t border-border-primary mt-4`}>
          <div className="flex flex-col gap-4 pt-4">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-base font-medium leading-snug text-center text-text-primary font-['Inter'] py-2 hover:text-text-accent transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
