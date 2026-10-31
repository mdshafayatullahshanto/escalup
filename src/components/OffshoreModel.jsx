// /src/components/OffshoreModel.jsx
// Detailed offshore engagement models, live world clock, and comparison table
// Modern black-and-white theme

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Repeat, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  MessageSquare, 
  ArrowRight, 
  Calendar,
  Zap,
  Lock
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import WorldClock from './WorldClock';
import { trackCallBooking } from '../utils/analytics';
import { companyData } from '../data/company';

const PILLARS = [
  {
    id: 1,
    title: 'Dedicated Engineers',
    icon: Users,
    desc: 'Assigned mechanical or MEP specialists who integrate directly into your daily standups and engineering workflows.'
  },
  {
    id: 2,
    title: 'Flexible Engagement',
    icon: Repeat,
    desc: 'Scale up during busy design release cycles; pause or ramp down with zero long-term payroll liabilities.'
  },
  {
    id: 3,
    title: 'Time-Zone Overlap',
    icon: Clock,
    desc: 'Dhaka (BST, UTC+6) provides comfortable synchronous overlap with Europe and Middle East mornings, plus full alignment with Asia-Pacific business hours.'
  },
  {
    id: 4,
    title: 'Secure & Confidential',
    icon: ShieldCheck,
    desc: 'Strict Non-Disclosure Agreements (NDA) before file exchange. You retain 100% intellectual property ownership of all source files.'
  },
  {
    id: 5,
    title: 'Cost-Efficient Delivery',
    icon: DollarSign,
    desc: 'Realize 50–70% cost savings compared to onshore contracting rates without compromising on drafting quality or standards compliance.'
  },
  {
    id: 6,
    title: 'Clear Communication',
    icon: MessageSquare,
    desc: 'Fluent international business English, regular video check-ins, structured weekly milestone reports, and zero jargon.'
  }
];

const ENGAGEMENT_MODELS = [
  {
    id: 'project',
    name: 'Project-Based',
    badge: 'Fixed Scope & Budget',
    popular: false,
    tagline: 'Ideal for defined design packages and drawing sets with clear deliverables.',
    bestFor: 'Discrete CAD packages, 2D drafting releases, single machine redesigns, BIM clash resolution.',
    pricing: 'Fixed lump-sum quote tied to agreed milestones.',
    team: 'Assigned project team with dedicated Lead Engineer.',
    flexibility: 'Scope governed by initial statement of work with clear change request handling.'
  },
  {
    id: 'dedicated',
    name: 'Dedicated Team (FTE)',
    badge: 'Most Popular',
    popular: true,
    tagline: 'An integrated engineering desk working exclusively for your company.',
    bestFor: 'Ongoing product development, continuous drawing production, recurring BIM coordination.',
    pricing: 'Flat monthly retainer per engineer with predictable costs.',
    team: 'Named, dedicated engineers operating as your offshore department.',
    flexibility: 'Direct task prioritization; scale team size up or down with 30 days notice.'
  },
  {
    id: 'hybrid',
    name: 'Hourly Bucket / Ad-Hoc',
    badge: 'Maximum Flexibility',
    popular: false,
    tagline: 'On-demand engineering hours for overflow tasks and quick turnarounds.',
    bestFor: 'Design overflow, drawing revisions, urgent clash fixes, seasonal peak support.',
    pricing: 'Pre-purchased block of 40–160 engineering hours.',
    team: 'Flexible access to mechanical, MEP, and BIM drafting specialists.',
    flexibility: 'Burn hours only as needed; unused hours roll over for up to 90 days.'
  }
];

