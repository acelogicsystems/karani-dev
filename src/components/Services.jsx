import React from 'react';
import { 
  ShieldAlert,
  MapPin,
  Rocket, 
  Globe, 
  CreditCard, 
  Wrench, 
  Server, 
  TrendingUp, 
  ArrowUpRight 
} from 'lucide-react';
import { siteConfig } from '../data/config';

const services = [
  {
    id: "drm-systems",
    icon: ShieldAlert,
    title: "Disaster Risk & Early Warning Tools",
    tagline: "Preparedness, hazard tracking & emergency workflows",
    description: "Digital systems built specifically for community resilience and disaster response. We build web-based hazard alerts, emergency resource tracking tools, and climate vulnerability dashboards for counties, NGOs, and field teams.",
    deliverables: [
      "Real-time hazard monitoring dashboards & alert feeds",
      "Vulnerability assessment & community risk mapping",
      "Offline emergency resource & relief inventory trackers",
      "Field incident logging and structured emergency reports"
    ],
    tech: ["Early Warning", "USSD/SMS", "FastAPI", "GeoJSON"]
  },
  {
    id: "gis-mapping",
    icon: MapPin,
    title: "GIS & Spatial Intelligence Portals",
    tagline: "Interactive maps, boundary data & route digitization",
    description: "Turn raw geographic data into practical interactive maps. We process satellite vectors, clean shapefiles, and build map applications to help organizations track routes, landmarks, land use, and service boundaries.",
    deliverables: [
      "Custom interactive web maps (Leaflet / Mapbox)",
      "Digitizing transit routes, delivery corridors & landmarks",
      "QGIS map data preparation, cleaning & layer exports",
      "Mobile data collection with KoboToolbox & ODK forms"
    ],
    tech: ["QGIS", "Leaflet", "PostGIS", "KoboToolbox"]
  },
  {
    id: "startups",
    icon: Rocket,
    title: "Startup & Innovator Partnerships",
    tagline: "From concept and MVP to production launch",
    description: "We partner with early-stage founders, hackathon innovators, and local ventures to turn raw product ideas into deployable software. We build fast, lean MVPs so you can demo, pitch, and onboard your first users.",
    deliverables: [
      "Rapid MVP development & functional web prototypes",
      "System architecture & technical pitch preparation",
      "API integrations & lightweight database design",
      "Hands-on deployment and technical advisory"
    ],
    tech: ["MVP Build", "Next.js", "FastAPI", "Cloudflare"]
  },
  {
    id: "web-dev",
    icon: Globe,
    title: "Custom Websites & Web Apps",
    tagline: "Fast, mobile-friendly, and modern",
    description: "Clean, responsive websites and web applications tailored to your business needs. Designed from scratch to load fast on phones and laptops, rank well on Google, and convert visitors into paying clients.",
    deliverables: [
      "Business and corporate portfolio websites",
      "Interactive client portals and web apps",
      "Mobile-first responsive design for all devices",
      "SEO-friendly pages built for fast loading speeds"
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "M-Pesa & Stripe Payment Systems",
    tagline: "Automate payments locally and globally",
    description: "Connect your website or app directly to reliable payment gateways. We set up automated Safaricom Daraja M-Pesa (STK Push, Till, Paybill) for local clients, and Stripe for accepting card payments worldwide.",
    deliverables: [
      "Instant M-Pesa STK push checkout prompts",
      "Stripe integration for international card payments",
      "Automatic payment confirmation receipts and alerts",
      "Admin ledger to monitor all incoming transactions"
    ],
    tech: ["Safaricom Daraja", "Stripe", "Node.js", "Webhooks"]
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Website & System Maintenance",
    tagline: "Keep your systems safe, fast, and online",
    description: "Websites and servers need regular care. We provide ongoing support to keep your site running smoothly, fix unexpected bugs quickly, update dependencies, and take regular backups so you never lose data.",
    deliverables: [
      "Regular security patches and version updates",
      "Database and file backups with quick recovery",
      "Bug fixes, error tracking, and speed optimization",
      "Scheduled uptime monitoring to stop unexpected crashes"
    ],
    tech: ["Monitoring", "Git", "Automated Backups", "Linux"]
  },
  {
    id: "domains-upgrades",
    icon: Server,
    title: "Domains, Email & Modern Upgrades",
    tagline: "Custom emails, DNS setup, and modern revamps",
    description: "Modernize slow or outdated websites, migrate hosting, configure professional business email addresses (e.g., info@yourcompany.co.ke), and set up reliable DNS records without downtime.",
    deliverables: [
      "Custom domain registration and DNS records setup",
      "Professional business email setup (Google Workspace / Zoho)",
      "Moving slow sites to modern, ultra-fast hosting",
      "Redesigning outdated websites with modern layouts"
    ],
    tech: ["Cloudflare", "DNS", "Email Config", "Hosting Migration"]
  },
  {
    id: "google-ads",
    icon: TrendingUp,
    title: "Google Ads & Search Visibility",
    tagline: "Get found by real customers searching for you",
    description: "Drive relevant traffic directly to your business. We set up, run, and optimize targeted Google Search campaigns so your website appears at the very top when potential clients search for your services.",
    deliverables: [
      "Keyword research focused on ready-to-buy customers",
      "Campaign setup with targeted local demographics",
      "Conversion tracking to see exact leads and phone calls",
      "Budget optimization to keep ad spend efficient"
    ],
    tech: ["Google Ads", "Google Analytics", "Tag Manager", "SEO"]
  }
];

export default function Services() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20${encodeURIComponent(siteConfig.name)},%20I'd%20like%20to%20discuss%20a%20project.`;

  return (
    <section id="services" className="relative bg-[#FBF9F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#D95D39] font-bold mb-3">
            <span>What We Do</span>
            <span className="text-[#E8E2D5]">/</span>
            <span className="text-[#4A5B52]">Field & Digital Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#15221B] tracking-tight leading-tight">
            Engineering software, maps, and field solutions that work.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A5B52] leading-relaxed">
            From modern web apps and M-Pesa payments to GIS mapping, early warning resilience systems, and ongoing technical maintenance.
          </p>
        </div>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E2D5] shadow-xs hover:border-[#0B5338]/40 hover:shadow-xl hover:shadow-[#0B5338]/5 transition-all duration-300"
              >
                <div>
                  {/* Card Header: Icon + Index */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F3EFE6] border border-[#E8E2D5] flex items-center justify-center text-[#0B5338] group-hover:bg-[#0B5338] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#7E9086]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-[#15221B] tracking-tight group-hover:text-[#0B5338] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-mono font-medium text-[#D95D39] mt-1 mb-3">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#4A5B52] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-[#F3EFE6] space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#7E9086]">
                      What's Included
                    </p>
                    <ul className="space-y-1.5">
                      {item.deliverables.map((deliverable, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-[11px] text-[#15221B] font-medium leading-tight">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0B5338] mt-1 flex-shrink-0" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-5 mt-5 border-t border-[#F3EFE6] flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1">
                    {item.tech.slice(0, 3).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-[#F3EFE6] border border-[#E8E2D5] text-[9px] font-mono font-semibold text-[#4A5B52]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#F3EFE6] hover:bg-[#D95D39] hover:text-white text-[#15221B] transition-colors"
                    aria-label={`Inquire about ${item.title}`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-14 sm:mt-16 rounded-2xl bg-[#0B5338] p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-[#0B5338]/10">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Need a custom engineering or spatial project?</h3>
            <p className="text-sm text-emerald-100/90 mt-1 max-w-xl">
              Whether you need disaster resilience tools, interactive web GIS mapping, or custom business software, let’s talk through the requirements.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D95D39] hover:bg-[#C24C29] text-white font-semibold text-xs tracking-wide transition-all shadow-md active:scale-95"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}