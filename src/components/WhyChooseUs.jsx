import React from 'react';
import { Layers, Lightbulb, Box, Users, ZoomIn } from 'lucide-react';

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: <Layers className="w-6 h-6 text-[#00A3B4]" strokeWidth={1.5} />,
      title: 'Integrated Architecture + Interiors + Landscape',
      description: 'A unified single-studio vision where the building envelope, internal living spaces, and natural surroundings speak a singular design language without disjointed handoffs.'
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#00A3B4]" strokeWidth={1.5} />,
      title: 'Thoughtful Design',
      description: 'Every form, opening, and material choice is deliberate—driven by site orientation, climatic conditions, spatial proportion, and contextual sensitivity.'
    },
    {
      icon: <Box className="w-6 h-6 text-[#00A3B4]" strokeWidth={1.5} />,
      title: 'Functional Spaces',
      description: 'Aesthetic elegance balanced with practical daily utility. We design layouts that optimize movement, daylight, natural ventilation, and long-term livability.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#00A3B4]" strokeWidth={1.5} />,
      title: 'Client-Centered Approach',
      description: 'Your brief, lifestyle, and aspirations remain central from first sketches to final realization. We work collaboratively to craft spaces tailored to your vision.'
    },
    {
      icon: <ZoomIn className="w-6 h-6 text-[#00A3B4]" strokeWidth={1.5} />,
      title: 'Attention to Detail',
      description: 'From macro structural massing down to micro joinery junctions, material junctions, and lighting temperatures, no nuance is left unconsidered.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAFAF9] text-neutral-900 relative border-t border-stone-200/80">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00A3B4] uppercase mb-3">
            <span>05 / STUDIO VALUES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-neutral-900 leading-[1.12]">
            Why Choose Us
          </h2>
          <p className="text-neutral-600 font-light mt-4 text-base sm:text-lg max-w-2xl leading-relaxed">
            Our commitment is to deliver cohesive architectural excellence rooted in integrity, spatial intelligence, and precision.
          </p>
        </div>

        {/* Highlights Grid in Warm Off-White Architectural Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {highlights.map((item, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={index}
                className={`p-8 bg-white border border-stone-200/90 rounded-sm hover:border-[#00A3B4]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                  isFirst ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white via-white to-stone-50/70 border-stone-300/80' : ''
                }`}
              >
                <div>
                  <div className="p-3 bg-stone-50 border border-stone-200 w-fit rounded-sm mb-6 group-hover:bg-teal-50/60 group-hover:border-teal-200 transition-colors">
                    {item.icon}
                  </div>
                  
                  <h3 className={`font-serif font-normal text-neutral-900 mb-3 group-hover:text-[#00A3B4] transition-colors ${
                    isFirst ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                  }`}>
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3B4]" />
                  <span>CORE PILLAR 0{index + 1}</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
