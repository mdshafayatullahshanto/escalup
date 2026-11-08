// src/components/NavigateYourNext.jsx
// SECTION 3: "Navigate Your Next with Precision Engineering"
// Left vertical tab list with active indicator bar and white highlighted active row;
// Right content panel that swaps with a smooth crossfade;
// Dark stat card uses black/indigo (zero green, zero monospace, light-weight heading).

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  ShieldCheck
} from 'lucide-react';
import Badge from './ui/Badge';
import GlassBadge from './ui/GlassBadge';
import Button from './ui/Button';

const PILLARS = [
  {
    id: 'capacity',
    num: '01',
    tabLabel: 'Capacity & Support',
    title: 'Scale CAD Capacity With Dedicated Offshore Talent',
    badge: 'Offshore Extension',
    headline: 'Add engineering capacity to your team during peak release cycles.',
    desc: 'When your workload grows, Escalup adds engineering capacity to your team. This can be overflow 3D parametric CAD modeling, MEP clash resolution, or dedicated mechanical and MEP specialists for an upcoming release. Our engineers join your standups, work to your drawing standards, and follow the same Design Approach on every project.',
    benefits: [
      'Engineers work under your drawing standards and environment',
      'Assigned engineers who follow your product architecture',
      'Flexible engagement: Project-based, overflow support, or dedicated engineers',
      'Team size and engagement terms agreed per project'
    ],
    metric: 'Agile Scale',
    metricLabel: 'On-demand CAD and MEP engineering capacity'
  },
  {
    id: 'coordination',
    num: '02',
    tabLabel: 'Multi-Discipline Coordination',
    title: 'Multi-Discipline Engineering Coordination',
    badge: 'Spatial Clash Resolution',
    headline: 'Resolve spatial collisions before drawings are released.',
    desc: 'We coordinate all MEP systems in a shared BIM model and run clash detection before drawings are issued. Designs are based on load calculations and follow applicable codes: ASHRAE and NFPA for HVAC, NFPA, BNBC, RSC, PWD and JICA for fire, and BNBC and IPC for plumbing.',
    benefits: [
      'ASME Y14.5 & ISO 1101 geometric dimensioning and tolerancing',
      'Clash detection reports delivered with drawings',
      'LOD 300 to 400 coordinated Revit MEP assemblies',
      'Prevents shop-floor binding, scrap material, and contractor delays'
    ],
    metric: 'Clash Matrix',
    metricLabel: 'Spatial clashes solved prior to construction release'
  },
  {
    id: 'native',
    num: '03',
    tabLabel: 'Native CAD Integrity',
    title: 'Native Software Integrity — Client Drawing Borders',
    badge: 'Parametric CAD',
    headline: 'We model inside your preferred software and corporate templates.',
    desc: 'Escalup delivers native parametric CAD files in your corporate drawing format. We work directly in your required software (SolidWorks, Siemens NX, Inventor, Revit, Creo) using your customized title blocks, part numbering, and revision rules.',
    benefits: [
      'Clean feature trees with fully defined sketches and constraints',
      'Conforms to client drawing borders, fonts, and BOM templates',
      'Indented multi-level BOMs ready for production',
      'Strict revision control under ECN / ECO / ECR governance'
    ],
    metric: 'Native CAD',
    metricLabel: 'Parametric modeling in client drawing formats'
  },
  {
    id: 'synchronous',
    num: '04',
    tabLabel: 'Data Security & Communication',
    title: 'Controlled Communication & Microsoft 365 Security',
    badge: 'Mutual NDA Governance',
    headline: 'Project communication and secure data handling.',
    desc: 'Each project has one point of contact. Scope, deliverables and file formats are agreed in writing before work starts, and any scope change is agreed with you before we begin. Project data is handled in a Microsoft 365 environment with multi-factor authentication and project-level access, under a mutual NDA.',
    benefits: [
      'One point of contact for each project',
      'Project communication through Microsoft Teams, Outlook, or preferred platform',
      'Work devices encrypted with BitLocker and protected with Microsoft Defender',
      'Client owns all project data, models, drawings and documents'
    ],
    metric: 'Microsoft 365',
    metricLabel: 'Project-level access isolation and mutual NDA'
  }
];

