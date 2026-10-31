import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import Magnetic from './Magnetic';

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
          <Magnetic strength={0.3}>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              data-cursor="Top"
              className="w-10 h-10 rounded-full bg-[#001517] border border-white/10 text-white/70 hover:text-[#14F3C1] hover:border-[#14F3C1] shadow-2xl flex items-center justify-center transition-colors cursor-pointer group"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ChevronUp className="w-5 h-5 group-hover:text-[#14F3C1] transition-transform group-hover:-translate-y-0.5" />
            </motion.button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
