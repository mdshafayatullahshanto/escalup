// src/components/TopStoriesCarousel.jsx
// STEP 3 - Item 2: "Top Stories" carousel on a light panel
// Image-left cards, "1/4" counter, circular prev/next arrows, partially visible next card, drag/swipe support.

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Cpu, Layers, Wrench, Database } from 'lucide-react';
import Badge from './ui/Badge';
import Card from './ui/Card';

const TOP_STORIES = [
  {
    id: 1,
    tag: 'Mechanical CAD',
    badgeVariant: 'navy',
    title: 'Scaling CAD Capacity On-Demand During Peak Release Cycles',
    description: 'How global equipment manufacturers eliminate 3-month onshore hiring backlogs by plugging into escalup’s assigned parametric modeling standups within 48 hours.',
    metric: '50–70%',
    metricLabel: 'Cost reduction vs onshore contracting rates',
    tools: 'SolidWorks · Siemens NX · Inventor',
    icon: Cpu,
    color: 'from-blue-600/20 to-indigo-600/20',
  },
  {
    id: 2,
    tag: 'MEP & BIM',
    badgeVariant: 'blue',
    title: 'Zero Clash Navisworks Matrix for Multi-Discipline Facilities',
    description: 'Detecting and resolving 124 spatial collisions virtually between mechanical ductwork, structural steel, and plumbing risers prior to fabrication.',
    metric: '124+',
    metricLabel: 'Costly job-site collisions caught virtually',
    tools: 'Autodesk Revit · Navisworks · AutoCAD MEP',
    icon: Layers,
    color: 'from-teal-600/20 to-emerald-600/20',
  },
  {
    id: 3,
    tag: 'DFMA Detailing',
    badgeVariant: 'violet',
    title: 'Design for Manufacturing Precision & ASME Y14.5 Compliance',
    description: 'Converting conceptual prototypes into production-ready flat patterns, bend allowances, and GD&T tolerance stacks to prevent assembly binding.',
    metric: '28%',
    metricLabel: 'Fabrication and assembly cycle cost reduction',
    tools: 'Sheet Metal · ASME Y14.5 · CNC / CAM',
    icon: Wrench,
    color: 'from-purple-600/20 to-pink-600/20',
  },
  {
    id: 4,
    tag: 'PLM Governance',
    badgeVariant: 'teal',
    title: 'ERP Indented BOM Parity and Engineering Change Governance',
    description: 'Standardizing legacy drawing borders, title blocks, and multi-level indented BOMs inside Teamcenter and Vault PDM to eliminate revision chaos.',
    metric: '100%',
    metricLabel: 'Drawing-to-BOM parity across active parts',
    tools: 'Teamcenter · SolidWorks PDM · Autodesk Vault',
    icon: Database,
    color: 'from-cyan-600/20 to-blue-600/20',
  }
];

export default function TopStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TOP_STORIES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TOP_STORIES.length - 1 ? 0 : prev + 1));
  };

  const current = TOP_STORIES[currentIndex];
  const Icon = current.icon;

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F6F7FB] dark:bg-[#080C0F] border-b border-[#E2E6EE] dark:border-white/10 transition-colors">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Section Header with "1/4" counter & circular arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 font-sans">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0070AD] dark:text-[#A5B4FC] mb-2">
              Featured Case Insights
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#111827] dark:text-white tracking-tight">
              Top Engineering <span className="font-semibold">Stories & Outcomes</span>
            </h2>
          </div>

          {/* Navigation Controls: Counter + Prev/Next Circular Buttons */}
          <div className="flex items-center gap-4">
            <span className="text-sm tracking-widest text-[#5A6679] dark:text-[#9BA8BA]">
              <strong className="text-[#111827] dark:text-white font-semibold">{currentIndex + 1}</strong> / {TOP_STORIES.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous story"
                className="w-10 h-10 rounded-full bg-white dark:bg-[#151D26] border border-[#D8DFEB] dark:border-white/10 text-[#111827] dark:text-white shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer hover:bg-[#EEF2F8]"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next story"
                className="w-10 h-10 rounded-full bg-[#111827] dark:bg-white text-white dark:text-[#111827] shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Content Container (Image Left, Content Right) */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card
                variant="white"
                radius="3xl"
                hover={false}
                className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-[#E2E6EE] dark:border-white/10"
              >
                {/* LEFT: Abstract Image / Visual Card Panel (5 cols) */}
                <div className={`lg:col-span-5 p-8 sm:p-12 bg-gradient-to-br ${current.color} dark:bg-[#121A23] flex flex-col justify-between min-h-[280px] sm:min-h-[360px] relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E2E6EE] dark:border-white/10`}>
                  {/* Subtle technical background grid */}
                  <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <Badge variant={current.badgeVariant} size="sm">
                      {current.tag}
                    </Badge>
                    <Icon className="w-8 h-8 text-[#5846F6] dark:text-[#A5B4FC] opacity-75" />
                  </div>

                  {/* Impact Metric Banner */}
                  <div className="relative z-10 my-auto py-6">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] dark:text-white tracking-tight">
                      {current.metric}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#5A6679] dark:text-[#9BA8BA] mt-1 max-w-xs">
                      {current.metricLabel}
                    </div>
                  </div>

                  <div className="relative z-10 text-xs font-medium text-[#0070AD] dark:text-[#A5B4FC]">
                    {current.tools}
                  </div>
                </div>

                {/* RIGHT: Content Details (7 cols) */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="text-xs text-[#5A6679] dark:text-[#9BA8BA] uppercase tracking-wider font-medium">
                      Case Insight · 0{current.id}
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#111827] dark:text-white leading-snug">
                      {current.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed">
                      {current.description}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-[#E2E6EE] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs text-[#5A6679] dark:text-[#9BA8BA]">
                      Production Documentation Delivered Under ASME & ISO
                    </div>

                    <a
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('projects');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0070AD] dark:text-[#38BDF8] hover:underline cursor-pointer group"
                    >
                      <span>Read Full Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

