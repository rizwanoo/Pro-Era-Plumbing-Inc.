import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Ruler, Droplets, Layers, ChevronRight, Phone } from 'lucide-react';
import { COMPANY_INFO, SERVICES, PROJECTS, TESTIMONIALS } from '../data/company';
import { EstimateForm } from '../components/EstimateForm';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectServiceForEstimate: (serviceTitle: string, projectType: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectServiceForEstimate }) => {
  const scrollToEstimate = () => {
    const el = document.getElementById('home-estimate-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      
      {/* 01. CINEMATIC HERO SECTION WITH VIDEO EXTENDING BEHIND NAVBAR */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
        
        {/* Background Video Player */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/hero-poster.jpg"
            className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.05]"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Subtle architectural overlay for contrast and typography clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/60" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full text-center sm:text-left">
          
          <div className="max-w-3xl space-y-6">
            
            {/* Architectural Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xs">
              <span className="w-2 h-2 rounded-xs bg-sky-400" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                Custom Homes · Luxury Renovations · Toronto + GTA
              </span>
            </div>

            {/* Oversized Bold Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]">
              PRECISION IN EVERY PIPE.<br />
              <span className="text-sky-400">EXCELLENCE</span> IN EVERY PROJECT.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              From custom homes to complete renovations, Pro Era Plumbing delivers professional plumbing solutions built around quality, precision and dependable workmanship across Toronto and the GTA.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToEstimate}
                className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Get a Free Estimate</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('work-about')}
                className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/30 backdrop-blur-xs rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explore Our Work</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Key Trust Markers */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/20 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-medium">Ontario Building Code Part 7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-medium">CIPO Registered Trademark</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-medium">GTA Service Coverage</span>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 02. BRAND INTRODUCTION & CORE POSITIONING */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block">
                The Pro Era Standard
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 uppercase tracking-tight">
                Built With Precision.<br />Finished With Purpose.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Pro Era Plumbing Inc. is a registered Canadian plumbing contractor headquartered in Markham and deploying field teams across Toronto and the Greater Toronto Area. We specialize in high-stakes residential construction: architectural custom homes, comprehensive whole-home renovations, and master ensuite transformations.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than treating plumbing as unseen pipework hidden behind drywall, our philosophy treats water and drainage systems as the structural lifeblood of the home. Every line is routed with laser-level alignment, vibration-isolated, and pressure-tested beyond municipal inspection thresholds.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <h4 className="font-display text-sm font-bold text-slate-900 uppercase">
                    Custom Home Rough-Ins
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Whole-house water distribution, manifold balancing, and dedicated DWV stack routing for architect-designed builds.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <h4 className="font-display text-sm font-bold text-slate-900 uppercase">
                    High-End Renovations
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Freestanding tub installations, multi-jet thermostatic showers, kitchen pot fillers, and waste line relocations.
                  </p>
                </div>
              </div>
            </div>

            {/* Architectural Visual Framing */}
            <div className="lg:col-span-5">
              <div className="relative border border-slate-300 p-2 bg-slate-100 shadow-md">
                <div className="aspect-4/3 overflow-hidden bg-slate-200">
                  <img
                    src="/assets/copper_pipes.jpg"
                    alt="Precision plumbing manifold and copper piping"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/hero-poster.jpg';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 bg-white mt-2 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Engineering Metric
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      Ontario Code Part 7 Tested
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                    Zero-Defect Standard
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 03. THREE PILLARS: CUSTOM HOMES, RENOVATIONS & RESIDENTIAL PLUMBING */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-1">
                Core Disciplines
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 uppercase tracking-tight">
                Architectural Plumbing Disciplines
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore All Specifications</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Custom Homes */}
            <div className="bg-white border border-slate-200/90 p-8 flex flex-col justify-between group hover:border-sky-500 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xs bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-950 uppercase">
                  Custom Homes
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Turnkey plumbing engineering from subterranean ground rough-ins to final luxury trim out for new construction in Toronto, Markham, and York Region.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    <span>Subterranean & under-slab drainage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    <span>Uponor home-run manifold systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    <span>Multi-bathroom pressure balancing</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('custom-homes')}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-50 hover:bg-sky-600 hover:text-white rounded-xs border border-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Custom Home Systems</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Pillar 2: Luxury Renovations */}
            <div className="bg-white border border-slate-200/90 p-8 flex flex-col justify-between group hover:border-sky-500 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xs bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-950 uppercase">
                  Renovations
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-end master bath and kitchen transformations requiring complex drain relocation, curbless wet rooms, and premium architectural fixtures.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    <span>Freestanding soaking tubs & fillers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    <span>Multi-jet thermostatic shower rough-ins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    <span>Gourmet kitchen pot fillers & prep islands</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('custom-homes')}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-50 hover:bg-sky-600 hover:text-white rounded-xs border border-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Renovation Portfolios</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Pillar 3: High-Spec Plumbing */}
            <div className="bg-white border border-slate-200/90 p-8 flex flex-col justify-between group hover:border-sky-500 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xs bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                  <Ruler className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-950 uppercase">
                  Residential Services
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Whole-house re-piping, copper-to-PEX conversions, backwater valve flood protection, and preventative camera scoping for GTA homeowners.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    <span>Lead-free Type L copper & PEX-A</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    <span>City subsidy backwater valve installs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    <span>Acoustic drain dampening</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-50 hover:bg-sky-600 hover:text-white rounded-xs border border-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View All Services</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 04. FEATURED REAL PROJECT PHOTOGRAPHY SPOTLIGHT */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-1">
                Verified GTA Installations
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 uppercase tracking-tight">
                Craftsmanship Showcase
              </h2>
            </div>
            <button
              onClick={() => onNavigate('work-about')}
              className="text-xs font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Full Gallery ({PROJECTS.length} Projects)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Asymmetrical Editorial Showcase Layout */}
          <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Major Project Feature (7 cols) */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <div className="aspect-16/10 overflow-hidden bg-slate-200 border border-slate-200">
                  <img
                    src={PROJECTS[0].image}
                    alt={PROJECTS[0].imageAlt}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/hero-poster.jpg';
                    }}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-bold text-sky-600 uppercase tracking-wider">
                      {PROJECTS[0].category.toUpperCase()}
                    </span>
                    <span>{PROJECTS[0].location}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 uppercase">
                    {PROJECTS[0].title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {PROJECTS[0].summary}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {PROJECTS[0].specifications.slice(0, 2).map((spec, idx) => (
                    <span key={idx} className="text-[11px] font-medium text-slate-700 bg-white px-2.5 py-1 border border-slate-200 rounded-xs">
                      {spec}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => onSelectServiceForEstimate(PROJECTS[0].title, 'Custom Home')}
                  className="text-xs font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Two Secondary Project Spotlights (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Secondary 1 */}
              <div className="bg-slate-50 border border-slate-200 p-5 flex flex-col justify-between h-full">
                <div className="aspect-16/9 overflow-hidden bg-slate-200 border border-slate-200 mb-4">
                  <img
                    src={PROJECTS[1].image}
                    alt={PROJECTS[1].imageAlt}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/hero-poster.jpg';
                    }}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span className="font-bold text-sky-600 uppercase tracking-wider">
                      {PROJECTS[1].category.toUpperCase()}
                    </span>
                    <span>{PROJECTS[1].location}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-slate-900 uppercase">
                    {PROJECTS[1].title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {PROJECTS[1].summary}
                  </p>
                </div>
              </div>

              {/* Secondary 2 */}
              <div className="bg-slate-50 border border-slate-200 p-5 flex flex-col justify-between h-full">
                <div className="aspect-16/9 overflow-hidden bg-slate-200 border border-slate-200 mb-4">
                  <img
                    src={PROJECTS[2].image}
                    alt={PROJECTS[2].imageAlt}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/hero-poster.jpg';
                    }}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span className="font-bold text-sky-600 uppercase tracking-wider">
                      {PROJECTS[2].category.toUpperCase()}
                    </span>
                    <span>{PROJECTS[2].location}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-slate-900 uppercase">
                    {PROJECTS[2].title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {PROJECTS[2].summary}
                  </p>
                </div>
              </div>


            </div>

          </div>

        </div>
      </section>

      {/* 05. WORKING WITH CLIENTS: 5-STEP WORKFLOW */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-1">
              Methodical Execution
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 uppercase tracking-tight">
              Our 5-Stage Project Workflow
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              How Pro Era partners with homeowners, custom builders, and designers to guarantee smooth inspection signoffs and code-compliant plumbing delivery.
            </p>
          </div>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-5 gap-6">
            
            <div className="bg-white p-6 border border-slate-200 rounded-xs relative">
              <span className="font-display font-black text-3xl text-sky-600 block mb-2">01</span>
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase mb-1">
                Consultation
              </h4>
              <p className="text-xs text-slate-600">
                Initial blueprint review, architectural fixture schedule intake, and alignment on design goals.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200 rounded-xs relative">
              <span className="font-display font-black text-3xl text-sky-600 block mb-2">02</span>
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase mb-1">
                Site Assessment
              </h4>
              <p className="text-xs text-slate-600">
                On-site inspection of framing, main water entry diameter, stack locations, and elevation drops.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200 rounded-xs relative">
              <span className="font-display font-black text-3xl text-sky-600 block mb-2">03</span>
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase mb-1">
                Scope & Estimate
              </h4>
              <p className="text-xs text-slate-600">
                Itemized proposal detailing Uponor PEX-A, copper, and DWV materials with clear labor schedules.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200 rounded-xs relative">
              <span className="font-display font-black text-3xl text-sky-600 block mb-2">04</span>
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase mb-1">
                Execution
              </h4>
              <p className="text-xs text-slate-600">
                Precision rough-in, manifold layout, laser plumb checks, and high-pressure air testing.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200 rounded-xs relative">
              <span className="font-display font-black text-3xl text-sky-600 block mb-2">05</span>
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase mb-1">
                Final Review
              </h4>
              <p className="text-xs text-slate-600">
                Municipal inspection signoff, high-end trim finish, dynamic flow balancing, and homeowner handover.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 06. VERIFIED CLIENT TESTIMONIALS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-1">
              Client Reputation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 uppercase tracking-tight">
              Trusted by GTA Builders & Homeowners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="bg-slate-50 border border-slate-200 p-8 rounded-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
                    {item.highlight}
                  </span>
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200">
                  <span className="font-display font-bold text-sm text-slate-950 block">
                    {item.clientName}
                  </span>
                  <span className="text-xs text-slate-500">
                    {item.location} · {item.projectType}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 07. CONFIRMED SERVICE AREA MAP & MUNICIPALITIES */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block">
                Field Deployment
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 uppercase tracking-tight">
                Toronto & Greater Toronto Area Service
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pro Era Plumbing Inc. provides direct on-site contracting across the primary municipalities of the Greater Toronto Area. Our fleet is equipped with commercial pipe fitting tools, diagnostic cameras, and materials for prompt on-schedule execution.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {COMPANY_INFO.serviceAreas.map((area, idx) => (
                  <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xs">
                    <span className="font-bold text-xs text-slate-900 block">{area.name}</span>
                    <span className="text-[11px] text-slate-500">{area.region}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-sky-50 text-sky-600 border border-sky-100 rounded-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 uppercase">
                      Official Registered Entity
                    </h3>
                    <p className="text-xs text-slate-500">
                      Pro Era Plumbing Inc. · CIPO Canadian Trademark
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <p>
                    <strong className="text-slate-800">Corporate Registered Base:</strong> {COMPANY_INFO.registeredAddress}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    *Note: Corporate registration address. Field service teams operate on-site throughout Toronto, York, and Peel regions.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xs flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-sky-600" />
                    <span>Call {COMPANY_INFO.phone}</span>
                  </a>
                  <button
                    onClick={scrollToEstimate}
                    className="flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Estimate</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 08. PROMINENT INLINE GET AN ESTIMATE FORM (ZERO POPUPS) */}
      <section id="home-estimate-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-1">
              Start Your Project
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
              Request Your Free Estimate
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Fill out your project specifications below. Our master plumbing team reviews every submission and responds promptly with clear next steps.
            </p>
          </div>

          <EstimateForm />
        </div>
      </section>

    </div>
  );
};
