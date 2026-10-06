import React from 'react';
import { siteConfig } from '../data/config';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-48 md:pb-28 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-600">
              Nairobi, Kenya • Digital Systems & Spatial Engineering
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-8">
            Digital systems. <br />
            Built for Kenya. <br />
            <span className="text-emerald-700">Forged for the field.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
            We engineer high-performance web platforms, interactive GIS mapping solutions, and automated field data pipelines for enterprises, AgriTechs, and development organizations across East Africa.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          import { siteConfig } from '../data/config';

// In the primary action:
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Karani%20Systems,%20I%20have%20a%20project%20inquiry.`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-4 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-emerald-700 transition-all text-center shadow-sm"
    >
      Discuss a Project on WhatsApp
    </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-sm transition-all text-center"
            >
              Explore Solutions
            </a>
          </div>

          {/* Operational Standards Badges */}
          <div className="mt-16 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-500 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span> Daraja M-Pesa Systems
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span> Web GIS & Geospatial Tools
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span> KoboToolbox & M&E Sync
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span> Low-Bandwidth Optimized
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}