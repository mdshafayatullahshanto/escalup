// src/components/InActionCarousel.jsx
// SECTION 1: "Real Delivery, Measurable Impact"
// Unified near-black/indigo dark tone, max-w-[1400px] container,
// true 4-slide horizontal peek carousel where EVERY slide has the exact same rich structure.
// Next slide peeks ~15% on the right at opacity ~0.5 and scale ~0.985.
// Drag/swipe, keyboard arrows, 6s autoplay with pause on hover/focus/tab-hidden,
// light-weight heading with "Measurable Impact." in semibold, 15px deliverables, indigo link.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Badge from './ui/Badge';

const ACTION_PROJECTS = [
  {
    id: 1,
    title: 'Automated Conveyor & Packaging Cell Kinematics',
    discipline: 'Mechanical Solid Modeling',
    clientType: 'European Automation Equipment Builder',
    outcome: 'Eliminated 18 shop-floor interference points prior to tooling manufacture.',
    metricNum: '18',
    metricPhrase: 'Clashes Prevented',
    standards: 'ASME Y14.5M · ISO 1101 · SolidWorks Native',
    deliverables: [
      '3D Parametric CAD Assembly',
      '2D Manufacturing Drawings with GD&T',
      'Full Multi-Level Indented BOM'
    ],
  },
  {
    id: 2,
    title: 'Hospital Complex Commercial HVAC & Plumbing LOD 400',
    discipline: 'MEP BIM Coordination',
    clientType: 'Commercial MEP Contracting Firm',
    outcome: 'Delivered coordinated Revit models with zero spatial collisions in medical gas and duct risers.',
    metricNum: '124',
    metricPhrase: 'Spatial Collisions Solved',
    standards: 'Autodesk Revit · Navisworks · ASHRAE 90.1',
    deliverables: [
      'LOD 350-400 Coordinated Revit Models',
      'Navisworks Clash Resolution Matrix',
      'Contractor Spool & Shop Drawings'
    ],
  },
  {
    id: 3,
    title: 'High-Volume Precision Sheet Metal Enclosures',
    discipline: 'DFMA & Tooling Detailing',
    clientType: 'Industrial Electronics Manufacturer',
    outcome: 'Standardized bend deductions and flat patterns, cutting press brake cycle time by 28%.',
    metricNum: '28%',
    metricPhrase: 'Cycle Time Cut',
    standards: 'Sheet Metal DIN 6935 · K-Factor 0.44',
    deliverables: [
      'Unfolded DXF Flat Patterns for Laser Cutting',
      'Forming & Bend Sequence Drawings',
      'Tooling & Inspection Fixture Prints'
    ],
  },
  {
    id: 4,
    title: 'Turbine Housing Assembly Drawing Border Migration',
    discipline: 'PLM Vault Data Governance',
    clientType: 'Energy Systems Supplier',
    outcome: 'Converted 1,400+ legacy 2D drawings into native parametric models with 100% ERP BOM parity.',
    metricNum: '1,400+',
    metricPhrase: 'Drawings Standardized',
    standards: 'Siemens NX · Teamcenter PDM · ASME Y14.100',
    deliverables: [
      'Native 3D NX Models with Feature Trees',
      'Teamcenter Vault Attribute Mapping',
      'Drawing Border & Title Block Migration'
    ],
  }
];

