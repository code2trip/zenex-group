'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import '@/styles/sections/text-section.scss';

export default function TextSection() {
  const pathname = usePathname();
  const isTerms = pathname?.includes('/terms');
  const isPrivacy = pathname?.includes('/privacy');

  if (!isTerms && !isPrivacy) {
    return null;
  }

  const t = useTranslations(isTerms ? 'terms' : 'privacy');
  const content = t('content');
  const paragraphs = content ? content.split('\n\n').filter(p => p.trim()) : [];

  return (
    <section className="text-section">
      <div className="container">
        <div className="text-section__inner">
          <span className="text-section__date">{t('date')}</span>
          <h1 className="text-section__title">{t('title')}</h1>
          <div className="text-section__text">
            {isTerms && (
              <>
                <p>{t('lastUpdated')}</p>
                <p>{t('important')}</p>
                <p>{t('acceptance1')}</p>
                <p>{t('acceptance2')}</p>
              </>
            )}
            {paragraphs.map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;
              const isMainHeading = /^\d+\./.test(trimmed) && !/^\d+\.\d+/.test(trimmed);
              const isSubHeading = /^\d+\.\d+\s/.test(trimmed) && !/^\d+\.\d+\.\d+/.test(trimmed);
              if (isMainHeading || isSubHeading) {
                return <p key={index}><strong>{trimmed}</strong></p>;
              }
              return <p key={index}>{trimmed}</p>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
