'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function ArticleSidebar() {
  const t = useTranslations('article');
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'ru';

  const relatedArticles = [
    {
      id: 1,
      image: '/images/article2.svg',
      date: t('relatedArticles.article2.date'),
      title: t('relatedArticles.article2.title'),
      summary: t('relatedArticles.article2.summary'),
      slug: 'zenex-2.0-revolutionizing-igaming'
    },
    {
      id: 2,
      image: '/images/article3.svg',
      date: t('relatedArticles.article3.date'),
      title: t('relatedArticles.article3.title'),
      summary: t('relatedArticles.article3.summary'),
      slug: 'zenex-multi-million-investment-listing'
    }
  ];

  return (
    <aside className="article-sidebar">
      <div className="article-sidebar__list">
        {relatedArticles.map((article) => (
          <article key={article.id} className="article-sidebar__item">
            <Link href={`/${locale}/article/${article.slug}`} className="article-sidebar__link">
              <picture className="article-sidebar__image">
                <img src={article.image} alt={article.title} />
              </picture>
              <div className="article-sidebar__content">
                <span className="article-sidebar__date">{article.date}</span>
                <h3 className="article-sidebar__item-title">{article.title}</h3>
                <p className="article-sidebar__summary">{article.summary}</p>
                <span className="article-sidebar__read-more">
                  {t('readArticle') || 'Read article'}
                  <img src="/images/right.png" alt="" className="article-sidebar__read-more-icon" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </aside>
  );
}

