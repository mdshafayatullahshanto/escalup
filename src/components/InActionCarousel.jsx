// src/components/InActionCarousel.jsx
// STEP 3 - Item 5: Black "In Action" section with a horizontal carousel and the same arrow/counter controls.

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Badge from './ui/Badge';

const ACTION_PROJECTS = [
  {
    id: 1,
    title: 'Automated Conveyor & Packaging Cell Kinematics',
    discipline: 'Mechanical Solid Modeling',
    clientType: 'European Automation Equipment Builder',
    outcome: 'Eliminated 18 shop-floor interference points prior to tooling manufacture.',
    metric: '18 Clashes Prevented',
    standards: 'ASME Y14.5M · ISO 1101 · SolidWorks Native',
    deliverables: ['3D Parametric CAD Assembly', '2D Manufacturing Drawings with GD&T', 'Full Multi-Level Indented BOM'],
    gradient: 'from-blue-900/40 via-indigo-900/20 to-transparent',
  },
  {
    id: 2,
    title: 'Hospital Complex Commercial HVAC & Plumbing LOD 400',
    discipline: 'MEP BIM Coordination',
    clientType: 'Commercial MEP Contracting Firm',
    outcome: 'Delivered coordinated Revit models with zero spatial collisions in medical gas and duct risers.',
    metric: '124 Spatial Collisions Solved',
    standards: 'Autodesk Revit · Navisworks · ASHRAE 90.1',
    deliverables: ['LOD 350-400 Coordinated Revit Models', 'Navisworks Clash Resolution Matrix', 'Contractor Spool & Shop Drawings'],
    gradient: 'from-teal-900/40 via-emerald-900/20 to-transparent',
  },
  {
    id: 3,
    title: 'High-Volume Precision Sheet Metal Enclosures',
    discipline: 'DFMA & Tooling Detailing',
    clientType: 'Industrial Electronics Manufacturer',
    outcome: 'Standardized bend deductions and flat patterns, cutting press brake cycle time by 28%.',
    metric: '28% Cycle Time Cut',
    standards: 'Sheet Metal DIN 6935 · K-Factor 0.44',
    deliverables: ['Unfolded DXF Flat Patterns for Laser Cutting', 'Forming & Bend Sequence Drawings', 'Tooling & Inspection Fixture Prints'],
    gradient: 'from-purple-900/40 via-pink-900/20 to-transparent',
  },
  {
    id: 4,
    title: 'Turbine Housing Assembly Drawing Border Migration',
    discipline: 'PLM Vault Data Governance',
    clientType: 'Energy Systems Supplier',
    outcome: 'Converted 1,400+ legacy 2D drawings into native parametric models with 100% ERP BOM parity.',
    metric: '1,400+ Drawings Standardized',
    standards: 'Siemens NX · Teamcenter PDM · ASME Y14.100',
    deliverables: ['Native 3D NX Models with Feature Trees', 'Teamcenter Vault Attribute Mapping', 'Drawing Border & Title Block Migration'],
    gradient: 'from-cyan-900/40 via-blue-900/20 to-transparent',
  }
];

export default function InActionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? ACTION_PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === ACTION_PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const current = ACTION_PROJECTS[currentIndex];

  return (
    <section className="py-20 sm:py-28 md:py-32 bg-[#0B0F14] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background blueprint aesthetics */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0070AD]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#14F3C1] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#14F3C1]" />
              <span>Engineering in Action</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              Real Delivery,{' '}
              <span className="font-semibold text-white">
                Measurable Impact.
              </span>
            </h2>
          </div>

          {/* Navigation Controls: Counter + Prev/Next Buttons */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono tracking-widest text-white/60">
              <strong className="text-white font-bold">{currentIndex + 1}</strong> / {ACTION_PROJECTS.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous in action case"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next in action case"
                className="w-10 h-10 rounded-full bg-[#0070AD] hover:bg-[#005c8f] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-8 sm:p-12 lg:p-16 rounded-3xl sm:rounded-[36px] bg-[#111720] border border-white/15 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left 7 cols: Case Narrative */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Badge variant="teal" size="sm">
                      {current.discipline}
                    </Badge>
                    <span className="text-xs font-mono text-white/50">
                      {current.clientType}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                    {current.outcome}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#14F3C1]">
                      Key Production Deliverables:
                    </div>
                    {current.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#14F3C1] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs font-mono text-white/50 pt-2">
                    Governed Under: {current.standards}
                  </div>
                </div>

                {/* Right 5 cols: Large Metric Panel */}
                <div className="lg:col-span-5 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between text-left">
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-[#0070AD] uppercase tracking-wider">
                      Verified Result
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                      {current.metric}
                    </div>
                    <div className="text-xs text-white/70 font-mono">
                      Documented in project release logs
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-white/80 font-mono">
                      <ShieldCheck className="w-4 h-4 text-[#14F3C1]" />
                      <span>Protected by Mutual NDA</span>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14F3C1] hover:underline"
                    >
                      <span>Inquire Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
