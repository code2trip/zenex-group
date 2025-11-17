import '@/styles/aff.scss';
import { Header, MarketProblem, OurSolution, BenefitsBusiness, BenefitsVip, GetStarted } from '@/components/aff/blocks';
import Footer from '@/components/Footer';
import { setRequestLocale } from 'next-intl/server';

export const dynamic = 'force-static';

export default async function AffPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div id="aff">
      <Header />
      <MarketProblem />
      <OurSolution />
      {/* Левый glow между Our Solution и Benefits Business */}
      <div className="between-glow-left" aria-hidden />
      <BenefitsBusiness />
      {/* Межсекционная зелёная подсветка (как на макете) */}
      <div className="between-glow" aria-hidden />
      <BenefitsVip />
      {/* Blur элемент между BenefitsVip и GetStarted справа */}
      <div className="benefits-vip-get-started-blur full-bleed" aria-hidden></div>
      <GetStarted />
      <Footer />
    </div>
  );
}

