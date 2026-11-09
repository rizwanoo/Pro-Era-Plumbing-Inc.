import React, { useState } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, ExternalLink, ShieldCheck, CheckCircle2, Filter } from 'lucide-react';
import { COMPANY_INFO, PROJECTS } from '../data/company';
import { EstimateForm } from '../components/EstimateForm';

interface WorkAboutContactPageProps {
  onSelectServiceForEstimate: (serviceTitle: string, projectType: string) => void;
}

export const WorkAboutContactPage: React.FC<WorkAboutContactPageProps> = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<string | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'custom-home', label: 'Custom Homes' },
    { id: 'bathroom', label: 'Bathrooms' },
    { id: 'kitchen', label: 'Kitchens' },
    { id: 'rough-in', label: 'Rough-Ins' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const scrollToEstimate = () => {
    const el = document.getElementById('contact-estimate-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pt-20">
      
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/assets/modern_villa.jpg"
            alt="Pro Era Projects"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block">
              Toronto & GTA Portfolio & Direct Contact
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              Our Work, About & Contact
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Explore authentic plumbing and renovation projects executed across the Greater Toronto Area. Learn about our standards and initiate your estimate inquiry below.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: ARCHITECTURAL PROJECT GALLERY */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-1">
                Portfolio of Work
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-950">
                Recent GTA Projects
              </h2>
            </div>

            {/* Filter buttons (Interactive filter controls as buttons) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xs border border-slate-200">
              {filterOptions.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                    activeFilter === filter.id
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Architectural Project Grid (Rectangular framing, varying proportions) */}
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 border border-slate-200 p-5 flex flex-col justify-between group hover:border-sky-500 transition-colors"
              >
                <div>
                  <div className="aspect-16/10 overflow-hidden bg-slate-200 border border-slate-200 mb-4">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/assets/hero-poster.jpg';
                      }}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>


                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-bold text-sky-600 uppercase tracking-wider">
                        {project.category.replace('-', ' ').toUpperCase()}
                      </span>
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 uppercase">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.specifications.slice(0, 2).map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold text-slate-700 bg-white px-2 py-0.5 border border-slate-200 rounded-xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={scrollToEstimate}
                    className="w-full py-2 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-sky-600 hover:text-white border border-slate-300 rounded-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Scope for Similar Space</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2: ABOUT PRO ERA PLUMBING (VERIFIED BUSINESS INFORMATION) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block">
                Verified Business Identity
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-950">
                About Pro Era Plumbing Inc.
              </h2>
              
              <p className="text-base text-slate-700 leading-relaxed">
                Pro Era Plumbing Inc. is an established Canadian plumbing contractor and registered corporate trademark holder based out of Markham, Ontario, serving custom builders, renovators, and homeowners across Toronto and the Greater Toronto Area.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our team was established on the principle that modern residential plumbing requires rigorous engineering rather than traditional guesswork. By standardizing our installations on Uponor PEX-A expansion systems, rigid Type L copper headers, and Charlotte Pipe DWV venting, we ensure our systems meet and exceed Ontario Building Code Part 7 regulations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white border border-slate-200 rounded-xs">
                  <span className="font-bold text-xs uppercase text-slate-800 block mb-1">
                    Custom Home Expertise
                  </span>
                  <p className="text-xs text-slate-500">
                    Engineered water distribution lines, multiple manifold circuits, and full municipal inspection clearances.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xs">
                  <span className="font-bold text-xs uppercase text-slate-800 block mb-1">
                    Luxury Renovations
                  </span>
                  <p className="text-xs text-slate-500">
                    Specialized fixture trims, curbless wet room conversions, pot fillers, and structural drain line relocations.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xs flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
                <div className="text-xs text-slate-600">
                  <strong className="text-slate-900">Canadian Registered Corporate Entity:</strong> Pro Era Plumbing Inc. is recognized under the Canadian Intellectual Property Office (CIPO).
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="border border-slate-300 p-2.5 bg-white shadow-md">
                <div className="aspect-square overflow-hidden bg-black flex items-center justify-center p-4">
                  <img
                    src="/assets/logo.jpg"
                    alt="Pro Era Plumbing Inc. Official Trademark Mark"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://d13cw1lxlociqy.cloudfront.net/6fjid901xk661qvt30fimj5a4lgw';
                    }}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="p-4 bg-slate-50 mt-2 border border-slate-200 text-center">
                  <span className="font-display font-extrabold text-base text-slate-900 uppercase block">
                    PRO ERA PLUMBING INC.
                  </span>
                  <span className="text-xs font-semibold text-sky-600 uppercase tracking-widest">
                    Toronto & GTA, Canada
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: DIRECT CONTACT INFORMATION (NO FAKE MAPS, VERIFIED DETAILS) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-1">
              Direct Communication
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-950">
              Contact Pro Era Plumbing
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Reach our dispatch directly by phone, email, or official social media. We serve Toronto, Markham, North York, Vaughan, Richmond Hill, Scarborough, and the GTA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Phone Card */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xs bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold text-slate-900 uppercase">
                  Telephone Contact
                </h4>
                <p className="text-xs text-slate-500">
                  Speak directly with our field dispatch team for urgent questions, schedule availability, and project scoping.
                </p>
                <div className="text-lg font-black text-slate-950 font-display">
                  {COMPANY_INFO.phone}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xs bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold text-slate-900 uppercase">
                  Direct Email
                </h4>
                <p className="text-xs text-slate-500">
                  Send blueprints, architectural specifications, or project tenders directly to our estimating team.
                </p>
                <div className="text-sm font-bold text-slate-950 font-mono">
                  {COMPANY_INFO.email}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-600" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            {/* Social / Jobber Hub Card */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xs bg-sky-100 text-sky-700 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold text-slate-900 uppercase">
                  Online Presence
                </h4>
                <p className="text-xs text-slate-500">
                  Follow official project updates on Facebook or access our verified Jobber Client Hub request system.
                </p>
                <div className="text-xs font-semibold text-sky-700">
                  Official Facebook Profile · 4.4K Followers
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Official Facebook</span>
                  <ExternalLink className="w-3 h-3 text-sky-600" />
                </a>

                <a
                  href={COMPANY_INFO.jobberRequestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 text-xs font-semibold uppercase tracking-wider text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Jobber Client Hub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Registered Office Notice Box */}
          <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xs text-xs text-slate-600 flex items-start gap-3">
            <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800">Publicly Registered Corporate Entity Address:</strong> {COMPANY_INFO.registeredAddress}
              <span className="block text-slate-500 text-[11px] mt-0.5">
                Note: This is Pro Era Plumbing Inc.&apos;s official business registration address in Markham, Ontario. Field teams deploy directly to job sites throughout Toronto and the Greater Toronto Area.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: INLINE ESTIMATE REQUEST FORM (ZERO POPUPS) */}
      <section id="contact-estimate-form" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-1">
              Inline Inquiry Portal
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
              Get an Itemized Estimate
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Submit your project details directly below. Zero popups, zero spam, and no automatic fake quotes. Every inquiry is personally reviewed by our master plumbing estimators.
            </p>
          </div>

          <EstimateForm />
        </div>
      </section>

    </div>
  );
};
