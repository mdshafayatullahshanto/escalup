// /src/components/WhyEscalup.jsx
// 6 core differentiators building trust with foreign procurement and engineering heads

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  GitMerge, 
  SearchCheck, 
  ShieldAlert, 
  Home, 
  Zap 
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const REASONS = [
  {
    id: 1,
    title: 'Clarity',
    icon: FileText,
    desc: 'Clear scope, clear drawings, clear communication. You always know what is being delivered and when, with zero ambiguity in dimensions or tolerances.'
  },
  {
    id: 2,
    title: 'Coordination',
    icon: GitMerge,
    desc: 'Mechanical, MEP and BIM teams collaborate together so inter-disciplinary conflicts are caught and resolved before they reach site or the production floor.'
  },
  {
    id: 3,
    title: 'Care',
    icon: SearchCheck,
    desc: 'Every drawing, 3D model, and BOM is peer-reviewed before delivery, with obsessive attention to title blocks, layer naming, and engineering hygiene.'
  },
  {
    id: 4,
    title: 'Fewer Revisions',
    icon: ShieldAlert,
    desc: 'Structured early design gates and DFMA checks eliminate costly late changes, scrap, and unexpected vendor rework.'
  },
  {
    id: 5,
    title: 'Design + Engineering, One Roof',
    icon: Home,
    desc: 'From industrial styling and parametric CAD to structural simulation and final shop documentation, one accountable team handles the full journey.'
  },
  {
    id: 6,
    title: 'Fast, Cost-Efficient Delivery',
    icon: Zap,
    desc: 'Rapid responses, guaranteed 24-hour quote turnaround, and competitive offshore rates backed by robust Dhaka infrastructure.'
  }
];

export default function WhyEscalup() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0B111E] border-b border-[#DBE3E0] dark:border-[#223249] relative">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <SectionHeading
          eyebrow="The escalup Advantage"
          title="Why Teams Choose escalup"
          subtitle="International firms choose us not just for cost efficiency, but because our drawings are production-ready on the very first submission."
        />

        {/* 6 Grid Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                variants={item}
                whileHover={{ y: -8, scale: 1.01 }}
                data-cursor="Quality"
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="p-7 rounded-2xl bg-[#F4F6F5]/60 dark:bg-[#121C2D] border border-[#DBE3E0] dark:border-[#223249] hover:bg-white dark:hover:bg-[#162235] hover:border-[#2E756E]/40 dark:hover:border-[#38B2A6]/40 hover:shadow-card transition-all duration-300 group flex flex-col cursor-default"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#162235] border border-[#DBE3E0] dark:border-[#223249] text-[#2E756E] dark:text-[#38B2A6] flex items-center justify-center mb-5 group-hover:bg-[#2E756E] group-hover:text-white dark:group-hover:bg-[#38B2A6] dark:group-hover:text-[#0B111E] transition-all duration-300 shadow-sm group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#14201D] dark:text-white mb-2.5 group-hover:text-[#2E756E] dark:group-hover:text-[#38B2A6] transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed">
                    {reason.desc}
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
