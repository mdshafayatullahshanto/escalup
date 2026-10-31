// /src/components/TextReveal.jsx
// Smooth character/word staggered reveal animation for headings and subheadings.
// Respects reduced motion preferences.

import React from 'react';
import { motion } from 'framer-motion';

export default function TextReveal({
  text,
  className = '',
  as: Component = 'span',
  delay = 0,
  stagger = 0.025,
}) {
  if (!text) return null;

  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 16,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.55,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <Component className={`inline-block ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-0.5">
            <motion.span variants={wordVariants} className="inline-block mr-[0.26em]">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

