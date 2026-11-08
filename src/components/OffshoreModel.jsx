// src/components/OffshoreModel.jsx
// OFFSHORE MODEL & DATA SECURITY
// Precise offshore engineering partner structure, 7 project phases, governance, and Microsoft 365 security.

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  MessageSquare, 
  FileCheck, 
  CheckCircle2, 
  RotateCcw, 
  Briefcase, 
  Lock, 
  Server, 
  Cpu, 
  ArrowRight
} from 'lucide-react';
import Button from './ui/Button';
import GlassBadge from './ui/GlassBadge';
import { servicesData } from '../data/services';

const PROJECT_STEPS = [
  {
    step: '1',
    title: 'Requirements & Scope',
    desc: 'We review your brief, drawings, models and standards. Together we define the scope, deliverables, software and file formats, and what we need from your side. Software, environment and security requirements are confirmed at this stage.'
  },
  {
    step: '2',
    title: 'Handover',
    desc: 'You share the input files and project data through a secure Microsoft SharePoint or OneDrive project folder, or through your own secure environment. We confirm what we received and list any gaps before work starts.'
  },
  {
    step: '3',
    title: 'Design Execution',
    desc: 'Our engineers carry out concept design, CAD or BIM modeling, calculations and analysis, and prepare detailed drawings, GD&T and BOM, following the Design Approach.'
  },
  {
    step: '4',
    title: 'Internal Review',
    desc: 'Every deliverable goes through a drawing and model check, a standards check, and simulation or coordination review where applicable, before it reaches you.'
  },
  {
    step: '5',
    title: 'Client Review & Approval',
    desc: 'We send the deliverables for your review. Work moves to the next stage only after your approval.'
  },
  {
    step: '6',
    title: 'Delivery',
    desc: 'We deliver the final package in the agreed formats.'
  },
  {
    step: '7',
    title: 'Revisions & Support',
    desc: 'We handle your feedback through tracked revisions. During manufacturing or construction, we support clarifications and design changes.'
  }
];

const COMMUNICATION_POINTS = [
  'One point of contact for each project.',
  'Project communication through Microsoft Teams and Outlook, or your preferred platform.',
  'Progress updates at regular intervals agreed at project start.',
  'Direct technical discussion between your engineers and ours when needed.',
  'Working hours and availability are agreed with you at project start.'
];

const DELIVERABLES_GROUPS = [
  {
    title: 'Mechanical and Product Design',
    items: '3D models, assemblies, detailed drawings with GD&T, BOM, tolerance stack-up reports, simulation reports.'
  },
  {
    title: 'Manufacturing Support',
    items: 'DFM and DFMA review, sheet metal, fabrication and injection molding drawings.'
  },
  {
    title: 'PLM and Data',
    items: 'BOM structure, change records (ECN / ECO / ECR), CAD automation scripts.'
  },
  {
    title: 'BIM and MEP',
    items: 'HVAC, fire-safety and plumbing design, load calculations, duct and pipe layouts, BIM models, clash detection reports, MEP documentation.'
  }
];

const REVISION_POINTS = [
  'Revisions are logged and version-controlled.',
  'Each revision is reviewed against the original requirements.',
  'Scope changes are agreed with you before work begins.',
  'The number of revision rounds is defined in the agreed project scope.'
];

const ENGAGEMENT_TERMS = [
  {
    title: 'Engagement Types',
    desc: 'Project-based work, overflow support, and dedicated engineers for longer projects or releases.'
  },
  {
    title: 'Confidentiality and IP',
    desc: 'Mutual NDA before data sharing; client owns all project IP.'
  },
  {
    title: 'Pricing',
    desc: 'Shared after scope review.'
  }
];

const DATA_SECURITY_POINTS = [
  'Mutual NDA signed before any project data is shared.',
  'Client files are used only for the agreed project.',
  'Project data is stored and shared in a Microsoft 365 environment (SharePoint and OneDrive).',
  'Sign-in is protected with Microsoft Entra ID and multi-factor authentication.',
  'Access is limited by project and role. Only the engineers assigned to a project can open its data. Access is removed when the project ends.',
  'Work devices are encrypted with BitLocker and protected with Microsoft Defender.',
  'Client data is not stored on personal devices or personal accounts.',
  'Client data is not entered into public AI tools. AI-assisted workflows are used only within the limits the client approves.',
  'At project close, client data is returned or deleted as the client instructs.',
  'The client owns all project data, models, drawings and documents.'
];

const CLIENT_ENV_POINTS = [
  'We can work in the client\'s dedicated software, platforms and secure environment when required, such as the client\'s PLM or data management system, CAD and BIM versions, templates, drawing borders, VPN, and remote or virtual desktop access.',
  'We follow the client\'s security policies, file naming rules and data handling procedures.',
  'Our team adapts to the client\'s tools and workflow, so the client does not need to change its setup.',
  'Environment and access requirements are confirmed during the Requirements & Scope stage.'
];

