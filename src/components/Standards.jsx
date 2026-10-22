import React from 'react';
import { ShieldCheck, Zap, Code2, Wifi } from 'lucide-react';

const commitments = [
  {
    num: "01",
    title: "Zero Lost Payments",
    metric: "100% Reconciliation",
    description: "Every M-Pesa STK push and Stripe payment is verified with automated callback queues and instant ledger logs. If a customer's network cuts out mid-transaction, our retry logic recovers it so no payment ever goes missing."
  },
  {
    num: "02",
    title: "Fast on Low Bundles & 3G",
    metric: "< 1s Mobile Loads",
    description: "We don't build bloated websites that drain customer data. Every image, script, and font is compressed so your pages open instantly, even on weak mobile connections outside major towns."
  },
  {
    num: "03",
    title: "Total Code & Asset Ownership",
    metric: "Zero Vendor Lock-in",
    description: "When the project is done, you receive complete access to your GitHub repositories, domain records, hosting accounts, and database credentials. You are never held hostage by proprietary setups."
  },
  {
    num: "04",
    title: "Field-Tested Under Real Conditions",
    metric: "Offline-Ready Tools",
    description: "We test forms, maps, and dashboards on real mobile devices and simulated poor connectivity. If your field staff lose cell coverage, data stays safe offline until they reconnect."
  }
];

export default function Standards() {
  return (
    <section className="bg-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#D95D39] font-bold mb-3">
            <span>Our Approach</span>
            <span className="text-[#E8E2D5]">/</span>
            <span className="text-[#4A5B52]">How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#15221B] tracking-tight leading-tight">
            How we build: clear rules, zero guesswork.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A5B52] leading-relaxed">
            We hold our engineering to four direct operational commitments so you know what you are paying for from day one.
          </p>
        </div>

        {/* The Architectural Ledger (Horizontal Row Layout, No Cards) */}
        <div className="border-t border-[#15221B]">
          {commitments.map((item) => (
            <div 
              key={item.num}
              className="group py-8 sm:py-10 border-b border-[#E8E2D5] flex flex-col lg:flex-row lg:items-start justify-between gap-6 hover:bg-[#FBF9F5] px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors duration-200"
            >
              {/* Left Column: Number + Rule Title */}
              <div className="lg:w-1/3 flex items-start gap-4 sm:gap-6">
                <span className="font-mono text-sm font-bold text-[#D95D39] tracking-wider pt-0.5">
                  [{item.num}]
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#15221B] tracking-tight group-hover:text-[#0B5338] transition-colors">
                    {item.title}
                  </h3>
                  <span className="inline-block mt-1 text-[11px] font-mono text-[#4A5B52] font-semibold bg-[#F3EFE6] px-2 py-0.5 rounded border border-[#E8E2D5]">
                    {item.metric}
                  </span>
                </div>
              </div>

              {/* Right Column: Narrative Detail */}
              <div className="lg:w-2/3 lg:pl-10">
                <p className="text-sm sm:text-base text-[#4A5B52] leading-relaxed max-w-3xl">
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