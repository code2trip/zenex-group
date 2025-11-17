'use client';

import { useTranslations } from 'next-intl';
import '@/styles/sections/contact-section.scss';

export default function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-section__inner">
          <div className="contact-section__header">
            <div className="contact-section__icon">
              <div className="contact-section__icon-border" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="contact-section__icon-rocket"
                aria-hidden="true"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </div>

            <h2 className="contact-section__title">
              <span>{t('hero.titlePrimary')} </span>
              <span className="contact-section__title-accent">
                {t('hero.titleAccent')}
              </span>
            </h2>
          </div>

          <div className="contact-section__content">
            <div className="contact-section__promo">
              <div className="contact-section__promo-bg">
                <img
                  src="/images/webp/contact-rocket.webp"
                  alt=""
                  className="contact-section__promo-image"
                />
              </div>
              <p className="contact-section__promo-title">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="contact-section__form-wrapper">
              <form className="contact-section__form">
                <p className="contact-section__form-title">
                  {t('form.title')}
                </p>

                <div className="contact-section__field">
                  <input
                    id="contact-name"
                    name="name"
                    required
                    className="contact-section__input"
                  />
                  <label
                    htmlFor="contact-name"
                    className="contact-section__label"
                  >
                    {t('form.fields.name')}
                  </label>
                </div>

                <div className="contact-section__field">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="contact-section__input"
                  />
                  <label
                    htmlFor="contact-email"
                    className="contact-section__label"
                  >
                    {t('form.fields.email')}
                  </label>
                </div>

                <div className="contact-section__field">
                  <input
                    id="contact-phone"
                    name="phone"
                    className="contact-section__input"
                  />
                  <label
                    htmlFor="contact-phone"
                    className="contact-section__label"
                  >
                    {t('form.fields.phone')}
                  </label>
                </div>

                <div className="contact-section__field">
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    className="contact-section__textarea"
                  />
                  <label
                    htmlFor="contact-message"
                    className="contact-section__label"
                  >
                    {t('form.fields.message')}
                  </label>
                </div>

                <button
                  type="submit"
                  className="contact-section__submit"
                >
                  <span>{t('form.submit')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


