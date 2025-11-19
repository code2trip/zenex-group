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
            <p className="hero-title">{tAff('title').split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && (
                  <>
                    <br className="hero-title-br" />
                    <span className="hero-title-space"> </span>
                  </>
                )}
              </React.Fragment>
            ))}</p>
            <div className="hero-subtitle-group">
              <div className="subtitle-icon-box">
                <img src="/assets/card-header-icon.svg" alt="" />
              </div>
              <p className="hero-subtitle">{tAff('subtitle').split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}</p>
            </div>
            <img src="/assets/aff-hero-logos.svg" alt="" className="aff-hero-logos" />
          </div>
          <Link href={`/${locale}/career#form`} className="hero-cta-button">
            {tAff('cta')}
            <img src="/images/right.png" alt="" aria-hidden="true" />
          </Link>
        </div>
        <div className="hero-right">
          <img
            src="/assets/aff-hero.svg"
            className="aff-hero-image"
            alt="AFF"
          />
        </div>
      </div>
    </div>
  );
}
