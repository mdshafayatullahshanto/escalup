// /src/components/AboutManifesto.jsx
// Complete, consolidated About escalup section:
// Editorial statement, narrative story, core principle quote, Uttara Dhaka engineering hub, 3 feature pillars, leadership profile, and discipline tag ticker.
// Completely eliminates duplicate About sections while preserving 100% of the company's real information.

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, ShieldCheck, Quote, MapPin } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { teamData } from '../data/team';

const PILLARS = [
  {
    title: 'Mechanical & CAD Precision',
    desc: 'Parametric 3D CAD modeling, DFMA, sheet metal fabrication, and ASME Y14.5 standard manufacturing drawings.',
    icon: Cpu,
    tag: 'Mechanical'
  },
  {
    title: 'Coordinated MEP & BIM',
    desc: 'Clash-free HVAC, plumbing, and fire safety models authored at LOD 300+ in Autodesk Revit with Navisworks matrices.',
    icon: Layers,
    tag: 'BIM & MEP'
  },
  {
    title: 'Trusted Offshore Partnership',
    desc: 'Dedicated assigned engineers working under strict NDA, providing synchronous BST (UTC+6) overlap with zero overhead.',
    icon: ShieldCheck,
    tag: 'Offshore Model'
  }
];

const DISCIPLINE_TICKER = [
  'Parametric 3D CAD',
  'DFMA Optimization',
  'ASME Y14.5 & ISO Drafting',
  'Revit MEP Coordination',
  'Navisworks Clash Resolution',
  'LOD 300+ BIM Models',
  'Reverse Engineering',
  'Kinematic Motion Studies',
  '24h Quote Turnaround'
];

export default function AboutManifesto() {
  const leadEngineer = teamData[0];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Top Header Block: Tag + Big Editorial Statement */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>About escalup</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.26] mb-8"
          >
            escalup partners with ambitious engineering firms, manufacturers, and contractors to{' '}
            <span className="text-white underline decoration-white/40 underline-offset-8">simplify technical complexity</span>,{' '}
            strengthen production decisions, and deliver sustainable scale through dedicated offshore expertise.
          </motion.h2>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
            <p>
              <strong className="text-white font-bold">escalup</strong> is a Mechanical and MEP design company based in Dhaka. We work with manufacturers, developers and contractors worldwide to turn ideas into designs that are clear, practical and ready to build.
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
            <div className="bg-[#121214] rounded-3xl p-7 border border-white/10 relative overflow-hidden shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                <Quote className="w-5 h-5" />
              </div>
              <blockquote className="text-base sm:text-lg font-bold text-white leading-snug italic mb-4">
                “We believe great projects are built where engineering precision meets thoughtful design.”
              </blockquote>
              <div className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider font-mono">
                — escalup Core Principle
              </div>
            </div>

            <div className="bg-[#121214] rounded-3xl p-6 border border-white/10 shadow-xl text-xs space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <MapPin className="w-4 h-4 text-white" />
                <span>Offshore Engineering Center: Uttara, Dhaka</span>
              </div>
              <p className="text-[#A1A1AA] leading-relaxed">
                Dhaka is a fast-growing engineering hub with world-class technical universities and mechanical talent. escalup connects this top-tier talent with overseas procurement heads looking for high-fidelity deliverables at balanced offshore rates.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Feature Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                data-cursor="Pillar"
                className="bg-[#121214] hover:bg-[#18181B] rounded-3xl p-7 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group cursor-default shadow-soft"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership / Principal Engineer Card */}
        {leadEngineer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-[#121214] rounded-3xl border border-white/10 p-6 sm:p-8 max-w-4xl mx-auto hover:border-white/30 transition-all shadow-xl mb-16"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              {/* Photo */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                {leadEngineer.photo ? (
                  <img
                    src={leadEngineer.photo}
                    alt={leadEngineer.name}
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-center p-2">
                    <span className="font-mono text-2xl font-black text-white">e</span>
                    <span className="block text-[9px] font-bold text-white/60 uppercase">Lead</span>
                  </div>
                )}
              </div>

              {/* Bio Details */}
              <div className="flex-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-white">{leadEngineer.name}</h4>
                    <span className="text-xs font-semibold text-[#A1A1AA] block">{leadEngineer.role}</span>
                  </div>

                  {leadEngineer.linkedin && (
                    <a
                      href={leadEngineer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white hover:text-black px-4 py-1.5 rounded-full border border-white/20 self-center sm:self-auto transition-all"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5" />
                      <span>LinkedIn Profile</span>
                    </a>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                  {leadEngineer.bio}
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-2">
                  {leadEngineer.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-semibold text-white/90 bg-white/5 px-3 py-1 rounded-full border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Continuous Discipline Marquee */}
        <div className="pt-8 border-t border-white/10 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-4 shrink-0 whitespace-nowrap"
          >
            {[...DISCIPLINE_TICKER, ...DISCIPLINE_TICKER].map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium text-white/90 bg-[#121214] border border-white/10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>{tag}</span>
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
