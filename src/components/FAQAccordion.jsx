// /src/components/FAQAccordion.jsx
// Consilio-style split FAQ layout with side guidance card & animated accordion
// Modern black-and-white theme

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, Calendar } from 'lucide-react';
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
    <section id="faq" className="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (Consilio Split Layout) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>FAQs</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Commonly Asked Questions
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Everything you need to know about working with escalup as your dedicated offshore CAD, Mechanical, and MEP engineering partner.
            </p>

            {/* Consilio-style Guidance Box */}
            <div className="p-7 rounded-3xl bg-[#121214] border border-white/10 shadow-soft space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-white/10 text-white flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-base font-bold text-white">Have a specific question about your scope?</h4>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Schedule a 30-minute intro call to discuss your CAD standards, drawing templates, or pilot scope directly with our lead engineer.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Magnetic strength={0.15}>
                  <button
                    onClick={handleBookCall}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <span>Book 30-Min Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Magnetic>

                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs text-center flex items-center justify-center cursor-pointer"
                >
                  <span>Send Inquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#18181B] border-white/30 shadow-card'
                      : 'bg-[#121214] border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-white text-black'
                          : 'bg-white/5 text-white/70'
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
                        <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-xs sm:text-sm text-[#D4D4D8] leading-relaxed border-t border-white/10 pt-4">
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
