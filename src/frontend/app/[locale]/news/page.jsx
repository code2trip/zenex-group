import { useTranslations } from 'next-intl';
import Header from '@/frontend/components/Header';
import Footer from '@/frontend/components/Footer';
import Loader from '@/frontend/components/Loader';
import NewsCatalog from '@/frontend/components/sections/NewsCatalog';
import '@/styles/news.scss';

export default function NewsPage() {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <NewsCatalog />
      </main>
      <Footer />
    </>
  );
}

