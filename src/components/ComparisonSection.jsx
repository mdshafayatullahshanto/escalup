// /src/components/ComparisonSection.jsx
// Consilio-style iconic comparison card: "Why Engineering Leaders Choose escalup" vs "Other Firms / Freelancers"
// Modern black-and-white theme

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Magnetic from './Magnetic';

const OTHER_FIRMS = [
  'Inconsistent CAD drafting standards & disorganized feature trees',
  'No senior engineer peer review before drawings are dispatched',
  'Communication friction and zero synchronous time-zone overlap',
  'Hidden revision charges and open-ended hourly billing',
  'Freelancers disappear mid-release with zero accountability',
  'Vague IP protection and questionable data confidentiality'
];

const WITH_ESCALUP = [
  '100% ASME Y14.5, ISO & client template / layer discipline',
  'Every 3D model & drawing audited by a Senior Principal Engineer',
  'Daily Slack/Teams coordination with direct BST (UTC+6) overlap',
  'Fixed-price milestone quotes with guaranteed 24h turnaround',
  'Assigned dedicated engineers who know your product lines inside out',
  'Strict Non-Disclosure Agreements; you retain 100% IP ownership'
];

export default function ComparisonSection() {
  const handleQuoteClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <SectionHeading
          eyebrow="The Difference"
          title="Why Engineering Leaders Choose escalup"
          subtitle="Many offshore arrangements fail due to drafting errors and communication gaps. Here is how escalup solves both."
        />

        {/* 2-Column Comparison Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Left: Other Firms */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-7 sm:p-9 bg-[#121214] border border-white/10 shadow-soft"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] block mb-1 font-mono">
                  Common Market Approach
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Other Firms & Freelancers
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <X className="w-5 h-5" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A1A1AA] mb-6 leading-relaxed">
              Many offshore engagements deliver low-cost drafting, but fall short during production—leaving your shop floor with rework and delays.
            </p>

            <ul className="space-y-4">
              {OTHER_FIRMS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#A1A1AA]">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: With escalup (Consilio Highlight Card) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-7 sm:p-9 bg-[#18181B] text-white shadow-2xl border border-white/20 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-6 border-b border-white/15 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block mb-1 font-mono">
                    The escalup Standard
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    With escalup
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shrink-0 font-bold shadow-md">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D4D4D8] mb-6 leading-relaxed">
                We combine rigorous mechanical engineering expertise with hands-on drafting discipline to provide a reliable, long-term extension of your team.
              </p>

              <ul className="space-y-4 mb-8">
                {WITH_ESCALUP.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white">
                    <div className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="leading-snug font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom CTA Button */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#A1A1AA] font-mono">24h Response Guaranteed</span>
              <Magnetic strength={0.2}>
                <a
                  href="#contact"
                  onClick={handleQuoteClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold shadow-md transition-all group"
                >
                  <span>Request an Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
