// /src/components/NavigateYourNext.jsx
// Infosys-inspired enterprise engineering transformation section:
// Explains how global engineering directors & procurement heads navigate their next project release with escalup.

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calendar,
  Sparkles
} from 'lucide-react';

const PILLARS = [
  {
    id: 'capacity',
    tabLabel: '01. Capacity & Agility',
    title: 'Scale CAD Capacity On-Demand Without Long-Term Overhead',
    badge: '50–70% Cost Efficiency',
    headline: 'Eliminate internal drawing backlogs during busy release cycles.',
    desc: 'Hiring local mechanical or BIM drafters onshore takes 2–3 months and introduces fixed payroll liabilities. escalup plugs directly into your engineering standups within 48 hours, absorbing overflow CAD packages, detail drafting, and 3D modeling on flexible terms.',
    benefits: [
      'Zero long-term payroll liabilities or termination overhead',
      'Assigned named engineers who learn your product architecture',
      'Flexible engagement: Project-Based, Dedicated FTE, or Hourly Buckets',
      'Scale team size up or down with 30 days notice'
    ],
    metric: '50–70%',
    metricLabel: 'Typical cost savings vs onshore contracting rates'
  },
  {
    id: 'coordination',
    tabLabel: '02. Multi-Discipline Clash Sync',
    title: 'Multi-Discipline Engineering Coordination Side-by-Side',
    badge: 'Zero Spatial Clashes',
    headline: 'Resolve spatial collisions before fabrication drawings hit the shop floor.',
    desc: 'When mechanical equipment, electrical cable trays, plumbing risers, and HVAC ductwork are modeled in silos, clashes are only discovered during assembly or on the construction site. Our mechanical, MEP, and BIM engineers review models collaboratively in Navisworks.',
    benefits: [
      'ASME Y14.5 & ISO 1101 geometric tolerance compliance',
      'Full clash detection matrix with Navisworks resolution logs',
      'LOD 300 to 400 fabrication-ready Revit MEP assemblies',
      'Fewer shop floor revisions, scrap material, and contractor delays'
    ],
    metric: '124+',
    metricLabel: 'Site clashes caught virtually before field installation'
  },
  {
    id: 'native',
    tabLabel: '03. Native CAD Integrity',
    title: 'Native Software Integrity — Never Generic File Translations',
    badge: '100% Parametric Models',
    headline: 'We model inside your preferred software and corporate templates.',
    desc: 'Many offshore agencies export generic STEP files that break parametric feature trees and layer definitions. escalup works directly in your native platforms (SolidWorks, Inventor, Revit, Siemens NX) using your customized title blocks, part numbering, and revision tables.',
    benefits: [
      'Clean feature trees with fully defined sketches and mates',
      'Conforms to client drawing borders, fonts, and BOM templates',
      'Indented multi-level BOMs ready for direct ERP/MRP import',
      'Strict revision control under ECN/ECO governance'
    ],
    metric: '100%',
    metricLabel: 'Native parametric feature tree integrity guaranteed'
  },
  {
    id: 'synchronous',
    tabLabel: '04. Real-Time Timezone Overlap',
    title: 'Synchronous Global Collaboration with Dhaka Engineering Center',
    badge: 'BST (UTC+6) Alignment',
    headline: 'Live video standups and rapid overnight drafting turnarounds.',
    desc: 'Operating from Dhaka (BST, UTC+6), our lead engineering desk offers 4–5 hours of direct morning overlap with London and Western Europe, near-synchronous alignment with Dubai and the Middle East, shared workdays with Sydney, and dedicated overnight drafting sprints for North America.',
    benefits: [
      'Fluent international business English with zero technical jargon',
      'Live Slack, Teams, or Google Meet sprint reviews',
      'Submit design markups at 5 PM EST; receive revised drawings by 9 AM EST',
      'Direct contact with assigned Principal Engineering Leads'
    ],
    metric: '24h',
    metricLabel: 'Guaranteed formal scope and price quote turnaround'
  }
];

