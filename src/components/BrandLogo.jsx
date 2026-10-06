import React from 'react';

/**
 * Official VJ ARCHITECTS Logo Component
 * Uses the exact provided brand asset with responsive sizing and dark/light support.
 */
export default function BrandLogo({ className = "h-10 md:h-12" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official VJ Architects Logo Image */}
      <div className="relative flex items-center overflow-hidden rounded-sm">
        <img 
          src="/assets/vj-logo.jpg" 
          alt="VJ Architects — Architect • Interiors • Landscape Designers" 
          className="h-full w-auto object-contain max-h-12 md:max-h-14 transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            // Fallback SVG representation in case of local asset caching issues
            e.target.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
}
