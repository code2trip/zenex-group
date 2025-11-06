'use client';

import { useTranslations } from 'next-intl';

export default function Solutions() {
  const t = useTranslations('launchAndScale.solutions');
  const solutions = [
    { key: 'api', hasBreak: false },
    { key: 'turnkey', hasBreak: true },
    { key: 'sourceCode', hasBreak: false },
  ];
  return (
    <section className="ls-solutions">
      <div className="container">
        <div className="ls-solutions__grid">
          {solutions.map((solution, index) => (
            <div key={index} className="ls-solutions__card">
              <div className="ls-solutions__price-wrapper">
                <span className="ls-solutions__from">{t('from')}</span>
                <strong className="ls-solutions__price">{t(`${solution.key}.price`)}</strong>
                <div className="ls-solutions__divider"></div>
              </div>
              <div className="ls-solutions__content">
                <h3 className="ls-solutions__title">{t(`${solution.key}.title`)}</h3>
                <p className="ls-solutions__description">
                  {solution.hasBreak ? (
                    <>
                      <span className="ls-solutions__description-line">{t(`${solution.key}.description`).split('.')[0]}</span>
                      <span className="ls-solutions__description-line">{t(`${solution.key}.description`).split('.').slice(1).join('.').trim()}</span>
                    </>
                  ) : (
                    t(`${solution.key}.description`)
                  )}
                </p>
                <a className="btn btn--primary ls-solutions__button" href="#offer">
                  {t(`${solution.key}.getOffer`)}
                  <img src="/images/right.png" alt="" aria-hidden="true" className="btn__icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

