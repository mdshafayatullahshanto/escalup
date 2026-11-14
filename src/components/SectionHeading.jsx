// /src/components/SectionHeading.jsx
// Smooth, staggered entrance animation for section headings across the site
// Brand color combination matching reference design

import React from 'react';
import { motion } from 'framer-motion';
import GlassBadge from './ui/GlassBadge';

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
    hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
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
        <motion.div variants={itemVariants} className="mb-3.5">
          <GlassBadge>{eyebrow}</GlassBadge>
        </motion.div>
      )}

      <motion.h2
        variants={itemVariants}
        className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#111827] dark:text-white"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="mt-4 text-base sm:text-lg leading-relaxed text-[#5A6A65] dark:text-[#8FA89F]"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
