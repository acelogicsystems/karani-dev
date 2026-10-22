import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import Services from './components/Services';
import Standards from './components/Standards';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#15221B] font-sans selection:bg-[#FDF2EE] selection:text-[#D95D39]">
      <Navbar />
      <main>
        <Hero />
        <TechTicker />
        <Services />
        <Standards />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}