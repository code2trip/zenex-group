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
  const t = useTranslations('aff.getStarted');

  const ctaTitle = t('cta.title');
  const accentPhrase = t('cta.titleAccentPhrase');
  const titleContent = highlightTitleSegments(ctaTitle, [accentPhrase]);

  return (
    <div className="get-started-section section-container">
      <div className="cta-banner">
        <div className="cta-card-visual-background">
          <img
            src="/assets/cta-aff.svg"
            alt="Credit card mockup VIP"
          />
        </div>

        <div className="cta-content">
          <div className="cta-left">
            <div className="cta-logo">
              <img src="/assets/logo_ns_cards.svg" alt="NS.CARDS" />
            </div>
            <div className="cta-text-group">
              <h3>{titleContent}</h3>
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

