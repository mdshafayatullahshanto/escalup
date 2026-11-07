// src/components/InActionCarousel.jsx
// SECTION 1: Real Delivery, Measurable Impact
// Styled like reference content (ProductCardsTrio / Image 3):
// Blue uppercase letterspaced eyebrow, light headline with signature indigo gradient,
// clean deliverables list with indigo checkmarks, verified result glass panel,
// 100% full-width cards with smooth directional slide transitions and interactive discipline tabs,
// ensuring zero content truncation, zero severed words, and full responsiveness across all viewports.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Badge from './ui/Badge';

const ACTION_PROJECTS = [
  {
    id: 1,
    title: 'Automated Conveyor & Packaging Cell Kinematics',
    discipline: 'Mechanical Solid Modeling',
    clientType: 'European Automation Equipment Builder',
    outcome: 'Eliminated 18 shop-floor interference points prior to tooling manufacture, delivering coordinated 3D CAD assemblies and ASME drawings.',
    metricNum: '18',
    metricPhrase: 'Clashes Prevented',
    standards: 'ASME Y14.5M · ISO 1101 · SolidWorks Native',
    deliverables: [
      '3D Parametric CAD Assembly with native feature trees',
      '2D Manufacturing Drawings with ASME Y14.5M GD&T',
      'Full Multi-Level Indented Bill of Materials (BOM)'
    ],
  },
  {
    id: 2,
    title: 'Hospital Complex Commercial HVAC & Plumbing LOD 400',
    discipline: 'MEP BIM Coordination',
    clientType: 'Commercial MEP Contracting Firm',
    outcome: 'Delivered coordinated Revit models with zero spatial collisions in medical gas and duct risers before fabrication drawings were released.',
    metricNum: '124',
    metricPhrase: 'Spatial Collisions Solved',
    standards: 'Autodesk Revit · Navisworks · ASHRAE 90.1',
    deliverables: [
      'LOD 350-400 Coordinated Revit MEP Models',
      'Navisworks Multi-Discipline Clash Resolution Matrix',
      'Contractor Spool & Shop Drawings for Pre-Fabrication'
    ],
  },
  {
    id: 3,
    title: 'High-Volume Precision Sheet Metal Enclosures',
    discipline: 'DFMA & Tooling Detailing',
    clientType: 'Industrial Electronics Manufacturer',
    outcome: 'Standardized bend deductions and flat patterns, cutting press brake cycle time by 28% and eliminating shop-floor scrap.',
    metricNum: '28%',
    metricPhrase: 'Cycle Time Cut',
    standards: 'Sheet Metal DIN 6935 · K-Factor 0.44',
    deliverables: [
      'Unfolded DXF Flat Patterns optimized for CNC laser cutting',
      'Forming & Bend Sequence Drawings with tooling specs',
      'Tooling & Inspection Fixture Detail Prints'
    ],
  },
  {
    id: 4,
    title: 'Turbine Housing Assembly Drawing Border Migration',
    discipline: 'PLM Vault Data Governance',
    clientType: 'Energy Systems Supplier',
    outcome: 'Converted 1,400+ legacy 2D drawings into native parametric models with 100% ERP BOM parity under formal ECN revision control.',
    metricNum: '1,400+',
    metricPhrase: 'Drawings Standardized',
    standards: 'Siemens NX · Teamcenter PDM · ASME Y14.100',
    deliverables: [
      'Native 3D NX Models with fully constrained feature trees',
      'Teamcenter Vault Attribute Mapping & title block migration',
      'Drawing Border Standardization across all legacy formats'
    ],
  }
];

