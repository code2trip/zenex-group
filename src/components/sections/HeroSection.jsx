'use client';

import { useTranslations } from 'next-intl';
import '@/styles/sections/hero-section.scss';

export default function HeroSection() {
  const t = useTranslations('home.hero');

  return (
    <section className="hero-section">
      <video autoPlay muted loop playsInline className="hero-section__video">
        <source src="/src/assets/videos/video.mp4" type="video/mp4" />
      </video>

      <div className="container">
        <div className="hero-section__inner">
          <div className="hero-section__text">
            <img src="/src/assets/images/hero-icon.svg" alt="" />
            <p data-line-wrap-split>{t('description')}</p>
          </div>
          <h1 className="hero-section__title" data-line-wrap-split>
            {t('title')}
            <strong>{t('titleStrong')}</strong>
          </h1>
        </div>
        <a href="#projects" className="hero-section__button">
          {t('button')}
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 0.5C5.88331 0.5 0.5 5.88331 0.5 12.5C0.5 19.1167 5.88331 24.5 12.5 24.5C19.1167 24.5 24.5 19.1167 24.5 12.5C24.5 5.88331 19.1167 0.5 12.5 0.5ZM12.5 23C6.71019 23 2 18.2898 2 12.5C2 6.71019 6.71019 2 12.5 2C18.2898 2 23 6.71019 23 12.5C23 18.2898 18.2898 23 12.5 23ZM17.5303 11.9698C17.8233 12.2628 17.8233 12.7374 17.5303 13.0303L13.7803 16.7803C13.6338 16.9267 13.4418 17 13.25 17C13.0582 17 12.8662 16.9267 12.7197 16.7803C12.4267 16.4872 12.4267 16.0126 12.7197 15.7197L15.1895 13.25H8C7.58581 13.25 7.25 12.9146 7.25 12.5C7.25 12.0854 7.58581 11.75 8 11.75H15.1895L12.7197 9.28025C12.4267 8.98719 12.4267 8.51262 12.7197 8.21975C13.0128 7.92688 13.4874 7.92669 13.7803 8.21975L17.5303 11.9698Z"
              fill="#282828"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

