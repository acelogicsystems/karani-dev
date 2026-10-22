import React from 'react';
import { ExternalLink, ShieldCheck, MapPin, Activity } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Projects() {
  const projects = [
    {
      title: "ResiliAI & Hazard Tracker",
      category: "Geospatial & Early Warning",
      description: "Spatial disaster risk reduction and hazard tracking platform delivering sub-30s alert latency across Kenyan counties.",
      tags: ["Leaflet GIS", "FastAPI", "React", "Cloudflare"],
      status: "Live Production",
      link: "#"
    },
    {
      title: "KilimoCast Hyperlocal Advisory",
      category: "AgriTech & Field Systems",
      description: "Localized agricultural weather advisory tool featuring low-bandwidth USSD simulation and 2G/3G optimized data sync.",
      tags: ["USSD Workflow", "Python", "Open-Meteo", "Offline Cache"],
      status: "Verified Deployment",
      link: "#"
    },
    {
      title: "Field Data & Survey Ingestion",
      category: "Data Pipelines",
      description: "Zero-packet-loss automated ingestion pipeline bridging KoboToolbox and ODK field surveys directly into operational dashboards.",
      tags: ["KoboToolbox API", "ODK Collect", "PostgreSQL", "Node.js"],
      status: "Operational",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Deployed Architectures</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Engineered Systems in Production</h2>
          <p className="text-slate-400 mt-3 text-base">
            Field-tested platforms built for resilience, low bandwidth, and mission-critical workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="text-emerald-400 font-mono font-medium">{p.category}</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[10px]">
                    {p.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {p.tags.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
