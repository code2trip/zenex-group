'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Header() {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';
  const tAff = useTranslations('aff.header');

  return (
    <div className="aff-header">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-title-group">
            <p className="hero-title">{tAff('title')}</p>
            <div className="hero-subtitle-group">
              <div className="subtitle-icon-box">
                <img src="/assets/card-header-icon.svg" alt="" />
              </div>
              <p className="hero-subtitle">{tAff('subtitle')}</p>
            </div>
          </div>
          <Link href={`/${locale}/career#form`} className="hero-cta-button">
            {tAff('cta')}
            <img src="/images/right.png" alt="" aria-hidden="true" />
          </Link>
        </div>
        <div className="hero-right">
          <div className="hero-right-bg">
            <img
              src="/assets/aff-header-bg.png"
              className="aff-header-bg-image"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="hero-gift-boxes">
            <img
              src="/assets/aff-header-gift-1.png"
              className="gift-box gift-box-1"
              alt=""
              aria-hidden="true"
            />
            <img
              src="/assets/aff-header-gift-2.png"
              className="gift-box gift-box-2"
              alt=""
              aria-hidden="true"
            />
            <img
              src="/assets/aff-header-gift-3.png"
              className="gift-box gift-box-3"
              alt=""
              aria-hidden="true"
            />
            <img
              src="/assets/aff-header-gift-4.png"
              className="gift-box gift-box-4"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

