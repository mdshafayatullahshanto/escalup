// /src/components/SectionHeading.jsx
// Smooth, staggered entrance animation for section headings across the site
// Modern black-and-white theme

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`max-w-3xl mb-12 md:mb-16 ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 bg-white/10 text-white border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            {eyebrow}
          </div>
        </motion.div>
      )}

      <motion.h2
        variants={itemVariants}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="mt-4 text-base sm:text-lg leading-relaxed text-[#A1A1AA]"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
