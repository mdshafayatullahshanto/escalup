// /src/components/AskEscalupModal.jsx
// Infosys-inspired "Ask Leon" equivalent for escalup:
// Interactive engineering scope navigator, FAQ assistant, and instant quote accelerator.

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Calendar
} from 'lucide-react';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';

const QUICK_QUESTIONS = [
  {
    q: 'What CAD software do you support?',
    a: 'We model natively in SolidWorks, Autodesk Inventor, Siemens NX, AutoCAD, Autodesk Revit, Navisworks Manage, and Carrier HAP.',
    category: 'Tools'
  },
  {
    q: 'How does NDA and IP ownership work?',
    a: 'We sign and countersign a strict mutual Non-Disclosure Agreement before any CAD files are exchanged. You retain 100% intellectual property ownership of all source files.',
    category: 'IP & Legal'
  },
  {
    q: 'What is your quote turnaround time?',
    a: 'We review your engineering brief and return an itemized milestone estimate within 24 hours guaranteed.',
    category: 'Pricing'
  },
  {
    q: 'How does time-zone coordination work?',
    a: 'Operating from Dhaka (BST, UTC+6), we provide 4–5h morning sync with Europe, near-synchronous alignment with Dubai (UTC+4), full shared day with Sydney (UTC+10), and overnight turnarounds for North America.',
    category: 'Timezones'
  },
  {
    q: 'Can we start with a small pilot project?',
    a: 'Yes. You can test our drafting speed and communication with a small, low-risk paid trial project (3–5 day delivery) before committing to retainer terms.',
    category: 'Engagement'
  }
];

export default function AskEscalupModal({ isOpen, onClose, onOpenCalendly }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredQuestions = QUICK_QUESTIONS.filter(
    (item) =>
      item.q.toLowerCase().includes(query.toLowerCase()) ||
      item.a.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredServices = servicesData.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(query.toLowerCase()) ||
      s.items.some((item) => item.toLowerCase().includes(query.toLowerCase())) ||
      s.tools.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleQuoteClick = () => {
    onClose();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const handleBookCall = () => {
    onClose();
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0D1A17] text-[#14201D] dark:text-[#E4EDE9] rounded-3xl shadow-2xl border border-[#DBE3E0] dark:border-[#263830] overflow-hidden flex flex-col max-h-[85vh] z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#DBE3E0] dark:border-[#263830] bg-[#F8FAF9] dark:bg-[#152620]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#2E756E]/10 dark:bg-[#3B948A]/20 text-[#2E756E] dark:text-[#14F3C1] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#14201D] dark:text-[#E4EDE9] flex items-center gap-2">
                  <span>Ask escalup</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#2E756E]/10 dark:bg-[#3B948A]/20 text-[#2E756E] dark:text-[#14F3C1] uppercase tracking-wider">
                    Engineering Assistant
                  </span>
                </h3>
                <p className="text-xs text-[#5A6A65] dark:text-[#8FA89F]">
                  Instant technical answers, CAD platform compatibility & quote acceleration
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#889893] dark:text-[#5A7268] hover:text-[#14201D] dark:hover:text-[#E4EDE9] hover:bg-[#F4F6F5] dark:hover:bg-[#263830] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input Bar */}
          <div className="p-4 border-b border-[#DBE3E0] dark:border-[#263830] bg-white dark:bg-[#0D1A17]">
            <div className="relative">
              <Search className="w-4 h-4 text-[#889893] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search CAD tools (SolidWorks, Revit), standards, NDA, or pricing..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DBE3E0] dark:border-[#263830] bg-[#F8FAF9] dark:bg-[#152620] text-xs sm:text-sm text-[#14201D] dark:text-[#E4EDE9] placeholder-[#889893] focus:outline-none focus:ring-1 focus:ring-[#2E756E]"
                autoFocus
              />
            </div>
          </div>

          {/* Content Scroll Body */}
          <div className="p-5 overflow-y-auto space-y-5 text-xs">
            
            {/* Quick Answer Cards */}
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#889893] dark:text-[#5A7268] block mb-2.5">
                Frequently Asked Engineering Questions:
              </span>

              <div className="space-y-2.5">
                {filteredQuestions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#F8FAF9] dark:bg-[#152620] border border-[#DBE3E0] dark:border-[#263830]"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-[#14201D] dark:text-[#E4EDE9] text-xs">
                        {item.q}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-[#0D1A17] text-[#2E756E] dark:text-[#14F3C1] border border-[#DBE3E0] dark:border-[#263830]">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5A6A65] dark:text-[#8FA89F] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Matching Engineering Disciplines */}
            {query.trim() && filteredServices.length > 0 && (
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#889893] dark:text-[#5A7268] block mb-2.5">
                  Matching Engineering Disciplines:
                </span>
                <div className="space-y-2">
                  {filteredServices.slice(0, 3).map((s) => (
                    <div
                      key={s.id}
                      className="p-3 rounded-2xl bg-white dark:bg-[#152620] border border-[#DBE3E0] dark:border-[#263830] flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-bold text-xs text-[#14201D] dark:text-[#E4EDE9]">{s.title}</h4>
                        <span className="text-[10px] text-[#5A6A65] dark:text-[#8FA89F] font-mono">{s.tools.join(', ')}</span>
                      </div>
                      <a
                        href={`/services/${s.slug}`}
                        onClick={onClose}
                        className="text-[#2E756E] dark:text-[#14F3C1] font-bold text-[11px] flex items-center gap-1 hover:underline"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions CTA */}
            <div className="pt-3 border-t border-[#DBE3E0] dark:border-[#263830] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-[#5A6A65] dark:text-[#8FA89F] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#2E756E] dark:text-[#14F3C1]" />
                <span>Need a formal quote? Reply within 24 hours guaranteed.</span>
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleBookCall}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-[#F4F6F5] dark:bg-[#152620] hover:bg-[#E1EDEA] text-[#14201D] dark:text-[#E4EDE9] font-bold text-[11px] border border-[#DBE3E0] dark:border-[#263830] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#2E756E] dark:text-[#14F3C1]" />
                  <span>Book Call</span>
                </button>
                <button
                  onClick={handleQuoteClick}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-[11px] flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
