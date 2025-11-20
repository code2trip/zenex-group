'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import '@/styles/sections/news-catalog.scss';

const newsItems = [
  {
    date: 'January 27, 2025',
    title: 'Zenex 2.0: Revolutionizing the iGaming Industry in 2025',
    text: 'Zenex introduces innovative investment pools, enhanced tokenomics, and expanded ecosystem to transform the iGaming landscape in 2025.',
    url: 'https://europeangaming.eu/portal/latest-news/2025/01/27/174982/zenex-2-0-revolutionizing-the-igaming-industry-in-2025/',
    image: '/images/webp/new-img-1.webp',
  },
  {
    date: 'February 15, 2025',
    title: 'Zenex Secures a Multi-Million Private Investment Deal',
    text: 'Zenex Group announces a major funding round to accelerate growth and expand its Web3 ecosystem.',
    url: 'https://www.globenewswire.com/news-release/2025/02/03/3019818/0/en/Zenex-Secures-a-Multi-Million-Private-Investment-Deal-and-Heads-for-Listing-on-XT-com.html?utm_source=chatgpt.com',
    image: '/images/webp/new-img-2.webp',
  },
  {
    date: 'March 10, 2025',
    title: 'New Partnership: Zenex and Leading iGaming Platform',
    text: 'Strategic alliance formed to deliver next-generation gaming experiences powered by blockchain technology.',
    url: '/article/news-article-1',
    image: '/images/webp/new-img-3.webp',
  },
];

