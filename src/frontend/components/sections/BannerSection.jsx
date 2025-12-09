'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import '@/styles/sections/banner.scss';

export default function BannerSection({ variant = 'style-1' }) {
  const t = useTranslations(`home.banner${variant === 'style-1' ? '1' : '2'}`);
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'ru';
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Обработка текста для banner__text
  const getBannerText = () => {
    let text = t('text');
    
    if (locale === 'ru') {
      if (variant === 'style-2' && !isLargeScreen) {
        // Для style-2 на мобильных: перенос перед последним предложением
        text = text.replace(/([.!?])\s+([А-ЯЁ][^.!?]+[.!?])\s*$/, '$1<br />$2');
      } else {
        text = text.replace(/^([^.!?]+[.!?])\s/, '$1<br />').replace(/бизнес\s/g, 'бизнес<br />').replace(/happen\s/g, isLargeScreen ? 'happen<br />' : 'happen ');
      }
    } else {
      if (variant === 'style-1' && !isLargeScreen) {
        text = text.replace(/Let['']s\s/g, (match) => match.replace(/\s/, '<br />')).replace(/happen\s/g, 'happen ');
      } else if (variant === 'style-1' && isLargeScreen) {
        text = text.replace(/happen\s/g, 'happen<br />');
      } else if (variant === 'style-2' && !isLargeScreen) {
        // Для style-2 на мобильных: перенос перед последним предложением
        text = text.replace(/([.!?])\s+([A-Z][^.!?]+[.!?])\s*$/, '$1<br />$2');
      } else {
        text = text.replace(/happen\s/g, isLargeScreen ? 'happen<br />' : 'happen ');
      }
    }
    
    return text;
  };

  return (
    <section className={`banner banner--${variant}`}>
      <div className="container">
        <div className="banner__inner">
          <picture className="banner__bg">
            {variant === 'style-1' ? (
              <>
                {locale === 'ru' ? (
                  <>
                    <source
                      srcSet="/assets/lock.svg"
                      media="(max-width: 499px)"
                    />
                    <source
                      srcSet="/assets/234.svg"
                      media="(max-width: 1023px)"
                    />
                    <img
                      src="/assets/123.svg"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <source
                      srcSet="/assets/345.svg"
                      media="(max-width: 499px)"
                    />
                    <source
                      srcSet="/assets/234.svg"
                      media="(max-width: 1023px)"
                    />
                    <img
                      src="/assets/123.svg"
                      alt=""
                    />
                  </>
                )}
              </>
            ) : (
              <>
                {locale === 'ru' ? (
                  <>
                    <source
                      srcSet="/assets/rocket.svg"
                      media="(max-width: 499px)"
                    />
                    <source
                      srcSet="/assets/main_banner_2.svg"
                      media="(max-width: 1023px)"
                    />
                    <img
                      src="/images/webp/banner-2-bg-d.webp"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <source
                      srcSet="/assets/main_banner_3.svg"
                      media="(max-width: 499px)"
                    />
                    <source
                      srcSet="/assets/main_banner_2.svg"
                      media="(max-width: 1023px)"
                    />
                    <img
                      src="/images/webp/banner-2-bg-d.webp"
                      alt=""
                    />
                  </>
                )}
              </>
            )}
          </picture>
          <div className="banner__content">
            <h2 
              className="banner__title"
              dangerouslySetInnerHTML={{
                __html: variant === 'style-1' && locale === 'ru'
                  ? isLargeScreen
                    ? `${t('title')} <strong>${t('titleStrong')}</strong>`
                    : `${t('title')}<br /><strong>${t('titleStrong').replace(/for\s/g, 'for<br />')}</strong>`
                  : variant === 'style-1'
                    ? isLargeScreen
                      ? `${t('title')} <strong>${t('titleStrong').replace(/for\s/g, 'for<br />')}</strong>`
                      : `${t('title')}<br /><strong>${t('titleStrong')}</strong>`
                    : `${t('title')} <strong>${t('titleStrong').replace(/for\s/g, 'for<br />')}</strong>`
              }}
            />
            <p 
              className="banner__text"
              dangerouslySetInnerHTML={{ 
                __html: getBannerText()
              }}
            />
          </div>
          <Link href={`/${locale}/career#form`} className="button banner__button">
            {t('button')}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.38331 0 0 5.38331 0 12C0 18.6167 5.38331 24 12 24C18.6167 24 24 18.6167 24 12C24 5.38331 18.6167 0 12 0ZM12 22.5C6.21019 22.5 1.5 17.7898 1.5 12C1.5 6.21019 6.21019 1.5 12 1.5C17.7898 1.5 22.5 6.21019 22.5 12C22.5 17.7898 17.7898 22.5 12 22.5ZM17.0303 11.4698C17.3233 11.7628 17.3233 12.2374 17.0303 12.5303L13.2803 16.2803C13.1338 16.4267 12.9418 16.5 12.75 16.5C12.5582 16.5 12.3662 16.4267 12.2197 16.2803C11.9267 15.9872 11.9267 15.5126 12.2197 15.2197L14.6895 12.75H7.5C7.08581 12.75 6.75 12.4146 6.75 12C6.75 11.5854 7.08581 11.25 7.5 11.25H14.6895L12.2197 8.78025C11.9267 8.48719 11.9267 8.01262 12.2197 7.71975C12.5128 7.42688 12.9874 7.42669 13.2803 7.71975L17.0303 11.4698Z"
                fill="#282828"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

