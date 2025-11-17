import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import ContactSection from '@/components/sections/ContactSection';
import '@/styles/index.scss';

export default function ContactPage() {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}


