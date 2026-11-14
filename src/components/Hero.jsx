// /src/components/Hero.jsx
// 100% faithful Infosys-style cinematic hero section:
// Panoramic snow-capped mountain backdrop, authoritative enterprise typography,
// interactive 4-story capability carousel with progress indicators, and instant RFQ action.

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  Award, 
  Globe, 
  Cpu, 
  Layers, 
  Wrench, 
  Database,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { trackCallBooking } from '../utils/analytics';
import { companyData } from '../data/company';
import mountainHeroBg from '../assets/mountain-hero.jpg';

const HERO_STORIES = [
  {
    id: 1,
    num: '01',
    category: 'Mechanical Engineering',
    headline: 'Mechanical Design & Product Development',
    summary: 'Kinematic linkage synthesis, 3D parametric CAD, and production-ready solid modeling for global equipment builders.',
    metric: '100% Parametric Native Files',
    tools: 'SolidWorks · Siemens NX · Inventor',
    icon: Cpu,
    anchor: '#services'
  },
  {
    id: 2,
    num: '02',
    category: 'BIM & Facilities',
    headline: 'MEP Design & BIM Coordination',
    summary: 'HVAC load calculations (HAP), fire/plumbing routing, and LOD 300-400 Revit models with zero spatial clashes.',
    metric: '124 Clashes Caught Virtually',
    tools: 'Autodesk Revit · Navisworks · AutoCAD MEP',
    icon: Layers,
    anchor: '#services'
  },
  {
    id: 3,
    num: '03',
    category: 'Manufacturing Precision',
    headline: 'DFMA & Production Detailing',
    summary: 'Design for Manufacturing & Assembly (DFMA), sheet metal flat patterns, GD&T ASME Y14.5, and tooling design.',
    metric: '28% Fabrication Cost Reduction',
    tools: 'Sheet Metal · GD&T ASME Y14.5 · CAM',
    icon: Wrench,
    anchor: '#services'
  },
  {
    id: 4,
    num: '04',
    category: 'Data Governance',
    headline: 'PLM, BOM & Engineering Data',
    summary: 'Indented multi-level BOMs, Engineering Change Orders (ECN/ECO), and vault organization to eliminate revision chaos.',
    metric: '100% Drawing-to-BOM Parity',
    tools: 'Teamcenter · SolidWorks PDM · Vault',
    icon: Database,
    anchor: '#services'
  }
];

