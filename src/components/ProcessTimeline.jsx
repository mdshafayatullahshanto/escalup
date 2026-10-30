// /src/components/ProcessTimeline.jsx
// Animated 6-step engineering workflow timeline

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquareCheck, 
  Lightbulb, 
  Box, 
  CheckCheck, 
  FileCheck, 
  HeadphonesIcon 
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const STEPS = [
  {
    num: '01',
    title: 'Requirement & Scope Discussion',
    desc: 'Align on design briefs, manufacturing constraints, CAD formats, and international drafting standards under NDA.',
    icon: MessageSquareCheck
  },
  {
    num: '02',
    title: 'Concept & Feasibility',
    desc: 'Conduct initial engineering trade studies, mechanism layout sketches, and feasibility assessments before heavy modeling.',
    icon: Lightbulb
  },
  {
    num: '03',
    title: 'Detailed Design & Modeling',
    desc: 'Build parametric 3D CAD parts, sheet metal components, or coordinated MEP Revit assemblies with strict layer rules.',
    icon: Box
  },
  {
    num: '04',
    title: 'Validation & Review',
    desc: 'Perform FEA stress checks, tolerance stack-up audits, and BIM clash detection tests with regular client review gates.',
    icon: CheckCheck
  },
  {
    num: '05',
    title: 'Documentation & Delivery',
    desc: 'Issue ASME Y14.5 / ISO 2D manufacturing drawings, BOMs, native CAD, STEP, and IFC files with full revision tags.',
    icon: FileCheck
  },
  {
    num: '06',
    title: 'Support & Revisions',
    desc: 'Provide prompt post-delivery revisions, answer factory floor RFIs, and support prototyping handover smoothly.',
    icon: HeadphonesIcon
  }
];

export default function ProcessTimeline() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-[#F4F6F5] dark:bg-[#0B111E] border-b border-[#DBE3E0] dark:border-[#223249] relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <SectionHeading
          eyebrow="Structured Engineering Execution"
          title="From Initial Brief to Production-Ready Handover"
          subtitle="Every project follows a disciplined engineering gate process designed to prevent errors, catch clashes early, and eliminate late rework."
        />

        {/* 6 Steps Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
        >
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                variants={item}
                whileHover={{ y: -8, scale: 1.01 }}
                data-cursor="Phase"
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white dark:bg-[#121C2D] rounded-2xl p-6 sm:p-7 border border-[#DBE3E0] dark:border-[#223249] shadow-soft hover:shadow-card hover:border-[#2E756E]/40 dark:hover:border-[#38B2A6]/50 transition-all duration-300 relative group flex flex-col cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#2E756E]/10 dark:bg-[#162235] text-[#2E756E] dark:text-[#38B2A6] flex items-center justify-center group-hover:bg-[#2E756E] group-hover:text-white transition-all duration-300 group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-mono text-[#DBE3E0] dark:text-[#223249] group-hover:text-[#2E756E]/40 dark:group-hover:text-[#38B2A6]/50 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#14201D] dark:text-[#F1F5F9] mb-2 group-hover:text-[#2E756E] dark:group-hover:text-[#34A096] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed">
                    {step.desc}
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
