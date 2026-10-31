// /src/components/AboutManifesto.jsx
// Consilio-style signature editorial statement, 3 feature pillars, and animated discipline tag ticker

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Layers, ShieldCheck } from 'lucide-react';
import Magnetic from './Magnetic';

const PILLARS = [
  {
    title: 'Mechanical & CAD Precision',
    desc: 'Parametric 3D CAD modeling, DFMA, sheet metal fabrication, and ASME Y14.5 standard manufacturing drawings.',
    icon: Cpu,
    tag: 'Mechanical'
  },
  {
    title: 'Coordinated MEP & BIM',
    desc: 'Clash-free HVAC, plumbing, and fire safety models authored at LOD 300+ in Autodesk Revit with Navisworks matrices.',
    icon: Layers,
    tag: 'BIM & MEP'
  },
  {
    title: 'Trusted Offshore Partnership',
    desc: 'Dedicated assigned engineers working under strict NDA, providing synchronous BST (UTC+6) overlap with zero overhead.',
    icon: ShieldCheck,
    tag: 'Offshore Model'
  }
];

const DISCIPLINE_TICKER = [
  'Parametric 3D CAD',
  'DFMA Optimization',
  'ASME Y14.5 & ISO Drafting',
  'Revit MEP Coordination',
  'Navisworks Clash Resolution',
  'LOD 300+ BIM Models',
  'Reverse Engineering',
  'Kinematic Motion Studies',
  '24h Quote Turnaround'
];

export default function AboutManifesto() {
  const handleAboutClick = (e) => {
    e.preventDefault();
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F4F6F5] dark:bg-[#000D0E] border-b border-[#DBE3E0] dark:border-[#223249]/60 relative overflow-hidden">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Top Header Block: Tag + Big Editorial Statement + CTA */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2E756E]/10 dark:bg-[#14F3C1]/10 text-[#2E756E] dark:text-[#14F3C1] border border-[#2E756E]/20 dark:border-[#14F3C1]/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            <span>About escalup</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#14201D] dark:text-white tracking-tight leading-[1.28] sm:leading-[1.24] md:leading-[1.22] mb-8"
          >
            escalup partners with ambitious engineering firms, manufacturers, and contractors to{' '}
            <span className="text-[#2E756E] dark:text-[#14F3C1]">simplify technical complexity</span>,{' '}
            strengthen production decisions, and deliver sustainable scale through dedicated offshore expertise.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Magnetic strength={0.15}>
              <a
                href="#about"
                onClick={handleAboutClick}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white dark:bg-[#002226] text-[#14201D] dark:text-white border border-[#DBE3E0] dark:border-[#14F3C1]/30 hover:border-[#2E756E] dark:hover:border-[#14F3C1] text-xs sm:text-sm font-bold shadow-soft hover:shadow-md transition-all group"
              >
                <span>More about our engineering hub</span>
                <ArrowRight className="w-4 h-4 text-[#2E756E] dark:text-[#14F3C1] group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* 3 Pillar Cards in Consilio Style */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-[#001517] rounded-3xl p-7 sm:p-8 border border-[#DBE3E0] dark:border-[#223249]/80 hover:border-[#2E756E]/40 dark:hover:border-[#14F3C1]/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#2E756E]/10 dark:bg-[#14F3C1]/10 text-[#2E756E] dark:text-[#14F3C1] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A6A65] dark:text-[#94A3B8] font-mono">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#14201D] dark:text-white mb-3 group-hover:text-[#2E756E] dark:group-hover:text-[#14F3C1] transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Discipline Ticker Strip (Consilio Signature) */}
        <div className="py-4 border-t border-[#DBE3E0] dark:border-[#223249]/60 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-6 shrink-0 whitespace-nowrap"
          >
            {[...DISCIPLINE_TICKER, ...DISCIPLINE_TICKER].map((discipline, i) => (
              <span key={i} className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#5A6A65] dark:text-[#94A3B8]">
                <span>{discipline}</span>
                <span className="text-[#2E756E] dark:text-[#14F3C1] opacity-60">✦</span>
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
