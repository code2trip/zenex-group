'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import LanguageSwitcher from './LanguageSwitcher';
import '@/styles/components/header.scss';
import '@/styles/components/menu.scss';

export default function Header() {
  const t = useTranslations('common.nav');
  const tCommon = useTranslations('common');
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuInnerHeight, setMenuInnerHeight] = useState(0);

  useEffect(() => {
    const menuElement = document.querySelector('.menu');
    const menuInnerElement = document.querySelector('.menu__inner');
    if (menuInnerElement) {
      setMenuInnerHeight(menuInnerElement.offsetHeight);
    }
  }, []);

  const openMenu = () => {
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.overlay');
    const headerMenuButton = document.querySelector('.header__menu-button');

    headerMenuButton?.classList.add('active');
    header?.classList.add('active');
    overlay?.classList.add('active');
    menu?.classList.add('active');
    setMenuOpen(true);

    gsap.to(menu, {
      duration: 0.5,
      ease: 'power2.out',
      height: menuInnerHeight,
    });
  };

  const closeMenu = () => {
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.overlay');
    const headerMenuButton = document.querySelector('.header__menu-button');

    headerMenuButton?.classList.remove('active');
    header?.classList.remove('active');
    overlay?.classList.remove('active');
    menu?.classList.remove('active');
    setMenuOpen(false);

    gsap.to(menu, {
      duration: 0.5,
      ease: 'power2.out',
      height: 0,
    });
  };

  const handleMenuToggle = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/ru' || pathname === '/en';
    }
    return pathname.includes(path);
  };

  const locale = pathname.split('/')[1] || 'ru';

  return (
    <>
      <div className="overlay" onClick={closeMenu} />
      <header className="header">
        <Link href={`/${locale}`} className="header__logo">
          <img src="/assets/ZENEX-Logo.svg" alt="Zenex Group" />
        </Link>

        <ul className="header__nav">
          <li className={isActive('/') ? 'active' : ''}>
            <Link href={`/${locale}`}>{t('main')}</Link>
          </li>
          <li>
            <a href="#projects">{t('projects')}</a>
          </li>
          <li className={isActive('/career') ? 'active' : ''}>
            <Link href={`/${locale}/career`}>{t('career')}</Link>
          </li>
          <li className={isActive('/news') ? 'active' : ''}>
            <Link href={`/${locale}/news`}>{t('news')}</Link>
          </li>
          <li>
            <a href="#footer">{t('contact')}</a>
          </li>
        </ul>

        <LanguageSwitcher />

        <Link
          href={`/${locale}/career#form`}
          className="header-cta-button"
        >
          {tCommon('becomePartner')}
        </Link>

        <button
          className="header__menu-button"
          onClick={handleMenuToggle}
          type="button"
        >
          <svg
            width="47"
            height="46"
            viewBox="0 0 47 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 17H31.5"
              stroke="#05ACA4"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M15.5 23H31.5"
              stroke="#05ACA4"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M15.5 29H31.5"
              stroke="#05ACA4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 28.3137L28.3137 17"
              stroke="#05ACA4"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M17.3428 17.3431L28.6565 28.6568"
              stroke="#05ACA4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      <div className="menu">
        <div className="menu__inner">
          <ul className="menu__nav">
            <li className={isActive('/') ? 'active' : ''}>
              <Link href={`/${locale}`} onClick={closeMenu}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 3.81599V1.33333C14.6667 0.965327 14.3687 0.666661 14 0.666661C13.6313 0.666661 13.3333 0.965327 13.3333 1.33333V2.91066L9.86467 0.569994C8.732 -0.194006 7.268 -0.194006 6.13533 0.569994L1.46867 3.71933C0.549333 4.33999 0 5.37266 0 6.48266V12.6667C0 14.5047 1.49533 16 3.33333 16H4.66667C5.03533 16 5.33333 15.7013 5.33333 15.3333V9.33333C5.33333 8.96599 5.632 8.66666 6 8.66666H10C10.368 8.66666 10.6667 8.96599 10.6667 9.33333V15.3333C10.6667 15.7013 10.9647 16 11.3333 16H12.6667C14.5047 16 16 14.5047 16 12.6667V6.48266C16 5.42866 15.504 4.44399 14.6667 3.81599Z"
                    fill="currentColor"
                  />
                </svg>
                {t('main')}
              </Link>
            </li>
            <li>
              <a href={`/${locale}#projects`} onClick={closeMenu}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 11.8413V2.33333C0 1.04467 1.04467 0 2.33333 0C2.88533 0 3.33333 0.448 3.33333 1V10.3333C3.33333 10.8853 2.88533 11.3333 2.33333 11.3333H1.66667C1.05 11.3333 0.477333 11.5213 0 11.8413ZM16 6V12.6667C16 14.5073 14.5073 16 12.6667 16H1.762C0.89 16 0.096 15.3727 0.00866667 14.5053C-0.0913333 13.508 0.689333 12.6667 1.66667 12.6667H2.33333C3.622 12.6667 4.66667 11.622 4.66667 10.3333V2.66667H12.6667C14.5073 2.66667 16 4.15933 16 6ZM12.6667 5.33333H10.6667C10.2987 5.33333 10 5.632 10 6C10 6.368 10.2987 6.66667 10.6667 6.66667H12.6667V11.3333H11.3333V9.33333C11.3333 8.96533 11.0347 8.66667 10.6667 8.66667C10.2987 8.66667 10 8.96533 10 9.33333V11.3333H8V6C8 5.632 7.70133 5.33333 7.33333 5.33333C6.96533 5.33333 6.66667 5.632 6.66667 6V11.3333C6.66667 12.07 7.26333 12.6667 8 12.6667H12.6667C13.4033 12.6667 14 12.07 14 11.3333V6.66667C14 5.93 13.4033 5.33333 12.6667 5.33333Z"
                    fill="currentColor"
                  />
                </svg>
                {t('projects')}
              </a>
            </li>
            <li className={isActive('/career') ? 'active' : ''}>
              <Link href={`/${locale}/career`} onClick={closeMenu}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7953 3.406C11.9747 6.504 7.15067 12.0887 1.14867 12.9893C1.098 12.9973 1.04867 13.0007 0.998667 13.0007C0.512 13.0007 0.0853333 12.6453 0.0113333 12.1493C-0.0706667 11.6033 0.305333 11.094 0.852 11.012C6.012 10.238 10.3253 5.22933 11.9473 2.596L10.8687 2.12267C10.4253 1.928 10.438 1.29467 10.8893 1.11867L13.5813 0.0673333C13.9807 -0.0886667 14.43 0.108667 14.586 0.508L15.636 3.2C15.812 3.65133 15.3547 4.09 14.9113 3.89533L13.7953 3.406ZM0 4C0 1.794 1.794 0 4 0C6.206 0 8 1.794 8 4C8 6.206 6.206 8 4 8C1.794 8 0 6.206 0 4ZM2.66667 2.66667C2.66667 3.40333 3.26333 4 4 4C4.73667 4 5.33333 3.40333 5.33333 2.66667C5.33333 1.93 4.73667 1.33333 4 1.33333C3.26333 1.33333 2.66667 1.93 2.66667 2.66667ZM2.02267 5.77333C2.51133 6.31733 3.212 6.66667 4 6.66667C4.788 6.66667 5.48867 6.31733 5.97733 5.77333C5.56533 5.11133 4.83733 4.66667 4 4.66667C3.16267 4.66667 2.43467 5.11133 2.02267 5.77333ZM15 6C14.4473 6 14 6.448 14 7V15C14 15.552 14.4473 16 15 16C15.5527 16 16 15.552 16 15V7C16 6.448 15.5527 6 15 6ZM11.6667 8.66667C11.114 8.66667 10.6667 9.11467 10.6667 9.66667V15C10.6667 15.552 11.114 16 11.6667 16C12.2193 16 12.6667 15.552 12.6667 15V9.66667C12.6667 9.11467 12.2193 8.66667 11.6667 8.66667ZM8.33333 11.3333C7.78067 11.3333 7.33333 11.7813 7.33333 12.3333V15C7.33333 15.552 7.78067 16 8.33333 16C8.886 16 9.33333 15.552 9.33333 15V12.3333C9.33333 11.7813 8.886 11.3333 8.33333 11.3333ZM5 13.3333C4.44733 13.3333 4 13.7813 4 14.3333V15C4 15.552 4.44733 16 5 16C5.55267 16 6 15.552 6 15V14.3333C6 13.7813 5.55267 13.3333 5 13.3333ZM0.666667 15C0.666667 15.552 1.11467 16 1.66667 16C2.21867 16 2.66667 15.552 2.66667 15C2.66667 14.448 2.21867 14 1.66667 14C1.11467 14 0.666667 14.448 0.666667 15Z"
                    fill="currentColor"
                  />
                </svg>
                {t('career')}
              </Link>
            </li>
            <li className={isActive('/news') ? 'active' : ''}>
              <Link href={`/${locale}/news`} onClick={closeMenu}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1546 1.89666C14.0859 1.68199 13.9132 1.51666 13.6959 1.45732C13.5779 1.42532 10.7832 0.666656 8.62056 0.666656C6.3979 0.666656 3.65656 1.42599 3.54123 1.45866C3.31656 1.52132 3.14056 1.69732 3.07856 1.92266C3.07056 1.95266 3.01457 2.15666 2.93657 2.49599H2.4259C1.87323 2.49599 1.4259 2.94332 1.4259 3.49599C1.4259 4.04866 1.87323 4.49599 2.4259 4.49599H2.56057C2.5139 4.81066 2.46923 5.14666 2.43056 5.49866H2.0459C1.49323 5.49866 1.0459 5.94599 1.0459 6.49866C1.0459 7.05132 1.49323 7.49866 2.0459 7.49866H2.2939C2.2899 7.66466 2.2879 7.83132 2.2879 7.99999C2.2879 8.16866 2.2899 8.33532 2.2939 8.50132H2.0459C1.49323 8.50132 1.0459 8.94866 1.0459 9.50132C1.0459 10.054 1.49323 10.5013 2.0459 10.5013H2.43056C2.46923 10.8533 2.5139 11.1893 2.56057 11.504H2.42523C1.87257 11.504 1.42523 11.9513 1.42523 12.504C1.42523 13.0567 1.87257 13.504 2.42523 13.504H2.93657C3.01457 13.8433 3.0699 14.0467 3.07856 14.0767C3.1399 14.2987 3.31123 14.474 3.53256 14.5387C3.64256 14.5713 6.25056 15.3327 8.62123 15.3327C10.9919 15.3327 13.5992 14.5707 13.7092 14.5387C13.9212 14.476 14.0886 14.3127 14.1559 14.1013C14.1886 13.9987 14.9546 11.5513 14.9546 7.99932C14.9546 4.44732 14.1886 1.99799 14.1552 1.89599L14.1546 1.89666ZM6.45723 4.51332C6.62256 4.02199 7.0139 3.63066 7.50523 3.46532C8.24523 3.21666 8.9959 3.21732 9.7359 3.46532C10.2272 3.63066 10.6186 4.02199 10.7839 4.51332C11.0319 5.25332 11.0319 6.00399 10.7839 6.74399C10.6186 7.23532 10.2272 7.62666 9.7359 7.79199C9.3659 7.91599 8.99323 7.97799 8.62123 7.97799C8.24923 7.97799 7.8759 7.91599 7.5059 7.79199C7.01456 7.62666 6.62323 7.23532 6.4579 6.74399C6.2099 6.00399 6.2099 5.25332 6.4579 4.51332H6.45723ZM10.9219 12.7207C10.5539 12.7207 10.2552 12.422 10.2552 12.054C10.2552 11.1527 9.5219 10.4193 8.62056 10.4193C7.71923 10.4193 6.98523 11.1527 6.98523 12.054C6.98523 12.422 6.68656 12.7207 6.31856 12.7207C5.95056 12.7207 5.6519 12.422 5.6519 12.054C5.6519 10.4173 6.9839 9.08599 8.62056 9.08599C10.2572 9.08599 11.5886 10.4173 11.5886 12.054C11.5886 12.422 11.2899 12.7207 10.9219 12.7207Z"
                    fill="currentColor"
                  />
                </svg>
                {t('news')}
              </Link>
            </li>
            <li>
              <a href="#footer" onClick={closeMenu}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92925 6.52734C8.39458 6.68334 8.84658 6.68401 9.31125 6.52734C9.40858 6.49467 9.48658 6.41667 9.51925 6.32001C9.67525 5.85467 9.67525 5.40267 9.51925 4.93734C9.48658 4.84001 9.40858 4.76267 9.31125 4.73001C8.84658 4.57401 8.39458 4.57401 7.92925 4.73001C7.83191 4.76267 7.75391 4.84067 7.72125 4.93734C7.56525 5.40267 7.56525 5.85467 7.72125 6.32001C7.75391 6.41734 7.83191 6.49467 7.92925 6.52734Z"
                    fill="currentColor"
                  />
                </svg>
                {t('contact')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

