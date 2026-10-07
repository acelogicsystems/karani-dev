import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20${encodeURIComponent(siteConfig.name)},%20I'd%20like%20to%20discuss%20an%20engineering%20project.`;

  return (
    <section className="relative bg-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Personality & Punchy Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>We build systems that work in the real world</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              A Digital Engineering &{' '}
              <span className="text-emerald-700">Field Tech Studio</span> based in Nairobi
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              We design and engineer high-performance platforms, automated Daraja M-Pesa flows, interactive GIS maps, and bulletproof offline field survey pipelines across East Africa.
            </p>

            {/* CTA Buttons: Work With Us & Explore Our Work */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20 active:scale-95"
              >
                <span>Work With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all active:scale-95"
              >
                <span>Explore Our Work</span>
              </a>
            </div>

            {/* Core Engineering Stack (includes Node.js & Express) */}
            <div className="pt-8 border-t border-slate-100 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Engineering Stack
              </p>
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-slate-600">
                <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/60">Safaricom Daraja</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/60">React & Next.js</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/60">Node.js & Express</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/60">FastAPI & Python</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/60">KoboToolbox & ODK</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/60">Cloudflare Edge</span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Arched Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative w-full h-[430px] sm:h-[480px] rounded-t-[100px] rounded-b-[40px] overflow-hidden bg-slate-900 shadow-2xl border border-slate-200">
                {/* Authentic overhead/collaborative engineering photo without face prominence */}
                <img 
                   src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" 
                   alt="Software development and systems engineering workstation" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Highlight Card Inside the Visual */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Verified Deployment
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Nairobi, Kenya</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 leading-snug">
                    Imaragrid & KilimoCast platforms delivering real-time geospatial alerts and climate data.
                  </p>
                </div>
              </div>

              {/* Top-left Floating Metric Badge */}
              <div className="absolute -top-4 -left-4 bg-white border border-slate-200/80 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  100%
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-900">Uptime & Field Sync</div>
                  <div className="text-[10px] text-slate-500">Offline-first architecture</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}