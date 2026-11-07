// src/components/InActionCarousel.jsx
// SECTION 1: Black "In Action" section with a horizontal peek carousel (next card ~15% visible, drag/swipe, 1/4 counter, round arrows).
// Unified design system: Inter-only font, light-weight heading, indigo accents, zero green/teal, zero monospace, zero stray dots.

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

  const nextIndex = (currentIndex + 1) % ACTION_PROJECTS.length;
  const current = ACTION_PROJECTS[currentIndex];
  const nextProject = ACTION_PROJECTS[nextIndex];

  return (
    <section className="py-20 sm:py-28 md:py-32 bg-[#0B0F14] text-white border-b border-white/10 relative overflow-hidden font-sans">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#5846F6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        {/* Section Header with Controls: No stray dots, no mono text */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="mb-3">
              <Badge variant="navy" size="sm" className="bg-[#121926] text-[#A5B4FC] border border-white/10">
                Engineering in Action
              </Badge>
            </div>
            {/* Light-weight heading with ONE semibold phrase */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              Real Delivery, <span className="font-semibold text-white">Measurable Impact.</span>
            </h2>
          </div>

          {/* Navigation Controls: Counter + Round Arrows */}
          <div className="flex items-center gap-4">
            <span className="text-sm tracking-wider text-white/60">
              <strong className="text-white font-medium">{currentIndex + 1}</strong> / {ACTION_PROJECTS.length}
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
                className="w-10 h-10 rounded-full bg-white text-[#111827] hover:bg-white/90 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Peek Carousel (Next card ~15% visible on the right) */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* Active Card (85% width on large screens) */}
            <div className="lg:col-span-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset }) => {
                    if (offset.x < -40) nextSlide();
                    if (offset.x > 40) prevSlide();
                  }}
                  className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#11161F] border border-white/15 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center cursor-grab active:cursor-grabbing"
                >
                  {/* Left 7 cols: Case Narrative */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Badge variant="navy" size="xs" className="bg-[#182232] text-[#A5B4FC] border border-white/10">
                        {current.discipline}
                      </Badge>
                      <span className="text-xs text-white/60">
                        {current.clientType}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-light text-white leading-tight">
                      {current.title}
                    </h3>

                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                      {current.outcome}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#A5B4FC]">
                        Key Production Deliverables:
                      </div>
                      {current.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                          {/* Indigo Accent Check */}
                          <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs text-white/50 pt-1">
                      Governed Under: {current.standards}
                    </div>
                  </div>

                  {/* Right 5 cols: Metric Card in Black/Indigo */}
                  <div className="lg:col-span-5 p-8 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between text-left">
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-[#A5B4FC] uppercase tracking-wider">
                        Verified Result
                      </div>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        {current.metric}
                      </div>
                      <div className="text-xs text-white/60">
                        Documented in project release logs
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white/80">
                        <ShieldCheck className="w-4 h-4 text-[#5846F6]" />
                        <span>Protected by Mutual NDA</span>
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A5B4FC] hover:text-white transition-colors"
                      >
                        <span>Inquire Scope</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Card ~15% Peek (Visible on desktop) */}
            <div 
              onClick={nextSlide}
              className="hidden lg:flex lg:col-span-2 p-6 rounded-3xl bg-[#11161F]/60 hover:bg-[#11161F] border border-white/10 opacity-70 hover:opacity-100 transition-all cursor-pointer flex-col justify-between overflow-hidden"
              title="View next case"
            >
              <div className="space-y-3">
                <Badge variant="navy" size="xs" className="bg-[#182232] text-[#A5B4FC] border border-white/10">
                  {nextProject.discipline.split(' ')[0]}
                </Badge>
                <div className="text-xs font-medium text-white/50">Next Case</div>
                <h4 className="text-sm font-light text-white line-clamp-3">
                  {nextProject.title}
                </h4>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A5B4FC]">
                <span>{nextProject.metric}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
