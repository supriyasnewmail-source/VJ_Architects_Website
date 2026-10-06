import React from 'react';

export default function About() {
  const pillars = [
    {
      title: 'Contextual Integration',
      desc: 'Grounding structures in their natural geography, orientation, and urban fabric.'
    },
    {
      title: 'Material Honesty',
      desc: 'Emphasizing authentic textures, natural light modulation, and lasting craftsmanship.'
    },
    {
      title: 'Human Experience',
      desc: 'Shaping spaces tailored around how clients inhabit, move, and find calm every day.'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAFAF9] text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Architectural Heading & Brand Tag */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00A3B4] uppercase">
              <span>01 / ABOUT STUDIO</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-neutral-900 leading-[1.12]">
              Design with purpose.<br />
              <span className="italic text-neutral-600 font-light">Built for life.</span>
            </h2>

            <div className="w-16 h-[2px] bg-[#00A3B4]" />

            <div className="pt-4 text-xs font-mono uppercase tracking-widest text-neutral-500">
              VJ ARCHITECTS • HUBBALLI, KARNATAKA
            </div>
          </div>

          {/* Right Column: Thoughtful Copy strictly following user guidelines */}
          <div className="lg:col-span-7 space-y-6 text-neutral-700 text-base sm:text-lg leading-relaxed font-light">
            <p className="text-xl sm:text-2xl font-normal text-neutral-900 leading-snug font-serif">
              VJ Architects brings together Architecture, Interior Design, and Landscape Design to deliver a unified, complete spatial experience.
            </p>

            <p>
              We believe meaningful architecture emerges from a deep understanding of context, functionality, and aesthetics. Every line drawn is guided by the client’s unique requirements and lifestyle, creating environments that feel effortless, enduring, and responsive to climate and light.
            </p>

            <p>
              By harmonizing structural form, refined interior character, and living outdoor landscapes into a singular vision, our studio ensures that every space is thoughtfully conceived and built for life.
            </p>

            {/* Three Disciplines Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-200/80">
              <div className="p-4 bg-white border border-stone-200/80 rounded-sm shadow-sm hover:border-[#00A3B4]/40 transition-colors">
                <div className="text-xs font-mono text-[#00A3B4] font-semibold mb-1">DISCIPLINE 01</div>
                <div className="text-sm font-semibold text-neutral-900">Architecture</div>
                <div className="text-xs text-neutral-500 mt-1">Form, structure & environmental harmony.</div>
              </div>

              <div className="p-4 bg-white border border-stone-200/80 rounded-sm shadow-sm hover:border-[#00A3B4]/40 transition-colors">
                <div className="text-xs font-mono text-[#00A3B4] font-semibold mb-1">DISCIPLINE 02</div>
                <div className="text-sm font-semibold text-neutral-900">Interior Design</div>
                <div className="text-xs text-neutral-500 mt-1">Materiality, proportion & ambient comfort.</div>
              </div>

              <div className="p-4 bg-white border border-stone-200/80 rounded-sm shadow-sm hover:border-[#00A3B4]/40 transition-colors">
                <div className="text-xs font-mono text-[#00A3B4] font-semibold mb-1">DISCIPLINE 03</div>
                <div className="text-sm font-semibold text-neutral-900">Landscape Design</div>
                <div className="text-xs text-neutral-500 mt-1">Outdoor biophilia & contextual terrain.</div>
              </div>
            </div>

          </div>

        </div>

        {/* Studio Visual & Architectural Imagery Banner */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 relative overflow-hidden rounded-sm group">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
              alt="Architectural Materiality and Light — VJ Architects"
              className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-neutral-950/20" />
            <div className="absolute bottom-4 left-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 text-[11px] text-white font-mono tracking-wider">
              MATERIALITY & LIGHT PALETTE
            </div>
          </div>

          <div className="md:col-span-5 space-y-4">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="p-5 bg-white border border-stone-200/80 rounded-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-base font-medium text-neutral-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3B4]" />
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
