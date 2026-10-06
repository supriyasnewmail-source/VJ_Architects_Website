import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF9] relative border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Selected Dark Architectural Emphasis Card */}
        <div className="relative overflow-hidden bg-[#16191E] rounded-sm p-10 sm:p-16 lg:p-20 text-white shadow-xl border border-stone-800/80">
          
          {/* Subtle Accent Glow & Grid */}
          <div className="absolute inset-0 arch-grid-pattern-dark opacity-15 pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#00A3B4]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-stone-300 text-xs font-mono uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3B4]" />
              <span>START YOUR SPATIAL JOURNEY</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-white tracking-tight leading-tight">
              Have a space in mind?
            </h2>

            <p className="text-base sm:text-xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
              Let’s create a space that reflects your vision.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-white text-neutral-950 px-8 py-4 rounded-sm font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-[#00A3B4] hover:text-white transition-all duration-300 shadow-lg"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="pt-6 text-xs font-mono text-stone-400 uppercase tracking-widest">
              ARCHITECTURE • INTERIORS • LANDSCAPE DESIGNERS • HUBBALLI
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
