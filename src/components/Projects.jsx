import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ArrowUpRight, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Residential', 'Interiors', 'Landscape'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#FAFAF9] text-neutral-900 relative border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00A3B4] uppercase mb-3">
              <span>03 / PORTFOLIO</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-neutral-900">
              Selected Projects
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-light mt-2 font-serif italic">
              Spaces that speak for themselves.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white border border-neutral-200 rounded-sm shadow-sm">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-200 rounded-sm ${
                  activeFilter === filter
                    ? 'bg-[#16191E] text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-stone-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white border border-neutral-200/90 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Project Card Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-[11px] font-mono uppercase tracking-widest text-neutral-900 font-semibold rounded-xs shadow-xs">
                    {project.category}
                  </span>
                </div>

                {/* Hover Reveal Action */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2.5 bg-[#00A3B4] text-white rounded-full shadow-lg">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-neutral-400 tracking-wider uppercase mb-1">
                    {project.subtitle}
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-neutral-900 group-hover:text-[#00A3B4] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light mt-2.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>{project.scope}</span>
                  <span className="flex items-center gap-1 text-[#00A3B4] font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>EXPLORE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Client Demo Swapping Notice Footer */}
        <div className="mt-16 text-center text-xs text-neutral-400 font-mono">
          * Representative demo portfolio showcasing spatial categorization and layout standards.
        </div>

      </div>

      {/* Selected Project Full Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
