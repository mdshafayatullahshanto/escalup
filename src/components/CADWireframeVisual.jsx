// /src/components/CADWireframeVisual.jsx
// Modern technical CAD wireframe graphic derived from the circular escalup "e" mark, mechanical crosshairs, and isometric guides

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SOFTWARE_LIST = [
  'Native SolidWorks · Revit',
  'Autodesk Inventor · AutoCAD',
  'Siemens NX · CATIA V5',
  'Rhino 3D · Navisworks',
  'PTC Creo · Tekla Structures'
];

export default function CADWireframeVisual({ className = '' }) {
  const [softwareIndex, setSoftwareIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSoftwareIndex((prev) => (prev + 1) % SOFTWARE_LIST.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-[620px] aspect-square flex items-center justify-center select-none ${className}`}>
      {/* Blueprint background disc */}
      <div className="absolute w-[92%] h-[92%] rounded-full border border-[#2E756E]/20 dark:border-[#223249] bg-white/40 dark:bg-[#121C2D]/40 backdrop-blur-sm shadow-card flex items-center justify-center overflow-hidden">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 blueprint-grid opacity-60" />

        {/* Technical compass circle indicators (scaled dynamically & symmetrical) */}
        <div className="absolute w-[62%] h-[62%] rounded-full border border-dashed border-[#2E756E]/30 animate-[spin_120s_linear_infinite]" />
        <div className="absolute w-[78%] h-[78%] rounded-full border border-[#2E756E]/15" />
      </div>

      {/* Rotating technical coordinate rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[84%] h-[84%] rounded-full border border-dashed border-[#2E756E]/35"
      />

      {/* The Central escalup Hero Geometry */}
      <div className="relative z-10 w-[58%] h-[58%] flex items-center justify-center">
        <svg viewBox="-240 -240 480 480" className="w-full h-full filter drop-shadow-md overflow-visible">
          <defs>
            <linearGradient id="cadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E756E" />
              <stop offset="100%" stopColor="#173D39" />
            </linearGradient>
            {/* Real CAD drafting arrowhead marker */}
            <marker
              id="cadArrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 2 L 8 5 L 0 8 z" fill="#2E756E" />
            </marker>
          </defs>

          {/* Symmetrical Concentric Drafting Rings */}
          <circle cx="0" cy="0" r="162" fill="none" stroke="#2E756E" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.3" />
          <circle cx="0" cy="0" r="105" fill="none" stroke="#2E756E" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.25" />
          <circle cx="0" cy="0" r="42" fill="none" stroke="#2E756E" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.25" />

          {/* Symmetrical Symmetrical Hatch Outline (Concentric scale, zero translation offset) */}
          <g transform="rotate(-22) scale(1.05)" opacity="0.32">
            <path
              fill="none"
              stroke="#2E756E"
              strokeWidth="2"
              strokeDasharray="4 4"
              d="M147.75 30.16 A150.80 150.80 0 1 0 120.64 90.48 L0 90.48 A90.48 90.48 0 1 1 85.31 -30.16 L0 -30.16 A30.16 30.16 0 0 0 0 30.16 Z"
            />
          </g>

          {/* Primary escalup geometry */}
          <g transform="rotate(-22)">
            <path
              fill="url(#cadGrad)"
              d="M147.75 30.16 A150.80 150.80 0 1 0 120.64 90.48 L0 90.48 A90.48 90.48 0 1 1 85.31 -30.16 L0 -30.16 A30.16 30.16 0 0 0 0 30.16 Z"
            />
            {/* Center crosshair */}
            <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
            <line x1="-14" y1="0" x2="14" y2="0" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="0" y1="-14" x2="0" y2="14" stroke="#FFFFFF" strokeWidth="1.5" />
          </g>

          {/* Clear High-Visibility Dimension Leaders & Annotations (Completely Outside Logo, Zero Overlap) */}
          <g className="font-mono">
            {/* Dimension 1: Outer Diameter (Top-Right clearance) */}
            <path
              d="M 0 -152 L 0 -185 L 50 -185"
              fill="none"
              stroke="#2E756E"
              strokeWidth="1.5"
              markerStart="url(#cadArrow)"
            />
            <rect x="52" y="-198" width="146" height="26" rx="6" fill="#FFFFFF" stroke="#2E756E" strokeWidth="1.2" opacity="0.98" />
            <text x="60" y="-181" fontSize="10.5" fontWeight="700" fill="#14201D">
              Ø 301.60 mm [R150.8]
            </text>

            {/* Dimension 2: GD&T (Bottom-Right clearance, strictly outside logo) */}
            <path
              d="M 122 85 L 160 176 L 75 176"
              fill="none"
              stroke="#2E756E"
              strokeWidth="1.5"
              markerStart="url(#cadArrow)"
            />
            <rect x="75" y="163" width="136" height="26" rx="6" fill="#FFFFFF" stroke="#2E756E" strokeWidth="1.2" opacity="0.98" />
            <text x="83" y="180" fontSize="10.5" fontWeight="700" fill="#14201D">
              GD&T: // 0.02 | A
            </text>

            {/* Dimension 3: Hub Inner Radius (Top-Left clearance, strictly outside logo) */}
            <path
              d="M -24 -15 L -85 -168 L -105 -168"
              fill="none"
              stroke="#2E756E"
              strokeWidth="1.5"
              markerStart="url(#cadArrow)"
            />
            <rect x="-225" y="-181" width="118" height="26" rx="6" fill="#FFFFFF" stroke="#2E756E" strokeWidth="1.2" opacity="0.98" />
            <text x="-218" y="-164" fontSize="10" fontWeight="700" fill="#14201D">
              HUB R 30.16 mm
            </text>
          </g>
        </svg>
      </div>

      {/* Floating CAD spec tag (Top-Right) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-4, 4, -4] }}
        whileHover={{ scale: 1.06, y: -6 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 right-2 sm:top-6 sm:right-4 bg-white/95 border border-[#DBE3E0] hover:border-[#2E756E] shadow-md hover:shadow-lg rounded-xl px-4 py-2.5 text-xs font-mono backdrop-blur-md cursor-default transition-all"
      >
        <span className="text-[#2E756E] font-bold">ASME Y14.5M</span>
        <div className="text-[11px] text-[#5A6A65]">LOD 350 Precision</div>
      </motion.div>

      {/* Floating Dynamic CAD Software Badge (Bottom-Left with Live Cycling) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [4, -4, 4] }}
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-6 left-2 sm:bottom-8 sm:left-4 bg-white/95 border border-[#DBE3E0] hover:border-[#2E756E] shadow-md hover:shadow-lg rounded-xl px-4 py-2.5 text-xs font-mono backdrop-blur-md cursor-default transition-all min-w-[215px]"
      >
        <div className="flex items-center gap-1.5 text-[#14201D] font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Zero Clash Verified</span>
        </div>
        <div className="h-4.5 overflow-hidden mt-0.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={softwareIndex}
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -7 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="text-[11px] text-[#2E756E] font-semibold truncate"
            >
              {SOFTWARE_LIST[softwareIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
