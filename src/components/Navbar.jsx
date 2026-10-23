import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { siteConfig } from '../data/config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20${encodeURIComponent(siteConfig.name)},%20I'd%20like%20to%20discuss%20a%20project.`;

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-3">
              <Logo className="h-8 w-auto text-[#0B5338]" />
              <span className="font-bold text-lg tracking-tight text-[#15221B]">
                {siteConfig.name}
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#4A5B52] hover:text-[#0B5338] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Burnt Coral CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D95D39] hover:bg-[#C24C29] text-white text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-[#15221B] hover:bg-[#F3EFE6]"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-[#E8E2D5] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-[#15221B] hover:bg-[#F3EFE6] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#D95D39] text-white font-semibold text-sm transition-all"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}