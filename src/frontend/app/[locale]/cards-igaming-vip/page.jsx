import '@/styles/cards-igaming-vip.scss';
import { Header, Hero, MarketProblem, OurSolution, BenefitsBusiness, BenefitsVip, GetStarted } from '@/components/cards-igaming-vip/blocks';
import Footer from '@/components/Footer';
import { setRequestLocale } from 'next-intl/server';

export const dynamic = 'force-static';

export default async function CardsIGamingVipPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div id="cards-igaming-vip">
      <Header />
      <Hero />
      <MarketProblem />
      <OurSolution />
      {/* Левый glow между Our Solution и Benefits Business */}
      <div className="between-glow-left" aria-hidden />
      <BenefitsBusiness />
      {/* Межсекционная зелёная подсветка (как на макете) */}
      <div className="between-glow" aria-hidden />
      <BenefitsVip />
      <GetStarted />
      <Footer />
    </div>
  );
}
