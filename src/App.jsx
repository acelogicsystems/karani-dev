import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import { siteConfig } from './data/config';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.location} • Digital Engineering & Field Infrastructure</p>
        </div>
      </footer>
    </div>
  );
}
