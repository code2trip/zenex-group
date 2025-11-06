import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import TextSection from '@/components/sections/TextSection';
import '@/styles/text.scss';

export default function TermsPage() {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <TextSection />
      </main>
      <Footer />
    </>
  );
}

