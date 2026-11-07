// src/components/FramedHero.jsx
// STEP 3 - Item 1: Full-viewport hero
// 3 Auto-rotating slides (01 Enterprise, 02 Native, 03 BIM) with 5000ms CSS progress sync,
// single activeIndex source of truth, hover/focus pause & resume, Page Visibility API,
// touch swipe navigation, accessible pause/play control, reduced motion support,
// and balanced headline typography.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Calendar, Sparkles, Pause, Play } from 'lucide-react';
import mountainHeroBg from '../assets/mountain-hero.jpg';
import Button from './ui/Button';

const HERO_SLIDES = [
  {
    id: 1,
    num: '01',
    shortLabel: 'Enterprise',
    tag: 'Enterprise Engineering Excellence',
    title: 'We bring people and engineering together to build things better.',
    subtitle: 'escalup is your dedicated offshore engineering partner delivering Mechanical CAD, MEP, and BIM coordination for global equipment builders and consultancies.',
    ctaPrimary: 'Request a Quote',
    ctaSecondary: 'Book a Free Intro Call',
    stats: '50–70% Cost Efficiency · Zero Clash Verification · 24h Turnaround',
  },
  {
    id: 2,
    num: '02',
    shortLabel: 'Native',
    tag: 'Native CAD Integrity',
    title: 'Seamless CAD capacity at production velocity.',
    subtitle: 'Overcome drawing release bottlenecks with dedicated SolidWorks, Inventor, and Siemens NX parametric modeling teams that integrate into your standups.',
    ctaPrimary: 'Explore Capabilities',
    ctaSecondary: 'View Case Studies',
    stats: '100% Parametric Native Files · ASME Y14.5 Tolerancing · ECN/ECO Governance',
  },
  {
    id: 3,
    num: '03',
    shortLabel: 'BIM',
    tag: 'BIM & Facilities Coordination',
    title: 'Multi-discipline clash sync before fabrication starts.',
    subtitle: 'Full Revit LOD 300–400 assemblies and Navisworks collision detection to eliminate expensive rework on shop floors and construction job sites.',
    ctaPrimary: 'Schedule a Review',
    ctaSecondary: 'Explore Services',
    stats: '124+ Clashes Caught Virtually · Zero Field Revision · ASHRAE 90.1 Compliance',
  }
];

