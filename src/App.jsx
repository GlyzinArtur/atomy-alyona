import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { PriceCompare } from './components/PriceCompare';
import { Reviews } from './components/Reviews';
import { Certificates } from './components/Certificates';
import { FAQ } from './components/FAQ';
import { Consultant } from './components/Consultant';
import { CTASection, Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Catalog />
        <PriceCompare />
        <Reviews />
        <Certificates />
        <FAQ />
        <Consultant />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
