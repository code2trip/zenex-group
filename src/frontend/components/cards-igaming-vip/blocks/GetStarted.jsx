'use client';

import { useTranslations } from 'next-intl';

export default function GetStarted() {
  const t = useTranslations('cardsVip.getStarted');

  return (
    <div className="get-started-section">
      <div className="get-started-container">
        {/* Title */}
        <div className="section-title-group section-inner">
          <div className="title-row">
            <div className="icon-box">
              <img src="/assets/Career-icon.svg" alt="" />
            </div>
            <p className="title-text">
              <span className="accent">{t('title')}</span>
            </p>
          </div>
        </div>

        {/* Columns */}
        <div className="get-started-columns">
          <div className="integration-column">
            <div className="integration-content">
              <h2>{t('integration.title')}</h2>

              <div className="integration-item">
                <div className="item-number">
                  <span>1</span>
                </div>
                <p>{t('integration.option1')}</p>
              </div>

              <div className="integration-item">
                <div className="item-number">
                  <span>2</span>
                </div>
                <p>{t('integration.option2')}</p>
              </div>
            </div>

            <div className="integration-column__decor">
              <img src="/assets/image_frame_352281.svg" alt="" />
            </div>
            <div className="integration-column__ellipse integration-column__ellipse--primary" />
            <div className="integration-column__ellipse integration-column__ellipse--secondary" />
          </div>

          <div className="issuance-column">
            <div className="issuance-content">
              <h2>{t('issuance.title')}</h2>

              <div className="issuance-item">
                <div className="item-number">
                  <span>1</span>
                </div>
                <p>{t('issuance.option1')}</p>
              </div>

              <div className="issuance-item">
                <div className="item-number">
                  <span>2</span>
                </div>
                <p>{t('issuance.option2')}</p>
              </div>

              <div className="issuance-item">
                <div className="item-number">
                  <span>3</span>
                </div>
                <p>{t('issuance.option3')}</p>
              </div>
            </div>

            <div className="img-badge-desktop">
              <div className="ellipse-decorative ellipse-39" />
              <div className="ellipse-decorative ellipse-43" />
              <div className="ellipse-decorative ellipse-40" />

              <div className="badge badge-ready">
                <span>Ready</span>
                <svg viewBox="0 0 14 20" fill="none">
                  <defs>
                    <linearGradient id="bolt-gradient-ready" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="5.99%" stopColor="#9A885D" />
                      <stop offset="108.23%" stopColor="#E5D395" />
                    </linearGradient>
                  </defs>
                  <path d="M7 0L8.5 5L14 7L8.5 9L7 14L5.5 9L0 7L5.5 5L7 0Z" fill="url(#bolt-gradient-ready)" />
                </svg>
              </div>

              <div className="hourglass-3d">
                <img src="/assets/image_hourglass_3d.png" alt="Hourglass" />
              </div>

              <div className="badge badge-sync">
                <span>Sync</span>
                <svg viewBox="0 0 12 18" fill="none">
                  <defs>
                    <linearGradient id="power-gradient-sync" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="5.99%" stopColor="#9A885D" />
                      <stop offset="108.23%" stopColor="#E5D395" />
                    </linearGradient>
                  </defs>
                  <path d="M6 0L8 6L12 9L8 12L6 18L4 12L0 9L4 6L6 0Z" fill="url(#power-gradient-sync)" />
                </svg>
              </div>

              <div className="badge badge-api">
                <span>Api</span>
                <svg viewBox="0 0 22 22" fill="none">
                  <defs>
                    <linearGradient id="key-gradient-api" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="5.99%" stopColor="#9A885D" />
                      <stop offset="108.23%" stopColor="#E5D395" />
                    </linearGradient>
                  </defs>
                  <path d="M11 2L13 8L19 10L13 12L11 18L9 12L3 10L9 8L11 2Z" fill="url(#key-gradient-api)" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-banner">
          <div className="cta-banner__pattern cta-banner__pattern--left" aria-hidden />
          <div className="cta-banner__pattern cta-banner__pattern--right" aria-hidden />

          <div className="cta-card-visual-background">
            <div className="cta-group-bg">
              <img src="/assets/image_decorative_pattern.png" alt="Decorative pattern" />
            </div>
            <img
              src="/assets/image_bbc94c23-green.png"
              alt="Credit card mockup VIP"
              className="cta-card-green"
            />
            <img
              src="/assets/image_bbc94c23.png"
              alt="Credit card mockup"
              className="cta-card-black"
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
    </div>
  );
}
