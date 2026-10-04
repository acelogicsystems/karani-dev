import React from 'react';
import { servicePackages } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-2xl mb-16">
          <p className="text-emerald-700 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            Core Solutions
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Engineered for reliability. <br />
            <span className="text-emerald-700">Forged for the field.</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Practical digital platforms, geospatial analysis, and field-ready data pipelines designed to work flawlessly in the Kenyan operating environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePackages.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-emerald-600 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium rounded-full mb-6 border border-emerald-200">
                  {service.badge}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {service.tagline}
                </p>

                <div className="space-y-3 mb-8">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start text-xs text-slate-700">
                      <span className="text-emerald-600 font-mono font-bold mr-2.5 mt-0.5">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-[11px] font-mono text-slate-500 mb-4">
                  <strong className="text-slate-700">Client profile:</strong> {service.clientProfile}
                </p>
                <a
                  href={`https://wa.me/254700000000?text=Hello%20karani.dev,%20I'm%20inquiring%20about%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-semibold tracking-wide transition-all text-center block"
                >
                  {service.actionLabel} →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}