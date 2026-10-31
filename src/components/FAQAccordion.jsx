// /src/components/FAQAccordion.jsx
// Consilio-style split FAQ layout with side guidance card & animated accordion

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, MessageSquare, Calendar } from 'lucide-react';
import { faqData } from '../data/faq';
import Magnetic from './Magnetic';
import { trackCallBooking } from '../utils/analytics';
import { companyData } from '../data/company';

export default function FAQAccordion({ onOpenCalendly }) {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleBookCall = () => {
    trackCallBooking('faq_guidance_button');
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F4F6F5] dark:bg-[#000D0E] border-b border-[#DBE3E0] dark:border-[#223249]/60 relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (Consilio Split Layout) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2E756E]/10 dark:bg-[#14F3C1]/10 text-[#2E756E] dark:text-[#14F3C1] border border-[#2E756E]/20 dark:border-[#14F3C1]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              <span>FAQs</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14201D] dark:text-white tracking-tight leading-tight">
              Your Commonly Asked Questions
            </h2>

            <p className="text-sm sm:text-base text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed">
              Everything you need to know about working with escalup as your dedicated offshore CAD, Mechanical, and MEP engineering partner.
            </p>

            {/* Consilio-style Guidance Box */}
            <div className="p-7 rounded-3xl bg-white dark:bg-[#001517] border border-[#DBE3E0] dark:border-[#223249]/80 shadow-soft space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#2E756E]/10 dark:bg-[#14F3C1]/10 text-[#2E756E] dark:text-[#14F3C1] flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#14201D] dark:text-white">
                Need Direct Guidance?
              </h4>
              <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed">
                Have a specialized engineering question or unique project standard? Discuss directly with our Principal Engineer.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Magnetic strength={0.15}>
                  <button
                    onClick={handleBookCall}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#2E756E] hover:bg-[#255e58] text-white text-xs font-bold shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book a Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Magnetic>

                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#F4F6F5] dark:bg-[#002226] text-[#14201D] dark:text-white hover:text-[#2E756E] dark:hover:text-[#14F3C1] border border-[#DBE3E0] dark:border-[#14F3C1]/20 text-xs font-bold transition-colors text-center flex items-center justify-center"
                >
                  <span>Send Message</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              const faqId = `faq-answer-${faq.id}`;
              const headerId = `faq-header-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-[#001517] rounded-3xl border border-[#DBE3E0] dark:border-[#223249]/80 overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#14201D] dark:text-white hover:text-[#2E756E] dark:hover:text-[#14F3C1] transition-colors cursor-pointer focus:outline-none"
                  >
                    <span className="flex-1">{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isOpen
                          ? 'bg-[#2E756E] dark:bg-[#14F3C1] text-white dark:text-[#000D0E] rotate-180'
                          : 'bg-[#F4F6F5] dark:bg-[#002226] text-[#5A6A65] dark:text-[#94A3B8]'
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
                        <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-[#5A6A65] dark:text-[#94A3B8] leading-relaxed border-t border-[#DBE3E0]/50 dark:border-[#223249]/60">
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

      </div>
    </section>
  );
}
