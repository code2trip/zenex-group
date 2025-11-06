import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import NewsCatalog from '@/components/sections/NewsCatalog';
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

