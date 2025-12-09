'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Header() {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';
  const tCardsVip = useTranslations('cardsVip.header');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getSubtitleText = () => {
    let text = tCardsVip('subtitle');
    if (locale === 'en' && isSmallScreen) {
      text = text.replace(/\s+for\s+/gi, '<br />for ');
    }
    return text;
  };

  return (
    <div className="cards-vip-header">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-title-group">
            <p className="hero-title">{tCardsVip('title')}</p>
            <div className="hero-subtitle-group">
              <div className="subtitle-icon-box">
                <img src="/assets/card-header-icon.svg" alt="" />
              </div>
              <p 
                className="hero-subtitle"
                dangerouslySetInnerHTML={{ __html: getSubtitleText() }}
              />
            </div>
          </div>
          <Link href={`/${locale}/career#form`} className="hero-cta-button">
            {tCardsVip('cta')}
            <img src="/images/right.png" alt="" aria-hidden="true" />
          </Link>
        </div>
        <div className="hero-right">
          <img
            src="/assets/image_47237f05.png"
            className="vip-image"
            alt="VIP Cards"
          />
        </div>
      </div>
    </div>
  );
}


