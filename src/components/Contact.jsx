import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, Clock, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/config';

const projectTypes = [
  "Custom Website or Web App",
  "Disaster & Emergency Alert Tool",
  "Maps & Location Tracking",
  "M-Pesa Payment Integration",
  "Online Booking System",
  "Domain, Email & Server Setup"
];

export default function Contact() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Hello Brian, I have a project inquiry:*%0A%0A*Name:* ${formData.name}%0A*Phone/Email:* ${formData.contact}%0A*Type of Project:* ${selectedType}%0A*Project Details:* ${formData.details}`;
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-[#FBF9F5] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Simple Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#D95D39] font-bold mb-3">
            <span>Get in Touch</span>
            <span className="text-[#E8E2D5]">/</span>
            <span className="text-[#4A5B52]">Direct Contact</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#15221B] tracking-tight leading-tight">
            Let’s talk about your project.
          </h2>
          <p className="mt-3 text-base text-[#4A5B52] leading-relaxed">
            Need a new website, a custom web app, maps, or M-Pesa payments? Send a message directly to Brian Karani.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Side: Contact Methods */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-white border border-[#E8E2D5] p-6 sm:p-7 space-y-4 shadow-xs">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7E9086] border-b border-[#F3EFE6] pb-3">
                How to Reach Us
              </h3>

              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Brian,%20I'd%20like%20to%20discuss%20a%20new%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FBF9F5] border border-transparent hover:border-[#E8E2D5] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#0B5338] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase font-bold text-[#D95D39]">Quick Reply</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#7E9086] group-hover:text-[#0B5338] transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-[#15221B]">WhatsApp</h4>
                  <p className="text-xs text-[#4A5B52]">+254 711 317 540</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:briangicovi6@gmail.com"
                className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FBF9F5] border border-transparent hover:border-[#E8E2D5] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#D95D39] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase font-bold text-[#7E9086]">Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#7E9086] group-hover:text-[#0B5338] transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-[#15221B]">Send an Email</h4>
                  <p className="text-xs text-[#4A5B52]">briangicovi6@gmail.com</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3.5 p-3">
                <div className="w-10 h-10 rounded-xl bg-[#F3EFE6] border border-[#E8E2D5] flex items-center justify-center text-[#15221B] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-[#7E9086]">Based in</span>
                  <h4 className="text-sm font-bold text-[#15221B]">Nairobi & Embu, Kenya</h4>
                  <p className="text-xs text-[#4A5B52]">Available for in-person meetings and remote projects.</p>
                </div>
              </div>
            </div>

            {/* Quick Note */}
            <div className="rounded-2xl bg-[#0B5338] text-white p-6 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold">
                <Clock className="w-4 h-4" />
                <span>Fast Response</span>
              </div>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                You speak directly with the developer building your site. I usually reply within a few hours on business days.
              </p>
            </div>

          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E8E2D5] p-7 sm:p-9 shadow-xs">
              
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#15221B] tracking-tight mb-1.5">
                Tell us what you need
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5B52] mb-6 leading-relaxed">
                Pick an option below and write a short message. It will open directly in WhatsApp so we can chat immediately.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Options */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7E9086] font-bold mb-2.5">
                    What are you looking to build?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {projectTypes.map((type, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setSelectedType(type)}
                        className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                          selectedType === type
                            ? 'bg-[#0B5338] text-white border-[#0B5338]'
                            : 'bg-[#FBF9F5] text-[#15221B] border-[#E8E2D5] hover:border-[#A0AFA7]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#7E9086] font-bold mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samuel Mwangi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D5] bg-[#FBF9F5] text-sm text-[#15221B] placeholder-[#A0AFA7] focus:outline-none focus:border-[#0B5338] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#7E9086] font-bold mb-1">
                      Phone Number or Email
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="07... or name@email.com"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D5] bg-[#FBF9F5] text-sm text-[#15221B] placeholder-[#A0AFA7] focus:outline-none focus:border-[#0B5338] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7E9086] font-bold mb-1">
                    Short Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you want built, when you want it ready, and any special features you need..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D5] bg-[#FBF9F5] text-sm text-[#15221B] placeholder-[#A0AFA7] focus:outline-none focus:border-[#0B5338] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0B5338] hover:bg-[#073826] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message on WhatsApp</span>
                </button>

                {submitted && (
                  <div className="flex items-center gap-2 text-xs font-medium text-[#0B5338] bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Opening WhatsApp with your details...</span>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}