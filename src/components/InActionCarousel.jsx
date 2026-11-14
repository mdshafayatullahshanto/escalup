// src/components/InActionCarousel.jsx
// SECTION 1: Real Delivery, Measurable Impact
// Styled strictly to reference (Image 3 / TopStoriesCarousel):
// Light lavender page background (#F6F7FB), white card with soft lavender-tinted metric panel (#EEF2F8),
// light-weight heading with signature indigo gradient, dark pill badges and navigation arrows,
// clean deliverables list with indigo checkmarks, zero clipping, fully responsive.
// Includes 5-second autoplay looping 1 -> 2 -> 3 -> 4 -> 1 with pause/resume on hover, focus, and tab-hidden.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Badge from './ui/Badge';
import GlassBadge from './ui/GlassBadge';
import { BlurReveal, HighlightUnderline } from './ui/ScrollAnimations';

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
    outcome: 'Converted 1,400+ legacy 2D drawings into native parametric models with ERP BOM parity under formal ECN revision control.',
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
  const [activeIndex, setActiveIndex] = useState(0);
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
  const timerRef = useRef(null);
  const remainingTimeRef = useRef(5000);
  const startTimeRef = useRef(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Manual & auto navigation
  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev === ACTION_PROJECTS.length - 1 ? 0 : prev + 1));
    remainingTimeRef.current = 5000;
    startTimeRef.current = Date.now();
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? ACTION_PROJECTS.length - 1 : prev - 1));
    remainingTimeRef.current = 5000;
    startTimeRef.current = Date.now();
  }, []);

  const goToSlide = useCallback((targetIndex) => {
    setActiveIndex((prev) => {
      if (targetIndex === prev) return prev;
      setDirection(targetIndex > prev ? 1 : -1);
      return targetIndex;
    });
    remainingTimeRef.current = 5000;
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

  const isPaused = isHovered || isFocused || isTabHidden || isReducedMotion;

  // Autoplay timer with pause and resume from elapsed position
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
        const elapsed = Date.now() - startTimeRef.current;
        remainingTimeRef.current = Math.max(200, remainingTimeRef.current - elapsed);
      }
      return;
    }

    startTimeRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, remainingTimeRef.current);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [activeIndex, isPaused, nextSlide]);

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

  const currentProject = ACTION_PROJECTS[activeIndex];

  // Directional slide variants (translateX + opacity, no layout jump)
  const slideVariants = {
    enter: (dir) => ({
      x: isReducedMotion ? 0 : (dir > 0 ? 60 : -60),
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: isReducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: isReducedMotion ? 0 : 0.45, ease: 'easeOut' },
      },
    },
    exit: (dir) => ({
      x: isReducedMotion ? 0 : (dir > 0 ? -60 : 60),
      opacity: 0,
      transition: {
        x: { duration: isReducedMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: isReducedMotion ? 0 : 0.3, ease: 'easeIn' },
      },
    }),
  };

  return (
    <section 
      id="portfolio"
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
      className="w-full bg-[#F6F7FB] dark:bg-[#080C0F] text-[#111827] dark:text-white py-12 sm:py-16 md:py-20 border-y border-[#E2E6EE] dark:border-white/10 relative overflow-hidden font-sans focus:outline-none transition-colors"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#5846F6]/05 dark:bg-[#5846F6]/06 rounded-full blur-[160px] pointer-events-none" />

      {/* Shared centered container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10 lg:mb-12">
          <BlurReveal>
            {/* Glassmorphism Eyebrow Badge */}
            <div className="mb-3.5">
              <GlassBadge>Core Delivery Outcomes</GlassBadge>
            </div>
            
            {/* Headline: Reference Style (Light 300 with signature indigo gradient) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] dark:text-white tracking-tight leading-tight">
              Real Delivery,{' '}
              <HighlightUnderline>
                <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
                  Measurable Impact.
                </span>
              </HighlightUnderline>
            </h2>
          </BlurReveal>

          {/* Navigation Controls: Counter + Round Arrow Buttons (Matching Reference) */}
          <div className="flex items-center gap-4 self-start sm:self-auto">
            <span className="text-sm font-medium tracking-wider text-[#5A6679] dark:text-[#9BA8BA]">
              <strong className="text-[#111827] dark:text-white font-semibold">{activeIndex + 1}</strong> / {ACTION_PROJECTS.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous case study"
                className="w-10 h-10 rounded-full bg-white dark:bg-[#151D26] border border-[#D8DFEB] dark:border-white/10 text-[#111827] dark:text-white shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer hover:bg-[#EEF2F8]"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next case study"
                className="w-10 h-10 rounded-full bg-[#111827] dark:bg-white text-white dark:text-[#111827] shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer hover:bg-black dark:hover:bg-white/90"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 
          Reference White Card Design (Image 3):
          Left: Lavender-tinted panel with Verified Outcome stat & badge.
          Right: Pure white surface with narrative, deliverables checklist, and technical scope link.
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
              className="w-full rounded-3xl bg-white dark:bg-[#11161B] border border-[#E2E6EE] dark:border-white/10 shadow-card hover:shadow-card-hover relative overflow-hidden transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* LEFT 5 COLS: Lavender-tinted Outcome & Metric Panel (Matching Image 3) */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-[#EEF2F8] dark:bg-[#131A24] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E2E6EE] dark:border-white/10 relative overflow-hidden">
                {/* Blueprint grid subtle background */}
                <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

                {/* Top: Discipline Badge & Client Type */}
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <Badge variant="navy" size="xs">
                    {currentProject.discipline}
                  </Badge>
                  <span className="text-xs text-[#5A6679] dark:text-[#9BA8BA]">
                    {currentProject.clientType}
                  </span>
                </div>

                {/* Center: Large Verified Result Metric */}
                <div className="relative z-10 my-auto py-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#0070AD] dark:text-[#38BDF8] mb-2">
                    Verified Outcome
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] dark:text-white tracking-tight leading-tight">
                    {currentProject.metricNum}{' '}
                    <span className="font-light text-2xl sm:text-3xl lg:text-4xl block sm:inline text-[#111827] dark:text-white">
                      {currentProject.metricPhrase}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#5A6679] dark:text-[#9BA8BA] mt-2 font-normal">
                    Documented in production project release logs
                  </div>
                </div>

                {/* Bottom: NDA & Standards metadata */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#E2E6EE]/80 dark:border-white/10 text-xs text-[#5A6679] dark:text-[#9BA8BA]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#5846F6]" />
                    <span>Protected by Mutual NDA</span>
                  </div>
                  <span className="font-medium text-[#0070AD] dark:text-[#38BDF8]">
                    Native Parametric CAD
                  </span>
                </div>
              </div>

              {/* RIGHT 7 COLS: Pure White Narrative & Deliverables Panel */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-white dark:bg-[#11161B] flex flex-col justify-between text-left">
                <div className="space-y-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#5A6679] dark:text-[#9BA8BA]">
                    Case Insight · 0{currentProject.id}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-light text-[#111827] dark:text-white leading-tight">
                    {currentProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#475569] dark:text-[#9BA8BA] leading-relaxed font-normal">
                    {currentProject.outcome}
                  </p>

                  {/* Deliverables List matching reference card style (Image 3) */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#0070AD] dark:text-[#38BDF8]">
                      Key Production Deliverables
                    </div>
                    {currentProject.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-sm sm:text-[15px] text-[#1E293B] dark:text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Standards */}
                  <div className="text-xs text-[#5A6679] dark:text-[#9BA8BA] pt-1">
                    Governed Under: {currentProject.standards}
                  </div>
                </div>

                {/* Bottom Row with Divider */}
                <div className="pt-8 mt-6 border-t border-[#E2E6EE] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#5A6679] dark:text-[#9BA8BA]">
                    Production Documentation Delivered Under ASME & ISO
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0070AD] hover:text-[#5846F6] dark:text-[#38BDF8] dark:hover:text-white transition-colors group"
                  >
                    <span>Inquire Technical Scope</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* 
          Interactive Discipline Tab Selectors (Light Theme):
          Provides immediate visual access to all 4 case studies.
        */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {ACTION_PROJECTS.map((p, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={p.id}
                onClick={() => goToSlide(idx)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#111827] text-white shadow-md font-semibold scale-[1.02]'
                    : 'bg-white hover:bg-[#EEF2F8] text-[#475569] hover:text-[#111827] border border-[#E2E6EE] shadow-sm'
                }`}
              >
                <span className={`w-2 h-2 rounded-full transition-colors ${isCurrent ? 'bg-[#5846F6]' : 'bg-[#94A3B8]'}`} />
                <span>{p.discipline}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
