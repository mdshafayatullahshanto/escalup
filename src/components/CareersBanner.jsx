// src/components/CareersBanner.jsx
// SECTION 2: Compact, edge-aligned careers & partnership dark band.
// Unified near-black/indigo tone, max-w-[1400px] container, 42% portrait with gradient overlay,
// minimum 14px text, mobile stacked image-above-text, subtle scroll reveal.

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import founderImg from '../assets/founder.png';
import Button from './ui/Button';
import Badge from './ui/Badge';

export default function CareersBanner({ onOpenCalendly }) {
  const handleConnectClick = () => {
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open('https://cal.com/escalup/book-a-call', '_blank', 'noopener,noreferrer');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="w-full bg-[#080B11] bg-gradient-to-b from-[#080B11] via-[#0B0F18] to-[#080B11] text-white py-12 sm:py-16 md:py-20 border-y border-white/10 relative overflow-hidden font-sans">
      {/* Subtle ambient lighting */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#5846F6]/06 rounded-full blur-[150px] pointer-events-none" />

      {/* Shared ~1400px centered container with equal padding */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* 
          Two-column layout aligned to container edges without empty void:
          Mobile: flex-col-reverse (image stacked above text)
          Desktop: lg:flex-row with text on left, portrait on right
        */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Text Block (56% width on desktop) */}
          <motion.div
            className="w-full lg:w-[56%] space-y-5 sm:space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div variants={itemVariants}>
              <Badge variant="navy" size="sm" className="bg-[#121926] text-[#A5B4FC] border border-white/10">
                Careers & Global Engineering Partnerships
              </Badge>
            </motion.div>

            {/* Light-weight headline with "Dedicated Offshore Engineering Talent." in semibold */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-white tracking-tight leading-[1.18]"
            >
              Scale Your Project Team with{' '}
              <span className="font-semibold text-white">
                Dedicated Offshore Engineering Talent.
              </span>
            </motion.h2>

            {/* Paragraph with >= 14px text and WCAG AA contrast */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-[15px] text-white/80 max-w-xl leading-relaxed font-normal"
            >
              Whether you need overflow 3D parametric CAD modeling, MEP clash resolution, or full-time dedicated drafters for an upcoming release, escalup delivers production-ready engineering under strict mutual NDA.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              {/* White pill CTA with arrow */}
              <Button
                variant="white"
                size="lg"
                onClick={handleConnectClick}
                icon="arrow"
                className="shadow-xl px-7"
              >
                Schedule an Engineering Intro Call
              </Button>

              {/* Client owns 100% of IP note (14px, WCAG AA compliant) */}
              <div className="flex items-center gap-2 text-sm text-white/75">
                <ShieldCheck className="w-4 h-4 text-[#5846F6]" />
                <span>Client owns 100% of IP</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Portrait (42% width on desktop, stacked on mobile) */}
          <motion.div
            className="w-full sm:w-[85%] md:w-[70%] lg:w-[42%] flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="w-full max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative bg-[#0D121B] border border-white/15 group">
              {/* Large Grayscale Portrait */}
              <img
                src={founderImg}
                alt="Md. Shafayatullah Shanto - Founder & Principal Engineer at escalup"
                className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Bottom Gradient Overlay with Name and Title */}
              <div className="absolute inset-x-0 bottom-0 p-6 pt-16 bg-gradient-to-t from-[#080B11] via-[#080B11]/85 to-transparent flex flex-col justify-end text-left">
                <h4 className="text-base sm:text-lg font-medium text-white tracking-tight">
                  Md. Shafayatullah Shanto
                </h4>
                <p className="text-sm text-white/75 mt-0.5">
                  Founder & Lead Mechanical Engineer, escalup
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}