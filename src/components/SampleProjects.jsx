// /src/components/SampleProjects.jsx
// Consilio-style filtered case studies & engineering deliverables with highlighted metrics

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projects';
import SectionHeading from './SectionHeading';

export default function SampleProjects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F4F6F5] dark:bg-[#000D0E] border-b border-[#DBE3E0] dark:border-[#223249]/60 relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <SectionHeading
          eyebrow="Case Studies"
          title="Real Results From Engineering Partnerships"
          subtitle="Representative engineering packages delivered to international standards. Anonymized to respect non-disclosure agreements."
        />

        {/* Filter Pills in Consilio Style */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'bg-white dark:bg-[#001517] text-[#5A6A65] dark:text-[#94A3B8] hover:text-[#14201D] dark:hover:text-white border border-[#DBE3E0] dark:border-[#223249]/80'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-[#2E756E] dark:bg-[#002B30] rounded-full shadow-xs border border-transparent dark:border-[#14F3C1]/30"
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
          <AnimatePresence mode="popLayout">
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
                className="bg-white dark:bg-[#001517] rounded-3xl p-7 border border-[#DBE3E0] dark:border-[#223249]/80 hover:border-[#2E756E]/40 dark:hover:border-[#14F3C1]/40 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Top row: Category tag + Metric badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#2E756E]/10 dark:bg-[#14F3C1]/15 text-[#2E756E] dark:text-[#14F3C1] font-mono">
                      {project.categoryLabel}
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 dark:text-[#14F3C1] bg-emerald-50 dark:bg-[#002B30] px-2.5 py-1 rounded-full border border-emerald-200/50 dark:border-[#14F3C1]/30">
                      <TrendingUp className="w-3 h-3" />
                      <span>{project.metrics}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#14201D] dark:text-white mb-3 group-hover:text-[#2E756E] dark:group-hover:text-[#14F3C1] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#94A3B8] mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Scope Line */}
                  <div className="py-2.5 px-3.5 rounded-2xl bg-[#F4F6F5] dark:bg-[#002226]/60 border border-[#DBE3E0]/70 dark:border-[#14F3C1]/10 text-xs mb-5">
                    <span className="font-bold text-[#2E756E] dark:text-[#14F3C1] block text-[10px] uppercase tracking-wider mb-1 font-mono">
                      Deliverable Scope:
                    </span>
                    <span className="font-medium text-xs text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed block">
                      {project.scope}
                    </span>
                  </div>
                </div>

                {/* Footer Tools */}
                <div className="pt-4 border-t border-[#DBE3E0]/70 dark:border-[#223249]/70 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-semibold text-[#14201D] dark:text-[#F1F5F9] bg-white dark:bg-[#001517] px-2 py-0.5 rounded border border-[#DBE3E0] dark:border-[#223249]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#889893] dark:text-[#64748B]">
                    ASME / ISO
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
