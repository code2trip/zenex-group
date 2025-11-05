'use client';

import { useTranslations } from 'next-intl';

export default function MarketProblem() {
  const t = useTranslations('cardsVip.marketProblem');

  return (
    <div className="market-problem-section section-container">
      {/* Заголовок и иконка как в market problem/src */}
      <div className="section-title-group section-inner">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/problem-icon.svg" alt="" />
          </div>
          <p className="title-text">
            <span className="dark">{t('title').split(' ')[0]} </span>
            <span className="accent">{t('title').split(' ').slice(1).join(' ')}</span>
          </p>
        </div>
        <div className="problem-description">
          <p>{t('description')}</p>
        </div>
      </div>

      {/* Карточки проблем — 3 колонки × 2 строки, во всю ширину контейнера */}
      <div className="problem-cards-grid">
        {/* Blocked or declined transactions */}
        <div className="problem-card">
          <p>{t('problems.blocked')}</p>
          <div className="problem-icon-box">
            <div className="icon-inner">
              <img src="/assets/image_c92b9845.png" alt="" />
            </div>
          </div>
        </div>

        {/* High transaction fees */}
        <div className="problem-card">
          <p>{t('problems.fees')}</p>
          <div className="problem-icon-box">
            <div className="icon-inner">
              <img src="/assets/image_8daddbc1.png" alt="" />
            </div>
          </div>
        </div>

        {/* Deposit and withdrawal limits */}
        <div className="problem-card">
          <p>{t('problems.limits')}</p>
          <div className="problem-icon-box">
            <div className="icon-inner">
              <img src="/assets/image_a5190a7d.png" alt="" />
            </div>
          </div>
        </div>

        {/* Long settlement times */}
        <div className="problem-card">
          <p>{t('problems.settlement')}</p>
          <div className="problem-icon-box">
            <div className="icon-inner">
              <img src="/assets/image_e31ad966.png" alt="" />
            </div>
          </div>
        </div>

        {/* Difficulty in regions */}
        <div className="problem-card">
          <p>{t('problems.regions')}</p>
          <div className="problem-icon-box">
            <div className="icon-inner">
              <img src="/assets/image_31bfa3fb.png" alt="" />
            </div>
          </div>
        </div>

        {/* No privacy */}
        <div className="problem-card">
          <p>{t('problems.privacy')}</p>
          <div className="problem-icon-box">
            <div className="icon-inner">
              <img src="/assets/image_ba116ca.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


