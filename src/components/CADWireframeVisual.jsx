// /src/components/CADWireframeVisual.jsx
// Modern technical CAD wireframe graphic derived from the circular escalup "e" mark, mechanical crosshairs, and isometric guides
// Exact color combination matching reference screenshot

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
      <div className="absolute w-[92%] h-[92%] rounded-full border border-[#DBE3E0] bg-white/70 backdrop-blur-sm shadow-xl flex items-center justify-center overflow-hidden">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 blueprint-grid opacity-35" />

        {/* Technical compass circle indicators */}
        <div className="absolute w-[62%] h-[62%] rounded-full border border-dashed border-[#2E756E]/20 animate-[spin_120s_linear_infinite]" />
        <div className="absolute w-[78%] h-[78%] rounded-full border border-[#2E756E]/15" />
      </div>

      {/* Rotating technical coordinate rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[84%] h-[84%] rounded-full border border-dashed border-[#2E756E]/20"
      />

      {/* The Central escalup Hero Geometry */}
      <div className="relative z-10 w-[58%] h-[58%] flex items-center justify-center">
        <svg viewBox="-240 -240 480 480" className="w-full h-full filter drop-shadow-[0_10px_25px_rgba(46,117,110,0.18)] overflow-visible">
          <defs>
            <linearGradient id="cadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E756E" />
              <stop offset="100%" stopColor="#1E4B47" />
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
          <circle cx="0" cy="0" r="162" fill="none" stroke="#2E756E" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.25" />
          <circle cx="0" cy="0" r="105" fill="none" stroke="#2E756E" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.2" />
          <circle cx="0" cy="0" r="42" fill="none" stroke="#2E756E" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.2" />

          {/* Symmetrical Hatch Outline */}
          <g transform="rotate(-22) scale(1.05)" opacity="0.2">
            <path
              fill="none"
              stroke="#2E756E"
              strokeWidth="2"
              strokeDasharray="4 4"
              d="M147.75 30.16 A150.80 150.80 0 1 0 120.64 90.48 L0 90.48 A90.48 90.48 0 1 1 85.31 -30.16 L0 -30.16 A30.16 30.16 0 0 0 0 30.16 Z"
            />
          </g>

          {/* Primary escalup geometry in deep brand teal */}
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

          {/* Dimension Leaders & Annotations */}
          <g className="font-mono">
            {/* Dimension 1: Outer Diameter (Top-Right) */}
            <path
              d="M 0 -152 L 0 -185 L 50 -185"
              fill="none"
              stroke="#2E756E"
              strokeWidth="1"
              markerStart="url(#cadArrow)"
              opacity="0.75"
            />
            <rect x="56" y="-196" width="96" height="20" rx="4" fill="#FFFFFF" stroke="#DBE3E0" strokeWidth="0.8" opacity="0.95" />
            <text x="104" y="-182" fill="#14201D" fontSize="9.5" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
              Ø 301.60 ±0.05
            </text>

            {/* Dimension 2: Inner Bore Radius (Top-Left) */}
            <path
              d="M -30 0 L -85 0 L -85 -55"
              fill="none"
              stroke="#2E756E"
              strokeWidth="1"
              markerStart="url(#cadArrow)"
              opacity="0.75"
            />
            <rect x="-142" y="-72" width="76" height="20" rx="4" fill="#FFFFFF" stroke="#DBE3E0" strokeWidth="0.8" opacity="0.95" />
            <text x="-104" y="-58" fill="#14201D" fontSize="9.5" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
              +R30.16 mm
            </text>

            {/* Dimension 3: GD&T Feature Control Frame (Bottom-Right) */}
            <path
              d="M 70 85 L 120 135 L 155 135"
              fill="none"
              stroke="#2E756E"
              strokeWidth="1"
              markerStart="url(#cadArrow)"
              opacity="0.75"
            />
            <g transform="translate(155, 124)">
              <rect x="0" y="0" width="100" height="22" rx="4" fill="#FFFFFF" stroke="#DBE3E0" strokeWidth="0.8" opacity="0.95" />
              <line x1="28" y1="0" x2="28" y2="22" stroke="#DBE3E0" strokeWidth="0.8" />
              <line x1="72" y1="0" x2="72" y2="22" stroke="#DBE3E0" strokeWidth="0.8" />
              {/* Position Symbol */}
              <circle cx="14" cy="11" r="5" fill="none" stroke="#2E756E" strokeWidth="1" />
              <line x1="14" y1="3" x2="14" y2="19" stroke="#2E756E" strokeWidth="1" />
              <line x1="6" y1="11" x2="22" y2="11" stroke="#2E756E" strokeWidth="1" />
              {/* Tolerance */}
              <text x="50" y="15" fill="#14201D" fontSize="9.5" fontWeight="bold" textAnchor="middle">Ø 0.02</text>
              {/* Datum */}
              <text x="86" y="15" fill="#14201D" fontSize="10" fontWeight="bold" textAnchor="middle">A</text>
            </g>
          </g>
        </svg>
      </div>

      {/* Floating technical badges */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 right-2 sm:right-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#DBE3E0] shadow-sm text-[11px] font-mono text-[#14201D]"
      >
        <span className="font-bold text-[#14201D] block">ASME Y14.5M</span>
        <span className="text-[10px] text-[#5A6A65]">LOD 350 Precision</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-6 left-2 sm:left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#DBE3E0] shadow-sm text-[11px] font-mono text-[#14201D]"
      >
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="w-2 h-2 rounded-full bg-[#2E756E] animate-pulse" />
          <span className="font-bold text-[#14201D]">Zero Clash Verified</span>
        </div>
        <div className="h-4 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.span
              key={softwareIndex}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] text-[#5A6A65] block"
            >
              {SOFTWARE_LIST[softwareIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
