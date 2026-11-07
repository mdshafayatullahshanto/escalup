// src/components/ui/FloatingAssistant.jsx
// Floating circular chat/assistant button fixed at bottom-right on every page (Infosys style).

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingAssistant({ onOpenAssistant }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex flex-col items-center gap-2.5">
      {/* Back to top mini pill if scrolled deep */}
      <AnimatePresence>
        {showScrollTop && (
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
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Infosys floating assistant button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={onOpenAssistant}
        aria-label="Ask escalup Engineering Assistant"
        className="relative group w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#0070AD] to-[#5846F6] text-white shadow-xl flex items-center justify-center cursor-pointer border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5846F6] focus-visible:ring-offset-2"
        title="Ask escalup"
      >
        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0B0F14]/90 text-white text-xs font-medium whitespace-nowrap shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
          Ask escalup ✦
        </span>
      </motion.button>
    </div>
  );
}
