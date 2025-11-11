'use client';

import { useTranslations } from 'next-intl';

export default function BenefitsBusiness() {
  const t = useTranslations('cardsVip.benefitsBusiness');
  const titleFull = t('title');
  const accentWordsRaw = t.raw('titleAccentWords') ?? [];
  const accentWords = Array.isArray(accentWordsRaw) ? accentWordsRaw : [];
  const escapedWords = accentWords
    .map((word) => word?.toString().trim())
    .filter(Boolean)
    .map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  const highlightRegex =
    escapedWords.length > 0
      ? new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'giu')
      : null;

  const titleContent = [];

  if (highlightRegex) {
    let lastIndex = 0;
    let match;
    while ((match = highlightRegex.exec(titleFull)) !== null) {
      if (match.index > lastIndex) {
        const plainSegment = titleFull.slice(lastIndex, match.index);
        titleContent.push(
          <span key={`plain-${lastIndex}`} className="title-text__plain">
            {plainSegment}
          </span>
        );
      }

      titleContent.push(
        <span key={`accent-${match.index}`} className="accent">
          {match[0]}
        </span>
      );

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < titleFull.length) {
      titleContent.push(
        <span key={`plain-${lastIndex}-end`} className="title-text__plain">
          {titleFull.slice(lastIndex)}
        </span>
      );
    }
  } else {
    titleContent.push(
      <span key="plain-full" className="title-text__plain">
        {titleFull}
      </span>
    );
  }
  const benefits = t.raw('benefits');
  const benefitOrder = ['customization', 'unlimited', 'communication', 'loyalty', 'analytics', 'support'];

  return (
    <div className="benefits-business-section section-container">
      {/* Левая иллюстрация по макету */}
      {/* <img src="/assets/image_3cac8981.png" alt="Benefits illustration" className="business-left-img" /> */}

      {/* Title */}
      <div className="section-title-group section-inner">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/Benefits-icon.svg" alt="" />
          </div>
          <p className="title-text">{titleContent}</p>
        </div>
      </div>

      {/* Frame 2085662083 - основной контент */}
      <div className="benefits-content-wrapper">
        {/* Изображение первым */}
        <picture className="benefits-visual">
          <source media="(max-width: 600px)" srcSet="/assets/background-pattern-business-mobile.svg" />
          <source media="(max-width: 1024px)" srcSet="/assets/background-pattern-business-tablet.svg" />
          <img
            src="/assets/background-pattern-business.svg"
            alt="Business background pattern"
            className="benefits-visual__image"
          />
        </picture>

        {/* Cards list - карточки вторыми */}
        <div className="benefits-cards-list">
          {benefitOrder.map((key) => {
            const benefit = benefits[key];
            if (!benefit) return null;

            const iconMap = {
              customization: '/assets/image_50727951.png',
              unlimited: '/assets/image_77a6e2e0.png',
              communication: '/assets/image_39df2c01.png',
              loyalty: '/assets/image_dd8ecfcf.png',
              analytics: '/assets/image_1351319b.png',
              support: '/assets/image_a8493888.png',
            };

            const gradientMap = {
              customization: 'gradient-teal',
              unlimited: 'gradient-dark',
              communication: 'gradient-gold',
              loyalty: 'gradient-teal',
              analytics: 'gradient-dark',
              support: 'gradient-gold',
            };

            const value = typeof benefit === 'string'
              ? { before: '', highlight: benefit, after: '' }
              : benefit;
            const { before = '', highlight = '', after = '' } = value;

            return (
              <div className="benefit-card" key={key}>
                <div className="card-text">
                  <p>
                    {before}
                    {highlight && <strong>{highlight}</strong>}
                    {after}
                  </p>
                </div>
                <div className={`card-icon-box ${gradientMap[key] || ''}`}>
                  <div className="icon-inner">
                    <img src={iconMap[key]} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
