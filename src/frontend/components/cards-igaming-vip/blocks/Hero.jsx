'use client';

export default function Hero() {
  return (
    <div className="hero-vip-section">
      <svg className="blur-ellipse blur-ellipse-left" width="605" height="583" viewBox="0 0 605 583" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5" filter="url(#filter0_f_left)">
          <ellipse cx="149.109" cy="455.437" rx="251" ry="214.43" transform="rotate(-45 149.109 455.437)" fill="#05ACA4"/>
        </g>
        <defs>
          <filter id="filter0_f_left" x="-306.328" y="0" width="910.874" height="910.874" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="111" result="effect1_foregroundBlur"/>
          </filter>
        </defs>
      </svg>

      <svg className="blur-ellipse blur-ellipse-right" width="628" height="886" viewBox="0 0 628 886" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5" filter="url(#filter0_f_right)">
          <ellipse cx="251" cy="214.43" rx="251" ry="214.43" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 784.545 481.296)" fill="#05ACA4"/>
        </g>
        <defs>
          <filter id="filter0_f_right" x="0" y="0" width="910.874" height="910.874" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="111" result="effect1_foregroundBlur"/>
          </filter>
        </defs>
      </svg>

      <div className="background-pattern">
        <div className="background-mask">
          <div className="background-gradient"></div>
        </div>
        <img src="/assets/Background-pattern-vip.svg" alt="" className="pattern-content" />
      </div>

      <div className="credit-card-mockup">
        <div className="card-inner">
          <div className="payment-method-icon">
            <svg className="mastercard-left" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1726 1.09766C17.0458 -1.13849 21.9768 0.151627 24.1864 3.97872C26.3957 7.80577 25.0472 12.7205 21.1741 14.9566C19.4377 15.9591 17.489 16.2512 15.6679 15.9254C15.0394 17.6654 13.8122 19.207 12.0758 20.2095C8.2027 22.4454 3.27211 21.1561 1.0625 17.3293C-1.14703 13.5023 0.201312 8.58686 4.0743 6.35059C5.81063 5.34812 7.75947 5.0561 9.5805 5.38175C10.209 3.64178 11.4362 2.10017 13.1726 1.09766Z" fill="#ED0006"/>
            </svg>
            <svg className="mastercard-right" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.59214 1.09717C7.46532 -1.1389 12.3963 0.151172 14.6059 3.97823C16.8152 7.80526 15.4666 12.7199 11.5936 14.9561C9.85718 15.9586 7.90852 16.2507 6.0874 15.9249C6.86074 13.7838 6.72726 11.342 5.5084 9.23068C4.28936 7.11924 2.2411 5.78204 0 5.38126C0.62849 3.64134 1.85578 2.09965 3.59214 1.09717Z" fill="#F9A000"/>
            </svg>
            <svg className="mastercard-middle" width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.481184 0.000488281C2.72222 0.401241 4.77003 1.73775 5.98909 3.84906C7.20807 5.96039 7.34144 8.40216 6.5681 10.5433C4.3274 10.1423 2.27989 8.80538 1.06104 6.69427C-0.157742 4.5831 -0.292007 2.14149 0.481184 0.000488281Z" fill="#FF5E00"/>
            </svg>
          </div>
          <div className="card-number">1234 1234 1234 1234</div>
          <div className="card-holder">Phoenix Baker</div>
          <div className="card-brand">Untitled.</div>
          <div className="card-expiry">06/28</div>
          <svg className="paypass-icon" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_paypass)">
              <path d="M12.3223 3.17249C15.2401 4.85708 17.6631 7.28005 19.3476 10.1979C21.0322 13.1157 21.9191 16.4255 21.9191 19.7947M9.72105 7.11223C11.9969 8.42622 13.8869 10.3161 15.2008 12.592C16.5148 14.8679 17.2066 17.4496 17.2066 20.0775M7.19967 10.8064C8.85407 11.7717 10.2305 13.1554 11.1908 14.8186C12.151 16.4817 12.6611 18.3657 12.6699 20.2811M4.75507 14.6336C5.86622 15.1887 6.77911 16.0438 7.38988 17.1017C8.00064 18.1596 8.28477 19.3777 8.20992 20.6175" stroke="white" strokeWidth="2.30324" strokeLinecap="round"/>
            </g>
            <defs>
              <clipPath id="clip0_paypass">
                <rect width="17.9141" height="21.4969" fill="white" transform="translate(0 8.95704) rotate(-30)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="iphone-mockup"></div>

      <div className="poker-chip"></div>

      <div className="gift-box gift-box-1"></div>
      <div className="gift-box gift-box-2"></div>
      <div className="gift-box gift-box-3"></div>
      <div className="gift-box gift-box-4"></div>
      <div className="gift-box gift-box-5"></div>
    </div>
  );
}
