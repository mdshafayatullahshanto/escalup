// /src/components/Hero.jsx
// Hero section engineered for international procurement conversion

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ShieldCheck, Clock, Award, Globe, CheckCircle2 } from 'lucide-react';
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
    { text: 'International Time Overlap', icon: Globe },
  ];

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-10 lg:py-16 2xl:py-20 border-b border-[#DBE3E0] dark:border-[#223249] bg-gradient-to-b from-[#F4F6F5] via-[#F4F6F5] to-white dark:from-[#0B111E] dark:via-[#0B111E] dark:to-[#0B111E] dark:bg-[#0B111E] blueprint-grid">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 2xl:gap-16 items-center">
          
          {/* Left Column: Copy & High-converting CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 lg:space-y-8 text-left"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#2E756E]/10 text-[#2E756E] border border-[#2E756E]/20">
              <span className="w-2 h-2 rounded-full bg-[#2E756E] animate-pulse"></span>
              <span>Offshore Engineering Services | CAD · MEP · BIM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[4.25rem] font-extrabold text-[#14201D] tracking-tight leading-[1.24] sm:leading-[1.22] md:leading-[1.22] lg:leading-[1.22] 2xl:leading-[1.2] pb-1.5">
              We bring people and engineering together to{' '}
              <span className="text-[#2E756E] relative inline-block">
                build things better.
                <svg
                  className="absolute -bottom-3 left-0 w-full h-2.5 text-[#2E756E]/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-[#5A6A65] max-w-3xl leading-relaxed">
              <strong className="text-[#2E756E] font-bold">escalup</strong> is your offshore engineering partner. We deliver Mechanical, Product and MEP design support for manufacturers, engineering firms and contractors worldwide, with clear communication and production-ready documentation.
            </p>

            {/* Two CTAs + One text link with micro-interactions */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 lg:gap-5">
              <motion.a
                href="#contact"
                onClick={handleQuoteClick}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 lg:px-8 lg:py-4 rounded-full bg-[#2E756E] hover:bg-[#255e58] text-white font-bold text-sm lg:text-base tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1.5 transition-transform" />
              </motion.a>

              <motion.button
                onClick={handleBookCall}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 lg:px-7 lg:py-4 rounded-full bg-white dark:bg-[#121C2D] hover:bg-[#F4F6F5] dark:hover:bg-[#162235] text-[#14201D] dark:text-[#F1F5F9] border border-[#DBE3E0] dark:border-[#223249] hover:border-[#2E756E] dark:hover:border-[#34A096] font-semibold text-sm lg:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
              >
                <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-[#2E756E] dark:text-[#34A096]" />
                <span>Book a Free Intro Call</span>
              </motion.button>

              <a
                href="#services"
                onClick={handleServicesClick}
                className="text-xs sm:text-sm font-semibold text-[#5A6A65] hover:text-[#2E756E] transition-colors py-2 text-center sm:text-left underline underline-offset-4 cursor-pointer"
              >
                Explore Services →
              </a>
            </div>

            {/* Trust Chips under the CTAs with hover lift */}
            <div className="pt-5 border-t border-[#DBE3E0]/70">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {trustChips.map((chip, idx) => {
                  const Icon = chip.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#14201D] bg-white hover:bg-white hover:border-[#2E756E]/40 px-3.5 py-2.5 rounded-xl border border-[#DBE3E0] shadow-soft hover:shadow-sm transition-all cursor-default min-h-[46px] w-full"
                    >
                      <Icon className="w-4 h-4 text-[#2E756E] shrink-0" />
                      <span className="leading-snug">{chip.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Origin line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5A6A65] pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E756E]"></span>
              <span>Offshore engineering support for global teams</span>
            </div>
          </motion.div>

          {/* Right Column: High-tech Engineering Wireframe Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <CADWireframeVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