export default function NewsCatalog() {
  const t = useTranslations('news');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleShare = async (url, index) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  return (
    <section className="news-catalog">
      <div className="container">
        <div className="news-catalog__header">
          <h2 className="title news-catalog__title">
            <img src="/images/news-title-icon.svg" alt="" />
            {t('title')} <strong>{t('titleStrong')}</strong>
          </h2>
          <span className="label news-catalog__label">{t('label')}</span>
        </div>

        <ul className="news-catalog__list">
          {newsItems.map((item, index) => (
            <li key={index} className="news-catalog__item">
              <article className="new-card">
                <picture className="new-card__img">
                  <img src={item.image} alt="" />
                </picture>

                <div className="new-card__content">
                  <span className="new-card__date">{item.date}</span>
                  <h2 className="new-card__title">{item.title}</h2>
                  <p className="new-card__text">{item.text}</p>
                  <div className="new-card__row">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="link new-card__link">
                      {t('readArticle')}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path
                          d="M12 0.5C5.38331 0.5 0 5.88331 0 12.5C0 19.1167 5.38331 24.5 12 24.5C18.6167 24.5 24 19.1167 24 12.5C24 5.88331 18.6167 0.5 12 0.5ZM12 23C6.21019 23 1.5 18.2898 1.5 12.5C1.5 6.71019 6.21019 2 12 2C17.7898 2 22.5 6.71019 22.5 12.5C22.5 18.2898 17.7898 23 12 23ZM17.0303 11.9698C17.3233 12.2628 17.3233 12.7374 17.0303 13.0303L13.2803 16.7803C13.1338 16.9267 12.9418 17 12.75 17C12.5582 17 12.3662 16.9267 12.2197 16.7803C11.9267 16.4872 11.9267 16.0126 12.2197 15.7197L14.6895 13.25H7.5C7.08581 13.25 6.75 12.9146 6.75 12.5C6.75 12.0854 7.08581 11.75 7.5 11.75H14.6895L12.2197 9.28025C11.9267 8.98719 11.9267 8.51262 12.2197 8.21975C12.5128 7.92688 12.9874 7.92669 13.2803 8.21975L17.0303 11.9698Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>

                    <span
                      className={`new-card__share share-button ${copiedIndex === index ? 'share-button--copied' : ''}`}
                      onClick={() => handleShare(item.url, index)}
                    >
                      <span className="share-button__default">
                        {t('share')}
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.10141 11.1267C7.12031 11.1362 7.14866 11.1362 7.14866 11.1362V11.1551C7.17701 11.1551 7.23362 11.1173 7.23362 11.1173L8.25367 10.0972C8.26347 10.0874 8.27318 10.0783 8.28263 10.0695C8.30976 10.0442 8.33408 10.0213 8.34817 9.99334C8.36698 9.95554 8.37643 9.91774 8.35762 9.87994C8.33872 9.84223 8.31037 9.80443 8.27257 9.80443C7.8853 9.71938 7.53584 9.53048 7.25252 9.24716C6.92195 8.92604 6.72359 8.50097 6.67634 8.0193C6.61973 7.42431 6.82754 6.83869 7.25252 6.4137L9.9254 3.7408C10.681 2.98521 12.0033 2.98521 12.7589 3.7408C13.1367 4.12804 13.3445 4.62861 13.3445 5.16698C13.3445 5.70534 13.1367 6.21535 12.7589 6.59315L11.5405 7.80213C11.5122 7.83039 11.5027 7.87764 11.5122 7.91544C11.6255 8.3216 11.6916 8.74658 11.6916 9.17165C11.6916 9.37937 11.6822 9.55883 11.6538 9.70993C11.6538 9.75718 11.6727 9.81388 11.72 9.83278C11.7671 9.86104 11.8238 9.85159 11.8616 9.81388L13.93 7.75488C15.3562 6.31925 15.3562 3.99581 13.93 2.56964C12.5039 1.14345 10.1805 1.14345 8.75424 2.56964L6.08136 5.24253C5.84523 5.47865 5.65634 5.73367 5.51467 5.98868C5.51152 5.99183 5.50732 5.99497 5.50313 5.99812C5.49473 6.00442 5.48634 6.01072 5.48634 6.01701C4.90075 7.0654 4.85352 8.33105 5.37299 9.40772C5.55245 9.77608 5.77912 10.1067 6.08136 10.4089C6.37413 10.7111 6.72359 10.9567 7.10141 11.1267ZM2.07671 14.4315C2.79453 15.1399 3.72957 15.4988 4.66462 15.4988L4.63628 15.5082C5.57132 15.5082 6.51578 15.1493 7.22417 14.441L9.89706 11.7681C10.3882 11.2769 10.7282 10.6725 10.8793 10.0019L10.936 9.5863C10.9549 9.49189 10.9549 9.39739 10.9549 9.30298V9.26518V9.18013V8.92517C10.9549 8.83067 10.9455 8.73626 10.9266 8.66066C10.9171 8.5568 10.8982 8.47184 10.8793 8.38679C10.8605 8.29238 10.8321 8.18843 10.7943 8.07512C10.6338 7.53675 10.3316 7.02672 9.90651 6.60172C9.62319 6.31837 9.27372 6.0728 8.8959 5.89335C8.85811 5.86502 8.76369 5.91224 8.76369 5.91224L7.74364 6.93231C7.71529 6.96066 7.6775 6.99837 7.64923 7.05507C7.63033 7.08342 7.63033 7.12122 7.64923 7.15893C7.66805 7.19673 7.69639 7.22508 7.73419 7.22508C8.12146 7.30068 8.47093 7.4895 8.75424 7.7729C9.13206 8.16008 9.33987 8.67011 9.33042 9.22738C9.32097 9.5674 9.23592 9.89797 9.07536 10.1813C9.03756 10.2474 8.9904 10.323 8.9148 10.408C8.877 10.4647 8.82984 10.5308 8.75424 10.6064L6.08135 13.2792C5.70355 13.6476 5.19352 13.8554 4.66462 13.8554C4.1357 13.8554 3.61623 13.6476 3.24788 13.2792C2.87009 12.892 2.66229 12.3914 2.66229 11.8531C2.66229 11.3147 2.87009 10.8047 3.24788 10.4269L4.46627 9.20848C4.49461 9.17068 4.50405 9.12352 4.49461 9.08572C4.30571 8.5001 4.24904 7.90511 4.33404 7.31004C4.34349 7.26288 4.31515 7.20618 4.26793 7.18728C4.23014 7.15893 4.1357 7.20618 4.1357 7.20618L2.07671 9.25573C1.3778 9.94522 1 10.8708 1 11.8437C1 12.8165 1.38724 13.742 2.07671 14.4315Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span className="share-button__copied">
                        {t('copied')}
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.00635 3.56211C0.286077 6.31196 0.300861 10.762 3.0507 13.4822C5.80054 16.2025 10.2506 16.1877 12.9708 13.4379C15.6911 10.688 15.6763 6.23803 12.9265 3.51776C10.1766 0.797491 5.72662 0.812274 3.00635 3.56211ZM11.4037 7.15465L7.58942 11.0133C7.26417 11.3385 6.73194 11.3385 6.40669 11.0133L6.25885 10.8655L5.81533 10.4219L4.57346 9.19485C4.24821 8.8696 4.24821 8.33738 4.57346 8.01213C4.89871 7.68688 5.43094 7.68688 5.75619 8.01213L6.99805 9.2392L10.221 5.98671C10.5462 5.66146 11.0785 5.66146 11.4037 5.98671C11.729 6.29717 11.729 6.8294 11.4037 7.15465Z"
                            fill="#05ACA4"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

