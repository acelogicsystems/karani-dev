import React from 'react';
import { ArrowUp, MessageSquare, Mail } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#15221B] text-[#FBF9F5] border-t border-[#23352A] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#23352A]">
          
          {/* Studio Brand & One-Liner */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B5338] border border-emerald-400" />
              <span className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                Karani Systems
              </span>
            </div>
            
            <p className="text-sm text-[#A0AFA7] max-w-sm leading-relaxed">
              We design and build clean websites, custom software, and mapping tools for businesses and organizations across Kenya.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* GitHub */}
              <a
                href="https://github.com/BrianGicovi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-[#23352A] hover:bg-[#0B5338] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/brian-karani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#23352A] hover:bg-[#0B5338] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6H9.2v-7.6H6.46M7.83 6.75a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Brian,%20I'd%20like%20to%20chat%20about%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-[#23352A] hover:bg-[#0B5338] text-white flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Email */}
              <a
                href="mailto:briangicovi6@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-[#23352A] hover:bg-[#0B5338] text-white flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D95D39]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#A0AFA7]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">What We Do</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Operational Base */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D95D39]">
              Operations
            </h4>
            <div className="text-sm text-[#A0AFA7] space-y-1 leading-relaxed">
              <p className="text-white font-medium">Nairobi & Embu, Kenya</p>
              <p>Direct: +254 758 244 586</p>
              <p>Email: briangicovi6@gmail.com</p>
              <p className="pt-2 text-xs font-mono text-emerald-400">
                ● Accepting new client projects
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7E9086]">
          <p>© {currentYear} Karani Systems. Built with pride in Kenya.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}