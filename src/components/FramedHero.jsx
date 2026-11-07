// src/components/FramedHero.jsx
// STEP 3 - Item 1: Full-viewport hero
// Media (image/video) inside a frame with a small outer margin and rounded corners,
// dark overlay, centered large light headline that rotates between slides with smooth text transitions.
// Words change weight/opacity. Includes scroll-driven parallax and segmented progress indicators.

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';
import mountainHeroBg from '../assets/mountain-hero.jpg';
import Button from './ui/Button';

const HERO_SLIDES = [
  {
    id: 1,
    tag: 'Enterprise Engineering Excellence',
    titleLine1: 'We bring people and engineering',
    titleLine2: 'together to build things better.',
    highlightWord: 'build things better',
    subtitle: 'escalup is your dedicated offshore engineering partner delivering Mechanical CAD, MEP, and BIM coordination for global equipment builders and consultancies.',
    ctaPrimary: 'Request a Quote',
    ctaSecondary: 'Book a Free Intro Call',
    stats: '50–70% Cost Efficiency · Zero Clash Verification · 24h Turnaround',
  },
  {
    id: 2,
    tag: 'Native CAD Integrity',
    titleLine1: 'Seamless CAD capacity',
    titleLine2: 'at production velocity.',
    highlightWord: 'production velocity',
    subtitle: 'Overcome drawing release bottlenecks with dedicated SolidWorks, Inventor, and Siemens NX parametric modeling teams that integrate into your standups.',
    ctaPrimary: 'Explore Capabilities',
    ctaSecondary: 'View Case Studies',
    stats: '100% Parametric Native Files · ASME Y14.5 Tolerancing · ECN/ECO Governance',
  },
  {
    id: 3,
    tag: 'BIM & Facilities Coordination',
    titleLine1: 'Multi-discipline clash sync',
    titleLine2: 'before fabrication starts.',
    highlightWord: 'clash sync',
    subtitle: 'Full Revit LOD 300–400 assemblies and Navisworks collision detection to eliminate expensive rework on shop floors and construction job sites.',
    ctaPrimary: 'Schedule a Review',
    ctaSecondary: 'Explore Services',
    stats: '124+ Clashes Caught Virtually · Zero Field Revision · ASHRAE 90.1 Compliance',
  }
];

export default function FramedHero({ onOpenCalendly }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.05]);
  const yParallax = useTransform(scrollY, [0, 600], [0, 80]);

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = HERO_SLIDES[activeSlide];

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

  return (
    <section className="relative w-full pt-16 sm:pt-20 px-2 sm:px-4 md:px-6 pb-6 bg-[#F6F7FB] dark:bg-[#080C0F] transition-colors">
      {/* 
        The Framed Container:
        Small outer margin, large rounded corners (rounded-3xl), overflow hidden, shadow
      */}
      <div 
        className="relative w-full min-h-[90vh] sm:min-h-[92vh] rounded-3xl sm:rounded-[36px] overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 text-white shadow-2xl border border-black/10 dark:border-white/10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Media with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0 origin-center"
          style={{ scale, y: yParallax }}
        >
          <img
            src={mountainHeroBg}
            alt="Majestic mountain landscape - Navigate your next"
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          {/* Layered dark vignette overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/75 via-[#0B0F14]/40 to-[#0B0F14]/90 backdrop-contrast-115" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0B0F14]/30 to-[#0B0F14]/80" />
        </motion.div>

        {/* Top Eyebrow Row */}
        <div className="relative z-10 flex items-center justify-between pt-8 sm:pt-12">
          <motion.div
            key={`tag-${slide.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans font-medium tracking-wider bg-white/15 backdrop-blur-md border border-white/20 text-white select-none"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A5B4FC]" />
            <span>{slide.tag}</span>
          </motion.div>

          {/* Slide Numbers: e.g. 01 / 03 */}
          <div className="text-xs font-sans tracking-widest text-white/70">
            <span className="text-white font-semibold">0{activeSlide + 1}</span> / 0{HERO_SLIDES.length}
          </div>
        </div>

        {/* Centered Large Light Headline with Smooth Text Transition */}
        <div className="relative z-10 my-auto py-12 max-w-5xl mx-auto text-center flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {/* Very large, light-weight (300-400) headline matching Infosys "Enterprise AI is a Mountain" */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.12]">
                <span className="font-light opacity-95">{slide.titleLine1}</span>{' '}
                <span className="font-normal block mt-1 sm:mt-2 text-white/95">
                  {slide.titleLine2}
                </span>
              </h1>

              {/* Subtitle with high contrast and balanced line length */}
              <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-normal">
                {slide.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
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
              </div>

              {/* Key Highlights Ribbon */}
              <div className="pt-2 text-[11px] sm:text-xs font-sans text-white/80 tracking-wide">
                {slide.stats}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Segmented Progress Indicators */}
        <div className="relative z-10 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          {/* 3 Segmented Progress Bars */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {HERO_SLIDES.map((s, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  className="flex-1 sm:w-28 h-1.5 rounded-full bg-white/20 relative overflow-hidden cursor-pointer"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {isActive && (
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 7, ease: 'linear' }}
                      className="absolute inset-0 bg-white"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Slide Navigation Labels */}
          <div className="hidden md:flex items-center gap-6 text-xs text-white/70">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveSlide(idx)}
                className={`transition-colors cursor-pointer ${
                  activeSlide === idx ? 'text-white font-semibold' : 'hover:text-white/90'
                }`}
              >
                0{idx + 1} · {s.tag.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-white/50">
            Navigate your next ✦
          </div>
        </div>

      </div>
    </section>
  );
}
