// /src/components/SampleProjects.jsx
// Consilio-style filtered case studies & engineering deliverables with highlighted metrics
// Modern black-and-white theme

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
    <section id="projects" className="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative scroll-mt-12">
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
                    ? 'text-black'
                    : 'bg-[#121214] text-[#A1A1AA] hover:text-white border border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
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
                className="bg-[#121214] hover:bg-[#18181B] rounded-3xl p-7 border border-white/10 hover:border-white/30 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Top row: Category tag + Metric badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/15 font-mono">
                      {project.categoryLabel}
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                      <TrendingUp className="w-3 h-3 text-white" />
                      <span>{project.metrics}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-white transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Industry tag */}
                  <div className="text-xs font-semibold text-[#A1A1AA] mb-4">
                    {project.industry}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footer Tools + Deliverables */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono text-white/80 bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-bold text-white/70 group-hover:text-white transition-colors flex items-center justify-between">
                    <span>{project.deliverable}</span>
                    <span className="text-white">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
