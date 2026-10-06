import React from 'react';
import { projects } from '../data/projects';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
      {/* Section Header */}
<div className="max-w-2xl mb-16">
  <p className="text-emerald-700 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
    Our Work
  </p>
  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
    Real projects. <br />
    Simple solutions that work.
  </h2>
  <p className="text-slate-600 text-base leading-relaxed">
    See how we help Kenyan businesses collect payments, map field data, and run operations without headaches.
  </p>
</div>
        {/* Case Studies Stack */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 md:p-12 hover:border-slate-300 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-emerald-700 font-semibold">
                      {project.clientSector}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Architecture Features */}
                  <div className="space-y-2.5 pt-2">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pill List */}
                  <div className="pt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-[11px] font-mono text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Metrics & Action Column */}
                <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 md:p-8 space-y-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold border-b border-slate-100 pb-3">
                    Performance Standards
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                        <div className="text-xs text-slate-500 font-mono mb-1">{metric.label}</div>
                        <div className="text-xl font-bold text-slate-900 font-mono">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/254711317540?text=Hello%20karani-systems,%20I%20want%20something%20like%20${encodeURIComponent(project.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-lg bg-slate-900 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                  >
                    Talk to us about this <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}