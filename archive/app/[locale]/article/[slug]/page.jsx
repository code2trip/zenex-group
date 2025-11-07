import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import PostSection from '@/components/sections/PostSection';
import TextSection from '@/components/sections/TextSection';
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

