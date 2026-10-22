import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20${encodeURIComponent(siteConfig.name)},%20I'd%20like%20to%20discuss%20an%20engineering%20project.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Hover tooltip label */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-200 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-950/40 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Pulsing presence dot */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-slate-950"></span>
        </span>
        
        <MessageCircle className="w-7 h-7 fill-slate-950 stroke-slate-950" />
      </a>
    </div>
  );
}