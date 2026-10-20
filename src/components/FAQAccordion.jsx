// /src/components/FAQAccordion.jsx
// Keyboard accessible, animated accordion with aria-expanded and single-open state

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { faqData } from '../data/faq';
import SectionHeading from './SectionHeading';
import { companyData } from '../data/company';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F4F6F5] dark:bg-[#0B111E] border-b border-[#DBE3E0] dark:border-[#223249] relative scroll-mt-12">
      <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Clear Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with a dedicated offshore CAD, Mechanical, and MEP engineering partner."
        />

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-answer-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-[#121C2D] rounded-2xl border border-[#DBE3E0] dark:border-[#223249] overflow-hidden transition-all duration-200 shadow-soft"
              >
                <button
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={faqId}
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#14201D] dark:text-[#F1F5F9] hover:text-[#2E756E] dark:hover:text-[#34A096] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E756E]"
                >
                  <span className="flex-1">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? 'bg-[#2E756E] text-white rotate-180'
                        : 'bg-[#F4F6F5] dark:bg-[#162235] text-[#5A6A65] dark:text-[#94A3B8]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={faqId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed border-t border-[#DBE3E0]/50 dark:border-[#223249]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <div className="mt-12 text-center p-6 bg-white dark:bg-[#121C2D] rounded-2xl border border-[#DBE3E0] dark:border-[#223249] shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-[#14201D]">Still have questions about your specific project?</h4>
            <p className="text-xs text-[#5A6A65]">We are happy to answer technical inquiries and review your NDAs.</p>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="px-5 py-2.5 rounded-full bg-[#2E756E] hover:bg-[#255e58] text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
