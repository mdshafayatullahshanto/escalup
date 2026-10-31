// /src/components/ProcessTimeline.jsx
// Consilio-style structured engineering delivery framework (3 major phases / 6 detailed execution gates)

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

const PHASES = [
  {
    phase: 'Phase 01',
    phaseTitle: 'Discover & Align',
    steps: [
      {
        num: '01',
        title: 'Requirement & Scope Discussion',
        desc: 'Align on design briefs, manufacturing constraints, CAD formats, and international drafting standards under strict NDA.',
        icon: MessageSquareCheck,
        badge: 'Gate 1'
      },
      {
        num: '02',
        title: 'Concept & Feasibility Assessment',
        desc: 'Conduct initial engineering trade studies, mechanism layout sketches, and feasibility reviews before modeling.',
        icon: Lightbulb,
        badge: 'Gate 2'
      }
    ]
  },
  {
    phase: 'Phase 02',
    phaseTitle: 'Model & Validate',
    steps: [
      {
        num: '03',
        title: 'Parametric 3D CAD & BIM Modeling',
        desc: 'Build parametric 3D CAD parts, sheet metal components, or coordinated MEP Revit assemblies with strict layer rules.',
        icon: Box,
        badge: 'Gate 3'
      },
      {
        num: '04',
        title: 'Engineering Review & Clash Audits',
        desc: 'Perform tolerance stack-up audits, FEA stress validation, and Navisworks clash detection tests with regular client review gates.',
        icon: CheckCheck,
        badge: 'Gate 4'
      }
    ]
  },
  {
    phase: 'Phase 03',
    phaseTitle: 'Deliver & Support',
    steps: [
      {
        num: '05',
        title: 'Production Drawings & Release',
        desc: 'Issue ASME Y14.5 / ISO 2D manufacturing drawings, BOMs, native CAD, STEP, and IFC files with full revision tags.',
        icon: FileCheck,
        badge: 'Gate 5'
      },
      {
        num: '06',
        title: 'Ongoing Support & Revision Support',
        desc: 'Provide prompt post-delivery revisions, answer factory floor RFIs, and support prototyping handover smoothly.',
        icon: HeadphonesIcon,
        badge: 'Gate 6'
      }
    ]
  }
];

export default function ProcessTimeline() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-white dark:bg-[#000D0E] border-b border-[#DBE3E0] dark:border-[#223249]/60 relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <SectionHeading
          eyebrow="Our Approach"
          title="A Proven Framework For Precision Delivery"
          subtitle="Every project follows a structured engineering gate process designed to prevent errors, catch site clashes early, and eliminate late rework."
        />

        {/* 3 Main Phase Columns */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {PHASES.map((phaseGroup, pIdx) => (
            <div key={pIdx} className="space-y-6">
              {/* Phase Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#DBE3E0] dark:border-[#223249]/60">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2E756E] dark:text-[#14F3C1] font-mono">
                  {phaseGroup.phase}
                </span>
                <span className="text-sm font-bold text-[#14201D] dark:text-white">
                  {phaseGroup.phaseTitle}
                </span>
              </div>

              {/* Steps inside phase */}
              <div className="space-y-6">
                {phaseGroup.steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.num}
                      variants={item}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: '-30px' }}
                      whileHover={{ y: -6 }}
                      className="bg-[#F4F6F5]/60 dark:bg-[#001517] rounded-3xl p-6 sm:p-7 border border-[#DBE3E0] dark:border-[#223249]/80 hover:border-[#2E756E]/40 dark:hover:border-[#14F3C1]/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group cursor-default"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#00282C] border border-[#DBE3E0] dark:border-[#14F3C1]/20 text-[#2E756E] dark:text-[#14F3C1] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase font-mono px-2 py-0.5 rounded bg-white dark:bg-[#002226] text-[#5A6A65] dark:text-[#94A3B8] border border-[#DBE3E0]/70 dark:border-[#223249]">
                              {step.badge}
                            </span>
                            <span className="text-2xl font-black font-mono text-[#DBE3E0] dark:text-[#223249] group-hover:text-[#2E756E] dark:group-hover:text-[#14F3C1] transition-colors">
                              {step.num}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-[#14201D] dark:text-white mb-2.5 group-hover:text-[#2E756E] dark:group-hover:text-[#14F3C1] transition-colors leading-snug">
                          {step.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
