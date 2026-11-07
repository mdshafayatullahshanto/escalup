// src/components/CareersBanner.jsx
// SECTION 2: Careers & Offshore Engineering Team White Card Band
// Styled strictly to reference (Image 3):
// Light page background (#F6F7FB), large white container card with soft shadow and crisp border,
// blue uppercase letterspaced eyebrow, light headline with signature indigo gradient,
// clean bullet proof points with indigo checkmarks, black pill button with arrow,
// grayscale portrait with caption below the card.

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import founderImg from '../assets/founder.png';
import Button from './ui/Button';

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
        staggerChildren: 0.08,
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
    <section className="w-full bg-[#F6F7FB] dark:bg-[#080C0F] text-[#111827] dark:text-white py-14 sm:py-20 md:py-24 border-y border-[#E2E6EE] dark:border-white/10 relative overflow-hidden font-sans transition-colors">
      {/* Subtle ambient lighting */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#5846F6]/05 dark:bg-[#5846F6]/06 rounded-full blur-[150px] pointer-events-none" />

      {/* Shared ~1400px centered container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Large White Container Card (Matching Reference Style) */}
        <div className="w-full rounded-3xl bg-white dark:bg-[#11161B] border border-[#E2E6EE] dark:border-white/10 shadow-card p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          {/* Two-column layout aligned without empty voids */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
            
            {/* Left Text Block (56% width on desktop) */}
            <motion.div
              className="w-full lg:w-[56%] space-y-6 text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {/* Eyebrow: Reference Style (Uppercase, letterspaced, blue/indigo) */}
              <motion.div 
                variants={itemVariants}
                className="text-xs font-semibold uppercase tracking-widest text-[#0070AD] dark:text-[#38BDF8]"
              >
                Global Engineering Partnerships
              </motion.div>

              {/* Headline: Reference Style (Light 300 with signature indigo gradient) */}
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#111827] dark:text-white tracking-tight leading-[1.18] max-w-xl [text-wrap:balance]"
              >
                Scale Your Project Team with{' '}
                <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
                  Dedicated Offshore Talent.
                </span>
              </motion.h2>

              {/* Paragraph copy */}
              <motion.p 
                variants={itemVariants}
                className="text-sm sm:text-base text-[#475569] dark:text-[#9BA8BA] max-w-xl leading-relaxed font-normal"
              >
                When your workload grows, Escalup adds engineering capacity to your team. This can be overflow 3D parametric CAD modeling, MEP clash resolution, or dedicated mechanical and MEP specialists for an upcoming release. Our engineers join your standups, work to your drawing standards, and follow the same Design Approach on every project. Team size and engagement terms are agreed per project.
              </motion.p>

              {/* Clean bullet proof points */}
              <motion.div variants={itemVariants} className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-sm sm:text-[15px] text-[#1E293B] dark:text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0" />
                  <span>Native parametric CAD files in the client's drawing format</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-[15px] text-[#1E293B] dark:text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0" />
                  <span>Work carried out under a mutual NDA</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-[15px] text-[#1E293B] dark:text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0" />
                  <span>Client owns all project IP</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-[15px] text-[#1E293B] dark:text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0" />
                  <span>Project data in a Microsoft 365 environment, adaptable to client tools</span>
                </div>
              </motion.div>

              {/* CTA Row with Black Pill Button */}
              <motion.div 
                variants={itemVariants}
                className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-5"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleConnectClick}
                  icon="arrow"
                  className="shadow-md px-7"
                >
                  Schedule an Engineering Intro Call
                </Button>

                <div className="flex items-center gap-2 text-sm text-[#5A6679] dark:text-[#9BA8BA]">
                  <ShieldCheck className="w-4 h-4 text-[#5846F6]" />
                  <span>Client owns all project IP</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Portrait Column (42% width on desktop) */}
            <motion.div
              className="w-full sm:w-[85%] md:w-[70%] lg:w-[42%] flex justify-center lg:justify-end"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="w-full max-w-[420px]">
                {/* Grayscale Portrait Frame */}
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-card relative bg-[#EEF2F8] dark:bg-[#151D26] border border-[#E2E6EE] dark:border-white/10 group">
                  <img
                    src={founderImg}
                    alt="Md. Shafayat Ullah Shanto - Founder & Lead Mechanical Engineer at Escalup"
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Caption positioned cleanly BELOW the portrait */}
                <div className="pt-4 text-left">
                  <h4 className="text-base sm:text-lg font-medium text-[#111827] dark:text-white tracking-tight">
                    <em><strong>Md. Shafayat Ullah Shanto</strong></em>
                  </h4>
                  <p className="text-sm text-[#5A6679] dark:text-[#9BA8BA] mt-0.5 font-normal">
                    Founder & Lead Mechanical Engineer, Escalup
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
