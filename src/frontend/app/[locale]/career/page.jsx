import { useTranslations } from 'next-intl';
import Header from '@/frontend/components/Header';
import Footer from '@/frontend/components/Footer';
import Loader from '@/frontend/components/Loader';
import CareerHero from '@/frontend/components/sections/CareerHero';
import CareerValues from '@/frontend/components/sections/CareerValues';
import CareerWork from '@/frontend/components/sections/CareerWork';
import CareerForm from '@/frontend/components/sections/CareerForm';
import '@/styles/career.scss';

export default function CareerPage() {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <CareerHero />
        <CareerValues />
        <CareerWork />
        <CareerForm />
      </main>
      <Footer />
    </>
  );
}