export default function FramedHero({ onOpenCalendly }) {
  // Single source of truth for active slide
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideKey, setSlideKey] = useState(0); // increments to restart CSS animation smoothly

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

  // Touch swipe coordinates
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.05]);
  const yParallax = useTransform(scrollY, [0, 600], [0, 80]);

  // Combined pause state
  const isPaused = isHovered || isFocused || isTabHidden || isUserPaused;

  // Navigation handlers
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

  // Preload background image & assets to prevent any flashing
  useEffect(() => {
    const img = new Image();
    img.src = mountainHeroBg;
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

  // Fallback timer when prefers-reduced-motion is active but user explicitly hits play
  useEffect(() => {
    if (!isReducedMotion || isPaused) return;
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [isReducedMotion, isPaused, activeIndex, slideKey, nextSlide]);

  // Handle animation completion from active CSS progress bar
  const handleProgressAnimationEnd = () => {
    nextSlide();
  };

  // Mobile touch gesture handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45; // min px threshold
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const slide = HERO_SLIDES[activeIndex];

  const handleQuoteClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookCall = () => {
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open('https://cal.com/escalup/book-a-call', '_blank', 'noopener,noreferrer');
    }
  };

  // Staggered motion variants for smooth 600ms content entrance
  const contentContainerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: isReducedMotion ? 0 : 0.08,
      },
    },
    exit: {
      transition: {
        staggerChildren: isReducedMotion ? 0 : 0.04,
        staggerDirection: -1,
      },
    },
  };

  const contentItemVariants = {
    initial: {
      opacity: 0,
      y: isReducedMotion ? 0 : 18,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReducedMotion ? 0.2 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: isReducedMotion ? 0 : -14,
      transition: {
        duration: isReducedMotion ? 0.15 : 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative w-full pt-16 sm:pt-20 px-2 sm:px-4 md:px-6 pb-6 bg-[#F6F7FB] dark:bg-[#080C0F] transition-colors">
      {/* 
        The Framed Container:
        Rounded corners (rounded-3xl), overflow hidden, shadow, fixed background image
      */}
      <div 
        className="relative w-full min-h-[90vh] sm:min-h-[92vh] rounded-3xl sm:rounded-[36px] overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 text-white shadow-2xl border border-black/10 dark:border-white/10 select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsFocused(false);
          }
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Media with Parallax: Stays completely fixed while content slides */}
        <motion.div 
          className="absolute inset-0 z-0 origin-center pointer-events-none"
          style={{ scale, y: yParallax }}
        >
          <img
            src={mountainHeroBg}
            alt="Majestic mountain landscape - Navigate your next"
            className="w-full h-full object-cover object-center filter brightness-95"
            loading="eager"
            fetchPriority="high"
          />
          {/* Layered dark vignette overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/75 via-[#0B0F14]/40 to-[#0B0F14]/90 backdrop-contrast-115" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0B0F14]/30 to-[#0B0F14]/80" />
        </motion.div>

        {/* Top Eyebrow Row: Slide Tag on Left, Single Source Counter on Right */}
        <div className="relative z-10 flex items-center justify-between pt-8 sm:pt-12">
          {/* Eyebrow Tag */}
          <motion.div
            key={`tag-${slide.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans font-medium tracking-wider bg-white/15 backdrop-blur-md border border-white/20 text-white"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A5B4FC]" />
            <span>{slide.tag}</span>
          </motion.div>

          {/* Slide Numbers Counter: "01 / 03", "02 / 03", "03 / 03" */}
          <div className="text-xs font-sans tracking-widest text-white/70">
            <span className="text-white font-semibold">0{activeIndex + 1}</span> / 0{HERO_SLIDES.length}
          </div>
        </div>

        {/* 
          Centered Content with Staggered Transition & Balanced Wrapping:
          Stable min-height prevents layout jump during slide change
        */}
        <div className="relative z-10 my-auto py-8 sm:py-12 max-w-5xl mx-auto text-center flex flex-col items-center justify-center min-h-[360px] sm:min-h-[400px] md:min-h-[440px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeIndex}`}
              variants={contentContainerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6 w-full"
            >
              {/* Very large, light-weight (300) headline with text-wrap: balance */}
              <motion.h1
                variants={contentItemVariants}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-light text-white tracking-tight leading-[1.14] max-w-5xl mx-auto [text-wrap:balance]"
                style={{ textWrap: 'balance' }}
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle with high contrast and balanced line length */}
              <motion.p
                variants={contentItemVariants}
                className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-normal [text-wrap:balance]"
                style={{ textWrap: 'balance' }}
              >
                {slide.subtitle}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={contentItemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3"
              >
                <Button
                  variant="white"
                  size="md"
                  onClick={handleQuoteClick}
                  icon="arrow"
                  className="w-full sm:w-auto shadow-xl"
                >
                  {slide.ctaPrimary}
                </Button>

                <Button
                  variant="glass"
                  size="md"
                  onClick={handleBookCall}
                  icon="none"
                  className="w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 text-white mr-1.5" />
                  <span>{slide.ctaSecondary}</span>
                </Button>
              </motion.div>

              {/* Key Highlights Ribbon */}
              <motion.div
                variants={contentItemVariants}
                className="pt-2 text-[11px] sm:text-xs font-sans text-white/80 tracking-wide"
              >
                {slide.stats}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 
          Bottom Segmented Progress Indicators & Accessible Playback Controls:
          3 Segmented bars synchronised via 5000ms CSS scaleX animation
        */}
        <div className="relative z-10 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          
          {/* Left: Pause/Play Button + 3 Segmented Progress Bars */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Accessible Pause / Play toggle */}
            <button
              onClick={() => setIsUserPaused((prev) => !prev)}
              aria-label={isUserPaused ? 'Resume auto-play slide rotation' : 'Pause auto-play slide rotation'}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
              title={isUserPaused ? 'Resume auto-play' : 'Pause auto-play'}
            >
              {isUserPaused ? (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              ) : (
                <Pause className="w-3.5 h-3.5 fill-current" />
              )}
            </button>

            {/* 3 Progress Bars */}
            <div className="flex items-center gap-2.5 flex-1 sm:w-auto">
              {HERO_SLIDES.map((s, idx) => {
                const isActive = activeIndex === idx;
                const isPast = idx < activeIndex;

                return (
                  <button
                    key={s.id}
                    onClick={() => goToSlide(idx)}
                    className="flex-1 sm:w-28 h-1.5 rounded-full bg-white/20 relative overflow-hidden cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label={`Jump to slide 0${idx + 1}: ${s.shortLabel}`}
                  >
                    {/* Fill track: CSS scaleX animation on active segment */}
                    <span
                      key={isActive ? `bar-${idx}-${slideKey}` : `static-bar-${idx}`}
                      className={`absolute inset-0 bg-white origin-left ${
                        isActive && !isReducedMotion ? 'animate-hero-progress' : ''
                      }`}
                      style={{
                        transform: isPast || (isActive && isReducedMotion) ? 'scaleX(1)' : isActive ? undefined : 'scaleX(0)',
                        animationPlayState: isPaused ? 'paused' : 'running',
                      }}
                      onAnimationEnd={isActive ? handleProgressAnimationEnd : undefined}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center/Right: Quick Slide Navigation Labels */}
          <div className="hidden md:flex items-center gap-6 text-xs text-white/70">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                className={`transition-colors cursor-pointer focus:outline-none focus-visible:underline ${
                  activeIndex === idx ? 'text-white font-semibold' : 'hover:text-white/90 text-white/50'
                }`}
              >
                0{idx + 1} · {s.shortLabel}
              </button>
            ))}
          </div>

          {/* Right Tagline */}
          <div className="text-[11px] text-white/50 select-none">
            Navigate your next ✦
          </div>

        </div>

      </div>
    </section>
  );
}