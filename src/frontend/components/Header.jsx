'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { getGsap } from '@/lib/gsap';
import '@/styles/components/header.scss';
import '@/styles/components/menu.scss';

export default function Header() {
  const t = useTranslations('common.nav');
  const tCommon = useTranslations('common');
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuInnerHeight, setMenuInnerHeight] = useState(0);
  const gsapRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    getGsap().then((instance) => {
      if (mounted) {
        gsapRef.current = instance;
      }
    });

    return () => {
      mounted = false;
      if (typeof document !== 'undefined') {
        document.body.classList.remove('menu-open');
      }
    };
  }, []);

  const openMenu = () => {
    const gsap = gsapRef.current;
    if (!gsap) return;
    const menu = document.querySelector('.menu');
    const menuInnerElement = document.querySelector('.menu__inner');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.overlay');
    const headerMenuButton = document.querySelector('.header__menu-button');
    const body = typeof document !== 'undefined' ? document.body : null;

    // Вычисляем актуальную высоту меню каждый раз при открытии
    let actualHeight = menuInnerHeight;
    if (menuInnerElement) {
      // Используем scrollHeight для получения полной высоты контента
      // Это работает даже когда элемент имеет height: 0 и overflow: hidden
      const contentHeight = menuInnerElement.scrollHeight;
      if (menu) {
        const computedStyle = window.getComputedStyle(menu);
        const topOffset = parseFloat(computedStyle.top) || 0;
        const bottomOffset = parseFloat(computedStyle.bottom) || 0;
        const viewportLimit = window.innerHeight - topOffset - bottomOffset;
        actualHeight = Math.min(contentHeight, viewportLimit);
      } else {
        actualHeight = contentHeight;
      }
      setMenuInnerHeight(actualHeight);
    }

    headerMenuButton?.classList.add('active');
    header?.classList.add('active');
    overlay?.classList.add('active');
    menu?.classList.add('active');
    body?.classList.add('menu-open');
    setMenuOpen(true);

    gsap.to(menu, {
      duration: 0.5,
      ease: 'power2.out',
      height: actualHeight,
    });
  };

  const closeMenu = () => {
    const gsap = gsapRef.current;
    if (!gsap) return;
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.overlay');
    const headerMenuButton = document.querySelector('.header__menu-button');
    const body = typeof document !== 'undefined' ? document.body : null;

    headerMenuButton?.classList.remove('active');
    header?.classList.remove('active');
    overlay?.classList.remove('active');
    menu?.classList.remove('active');
    body?.classList.remove('menu-open');
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
            <a href={`/${locale}#projects`}>{t('projects')}</a>
          </li>
          <li className={isActive('/career') ? 'active' : ''}>
            <Link href={`/${locale}/career`}>{t('career')}</Link>
          </li>
          <li className={isActive('/news') ? 'active' : ''}>
            <Link href={`/${locale}/news`}>{t('news')}</Link>
          </li>
          <li>
            <a href={`/${locale}/contact`}>{t('contact')}</a>
          </li>
        </ul>

        <LanguageSwitcher />

        <Link href={`/${locale}/contact`} className="header-cta-button">
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
            {/* <li className={isActive('/') ? 'active' : ''}>
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
            </li> */}
            <li>
              <a href={`/${locale}#projects`} onClick={closeMenu}>
                <Image
                  src="/assets/header-icons/Projects.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                {t('projects')}
              </a>
            </li>
            <li className={isActive('/career') ? 'active' : ''}>
              <Link href={`/${locale}/career`} onClick={closeMenu}>
                <Image
                  src="/assets/header-icons/Career.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                {t('career')}
              </Link>
            </li>
            <li className={isActive('/news') ? 'active' : ''}>
              <Link href={`/${locale}/news`} onClick={closeMenu}>
                <Image
                  src="/assets/header-icons/News.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                {t('news')}
              </Link>
            </li>
            <li>
              <a href={`/${locale}/contact`} onClick={closeMenu}>
                <Image
                  src="/assets/header-icons/Contact.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                {t('contact')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
