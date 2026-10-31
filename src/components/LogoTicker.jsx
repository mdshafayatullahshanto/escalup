// /src/components/LogoTicker.jsx
// Consilio-style continuous animated marquee ticker showcasing engineering CAD/BIM standards & software
// Modern monochrome styling

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
    <div className="w-full border-y border-white/10 bg-[#0A0A0A] py-5 overflow-hidden relative select-none">
      <div className="max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 mb-3 flex items-center justify-between text-xs text-[#A1A1AA]">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="uppercase text-[11px] font-bold text-white tracking-wider">Supported Engineering Environments & Compliance</span>
        </div>
        <span className="hidden sm:inline-block text-[11px] font-mono text-[#71717A]">100% Native Files · Zero Translation Loss</span>
      </div>

      <div className="flex overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-6 shrink-0 whitespace-nowrap"
        >
          {[...PLATFORMS, ...PLATFORMS].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#121214] border border-white/10 hover:border-white/30 transition-colors cursor-default group"
            >
              <div className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
              <span className="text-sm font-bold text-white tracking-tight">{item.name}</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A1A1AA] font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">
                {item.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
