'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import '@/styles/components/header.scss';

export default function Header() {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';
  const t = useTranslations('common.nav');
  const tCardsVip = useTranslations('cardsVip.header');

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/ru' || pathname === '/en';
    }
    return pathname.includes(path);
  };

  return (
    <div className="cards-vip-header">
      {/* Navigation */}
      <div className="header-nav-wrapper">
        <div className="header-nav-container">
          {/* Логотип */}
          <Link href={`/${locale}`} className="header__logo" style={{ width: '6.2rem', marginRight: 'auto' }}>
            <img src="/assets/ZENEX-Logo.svg" alt="Zenex Group" />
          </Link>

          {/* Пункты меню - унифицированная структура */}
          <ul className="header__nav" style={{ marginRight: 'auto' }}>
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

          {/* Языковой переключатель и кнопка */}
          <div className="header-actions">
            <LanguageSwitcher />
            <Link
              href={`/${locale}/career#form`}
              className="header-cta-button"
            >
              {tCardsVip('learnMore')}
            </Link>
          </div>
        </div>
      </div>

      {/* Content group (title, subtitle, CTA) */}
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-title-group">
            <p className="hero-title">{tCardsVip('title')}</p>
            <div className="hero-subtitle-group">
              <div className="subtitle-icon-box">
                <img src="/assets/card-header-icon.svg" alt="" />
              </div>
              <p className="hero-subtitle">{tCardsVip('subtitle')}</p>
            </div>
          </div>
          <Link
            href={`/${locale}/career#form`}
            className="hero-cta-button"
          >
            {tCardsVip('cta')}
          </Link>
        </div>
        <div className="hero-right">
          <img src="/assets/image_47237f05.png" className="vip-image" alt="VIP Cards" />
        </div>
      </div>
    </div>
  );
}


