// src/components/CuriousSection.jsx
// STEP 3 - Item 3: Centered heading with a gradient highlight word, short subtext, dark pill button ("I'm Curious").

import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function CuriousSection() {
  const handleCuriousClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-28 md:py-32 bg-[#F6F7FB] dark:bg-[#080C0F] border-b border-[#E2E6EE] dark:border-white/10 transition-colors">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center">
        
        {/* Uppercase Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-widest text-[#0070AD] dark:text-[#A5B4FC] mb-4 font-sans"
        >
          The Engineering Edge
        </motion.div>

        {/* Centered Heading with Gradient Highlight Word */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#111827] dark:text-white tracking-tight leading-[1.16] mb-6"
        >
          Transforming engineering capacity with{' '}
          <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
            intelligent CAD collaboration.
          </span>
        </motion.h2>

        {/* Short Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-[#5A6679] dark:text-[#9BA8BA] max-w-2xl leading-relaxed mb-8"
        >
          Discover how equipment manufacturers and building consultancies scale their engineering teams without local payroll liability or quality trade-offs.
        </motion.p>

        {/* Dark Pill Primary Button: "I'm Curious" */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={handleCuriousClick}
            icon="arrow"
            className="shadow-xl px-8 py-3.5 sm:py-4 text-sm font-semibold"
          >
            I'm Curious
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