export default function Hero({ onOpenCalendly: _onOpenCalendly }) {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 6.5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStoryIdx((prev) => (prev + 1) % HERO_STORIES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeStory = HERO_STORIES[activeStoryIdx];

  const handleQuoteClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustChips = [
    { text: 'Strict NDA before kickoff', icon: ShieldCheck },
    { text: 'Client owns 100% of IP', icon: Award },
    { text: 'Guaranteed 24h quote', icon: Clock },
    { text: 'BST (UTC+6) Live Sync', icon: Globe },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-20 xs:pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 text-white overflow-hidden">
      
      {/* ======================================================== */}
      {/* 1. CINEMATIC MOUNTAIN HERO BACKGROUND (INFOSYS STYLE)   */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0">
        <img
          src={mountainHeroBg}
          alt="Majestic mountain landscape - Navigate your next"
          className="w-full h-full object-cover object-center scale-105 animate-pulse"
          style={{ animationDuration: '10s' }}
        />
        {/* Cinematic Vignette Overlay: Deep blue at top, clear center, rich dark teal/black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1519]/85 via-[#0B1519]/45 to-[#071012] backdrop-contrast-125" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0B1519]/35 to-[#071012]/85" />
      </div>

      {/* ======================================================== */}
      {/* 2. HERO CONTENT & HEADLINES                              */}
      {/* ======================================================== */}
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10 flex-1 flex flex-col justify-center">
        
        <div className="max-w-4xl space-y-4 sm:space-y-5 text-left">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-white/15 backdrop-blur-md border border-white/25 text-white"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#14F3C1]" />
            <span>Navigate Your Next · Offshore Engineering Services</span>
          </motion.div>

          {/* Authoritative Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[1.85rem] xs:text-[2.2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.8rem] 2xl:text-[4.2rem] font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.14]"
          >
            We bring people and engineering together to{' '}
            <span className="relative inline-block pb-2">
              <span className="bg-gradient-to-r from-white via-[#A0D4CE] to-[#14F3C1] bg-clip-text text-transparent">
                build things better.
              </span>
              <svg
                className="absolute bottom-0 left-0 w-full h-2 sm:h-2.5 overflow-visible pointer-events-none"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="heroMountainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2E756E" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#14F3C1" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#3B948A" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <path d="M0 3 Q 50 7 100 3" stroke="url(#heroMountainGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Enterprise Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-[#D4E2DE] max-w-2xl leading-relaxed font-normal"
          >
            <strong className="text-white font-bold">escalup</strong> is your offshore engineering partner delivering Mechanical, Product, and MEP design support for global manufacturers, consultancies, and contractors — with clear communication and production-ready documentation.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 pt-1"
          >
            {/* Primary Request a Quote Button */}
            <a
              href="#contact"
              onClick={handleQuoteClick}
              className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>

            {/* Secondary Intro Call Button */}
            <a
              href={companyData.contact.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCallBooking('hero_secondary_button')}
              className="px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#14F3C1]" />
              <span>Book a Free Intro Call</span>
            </a>

            {/* Explore Disciplines */}
            <a
              href="#services"
              onClick={handleServicesClick}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/80 hover:text-white transition-colors py-2 px-3 cursor-pointer"
            >
              <span>Explore Capabilities</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Trust Chips Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="pt-1"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2.5 max-w-3xl">
              {trustChips.map((chip, idx) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 sm:gap-2 text-[10px] xs:text-[11px] sm:text-xs text-white/90 bg-white/10 backdrop-blur-md px-2.5 py-1.5 xs:px-3 xs:py-2 rounded-xl border border-white/15"
                  >
                    <Icon className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-[#14F3C1] shrink-0" />
                    <span className="truncate">{chip.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* 3. INFOSYS INTERACTIVE 4-STORY PROGRESS CAROUSEL         */}
      {/* ======================================================== */}
      <div 
        className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/15"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex items-center justify-between mb-2.5 sm:mb-3 text-xs font-mono text-[#A0D4CE]">
          <span className="uppercase tracking-wider font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#14F3C1]"></span>
            <span className="text-[11px] sm:text-xs">Engineering Capabilities · Interactive Highlights</span>
          </span>
          <span className="hidden sm:inline text-[11px] text-white/60">Click or hover to explore</span>
        </div>

        {/* Mobile Pills (<640px) */}
        <div className="flex sm:hidden items-center gap-1.5 overflow-x-auto pb-2.5 no-scrollbar">
          {HERO_STORIES.map((story, idx) => {
            const isActive = activeStoryIdx === idx;
            return (
              <button
                key={story.id}
                onClick={() => setActiveStoryIdx(idx)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-mono font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#14F3C1] text-black border-[#14F3C1]'
                    : 'bg-black/50 text-white/80 border-white/20'
                }`}
              >
                {story.num} {story.category.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* Mobile Single Active Card View (<640px) */}
        <div className="block sm:hidden">
          <div
            onClick={() => {
              const servicesEl = document.getElementById('services');
              if (servicesEl) servicesEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-3.5 rounded-2xl border border-[#14F3C1] bg-black/80 shadow-2xl relative overflow-hidden text-left backdrop-blur-md cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#14F3C1]">
                {activeStory.num} · {activeStory.category}
              </span>
              <span className="text-[10px] font-mono text-[#14F3C1] font-semibold">{activeStory.metric}</span>
            </div>
            <h3 className="text-xs font-bold text-white mb-1">
              {activeStory.headline}
            </h3>
            <p className="text-[11px] text-[#A0D4CE] leading-relaxed line-clamp-2">
              {activeStory.summary}
            </p>
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
              <span>{activeStory.tools}</span>
              <span className="text-[#14F3C1] font-bold flex items-center gap-1">Details →</span>
            </div>
          </div>
        </div>

        {/* Tablet and Desktop Grid View (>=640px) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {HERO_STORIES.map((story, idx) => {
            const isActive = activeStoryIdx === idx;
            const Icon = story.icon;

            return (
              <div
                key={story.id}
                onClick={() => setActiveStoryIdx(idx)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden text-left backdrop-blur-md ${
                  isActive
                    ? 'bg-black/75 border-[#14F3C1] shadow-2xl ring-1 ring-[#14F3C1]/30'
                    : 'bg-black/40 border-white/15 hover:border-white/35 hover:bg-black/60'
                }`}
              >
                {/* Top Animated Progress Indicator Bar for Active Slide */}
                {isActive && (
                  <motion.div
                    layoutId="heroStoryProgressMountain"
                    className="absolute top-0 left-0 right-0 h-1 bg-[#14F3C1]"
                  />
                )}

                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#14F3C1]">
                    {story.num} · {story.category}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#14F3C1]' : 'text-white/40'}`} />
                </div>

                <h3 className="text-xs font-bold text-white line-clamp-1 mb-1">
                  {story.headline}
                </h3>

                <p className="text-[11px] text-[#A0D4CE] line-clamp-2 leading-relaxed">
                  {story.summary}
                </p>

                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#14F3C1] font-semibold">{story.metric}</span>
                  <span className="text-white/60">{story.tools.split('·')[0]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Story Expansion Details Strip (Visible on Tablet and Desktop) */}
        <div className="hidden sm:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="mt-3 py-2 px-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs gap-2"
            >
              <div className="flex items-center gap-2 text-white">
                <span className="font-bold uppercase tracking-wider text-[11px] font-mono text-[#14F3C1]">
                  Active Focus:
                </span>
                <span className="font-semibold">{activeStory.headline}</span>
                <span className="hidden md:inline text-white/40">·</span>
                <span className="hidden md:inline text-[#A0D4CE] font-mono">{activeStory.tools}</span>
              </div>

              <a
                href={activeStory.anchor}
                onClick={handleServicesClick}
                className="text-[#14F3C1] hover:underline font-bold text-[11px] font-mono flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <span>View Full Technical Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
