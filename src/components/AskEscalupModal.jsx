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

export default function AskEscalupModal({ isOpen, onClose, onOpenCalendly: _onOpenCalendly }) {
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
    trackCallBooking('ask_escalup_modal');
    window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
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
          className="relative w-full max-w-2xl bg-white dark:bg-[#11161F] text-[#111827] dark:text-[#F3F5FA] rounded-3xl shadow-card border border-[#E2E6EE] dark:border-white/10 overflow-hidden flex flex-col max-h-[85vh] z-10 font-sans"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#E2E6EE] dark:border-white/10 bg-[#F6F7FC] dark:bg-[#161D27]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#5846F6]/10 text-[#5846F6] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[#111827] dark:text-white flex items-center gap-2">
                  <span>Ask escalup</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#0B1528] text-white uppercase tracking-wider font-medium">
                    Engineering Assistant
                  </span>
                </h3>
                <p className="text-xs text-[#5A6679] dark:text-[#9BA8BA]">
                  Instant technical answers, CAD platform compatibility & quote acceleration
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#5A6679] dark:text-[#9BA8BA] hover:text-[#111827] dark:hover:text-white hover:bg-[#EEF2F8] dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input Bar */}
          <div className="p-4 border-b border-[#E2E6EE] dark:border-white/10 bg-white dark:bg-[#11161F]">
            <div className="relative">
              <Search className="w-4 h-4 text-[#8E9BAE] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search CAD tools (SolidWorks, Revit), standards, NDA, or pricing..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E6EE] dark:border-white/10 bg-[#F6F7FC] dark:bg-[#161D27] text-xs sm:text-sm text-[#111827] dark:text-white placeholder-[#8E9BAE] focus:outline-none focus:ring-2 focus:ring-[#5846F6]"
                autoFocus
              />
            </div>
          </div>

          {/* Content Scroll Body */}
          <div className="p-5 overflow-y-auto space-y-5 text-xs">
            
            {/* Quick Answer Cards */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5A6679] dark:text-[#9BA8BA] block mb-2.5">
                Frequently Asked Engineering Questions:
              </span>

              <div className="space-y-2.5">
                {filteredQuestions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#F6F7FC] dark:bg-[#161D27] border border-[#E2E6EE] dark:border-white/10"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-semibold text-[#111827] dark:text-white text-xs">
                        {item.q}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EEF2F8] dark:bg-[#11161F] text-[#5846F6] dark:text-[#A5B4FC] border border-[#E2E6EE] dark:border-white/10 font-medium">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Matching Engineering Disciplines */}
            {query.trim() && filteredServices.length > 0 && (
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5A6679] dark:text-[#9BA8BA] block mb-2.5">
                  Matching Engineering Disciplines:
                </span>
                <div className="space-y-2">
                  {filteredServices.slice(0, 3).map((s) => (
                    <div
                      key={s.id}
                      className="p-3 rounded-2xl bg-white dark:bg-[#161D27] border border-[#E2E6EE] dark:border-white/10 flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-semibold text-xs text-[#111827] dark:text-white">{s.title}</h4>
                        <span className="text-[10px] text-[#5A6679] dark:text-[#9BA8BA]">{s.tools.join(', ')}</span>
                      </div>
                      <a
                        href={`/services/${s.slug}`}
                        onClick={onClose}
                        className="text-[#5846F6] dark:text-[#A5B4FC] font-semibold text-[11px] flex items-center gap-1 hover:underline"
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
            <div className="pt-3 border-t border-[#E2E6EE] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-[#5A6679] dark:text-[#9BA8BA] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#5846F6]" />
                <span>Need a formal quote? Reply within 24 hours guaranteed.</span>
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleBookCall}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-[#EEF2F8] dark:bg-white/10 hover:bg-[#E2E8F0] text-[#111827] dark:text-white font-medium text-[11px] border border-[#E2E6EE] dark:border-white/10 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#5846F6]" />
                  <span>Book Call</span>
                </button>
                <button
                  onClick={handleQuoteClick}
                  className="flex-1 sm:flex-none px-5 py-2 rounded-full bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:opacity-90 font-medium text-[11px] flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-all"
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
