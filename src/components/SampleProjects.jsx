// /src/components/SampleProjects.jsx
// Consilio-style filtered case studies & engineering deliverables with highlighted metrics
// Brand color combination matching reference design

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
    <section id="projects" className="py-20 md:py-28 bg-white border-b border-[#DBE3E0] relative scroll-mt-12">
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
                    : 'bg-white text-[#5A6A65] hover:text-[#14201D] border border-[#DBE3E0]'
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
                className="bg-[#F8FAF9] hover:bg-white rounded-3xl p-7 border border-[#DBE3E0] hover:border-[#2E756E]/40 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Top row: Category tag + Metric badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#2E756E]/10 text-[#2E756E] border border-[#2E756E]/20 font-mono">
                      {project.categoryLabel}
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <TrendingUp className="w-3 h-3 text-emerald-700" />
                      <span>{project.metrics}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#14201D] mb-2.5 group-hover:text-[#2E756E] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Industry tag */}
                  <div className="text-xs font-semibold text-[#5A6A65] mb-4">
                    {project.industry}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5A6A65] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footer Tools + Deliverables */}
                <div className="pt-4 border-t border-[#DBE3E0] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono text-[#5A6A65] bg-white px-2.5 py-1 rounded-md border border-[#DBE3E0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-bold text-[#2E756E] group-hover:text-[#255E58] transition-colors flex items-center justify-between">
                    <span>{project.deliverable}</span>
                    <span>→</span>
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
