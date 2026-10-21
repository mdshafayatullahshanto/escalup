// /src/components/AboutSection.jsx
// Detailed company story, 4 pillar cards, highlighted quote, and leadership profile

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Quote, 
  Cpu, 
  Flame, 
  Layers, 
  RotateCcw, 
  CheckCircle2, 
  MapPin, 
  Award 
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { teamData } from '../data/team';
import SectionHeading from './SectionHeading';

const PILLARS = [
  {
    title: 'Mechanical & Product Design',
    desc: '3D parametric modeling, mechanism kinematics, DFMA, and ASME Y14.5 drafting.',
    icon: Cpu
  },
  {
    title: 'MEP Design & Engineering',
    desc: 'Coordinated HVAC load analysis, fire safety sprinkler systems, and water supply/drainage.',
    icon: Flame
  },
  {
    title: 'BIM Modeling & Coordination',
    desc: 'LOD 300+ Revit models with comprehensive Navisworks clash matrices.',
    icon: Layers
  },
  {
    title: 'Reverse Engineering & Prototyping',
    desc: 'Converting 3D scan point clouds and legacy 2D drawings into parametric CAD models.',
    icon: RotateCcw
  }
];

export default function AboutSection() {
  const leadEngineer = teamData[0];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F4F6F5] dark:bg-[#0B111E] border-b border-[#DBE3E0] dark:border-[#223249] relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <SectionHeading
          eyebrow="Our Engineering Philosophy"
          title="About escalup"
          subtitle="Closing the gap between conceptual design intent and physical manufacturing reality."
        />

        {/* Narrative & Quote Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed">
            <p>
              <strong className="text-[#2E756E] dark:text-[#34A096] font-bold">escalup</strong> is a Mechanical and MEP design company based in Dhaka. We work with manufacturers, developers and contractors worldwide to turn ideas into designs that are clear, practical and ready to build.
            </p>
            <p>
              Our clients share one universal challenge: moving from concept to execution without losing precision along the way. escalup closes that gap, operating exactly where design intent meets engineering reality.
            </p>
            <p>
              Our work covers the full journey, from early concept to final documentation. On the mechanical side: product development, parametric 3D modeling, DFMA, GD&T, prototyping and PLM-driven data management. On the MEP side: coordinated HVAC, fire safety, and plumbing and drainage designs, supported by BIM and early clash detection. Every decision is guided by practicality, cost efficiency and long-term performance.
            </p>
            <p>
              What sets us apart is how we work: with clarity, coordination and care. We bring design and engineering together under one roof, so projects move with fewer surprises, fewer revisions and less rework. We work closely with client teams, consultants and contractors, and stay involved from the first concept to the final handover.
            </p>
          </div>

          {/* Highlighted Quote & Dhaka Engineering Hub Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#121C2D] rounded-2xl p-7 border border-[#DBE3E0] dark:border-[#223249] shadow-soft relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#2E756E]/10 dark:bg-[#162235] text-[#2E756E] dark:text-[#34A096] flex items-center justify-center mb-4">
                <Quote className="w-5 h-5" />
              </div>
              <blockquote className="text-base sm:text-lg font-bold text-[#14201D] dark:text-[#F1F5F9] leading-snug italic mb-4">
                “We believe great projects are built where engineering precision meets thoughtful design.”
              </blockquote>
              <div className="text-xs font-semibold text-[#2E756E] dark:text-[#34A096] uppercase tracking-wider">
                — escalup Core Principle
              </div>
            </div>

            <div className="bg-white dark:bg-[#121C2D] rounded-2xl p-6 border border-[#DBE3E0] dark:border-[#223249] shadow-soft text-xs space-y-3">
              <div className="flex items-center gap-2 text-[#14201D] dark:text-[#F1F5F9] font-bold text-sm">
                <MapPin className="w-4 h-4 text-[#2E756E] dark:text-[#34A096]" />
                <span>Offshore Engineering Center: Uttara, Dhaka</span>
              </div>
              <p className="text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed">
                Dhaka is a fast-growing engineering hub with world-class technical universities and mechanical talent. escalup connects this top-tier talent with overseas procurement heads looking for high-fidelity deliverables at balanced offshore rates.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Pillar Cards with Staggered Entrance & Hover */}
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
                }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[#121C2D] rounded-2xl p-6 border border-[#DBE3E0] dark:border-[#223249] shadow-soft hover:border-[#2E756E]/40 hover:shadow-card transition-all cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2E756E]/10 dark:bg-[#162235] text-[#2E756E] dark:text-[#34A096] flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#14201D] dark:text-[#F1F5F9] mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Leadership / Principal Engineer Card */}
        {leadEngineer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-white dark:bg-[#121C2D] rounded-2xl border border-[#DBE3E0] dark:border-[#223249] p-6 sm:p-8 shadow-soft max-w-3xl mx-auto hover:shadow-card hover:border-[#2E756E]/30 transition-all"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              
              {/* Photo */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#2E756E]/10 dark:bg-[#162235] border border-[#DBE3E0] dark:border-[#223249] flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                {leadEngineer.photo ? (
                  <img
                    src={leadEngineer.photo}
                    alt={leadEngineer.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-center p-2">
                    <span className="font-mono text-2xl font-black text-[#2E756E] dark:text-[#34A096]">e</span>
                    <span className="block text-[9px] font-bold text-[#5A6A65] dark:text-[#94A3B8] uppercase">Lead</span>
                  </div>
                )}
              </div>

              {/* Bio Details */}
              <div className="flex-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-[#14201D] dark:text-[#F1F5F9]">{leadEngineer.name}</h4>
                    <span className="text-xs font-semibold text-[#2E756E] dark:text-[#34A096] block">{leadEngineer.role}</span>
                  </div>

                  {leadEngineer.linkedin && (
                    <a
                      href={leadEngineer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A6A65] dark:text-[#94A3B8] hover:text-[#2E756E] dark:hover:text-[#34A096] bg-[#F4F6F5] dark:bg-[#162235] px-3 py-1.5 rounded-lg border border-[#DBE3E0] dark:border-[#223249] self-center sm:self-auto transition-colors"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5 text-[#2E756E] dark:text-[#34A096]" />
                      <span>LinkedIn Profile</span>
                    </a>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed">
                  {leadEngineer.bio}
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-2">
                  {leadEngineer.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-semibold text-[#14201D] dark:text-[#F1F5F9] bg-[#F4F6F5] dark:bg-[#162235] px-2 py-0.5 rounded border border-[#DBE3E0] dark:border-[#223249]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
