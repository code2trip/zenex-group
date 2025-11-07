'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('launchAndScale.hero');
  return (
    <section className="ls-hero">
      {/* Background pattern */}
      <div className="ls-hero__pattern">
        <div className="ls-hero__pattern-mask">
          <div className="ls-hero__pattern-gradient" />
        </div>
        <div className="ls-hero__pattern-content">
          <div className="ls-hero__pattern-dots" />
        </div>
      </div>

      {/* Ellipses - под картинками, но над фоном */}
      <div className="ls-hero__ellipses">
        <img 
          className="ls-hero__ellipse ls-hero__ellipse--1" 
          src="/images/ellipse1.png" 
          alt="" 
          aria-hidden="true" 
          loading="lazy" 
        />
        <img 
          className="ls-hero__ellipse ls-hero__ellipse--2" 
          src="/images/ellipse2.png" 
          alt="" 
          aria-hidden="true" 
          loading="lazy" 
        />
      </div>

      {/* Media elements - outside container */}
      <div className="ls-hero__media">
        {/* Credit card mockup - слева */}
        <img 
          className="ls-hero__card" 
          src="/images/creditcard.png" 
          alt="Credit card mockup" 
          loading="lazy" 
        />

        {/* iPhone mockup - справа */}
        <img 
          className="ls-hero__iphone" 
          src="/images/iphone.png" 
          alt="iPhone mockup" 
          loading="lazy" 
        />

        {/* Poker chip - внизу слева */}
        <img 
          className="ls-hero__chip" 
          src="/images/chip.png" 
          alt="Poker chip" 
          loading="lazy" 
        />

        {/* Sparkles (stars) - разбросаны по фону с разными размерами */}
        {/* Большие звезды */}
        <img className="ls-hero__sparkle ls-hero__sparkle--1" src="/images/star.png" alt="" aria-hidden="true" loading="lazy" />
        <img className="ls-hero__sparkle ls-hero__sparkle--2" src="/images/star.png" alt="" aria-hidden="true" loading="lazy" />
        {/* Средние звезды */}
        <img className="ls-hero__sparkle ls-hero__sparkle--3" src="/images/star.png" alt="" aria-hidden="true" loading="lazy" />
        <img className="ls-hero__sparkle ls-hero__sparkle--4" src="/images/star.png" alt="" aria-hidden="true" loading="lazy" />
        <img className="ls-hero__sparkle ls-hero__sparkle--5" src="/images/star.png" alt="" aria-hidden="true" loading="lazy" />
      </div>

      {/* Container with content */}
      <div className="container">
        <div className="ls-hero__grid">
          <div className="ls-hero__text">
            <h1 className="ls-hero__title">
              <span>{t('title').split(' ').slice(0, 3).join(' ')}</span>
              <br />
              {t('title').split(' ').slice(3).join(' ')}
            </h1>
            <p className="ls-hero__subtitle">
              {t('subtitle')}
            </p>
            <div className="ls-hero__actions">
              <a className="btn btn--secondary" href="#demo">
                {t('requestDemo')}
                <img src="/images/right.png" alt="" aria-hidden="true" className="btn__icon" />
              </a>
              <a className="btn btn--primary" href="#offer">
                {t('getOffer')}
                <img src="/images/right.png" alt="" aria-hidden="true" className="btn__icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


