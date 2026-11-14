// src/components/ui/ScrollAnimations.jsx
// Lightweight, performant scroll-triggered text animations using existing framer-motion:
// 1. BlurReveal: smooth blur-in reveal for headings, paragraphs, and subtitles.
// 2. StaggerList & StaggerItem: staggered reveal for lists, cards, and directory columns.
// 3. HighlightUnderline: dynamic highlighter stroke underline animation for key words.

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Blur-in reveal wrapper for headings, paragraphs, and text blocks.
 * Lightweight passthrough that lets the global scroll reveal engine animate
 * child text elements cleanly without conflicting parent-level blur/shift.
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
 * Container for staggered item reveals.
 */
export function StaggerList({
  children,
  as = 'div',
  staggerDelay = 0.08,
  delayChildren = 0.05,
  className = '',
  once = true,
  margin = '-40px',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      data-stagger-list="true"
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Individual staggered child item.
 */
export function StaggerItem({
  children,
  as = 'div',
  duration = 0.5,
  yOffset = 16,
  blurAmount = 4,
  className = '',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : yOffset,
      filter: shouldReduceMotion ? 'none' : `blur(${blurAmount}px)`,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Component
      variants={itemVariants}
      data-stagger-item="true"
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Highlighter underline animation on key words.
 * Draws an organic, smooth highlighter brush/underline stroke from left to right on scroll.
 */
export function HighlightUnderline({
  children,
  color = '#2E756E',
  thickness = 3.5,
  delay = 0.2,
  duration = 0.65,
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
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          />
        </motion.svg>
      )}
    </span>
  );
}


