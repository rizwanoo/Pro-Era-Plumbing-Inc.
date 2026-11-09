import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Ruler, Home, Sparkles, Layers, SlidersHorizontal, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { EstimateForm } from '../components/EstimateForm';

interface CustomHomesRenovationsPageProps {
  onSelectServiceForEstimate: (serviceTitle: string, projectType: string) => void;
  onNavigate: (page: string) => void;
}

export const CustomHomesRenovationsPage: React.FC<CustomHomesRenovationsPageProps> = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const scrollToEstimate = () => {
    const el = document.getElementById('custom-homes-estimate-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pt-20">
      
      {/* Editorial Page Header */}
      <section className="bg-slate-900 text-white py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img
            src="/assets/custom_home_hero.jpg"
            alt="Custom home architecture background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block">
              Pro Era Specialization
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              Custom Homes & Luxury Renovations
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Precision plumbing infrastructure engineered for luxury custom builds, master ensuite transformations, and architectural renovations across Toronto and the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      {/* PART 1: CUSTOM HOME PLUMBING INFRASTRUCTURE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 border border-sky-200 rounded-xs text-xs font-bold uppercase tracking-wider">
                <Home className="w-3.5 h-3.5" />
                <span>New Construction Engineering</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-950">
                Ground-Up Custom Home Plumbing
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Modern custom residences require significantly higher water volume and sophisticated drainage engineering than standard production builds. With multiple simultaneous high-demand showers, soaking tubs, secondary prep kitchens, and basement secondary suites, system sizing must be engineered with exact math.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <h4 className="font-display text-sm font-bold text-slate-900 uppercase">
                    1. Dedicated Home-Run Manifold Distribution
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Eliminates pressure drops across floors. Each bathroom has dedicated Uponor PEX-A lines feeding directly from a central mechanical header.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <h4 className="font-display text-sm font-bold text-slate-900 uppercase">
                    2. Acoustically Dampened DWV Stack Routing
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Careful pipe isolation preventing flushing and drainage noise through primary living areas and master bedrooms.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                  <h4 className="font-display text-sm font-bold text-slate-900 uppercase">
                    3. Continuous Recirculation Loops
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Delivers instant hot water to distant 2nd and 3rd floor ensuite fixtures without wasting water or waiting.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToEstimate}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Custom Home Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="border border-slate-300 p-2.5 bg-slate-100 shadow-md">
                <div className="aspect-4/3 overflow-hidden bg-slate-200">
                  <img
                    src="/assets/construction_roughin.jpg"
                    alt="Custom home framing rough-in plumbing pipes"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/hero-poster.jpg';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 bg-white mt-2.5 border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Standard
                    </span>
                    <span className="font-bold text-slate-900">
                      Uponor PEX-A Home-Run Systems
                    </span>
                  </div>
                  <span className="font-semibold text-sky-600 uppercase text-[11px]">
                    Zero Pipe Joins in Walls
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PART 2: INTERACTIVE BEFORE & AFTER / ROUGH-IN TO FINISHED SPACE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-1">
              Visual Transformation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-950">
              From Framing Rough-In to Finished Luxury
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Slide to compare the rough-in engineering behind the wall with the completed architectural finish. Precision stub-outs make high-end finishes seamless.
            </p>
          </div>

          {/* Interactive Before/After Split Viewer */}
          <div className="relative border border-slate-300 bg-white p-3 shadow-md max-w-4xl mx-auto">
            
            <div className="relative aspect-16/10 overflow-hidden select-none">
              
              {/* After Image (Full width background) */}
              <img
                src="/assets/bath_vanity.jpg"
                alt="Finished luxury bathroom with vanity and fixtures"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/assets/hero-poster.jpg';
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image (Clipped by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/assets/plumbing_pipes.jpg"
                  alt="Rough-in plumbing copper pipes and valves"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/hero-poster.jpg';
                  }}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', minWidth: '100%' }}
                />
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
              </div>

              {/* Badges on left and right */}
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold uppercase px-3 py-1 rounded-xs tracking-wider">
                Behind the Wall: Rough-In
              </div>
              <div className="absolute top-4 right-4 bg-sky-600/90 backdrop-blur-xs text-white text-[11px] font-bold uppercase px-3 py-1 rounded-xs tracking-wider">
                Finished Space: Trim-Out
              </div>

            </div>

            {/* Slider Control Input */}
            <div className="mt-4 px-2 flex items-center gap-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">
                Drag to Compare:
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                aria-label="Comparison slider between plumbing rough-in and finished space"
              />
              <span className="text-xs font-mono tabular-nums text-slate-700 shrink-0">
                {sliderPosition}%
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* PART 3: ARCHITECTURAL RENOVATIONS: BATHROOMS & KITCHENS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 border border-sky-200 rounded-xs text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Luxury Renovation Capabilities</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-950">
                Master Ensuite & Kitchen Transformations
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Relocating fixtures in existing residential structures requires deep understanding of structural framing, joist penetrations, and proper DWV venting geometry. We handle complex layout alterations without compromising structural integrity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs space-y-1">
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
                    Curbless Wet Rooms
                  </h4>
                  <p className="text-xs text-slate-600">
                    Linear drains, sub-floor drop coordination, and zero-leak waterproofing flange installation.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs space-y-1">
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
                    Freestanding Tubs
                  </h4>
                  <p className="text-xs text-slate-600">
                    Rough-in drop-boxes (OS&B Island Tub Drain) for secure, leak-free floor finishes over tile.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs space-y-1">
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
                    Chef Island Sinks
                  </h4>
                  <p className="text-xs text-slate-600">
                    Island vent loop plumbing (Chicago loop) ensuring code-compliant venting under island counters.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs space-y-1">
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
                    Wall-Mounted Fixtures
                  </h4>
                  <p className="text-xs text-slate-600">
                    Rigid in-wall brass valve backing preventing any faucet movement once marble/tile is installed.
                  </p>
                </div>

              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToEstimate}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Renovation Estimate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="border border-slate-300 p-2.5 bg-slate-100 shadow-md">
                <div className="aspect-4/3 overflow-hidden bg-slate-200">
                  <img
                    src="/assets/luxury_bath.jpg"
                    alt="Luxury master bathroom renovation"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/hero-poster.jpg';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 bg-white mt-2.5 border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Case Study
                    </span>
                    <span className="font-bold text-slate-900">
                      Yorkville Master Suite Renovation
                    </span>
                  </div>
                  <span className="font-semibold text-sky-600 uppercase text-[11px]">
                    Freestanding & Wet Room
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PART 4: CONTRACTOR & BUILDER PARTNERSHIP */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-slate-200 p-8 sm:p-12 rounded-xs">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block">
                Trade Collaboration
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-950">
                Partnering with GTA Custom Home Builders & General Contractors
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We understand that on a custom build, an unorganized trade delays framing, drywall, and inspections. Pro Era Plumbing delivers clear submittal documentation, punctual rough-in dates, and flawless inspection passes so your build schedule stays locked on target.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                <div className="space-y-1">
                  <strong className="text-slate-900 block font-bold text-sm">
                    On-Time Rough-In
                  </strong>
                  <span className="text-slate-500">
                    We arrive when scheduled and hit milestone deadlines without stalling other trades.
                  </span>
                </div>
                <div className="space-y-1">
                  <strong className="text-slate-900 block font-bold text-sm">
                    Framing Respect
                  </strong>
                  <span className="text-slate-500">
                    Engineered joist boreholes follow strict code limits without cutting structural supports.
                  </span>
                </div>
                <div className="space-y-1">
                  <strong className="text-slate-900 block font-bold text-sm">
                    Inspection Guarantee
                  </strong>
                  <span className="text-slate-500">
                    We stand behind our work and coordinate directly with municipal building inspectors.
                  </span>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToEstimate}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Inquire for Upcoming Build</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xs transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Call Dispatch: {COMPANY_INFO.phone}</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PART 5: INLINE ESTIMATE FORM (ZERO POPUPS) */}
      <section id="custom-homes-estimate-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-1">
              Custom Build Intake
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
              Submit Your Architectural Scope
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Share your project details, blueprints, or renovation scope. Our master estimating team will provide an itemized proposal.
            </p>
          </div>

          <EstimateForm initialProjectType="Custom Home" initialService="Plumbing Rough-In" />
        </div>
      </section>

    </div>
  );
};
