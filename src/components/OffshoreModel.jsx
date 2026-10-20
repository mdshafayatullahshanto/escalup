// /src/components/OffshoreModel.jsx
// Detailed offshore engagement models, live world clock, and comparison table

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
  Check,
  Zap,
  FileCheck2,
  Lock,
  Layers
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
    tagline: 'Your full-time offshore engineering extension working exclusively on your product pipeline.',
    bestFor: 'Continuous engineering overflow, active product lines, long-term BIM coordination.',
    pricing: 'Predictable monthly retainer per dedicated engineer.',
    team: 'Handpicked full-time engineers trained on your CAD standards & PLM.',
    flexibility: 'Direct task allocation, agile prioritization, seamless scale up/down with 30-day notice.'
  },
  {
    id: 'hourly',
    name: 'On-Demand / Hourly',
    badge: 'Maximum Flexibility',
    popular: false,
    tagline: 'Pay only for the hours you consume for quick updates, feasibility, and audits.',
    bestFor: 'Occasional drawing revisions, rapid CAD conversions, urgent redline markups, FEA runs.',
    pricing: 'Transparent hourly rate tracked via detailed timesheets.',
    team: 'Pool of on-demand mechanical & MEP engineers as needed.',
    flexibility: 'Ultimate agility with zero minimum monthly commitments.'
  }
];

