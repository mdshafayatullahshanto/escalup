// src/components/FramedHero.jsx
// Full-bleed technical hero section matching escalup-hero-redesign.html
// Features:
// - Fixed full-bleed animated background (interactive CAD grid, glowing ambient orbs, SVG noise grain, mouse parallax)
// - NO photo, NO rounded card
// - 3 Auto-rotating slides (01 Enterprise, 02 Native, 03 BIM) with 5000ms CSS progress sync
// - Pause on hover, focus, tab hidden, and prefers-reduced-motion
// - Top row: Floating badge + 01/03 counter
// - Center: Light-weight headline + colorful gradient focus phrase, subtitle, action buttons, stats ribbon
// - Bottom bar: Accessible play/pause, 3 segmented progress bars, slide tabs, and "Navigate your next +" link

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sparkles, Pause, Play, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const HERO_SLIDES = [
  {
    id: 1,
    num: '01',
    shortLabel: 'Enterprise',
    tag: 'Offshore Engineering Services',
    line1: 'Scale Your Project Team with',
    line2: 'Dedicated Offshore Talent',
    subtitle: 'escalup is your dedicated offshore engineering partner delivering Mechanical CAD, MEP, and BIM coordination for global equipment builders and consultancies.',
    ctaPrimary: 'Request a Quote',
    ctaSecondary: 'Schedule an Engineering Intro Call',
    stats: 'Native Parametric CAD Files · Mutual NDA · Client Owns All Project IP',
  },
  {
    id: 2,
    num: '02',
    shortLabel: 'Native',
    tag: 'CAD, Parametric Modeling & Simulation',
    line1: 'Parametric CAD Capacity at',
    line2: 'Production Velocity',
    subtitle: 'SolidWorks, Siemens NX, Inventor, and Creo modeling support integrated into your engineering team under your drawing standards.',
    ctaPrimary: 'Explore Capabilities',
    ctaSecondary: 'Schedule an Engineering Intro Call',
    stats: 'Native Drawing Formats · ASME Y14.5 Tolerancing · Controlled Revision History',
  },
  {
    id: 3,
    num: '03',
    shortLabel: 'BIM',
    tag: 'BIM & MEP Design Engineering',
    line1: 'Multi-Discipline BIM & MEP Coordination',
    line2: 'Before Construction',
    subtitle: 'Revit and Navisworks coordination, HVAC sizing, plumbing, and clash detection to support construction and fabrication without delays.',
    ctaPrimary: 'Schedule a Review',
    ctaSecondary: 'Schedule an Engineering Intro Call',
    stats: 'Spatial Clash Resolution · ASHRAE & NFPA Compliance · Contractor Spool Drawings',
  }
];

