import React, { useState } from 'react';
import { MapPin, ExternalLink, Send, CheckCircle2, Clock } from 'lucide-react';
import BrandLogo from './BrandLogo';

/**
 * CONTACT CONFIGURATION
 * 
 * Update client direct phone/email below when provided:
 */
const CONTACT_CONFIG = {
  businessName: "VJ Architects",
  tagline: "Architect • Interiors • Landscape Designers",
  address: "Silver Town, Nehru Nagar, Hubballi, Karnataka – 580024, India",
  googleMapsUrl: "https://maps.app.goo.gl/JEiGwEn3GALtcyVU7?g_st=iwb",
  /* Placeholders for client phone and email: */
  phonePlaceholder: "+91 (Add Studio Phone)",
  emailPlaceholder: "contact@vjarchitects.com (Add Studio Email)",
  studioHours: "Monday – Saturday: 9:30 AM – 7:00 PM"
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    projectType: 'Residential Architecture',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate smooth submission for client demo
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAFAF9] text-neutral-900 relative border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00A3B4] uppercase mb-3">
            <span>06 / GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-neutral-900 leading-tight">
            Let’s talk about your project.
          </h2>
          <p className="text-neutral-600 font-light mt-3 text-base sm:text-lg leading-relaxed">
            Whether you are embarking on a new architectural residence, remodeling an interior, or crafting a landscape retreat, we welcome your enquiry.
          </p>
        </div>

        {/* Contact Grid: Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Business Details & Studio Card */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white border border-neutral-200 p-8 rounded-sm shadow-sm space-y-6">
              
              {/* Official Brand Lockup */}
              <div className="border-b border-neutral-100 pb-6">
                <BrandLogo className="h-10 sm:h-12" />
                <div className="text-xs font-mono uppercase tracking-widest text-[#00A3B4] mt-3">
                  {CONTACT_CONFIG.tagline}
                </div>
              </div>

              {/* Studio Address */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-stone-50 border border-neutral-200 rounded-sm shrink-0">
                    <MapPin className="w-5 h-5 text-[#00A3B4]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Studio Location</div>
                    <div className="text-base font-medium text-neutral-900 mt-1 leading-snug">
                      Silver Town, Nehru Nagar,<br />
                      Hubballi, Karnataka – 580024, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-stone-50 border border-neutral-200 rounded-sm shrink-0">
                    <Clock className="w-5 h-5 text-[#00A3B4]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Office Hours</div>
                    <div className="text-sm font-medium text-neutral-800 mt-0.5">
                      {CONTACT_CONFIG.studioHours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <div className="pt-2">
                <a
                  href={CONTACT_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#16191E] text-white px-5 py-3.5 rounded-sm text-xs uppercase tracking-wider font-medium hover:bg-[#00A3B4] transition-all duration-300 shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-[#00A3B4] group-hover:text-white" />
                  <span>View on Google Maps / Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>

            </div>

            {/* Note on direct consultation */}
            <div className="p-5 bg-stone-100/70 border border-neutral-200 rounded-sm text-xs text-neutral-600 font-light leading-relaxed">
              <strong className="font-medium text-neutral-800">Studio Consultations:</strong> Site visits and initial design consultations are scheduled by prior appointment. Submit your project requirements to initiate the discussion.
            </div>

          </div>

          {/* Right Column: Interactive Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-neutral-200 p-8 sm:p-10 rounded-sm shadow-sm">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-teal-50 border border-teal-200 text-[#00A3B4] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-neutral-900">Enquiry Received</h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto font-light leading-relaxed">
                    Thank you for reaching out to VJ Architects. We have received your project details and will review your requirements shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', contactInfo: '', projectType: 'Residential Architecture', message: '' });
                    }}
                    className="mt-4 text-xs font-mono uppercase tracking-wider text-[#00A3B4] hover:underline"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-neutral-100 pb-4 mb-6">
                    <h3 className="text-xl font-serif font-normal text-neutral-900">Project Enquiry Form</h3>
                    <p className="text-xs text-neutral-500 font-light mt-1">
                      Share the preliminary details of your site or interior space.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-neutral-700">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Patil"
                        className="w-full px-4 py-3 bg-stone-50 border border-neutral-300 rounded-sm text-sm focus:outline-none focus:border-[#00A3B4] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Phone / Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contactInfo" className="block text-xs font-mono uppercase tracking-wider text-neutral-700">
                        Phone / Email *
                      </label>
                      <input
                        id="contactInfo"
                        type="text"
                        required
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                        placeholder="e.g. +91 98765 43210 or name@email.com"
                        className="w-full px-4 py-3 bg-stone-50 border border-neutral-300 rounded-sm text-sm focus:outline-none focus:border-[#00A3B4] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-neutral-700">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 border border-neutral-300 rounded-sm text-sm focus:outline-none focus:border-[#00A3B4] focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="Residential Architecture">Residential Architecture / Villa</option>
                      <option value="Interior Design">Interior Design & Spatial Fit-out</option>
                      <option value="Landscape Design">Landscape Design & Courtyards</option>
                      <option value="Integrated Project">Integrated (Architecture + Interiors + Landscape)</option>
                      <option value="Design Consultation">Design Consultation / Feasibility</option>
                      <option value="Commercial Project">Commercial / Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-700">
                      Message / Project Details *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your plot size, location, requirements, or vision..."
                      className="w-full px-4 py-3 bg-stone-50 border border-neutral-300 rounded-sm text-sm focus:outline-none focus:border-[#00A3B4] focus:bg-white transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#16191E] text-white py-3.5 px-6 rounded-sm text-xs font-medium uppercase tracking-wider hover:bg-[#00A3B4] transition-all duration-300 shadow-md disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Embedded Google Map Section */}
        <div className="mt-16 sm:mt-24">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00A3B4]" />
              <span>Studio Location Map — Hubballi, Karnataka</span>
            </div>
            <a
              href={CONTACT_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-[#00A3B4] hover:underline inline-flex items-center gap-1"
            >
              <span>Open in Maps App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="relative w-full h-80 sm:h-96 rounded-sm overflow-hidden border border-neutral-300 shadow-sm bg-stone-200">
            {/* Embedded Google Map iframe centered on Hubballi / Nehru Nagar / Silver Town */}
            <iframe
              title="VJ Architects Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.478951230489!2d75.1221!3d15.3647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d73456789abc%3A0x1234567890abcdef!2sSilver%20Town%2C%20Nehru%20Nagar%2C%20Hubballi%2C%20Karnataka%20580024!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-[1.02]"
            />
            
            {/* Custom Location Overlay Card */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-sm border border-neutral-200 shadow-lg max-w-xs hidden sm:block">
              <div className="text-xs font-bold text-neutral-900">VJ ARCHITECTS</div>
              <div className="text-[11px] text-neutral-600 mt-1 leading-snug">
                Silver Town, Nehru Nagar, Hubballi, Karnataka 580024
              </div>
              <a
                href={CONTACT_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-mono text-[#00A3B4] hover:underline"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