export default function OffshoreModel({ onOpenCalendly: _onOpenCalendly }) {
  const handleContactClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="offshore-model" className="py-12 sm:py-16 md:py-20 bg-[#F6F7FB] dark:bg-[#080C0F] text-[#111827] dark:text-white border-b border-[#E2E6EE] dark:border-white/10 font-sans relative scroll-mt-12 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="mb-3.5">
            <GlassBadge>Offshore Model</GlassBadge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
            Dedicated Offshore{' '}
            <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
              Engineering Support
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#0070AD] dark:text-[#38BDF8] font-medium mb-3">
            A dedicated engineering partner for your mechanical, BIM and MEP design work.
          </p>

          <p className="text-sm sm:text-base text-[#475569] dark:text-[#9BA8BA] leading-relaxed max-w-3xl mx-auto font-normal">
            Escalup works as an offshore extension of your engineering team. We take on defined design tasks or full project packages and deliver models, drawings and documents that meet your requirements and applicable standards. Our clients include international companies in product development, technology and construction.
          </p>
        </div>

        {/* 1. What We Support: All 7 Services */}
        <div className="mb-12 sm:mb-14">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E2E6EE] dark:border-white/10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0070AD] dark:text-[#38BDF8]">
                Scope of Capabilities
              </span>
              <h3 className="text-2xl font-semibold text-[#111827] dark:text-white mt-1">
                What We Support
              </h3>
            </div>
            <a 
              href="#services" 
              className="text-xs sm:text-sm font-medium text-[#5846F6] hover:underline flex items-center gap-1"
            >
              <span>View all services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {servicesData.map((svc) => (
              <div 
                key={svc.id}
                className="bg-white dark:bg-[#11161B] rounded-2xl p-5 border border-[#E2E6EE] dark:border-white/10 shadow-card hover:border-[#5846F6]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#5846F6] block mb-2">0{svc.id}</span>
                  <h4 className="text-sm font-semibold text-[#111827] dark:text-white mb-2 leading-snug">
                    {svc.title}
                  </h4>
                  <ul className="text-xs text-[#5A6679] dark:text-[#9BA8BA] space-y-1 mb-3">
                    {(svc.items || []).slice(0, 3).map((sub, i) => (
                      <li key={i} className="truncate">• {sub}</li>
                    ))}
                    {(svc.items || []).length > 3 && (
                      <li className="text-[11px] text-[#0070AD] dark:text-[#38BDF8]">
                        +{svc.items.length - 3} more sub-services
                      </li>
                    )}
                  </ul>
                </div>
                <div className="pt-3 border-t border-[#E2E6EE] dark:border-white/10 text-[11px] text-[#5A6679] dark:text-[#9BA8BA]">
                  <span className="font-semibold text-[#111827] dark:text-white">Standards: </span>
                  <span className="truncate block">{svc.standardsSummary || svc.standardsDetail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. How a Project Works (Steps 1 - 7) */}
        <div className="mb-10 sm:mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0070AD] dark:text-[#38BDF8]">
              Execution Cycle
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-[#111827] dark:text-white tracking-tight mt-1">
              How a Project Works
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PROJECT_STEPS.map((step) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="bg-white dark:bg-[#11161B] rounded-2xl p-6 border border-[#E2E6EE] dark:border-white/10 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#0070AD]/10 text-[#0070AD] dark:text-[#38BDF8] font-bold text-sm flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-base font-semibold text-[#111827] dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3. Communication & Deliverables Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-10 sm:mb-12">
          
          {/* Communication Panel */}
          <div className="bg-white dark:bg-[#11161B] rounded-3xl p-8 border border-[#E2E6EE] dark:border-white/10 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#5846F6]/10 text-[#5846F6] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] dark:text-white">
                Communication
              </h3>
            </div>
            <ul className="space-y-3.5">
              {COMMUNICATION_POINTS.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#475569] dark:text-[#9BA8BA]">
                  <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables Panel */}
          <div className="bg-white dark:bg-[#11161B] rounded-3xl p-8 border border-[#E2E6EE] dark:border-white/10 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#0070AD]/10 text-[#0070AD] dark:text-[#38BDF8] flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] dark:text-white">
                Deliverables
              </h3>
            </div>
            <div className="space-y-4">
              {DELIVERABLES_GROUPS.map((grp, idx) => (
                <div key={idx} className="text-sm">
                  <span className="font-semibold text-[#111827] dark:text-white block mb-0.5">
                    {grp.title}:
                  </span>
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA] leading-relaxed">
                    {grp.items}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4. Standards, Revision Handling & Engagement Terms */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 sm:mb-12">
          
          {/* Standards */}
          <div className="bg-white dark:bg-[#11161B] rounded-2xl p-6 border border-[#E2E6EE] dark:border-white/10 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-[#5846F6]" />
                <h4 className="text-base font-semibold text-[#111827] dark:text-white">Standards</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA] leading-relaxed">
                We apply the standards required by the project and the client, including ISO, ASME, ASHRAE, NFPA, IPC, BNBC, RSC, PWD and JICA. The governing standards and editions are confirmed at the Requirements & Scope stage.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E2E6EE] dark:border-white/10">
              <a href="#services" className="text-xs font-semibold text-[#5846F6] hover:underline flex items-center gap-1">
                <span>View full standards table</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Revision Handling */}
          <div className="bg-white dark:bg-[#11161B] rounded-2xl p-6 border border-[#E2E6EE] dark:border-white/10 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <RotateCcw className="w-5 h-5 text-[#0070AD] dark:text-[#38BDF8]" />
                <h4 className="text-base font-semibold text-[#111827] dark:text-white">Revision Handling</h4>
              </div>
              <ul className="text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA] space-y-2">
                {REVISION_POINTS.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0070AD] dark:text-[#38BDF8]">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Engagement Terms */}
          <div className="bg-white dark:bg-[#11161B] rounded-2xl p-6 border border-[#E2E6EE] dark:border-white/10 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-5 h-5 text-[#5846F6]" />
                <h4 className="text-base font-semibold text-[#111827] dark:text-white">Engagement Terms</h4>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm">
                {ENGAGEMENT_TERMS.map((term, i) => (
                  <div key={i}>
                    <span className="font-semibold text-[#111827] dark:text-white block">{term.title}:</span>
                    <span className="text-[#475569] dark:text-[#9BA8BA]">{term.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Offshore CTA Band */}
        <div className="mb-12 sm:mb-14 bg-white dark:bg-[#11161B] rounded-3xl p-6 sm:p-8 border border-[#E2E6EE] dark:border-white/10 shadow-card text-center max-w-3xl mx-auto">
          <p className="text-base sm:text-lg text-[#111827] dark:text-white font-medium mb-4">
            Share your project requirements. We will review them and respond with a proposed scope.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={handleContactClick}
            icon="arrow"
            className="shadow-md"
          >
            Contact Us
          </Button>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* NEW SECTION: DATA SECURITY & CLIENT ENVIRONMENT               */}
        {/* ------------------------------------------------------------- */}
        <div id="data-security" className="scroll-mt-16 pt-4">
          
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <div className="mb-3.5">
              <GlassBadge>Data Security</GlassBadge>
            </div>
            <h3 className="text-3xl sm:text-4xl font-light text-[#111827] dark:text-white tracking-tight mb-3">
              Data Security &{' '}
              <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
                Client Environment
              </span>
            </h3>
            <p className="text-sm sm:text-base text-[#475569] dark:text-[#9BA8BA] max-w-2xl mx-auto font-normal">
              Client data security is a core requirement of every Escalup engagement. We work under your rules, in your environment, when you require it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-4">
            
            {/* Data Security Card */}
            <div className="bg-white dark:bg-[#11161B] rounded-3xl p-8 border border-[#E2E6EE] dark:border-white/10 shadow-card space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#E2E6EE] dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#5846F6]/10 text-[#5846F6] flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#111827] dark:text-white">Data Security Governance</h4>
                  <span className="text-xs text-[#5A6679] dark:text-[#9BA8BA]">Microsoft 365 Architecture & Access Isolation</span>
                </div>
              </div>

              <ul className="space-y-2.5 pt-2">
                {DATA_SECURITY_POINTS.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA]">
                    <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Environment Card */}
            <div className="bg-white dark:bg-[#11161B] rounded-3xl p-8 border border-[#E2E6EE] dark:border-white/10 shadow-card flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3 pb-3 border-b border-[#E2E6EE] dark:border-white/10 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0070AD]/10 text-[#0070AD] dark:text-[#38BDF8] flex items-center justify-center">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#111827] dark:text-white">Client Environment Integration</h4>
                    <span className="text-xs text-[#5A6679] dark:text-[#9BA8BA]">Client Platforms, VPN & Drawing Borders</span>
                  </div>
                </div>

                <ul className="space-y-3 pt-2 mb-6">
                  {CLIENT_ENV_POINTS.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA]">
                      <CheckCircle2 className="w-4 h-4 text-[#0070AD] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Adaptable Team Box */}
                <div className="p-5 rounded-2xl bg-[#F6F7FB] dark:bg-[#151D26] border border-[#E2E6EE] dark:border-white/10">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0070AD] dark:text-[#38BDF8] mb-1.5">
                    <Cpu className="w-4 h-4" />
                    <span>Adaptable Engineering Team</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA] leading-relaxed">
                    Escalup runs an adaptable engineering team that uses AI-assisted workflows and engineering automation. When a client needs a specific software, version or environment, we set up the team to work in it.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E6EE] dark:border-white/10">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleContactClick}
                  icon="arrow"
                  className="w-full sm:w-auto shadow-md"
                >
                  Discuss Your Requirements
                </Button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
