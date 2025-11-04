import '@/styles/cards-igaming-vip.scss';
import { Header, MarketProblem, OurSolution, BenefitsBusiness, BenefitsVip, GetStarted } from '../../../src/components/cards-igaming-vip/blocks';
import Footer from '@/components/Footer';

export const dynamic = 'force-static';

export default function CardsIGamingVipPage() {
  return (
    <div id="cards-igaming-vip">
      <Header />
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


