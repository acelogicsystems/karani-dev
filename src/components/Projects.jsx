import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/config';

const projects = [
  {
    id: "seculink",
    title: "SecuLink Security Portal",
    category: "Security & Verification",
    status: "Live Website",
    url: "https://seculink-website.netlify.app/",
    domain: "seculink-website.netlify.app",
    summary: "A modern, fast-loading business website designed for a security company to onboard clients and display their security services.",
    problem: "The client needed a trustworthy online presence where potential customers could easily view services and submit inquiries without phone delays.",
    whatWeBuilt: [
      "Fast, mobile-friendly website that opens instantly on phone bundles",
      "Simple online inquiry form for new client requests",
      "Clean corporate design that builds trust with corporate clients"
    ],
    tech: ["React", "Tailwind CSS", "Netlify Edge"],
    logo: (
      <svg className="w-6 h-6 fill-[#00C7B7]" viewBox="0 0 24 24">
        <path d="M6.49 19.09l.77.77A8.99 8.99 0 013 12c0-2.07.7-3.97 1.88-5.49l.76.76C4.6 8.57 4 10.22 4 12c0 2.76 1.34 5.21 3.4 6.74l-.91.35zm11.02 0l-.77.77A8.99 8.99 0 0021 12c0-2.07-.7-3.97-1.88-5.49l-.76.76c1.04 1.3 1.64 2.95 1.64 4.73 0 2.76-1.34 5.21-3.4 6.74l.91.35zM12 2a9.96 9.96 0 00-6.9 2.79l.73.73A8.95 8.95 0 0112 3c4.97 0 9 4.03 9 9 0 1.95-.62 3.75-1.68 5.22l.73.73A9.96 9.96 0 0022 12c0-5.52-4.48-10-10-10zm0 4a6 6 0 100 12 6 6 0 000-12zm0 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"/>
      </svg>
    )
  },
  {
    id: "booking-saas",
    title: "Hazel Booking System",
    category: "Online Reservations",
    status: "Live Demo",
    url: "https://booking-saas-hazel.vercel.app/",
    domain: "booking-saas-hazel.vercel.app",
    summary: "An automated appointment booking web app where customers can check available calendar slots and reserve appointments directly.",
    problem: "Small businesses waste hours back-and-forth on WhatsApp and calls trying to agree on appointment dates with customers.",
    whatWeBuilt: [
      "Interactive calendar showing available and booked dates in real time",
      "Instant booking confirmation without needing a phone call",
      "Designed specifically to work smoothly on mobile phone browsers"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    logo: (
      <svg className="w-6 h-6 fill-[#15221B]" viewBox="0 0 24 24">
        <path d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
    )
  },
  {
    id: "iclub-portal",
    title: "Campus Innovation Club Portal",
    category: "Student & Community Platform",
    status: "Live v1",
    url: "https://iclub-portal-one.vercel.app/",
    domain: "iclub-portal-one.vercel.app",
    summary: "A community platform built for a university innovation club to showcase student tech projects and collect feedback during pitch events.",
    problem: "Student innovators had no central place to publish their projects or collect structured feedback from attendees during demo days.",
    whatWeBuilt: [
      "Feedback collection system for people testing student prototypes",
      "Directory of club projects and hackathon presentations",
      "Clean, modern layout that represents the campus tech community"
    ],
    tech: ["Next.js", "React", "REST APIs", "Vercel"],
    logo: (
      <svg className="w-6 h-6 fill-[#15221B]" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.666 17.514L10.4 7.697h-2.12v8.606h1.724v-6.33l6.096 8.541c.524-.316 1.014-.687 1.466-1.1zm-4.782-12.72c4.137 1.066 7.234 4.544 7.747 8.877L14.73 5.405l-1.846-.61z"/>
      </svg>
    )
  },
  {
    id: "imaragrid",
    title: "ImaraGrid Power Monitor",
    category: "Energy & Climate Tech",
    status: "Project Archive",
    url: "https://imaragrid.vercel.app/",
    domain: "imaragrid.vercel.app",
    summary: "An early resilience dashboard designed to track local electricity reliability and warn users of impending power blackouts.",
    problem: "Businesses and small clinics lose expensive equipment and data when power goes out without any advance warning.",
    whatWeBuilt: [
      "Visual status board showing whether power is stable or unstable",
      "Lightweight dashboard that opens fast even on slow 3G connections",
      "Foundational research that shaped our later disaster alert tools"
    ],
    tech: ["React", "Analytics", "Vercel", "Vite"],
    logo: (
      <svg className="w-6 h-6 fill-[#D95D39]" viewBox="0 0 24 24">
        <path d="M11 2v4.07C7.61 6.55 4.93 9.39 4.29 13H1v2h3.29c.64 3.61 3.32 6.45 6.71 6.93V26h2v-4.07c3.39-.48 6.07-3.32 6.71-6.93H23v-2h-3.29c-.64-3.61-3.32-6.45-6.71-6.93V2h-2zm1 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"/>
      </svg>
    )
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically slide to the next project every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Brian,%20I'd%20like%20to%20discuss%20a%20project.`;

  return (
    <section id="projects" className="relative bg-[#FBF9F5] py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Simple, Clear Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#D95D39] font-bold mb-3">
            <span>Our Work</span>
            <span className="text-[#E8E2D5]">/</span>
            <span className="text-[#4A5B52]">Live Websites & Apps</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#15221B] tracking-tight leading-tight">
            Real systems we have built and launched.
          </h2>
          <p className="mt-3 text-base text-[#4A5B52]">
            Take a look at some of the platforms we have designed, coded, and deployed online.
          </p>
        </div>

        {/* The Carousel Container */}
        <div className="overflow-hidden rounded-3xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((proj, idx) => (
              <div 
                key={proj.id}
                className="w-full flex-shrink-0"
              >
                <div className="bg-white rounded-3xl border border-[#E8E2D5] p-7 sm:p-12 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Project Identity */}
                    <div className="lg:col-span-5 space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-[#F3EFE6] border border-[#E8E2D5] flex items-center justify-center">
                          {proj.logo}
                        </div>
                        <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#0B5338]/10 text-[#0B5338] font-bold">
                          {proj.status}
                        </span>
                      </div>

                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D95D39] block mb-1">
                          {proj.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#15221B] tracking-tight">
                          {proj.title}
                        </h3>
                        <p className="text-xs font-mono text-[#7E9086] mt-1">
                          {proj.domain}
                        </p>
                      </div>

                      <p className="text-sm text-[#4A5B52] leading-relaxed">
                        {proj.summary}
                      </p>

                      {/* Tech Used */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.tech.map((t, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-[#F3EFE6] border border-[#E8E2D5] text-[#4A5B52]"
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
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B5338] hover:bg-[#073826] text-white text-xs font-bold tracking-wide transition-all shadow-xs active:scale-95"
                        >
                          <span>Visit Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Problem & What Was Built */}
                    <div className="lg:col-span-7 lg:border-l lg:border-[#F3EFE6] lg:pl-10 space-y-6">
                      <div className="bg-[#FBF9F5] p-5 rounded-2xl border border-[#E8E2D5]">
                        <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#7E9086] font-bold mb-1.5">
                          The Challenge
                        </h4>
                        <p className="text-sm text-[#15221B] leading-relaxed">
                          {proj.problem}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#7E9086] font-bold mb-3">
                          What We Delivered
                        </h4>
                        <ul className="space-y-2.5">
                          {proj.whatWeBuilt.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A5B52] leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D95D39] mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Slide Indicators at the Bottom */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to project ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx 
                  ? 'w-8 bg-[#0B5338]' 
                  : 'w-2 bg-[#E8E2D5] hover:bg-[#A0AFA7]'
              }`}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl bg-[#0B5338] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-[#0B5338]/10">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Have an idea or project you want to build?
            </h3>
            <p className="text-sm text-emerald-100/90 mt-1 max-w-xl">
              From company websites to custom software and maps, tell us what you need and we’ll get it done.
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