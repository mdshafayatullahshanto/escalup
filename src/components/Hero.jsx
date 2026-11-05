// /src/components/Hero.jsx
// Consilio-inspired hero section engineered for international engineering procurement
// Exact color combination and layout from user reference screenshot

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ShieldCheck, Clock, Award, Globe } from 'lucide-react';
import CADWireframeVisual from './CADWireframeVisual';
import { trackCallBooking } from '../utils/analytics';
import { companyData } from '../data/company';

export default function Hero({ onOpenCalendly }) {
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
    { text: 'NDA before kickoff', icon: ShieldCheck },
    { text: 'You own all IP', icon: Award },
    { text: 'Quote within 24h', icon: Clock },
    { text: 'BST (UTC+6) Overlap', icon: Globe },
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
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-6 sm:py-8 lg:py-12 2xl:py-16 border-b border-[#DBE3E0] bg-[#F8FAF9] blueprint-grid">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 2xl:gap-14 items-center">
          
          {/* Left Column: Copy & High-converting CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-3 sm:space-y-4 lg:space-y-6 text-left"
          >
            {/* Eyebrow Label */}
            <motion.div variants={childVariants} className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#2E756E]/10 text-[#2E756E] border border-[#2E756E]/20">
                <span className="w-2 h-2 rounded-full bg-[#2E756E] animate-pulse flex-shrink-0"></span>
                <span>CAD · MEP · BIM Engineering Services</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={childVariants}
              className="text-[1.6rem] xs:text-[1.75rem] sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.5rem] 2xl:text-[4.25rem] font-extrabold text-[#14201D] tracking-tight leading-[1.16] sm:leading-[1.2] md:leading-[1.18]"
            >
              We bring people and engineering together to{' '}
              <span className="relative inline-block pb-2 sm:pb-2.5">
                <span className="bg-gradient-to-r from-[#1B3F3B] via-[#2E756E] to-[#3B948A] bg-clip-text text-transparent">
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
                      <stop offset="50%" stopColor="#2E756E" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#3B948A" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <path d="M0 3 Q 50 7 100 3" stroke="url(#heroUnderlineGrad)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={childVariants}
              className="text-[13px] sm:text-base lg:text-lg xl:text-xl text-[#5A6A65] max-w-2xl leading-relaxed"
            >
              <strong className="text-[#2E756E] font-bold">escalup</strong> is your offshore engineering partner delivering Mechanical, MEP and BIM design support — with clear communication and production-ready documentation.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3 lg:gap-4"
            >
              {/* Primary Request a Quote Button */}
              <motion.a
                href="#contact"
                onClick={handleQuoteClick}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 py-3 lg:px-8 lg:py-4 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-sm lg:text-base tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:translate-x-1.5 transition-transform" />
              </motion.a>

              {/* Secondary Intro Call Button */}
              <motion.button
                onClick={handleBookCall}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-5 py-3 lg:px-7 lg:py-4 rounded-full bg-white hover:bg-[#F4F6F5] text-[#14201D] border border-[#DBE3E0] hover:border-[#2E756E]/40 font-semibold text-sm lg:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-[#2E756E]" />
                <span>Book a Free Intro Call</span>
              </motion.button>

              {/* Explore Services Link — hidden on mobile to save space */}
              <a
                href="#services"
                onClick={handleServicesClick}
                data-cursor="Explore"
                className="hidden sm:inline-block text-xs sm:text-sm font-semibold text-[#14201D] hover:text-[#2E756E] transition-colors py-2 underline underline-offset-4 cursor-pointer"
              >
                Explore Services →
              </a>
            </motion.div>

            {/* Trust Chips */}
            <motion.div variants={childVariants} className="pt-2 border-t border-[#DBE3E0]">
              <div className="grid grid-cols-2 gap-2">
                {trustChips.map((chip, idx) => {
                  const Icon = chip.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2 text-xs font-medium text-[#14201D] bg-white hover:border-[#2E756E]/40 px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border border-[#DBE3E0] shadow-xs hover:shadow-sm transition-all cursor-default w-full"
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2E756E] shrink-0" />
                      <span className="leading-snug text-[11px] sm:text-xs">{chip.text}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Tag indicator — hidden on mobile */}
              <div className="hidden sm:flex items-center gap-2 mt-3 text-xs text-[#5A6A65]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E756E]" />
                <span>Offshore engineering support for global teams</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: CAD Wireframe — hidden on mobile, shown lg+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex lg:col-span-5 justify-center items-center"
          >
            <CADWireframeVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
