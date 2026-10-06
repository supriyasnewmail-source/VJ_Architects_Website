import React from 'react';
import { approachData } from '../data/approachData';

export default function Approach() {
  return (
    <section id="approach" className="py-24 sm:py-32 bg-[#FAFAF9] text-neutral-900 relative border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00A3B4] uppercase mb-3">
            <span>04 / METHODOLOGY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-neutral-900">
            Our Approach
          </h2>
          <p className="text-neutral-600 font-light mt-4 text-base sm:text-lg max-w-2xl leading-relaxed">
            A structured, iterative design methodology translating abstract ideas and site conditions into enduring built spaces.
          </p>
        </div>

        {/* 4 Steps Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {approachData.map((step, index) => (
            <div 
              key={step.step}
              className="relative bg-white border border-neutral-200/90 p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#00A3B4]/50"
            >
              {/* Step Number with Line Accent */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100 mb-6">
                  <span className="text-3xl font-mono text-neutral-900 font-light group-hover:text-[#00A3B4] transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                    PHASE {index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-normal text-neutral-900 mb-3 group-hover:text-neutral-950">
                  {step.title}
                </h3>

                {/* Exact Verified Summary from Prompt */}
                <p className="text-sm font-medium text-neutral-800 leading-snug mb-3 font-sans">
                  {step.summary}
                </p>

                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light mb-6">
                  {step.description}
                </p>
              </div>

              {/* Phase Deliverables */}
              <div className="pt-4 border-t border-neutral-100">
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-2">
                  Key Outcomes
                </div>
                <ul className="space-y-1.5">
                  {step.deliverables.map((d, i) => (
                    <li key={i} className="text-xs text-neutral-600 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#00A3B4]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#00A3B4] transition-colors" />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