export default function OffshoreModel({ onOpenCalendly }) {
  const handleQuoteClick = (e, modelName) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      const modelSelect = document.getElementById('form-model');
      if (modelSelect && modelName) {
        modelSelect.value = modelName;
      }
    }
  };

  const handleBookCall = () => {
    trackCallBooking('offshore_model_cta');
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="offshore-model" className="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Global Delivery Engine"
          title="Your Offshore Engineering Team, Without the Overhead"
          subtitle="escalup works as an extension of your in-house team. You share the brief, we deliver production-ready CAD and MEP documentation, on time and under NDA."
        />

        {/* 6 Value Pillars with Staggered Entrance */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
                }}
                whileHover={{ y: -5 }}
                className="bg-[#121214] hover:bg-[#18181B] rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 flex items-start gap-4 cursor-default shadow-xl"
              >
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-white shrink-0 flex items-center justify-center mt-0.5 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Live World Clock Widget */}
        <div className="mb-16">
          <WorldClock />
        </div>

        {/* Engagement Models Comparison */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Choose Your Engagement Model
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mt-2">
              Select the structure that best fits your workflow, volume, and budget.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {ENGAGEMENT_MODELS.map((model) => (
              <motion.div
                key={model.id}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                }}
                whileHover={{ y: -6 }}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  model.popular
                    ? 'bg-[#18181B] border-2 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.1)] relative ring-4 ring-white/10'
                    : 'bg-[#121214] border border-white/10 hover:border-white/30 shadow-xl'
                }`}
              >
                {model.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-black text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Zap className="w-3 h-3 fill-black" />
                    <span>{model.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-white">{model.name}</h4>
                    {!model.popular && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A1A1AA] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full font-mono">
                        {model.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#D4D4D8] mb-6 leading-relaxed">
                    {model.tagline}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
                    <div>
                      <span className="font-bold text-white block mb-0.5">Best For:</span>
                      <span className="text-[#A1A1AA]">{model.bestFor}</span>
                    </div>

                    <div>
                      <span className="font-bold text-white block mb-0.5">Commercial Structure:</span>
                      <span className="text-white font-medium">{model.pricing}</span>
                    </div>

                    <div>
                      <span className="font-bold text-white block mb-0.5">Team Arrangement:</span>
                      <span className="text-[#A1A1AA]">{model.team}</span>
                    </div>

                    <div>
                      <span className="font-bold text-white block mb-0.5">Flexibility:</span>
                      <span className="text-[#A1A1AA]">{model.flexibility}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={(e) => handleQuoteClick(e, model.name)}
                    className={`w-full py-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      model.popular
                        ? 'bg-white hover:bg-neutral-200 text-black shadow-md'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white'
                    }`}
                  >
                    <span>Choose {model.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-[#121214] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-xl overflow-hidden">
          <div className="mb-6">
            <h4 className="text-lg font-bold text-white">Side-by-Side Model Comparison</h4>
            <p className="text-xs text-[#A1A1AA]">Detailed breakdown of operational and commercial differences</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-[#A1A1AA] uppercase tracking-wider font-mono">
                  <th className="pb-3 pr-4 font-bold">Feature / Capability</th>
                  <th className="pb-3 px-4 font-bold">Project-Based</th>
                  <th className="pb-3 px-4 font-bold text-white">Dedicated Team (FTE)</th>
                  <th className="pb-3 pl-4 font-bold">Hourly Bucket</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-[#D4D4D8]">
                <tr>
                  <td className="py-3 pr-4 font-semibold text-white">Billing Model</td>
                  <td className="py-3 px-4">Fixed lump-sum milestone</td>
                  <td className="py-3 px-4 text-white font-medium">Flat monthly fee</td>
                  <td className="py-3 pl-4">Prepaid hour bundle</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-white">Dedicated Lead Engineer</td>
                  <td className="py-3 px-4">Yes (for project scope)</td>
                  <td className="py-3 px-4 text-white font-medium">Yes (full-time assigned)</td>
                  <td className="py-3 pl-4">Shared lead oversight</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-white">Direct Slack/Teams Sync</td>
                  <td className="py-3 px-4">Milestone checkpoints</td>
                  <td className="py-3 px-4 text-white font-medium">Daily synchronous channel</td>
                  <td className="py-3 pl-4">As-needed syncs</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-white">Client CAD Standards Adoption</td>
                  <td className="py-3 px-4">Strict compliance</td>
                  <td className="py-3 px-4 text-white font-medium">Deep workflow integration</td>
                  <td className="py-3 pl-4">Client templates applied</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-white">Turnaround Guarantee</td>
                  <td className="py-3 px-4">Per statement of work</td>
                  <td className="py-3 px-4 text-white font-medium">Continuous daily releases</td>
                  <td className="py-3 pl-4">24–48h notice</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-white">Non-Disclosure Agreement</td>
                  <td className="py-3 px-4">Mandatory before kickoff</td>
                  <td className="py-3 px-4 text-white font-medium">Mandatory before kickoff</td>
                  <td className="py-3 pl-4">Mandatory before kickoff</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-[#A1A1AA]">
              <Lock className="w-4 h-4 text-white" />
              <span>All models include 100% IP ownership transfer and strict confidentiality.</span>
            </div>
            <button
              onClick={handleBookCall}
              className="text-xs font-bold text-white hover:underline flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Discuss custom engagement parameters with our lead engineer →</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
