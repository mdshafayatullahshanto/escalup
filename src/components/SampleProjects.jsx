// /src/components/SampleProjects.jsx
// Infosys-inspired editorial client case studies & verified engineering outcomes
// Displays quantifiable metrics, technical scopes, and deliverables under mutual NDA.

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projects';
import SectionHeading from './SectionHeading';

export default function SampleProjects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const handleQuoteClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#0B1519] border-b border-[#DBE3E0] dark:border-[#263830] relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <SectionHeading
          eyebrow="Case Studies & Outcomes"
          title="Quantifiable Results From Offshore Engineering Delivery"
          subtitle="Representative engineering packages delivered to international standards. Anonymized to respect non-disclosure agreements."
        />

        {/* Filter Pills in Infosys Corporate Style */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'text-white shadow-sm'
                    : 'bg-[#F4F6F5] dark:bg-[#152620] text-[#5A6A65] dark:text-[#8FA89F] hover:text-[#14201D] dark:hover:text-[#E4EDE9] border border-[#DBE3E0] dark:border-[#263830]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCaseStudyFilterPill"
                    className="absolute inset-0 bg-[#2E756E] dark:bg-[#3B948A] rounded-full"
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
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#F8FAF9] dark:bg-[#152620] hover:bg-white dark:hover:bg-[#1A2D26] rounded-3xl p-7 border border-[#DBE3E0] dark:border-[#263830] hover:border-[#2E756E]/50 dark:hover:border-[#3B948A]/50 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Top row: Category tag + Metric badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#2E756E]/10 dark:bg-[#3B948A]/15 text-[#2E756E] dark:text-[#3B948A] border border-[#2E756E]/20 dark:border-[#3B948A]/30">
                      {project.categoryLabel}
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-700 dark:text-[#14F3C1] bg-emerald-50 dark:bg-emerald-900/20 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/40">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-700 dark:text-[#14F3C1]" />
                      <span>{project.metrics}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#14201D] dark:text-[#E4EDE9] mb-2.5 group-hover:text-[#2E756E] dark:group-hover:text-[#14F3C1] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#8FA89F] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Technical Scope Highlight */}
                  {project.scope && (
                    <div className="p-3 rounded-2xl bg-white dark:bg-[#0D1A17] border border-[#DBE3E0] dark:border-[#263830] text-[11px] text-[#14201D] dark:text-[#E4EDE9] mb-5 font-mono">
                      <span className="text-[#889893] dark:text-[#5A7268] block mb-1 uppercase tracking-wider text-[10px] font-bold">
                        Delivered Scope:
                      </span>
                      <span>{project.scope}</span>
                    </div>
                  )}
                </div>

                {/* Footer Tools + Deliverables */}
                <div className="pt-4 border-t border-[#DBE3E0]/70 dark:border-[#263830]/70 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono text-[#5A6A65] dark:text-[#8FA89F] bg-white dark:bg-[#1D3328] px-2.5 py-1 rounded-md border border-[#DBE3E0] dark:border-[#263830]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-[#2E756E] dark:text-[#14F3C1] pt-1">
                    <span className="font-mono text-[11px] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{project.deliverable || 'Verified Standard Release'}</span>
                    </span>
                    <a
                      href="#contact"
                      onClick={handleQuoteClick}
                      className="hover:underline flex items-center gap-1"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* NDA Reassurance Strip */}
        <div className="mt-12 text-center text-xs text-[#5A6A65] dark:text-[#8FA89F] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#2E756E] dark:text-[#14F3C1]" />
          <span>All client drawings and CAD assemblies are protected under strict Non-Disclosure Agreements. Identifiable client marks omitted.</span>
        </div>

      </div>
    </section>
  );
}
