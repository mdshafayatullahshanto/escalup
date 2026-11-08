// /src/components/FAQAccordion.jsx
// SECTION 5: Centered FAQ layout with animated accordion
// Unified design system: White cards, indigo toggle icons, smooth height animation, only one open at a time.
// Light-weight heading with one semibold phrase, lavender background, zero green, zero monospace, zero stray dots.

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../data/faq';
import GlassBadge from './ui/GlassBadge';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // Only one item open at a time

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 md:py-32 bg-[#F6F7FC] dark:bg-[#080C0F] border-b border-[#E2E6EE] dark:border-white/10 font-sans relative scroll-mt-12 transition-colors">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Section Header: Light-weight heading with ONE highlighted phrase */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="mb-4">
            <GlassBadge>FAQs & Governance</GlassBadge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
            Your Commonly{' '}
            <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
              Asked Questions.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed max-w-2xl mx-auto font-normal">
            Everything you need to know about working with escalup as your dedicated offshore CAD, Mechanical, and MEP engineering partner.
          </p>
        </div>

        {/* Accordion List with White Cards and Indigo Toggle Icon */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden bg-white dark:bg-[#11161F] border ${
                  isOpen
                    ? 'border-[#5846F6]/40 shadow-card'
                    : 'border-[#E2E6EE] dark:border-white/10 hover:border-[#5846F6]/30 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-[#111827] dark:text-white leading-snug">
                    {faq.question}
                  </span>
                  
                  {/* Indigo Toggle Icon */}
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#5846F6]/10 text-[#5846F6]'
                        : 'bg-[#EEF2F8] dark:bg-[#151D26] text-[#5A6679] dark:text-[#9BA8BA]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Smooth Height Animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-xs sm:text-sm text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed border-t border-[#E2E6EE] dark:border-white/10 pt-4 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
