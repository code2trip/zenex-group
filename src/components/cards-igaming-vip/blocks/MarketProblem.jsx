import React from 'react';

export default function MarketProblem() {
  return (
    <div className="market-problem-section section-container">
      {/* Заголовок и иконка как в market problem/src */}
      <div className="section-title-group section-inner">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/problem-icon.svg" alt="" />
          </div>
          <p className="title-text">
            <span className="dark">Market </span>
            <span className="accent">Problem</span>
          </p>
        </div>
        <div className="problem-description">
          <p>Traditional card solutions don&apos;t meet the expectations of VIP players and high-rollers.</p>
          <p>They face constant friction and limitations when managing their funds:</p>
        </div>
      </div>

      {/* Карточки проблем — 3 колонки × 2 строки, во всю ширину контейнера */}
      <div className="problem-cards-grid">
        {/* Blocked or declined transactions */}
        <div className="problem-card">
          <p>Blocked or declined transactions</p>
          <div className="problem-icon-box">
            <div className="icon-inner">
              <img src="/assets/image_c92b9845.png" alt="" />
            </div>
          </div>
        </div>

        {/* High transaction fees */}
        <div className="problem-card">
          <p>High transaction fees</p>
          <div className="problem-icon-box">
            <div className="icon-inner">
              <img src="/assets/image_8daddbc1.png" alt="" />
            </div>
          </div>
        </div>

        {/* Deposit and withdrawal limits */}
        <div className="problem-card">
          <p>Deposit and withdrawal limits</p>
          <div className="problem-icon-box">
            <div className="icon-inner">
              <img src="/assets/image_a5190a7d.png" alt="" />
            </div>
          </div>
        </div>

        {/* Long settlement times */}
        <div className="problem-card">
          <p>Long settlement times for deposits and winnings accrual</p>
          <div className="problem-icon-box">
            <div className="icon-inner">
              <img src="/assets/image_e31ad966.png" alt="" />
            </div>
          </div>
        </div>

        {/* Difficulty in regions */}
        <div className="problem-card">
          <p>Difficulty in funding accounts and withdrawals in certain regions</p>
          <div className="problem-icon-box">
            <div className="icon-inner">
              <img src="/assets/image_31bfa3fb.png" alt="" />
            </div>
          </div>
        </div>

        {/* No privacy */}
        <div className="problem-card">
          <p>No privacy</p>
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