export default function OffshoreModel({ onOpenCalendly }) {
  const handleQuoteClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
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
    <section id="offshore-model" className="py-20 md:py-28 bg-[#F4F6F5] dark:bg-[#0B111E] relative scroll-mt-12">
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
                className="bg-white dark:bg-[#121C2D] rounded-2xl p-6 border border-[#DBE3E0] dark:border-[#223249] shadow-soft hover:shadow-card hover:border-[#2E756E]/40 dark:hover:border-[#34A096]/50 transition-all duration-300 flex items-start gap-4 cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2E756E]/10 dark:bg-[#162235] text-[#2E756E] dark:text-[#34A096] shrink-0 flex items-center justify-center mt-0.5 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#14201D] dark:text-[#F1F5F9] mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed">
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
            <h3 className="text-2xl font-extrabold text-[#14201D]">
              Choose Your Engagement Model
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6A65] mt-2">
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
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  model.popular
                    ? 'bg-white dark:bg-[#121C2D] border-2 border-[#2E756E] dark:border-[#34A096] shadow-card relative ring-4 ring-[#2E756E]/10 dark:ring-[#34A096]/20'
                    : 'bg-white dark:bg-[#121C2D] border border-[#DBE3E0] dark:border-[#223249] shadow-soft hover:border-[#2E756E]/40 dark:hover:border-[#34A096]/50 hover:shadow-card'
                }`}
              >
                {model.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2E756E] dark:bg-[#34A096] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 animate-pulse">
                    <Zap className="w-3 h-3 fill-white" />
                    <span>{model.badge}</span>
                  </div>
                )}

                <div>
                  {!model.popular && (
                    <span className="text-[11px] font-bold text-[#2E756E] dark:text-[#34A096] uppercase tracking-wider block mb-1">
                      {model.badge}
                    </span>
                  )}
                  <h4 className="text-xl font-extrabold text-[#14201D] dark:text-[#F1F5F9] mb-2 mt-1">
                    {model.name}
                  </h4>
                  <p className="text-xs text-[#5A6A65] dark:text-[#94A3B8] mb-6">
                    {model.tagline}
                  </p>

                  <div className="space-y-4 text-xs border-t border-[#DBE3E0]/70 dark:border-[#223249] pt-5">
                    <div>
                      <span className="font-bold text-[#14201D] dark:text-[#F1F5F9] block mb-0.5">Best For:</span>
                      <span className="text-[#5A6A65] dark:text-[#94A3B8]">{model.bestFor}</span>
                    </div>

                    <div>
                      <span className="font-bold text-[#14201D] dark:text-[#F1F5F9] block mb-0.5">Pricing Structure:</span>
                      <span className="text-[#5A6A65] dark:text-[#94A3B8]">{model.pricing}</span>
                    </div>

                    <div>
                      <span className="font-bold text-[#14201D] dark:text-[#F1F5F9] block mb-0.5">Engineering Team:</span>
                      <span className="text-[#5A6A65] dark:text-[#94A3B8]">{model.team}</span>
                    </div>

                    <div>
                      <span className="font-bold text-[#14201D] dark:text-[#F1F5F9] block mb-0.5">Flexibility:</span>
                      <span className="text-[#5A6A65] dark:text-[#94A3B8]">{model.flexibility}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DBE3E0]/70 dark:border-[#223249]">
                  <a
                    href="#contact"
                    onClick={handleQuoteClick}
                    className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      model.popular
                        ? 'bg-[#2E756E] hover:bg-[#255e58] text-white shadow-md'
                        : 'bg-[#F4F6F5] dark:bg-[#162235] hover:bg-[#e4ece9] dark:hover:bg-[#1e2e46] text-[#14201D] dark:text-[#F1F5F9] border border-[#DBE3E0] dark:border-[#223249]'
                    }`}
                  >
                    <span>Request {model.name} Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3-Step "How to Get Started" Strip */}
        <div className="bg-white dark:bg-[#121C2D] rounded-2xl border border-[#DBE3E0] dark:border-[#223249] p-6 sm:p-8 shadow-soft mb-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#2E756E] dark:text-[#34A096] uppercase tracking-wider">
              Zero Friction Onboarding
            </span>
            <h4 className="text-xl font-bold text-[#14201D] dark:text-[#F1F5F9] mt-1">
              How to Get Started in 3 Simple Steps
            </h4>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#2E756E]/10 dark:bg-[#162235] text-[#2E756E] dark:text-[#34A096] font-extrabold text-base flex items-center justify-center mb-3 ring-8 ring-[#2E756E]/5 dark:ring-[#34A096]/10">
                1
              </div>
              <h5 className="font-bold text-sm text-[#14201D] dark:text-[#F1F5F9] mb-1">Share Your Brief</h5>
              <p className="text-xs text-[#5A6A65] dark:text-[#94A3B8]">
                Send your scope, 2D sketches, 3D CAD files, or MEP requirements via secure upload or email.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#2E756E]/10 dark:bg-[#162235] text-[#2E756E] dark:text-[#34A096] font-extrabold text-base flex items-center justify-center mb-3 ring-8 ring-[#2E756E]/5 dark:ring-[#34A096]/10">
                2
              </div>
              <h5 className="font-bold text-sm text-[#14201D] dark:text-[#F1F5F9] mb-1">Quote Within 24h</h5>
              <p className="text-xs text-[#5A6A65] dark:text-[#94A3B8]">
                We review technical feasibility and deliver a transparent milestone quote and schedule within one working day.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#2E756E]/10 dark:bg-[#162235] text-[#2E756E] dark:text-[#34A096] font-extrabold text-base flex items-center justify-center mb-3 ring-8 ring-[#2E756E]/5 dark:ring-[#34A096]/10">
                3
              </div>
              <h5 className="font-bold text-sm text-[#14201D] dark:text-[#F1F5F9] mb-1">Kickoff Under NDA</h5>
              <p className="text-xs text-[#5A6A65] dark:text-[#94A3B8]">
                Execute mutual NDA, align drafting standards, and your dedicated engineering team begins execution immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges & Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#DBE3E0] dark:border-[#223249]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-[#14201D] dark:text-[#F1F5F9]">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#2E756E] dark:text-[#34A096]" />
              NDA Standard
            </span>
            <span className="text-[#DBE3E0] dark:text-[#223249]">|</span>
            <span className="flex items-center gap-1.5">
              <FileCheck2 className="w-3.5 h-3.5 text-[#2E756E] dark:text-[#34A096]" />
              ASME & ISO Compliant
            </span>
            <span className="text-[#DBE3E0] dark:text-[#223249]">|</span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#2E756E] dark:text-[#34A096]" />
              STEP / DWG / RVT / IFC
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleBookCall}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-white dark:bg-[#121C2D] border border-[#DBE3E0] dark:border-[#223249] hover:border-[#2E756E] dark:hover:border-[#34A096] text-xs font-bold text-[#14201D] dark:text-[#F1F5F9] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#2E756E] dark:text-[#34A096]" />
              <span>Book Intro Call</span>
            </button>
            <a
              href="#contact"
              onClick={handleQuoteClick}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-[#2E756E] hover:bg-[#255e58] text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
