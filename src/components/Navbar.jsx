import React from 'react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <Logo className="h-8" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#credentials" className="hover:text-slate-900 transition-colors">Standards</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>

        <a
          href="https://wa.me/254700000000?text=Hello%20karani.dev,%20I%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-emerald-700 transition-all shadow-sm"
        >
          Work With Us
        </a>
      </div>
    </header>
  );
}