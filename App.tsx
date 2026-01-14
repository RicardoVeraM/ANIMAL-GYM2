
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AICoach from './components/AICoach';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <AICoach />
    </div>
  );
};

export default App;
