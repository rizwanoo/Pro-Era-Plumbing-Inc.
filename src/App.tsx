import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CustomHomesRenovationsPage } from './pages/CustomHomesRenovationsPage';
import { WorkAboutContactPage } from './pages/WorkAboutContactPage';

export default function App() {
  const getInitialPage = (): string => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('service')) return 'services';
    if (path.includes('custom') || path.includes('reno')) return 'custom-homes';
    if (path.includes('work') || path.includes('about') || path.includes('contact')) return 'work-about';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage());
  const [selectedService, setSelectedService] = useState<string>('Plumbing Rough-In');
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Custom Home');

  // Sync route and title
  useEffect(() => {
    const titles: Record<string, { title: string; desc: string; path: string }> = {
      home: {
        title: 'Pro Era Plumbing Inc. | Custom Homes & Renovations | Toronto & GTA',
        desc: 'Toronto & GTA premier plumbing contractor specializing in custom homes, luxury renovations, and precision residential plumbing. Built with precision. Finished with purpose.',
        path: '/',
      },
      services: {
        title: 'Plumbing Services & Specifications | Pro Era Plumbing Inc. | Toronto & GTA',
        desc: 'Comprehensive residential plumbing, framing rough-ins, luxury kitchen & bathroom fixtures, and system diagnostics in Toronto and the GTA.',
        path: '/services',
      },
      'custom-homes': {
        title: 'Custom Homes & Luxury Renovations | Pro Era Plumbing Inc. | Toronto & GTA',
        desc: 'Architectural plumbing infrastructure for custom homes and luxury master ensuite renovations across Toronto, Markham, and York Region.',
        path: '/custom-homes-renovations',
      },
      'work-about': {
        title: 'Our Work, About & Contact | Pro Era Plumbing Inc. | Toronto & GTA',
        desc: 'Verified project portfolio, company background, direct dispatch telephone, and online estimate request form for Toronto and Greater Toronto Area.',
        path: '/our-work-contact',
      },
    };

    const currentMeta = titles[currentPage] || titles.home;
    document.title = currentMeta.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentMeta.desc);

    // Sync OpenGraph meta dynamically for link sharing
    const setMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('og:title', currentMeta.title);
    setMetaTag('og:description', currentMeta.desc);
    setMetaTag('og:url', window.location.origin + currentMeta.path);

    // Update browser URL without reload
    if (window.location.pathname !== currentMeta.path) {
      window.history.pushState({ page: currentPage }, '', currentMeta.path);
    }
  }, [currentPage]);


  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initialize smooth scroll (Lenis)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      let rafId: number;
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(rafId);
        lenis?.destroy();
      };
    } catch {
      // Fallback cleanly to standard scrolling if Lenis is unsupported
    }
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEstimateClick = () => {
    // If on a page with an estimate form, scroll to it; otherwise go to work-about page
    const existingForm = document.querySelector('#estimate-form-section, #home-estimate-form, #services-estimate-form, #custom-homes-estimate-form, #contact-estimate-form');
    if (existingForm) {
      existingForm.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentPage('work-about');
      setTimeout(() => {
        const target = document.getElementById('contact-estimate-form');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleSelectServiceForEstimate = (serviceTitle: string, projectType: string) => {
    setSelectedService(serviceTitle);
    setSelectedProjectType(projectType);
    setCurrentPage('work-about');
    setTimeout(() => {
      const target = document.getElementById('contact-estimate-form');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onEstimateClick={handleEstimateClick}
      />

      {/* Main Content Area */}
      <main className="grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectServiceForEstimate={handleSelectServiceForEstimate}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectServiceForEstimate={handleSelectServiceForEstimate}
          />
        )}

        {currentPage === 'custom-homes' && (
          <CustomHomesRenovationsPage
            onNavigate={handleNavigate}
            onSelectServiceForEstimate={handleSelectServiceForEstimate}
          />
        )}

        {currentPage === 'work-about' && (
          <WorkAboutContactPage
            onSelectServiceForEstimate={handleSelectServiceForEstimate}
          />
        )}
      </main>

      {/* Architectural Footer */}
      <Footer
        onNavigate={handleNavigate}
        onEstimateClick={handleEstimateClick}
      />
    </div>
  );
}
