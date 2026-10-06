import React from 'react';
import { MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import BrandLogo from './BrandLogo';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Architecture',
    'Interior Design',
    'Landscape Design',
    'Design Consultation'
  ];

  return (
    <footer className="bg-[#0E1013] text-stone-300 pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/95 p-3 rounded-sm w-fit">
              <BrandLogo className="h-10 sm:h-12" />
            </div>

            <div className="space-y-1">
              <p className="text-white font-medium text-base">VJ Architects</p>
              <p className="text-xs font-mono uppercase tracking-widest text-[#00A3B4]">
                Architect • Interiors • Landscape Designers
              </p>
            </div>

            <p className="text-sm text-stone-400 font-light max-w-sm leading-relaxed">
              Designing spaces that belong. Shaping residential, interior, and landscape environments across Hubballi and Karnataka.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#00A3B4] shrink-0 mt-0.5" />
              <span>Silver Town, Nehru Nagar, Hubballi, Karnataka – 580024, India</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white">
              Studio Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-[#00A3B4] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              {services.map((item, i) => (
                <li key={i} className="hover:text-stone-200 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Directions Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white">
              Location
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Hubballi, Karnataka – 580024
            </p>
            <a
              href="https://maps.app.goo.gl/JEiGwEn3GALtcyVU7?g_st=iwb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#00A3B4] hover:text-teal-300 transition-colors pt-2"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <div>
            © {CURRENT_YEAR} VJ Architects. All rights reserved. Hubballi, Karnataka.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
