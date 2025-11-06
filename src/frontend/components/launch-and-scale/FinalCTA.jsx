'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function FinalCTA() {
  const t = useTranslations('launchAndScale.finalCta');
  const [isMobile850, setIsMobile850] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 850px)');
    const update = () => setIsMobile850(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <section className="ls-final">
      <div className="container">
        <div className="ls-final__box">
          <img src={isMobile850 ? "/images/rocket2.svg" : "/images/3rockets.svg"} alt="" className="ls-final__rockets" aria-hidden="true" />
          <div className="ls-final__text">
            <h3 className="ls-final__title">{t('title').split(' ').slice(0, 2).join(' ')}<br /><span>{t('title').split(' ').slice(2).join(' ')}</span></h3>
            <p className="ls-final__desc">{t('subtitle')}</p>
          </div>
          <div className="ls-final__actions">
            <a className="btn btn--secondary" href="#demo">
              {t('requestDemo')}
              <img src="/images/right.png" alt="" aria-hidden="true" className="btn__icon" />
            </a>
            <a className="btn btn--primary" href="#contact">
              {t('contactSales')}
              <img src="/images/right.png" alt="" aria-hidden="true" className="btn__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