export default function NavigateYourNext({ onOpenCalendly }) {
  const [activeTab, setActiveTab] = useState(PILLARS[0].id);

  const activePillar = PILLARS.find((p) => p.id === activeTab) || PILLARS[0];

  const handleQuoteClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCall = () => {
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open('https://cal.com/escalup/book-a-call', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#0B1519] border-b border-[#DBE3E0] dark:border-[#263830] relative overflow-hidden">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        {/* Infosys Header Structure */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2E756E]/10 dark:bg-[#3B948A]/15 text-[#2E756E] dark:text-[#3B948A] border border-[#2E756E]/20 dark:border-[#3B948A]/30 mb-4 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Enterprise Offshore Transformation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#14201D] dark:text-[#E4EDE9] tracking-tight leading-tight mb-5">
            Navigate Your Next with Precision Engineering
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5A6A65] dark:text-[#8FA89F] leading-relaxed max-w-3xl mx-auto">
            Global engineering firms face rising local payroll costs, drafting backlogs, and costly on-site fabrication rework. Here is how escalup solves each operational bottleneck.
          </p>
        </div>

        {/* Infosys Interactive Horizontal Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 max-w-5xl mx-auto">
          {PILLARS.map((pillar) => {
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'bg-[#F4F6F5] dark:bg-[#152620] text-[#5A6A65] dark:text-[#8FA89F] hover:text-[#14201D] dark:hover:text-[#E4EDE9] border border-[#DBE3E0] dark:border-[#263830]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNextPillar"
                    className="absolute inset-0 bg-[#2E756E] dark:bg-[#3B948A] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{pillar.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="max-w-6xl mx-auto rounded-3xl bg-[#F8FAF9] dark:bg-[#152620] border border-[#DBE3E0] dark:border-[#263830] p-7 sm:p-10 lg:p-12 shadow-soft"
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Deep Narrative & Bullet Points (7 cols) */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold font-mono uppercase tracking-wider text-[#2E756E] dark:text-[#14F3C1] bg-[#2E756E]/10 dark:bg-[#14F3C1]/10 border border-[#2E756E]/20 dark:border-[#14F3C1]/20">
                  <span>{activePillar.badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#14201D] dark:text-[#E4EDE9] leading-snug">
                  {activePillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#8FA89F] leading-relaxed">
                  {activePillar.desc}
                </p>

                {/* Benefits List */}
                <div className="space-y-3 pt-2">
                  {activePillar.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#14201D] dark:text-[#E4EDE9]">
                      <CheckCircle2 className="w-4 h-4 text-[#2E756E] dark:text-[#14F3C1] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <a
                    href="#contact"
                    onClick={handleQuoteClick}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer group"
                  >
                    <span>Request Scope Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <button
                    onClick={handleBookCall}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-[#0D1A17] hover:bg-[#F4F6F5] dark:hover:bg-[#1E3036] text-[#14201D] dark:text-[#E4EDE9] border border-[#DBE3E0] dark:border-[#263830] font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#2E756E] dark:text-[#3B948A]" />
                    <span>Discuss Requirements (Cal.com)</span>
                  </button>
                </div>
              </div>

              {/* Right Column: High-Impact Metric Box & Deliverables (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* Metric Hero Card */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-[#142F2C] via-[#102724] to-[#0A1B19] text-white shadow-xl border border-[#2E756E]/40 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#2E756E]/20 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative z-10">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A0D4CE] block mb-2">
                      Verified Operational Outcome
                    </span>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-mono tracking-tight mb-2">
                      {activePillar.metric}
                    </div>
                    <p className="text-xs text-[#D4E2DE] max-w-xs mx-auto leading-relaxed">
                      {activePillar.metricLabel}
                    </p>
                  </div>
                </div>

                {/* Reassurance Micro-Card */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#0D1A17] border border-[#DBE3E0] dark:border-[#263830] text-xs space-y-2.5 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-[#14201D] dark:text-[#E4EDE9]">
                    <ShieldCheck className="w-4 h-4 text-[#2E756E] dark:text-[#14F3C1]" />
                    <span>Enterprise Governance & Intellectual Property</span>
                  </div>
                  <p className="text-[#5A6A65] dark:text-[#8FA89F] leading-relaxed">
                    All CAD geometry, drawing releases, calculation sheets, and BOMs are developed under mutual Non-Disclosure Agreements. You retain 100% intellectual property ownership of all source files.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
