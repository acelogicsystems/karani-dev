import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2, Quote } from 'lucide-react';
import { siteConfig } from '../data/config';

const projects = [
  {
    id: "seculink",
    title: "Seculink Fencing & Shade Systems",
    subtitle: "Modern Business Website & Quote System",
    category: "Security & Physical Infrastructure",
    status: "Live in Production",
    url: "https://seculink-website.netlify.app/",
    domain: "seculink-website.netlify.app",
    location: "Ongata Rongai, Nairobi",
    summary: "A modern, mobile-first business website built for a security installations company specializing in electric fencing, CCTV systems, automated gates, and car shade ports.",
    challenge: "The client ran a busy installation business in Nairobi but had zero online presence, causing them to miss high-value corporate inquiries and quote requests.",
    deliverables: [
      "Mobile-friendly corporate layout built with React & Tailwind CSS",
      "Online quote request system delivering leads straight to client email",
      "Instant WhatsApp floating chat button for same-day site visits",
      "Filterable project gallery with image lightbox of past installations",
      "Search-engine ready with targeted Nairobi & local business metadata"
    ],
    testimonial: {
      quote: "Brian delivered a professional website that exceeded our expectations. It looks modern, works perfectly on mobile, and makes it easy for our customers to reach us.",
      author: "Seculink Fencing & Shade Systems",
      role: "Client Review • Nairobi, Kenya"
    },
    tech: ["React (Vite)", "Tailwind CSS", "FormSubmit", "Netlify CDN"]
  },
  {
    id: "bookease",
    title: "BookEase — Service Booking SaaS",
    subtitle: "Multi-Tenant Scheduling Platform for Kenyan Businesses",
    category: "Full-Stack SaaS & Commerce",
    status: "Ongoing MVP (Live)",
    url: "https://booking-saas-hazel.vercel.app/",
    domain: "booking-saas-hazel.vercel.app",
    location: "Nairobi / Remote",
    summary: "A multi-tenant SaaS platform empowering barbershops, salons, photographers, and Kenyan service providers to accept client bookings 24/7 through a shareable link.",
    challenge: "Small service businesses lose revenue through scattered WhatsApp chats and missed calls, lacking double-booking prevention, calendar sync, or after-hours intake.",
    deliverables: [
      "Secure JWT authentication with bcrypt password encryption",
      "Business owner dashboard tracking bookings, real-time revenue & completion rates",
      "4-step public booking flow (Service → Date & Time → Details → Confirmation)",
      "Database-level indexed constraints to prevent duplicate or conflicting bookings",
      "Automated booking confirmation page with one-click WhatsApp sharing conduit"
    ],
    testimonial: null,
    tech: ["Next.js 14 (App Router)", "MongoDB Atlas", "Tailwind CSS", "shadcn/ui", "Zustand", "Vercel"]
  },
  {
    id: "iclub-portal",
    title: "Campus Innovation Club Portal",
    subtitle: "Student Feedback & Project Hub (v1)",
    category: "Campus & Community Systems",
    status: "Live v1",
    url: "https://iclub-portal-one.vercel.app/",
    domain: "iclub-portal-one.vercel.app",
    location: "The Co-operative University of Kenya",
    summary: "A university innovation platform built to showcase student engineering prototypes and collect structured feedback during demo pitch sessions.",
    challenge: "Student innovators lacked a central digital home to publish ongoing builds and capture structured evaluations during live presentations.",
    deliverables: [
      "Structured feedback and evaluation conduit for live demonstrations",
      "Centralized project catalog for student initiatives",
      "Clean, modern layout that represents the campus tech community"
    ],
    testimonial: null,
    tech: ["Next.js", "React", "REST APIs", "Vercel"]
  },
  {
    id: "imaragrid",
    title: "Imara Grid — Disaster Resilience Platform",
    subtitle: "Civic Tech, AI Guidance & Real-Time Evacuation Mapping",
    category: "Civic Tech / Disaster Resilience",
    status: "Live Platform",
    url: "https://imaragrid.vercel.app/",
    domain: "imaragrid.vercel.app",
    location: "47 Counties, Kenya",
    summary: "A real-time disaster resilience platform for Kenya combining AI safety guidance, community incident reporting, verified shelter mapping, and evacuation routing across all 47 counties.",
    challenge: "Kenyan communities and responders lack a centralized, real-time platform during floods and hazard events, relying on fragmented social media rumors without verified shelter locations or road-accurate evacuation routes.",
    deliverables: [
      "Interactive map with verified hospitals, shelters & hazard zones (Leaflet.js + CartoDB dark tiles)",
      "Multilingual AI Safety Assistant (Groq / Llama 3.1) offering emergency guidance in English, Kiswahili & Sheng",
      "3-step community incident reporting pipeline with real-time map coordinate pinning",
      "Weather & flood risk overlay across all 47 counties using OpenWeather API & ISO 22324 severity scoring",
      "OSRM-powered evacuation navigation routing along actual Kenyan road networks, not straight lines"
    ],
    testimonial: null,
    tech: ["React (Vite)", "Leaflet.js", "Groq API (Llama 3.1)", "OSRM Routing", "OpenWeather", "MongoDB Atlas", "Vercel"],
    sdgs: ["SDG 11: Sustainable Cities", "SDG 13: Climate Action", "SDG 9: Innovation"]
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 6 seconds unless user pauses to read
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = projects[activeIndex];
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Brian,%20I'd%20like%20to%20discuss%20a%20project%20similar%20to%20${encodeURIComponent(current.title)}.`;

  return (
    <section id="projects" className="relative bg-[#FBF9F5] py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#D95D39] font-bold mb-3">
              <span>Selected Work</span>
              <span className="text-[#E8E2D5]">/</span>
              <span className="text-[#4A5B52]">Live Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#15221B] tracking-tight leading-tight">
              Real systems we have built and launched.
            </h2>
            <p className="mt-3 text-base text-[#4A5B52]">
              Explore live platforms, client websites, and SaaS products in active operation.
            </p>
          </div>

          {/* Reading Indicator */}
          <div className="text-xs font-mono text-[#7E9086] flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-[#D95D39]' : 'bg-[#0B5338] animate-pulse'}`} />
            <span>{isPaused ? 'Paused for reading' : 'Auto-sliding'}</span>
          </div>
        </div>

        {/* Carousel Viewport (Hover or Touch stops auto-sliding) */}
        <div 
          className="overflow-hidden rounded-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((proj) => {
              const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(proj.url)}&screenshot=true&meta=false&embed=screenshot.url`;

              return (
                <div key={proj.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 sm:p-10 lg:p-12 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      
                      {/* Left: Vercel-Style Browser Window Preview */}
                      <div className="lg:col-span-6 space-y-4">
                        <div className="rounded-2xl border border-[#E8E2D5] bg-[#F3EFE6] overflow-hidden shadow-lg shadow-[#0B5338]/5">
                          
                          {/* Browser Window Header Chrome */}
                          <div className="px-4 py-3 bg-[#EAE5D9] border-b border-[#E8E2D5] flex items-center justify-between gap-4">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#D95D39]/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#E0A838]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#0B5338]" />
                            </div>
                            
                            <div className="flex-1 max-w-xs truncate text-[11px] font-mono text-[#4A5B52] bg-white px-3 py-1 rounded-md text-center border border-[#E8E2D5]/80">
                              https://{proj.domain}
                            </div>
                            
                            <div className="w-10 text-right">
                              <span className="w-2 h-2 inline-block rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                          </div>

                          {/* Screenshot Image Container */}
                          <div className="relative aspect-[16/10] bg-[#15221B] overflow-hidden group">
                            <img
                              src={screenshotUrl}
                              alt={`${proj.title} Live Preview`}
                              loading="lazy"
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            
                            {/* Fallback Display */}
                            <div className="hidden absolute inset-0 bg-[#0B5338] text-white p-6 flex-col justify-between">
                              <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">Live Preview</span>
                              <h4 className="text-xl font-bold">{proj.title}</h4>
                              <span className="text-xs font-mono">{proj.domain}</span>
                            </div>

                            {/* Hover Overlay Button */}
                            <a
                              href={proj.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute inset-0 bg-[#0B5338]/0 hover:bg-[#0B5338]/40 transition-colors flex items-center justify-center opacity-0 hover:opacity-100"
                            >
                              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#15221B] font-bold text-xs shadow-lg">
                                <span>Inspect Live Platform</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </span>
                            </a>
                          </div>
                        </div>

                        {/* Location & Status Line */}
                        <div className="flex items-center justify-between text-xs font-mono text-[#7E9086] px-1">
                          <span>Focus: {proj.location}</span>
                          <span className="text-[#0B5338] font-bold">{proj.status}</span>
                        </div>
                      </div>

                      {/* Right: Project Details & Deliverables */}
                      <div className="lg:col-span-6 space-y-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D95D39]">
                              {proj.category}
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#15221B] tracking-tight">
                            {proj.title}
                          </h3>
                          <p className="text-xs font-medium text-[#7E9086] mt-0.5">
                            {proj.subtitle}
                          </p>
                        </div>

                        <p className="text-sm text-[#4A5B52] leading-relaxed">
                          {proj.summary}
                        </p>

                        {/* Deliverables Checklist */}
                        <div className="space-y-2 pt-2 border-t border-[#F3EFE6]">
                          <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#7E9086] font-bold">
                            Key Architectural Deliverables
                          </h4>
                          <ul className="space-y-1.5">
                            {proj.deliverables.slice(0, 5).map((item, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2.5 text-xs text-[#15221B] leading-relaxed">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5338] mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Optional Client Testimonial */}
                        {proj.testimonial && (
                          <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E2D5] space-y-2">
                            <Quote className="w-4 h-4 text-[#D95D39]" />
                            <p className="text-xs italic text-[#15221B] leading-relaxed">
                              "{proj.testimonial.quote}"
                            </p>
                            <div className="text-[10px] font-mono text-[#7E9086]">
                              <span className="font-bold text-[#15221B]">{proj.testimonial.author}</span> — {proj.testimonial.role}
                            </div>
                          </div>
                        )}

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {proj.tech.map((t, tIdx) => (
                            <span 
                              key={tIdx}
                              className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-[#F3EFE6] border border-[#E8E2D5] text-[#4A5B52]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Launch Button */}
                        <div className="pt-2">
                          <a
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B5338] hover:bg-[#073826] text-white text-xs font-bold tracking-wide transition-all shadow-xs active:scale-95"
                          >
                            <span>Open {proj.domain}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => {
                setActiveIndex(idx);
                setIsPaused(true);
              }}
              aria-label={`Jump to ${proj.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx 
                  ? 'w-10 bg-[#0B5338]' 
                  : 'w-2.5 bg-[#E8E2D5] hover:bg-[#A0AFA7]'
              }`}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl bg-[#0B5338] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-[#0B5338]/10">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Ready for a custom website or business platform?
            </h3>
            <p className="text-sm text-emerald-100/90 mt-1 max-w-xl">
              From business sites and booking engines to maps and automated M-Pesa setups, we deliver production-ready software.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D95D39] hover:bg-[#C24C29] text-white font-semibold text-xs tracking-wide transition-all shadow-md active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}