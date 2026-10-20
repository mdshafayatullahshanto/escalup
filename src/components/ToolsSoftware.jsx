// /src/components/ToolsSoftware.jsx
// Category-wise engineering software badges with hover lift and accent borders

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, HelpCircle, CheckCircle2 } from 'lucide-react';
import { toolsData, toolsNote } from '../data/tools';
import SectionHeading from './SectionHeading';

export default function ToolsSoftware() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0B111E] border-b border-[#DBE3E0] dark:border-[#223249] relative">
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
              className="p-6 sm:p-7 rounded-2xl bg-[#F4F6F5]/50 dark:bg-[#121C2D] border border-[#DBE3E0] dark:border-[#223249] hover:border-[#2E756E]/40 hover:bg-[#F4F6F5]/80 dark:hover:bg-[#162235] transition-all shadow-soft"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base font-bold text-[#14201D] dark:text-[#F1F5F9]">
                    {categoryGroup.category}
                  </h3>
                  <p className="text-xs text-[#5A6A65] dark:text-[#94A3B8]">
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
                    className="px-4 py-2 rounded-xl bg-white dark:bg-[#162235] border border-[#DBE3E0] dark:border-[#223249] text-xs font-semibold text-[#14201D] dark:text-[#F1F5F9] font-mono shadow-soft hover:shadow-md hover:border-[#2E756E] hover:text-[#2E756E] dark:hover:text-[#34A096] transition-colors cursor-default flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E756E]/40 group-hover:bg-[#2E756E] transition-colors" />
                    <span>{toolName}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compatibility note */}
        <div className="mt-10 max-w-3xl mx-auto text-center p-4 rounded-xl bg-[#F4F6F5] border border-[#DBE3E0] text-xs text-[#5A6A65] flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#2E756E] shrink-0" />
          <span>{toolsNote}</span>
        </div>

      </div>
    </section>
  );
}
