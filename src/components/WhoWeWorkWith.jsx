// /src/components/WhoWeWorkWith.jsx
// Infosys-inspired "Industries We Serve" corporate sector solutions section
// Connects global procurement personas directly with verified engineering capabilities.

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  DraftingCompass, 
  Building2, 
  Rocket, 
  Globe, 
  ArrowRight
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const CLIENT_PERSONAS = [
  {
    id: 1,
    title: 'Manufacturers & OEMs',
    icon: Factory,
    painPoint: 'Internal CAD bottlenecks slowing down new product releases and factory floor drawings.',
    solution: 'We deliver extra 3D solid modeling, sheet metal flat patterns, DFMA cost reduction, and fabrication drafting on-demand.',
    focus: 'CAD Capacity · DFMA · Shop Drawings',
    tools: 'SolidWorks · Sheet Metal · ASME Y14.5',
    metric: '28% Cost Reduction'
  },
  {
    id: 2,
    title: 'Engineering & Design Firms',
    icon: DraftingCompass,
    painPoint: 'Project volume surges cause missed submission deadlines or expensive, high-risk onshore contractor hires.',
    solution: 'We serve as your dedicated white-label offshore drafting desk, absorbing overflow and conforming 100% to your drawing standards.',
    focus: 'Overflow Detailing · White-Label · ISO Standards',
    tools: 'Siemens NX · Inventor · AutoCAD',
    metric: '48h Rapid Onboarding'
  },
  {
    id: 3,
    title: 'MEP Consultants & Contractors',
    icon: Building2,
    painPoint: 'HVAC, plumbing, and fire safety systems require rapid spatial coordination and clash-free BIM submittals.',
    solution: 'We calculate cooling loads in Carrier HAP, route systems logically, and coordinate Revit MEP models with Navisworks clash matrices.',
    focus: 'Revit BIM · HVAC Loads · Clash Detection',
    tools: 'Autodesk Revit · Navisworks · HAP',
    metric: 'Zero Site Clashes'
  },
  {
    id: 4,
    title: 'Hardware Innovators & Startups',
    icon: Rocket,
    painPoint: 'Lacking runway or capital to hire high-cost full-time mechanical engineers onshore for early prototyping.',
    solution: 'We guide concepts from initial sketches through 3D parametric CAD to prototype-ready STEP models and manufacturing documentation.',
    focus: 'Concept to CAD · Prototyping · Rapid NPI',
    tools: 'Fusion 360 · 3D Printing · STEP Exports',
    metric: '100% IP Protected'
  }
];

export default function WhoWeWorkWith() {
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

  const handleQuoteClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="industries" className="py-20 md:py-28 bg-[#F8FAF9] dark:bg-[#0D1A17] border-b border-[#DBE3E0] dark:border-[#263830] relative overflow-hidden scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <SectionHeading
          eyebrow="Industries & Sectors"
          title="Engineered For Global Teams That Need Scalable Capacity"
          subtitle="Whether clearing an urgent manufacturing backlog, coordinating complex commercial plant rooms, or detailing a hardware prototype, escalup integrates seamlessly into your workflow."
        />

        {/* 4 Industry Cards in Infosys Corporate Architecture */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CLIENT_PERSONAS.map((persona) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={persona.id}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="bg-white dark:bg-[#152620] rounded-3xl p-6 sm:p-7 border border-[#DBE3E0] dark:border-[#263830] hover:border-[#2E756E]/50 dark:hover:border-[#3B948A]/50 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Header: Icon + Metric pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8FAF9] dark:bg-[#1D3328] text-[#2E756E] dark:text-[#14F3C1] border border-[#DBE3E0] dark:border-[#263830] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#2E756E] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-[#14F3C1] bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 px-2 py-0.5 rounded-full">
                      {persona.metric}
                    </span>
                  </div>

                  {/* Title & Focus */}
                  <h3 className="text-lg font-bold text-[#14201D] dark:text-[#E4EDE9] mb-1.5 group-hover:text-[#2E756E] dark:group-hover:text-[#14F3C1] transition-colors leading-snug">
                    {persona.title}
                  </h3>

                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#2E756E] dark:text-[#3B948A] mb-4">
                    {persona.focus}
                  </div>

                  {/* Narrative details */}
                  <div className="space-y-3 text-xs leading-relaxed border-t border-[#DBE3E0]/70 dark:border-[#263830]/70 pt-4">
                    <div>
                      <span className="font-bold text-[#14201D] dark:text-[#E4EDE9] block mb-0.5">
                        Client Challenge:
                      </span>
                      <p className="text-[#5A6A65] dark:text-[#8FA89F]">
                        {persona.painPoint}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-[#2E756E] dark:text-[#14F3C1] block mb-0.5">
                        escalup Delivery:
                      </span>
                      <p className="text-[#5A6A65] dark:text-[#8FA89F]">
                        {persona.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Tools & Action */}
                <div className="pt-4 mt-4 border-t border-[#DBE3E0]/70 dark:border-[#263830]/70 flex items-center justify-between text-[11px] font-mono text-[#889893] dark:text-[#5A7268]">
                  <span className="truncate">{persona.tools.split('·')[0]}</span>
                  <a
                    href="#contact"
                    onClick={handleQuoteClick}
                    className="text-[#2E756E] dark:text-[#14F3C1] hover:underline font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Engage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global reach ribbon */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 py-4 px-6 rounded-2xl bg-white dark:bg-[#152620] border border-[#DBE3E0] dark:border-[#263830] flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#5A6A65] dark:text-[#8FA89F] shadow-soft text-center"
        >
          <div className="flex items-center gap-2 font-bold text-[#14201D] dark:text-[#E4EDE9]">
            <Globe className="w-4 h-4 text-[#2E756E] dark:text-[#14F3C1]" />
            <span>Serving international engineering organizations across:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono font-medium text-[11px]">
            <span className="px-2.5 py-1 bg-[#F4F6F5] dark:bg-[#1D3328] rounded-md border border-[#DBE3E0] dark:border-[#263830] text-[#14201D] dark:text-[#E4EDE9]">
              Europe & Regional Hubs
            </span>
            <span className="text-[#889893]">·</span>
            <span className="px-2.5 py-1 bg-[#F4F6F5] dark:bg-[#1D3328] rounded-md border border-[#DBE3E0] dark:border-[#263830] text-[#14201D] dark:text-[#E4EDE9]">
              Middle East & GCC
            </span>
            <span className="text-[#889893]">·</span>
            <span className="px-2.5 py-1 bg-[#F4F6F5] dark:bg-[#1D3328] rounded-md border border-[#DBE3E0] dark:border-[#263830] text-[#14201D] dark:text-[#E4EDE9]">
              Asia-Pacific (APAC)
            </span>
            <span className="text-[#889893]">·</span>
            <span className="px-2.5 py-1 bg-[#F4F6F5] dark:bg-[#1D3328] rounded-md border border-[#DBE3E0] dark:border-[#263830] text-[#14201D] dark:text-[#E4EDE9]">
              North America
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
