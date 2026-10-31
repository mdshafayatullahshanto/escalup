// /src/components/LogoTicker.jsx
// Consilio-style continuous animated marquee ticker showcasing engineering CAD/BIM standards & software

import React from 'react';
import { motion } from 'framer-motion';

const PLATFORMS = [
  { name: 'SolidWorks', category: '3D Parametric CAD' },
  { name: 'Autodesk Revit', category: 'BIM LOD 300+' },
  { name: 'ASME Y14.5', category: 'GD&T Drafting' },
  { name: 'Navisworks Manage', category: 'Clash Detection' },
  { name: 'Carrier HAP', category: 'HVAC Load Analysis' },
  { name: 'Siemens NX', category: 'Advanced CAD/CAM' },
  { name: 'ISO 9001 Compliance', category: 'Quality Control' },
  { name: 'Autodesk Inventor', category: 'Mechanical Assembly' },
  { name: 'AutoCAD MEP', category: 'Coordinated Systems' },
  { name: 'Tekla Structures', category: 'Structural Detailing' }
];

export default function LogoTicker() {
  return (
    <div className="w-full border-y border-[#DBE3E0] dark:border-[#223249]/60 bg-white/70 dark:bg-[#001517]/80 backdrop-blur-sm py-5 overflow-hidden relative select-none">
      <div className="max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 mb-3 flex items-center justify-between text-xs text-[#5A6A65] dark:text-[#94A3B8]">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E756E] dark:bg-[#14F3C1] animate-pulse" />
          <span className="uppercase text-[11px] font-bold text-[#14201D] dark:text-white">Supported Engineering Environments & Compliance</span>
        </div>
        <span className="hidden sm:inline-block text-[11px] font-mono text-[#889893] dark:text-[#64748B]">100% Native Files · Zero Translation Loss</span>
      </div>

      <div className="flex overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-8 shrink-0 whitespace-nowrap"
        >
          {[...PLATFORMS, ...PLATFORMS].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#F4F6F5]/80 dark:bg-[#002226]/60 border border-[#DBE3E0]/70 dark:border-[#14F3C1]/15 hover:border-[#2E756E]/40 dark:hover:border-[#14F3C1]/40 transition-colors cursor-default group"
            >
              <div className="w-2 h-2 rounded-full bg-[#2E756E] dark:bg-[#14F3C1] group-hover:scale-125 transition-transform" />
              <span className="text-sm font-bold text-[#14201D] dark:text-white tracking-tight">{item.name}</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5A6A65] dark:text-[#94A3B8] font-mono bg-white dark:bg-[#001517] px-2 py-0.5 rounded border border-[#DBE3E0]/50 dark:border-[#223249]">
                {item.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

