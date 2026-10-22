import React from 'react';
import { Terminal, Server, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function About() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Brian,%20I'd%20like%20to%20discuss%20a%20project%20with%20Karani%20Systems.`;

  return (
    <section id="about" className="relative bg-[#FBF9F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D5] overflow-hidden">
      
      {/* Subtle architectural background grid line */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-[#E8E2D5]/50 -translate-x-1/2 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#D95D39] font-bold mb-3">
            <span>The Engineer Behind Karani Systems</span>
            <span className="text-[#E8E2D5]">/</span>
            <span className="text-[#4A5B52]">Est. 2025 • Nairobi, Kenya</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#15221B] tracking-tight leading-[1.12]">
            "I build systems that don't fall apart when the network does."
          </h2>
        </div>

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Direct Story */}
          <div className="lg:col-span-7 space-y-6 text-[#4A5B52] leading-relaxed text-base">
            <p className="text-xl sm:text-2xl text-[#15221B] font-bold leading-snug">
              My name is <span className="text-[#0B5338]">Brian Karani</span>. I founded Karani Systems to solve a recurring problem: software that looks great in a boardroom demo but fails out in the field.
            </p>

            <p>
              Operating since 2025, my work sits directly at the intersection of <strong>Disaster Risk Management & Sustainable Development</strong> and <strong>practical digital engineering</strong>. Having trained to think about vulnerabilities, crisis bottlenecks, and human safety, I build software with the same mindset: systems must be durable, accountable, and simple to use.
            </p>

            <p>
              I take full responsibility for every project from start to finish. That means writing the application logic, configuring databases, setting up your domain DNS and business email, securing your cloud servers, and automating your M-Pesa payment pipelines. When you work with Karani Systems, you deal directly with the engineer building and managing your infrastructure.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#15221B] font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B5338]" /> Single Point of Accountability
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B5338]" /> Full End-to-End Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B5338]" /> Zero Outsourced Code
              </span>
            </div>
          </div>

          {/* Right Column: Founder Field Dispatch Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0B5338] text-white p-8 sm:p-9 shadow-xl shadow-[#0B5338]/15 border border-[#083e2a] relative">
              
              <div className="flex items-center justify-between pb-6 border-b border-emerald-900/60 mb-6">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
                    Lead Systems Engineer
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-0.5">
                    Brian Karani
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-800/80 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">
                  BK
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                <p>
                  "Whether you are automating millions of shillings through Daraja M-Pesa, mapping matatu corridors, or deploying an early warning alert system, you need clean architecture and someone who answers the phone."
                </p>
                <p className="font-mono text-[11px] text-emerald-300">
                  Direct Line: +254 758 244 586 <br />
                  Location: Nairobi / Embu / Remote
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-emerald-900/60">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D95D39] hover:bg-[#c24e2c] text-white font-bold text-xs tracking-wide transition-all shadow-md active:scale-95"
                >
                  <span>Chat Directly with Brian</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* The End-to-End Delivery Sequence (Code -> Server -> Live System) */}
        <div className="border-t border-[#E8E2D5] pt-12">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#7E9086] font-bold mb-6">
            The Full Delivery Pipeline (No Hand-offs)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D5] space-y-2">
              <div className="flex items-center gap-2 text-[#0B5338] mb-1">
                <Terminal className="w-5 h-5" />
                <span className="font-mono text-xs font-bold text-[#D95D39]">01. Build</span>
              </div>
              <h4 className="font-bold text-[#15221B] text-base">Custom Software & UI</h4>
              <p className="text-xs text-[#4A5B52] leading-relaxed">
                Clean web apps, fast mobile experiences, and secure APIs engineered for speed and clarity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D5] space-y-2">
              <div className="flex items-center gap-2 text-[#0B5338] mb-1">
                <Server className="w-5 h-5" />
                <span className="font-mono text-xs font-bold text-[#D95D39]">02. Infrastructure</span>
              </div>
              <h4 className="font-bold text-[#15221B] text-base">Servers, Domains & DNS</h4>
              <p className="text-xs text-[#4A5B52] leading-relaxed">
                Production server setup, custom business email routing, SSL security, and automated database backups.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D5] space-y-2">
              <div className="flex items-center gap-2 text-[#0B5338] mb-1">
                <Send className="w-5 h-5" />
                <span className="font-mono text-xs font-bold text-[#D95D39]">03. Deployment</span>
              </div>
              <h4 className="font-bold text-[#15221B] text-base">Live Launch & Maintenance</h4>
              <p className="text-xs text-[#4A5B52] leading-relaxed">
                Zero-downtime rollouts, uptime monitoring, and active maintenance so your business never goes dark.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}