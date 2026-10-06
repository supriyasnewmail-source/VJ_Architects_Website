import React from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-white text-neutral-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 text-neutral-800 hover:bg-neutral-900 hover:text-white transition-colors shadow-md"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Header */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-sm bg-[#00A3B4] text-white text-xs font-mono uppercase tracking-widest mb-2">
              {project.category}
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-normal">{project.title}</h3>
            <p className="text-stone-300 text-sm font-light mt-1">{project.subtitle}</p>
          </div>
        </div>

        {/* Project Details Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Demo Notice for Client */}
          <div className="p-3 bg-stone-100 border-l-2 border-[#00A3B4] text-xs text-neutral-600 font-mono">
            <strong>Client Demo Notice:</strong> This project card demonstrates visual hierarchy and typography. Photos and details are placeholders ready to be swapped with VJ Architects completed site photos.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Spatial Concept & Brief</h4>
              <p className="text-neutral-700 text-base leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div className="space-y-4 border-l border-neutral-200 md:pl-6">
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase">Discipline</div>
                <div className="text-sm font-medium text-neutral-900 mt-0.5">{project.scope}</div>
              </div>

              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase">Region</div>
                <div className="text-sm font-medium text-neutral-900 mt-0.5">{project.location}</div>
              </div>

              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase">Studio</div>
                <div className="text-sm font-medium text-neutral-900 mt-0.5">VJ Architects</div>
              </div>
            </div>
          </div>

          {/* Key Architectural Features */}
          <div className="pt-4 border-t border-neutral-200">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">Key Design Elements</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-neutral-700 bg-stone-50 p-2.5 rounded-sm border border-neutral-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3B4] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-500">
              Interested in a similar spatial design?
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-[#16191E] text-white text-xs uppercase tracking-wider font-medium px-5 py-2.5 rounded-sm hover:bg-[#00A3B4] transition-colors"
            >
              <span>Enquire About Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
