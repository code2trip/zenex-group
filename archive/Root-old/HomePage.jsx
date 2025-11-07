'use client';
import HeroSection from'./HeroSection';
 import MarketProblemSection from'./MarketProblemSection';
 import SolutionSection from'./SolutionSection';
 import BusinessBenefitsSection from'./BusinessBenefitsSection';
 import VIPBenefitsSection from'./VIPBenefitsSection';
 import GetStartedSection from'./GetStartedSection';
 import CTASection from'./CTASection';
 import FooterSection from'./FooterSection';

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-secondary-background overflow-x-hidden">
      <HeroSection />
      <MarketProblemSection />
      <SolutionSection />
      <BusinessBenefitsSection />
      <VIPBenefitsSection />
      <GetStartedSection />
      <CTASection />
      <FooterSection />
    </main>
  )
}
