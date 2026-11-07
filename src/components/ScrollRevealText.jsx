// src/components/ScrollRevealText.jsx
// STEP 4: Scroll-reveal text block: large words go from light grey to dark as the user scrolls ("Our Purpose" style).

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ['#9BA8BA', '#111827']);

  return (
    <span className="relative inline-block mr-2 sm:mr-3.5 my-1">
      <motion.span style={{ opacity, color }} className="transition-colors">
        {children}
      </motion.span>
    </span>
  );
}

export default function ScrollRevealText({
  tag = 'Our Engineering Purpose',
  text = 'We bring people and engineering together to build things better. Providing global manufacturing leaders and building consultancies with agile, high-precision offshore CAD, MEP, and BIM capacity without quality compromise or overhead liabilities.',
  className = '',
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.45'],
  });

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={`py-16 sm:py-24 max-w-5xl mx-auto px-4 text-center ${className}`}>
      <div className="text-xs font-semibold uppercase tracking-widest text-[#0070AD] dark:text-[#A5B4FC] mb-6 font-sans">
        {tag}
      </div>

      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.3] text-[#9BA8BA]">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

