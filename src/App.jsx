import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Benefits } from './components/Benefits';
import { RegistrationSteps } from './components/RegistrationSteps';
import { Contacts, Footer } from './components/Contacts';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <Benefits />
        <RegistrationSteps />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