export default function FramedHero({ onOpenCalendly }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideKey, setSlideKey] = useState(0); // restarts CSS progress animation

  // Mouse Parallax coordinates (-1 to 1)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Pause states
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const [isUserPaused, setIsUserPaused] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const { isDark } = useTheme();

  // Touch gesture tracking
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Combined pause state
  const isPaused = isHovered || isFocused || isTabHidden || isUserPaused;

  // Slide navigation
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setSlideKey((k) => k + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    setSlideKey((k) => k + 1);
  }, []);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
    setSlideKey((k) => k + 1);
  }, []);

  // Listen for prefers-reduced-motion changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => {
      setIsReducedMotion(e.matches);
      if (e.matches) setIsUserPaused(true);
    };
    mediaQuery.addEventListener?.('change', handler);
    return () => mediaQuery.removeEventListener?.('change', handler);
  }, []);

  // Page Visibility API listener (pause when user switches tabs)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabHidden(document.visibilityState === 'hidden');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Fallback timer when CSS progress bar animation is not used or reduced motion is active
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [isPaused, activeIndex, slideKey, nextSlide]);

  // Mouse Parallax listener
  const handleMouseMove = (e) => {
    if (isReducedMotion) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  // Keyboard arrow listeners
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
  };

  const handleQuoteClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCall = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open('https://cal.com/escalup/book-a-call?overlayCalendar=true', '_blank', 'noopener,noreferrer');
    }
  };

  const handleNavigateNext = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById('services') || document.getElementById('navigate-next');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSlide = HERO_SLIDES[activeIndex];

  // Motion variants for smooth text entrance
  const textContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: isReducedMotion ? 0 : 0.08,
        delayChildren: isReducedMotion ? 0 : 0.04,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const textItemVariants = {
    initial: { opacity: 0, y: isReducedMotion ? 0 : 16 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReducedMotion ? 0.01 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      aria-label="escalup Enterprise Hero"
      className="w-full min-h-[560px] lg:min-h-[640px] lg:h-[calc(100vh-4rem)] lg:max-h-[820px] relative overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-5 sm:pb-6 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#080C0F] text-[#111827] dark:text-white transition-colors select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsFocused(false);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* ------------------------------------------------------------- */}
      {/* 1. FIXED FULL-BLEED ANIMATED BACKGROUND                       */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Interactive Technical Engineering Grid with Mouse Parallax */}
        <div
          className="absolute -inset-[40px] pointer-events-none transition-transform duration-200 ease-out"
          style={{
            transform: isReducedMotion
              ? 'none'
              : `translate3d(${mousePos.x * 16}px, ${mousePos.y * 16}px, 0)`,
            backgroundImage: `
              linear-gradient(to right, ${isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 112, 173, 0.07)'} 1px, transparent 1px),
              linear-gradient(to bottom, ${isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 112, 173, 0.07)'} 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Ambient Glowing Orbs with Smooth Easing */}
        <div
          className="absolute -top-[10%] left-[15%] w-[620px] h-[620px] rounded-full bg-[#0070AD]/10 dark:bg-[#0070AD]/16 blur-[140px] transition-transform duration-300 ease-out"
          style={{
            transform: isReducedMotion
              ? 'none'
              : `translate3d(${mousePos.x * -24}px, ${mousePos.y * -24}px, 0)`,
          }}
        />

        <div
          className="absolute -bottom-[15%] right-[10%] w-[680px] h-[680px] rounded-full bg-[#5846F6]/08 dark:bg-[#5846F6]/14 blur-[160px] transition-transform duration-300 ease-out"
          style={{
            transform: isReducedMotion
              ? 'none'
              : `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`,
          }}
        />

        {/* Tactile Film Grain Overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035] dark:opacity-[0.05] pointer-events-none mix-blend-overlay"
          aria-hidden="true"
        >
          <filter id="hero-grain-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-grain-filter)" />
        </svg>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. TOP HERO ROW: FLOATING BADGE & 01 / 03 COUNTER             */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between pt-1 sm:pt-2 relative z-10">
        
        {/* Top-Left Floating Badge */}
        <motion.div
          key={`badge-${currentSlide.id}`}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#11161B]/90 backdrop-blur-md border border-[#E2E6EE] dark:border-white/10 shadow-xs text-xs font-medium text-[#111827] dark:text-white max-w-[210px] xs:max-w-[270px] sm:max-w-none"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#0070AD] dark:text-[#38BDF8] shrink-0" />
          <span className="truncate">{currentSlide.tag}</span>
        </motion.div>

        {/* Top-Right Counter: "01 / 03" */}
        <div className="text-xs sm:text-sm font-mono tracking-widest text-[#64748B] dark:text-[#94A3B8]">
          <strong className="text-[#111827] dark:text-white font-bold text-sm sm:text-base">
            {currentSlide.num}
          </strong>{' '}
          / 03
        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. CENTER HERO CONTENT: HEADLINE, SUBTITLE, BUTTONS & STATS   */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full max-w-4xl mx-auto text-center my-auto py-4 sm:py-6 relative z-10 flex flex-col items-center justify-center">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={`slide-content-${activeIndex}`}
            variants={textContainerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full space-y-5 sm:space-y-6"
          >
            {/* Main Headline: Light weight preamble + colorful gradient focal phrase */}
            <motion.h1
              variants={textItemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-light text-[#111827] dark:text-white tracking-tight leading-[1.12] [text-wrap:balance]"
            >
              {currentSlide.line1}
              <span className="font-semibold bg-gradient-to-r from-[#0070AD] via-[#2563EB] to-[#5846F6] bg-clip-text text-transparent block mt-1 sm:mt-2">
                {currentSlide.line2}
              </span>
            </motion.h1>

            {/* Subtitle with AA Contrast */}
            <motion.p
              variants={textItemVariants}
              className="max-w-2xl mx-auto text-center text-sm sm:text-base md:text-[17px] text-[#475569] dark:text-[#94A3B8] leading-relaxed font-normal pt-1 [text-wrap:balance]"
            >
              {currentSlide.subtitle}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={textItemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3 w-full"
            >
              {/* Primary: Request a Quote */}
              <button
                onClick={handleQuoteClick}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#0F172A] hover:bg-black text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer border border-white/10"
              >
                <span>{currentSlide.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary: Schedule an Engineering Intro Call */}
              <button
                onClick={handleBookCall}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white dark:bg-[#11161B] hover:bg-[#F8FAFC] dark:hover:bg-[#151D26] text-[#111827] dark:text-white border border-[#E2E6EE] dark:border-white/10 text-sm font-semibold shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0070AD] dark:text-[#38BDF8]" />
                <span>{currentSlide.ctaSecondary}</span>
              </button>
            </motion.div>

            {/* Trust & Governance Ribbon */}
            <motion.div
              variants={textItemVariants}
              className="pt-3 text-xs sm:text-[13px] text-[#64748B] dark:text-[#94A3B8] tracking-wide font-normal"
            >
              {currentSlide.stats}
            </motion.div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4. BOTTOM BAR: PLAY/PAUSE, 3 PROGRESS BARS, TABS & NEXT LINK  */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full max-w-7xl mx-auto pt-4 sm:pt-5 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 relative z-10 border-t border-[#E2E6EE]/80 dark:border-white/10">
        
        {/* Left: Pause/Play Button + 3 Segmented Progress Bars */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsUserPaused(!isUserPaused)}
            aria-label={isUserPaused ? 'Play slide rotation' : 'Pause slide rotation'}
            className="w-7 h-7 rounded-full bg-white dark:bg-[#151D26] border border-[#E2E6EE] dark:border-white/10 text-[#475569] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors shadow-xs"
            title={isUserPaused ? 'Play' : 'Pause'}
          >
            {isUserPaused ? <Play className="w-3 h-3 ml-0.5" /> : <Pause className="w-3 h-3" />}
          </button>

          {/* 3 Progress Bars */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((s, idx) => {
              const isCurrent = idx === activeIndex;
              const isPassed = idx < activeIndex;

              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${s.num}: ${s.shortLabel}`}
                  className="w-14 sm:w-20 h-[3px] rounded-full bg-[#E2E6EE] dark:bg-white/15 overflow-hidden cursor-pointer relative block p-0 border-0"
                >
                  {isCurrent && (
                    <div
                      key={`progress-${slideKey}`}
                      className={`h-full w-full bg-gradient-to-r from-[#0070AD] to-[#5846F6] ${
                        isPaused ? '' : 'animate-hero-progress'
                      }`}
                      style={{
                        animationPlayState: isPaused ? 'paused' : 'running',
                      }}
                    />
                  )}
                  {isPassed && (
                    <div className="h-full w-full bg-[#0070AD]" />
                  )}
                  {!isCurrent && !isPassed && (
                    <div className="h-full w-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Center: Slide Tabs (01 Enterprise, 02 Native, 03 BIM) */}
        <div className="flex items-center gap-5 sm:gap-6 text-xs">
          {HERO_SLIDES.map((s, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                className={`transition-colors cursor-pointer py-1 ${
                  isCurrent
                    ? 'text-[#111827] dark:text-white font-semibold underline decoration-[#0070AD] decoration-2 underline-offset-4'
                    : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-white font-medium'
                }`}
              >
                {s.num} · {s.shortLabel}
              </button>
            );
          })}
        </div>

        {/* Right: "Navigate your next +" link */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleNavigateNext}
            className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1 cursor-pointer py-1"
          >
            <span>Navigate your next</span>
            <span className="text-[#0070AD] dark:text-[#38BDF8] font-bold">+</span>
          </button>
        </div>

      </div>

    </section>
  );
}
