import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['hero', 'about', 'services', 'projects', 'approach', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Approach', href: '#approach', id: 'approach' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3.5' 
          : 'bg-gradient-to-b from-white/90 via-white/70 to-transparent py-5 backdrop-blur-[2px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand on Left */}
          <a 
            href="#hero" 
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
            aria-label="VJ Architects - Return to top"
          >
            <BrandLogo className="h-10 sm:h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-xs lg:text-sm tracking-wider uppercase font-medium transition-all duration-200 rounded-md relative ${
                    isActive 
                      ? 'text-neutral-900 font-semibold' 
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-stone-100/70'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#00A3B4] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#16191E] text-white text-xs lg:text-sm font-medium tracking-wider uppercase px-5 py-2.5 rounded-sm hover:bg-[#00A3B4] transition-all duration-300 shadow-sm hover:shadow"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-neutral-800 hover:text-neutral-950 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-[#00A3B4]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 shadow-xl transition-all duration-300 animate-fadeIn">
          <div className="px-6 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 text-sm uppercase tracking-wider font-medium rounded-sm ${
                  activeSection === link.id
                    ? 'text-[#00A3B4] bg-stone-50 font-semibold'
                    : 'text-neutral-700 hover:text-neutral-900 hover:bg-stone-50'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-stone-100 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#16191E] text-white text-sm font-medium tracking-wider uppercase px-5 py-3 rounded-sm hover:bg-[#00A3B4] transition-colors"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 text-xs text-neutral-500 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#00A3B4] shrink-0" />
                <span>Silver Town, Nehru Nagar, Hubballi</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
