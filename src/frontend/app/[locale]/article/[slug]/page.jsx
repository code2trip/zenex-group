'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import ArticleContent from '@/components/article/ArticleContent';
import ArticleSidebar from '@/components/article/ArticleSidebar';
import '@/styles/article.scss';

export default function ArticlePage({ params }) {
  return (
    <>
      <Loader />
      <Header />
      <main className="article-page">
        <div className="container">
          <div className="article-page__layout">
            <ArticleContent />
            <ArticleSidebar />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

