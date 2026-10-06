import React from 'react';
import { Zap, ShieldCheck, WifiOff, Smartphone, RefreshCw, Server } from 'lucide-react';

export default function Standards() {
  const standards = [
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: "Built for Mobile Data",
      subtitle: "Instant loads on 3G & 4G",
      description: "Optimized bundle sizes, aggressive caching, and compressed vector assets ensure pages open within seconds even on low-tier data connections across Kenya."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Hardened Daraja M-Pesa",
      subtitle: "Zero missed transactions",
      description: "Built-in webhook validation, idempotency keys, and automated reconciliation prevent dropped payment notifications and duplicate checkout prompts."
    },
    {
      icon: <WifiOff className="w-6 h-6 text-emerald-600" />,
      title: "Offline-First Data Capture",
      subtitle: "Zero lost field records",
      description: "Mobile surveys and operational logs store locally on the device when working out of network coverage and sync cleanly once an uplink is established."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
      title: "Mobile-First Design",
      subtitle: "Engineered for smartphones first",
      description: "Every layout, map view, and administrative form is designed and tested for thumbs, small phone screens, and high-glare outdoor environments."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-emerald-600" />,
      title: "Automated Data Pipelines",
      subtitle: "Clean exports to Excel & SQL",
      description: "Direct REST API integrations feed KoboToolbox, billing systems, and CRM logs directly into analytical spreadsheets and databases without manual entry."
    },
    {
      icon: <Server className="w-6 h-6 text-emerald-600" />,
      title: "Edge Cloud Reliability",
      subtitle: "99.9% uptime with global CDN",
      description: "Hosted across decentralized edge networks with localized routing nodes in East Africa, eliminating single points of failure."
    }
  ];

  return (
    <section id="standards" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-emerald-700 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            Engineering Standards
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Built to work when it matters.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Local applications fail when built purely for office Wi-Fi. Our technical baseline is engineered for real Kenyan infrastructure.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-emerald-700 font-semibold mb-3">
                  {item.subtitle}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}