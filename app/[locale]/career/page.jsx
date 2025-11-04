import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import CareerHero from '@/components/sections/CareerHero';
import CareerValues from '@/components/sections/CareerValues';
import CareerWork from '@/components/sections/CareerWork';
import CareerForm from '@/components/sections/CareerForm';
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

