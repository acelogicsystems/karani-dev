import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#0C1612] pt-36 pb-20 border-b border-[#1A2E24]">
      {/* Background Engineering Photo - High Clarity & Rich Texture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero-engineers.jpg"
          alt="Technical engineering and field network deployment"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-75 opacity-60"
        />
        {/* Deep Forest-Linen Vignette Gradient for Perfect Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1612] via-[#0C1612]/75 to-[#0C1612]/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        

        {/* Primary Headline - Clean & Uncluttered */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
          Building resilient systems for{' '}
          <span className="text-emerald-400">
            real-world operations.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          We engineer high-performance web platforms, automated Daraja M-Pesa integrations, geospatial Web GIS mapping, and offline-first field pipelines across East Africa.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-950/40 active:scale-95"
          >
            <span>Explore Deployed Systems</span>
            <ArrowDown className="w-4 h-4 text-emerald-200" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#162720]/80 hover:bg-[#1E352C] border border-[#2A4437] text-slate-200 font-semibold text-sm transition-all backdrop-blur-sm active:scale-95"
          >
            <span>Our Capabilities</span>
          </a>
        </div>

        

      </div>
    </header>
  );
}