'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function ArticleContent() {
  const t = useTranslations('article');
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  return (
    <div className="article-content">
      <div className="article-content__cover">
        <img src={isMobile ? "/images/article4.svg" : "/images/article.svg"} alt="" />
      </div>
      <div className="article-content__header">
        <div className="article-content__meta">
          <span className="article-content__date">{t('date')}</span>
        </div>
        <h2 className="article-content__title">
          {t('title')}
        </h2>
      </div>
      <div className="article-content__body">
        <p>{t('paragraphs.intro1')}</p>
        <p>{t('paragraphs.intro2')}</p>
        
        <h2>{t('headings.landscape')}</h2>
        <p>{t('paragraphs.landscape1')}</p>
        <p>{t('paragraphs.landscape2')}</p>
        
        <p><strong>{t('headings.aiPersonalization')}</strong>: {t('paragraphs.aiPersonalization')}</p>
        
        <p><strong>{t('headings.mobileDominance')}</strong>: {t('paragraphs.mobileDominance')}</p>
        
        <p><strong>{t('headings.immersive')}</strong>: {t('paragraphs.immersive')}</p>
        <p>{t('paragraphs.landscape3')}</p>
        
        <h2>{t('headings.web3')}</h2>
        <p>{t('paragraphs.web3Intro')}</p>
        
        <p><strong>{t('headings.provableFairness')}</strong></p>
        <p>{t('paragraphs.provableFairness1')}</p>
        <p>{t('paragraphs.provableFairness2')}</p>
        
        <p><strong>{t('headings.digitalOwnership')}</strong></p>
        <p>{t('paragraphs.digitalOwnership1')}</p>
        <p>{t('paragraphs.digitalOwnership2')}</p>
        
        <p><strong>{t('headings.governance')}</strong></p>
        <p>{t('paragraphs.governance1')}</p>
        <p>{t('paragraphs.governance2')}</p>
        
        <h2>{t('headings.business')}</h2>
        <p>{t('paragraphs.businessIntro')}</p>
        
        <h2>{t('headings.transparency')}</h2>
        <p>{t('paragraphs.transparency1')}</p>
        <p>{t('paragraphs.transparency2')}</p>
        
        <h2>{t('headings.community')}</h2>
        <p>{t('paragraphs.community1')}</p>
        <p>{t('paragraphs.community2')}</p>
        
        <h2>{t('headings.tokenized')}</h2>
        <p>{t('paragraphs.tokenized1')}</p>
        <p>{t('paragraphs.tokenized2')}</p>
        <h2>{t('headings.challenges')}</h2>
        <p>{t('paragraphs.challengesIntro')}</p>
        <p><strong>{t('headings.regulatory')}</strong>: {t('paragraphs.regulatory')}</p>
        <p><strong>{t('headings.friction')}</strong>: {t('paragraphs.friction')}</p>
        <p><strong>{t('headings.education')}</strong>: {t('paragraphs.education')}</p>
        <p><strong>{t('headings.path')}</strong>. {t('paragraphs.pathIntro')}</p>
        <p><strong>{t('headings.dualCurrency')}</strong>: {t('paragraphs.dualCurrency')}</p>
        <p><strong>{t('headings.optIn')}</strong>: {t('paragraphs.optIn')}</p>
        <p><strong>{t('headings.progressive')}</strong>: {t('paragraphs.progressive')}</p>
        <p>{t('paragraphs.hybrid')}</p>
        
        <h2>{t('headings.future')}</h2>
        <p>{t('paragraphs.future1')}</p>
        <p>{t('paragraphs.future2')}</p>
        <p>{t('paragraphs.future3')}</p>
        
        <h2>{t('headings.conclusion')}</h2>
        <p>{t('paragraphs.conclusion1')}</p>
        <p>{t('paragraphs.conclusion2')}</p>
        <p>{t('paragraphs.conclusion3')}</p>
        <p className="article-content__conclusion">{t('paragraphs.conclusion4')}</p>
      </div>
    </div>
  );
}