export default function InActionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const sectionRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? ACTION_PROJECTS.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === ACTION_PROJECTS.length - 1 ? 0 : prev + 1));
  }, []);

  const goToSlide = (targetIndex) => {
    if (targetIndex === currentIndex) return;
    setDirection(targetIndex > currentIndex ? 1 : -1);
    setCurrentIndex(targetIndex);
  };

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

  // 6-second autoplay, pauses on hover, focus, or hidden tab
  const isPaused = isHovered || isFocused || isTabHidden;
  useEffect(() => {
    if (isPaused || isReducedMotion) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, isReducedMotion, nextSlide]);

  // Keyboard navigation
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

  const currentProject = ACTION_PROJECTS[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: isReducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: isReducedMotion ? 0 : 0.35, ease: 'easeOut' },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: {
        x: { duration: isReducedMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: isReducedMotion ? 0 : 0.25, ease: 'easeIn' },
      },
    }),
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

      {/* Shared ~1400px centered container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div>
            {/* Eyebrow: Reference Style (Uppercase, letterspaced, blue/indigo) */}
            <div className="text-xs font-semibold uppercase tracking-widest text-[#0070AD] dark:text-[#38BDF8] mb-3">
              Core Delivery Outcomes
            </div>
            
            {/* Headline: Reference Style (Light 300 with signature indigo gradient) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Real Delivery,{' '}
              <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
                Measurable Impact.
              </span>
            </h2>
          </div>

          {/* Navigation Controls: Counter + Round Arrow Buttons */}
          <div className="flex items-center gap-4 self-start sm:self-auto">
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
          100% Full-Width Card with Directional Animation:
          Eliminates awkward margin clipping and severed words.
          Every deliverable, metric, and title enjoys full breathing room.
        */}
        <div 
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(e, { offset, velocity }) => {
                const swipeThreshold = 40;
                if (offset.x < -swipeThreshold || velocity.x < -250) {
                  nextSlide();
                } else if (offset.x > swipeThreshold || velocity.x > 250) {
                  prevSlide();
                }
              }}
              className="w-full rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#0E1420] border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left 7 cols: Case Narrative */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Badge variant="navy" size="xs" className="bg-[#182232] text-[#A5B4FC] border border-white/10">
                      {currentProject.discipline}
                    </Badge>
                    <span className="text-sm text-white/70 font-normal">
                      {currentProject.clientType}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-light text-white leading-tight">
                    {currentProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                    {currentProject.outcome}
                  </p>

                  {/* Deliverables List matching reference card style (Image 3) */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#0070AD] dark:text-[#38BDF8]">
                      Key Production Deliverables
                    </div>
                    {currentProject.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-sm sm:text-[15px] text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Governed Under standard */}
                  <div className="text-xs sm:text-sm text-white/60 pt-1">
                    Governed Under: {currentProject.standards}
                  </div>
                </div>

                {/* Right 5 cols: Integrated Verified Result Panel on subtle glass surface */}
                <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between text-left shadow-lg backdrop-blur-sm">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#0070AD] dark:text-[#38BDF8]">
                      Verified Result
                    </div>
                    {/* Big Metric: light weight with key phrase in semibold */}
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                      {currentProject.metricNum}{' '}
                      <span className="font-semibold text-white">
                        {currentProject.metricPhrase}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-white/70 mt-1 font-normal">
                      Documented in project release logs
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-white/75">
                      <ShieldCheck className="w-4 h-4 text-[#5846F6]" />
                      <span>Protected by Mutual NDA</span>
                    </div>

                    {/* Indigo link matching "Explore Technical Scope ->" in reference */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0070AD] dark:text-[#38BDF8] hover:text-white transition-colors group"
                    >
                      <span>Inquire Scope</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 
          Interactive Discipline Tab Selectors:
          Provides immediate visual access to all 4 case studies without any text truncation.
        */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {ACTION_PROJECTS.map((p, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={p.id}
                onClick={() => goToSlide(idx)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isCurrent
                    ? 'bg-white text-[#080B11] shadow-lg shadow-white/15 font-semibold scale-[1.02]'
                    : 'bg-white/[0.05] hover:bg-white/[0.10] text-white/70 hover:text-white border border-white/08'
                }`}
              >
                <span className={`w-2 h-2 rounded-full transition-colors ${isCurrent ? 'bg-[#5846F6]' : 'bg-white/40'}`} />
                <span>{p.discipline}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
