// /src/components/ProcessTimeline.jsx
// Consilio-style structured engineering delivery framework (3 major phases / 6 detailed execution gates)
// Modern black-and-white theme

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
        title: 'Production Drawing Release & Sign-Off',
        desc: 'Generate fabrication drawings to ASME Y14.5 standards with GD&T, comprehensive BOMs, and CAM-ready DXF exports.',
        icon: FileCheck,
        badge: 'Gate 5'
      },
      {
        num: '06',
        title: 'Ongoing Revision & Production Support',
        desc: 'Support your shop floor and field contractors through fabrication, assembly, prototype adjustments, and engineering changes.',
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
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <SectionHeading
          eyebrow="Proven Workflow"
          title="A Structured Framework For Precision Engineering"
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
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                  {phaseGroup.phase}
                </span>
                <span className="text-sm font-bold text-white">
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
                      className="bg-[#121214] hover:bg-[#18181B] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-white/30 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group cursor-default"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all shadow-xs">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-white/90 border border-white/15">
                              {step.badge}
                            </span>
                            <span className="text-2xl font-black font-mono text-white/20 group-hover:text-white transition-colors">
                              {step.num}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-white transition-colors leading-snug">
                          {step.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
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
