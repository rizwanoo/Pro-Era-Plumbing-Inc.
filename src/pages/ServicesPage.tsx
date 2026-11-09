import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Ruler, Droplets, Wrench, Search, Phone } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/company';
import { EstimateForm } from '../components/EstimateForm';

interface ServicesPageProps {
  onSelectServiceForEstimate: (serviceTitle: string, projectType: string) => void;
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectServiceForEstimate }) => {
  const [selectedServiceForInlineForm, setSelectedServiceForInlineForm] = useState<string>('Plumbing Rough-In');
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Custom Home');

  const handleRequestServiceEstimate = (serviceTitle: string, projectType: string) => {
    setSelectedServiceForInlineForm(serviceTitle);
    setSelectedProjectType(projectType);
    const formEl = document.getElementById('services-estimate-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pt-20">
      
      {/* Services Editorial Header */}
      <section className="bg-slate-900 text-white py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/assets/copper_pipes.jpg"
            alt="Plumbing infrastructure background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block">
              Toronto & Greater Toronto Area
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              Precision Plumbing Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Engineered according to Ontario Building Code Part 7 standards. We specialize in ground-up rough-ins, water supply infrastructure, high-end fixture trim, and comprehensive system diagnostics.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Core Disciplines (Split-Screen Architectural Layouts) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-slate-200 last:border-b-0 last:pb-0"
              >
                
                {/* Visual / Photography Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative border border-slate-300 p-2.5 bg-slate-50 shadow-sm">
                    <div className="aspect-4/3 overflow-hidden bg-slate-200">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/assets/copper_pipes.jpg';
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-4 bg-white mt-2.5 border border-slate-200 flex items-center justify-between text-xs">
                      <span className="font-bold uppercase tracking-wider text-slate-500">
                        Discipline #{index + 1}
                      </span>
                      <span className="font-semibold text-sky-600">
                        Code Compliant · Ontario Part 7
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-1">
                      {service.tagline}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-950">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Scope Deliverables */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
                      Key Deliverables & Capabilities:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Material Specifications */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                      Specified Materials & Standards:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.materials.map((mat, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium text-slate-700 bg-white px-2.5 py-1 border border-slate-200 rounded-xs"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => handleRequestServiceEstimate(service.title, service.category === 'construction' ? 'New Construction' : 'Residential Plumbing')}
                      className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-xs shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>Get an Estimate for This Service</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xs transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-sky-600" />
                      <span>{COMPANY_INFO.phone}</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* Code Compliance & Standard of Care Strip */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 border border-slate-200 rounded-xs">
              <ShieldCheck className="w-6 h-6 text-sky-600 mb-3" />
              <h4 className="font-display text-sm font-bold text-slate-950 uppercase mb-1">
                Ontario Code Part 7
              </h4>
              <p className="text-xs text-slate-600">
                Full compliance with municipal plumbing regulations across Toronto, Markham, and GTA jurisdictions.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200 rounded-xs">
              <Ruler className="w-6 h-6 text-sky-600 mb-3" />
              <h4 className="font-display text-sm font-bold text-slate-950 uppercase mb-1">
                Laser Line Rough-In
              </h4>
              <p className="text-xs text-slate-600">
                Precision alignment of rough-in drops, wall-mount heights, and drain slopes to ensure zero drywall clashes.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200 rounded-xs">
              <Droplets className="w-6 h-6 text-sky-600 mb-3" />
              <h4 className="font-display text-sm font-bold text-slate-950 uppercase mb-1">
                Static & Flow Balancing
              </h4>
              <p className="text-xs text-slate-600">
                Engineered manifold sizing to prevent pressure drops during simultaneous fixture use.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200 rounded-xs">
              <Wrench className="w-6 h-6 text-sky-600 mb-3" />
              <h4 className="font-display text-sm font-bold text-slate-950 uppercase mb-1">
                Certified Materials
              </h4>
              <p className="text-xs text-slate-600">
                Uponor PEX-A ProPEX, Type L rigid copper, and Charlotte Pipe DWV engineered systems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Inline Estimate Form Anchor (Zero popups!) */}
      <section id="services-estimate-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-1">
              Direct Service Intake
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
              Request Your Estimate
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Select your required plumbing service below. We provide itemized pricing with zero hidden fees.
            </p>
          </div>

          <EstimateForm
            initialService={selectedServiceForInlineForm}
            initialProjectType={selectedProjectType}
          />
        </div>
      </section>

    </div>
  );
};
