// /src/components/Hero.jsx
// Consilio-inspired hero section engineered for international engineering procurement
// Modern, crisp black-and-white theme with high contrast typography and clear CTAs

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ShieldCheck, Clock, Award, Globe, Star, Compass } from 'lucide-react';
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
    <section className="relative overflow-hidden min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-12 lg:py-16 2xl:py-20 border-b border-white/10 bg-[#0A0A0A] blueprint-grid">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 2xl:gap-16 items-center">
          
          {/* Left Column: Copy & High-converting CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 lg:space-y-8 text-left"
          >
            {/* Eyebrow Label + Social Proof Pill */}
            <motion.div variants={childVariants} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span>Offshore Engineering Services | CAD · MEP · BIM</span>
              </div>

              {/* Consilio-style Review Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#121214] text-white border border-white/10 shadow-xs">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-bold">4.9 / 5.0</span>
                <span className="text-[#A1A1AA]">· Trusted by global teams</span>
              </div>
            </motion.div>

            {/* Main Headline - Crisp, High-Contrast Pure White */}
            <motion.h1
              variants={childVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[4.25rem] font-extrabold text-white tracking-tight leading-[1.22] sm:leading-[1.2] md:leading-[1.18] pb-1"
            >
              We bring people and engineering together to{' '}
              <span className="text-white relative inline-block">
                build things better.
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-2.5 text-white/40"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={childVariants}
              className="text-base sm:text-lg lg:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed"
            >
              <strong className="text-white font-bold">escalup</strong> is your dedicated offshore engineering partner. We deliver Mechanical, Product and MEP design support for manufacturers, engineering firms and contractors worldwide, with clear communication and production-ready documentation.
            </motion.p>

            {/* High-Contrast Pill Actions (Primary Quote, Intro Call & Prominent Explore Button) */}
            <motion.div
              variants={childVariants}
              className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 lg:gap-4"
            >
              {/* Primary Action Button */}
              <Magnetic strength={0.18}>
                <motion.a
                  href="#contact"
                  onClick={handleQuoteClick}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 lg:px-8 lg:py-4 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-sm lg:text-base tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-black group-hover:translate-x-1.5 transition-transform" />
                </motion.a>
              </Magnetic>

              {/* Secondary Intro Call Button */}
              <Magnetic strength={0.15}>
                <motion.button
                  onClick={handleBookCall}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3.5 lg:px-7 lg:py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white font-semibold text-sm lg:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  <span>Book 30-Min Intro Call</span>
                </motion.button>
              </Magnetic>

              {/* Prominent High-Visibility Explore Button */}
              <Magnetic strength={0.15}>
                <motion.a
                  href="#services"
                  onClick={handleServicesClick}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor="Explore"
                  className="px-6 py-3.5 lg:px-7 lg:py-4 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white border border-white/20 hover:border-white font-semibold text-sm lg:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                >
                  <Compass className="w-4 h-4 text-white/80 group-hover:rotate-45 transition-transform" />
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </Magnetic>
            </motion.div>

            {/* Trust Chips under the CTAs with staggered reveal & hover lift */}
            <motion.div variants={childVariants} className="pt-4 border-t border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {trustChips.map((chip, idx) => {
                  const Icon = chip.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white/90 bg-[#121214] hover:border-white/40 px-3.5 py-2.5 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-all cursor-default min-h-[46px] w-full"
                    >
                      <Icon className="w-4 h-4 text-white shrink-0" />
                      <span className="leading-snug">{chip.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: High-tech Monochrome CAD Wireframe Graphic */}
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
