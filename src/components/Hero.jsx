import React from 'react';
import { ArrowUpRight, CheckCircle2, Shield, Layers, Smartphone, Map } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20${encodeURIComponent(siteConfig.name)},%20I'd%20like%20to%20discuss%20a%20digital%20infrastructure%20project.`;

  return (
    <section className="relative bg-white text-slate-900 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 text-white text-xs font-semibold tracking-wide">
              <span>Digital Engineering & Field Infrastructure</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.12]">
              Engineering reliable platforms for{' '}
              <span className="text-emerald-700">Kenyan enterprise & field teams.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              We design, build, and deploy production software—from instant Daraja M-Pesa commerce integrations and Web GIS mapping to resilient, offline-first field data systems.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm transition-all shadow-sm hover:shadow active:scale-[0.98]"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm transition-all"
              >
                <span>View Live Deployments</span>
              </a>
            </div>

            {/* Built For / Core Capabilities Strip */}
            <div className="pt-8 border-t border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Core Engineering Capabilities
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-700 text-xs sm:text-sm font-medium">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-emerald-600" /> Daraja M-Pesa STK
                </span>
                <span className="flex items-center gap-1.5">

<Map className="w-4 h-4 text-emerald-600" />
Web GIS & Mapping
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-600" /> KoboToolbox Pipelines
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-600" /> Cloud Resilience
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 shadow-sm">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Production Systems</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">Active Client Implementations</div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Active
                </span>
              </div>

              {/* Stacked Interactive / Metric Cards */}
              <div className="space-y-3.5 mt-5">
                
                {/* ResiliAI Row */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs hover:border-emerald-300 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-bold text-slate-900">ResiliAI Early Warning</div>
                      <div className="text-[11px] text-slate-500">Spatial disaster risk portal & hazard mapping</div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Live Demo</span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-600">
                    <span className="font-medium text-slate-900">&lt;30s latency</span>
                    <span>•</span>
                    <span>Sub-county granularity</span>
                  </div>
                </div>

                {/* KilimoCast Row */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs hover:border-emerald-300 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-bold text-slate-900">KilimoCast Hyperlocal Advisory</div>
                      <div className="text-[11px] text-slate-500">Weather-linked crop insights & USSD workflow</div>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">AgriTech</span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-600">
                    <span className="font-medium text-slate-900">Daily sync</span>
                    <span>•</span>
                    <span>2G/3G optimized</span>
                  </div>
                </div>

                {/* Field Pipeline Row */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs hover:border-emerald-300 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-bold text-slate-900">KoboToolbox & ODK Workflows</div>
                      <div className="text-[11px] text-slate-500">Offline-first surveys synced to analytics engines</div>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">Field Data</span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-600">
                    <span className="font-medium text-slate-900">Zero packet loss</span>
                    <span>•</span>
                    <span>Automated export</span>
                  </div>
                </div>

              </div>

              {/* Bottom Card Summary */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Safaricom Daraja & Cloudflare Edge
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}