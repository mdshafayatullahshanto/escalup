// /src/components/ToolsSoftware.jsx
// Category-wise engineering software badges with hover lift and accent borders
// Modern black-and-white theme

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { toolsData, toolsNote } from '../data/tools';
import SectionHeading from './SectionHeading';

export default function ToolsSoftware() {
  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <SectionHeading
          eyebrow="Supported Engineering Platforms"
          title="Software & Tools We Work In Every Day"
          subtitle="We deliver in native formats and industry standards to maintain 100% parametric integrity with your in-house repositories."
        />

        {/* Categories Stack with motion stagger */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="space-y-6 max-w-5xl mx-auto"
        >
          {toolsData.map((categoryGroup, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
              }}
              className="p-6 sm:p-7 rounded-3xl bg-[#121214] border border-white/10 hover:border-white/30 transition-all shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {categoryGroup.category}
                  </h3>
                  <p className="text-xs text-[#A1A1AA]">
                    {categoryGroup.description}
                  </p>
                </div>
              </div>

              {/* Text Badges with spring hover */}
              <div className="flex flex-wrap gap-2.5">
                {categoryGroup.tools.map((toolName, toolIdx) => (
                  <motion.div
                    key={toolIdx}
                    whileHover={{ y: -3, scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-white/90 bg-white/5 border border-white/10 hover:border-white/40 hover:bg-white hover:text-black transition-all cursor-default shadow-xs"
                  >
                    {toolName}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Informational Callout Card */}
        {toolsNote && (
          <div className="mt-8 max-w-5xl mx-auto p-4 rounded-2xl bg-[#121214] border border-white/10 text-xs text-[#A1A1AA] flex items-center gap-3">
            <HelpCircle className="w-4 h-4 text-white shrink-0" />
            <span>{toolsNote}</span>
          </div>
        )}
      </div>
    </section>
  );
}
