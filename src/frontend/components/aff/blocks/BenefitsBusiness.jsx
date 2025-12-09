'use client';

import { useTranslations } from 'next-intl';

export default function BenefitsBusiness() {
  const t = useTranslations('aff.benefitsBusiness');
  const titleFull = t('title');
  const accentWordsRaw = t.raw('titleAccentWords') ?? [];
  const accentWords = Array.isArray(accentWordsRaw) ? accentWordsRaw : [];
  const escapedWords = accentWords
    .map((word) => word?.toString().trim())
    .filter(Boolean)
    .map((word) => {
      const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // Если фраза содержит пробел, ищем её целиком без word boundaries
      if (word.includes(' ')) {
        return escaped;
      }
      // Для отдельных слов используем word boundaries
      return `\\b${escaped}\\b`;
    });

  const highlightRegex =
    escapedWords.length > 0
      ? new RegExp(`(${escapedWords.join('|')})`, 'giu')
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
  const descriptions = t.raw('descriptions');
  const benefitOrder = ['customization', 'unlimited', 'loyalty', 'support'];

  const imageMap = {
    customization: '/assets/wallet.svg',
    unlimited: '/assets/baggage.svg',
    loyalty: '/assets/gift.svg',
    support: '/assets/control.svg',
  };

  const gradientMap = {
    customization: 'gradient-gold',
    unlimited: 'gradient-blue',
    loyalty: 'gradient-dark',
    support: 'gradient-teal',
  };

  const imageClassMap = {
    customization: 'card-image-customization',
    unlimited: 'card-image-unlimited',
    loyalty: 'card-image-loyalty',
    support: 'card-image-support',
  };

  return (
    <div className="benefits-business-section section-container">
      {/* Title */}
      <div className="section-title-group section-inner">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/Benefits-icon.svg" alt="" />
          </div>
          <p className="title-text section-heading">{titleContent}</p>
        </div>
        <div className="section-description">
          <p>{t('description')}</p>
        </div>
      </div>

      {/* Frame 2085662083 - основной контент */}
      <div className="benefits-content-wrapper">
        {/* Первая карточка (customization) - большая слева */}
        {benefits.customization && (
          <div className={`benefit-card benefit-card-large ${gradientMap.customization}`}>
            <img src="/assets/lines-oursolution.svg" alt="" className="card-lines-decoration" />
            <div className="card-text">
              <p
                dangerouslySetInnerHTML={{
                  __html: `${benefits.customization.before}${benefits.customization.highlight}${benefits.customization.after}`.replace(/\bneed\s+/gi, 'need<br />')
                }}
              />
              <div className="card-limits">
                <p className="limit-item">
                  <span className="limit-amount">€5,000</span> per day
                </p>
                <p className="limit-item">
                  <span className="limit-amount">€100,000</span> per month
                </p>
              </div>
            </div>
            <div className={imageClassMap.customization}>
              <img src={imageMap.customization} alt="" />
            </div>
          </div>
        )}

        {/* Вторая карточка (loyalty - Payment Freedom) - первая строка справа */}
        {benefits.loyalty && (
          <div className={`benefit-card benefit-card-second ${gradientMap.unlimited}`}>
            <img src="/assets/lines-oursolution.svg" alt="" className="card-lines-decoration" />
            <div className="card-text">
              <h3>{benefits.loyalty.highlight}</h3>
              {descriptions?.loyalty && (
                <p className="card-description">{descriptions.loyalty}</p>
              )}
            </div>
            <div className={imageClassMap.unlimited}>
              <img src={imageMap.unlimited} alt="" />
            </div>
          </div>
        )}

        {/* Третья и четвертая карточки - вторая строка справа */}
        <div className="benefits-cards-row-second">
          {benefits.analytics && (
            <div className={`benefit-card ${gradientMap.loyalty}`}>
              <img src="/assets/lines-oursolution.svg" alt="" className="card-lines-decoration" />
              <div className="card-text">
                <h3>{benefits.analytics.highlight}</h3>
                {descriptions?.analytics && (
                  <p className="card-description">{descriptions.analytics}</p>
                )}
              </div>
              <div className={imageClassMap.loyalty}>
                <img src={imageMap.loyalty} alt="" />
              </div>
            </div>
          )}

          {benefits.support && (
            <div className={`benefit-card ${gradientMap.support}`}>
              <img src="/assets/lines-oursolution.svg" alt="" className="card-lines-decoration" />
              <div className="card-text">
                <h3>{benefits.support.highlight}</h3>
                {descriptions?.support && (
                  <p className="card-description">{descriptions.support}</p>
                )}
              </div>
              <div className={imageClassMap.support}>
                <img src={imageMap.support} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

