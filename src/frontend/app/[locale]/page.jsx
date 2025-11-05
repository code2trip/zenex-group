import { useTranslations } from 'next-intl';
import Header from '@/frontend/components/Header';
import Footer from '@/frontend/components/Footer';
import HeroSection from '@/frontend/components/sections/HeroSection';
import NumbersSection from '@/frontend/components/sections/NumbersSection';
import ProjectsSection from '@/frontend/components/sections/ProjectsSection';
import BannerSection from '@/frontend/components/sections/BannerSection';
import MapSection from '@/frontend/components/sections/MapSection';
import WhySection from '@/frontend/components/sections/WhySection';
import Loader from '@/frontend/components/Loader';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      <Loader />
      <Header />
      <main>
        <HeroSection />
        <NumbersSection />
        <ProjectsSection />
        <BannerSection variant="style-1" />
        <MapSection />
        <WhySection />
        <BannerSection variant="style-2" />
      </main>
      <Footer />
    </>
  );
}

