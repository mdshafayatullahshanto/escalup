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
    <Component data-reveal-item="true" className={className} {...props}>
      {children}
    </Component>
  );
}

/**
 * Highlighter underline animation on key words in headlines.
 * Draws an organic, smooth highlighter brush stroke with signature blue-to-indigo gradient
 * (#0070AD -> #5846F6) from left to right on scroll, positioned safely below all letter descenders.
 */
export function HighlightUnderline({
  children,
  color,
  thickness = 3,
  delay = 0.2,
  duration = 0.6,
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();
  const reactId = React.useId();
  const gradientId = `underline-grad-${reactId.replace(/:/g, '')}`;

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10 inline-block pb-1 sm:pb-1.5">{children}</span>
      {!shouldReduceMotion && (
        <motion.svg
          className="absolute bottom-0 left-0 w-full h-[5px] sm:h-[7px] pointer-events-none overflow-visible -z-0 translate-y-1 sm:translate-y-1.5"
          viewBox="0 0 100 8"
          fill="none"
          preserveAspectRatio="none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0070AD" />
              <stop offset="100%" stopColor="#5846F6" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 1 4 Q 40 6.5, 70 4.5 T 99 5"
            stroke={color || `url(#${gradientId})`}
            strokeWidth={thickness}
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 0.95,
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
