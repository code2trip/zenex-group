'use client';

export default function OurSolution() {
  return (
    <div className="our-solution-section section-container">
      <div className="section-title-group section-inner">
        <div className="title-row">
          <div className="icon-box">
            <img src="/assets/User-Centricity-icon.svg" alt="" />
          </div>
          <p className="title-text">
            <span className="dark">Our Solution — </span>
            <span className="accent">Ns.Cards iGaming VIP</span>
          </p>
        </div>
        <div className="solution-description">
          <p>
            <span>The first </span>
            <span className="bold">card product</span>
            <span> built specifically for iGaming — offering unlimited transactions, privacy, and </span>
            <span className="bold">service excellence.</span>
          </p>
        </div>
      </div>
      {/* Первая строка: Unlimited, 100% approval rate, Protection */}
      <div className="solution-cards-row">
        {/* Unlimited Card */}
        <div className="solution-card card-unlimited">
          <h3>Unlimited</h3>
          <p>Unlimited deposits and withdrawals by amount or number of transactions for your brand</p>
          {/* Group 48100372 - изображение */}
          <div className="card-image-unlimited">
            <img src="/assets/image_a9ae2e7c.png" alt="" />
          </div>
        </div>

        {/* 100% Approval Rate Card */}
        <div className="solution-card card-approval">
          <h3>100% approval rate</h3>
          <p>100% transaction approval rate and instant payouts delivery to players</p>
          {/* Group 48100371 - изображение */}
          <div className="card-image-approval">
            <img src="/assets/image_a70b7741.png" alt="" />
          </div>
        </div>

        {/* Protection Card */}
        <div className="solution-card card-protection">
          <h3>Protection</h3>
          <p>Protection from fines and chargeback dispute options</p>
          {/* Group 48100372 - изображение */}
          <div className="card-image-protection">
            <img src="/assets/image_b60a68d7.png" alt="" />
          </div>
        </div>
      </div>

      {/* Вторая строка: Transparent fees и Access worldwide */}
      <div className="solution-cards-row solution-cards-row-second">
        {/* Transparent Fees Card */}
        <div className="solution-card card-fees">
          <h3>Transparent fees</h3>
          <p>Transparent fees and no hidden charges: up to 4% on deposits and 2% on payouts</p>
          {/* Group 48100372 - монеты */}
          <div className="card-image-fees">
            <img src="/assets/image_c5ebdd65.png" alt="" />
          </div>
        </div>

        {/* Access Worldwide Card */}
        <div className="solution-card card-worldwide">
          <h3>Access worldwide</h3>
          <p>Access to hard-to-reach regions and local top-up methods</p>
          {/* Group с эллипсами и глобусом */}
          <div className="card-image-worldwide">
            <div className="worldwide-ellipses">
              <div className="ellipse-outer"></div>
              <div className="ellipse-inner"></div>
            </div>
            <div className="worldwide-globe">
              <img src="/assets/image_7d6021e4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


