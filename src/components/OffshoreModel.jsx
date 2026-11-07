// /src/components/OffshoreModel.jsx
// SECTION 4: "Your Offshore Engineering Team, Without the Overhead"
// Light-weight heading, lavender background, white cards with stagger fade-in on scroll, icons in indigo.
// Zero green/teal, zero monospace, zero stray dots.

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Repeat, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  MessageSquare, 
  Zap
} from 'lucide-react';
import WorldClock from './WorldClock';
import Badge from './ui/Badge';
import Button from './ui/Button';

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

export default function OffshoreModel({ onOpenCalendly: _onOpenCalendly }) {
  const handleQuoteClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offshore-model" className="py-20 sm:py-28 md:py-32 bg-[#F6F7FC] dark:bg-[#080C0F] border-b border-[#E2E6EE] dark:border-white/10 font-sans relative scroll-mt-12 transition-colors">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Section Header: Light-weight heading with ONE highlighted phrase */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="mb-3">
            <Badge variant="navy" size="sm" className="bg-[#121926] text-[#A5B4FC] border border-white/10">
              Global Delivery Engine
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
            Your Offshore Engineering Team,{' '}
            <span className="font-semibold text-[#111827] dark:text-white">
              Without the Overhead.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed max-w-2xl mx-auto font-normal">
            escalup works as an extension of your in-house team. You share the brief, we deliver production-ready CAD and MEP documentation, on time and under NDA.
          </p>
        </div>

        {/* 6 Value Pillars with Staggered Fade-In on Scroll & Indigo Icons */}
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
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-[#11161F] rounded-3xl p-6 sm:p-7 border border-[#E2E6EE] dark:border-white/10 transition-all duration-300 flex items-start gap-4 cursor-default shadow-card hover:shadow-card-hover"
              >
                {/* Indigo Icon Container */}
                <div className="w-11 h-11 rounded-2xl bg-[#5846F6]/10 text-[#5846F6] shrink-0 flex items-center justify-center mt-0.5 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-[#111827] dark:text-white mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Live World Clock Widget */}
        <div className="mb-16 sm:mb-20">
          <WorldClock />
        </div>

        {/* Engagement Models Comparison */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-light text-[#111827] dark:text-white tracking-tight">
              Choose Your <span className="font-semibold">Engagement Model</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6679] dark:text-[#9BA8BA] mt-2 font-normal">
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
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            {ENGAGEMENT_MODELS.map((model) => (
              <motion.div
                key={model.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -4 }}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  model.popular
                    ? 'bg-white dark:bg-[#11161F] border-2 border-[#5846F6] shadow-xl relative'
                    : 'bg-white dark:bg-[#11161F] border border-[#E2E6EE] dark:border-white/10 shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* Popular Pill Tag */}
                {model.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#111827] text-white text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
                    <Zap className="w-3 h-3 text-[#A5B4FC] fill-current" />
                    <span>{model.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-[#111827] dark:text-white">{model.name}</h4>
                    {!model.popular && (
                      <span className="text-[11px] font-medium text-[#5A6679] dark:text-[#9BA8BA] bg-[#EEF2F8] dark:bg-[#1A232E] px-2.5 py-0.5 rounded-full">
                        {model.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#5A6679] dark:text-[#9BA8BA] mb-6 leading-relaxed">
                    {model.tagline}
                  </p>

                  <div className="space-y-3.5 pt-4 border-t border-[#E2E6EE] dark:border-white/10 text-xs">
                    <div>
                      <span className="font-semibold text-[#111827] dark:text-white block mb-0.5">Best For:</span>
                      <span className="text-[#5A6679] dark:text-[#9BA8BA]">{model.bestFor}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-[#111827] dark:text-white block mb-0.5">Commercial Structure:</span>
                      <span className="text-[#111827] dark:text-white font-medium">{model.pricing}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-[#111827] dark:text-white block mb-0.5">Team Arrangement:</span>
                      <span className="text-[#5A6679] dark:text-[#9BA8BA]">{model.team}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-[#111827] dark:text-white block mb-0.5">Flexibility:</span>
                      <span className="text-[#5A6679] dark:text-[#9BA8BA]">{model.flexibility}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E6EE] dark:border-white/10">
                  <Button
                    variant={model.popular ? 'primary' : 'outline'}
                    size="sm"
                    onClick={handleQuoteClick}
                    icon="arrow"
                    className="w-full"
                  >
                    Select Model
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
