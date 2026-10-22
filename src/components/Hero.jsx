import React from 'react';
import { ArrowDown, Sparkles, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-28 pb-20 border-b border-slate-800">
      {/* Full-Section Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-engineers.jpg"
          alt="Technical engineering and field network deployment"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-110"
        />
        {/* High-contrast gradient overlay to ensure perfect text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-white text-xs font-semibold tracking-wide shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Digital Engineering & Field Systems</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-emerald-400" /> Nairobi, Kenya
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
          Building resilient systems for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            real-world operations.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          We engineer high-performance web platforms, automated Daraja M-Pesa integrations, geospatial Web GIS mapping, and offline-first field pipelines across East Africa.
        </p>

        {/* Clean, Non-Repetitive Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-950/50 hover:shadow-emerald-500/20 active:scale-95"
          >
            <span>Explore Deployed Systems</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-semibold text-sm transition-all backdrop-blur-sm active:scale-95"
          >
            <span>Our Capabilities</span>
          </a>
        </div>

        {/* Technical Stack Tags Bar */}
        <div className="pt-10 border-t border-slate-800/70 max-w-3xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
            Core Engineering Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-medium text-slate-300">
            <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 backdrop-blur-sm">Safaricom Daraja</span>
            <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 backdrop-blur-sm">React & Next.js</span>
            <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 backdrop-blur-sm">Node.js & Express</span>
            <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 backdrop-blur-sm">FastAPI & Python</span>
            <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 backdrop-blur-sm">KoboToolbox & ODK</span>
            <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 backdrop-blur-sm">Cloudflare Edge</span>
          </div>
        </div>

      </div>
    </header>
  );
}