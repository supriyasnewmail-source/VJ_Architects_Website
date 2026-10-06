import React, { useState } from 'react';
import { ArrowDown, ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * HERO COMPONENT
 * 
 * Featured Architectural Hero Visuals:
 * - Option 1: Modern Tropical Luxury Villa with Timber Louvers & Reflection Pool
 * - Option 2: Minimalist Raw Concrete & Zen Courtyard Residence
 * - Option 3: Modern Cantilever Pavilion
 * 
 * Replace with client's actual photography when ready.
 */
const HERO_IMAGES = [
  {
    url: '/assets/hero-architecture.jpg',
    title: 'Modern Tropical Villa & Reflecting Pool',
    category: 'Architecture • Interiors • Landscape'
  },
  {
    url: '/assets/hero-architecture-2.jpg',
    title: 'Monolithic Concrete & Zen Courtyard Residence',
    category: 'Architectural Form & Biophilic Light'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=90',
    title: 'Contemporary Glass & Stone Estate',
    category: 'Spatial Geometry & Materiality'
  }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[94vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0F1115]"
    >
      {/* Background Architectural Image with Smooth Transition */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
            />
          </div>
        ))}

        {/* Sophisticated Architectural Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/50 to-[#0F1115]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115]/85 via-[#0F1115]/40 to-transparent" />
        <div className="absolute inset-0 arch-grid-pattern-dark opacity-20 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center sm:text-left pt-6 sm:pt-12">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Brand Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3B4] animate-pulse" />
            <span>Architect • Interiors • Landscape Designers</span>
          </div>

          {/* Main Hero Architectural Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] tracking-tight font-normal drop-shadow-sm">
            Designing spaces <br />
            <span className="italic font-light text-stone-200">that belong.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl md:text-2xl text-stone-200 font-light max-w-2xl leading-relaxed tracking-wide drop-shadow-sm">
            Architecture, interiors and landscape design shaped around people, place and purpose.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 sm:pt-6">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 bg-white text-neutral-950 px-7 py-3.5 rounded-sm font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-[#00A3B4] hover:text-white transition-all duration-300 shadow-xl"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-neutral-900/40 text-white border border-white/40 px-7 py-3.5 rounded-sm font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 backdrop-blur-md"
            >
              <span>Start a Conversation</span>
            </a>
          </div>

        </div>

        {/* Hero Bottom Bar with Interactive View Switcher & Studio Location */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300 font-mono tracking-wider">
          
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#00A3B4]" />
            <span>HUBBALLI, KARNATAKA — 580024</span>
          </div>

          {/* Interactive Hero View Controls */}
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[11px]">
            <span className="text-stone-400">HERO VIEW:</span>
            <span className="text-white font-semibold">{currentImageIndex + 1}/{HERO_IMAGES.length}</span>
            <div className="flex items-center gap-1 border-l border-white/20 pl-2">
              <button 
                onClick={prevImage} 
                className="p-1 text-stone-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                aria-label="Previous hero image"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={nextImage} 
                className="p-1 text-stone-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                aria-label="Next hero image"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <a 
            href="#about" 
            className="flex items-center gap-2 text-stone-300 hover:text-[#00A3B4] transition-colors group cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span>EXPLORE STUDIO</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
