import React from 'react';
import { Phone, Mail, ArrowUpRight, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface FooterProps {
  onNavigate: (page: string) => void;
  onEstimateClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onEstimateClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout Strip */}
        <div className="pb-12 border-b border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block mb-1">
              Toronto & Greater Toronto Area
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 uppercase tracking-tight">
              Ready to Discuss Your Project?
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Whether preparing a custom home rough-in or planning a high-end bathroom renovation, our team delivers precision craftsmanship from day one.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onEstimateClick}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-xs shadow-xs transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Get an Estimate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-xs border border-slate-300 transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Registration (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xs overflow-hidden border border-slate-200 bg-black shrink-0">
                <img
                  src="/assets/logo.jpg"
                  alt="Pro Era Plumbing Inc."
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://d13cw1lxlociqy.cloudfront.net/6fjid901xk661qvt30fimj5a4lgw';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="font-display font-black text-xl text-slate-950 tracking-tight uppercase block leading-none">
                  PRO ERA
                </span>
                <span className="text-xs font-semibold text-sky-600 tracking-wider uppercase">
                  PLUMBING INC.
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Specializing in custom home plumbing infrastructure, luxury residential renovations, and precision rough-in engineering across Toronto and the Greater Toronto Area.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1.5 border-t border-slate-200">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-700">Registered Office:</strong> {COMPANY_INFO.registeredAddress}
                  <span className="block text-[10px] text-slate-400">(Corporate registration entity — field service dispatches GTA-wide)</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Registered Canadian Business Entity (CIPO)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-slate-950 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 transition-colors cursor-pointer"
                >
                  Plumbing Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('custom-homes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 transition-colors cursor-pointer"
                >
                  Custom Homes & Renovations
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('work-about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 transition-colors cursor-pointer"
                >
                  Our Work & About
                </button>
              </li>
              <li>
                <button
                  onClick={onEstimateClick}
                  className="hover:text-sky-600 transition-colors cursor-pointer text-sky-700 font-semibold"
                >
                  Request an Estimate
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Disciplines */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-slate-950 uppercase tracking-wider">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>Custom Home Rough-Ins</li>
              <li>Luxury Bathroom Renovations</li>
              <li>Gourmet Kitchen Plumbing</li>
              <li>PEX-A Manifold Systems</li>
              <li>DWV Stack Engineering</li>
              <li>Backwater Valve Installations</li>
              <li>Diagnostic Inspections</li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-slate-950 uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div>
                <span className="block text-[10px] uppercase text-slate-400 font-semibold">Telephone</span>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="font-semibold text-slate-900 hover:text-sky-600 transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3 h-3 text-sky-600" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>

              <div>
                <span className="block text-[10px] uppercase text-slate-400 font-semibold">Email</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-semibold text-slate-900 hover:text-sky-600 transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3 h-3 text-sky-600" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <span className="block text-[10px] uppercase text-slate-400 font-semibold">Official Social</span>
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 transition-colors mt-1"
                >
                  <span>Pro Era Facebook Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Confirmed Service Area Strip */}
        <div className="py-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider text-slate-700">
              Primary Service Municipalities:
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-slate-600">
              <span>Toronto</span>
              <span>·</span>
              <span>Markham</span>
              <span>·</span>
              <span>North York</span>
              <span>·</span>
              <span>Vaughan</span>
              <span>·</span>
              <span>Richmond Hill</span>
              <span>·</span>
              <span>Scarborough</span>
              <span>·</span>
              <span>Mississauga</span>
              <span>·</span>
              <span>Brampton</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Slogan Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Pro Era Plumbing Inc. All rights reserved.</span>
            <span>·</span>
            <span className="font-semibold text-slate-700">Built With Precision. Finished With Purpose.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Ontario Building Code Part 7 Compliant</span>
            <span>·</span>
            <span>Toronto & GTA, Ontario, Canada</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
