import { useTranslations } from 'next-intl';
import Header from '@/frontend/components/Header';
import Footer from '@/frontend/components/Footer';
import Loader from '@/frontend/components/Loader';
import PostSection from '@/frontend/components/sections/PostSection';
import TextSection from '@/frontend/components/sections/TextSection';
import '@/styles/article.scss';

export default function ArticlePage({ params }) {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <PostSection />
        <TextSection />
      </main>
      <Footer />
    </>
  );
}

