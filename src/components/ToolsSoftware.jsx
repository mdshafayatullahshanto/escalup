// /src/components/ToolsSoftware.jsx
// Category-wise engineering software badges with hover lift and accent borders

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { toolsData, toolsNote } from '../data/tools';
import SectionHeading from './SectionHeading';

export default function ToolsSoftware() {
  return (
    <section className="py-20 md:py-28 bg-[#000D0E] border-b border-white/[0.08] relative">
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
              className="p-6 sm:p-7 rounded-3xl bg-[#001517] border border-white/[0.08] hover:border-[#14F3C1]/30 transition-all shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {categoryGroup.category}
                  </h3>
                  <p className="text-xs text-white/70">
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
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/90 font-mono hover:border-[#14F3C1] hover:text-[#14F3C1] transition-colors cursor-default flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14F3C1]/40 group-hover:bg-[#14F3C1] transition-colors" />
                    <span>{toolName}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compatibility note */}
        <div className="mt-10 max-w-3xl mx-auto text-center p-4 rounded-full bg-[#001517] border border-white/[0.08] text-xs text-white/60 flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#14F3C1] shrink-0" />
          <span>{toolsNote}</span>
        </div>

      </div>
    </section>
  );
}
