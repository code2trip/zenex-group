import { useTranslations } from 'next-intl';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import NumbersSection from '@/components/sections/NumbersSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import BannerSection from '@/components/sections/BannerSection';
import MapSection from '@/components/sections/MapSection';
import WhySection from '@/components/sections/WhySection';
import Loader from '@/components/Loader';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      <Loader />
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