export default function InActionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== 'undefined') return window.innerWidth >= 1024;
    return true;
  });

  const sectionRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? ACTION_PROJECTS.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === ACTION_PROJECTS.length - 1 ? 0 : prev + 1));
  }, []);

  // Window resize listener for peek calculations
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener?.('change', handler);
    return () => mediaQuery.removeEventListener?.('change', handler);
  }, []);

  // Page Visibility API
  useEffect(() => {
    const handleVisibility = () => {
      setIsTabHidden(document.visibilityState === 'hidden');
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // 6-second optional autoplay, pauses on hover, focus, or hidden tab
  const isPaused = isHovered || isFocused || isTabHidden;
  useEffect(() => {
    if (isPaused || isReducedMotion) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, isReducedMotion, nextSlide]);

  // Keyboard navigation when focused inside section
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch swipe support on mobile/tablet
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section 
      ref={sectionRef}
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsFocused(false);
        }
      }}
      className="w-full bg-[#080B11] bg-gradient-to-b from-[#080B11] via-[#0B0F18] to-[#080B11] text-white py-14 sm:py-20 md:py-24 border-y border-white/10 relative overflow-hidden font-sans focus:outline-none"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#5846F6]/06 rounded-full blur-[160px] pointer-events-none" />

      {/* Shared ~1400px centered container with equal padding */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12 lg:mb-14">
          <div>
            <div className="mb-3">
              <Badge variant="navy" size="sm" className="bg-[#121926] text-[#A5B4FC] border border-white/10">
                Engineering in Action
              </Badge>
            </div>
            {/* Light-weight heading with ONLY "Measurable Impact." in semibold */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Real Delivery, <span className="font-semibold text-white">Measurable Impact.</span>
            </h2>
          </div>

          {/* Navigation Controls: Counter + Round Arrow Buttons */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium tracking-wider text-white/70">
              <strong className="text-white font-semibold">{currentIndex + 1}</strong> / {ACTION_PROJECTS.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous case study"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5846F6]"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next case study"
                className="w-10 h-10 rounded-full bg-white text-[#111827] hover:bg-white/90 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5846F6]"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 
          Horizontal Peek Carousel:
          4 slides, each using the exact SAME full card structure.
          Next slide peeks ~15% on the right at opacity ~0.5 and scale ~0.985.
        */}
        <div 
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex items-stretch gap-5 sm:gap-6 will-change-transform"
            animate={{
              x: `calc(-${currentIndex * (isDesktop ? 85 : 88)}% - ${currentIndex * (isDesktop ? 1.5 : 1.25)}rem)`
            }}
            transition={{
              duration: isReducedMotion ? 0 : 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipeThreshold = 40;
              if (offset.x < -swipeThreshold || velocity.x < -250) {
                nextSlide();
              } else if (offset.x > swipeThreshold || velocity.x > 250) {
                prevSlide();
              }
            }}
          >
            {ACTION_PROJECTS.map((project, idx) => {
              const isActive = idx === currentIndex;

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    if (!isActive) setCurrentIndex(idx);
                  }}
                  className={`shrink-0 w-[88%] sm:w-[86%] lg:w-[85%] rounded-3xl p-6 sm:p-10 lg:p-12 transition-all duration-500 ${
                    isActive
                      ? 'bg-[#0E1420] border border-white/10 shadow-2xl opacity-100 scale-100 cursor-default pointer-events-auto'
                      : 'bg-[#0E1420]/75 border border-white/06 shadow-lg opacity-50 hover:opacity-75 scale-[0.985] cursor-pointer'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    
                    {/* Left 7 cols: Case Narrative */}
                    <div className="lg:col-span-7 space-y-5 text-left">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <Badge variant="navy" size="xs" className="bg-[#182232] text-[#A5B4FC] border border-white/10">
                          {project.discipline}
                        </Badge>
                        <span className="text-sm text-white/75 font-normal">
                          {project.clientType}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-light text-white leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed font-normal">
                        {project.outcome}
                      </p>

                      {/* Deliverables list: 15px text and indigo check icons */}
                      <div className="space-y-2 pt-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#A5B4FC]">
                          Key Production Deliverables:
                        </div>
                        {project.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2.5 text-[15px] text-white/90">
                            <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Governed Under standard (minimum 14px, WCAG AA compliant) */}
                      <div className="text-sm text-white/70 pt-1">
                        Governed Under: {project.standards}
                      </div>
                    </div>

                    {/* Right 5 cols: Inner "Verified Result" Panel on subtle lighter surface with NO heavy border */}
                    <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#141A26]/85 border border-white/08 flex flex-col justify-between text-left shadow-lg">
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-[#A5B4FC] uppercase tracking-wider">
                          Verified Result
                        </div>
                        {/* Big text: light weight with key phrase in semibold */}
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                          {project.metricNum}{' '}
                          <span className="font-semibold text-white">
                            {project.metricPhrase}
                          </span>
                        </div>
                        <div className="text-sm text-white/70 mt-1">
                          Documented in project release logs
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-white/75">
                          <ShieldCheck className="w-4 h-4 text-[#5846F6]" />
                          <span>Protected by Mutual NDA</span>
                        </div>

                        {/* Indigo link with arrow and hover animation */}
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5846F6] hover:text-[#8172FC] transition-colors group"
                        >
                          <span>Inquire Scope</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}