import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
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
    <AnimatePresence>
      {showTopBtn && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col gap-3 items-end"
        >
          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white dark:bg-[#121C2D] border border-[#DBE3E0] dark:border-[#223249] text-[#5A6A65] dark:text-[#94A3B8] hover:text-[#2E756E] dark:hover:text-[#34A096] hover:border-[#2E756E] shadow-card flex items-center justify-center transition-colors cursor-pointer group"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ChevronUp className="w-5 h-5 group-hover:text-[#2E756E] dark:group-hover:text-[#34A096] transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
