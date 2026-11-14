// src/components/FloatingActions.jsx
// Scroll-to-top support button fixed at bottom-right on deep scroll.

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

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
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40">
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
            className="w-10 h-10 rounded-full bg-white dark:bg-[#151C24] text-[#111827] dark:text-white border border-[#E2E6EE] dark:border-white/10 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-[#0070AD] dark:text-[#38BDF8]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