export default function NavigateYourNext({ onOpenCalendly }) {
  const [activeTab, setActiveTab] = useState(PILLARS[0].id);

  const activePillar = PILLARS.find((p) => p.id === activeTab) || PILLARS[0];

  const handleQuoteClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
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
    <section id="navigate-next" className="py-12 sm:py-16 md:py-20 bg-[#F6F7FC] dark:bg-[#080C0F] border-b border-[#E2E6EE] dark:border-white/10 font-sans relative overflow-hidden scroll-mt-12 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Light-weight heading with ONE highlighted phrase */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="mb-3.5">
            <GlassBadge>The Enterprise Offshore Transformation</GlassBadge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
            Navigate Your Next with{' '}
            <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
              Precision Engineering.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed max-w-2xl mx-auto font-normal">
            Global engineering firms face rising local payroll costs, drafting backlogs, and costly on-site fabrication rework. Here is how escalup solves each operational bottleneck.
          </p>
        </div>

        {/* Split Layout: Left Vertical Tab List, Right Content Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full">
          
          {/* LEFT: Vertical Tab List (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            {PILLARS.map((pillar) => {
              const isActive = activeTab === pillar.id;
              return (
                <div key={pillar.id} className="relative">
                  {/* Indigo active indicator bar on the left edge */}
                  {isActive && (
                    <motion.div
                      layoutId="activeVerticalPillarBar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#5846F6] rounded-r"
                    />
                  )}

                  <button
                    onClick={() => setActiveTab(pillar.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-white dark:bg-[#11161F] text-[#111827] dark:text-white font-semibold shadow-card border border-[#E2E6EE] dark:border-white/10'
                        : 'bg-[#EEF2F8]/70 dark:bg-[#121926]/40 text-[#5A6679] dark:text-[#9BA8BA] hover:text-[#111827] dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-semibold ${isActive ? 'text-[#5846F6]' : 'text-[#8E9BAE]'}`}>
                        {pillar.num}
                      </span>
                      <span className="text-sm sm:text-base">
                        {pillar.tabLabel}
                      </span>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#5846F6] translate-x-1' : 'opacity-0'}`} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Content Swapping Panel with Smooth Crossfade (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl bg-white dark:bg-[#11161F] border border-[#E2E6EE] dark:border-white/10 p-7 sm:p-10 lg:p-12 shadow-card"
              >
                <div className="space-y-6">
                  
                  {/* Badge */}
                  <div>
                    <Badge variant="navy" size="sm" className="bg-[#182232] text-[#A5B4FC] border border-white/10">
                      {activePillar.badge}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-light text-[#111827] dark:text-white leading-snug">
                      {activePillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed font-normal">
                      {activePillar.desc}
                    </p>
                  </div>

                  {/* Benefits List with Indigo Checks */}
                  <div className="space-y-3 pt-2">
                    {activePillar.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#111827] dark:text-[#F3F5FA]">
                        <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Dark Stat Card in Black / Indigo (NOT GREEN) */}
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#0B0F14] text-white border border-white/10 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#A5B4FC] font-medium mb-1">
                        Verified Operational Outcome
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        {activePillar.metric}
                      </div>
                      <div className="text-xs text-white/70 mt-0.5">
                        {activePillar.metricLabel}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-white/80 shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#5846F6]" />
                      <span>Governed under mutual NDA</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleQuoteClick}
                      icon="arrow"
                      className="shadow-sm"
                    >
                      Request Scope Quote
                    </Button>

                    <Button
                      variant="outline"
                      size="md"
                      onClick={handleBookCall}
                      icon="none"
                    >
                      <Calendar className="w-4 h-4 text-[#5846F6] mr-1.5" />
                      <span>Discuss on Cal.com</span>
                    </Button>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
