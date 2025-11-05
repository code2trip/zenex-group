import Header from '@/frontend/components/Header';
import Footer from '@/frontend/components/Footer';
import Loader from '@/frontend/components/Loader';
import TextSection from '@/frontend/components/sections/TextSection';
import '@/styles/text.scss';

export default function PrivacyPolicyPage() {
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

