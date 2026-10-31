// /src/components/Hero.jsx
// Consilio-inspired hero section engineered for international engineering procurement
// Exact color combination and layout from user reference screenshot

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ShieldCheck, Clock, Award, Globe } from 'lucide-react';
import CADWireframeVisual from './CADWireframeVisual';
import Magnetic from './Magnetic';
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
    <section className="relative overflow-hidden min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-12 lg:py-16 2xl:py-20 border-b border-[#DBE3E0] bg-[#F8FAF9] blueprint-grid">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 2xl:gap-16 items-center">
          
          {/* Left Column: Copy & High-converting CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 lg:space-y-8 text-left"
          >
            {/* Eyebrow Label */}
            <motion.div variants={childVariants} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2E756E]/10 text-[#2E756E] border border-[#2E756E]/20">
                <span className="w-2 h-2 rounded-full bg-[#2E756E] animate-pulse"></span>
                <span>Offshore Engineering Services | CAD · MEP · BIM</span>
              </div>
            </motion.div>

            {/* Main Headline - Bold dark with brand teal accent */}
            <motion.h1
              variants={childVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[4.25rem] font-extrabold text-[#14201D] tracking-tight leading-[1.22] sm:leading-[1.2] md:leading-[1.18] pb-1"
            >
              We bring people and engineering together to{' '}
              <span className="text-[#2E756E] relative inline-block pb-2 sm:pb-2.5">
                build things better.
                <svg
                  className="absolute bottom-0 left-0 w-full h-2 sm:h-2.5 text-[#2E756E]/35 overflow-visible pointer-events-none"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0 3 Q 50 7 100 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={childVariants}
              className="text-base sm:text-lg lg:text-xl text-[#5A6A65] max-w-2xl leading-relaxed"
            >
              <strong className="text-[#2E756E] font-bold">escalup</strong> is your offshore engineering partner. We deliver Mechanical, Product and MEP design support for manufacturers, engineering firms and contractors worldwide, with clear communication and production-ready documentation.
            </motion.p>

            {/* Action Buttons matching screenshot */}
            <motion.div
              variants={childVariants}
              className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 lg:gap-4"
            >
              {/* Primary Request a Quote Button */}
              <Magnetic strength={0.18}>
                <motion.a
                  href="#contact"
                  onClick={handleQuoteClick}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 lg:px-8 lg:py-4 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-sm lg:text-base tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:translate-x-1.5 transition-transform" />
                </motion.a>
              </Magnetic>

              {/* Secondary Intro Call Button */}
              <Magnetic strength={0.15}>
                <motion.button
                  onClick={handleBookCall}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3.5 lg:px-7 lg:py-4 rounded-full bg-white hover:bg-[#F4F6F5] text-[#14201D] border border-[#DBE3E0] hover:border-[#2E756E]/40 font-semibold text-sm lg:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-[#2E756E]" />
                  <span>Book a Free Intro Call</span>
                </motion.button>
              </Magnetic>

              {/* Explore Services Link */}
              <a
                href="#services"
                onClick={handleServicesClick}
                data-cursor="Explore"
                className="text-xs sm:text-sm font-semibold text-[#14201D] hover:text-[#2E756E] transition-colors py-2 text-center sm:text-left underline underline-offset-4 cursor-pointer"
              >
                Explore Services →
              </a>
            </motion.div>

            {/* Trust Chips under the CTAs with staggered reveal & hover lift */}
            <motion.div variants={childVariants} className="pt-4 border-t border-[#DBE3E0]">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {trustChips.map((chip, idx) => {
                  const Icon = chip.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#14201D] bg-white hover:border-[#2E756E]/40 px-3.5 py-2.5 rounded-2xl border border-[#DBE3E0] shadow-xs hover:shadow-sm transition-all cursor-default min-h-[46px] w-full"
                    >
                      <Icon className="w-4 h-4 text-[#2E756E] shrink-0" />
                      <span className="leading-snug">{chip.text}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Tag indicator below chips */}
              <div className="flex items-center gap-2 mt-4 text-xs text-[#5A6A65]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E756E]" />
                <span>Offshore engineering support for global teams</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: High-tech Engineering CAD Wireframe Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <CADWireframeVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
