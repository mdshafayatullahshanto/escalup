// /src/components/Hero.jsx
// Infosys-inspired corporate hero section with interactive 4-story carousel,
// progress indicators, authoritative corporate typography, CAD 3D wireframe, and trust assurance.

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
  ChevronRight,
  Sparkles
} from 'lucide-react';
import CADWireframeVisual from './CADWireframeVisual';
import { trackCallBooking } from '../utils/analytics';
import { companyData } from '../data/company';

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

export default function Hero({ onOpenCalendly }) {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 6.5 seconds unless paused
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

  const handleBookCall = () => {
    trackCallBooking('hero_secondary_button');
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const trustChips = [
    { text: 'Strict NDA before kickoff', icon: ShieldCheck },
    { text: 'Client owns 100% of IP', icon: Award },
    { text: 'Guaranteed 24h quote', icon: Clock },
    { text: 'BST (UTC+6) Live Sync', icon: Globe },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-6rem)] flex flex-col justify-between pt-8 sm:pt-12 pb-6 border-b border-[#DBE3E0] dark:border-[#263830] bg-[#FFFFFF] dark:bg-[#0B1519] blueprint-grid">
      
      {/* Ambient background light gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2E756E]/5 dark:bg-[#3B948A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#2E756E]/5 dark:bg-[#3B948A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Main Grid: Copy Left, 3D Interactive Visual Right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 lg:mb-12">
          
          {/* Left Column: Authoritative Infosys Corporate Copy & CTAs (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 text-left"
          >
            {/* Infosys Signature Eyebrow Banner */}
            <motion.div variants={childVariants} className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#2E756E]/10 dark:bg-[#3B948A]/15 text-[#2E756E] dark:text-[#3B948A] border border-[#2E756E]/20 dark:border-[#3B948A]/30 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-[#2E756E] dark:text-[#3B948A]" />
                <span>Navigate Your Next · Offshore Engineering Services</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={childVariants}
              className="text-[1.85rem] xs:text-[2.1rem] sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.6rem] 2xl:text-[4.25rem] font-extrabold text-[#14201D] dark:text-[#E4EDE9] tracking-tight leading-[1.14] sm:leading-[1.18] md:leading-[1.15]"
            >
              We bring people and engineering together to{' '}
              <span className="relative inline-block pb-2 sm:pb-2.5">
                <span className="bg-gradient-to-r from-[#142F2C] via-[#2E756E] to-[#3B948A] dark:from-[#A0D4CE] dark:via-[#3B948A] dark:to-[#14F3C1] bg-clip-text text-transparent">
                  build things better.
                </span>
                <svg
                  className="absolute bottom-0 left-0 w-full h-2 sm:h-2.5 overflow-visible pointer-events-none"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="heroUnderlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1B3F3B" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#2E756E" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#3B948A" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <path d="M0 3 Q 50 7 100 3" stroke="url(#heroUnderlineGrad)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </motion.h1>

            {/* Corporate Sub-headline */}
            <motion.p
              variants={childVariants}
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#5A6A65] dark:text-[#8FA89F] max-w-2xl leading-relaxed"
            >
              <strong className="text-[#2E756E] dark:text-[#3B948A] font-bold">escalup</strong> is your dedicated offshore engineering partner delivering Mechanical, Product, and MEP design support for global manufacturers, consultancies, and contractors worldwide — with clear communication and production-ready documentation.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 pt-1"
            >
              {/* Primary Request a Quote Button */}
              <motion.a
                href="#contact"
                onClick={handleQuoteClick}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-7 py-3.5 lg:px-8 lg:py-4 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:translate-x-1.5 transition-transform" />
              </motion.a>

              {/* Secondary Intro Call Button */}
              <motion.button
                onClick={handleBookCall}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 py-3.5 lg:px-7 lg:py-4 rounded-full bg-[#F4F6F5] dark:bg-[#152620] hover:bg-[#E1EDEA] dark:hover:bg-[#1D3328] text-[#14201D] dark:text-[#E4EDE9] border border-[#DBE3E0] dark:border-[#263830] hover:border-[#2E756E]/40 dark:hover:border-[#3B948A]/40 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-[#2E756E] dark:text-[#3B948A]" />
                <span>Book a Free Intro Call</span>
              </motion.button>

              {/* Explore Disciplines link */}
              <a
                href="#services"
                onClick={handleServicesClick}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors py-2 px-3 rounded-lg cursor-pointer"
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Enterprise Trust Chips */}
            <motion.div variants={childVariants} className="pt-3 border-t border-[#DBE3E0] dark:border-[#263830]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {trustChips.map((chip, idx) => {
                  const Icon = chip.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-medium text-[#14201D] dark:text-[#E4EDE9] bg-[#F8FAF9] dark:bg-[#152620] px-2.5 py-2 rounded-xl border border-[#DBE3E0] dark:border-[#263830] shadow-xs cursor-default"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#2E756E] dark:text-[#3B948A] shrink-0" />
                      <span className="leading-snug text-[11px] truncate">{chip.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: CAD Wireframe (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex lg:col-span-5 justify-center items-center"
          >
            <CADWireframeVisual />
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* INFOSYS SIGNATURE 4-STORY INTERACTIVE CAROUSEL BAR      */}
        {/* ======================================================== */}
        <div 
          className="mt-6 pt-6 border-t border-[#DBE3E0] dark:border-[#263830]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#5A6A65] dark:text-[#8FA89F]">
            <span className="uppercase tracking-wider font-bold text-[#14201D] dark:text-[#E4EDE9] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2E756E] dark:bg-[#14F3C1]"></span>
              <span>Engineering Capabilities · Interactive Highlights</span>
            </span>
            <span className="text-[11px]">Click or hover to explore</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {HERO_STORIES.map((story, idx) => {
              const isActive = activeStoryIdx === idx;
              const Icon = story.icon;

              return (
                <div
                  key={story.id}
                  onClick={() => setActiveStoryIdx(idx)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden text-left ${
                    isActive
                      ? 'bg-white dark:bg-[#152620] border-[#2E756E] dark:border-[#3B948A] shadow-md ring-1 ring-[#2E756E]/20'
                      : 'bg-[#F8FAF9] dark:bg-[#0D1A17] border-[#DBE3E0] dark:border-[#263830] hover:border-[#2E756E]/40 dark:hover:border-[#3B948A]/40'
                  }`}
                >
                  {/* Top Animated Progress Indicator Bar for Active Slide */}
                  {isActive && (
                    <motion.div
                      layoutId="heroStoryProgress"
                      className="absolute top-0 left-0 right-0 h-1 bg-[#2E756E] dark:bg-[#14F3C1]"
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2E756E] dark:text-[#3B948A]">
                      {story.num} · {story.category}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#2E756E] dark:text-[#14F3C1]' : 'text-[#889893]'}`} />
                  </div>

                  <h3 className="text-xs font-bold text-[#14201D] dark:text-[#E4EDE9] line-clamp-1 mb-1">
                    {story.headline}
                  </h3>

                  <p className="text-[11px] text-[#5A6A65] dark:text-[#8FA89F] line-clamp-2 leading-relaxed">
                    {story.summary}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-[#DBE3E0]/70 dark:border-[#263830]/70 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-emerald-700 dark:text-[#14F3C1] font-semibold">{story.metric}</span>
                    <span className="text-[#889893] dark:text-[#5A7268]">{story.tools.split('·')[0]}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Story Expansion Details Strip */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="mt-3 py-2.5 px-4 rounded-xl bg-[#F4F6F5] dark:bg-[#152620] border border-[#DBE3E0] dark:border-[#263830] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs gap-2"
            >
              <div className="flex items-center gap-2 text-[#14201D] dark:text-[#E4EDE9]">
                <span className="font-bold uppercase tracking-wider text-[11px] font-mono text-[#2E756E] dark:text-[#3B948A]">
                  Active Focus:
                </span>
                <span className="font-semibold">{activeStory.headline}</span>
                <span className="hidden md:inline text-[#889893]">·</span>
                <span className="hidden md:inline text-[#5A6A65] dark:text-[#8FA89F] font-mono">{activeStory.tools}</span>
              </div>

              <a
                href={activeStory.anchor}
                onClick={handleServicesClick}
                className="text-[#2E756E] dark:text-[#14F3C1] hover:underline font-bold text-[11px] font-mono flex items-center gap-1 shrink-0"
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
