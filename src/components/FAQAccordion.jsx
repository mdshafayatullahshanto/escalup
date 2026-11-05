// /src/components/FAQAccordion.jsx
// Centered FAQ layout with animated accordion
// Light Editorial Engineering Theme with Deep Teal accents

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../data/faq';
import SectionHeading from './SectionHeading';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white dark:bg-[#0F201C] border-b border-[#DBE3E0] dark:border-[#263830] relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Title and Subtitle Centered in the Middle */}
        <SectionHeading
          eyebrow="FAQs"
          title="Your Commonly Asked Questions"
          subtitle="Everything you need to know about working with escalup as your dedicated offshore CAD, Mechanical, and MEP engineering partner."
        />

        {/* Accordion Content Centered in the Middle */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#F8FAF9] dark:bg-[#1D3328] border-[#2E756E]/50 dark:border-[#3B948A]/50 shadow-soft'
                    : 'bg-white dark:bg-[#152620] border-[#DBE3E0] dark:border-[#263830] hover:border-[#2E756E]/30 dark:hover:border-[#3B948A]/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#14201D] dark:text-[#E4EDE9] leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#2E756E] text-white'
                        : 'bg-[#F8FAF9] dark:bg-[#1D3328] text-[#5A6A65] dark:text-[#8FA89F] border border-[#DBE3E0] dark:border-[#263830]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-xs sm:text-sm text-[#5A6A65] dark:text-[#8FA89F] leading-relaxed border-t border-[#DBE3E0] dark:border-[#263830] pt-4">
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
