// /src/components/WhoWeWorkWith.jsx
// Client-focused persona section addressing real international procurement pain points

import React from 'react';
import { motion } from 'framer-motion';
import { Factory, DraftingCompass, Building2, Rocket, Globe } from 'lucide-react';
import SectionHeading from './SectionHeading';

const CLIENT_PERSONAS = [
  {
    id: 1,
    title: 'Manufacturers & OEMs',
    icon: Factory,
    painPoint: 'Internal CAD bottleneck slowing down new product introductions and production drawings.',
    solution: 'We deliver extra 3D CAD modeling, DFMA optimization, sheet metal flat patterns, and fabrication drafting on demand so your factory floor never waits.',
    focus: 'CAD Capacity · DFMA · Shop Drawings'
  },
  {
    id: 2,
    title: 'Engineering & Design Firms',
    icon: DraftingCompass,
    painPoint: 'Spikes in project volume lead to missed deadlines or expensive, high-risk local contractor hires.',
    solution: 'We serve as your dedicated white-label offshore drafting desk, absorbing project overflow, detailing 2D packages, and conforming to your exact CAD standards.',
    focus: 'Overflow Detailing · White-Label Support · ASME/ISO'
  },
  {
    id: 3,
    title: 'MEP Consultants & Contractors',
    icon: Building2,
    painPoint: 'HVAC, plumbing, and fire safety systems need rapid coordination and clash-free BIM submittals.',
    solution: 'We calculate cooling loads, size duct/piping networks, model coordinated Revit MEP systems, and resolve spatial clashes before site installation.',
    focus: 'Revit BIM · HVAC Loads · Clash Detection'
  },
  {
    id: 4,
    title: 'Startups & Product Companies',
    icon: Rocket,
    painPoint: 'Lacking the budget or runway to hire expensive in-house mechanical and CAD engineers onshore.',
    solution: 'We guide your hardware from early concept sketches through 3D parametric CAD to prototype-ready STEP models and manufacturing documentation.',
    focus: 'Concept to CAD · Prototyping · Rapid NPI'
  }
];

export default function WhoWeWorkWith() {
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
    <section className="py-20 md:py-28 bg-[#F4F6F5] dark:bg-[#0B111E] relative overflow-hidden">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <SectionHeading
          eyebrow="Targeted Engineering Partnerships"
          title="Built for teams that want to scale engineering without scaling overhead"
          subtitle="Whether you are an established equipment builder clearing a drawing backlog or a contractor delivering complex commercial BIM models, escalup plugs directly into your workflow."
        />

        {/* 4 Persona Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CLIENT_PERSONAS.map((persona) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={persona.id}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-white dark:bg-[#121C2D] rounded-2xl p-6 border border-[#DBE3E0] dark:border-[#223249] shadow-soft hover:shadow-card hover:border-[#2E756E]/40 transition-all duration-300 flex flex-col group cursor-default"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2E756E]/10 dark:bg-[#162235] text-[#2E756E] dark:text-[#34A096] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#2E756E] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#14201D] mb-2.5 group-hover:text-[#2E756E] transition-colors">
                    {persona.title}
                  </h3>

                  <div className="text-xs font-semibold uppercase tracking-wider text-[#2E756E] mb-3">
                    {persona.focus}
                  </div>

                  <div className="space-y-2.5 text-xs text-[#5A6A65] leading-relaxed">
                    <p>
                      <strong className="text-[#14201D] font-semibold block mb-0.5">The Challenge:</strong>
                      {persona.painPoint}
                    </p>
                    <p>
                      <strong className="text-[#2E756E] font-semibold block mb-0.5">How escalup Solves It:</strong>
                      {persona.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global reach strip */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 py-4 px-6 rounded-2xl bg-white dark:bg-[#121C2D] border border-[#DBE3E0] dark:border-[#223249] flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#5A6A65] dark:text-[#94A3B8] shadow-sm text-center"
        >
          <div className="flex items-center gap-2 font-bold text-[#14201D] dark:text-[#F1F5F9]">
            <Globe className="w-4 h-4 text-[#2E756E] dark:text-[#34A096]" />
            <span>Serving engineering teams across international markets:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 font-medium">
            <span className="px-2.5 py-1 bg-[#F4F6F5] dark:bg-[#162235] hover:bg-[#2E756E]/10 hover:text-[#2E756E] rounded-md border border-[#DBE3E0]/70 dark:border-[#223249] hover:border-[#2E756E]/30 text-[#14201D] dark:text-[#F1F5F9] transition-colors cursor-default">Manufacturers & OEMs</span>
            <span className="text-[#DBE3E0] dark:text-[#223249]">·</span>
            <span className="px-2.5 py-1 bg-[#F4F6F5] dark:bg-[#162235] hover:bg-[#2E756E]/10 hover:text-[#2E756E] rounded-md border border-[#DBE3E0]/70 dark:border-[#223249] hover:border-[#2E756E]/30 text-[#14201D] dark:text-[#F1F5F9] transition-colors cursor-default">Engineering & Design Firms</span>
            <span className="text-[#DBE3E0] dark:text-[#223249]">·</span>
            <span className="px-2.5 py-1 bg-[#F4F6F5] dark:bg-[#162235] hover:bg-[#2E756E]/10 hover:text-[#2E756E] rounded-md border border-[#DBE3E0]/70 dark:border-[#223249] hover:border-[#2E756E]/30 text-[#14201D] dark:text-[#F1F5F9] transition-colors cursor-default">MEP Consultants & Contractors</span>
            <span className="text-[#DBE3E0] dark:text-[#223249]">·</span>
            <span className="px-2.5 py-1 bg-[#F4F6F5] dark:bg-[#162235] hover:bg-[#2E756E]/10 hover:text-[#2E756E] rounded-md border border-[#DBE3E0]/70 dark:border-[#223249] hover:border-[#2E756E]/30 text-[#14201D] dark:text-[#F1F5F9] transition-colors cursor-default">Hardware Innovators</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
