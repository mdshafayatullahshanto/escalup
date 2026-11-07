// src/components/FloatingActions.jsx
// Floating circular assistant button fixed at bottom-right on every page (Infosys style),
// with scroll-to-top support.

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUp } from 'lucide-react';
import AskEscalupModal from './AskEscalupModal';

export default function FloatingActions({ onOpenCalendly }) {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [assistantModalOpen, setAssistantModalOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex flex-col items-center gap-2.5">
        {/* Back to top mini button if scrolled deep */}
        <AnimatePresence>
          {showTopBtn && (
            <motion.button
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-full bg-white dark:bg-[#151C24] text-[#111827] dark:text-white border border-[#E2E6EE] dark:border-white/10 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#0070AD] dark:text-[#38BDF8]" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Signature Infosys Floating Circular Assistant Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setAssistantModalOpen(true)}
          aria-label="Ask escalup Engineering Assistant"
          className="relative group w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#0070AD] to-[#5846F6] text-white shadow-xl flex items-center justify-center cursor-pointer border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5846F6] focus-visible:ring-offset-2"
          title="Ask escalup ✦"
        >
          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Subtle live indicator badge */}
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#14F3C1] border-2 border-white dark:border-[#0B0F14]" />
          
          {/* Tooltip on hover */}
          <span className="hidden sm:inline-block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0B0F14]/90 text-white text-xs font-medium whitespace-nowrap shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
            Ask escalup ✦
          </span>
        </motion.button>
      </div>

      {/* Global Ask escalup Assistant Modal */}
      <AskEscalupModal
        isOpen={assistantModalOpen}
        onClose={() => setAssistantModalOpen(false)}
        onOpenCalendly={onOpenCalendly}
      />
    </>
  );
}
