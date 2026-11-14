// src/components/ui/ScrollAnimations.jsx
// Lightweight, accessible scroll animation helpers
// Integrates seamlessly with the single global scroll animation engine:
// 1. BlurReveal: Semantic passthrough wrapper for headings, paragraphs, and sections.
// 2. StaggerList & StaggerItem: Semantic passthrough wrappers for lists and grids.
// 3. HighlightUnderline: Organic SVG brush stroke underline animation for key words.

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Passthrough wrapper for headings, paragraphs, and text blocks.
 * Handled with unified timing, distance, and top-to-bottom staggering by the global engine.
 */
export function BlurReveal({
  children,
  as: Component = 'div',
  className = '',
  ...props
}) {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

/**
 * Container wrapper for lists and item groups.
 */
export function StaggerList({
  children,
  as: Component = 'div',
  className = '',
  ...props
}) {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

/**
 * Individual item wrapper in a list or grid.
 */
export function StaggerItem({
  children,
  as: Component = 'div',
  className = '',
  ...props
}) {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

/**
 * Highlighter underline animation on key words in headlines.
 * Draws an organic, smooth highlighter brush/underline stroke from left to right on scroll.
 */
export function HighlightUnderline({
  children,
  color = '#2E756E',
  thickness = 3.5,
  delay = 0.2,
  duration = 0.6,
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="relative z-10">{children}</span>
      {!shouldReduceMotion && (
        <motion.svg
          className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-[6px] sm:h-[8px] pointer-events-none overflow-visible -z-0"
          viewBox="0 0 100 8"
          fill="none"
          preserveAspectRatio="none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
        >
          <motion.path
            d="M 1 5 Q 35 1, 65 4.5 T 99 3.5"
            stroke={color}
            strokeWidth={thickness}
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 0.85,
                transition: {
                  duration,
                  delay,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          />
        </motion.svg>
      )}
    </span>
  );
}
