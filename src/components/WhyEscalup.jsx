// /src/components/WhyEscalup.jsx
// Consilio-style "The Advantage Of Working With escalup" section

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  GitMerge, 
  SearchCheck, 
  ShieldAlert, 
  Layers, 
  Zap
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const ADVANTAGES = [
  {
    id: 1,
    title: 'Clarity & Engineering Hygiene',
    icon: FileText,
    tag: 'Precision',
    desc: 'Clear scope, production-ready drawings, and transparent communication. You always know what is being delivered, with zero ambiguity in dimensions, layers, or tolerances.'
  },
  {
    id: 2,
    title: 'Multi-Discipline Coordination',
    icon: GitMerge,
    tag: 'Coordination',
    desc: 'Mechanical, MEP, and BIM engineers collaborate side by side so spatial collisions and inter-disciplinary conflicts are resolved before drawings reach the field.'
  },
  {
    id: 3,
    title: 'Peer-Reviewed Quality Control',
    icon: SearchCheck,
    tag: 'Quality',
    desc: 'Every CAD part, drawing sheet, and BOM is peer-reviewed by a Senior Principal Engineer before delivery, ensuring strict compliance with ASME Y14.5 and ISO standards.'
  },
  {
    id: 4,
    title: 'Fewer Costly Revisions',
    icon: ShieldAlert,
    tag: 'DFMA',
    desc: 'Early manufacturing feasibility checks and tolerance stack-up reviews eliminate costly late redesigns, assembly interference, and factory floor scrap.'
  },
  {
    id: 5,
    title: 'Native CAD Integrity',
    icon: Layers,
    tag: 'Compatibility',
    desc: 'We model directly in your preferred tools (SolidWorks, Inventor, Revit) using your company title blocks, layer naming, and drawing standards—never generic exports.'
  },
  {
    id: 6,
    title: 'Fast, Cost-Efficient Delivery',
    icon: Zap,
    tag: 'Turnaround',
    desc: 'Guaranteed 24-hour quote turnaround, synchronous BST (UTC+6) communication overlap, and 50–70% cost savings compared to onshore contracting rates.'
  }
];

export default function WhyEscalup() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F4F6F5] dark:bg-[#000D0E] border-b border-[#DBE3E0] dark:border-[#223249]/60 relative">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <SectionHeading
          eyebrow="The escalup Advantage"
          title="The Advantage Of Working With escalup"
          subtitle="International firms choose us not just for offshore cost efficiency, but because our drawings and 3D models are production-ready on the very first submission."
        />

        {/* 6 Grid Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.id}
                variants={item}
                whileHover={{ y: -8, scale: 1.01 }}
                data-cursor="Advantage"
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#001517] border border-[#DBE3E0] dark:border-[#223249]/80 hover:border-[#2E756E]/40 dark:hover:border-[#14F3C1]/40 hover:shadow-card transition-all duration-300 group flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#2E756E]/10 dark:bg-[#14F3C1]/10 text-[#2E756E] dark:text-[#14F3C1] flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A6A65] dark:text-[#94A3B8] font-mono">
                      {adv.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#14201D] dark:text-white mb-2.5 group-hover:text-[#2E756E] dark:group-hover:text-[#14F3C1] transition-colors leading-snug">
                    {adv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
