// /src/components/SampleProjects.jsx
// Interactive filtered sample engineering projects with Framer Motion layout animations

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Layers, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projects';
import SectionHeading from './SectionHeading';

export default function SampleProjects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F4F6F5] dark:bg-[#0B111E] border-b border-[#DBE3E0] dark:border-[#223249] relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <SectionHeading
          eyebrow="Proven Engineering Outputs"
          title="Sample Projects & Technical Deliverables"
          subtitle="Representative engineering packages delivered to international standards. Anonymized to respect non-disclosure obligations."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'bg-white dark:bg-[#121C2D] text-[#5A6A65] dark:text-[#94A3B8] hover:text-[#14201D] dark:hover:text-[#F1F5F9] border border-[#DBE3E0] dark:border-[#223249]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-[#2E756E] rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Project Cards Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8, scale: 1.01 }}
                data-cursor="Deliverable"
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white dark:bg-[#121C2D] rounded-2xl p-6 sm:p-7 border border-[#DBE3E0] dark:border-[#223249] hover:border-[#2E756E]/40 dark:hover:border-[#38B2A6]/40 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Top row: Category tag + Sample project label */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#2E756E]/10 dark:bg-[#2E756E]/20 text-[#2E756E] dark:text-[#34A096]">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[10px] font-semibold text-[#889893] dark:text-[#94A3B8] bg-[#F4F6F5] dark:bg-[#162235] px-2 py-0.5 rounded border border-[#DBE3E0] dark:border-[#223249]">
                      Sample project
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#14201D] dark:text-[#F1F5F9] mb-2.5 group-hover:text-[#2E756E] dark:group-hover:text-[#34A096] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#94A3B8] mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Scope Line */}
                  <div className="py-2.5 px-3 rounded-xl bg-[#F4F6F5] dark:bg-[#162235] border border-[#DBE3E0]/70 dark:border-[#223249] text-xs text-[#14201D] dark:text-[#F1F5F9] mb-4">
                    <span className="font-bold text-[#2E756E] dark:text-[#34A096] block text-[10px] uppercase tracking-wider mb-0.5">
                      Scope of Work:
                    </span>
                    <span className="font-medium text-xs text-[#5A6A65] dark:text-[#94A3B8]">{project.scope}</span>
                  </div>
                </div>

                {/* Footer Tools & Metric */}
                <div className="pt-4 border-t border-[#DBE3E0]/70 dark:border-[#223249] flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono font-medium text-[#14201D] dark:text-[#F1F5F9] bg-white dark:bg-[#162235] px-2 py-0.5 rounded border border-[#DBE3E0] dark:border-[#223249]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-transparent dark:border-emerald-800/40">
                    {project.metrics}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  );
}
