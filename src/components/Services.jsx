import React from 'react';
import { servicesData } from '../data/servicesData';
import { Building2, Palette, Trees, Compass, ArrowRight, Check } from 'lucide-react';

export default function Services() {
  const getIcon = (num) => {
    switch (num) {
      case '01':
        return <Building2 className="w-6 h-6 text-[#00A3B4]" strokeWidth={1.5} />;
      case '02':
        return <Palette className="w-6 h-6 text-[#00A3B4]" strokeWidth={1.5} />;
      case '03':
        return <Trees className="w-6 h-6 text-[#00A3B4]" strokeWidth={1.5} />;
      case '04':
        return <Compass className="w-6 h-6 text-[#00A3B4]" strokeWidth={1.5} />;
      default:
        return <Building2 className="w-6 h-6 text-[#00A3B4]" strokeWidth={1.5} />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAFAF9] text-neutral-900 relative border-t border-stone-200/80">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-stone-200/80 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00A3B4] uppercase mb-3">
              <span>02 / CORE EXPERTISE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-neutral-900 leading-[1.12]">
              Our Services
            </h2>
          </div>
          <p className="text-neutral-600 font-light max-w-md text-sm sm:text-base leading-relaxed">
            Comprehensive spatial disciplines delivered with cohesive aesthetic harmony and structural precision.
          </p>
        </div>

        {/* 4 Elegant Service Cards in Warm Off-White Architectural Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.number}
              className="group relative bg-white border border-stone-200/90 hover:border-[#00A3B4]/50 p-7 sm:p-8 rounded-sm transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl shadow-sm"
            >
              {/* Card Top: Number & Line Icon */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-mono text-stone-400 font-light group-hover:text-[#00A3B4] transition-colors">
                    {service.number}
                  </span>
                  <div className="p-2.5 rounded-sm bg-stone-50 border border-stone-200 group-hover:bg-teal-50/60 group-hover:border-teal-200 transition-colors">
                    {getIcon(service.number)}
                  </div>
                </div>

                {/* Subtitle & Title */}
                <div className="text-[11px] font-mono tracking-widest text-[#00A3B4] uppercase mb-1">
                  {service.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-neutral-900 mb-4 group-hover:text-[#00A3B4] transition-colors">
                  {service.title}
                </h3>

                {/* Exact Verified Description */}
                <p className="text-neutral-600 text-sm leading-relaxed font-light mb-6">
                  {service.description}
                </p>
              </div>

              {/* Service Details List */}
              <div className="pt-6 border-t border-stone-100 space-y-2.5">
                {service.details.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                    <Check className="w-3.5 h-3.5 text-[#00A3B4] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#00A3B4] transition-colors rounded-b-sm" />
            </div>
          ))}
        </div>

        {/* Bottom Consultation Box */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:px-8 sm:py-4 bg-white border border-stone-200 rounded-sm shadow-sm">
            <span className="text-neutral-700 text-sm">Need a tailored solution combining all disciplines?</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00A3B4] hover:text-neutral-900 transition-colors"
            >
              <span>Discuss Project Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
