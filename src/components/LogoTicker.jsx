// /src/components/LogoTicker.jsx
// Continuous animated marquee ticker showcasing engineering CAD/BIM standards & software
// Unified design system: Lavender/white tokens, indigo accents, zero green, zero mono

import React from 'react';
import { motion } from 'framer-motion';

const PLATFORMS = [
  { name: 'SolidWorks', category: '3D Parametric CAD' },
  { name: 'Autodesk Revit', category: 'BIM LOD 300+' },
  { name: 'ASME Y14.5', category: 'GD&T Drafting' },
  { name: 'Navisworks Manage', category: 'Clash Detection' },
  { name: 'Carrier HAP', category: 'HVAC Load Analysis' },
  { name: 'Siemens NX', category: 'Advanced CAD/CAM' },
  { name: 'ASME & ISO Standards', category: 'Quality & Tolerances' },
  { name: 'Autodesk Inventor', category: 'Mechanical Assembly' },
  { name: 'AutoCAD MEP', category: 'Coordinated Systems' },
  { name: 'Tekla Structures', category: 'Structural Detailing' }
];

export default function LogoTicker() {
  return (
    <div className="w-full border-y border-[#E2E6EE] dark:border-white/10 bg-[#F6F7FC] dark:bg-[#0B0F14] py-4 sm:py-5 overflow-hidden relative select-none font-sans">
      <div className="max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 mb-3 flex items-center justify-between gap-4 text-xs text-[#5A6679] dark:text-[#9BA8BA]">
        <div className="flex items-center gap-2 font-medium tracking-wide min-w-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5846F6] flex-shrink-0" />
          <span className="sm:hidden uppercase text-[11px] font-semibold text-[#111827] dark:text-white tracking-wider">Supported Platforms</span>
          <span className="hidden sm:inline uppercase text-[11px] font-semibold text-[#111827] dark:text-white tracking-wider leading-tight">Supported Engineering Environments &amp; Compliance</span>
        </div>
        <span className="hidden sm:inline-block text-[11px] text-[#5A6679] dark:text-[#9BA8BA] whitespace-nowrap flex-shrink-0">Native Parametric CAD Files · Client Drawing Borders</span>
      </div>

      <div className="flex overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-4 sm:gap-6 shrink-0 whitespace-nowrap"
        >
          {[...PLATFORMS, ...PLATFORMS].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white dark:bg-[#11161F] border border-[#E2E6EE] dark:border-white/10 hover:border-[#5846F6]/40 dark:hover:border-[#5846F6]/40 shadow-xs transition-colors cursor-default group"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#5846F6]/40 group-hover:bg-[#5846F6] transition-colors flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#111827] dark:text-white tracking-tight">{item.name}</span>
              <span className="hidden sm:inline text-[10px] font-medium uppercase tracking-wider text-[#5A6679] dark:text-[#9BA8BA] bg-[#EEF2F8] dark:bg-[#1A232E] px-2 py-0.5 rounded border border-[#E2E6EE]/70 dark:border-white/10">
                {item.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
