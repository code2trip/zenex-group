'use client';

import { useTranslations } from 'next-intl';

export default function BenefitsVip() {
  const t = useTranslations('aff.exclusive');
  const titleMain = t('titleMain');
  const breakWord = t('titleMainBreakWord');

  let titleBeforeBreak = titleMain;
  let titleAfterBreak = '';

  if (breakWord) {
    const breakIndex = titleMain.indexOf(breakWord);
    if (breakIndex !== -1) {
      const breakEnd = breakIndex + breakWord.length;
      titleBeforeBreak = titleMain.slice(0, breakEnd);
      titleAfterBreak = titleMain.slice(breakEnd);
    }
  }
  
  const features = [
    {
      icon: '/assets/image-user-check.svg',
      text: 'Master account with sub-account management'
    },
    {
      icon: '/assets/palette.svg',
      text: 'Branded dashboard and custom UI'
    },
    {
      icon: '/assets/gift-01.svg',
      text: 'Referral system and promo codes'
    },
    {
      icon: '/assets/sale-03.svg',
      text: 'Adjustable markups and discounts'
    },
    {
      icon: '/assets/sliders-02.svg',
      text: 'Tailored customization for specific business processes'
    },
    {
      icon: '/assets/layers-three-01.svg',
      text: 'Mass card issuance in one click'
    },
    {
      icon: '/assets/link-01.svg',
      text: 'Link multiple cards to a shared balance'
    }
  ];

  return (
    <div className="exclusive-section section-container">
      {/* Title */}
      <div className="section-title-group section-inner">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/Values.svg" alt="" />
          </div>
          <p className="title-text">
            <span className="accent">{t('titleAccent')}</span>
            <span className="dark">{t('titleRest')}</span>
          </p>
        </div>
      </div>

      {/* Main content with grid */}
      <div className="exclusive-content-wrapper section-inner">
        {/* First column */}
        <div className="exclusive-column-left">
          <div className="exclusive-text-block">
            <p className="exclusive-subtitle">{t('subtitle')}</p>
            <h3 className="exclusive-title">
              {titleBeforeBreak}
              {titleAfterBreak && (
                <span className="exclusive-title-line-break">{titleAfterBreak}</span>
              )}
            </h3>
          </div>
          <img 
            src="/assets/hand.svg" 
            alt="" 
            className="exclusive-hand-image"
          />
          <img 
            src="/assets/logo.svg" 
            alt="" 
            className="exclusive-logo"
          />
        </div>

        {/* Second column */}
        <div className="exclusive-column-right">
          <img 
            src="/assets/demicircle.svg" 
            alt="" 
            className="exclusive-demicircle"
          />
          <ul className="exclusive-features-list">
            {features.map((feature, index) => (
              <li key={index} className="exclusive-feature-item">
                <div className="exclusive-feature-icon">
                  <img src={feature.icon} alt="" />
                </div>
                <p className="exclusive-feature-text">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
