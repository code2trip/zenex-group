'use client';

import '@/styles/launch-and-scale.scss';
import Header from '@/components/Header';
import Hero from '@/components/launch-and-scale/Hero';
import AboutProduct from '@/components/launch-and-scale/AboutProduct';
import Modules from '@/components/launch-and-scale/Modules';
import AdminPanel from '@/components/launch-and-scale/AdminPanel';
import Customization from '@/components/launch-and-scale/Customization';
import Pricing from '@/components/launch-and-scale/Pricing';
import Solutions from '@/components/launch-and-scale/Solutions';
import FinalCTA from '@/components/launch-and-scale/FinalCTA';
import Footer from '@/components/Footer';

// metadata нельзя экспортировать из client-компонента — оставим как серверный layout

export default function LaunchAndScalePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutProduct />
        <Modules />
        <AdminPanel />
        <Customization />
        <Pricing />
        <Solutions />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}


