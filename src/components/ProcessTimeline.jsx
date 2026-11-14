// src/components/ProcessTimeline.jsx
// DESIGN APPROACH (Single process for all 7 services)
// 9 Steps in exact sequence with structured engineering design methodology

import React from 'react';
import { 
  FileSearch, 
  Lightbulb, 
  Box, 
  Calculator, 
  FileText, 
  CheckCircle2, 
  ThumbsUp, 
  Wrench, 
  RefreshCw 
} from 'lucide-react';
import GlassBadge from './ui/GlassBadge';
import { BlurReveal, HighlightUnderline } from './ui/ScrollAnimations';

const PHASES = [
  {
    phase: 'Phase 01',
    phaseTitle: 'Specification & Concept',
    steps: [
      {
        num: '01',
        title: 'Requirements & Scope',
        desc: 'Review project brief, models, CAD/BIM standards, software environment, and client drawing borders under mutual NDA.',
        icon: FileSearch,
        badge: 'Step 1'
      },
      {
        num: '02',
        title: 'Concept Design',
        desc: 'Preliminary architecture, design trade studies, kinematics layouts, and spatial feasibility verification.',
        icon: Lightbulb,
        badge: 'Step 2'
      },
      {
        num: '03',
        title: 'CAD / BIM Modeling',
        desc: '3D parametric solid modeling, surfacing, sheet metal flat patterns, or coordinated Revit LOD 300–400 assemblies.',
        icon: Box,
        badge: 'Step 3'
      }
    ]
  },
  {
    phase: 'Phase 02',
    phaseTitle: 'Analysis & Documentation',
    steps: [
      {
        num: '04',
        title: 'Engineering Calculations & Analysis',
        desc: 'Structural mechanics, FEA numerical simulation, HVAC heat loads, and pipe/duct sizing.',
        icon: Calculator,
        badge: 'Step 4'
      },
      {
        num: '05',
        title: 'Detailed Drawings, GD&T & BOM',
        desc: 'Manufacturing drawings with ASME Y14.5 / ISO 1101 GD&T, tolerance stacks, multi-level BOMs, and spool drawings.',
        icon: FileText,
        badge: 'Step 5'
      },
      {
        num: '06',
        title: 'Review, Simulation & Coordination',
        desc: 'Drawing verification, design gate audits, collision detection, and Navisworks multi-discipline clash resolution.',
        icon: CheckCircle2,
        badge: 'Step 6'
      }
    ]
  },
  {
    phase: 'Phase 03',
    phaseTitle: 'Approval & Handover',
    steps: [
      {
        num: '07',
        title: 'Client Approval',
        desc: 'Formal deliverable presentation and technical review; advancing to next phase strictly upon client sign-off.',
        icon: ThumbsUp,
        badge: 'Step 7'
      },
      {
        num: '08',
        title: 'Manufacturing / Construction Support',
        desc: 'DFM/DFMA shop-floor support, vendor coordination, CNC/CAM constraints, and contractor field RFIs.',
        icon: Wrench,
        badge: 'Step 8'
      },
      {
        num: '09',
        title: 'Feedback, Change Management & Continuous Improvement',
        desc: 'Tracked revisions, formal ECN / ECO / ECR documentation, configuration governance, and workflow refinement.',
        icon: RefreshCw,
        badge: 'Step 9'
      }
    ]
  }
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 bg-[#F6F7FB] dark:bg-[#080C0F] text-[#111827] dark:text-white border-b border-[#E2E6EE] dark:border-white/10 relative scroll-mt-12 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <BlurReveal className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="mb-3.5">
            <GlassBadge>Design Approach</GlassBadge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
            Structured Engineering{' '}
            <HighlightUnderline>
              <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
                Design Methodology
              </span>
            </HighlightUnderline>
          </h2>

          <p className="text-sm sm:text-base text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed max-w-3xl mx-auto font-normal">
            A structured engineering design methodology built on precision, thorough analysis, and iterative refinement. It applies to both product design and building services design. Every deliverable is checked against the applicable standards (ASME, ISO, ASHRAE, NFPA, BNBC, IPC), managed through controlled product data and change records, and prepared for real-world manufacturing or construction. The process stays adaptable to changing project requirements.
          </p>
        </BlurReveal>

        {/* 3 Main Phase Columns */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {PHASES.map((phaseGroup, pIdx) => (
            <div key={pIdx} className="space-y-5">
              {/* Phase Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E6EE] dark:border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0070AD] dark:text-[#38BDF8]">
                  {phaseGroup.phase}
                </span>
                <span className="text-sm font-semibold text-[#111827] dark:text-white">
                  {phaseGroup.phaseTitle}
                </span>
              </div>

              {/* Steps inside phase */}
              <div className="space-y-4">
                {phaseGroup.steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.num}
                      className="bg-white dark:bg-[#11161B] hover:border-[#5846F6]/40 dark:hover:border-[#5846F6]/40 rounded-2xl p-5 sm:p-6 border border-[#E2E6EE] dark:border-white/10 shadow-card transition-all duration-300 flex flex-col justify-between group cursor-default"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#F6F7FB] dark:bg-[#151D26] border border-[#E2E6EE] dark:border-white/10 text-[#0070AD] dark:text-[#38BDF8] flex items-center justify-center group-hover:bg-[#5846F6] group-hover:text-white transition-all shadow-xs">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#0070AD]/10 dark:bg-[#38BDF8]/10 text-[#0070AD] dark:text-[#38BDF8]">
                              {step.badge}
                            </span>
                            <span className="text-xl font-bold text-[#9BA8BA]/40 group-hover:text-[#5846F6] transition-colors">
                              {step.num}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-2 group-hover:text-[#0070AD] dark:group-hover:text-[#38BDF8] transition-colors leading-snug">
                          {step.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
