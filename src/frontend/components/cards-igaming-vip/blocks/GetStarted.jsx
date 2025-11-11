'use client';

import { useTranslations } from 'next-intl';

function highlightTitleSegments(title, segments) {
  const safeSegments = Array.isArray(segments)
    ? segments
      .map((segment) => segment?.toString().trim())
      .filter(Boolean)
    : [];

  if (safeSegments.length === 0) {
    return [
      <span key="plain-full" className="title-text__plain">
        {title}
      </span>,
    ];
  }

  const normalizedSegments = safeSegments.map((segment) => ({
    original: segment,
    lower: segment.toLowerCase(),
    length: segment.length,
  }));

  const result = [];
  const lowerTitle = title.toLowerCase();
  let cursor = 0;

  while (cursor < title.length) {
    let bestMatch = null;

    normalizedSegments.forEach((segment) => {
      const idx = lowerTitle.indexOf(segment.lower, cursor);
      if (idx !== -1) {
        if (
          !bestMatch ||
          idx < bestMatch.index ||
          (idx === bestMatch.index && segment.length > bestMatch.segment.length)
        ) {
          bestMatch = { index: idx, segment };
        }
      }
    });

    if (!bestMatch) {
      result.push(
        <span key={`plain-${cursor}`} className="title-text__plain">
          {title.slice(cursor)}
        </span>
      );
      break;
    }

    if (bestMatch.index > cursor) {
      result.push(
        <span key={`plain-${cursor}`} className="title-text__plain">
          {title.slice(cursor, bestMatch.index)}
        </span>
      );
    }

    const accentEnd = bestMatch.index + bestMatch.segment.length;
    result.push(
      <span key={`accent-${bestMatch.index}`} className="accent">
        {title.slice(bestMatch.index, accentEnd)}
      </span>
    );

    cursor = accentEnd;
  }

  return result;
}

export default function GetStarted() {
  const t = useTranslations('cardsVip.getStarted');

  const normalizeOption = (option) => {
    if (typeof option === 'string') {
      return { before: '', highlight: option, after: '' };
    }

    const { before = '', highlight = '', after = '' } = option || {};
    return { before, highlight, after };
  };

  const integrationOptions = [
    normalizeOption(t.raw('integration.option1')),
    normalizeOption(t.raw('integration.option2')),
  ];

  const issuanceOptions = [
    normalizeOption(t.raw('issuance.option1')),
    normalizeOption(t.raw('issuance.option2')),
    normalizeOption(t.raw('issuance.option3')),
  ];

  const titleAccentSegments = t.raw('titleAccentSegments') ?? [];
  const titleContent = highlightTitleSegments(t('title'), titleAccentSegments);

  return (
    <div className="get-started-section section-container">
      {/* Title */}
      <div className="section-title-group section-inner">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/Career-icon.svg" alt="" />
          </div>
          <p className="title-text">{titleContent}</p>
        </div>
      </div>

      {/* Columns */}
      <div className="get-started-columns">
        <div className="integration-column">
          <div className="integration-content">
            <h2>{t('integration.title')}</h2>

            <div className="integration-items">
              {integrationOptions.map(({ before, highlight, after }, index) => (
                <div className="integration-item" key={`integration-${index}`}>
                  <div className="item-number">
                    <span>{index + 1}</span>
                  </div>
                  <p>
                    {before}
                    {highlight && <strong>{highlight}</strong>}
                    {after}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="integration-column__decor">
            <img src="/assets/sandcircle.svg" alt="Sand circular pattern" />
          </div>
        </div>

        <div className="issuance-column">
          <div className="issuance-content">
            <h2>{t('issuance.title')}</h2>

            {issuanceOptions.map(({ before, highlight, after }, index) => (
              <div className="issuance-item" key={`issuance-${index}`}>
                <div className="item-number">
                  <span>{index + 1}</span>
                </div>
                <p>
                  {before}
                  {highlight && <strong>{highlight}</strong>}
                  {after}
                </p>
              </div>
            ))}
          </div>

          <div className="issuance-visual">
            <img src="/assets/sandclock.svg" alt="Sand clock illustration" />
          </div>
        </div>
      </div>

      <div className="cta-banner">
        <div className="cta-card-visual-background">
          <img
            src="/assets/image_3cac89wergwetg81.svg"
            alt="Credit card mockup VIP"
          />
        </div>

        <div className="cta-content">
          <div className="cta-left">
            <div className="cta-logo">
              <img src="/assets/logo_ns_cards.svg" alt="NS.CARDS" />
            </div>
            <div className="cta-text-group">
              <h3>{t('cta.title')}</h3>
              <p>{t('cta.description')}</p>
            </div>
          </div>
          <div className="cta-right">
            <button type="button">
              <span>{t('cta.button')}</span>
              <img src="/assets/contacts_arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
