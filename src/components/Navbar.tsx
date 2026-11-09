import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onEstimateClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onEstimateClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Plumbing Services' },
    { id: 'custom-homes', label: 'Custom Homes & Renovations' },
    { id: 'work-about', label: 'Our Work & About' },
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEstimateAction = () => {
    setMobileMenuOpen(false);
    onEstimateClick();
  };

  const isTransparent = !isScrolled && currentPage === 'home';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4 text-white'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus-visible:outline-hidden"
            aria-label="Pro Era Plumbing Inc. - Return to Homepage"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xs overflow-hidden border border-white/20 bg-black shadow-xs">
              <img
                src="/assets/logo.jpg"
                alt="Pro Era Plumbing Inc. Official Logo"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://d13cw1lxlociqy.cloudfront.net/6fjid901xk661qvt30fimj5a4lgw';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col">
              <span
                className={`font-display font-extrabold text-lg sm:text-xl tracking-tight leading-none uppercase ${
                  isTransparent ? 'text-white' : 'text-slate-950'
                }`}
              >
                PRO ERA
              </span>
              <span
                className={`text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase mt-0.5 ${
                  isTransparent ? 'text-sky-300' : 'text-sky-600'
                }`}
              >
                PLUMBING INC. · TORONTO + GTA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 tracking-wide uppercase text-xs font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? isTransparent
                        ? 'text-sky-400 font-bold'
                        : 'text-sky-600 font-bold'
                      : isTransparent
                      ? 'text-slate-200 hover:text-white'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        isTransparent ? 'bg-sky-400' : 'bg-sky-600'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTAs: Direct Call & Get an Estimate */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide uppercase rounded-xs transition-colors duration-200 border ${
                isTransparent
                  ? 'border-white/30 text-white hover:bg-white/10'
                  : 'border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400'
              }`}
              title="Direct Telephone Contact"
            >
              <Phone className="w-3.5 h-3.5 text-sky-500" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={handleEstimateAction}
              className="flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xs shadow-xs transition-all duration-200 cursor-pointer"
            >
              <span>Get an Estimate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className={`p-2 rounded-xs border ${
                isTransparent
                  ? 'border-white/30 text-white'
                  : 'border-slate-300 text-slate-800'
              }`}
              aria-label="Call Pro Era Plumbing"
            >
              <Phone className="w-4 h-4 text-sky-500" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xs border transition-colors ${
                isTransparent
                  ? 'border-white/30 text-white hover:bg-white/10'
                  : 'border-slate-300 text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation (No popups - clean slide panel) */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white text-slate-900 border-b border-slate-200 shadow-xl px-5 py-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-3 mb-2 border-b border-slate-100 text-xs font-semibold text-sky-600 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Built With Precision · Toronto + GTA</span>
            </div>

            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left py-2.5 px-3 rounded-xs text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 font-bold border-l-2 border-sky-600'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={handleEstimateAction}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-xs shadow-xs"
              >
                <span>Get an Estimate</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xs border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
