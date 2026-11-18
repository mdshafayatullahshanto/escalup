// src/components/ui/ScrollAnimations.jsx
// High-performance, accessible scroll animation system with Framer Motion:
// 1. BlurReveal: Smooth blur-in and upward glide for headings, paragraphs, and text blocks.
// 2. StaggerList & StaggerItem: Sequential, staggered reveal for cards, lists, and FAQs.
// 3. HighlightUnderline: Organic SVG brush stroke underline animation for key words in headlines.

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * BlurReveal: Smoothly blurs in and moves slightly upward as it enters the viewport.
 * Runs once upon entering the viewport.
 */
export function BlurReveal({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  duration = 0.6,
  yOffset = 20,
  blur = '6px',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  const MotionComponent = typeof Component === 'string' ? motion[Component] || motion.div : motion.div;

  return (
    <MotionComponent
      data-scroll-animated="true"
      initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})` }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * StaggerList: Container wrapper that staggers the reveal of its child StaggerItem elements.
 */
export function StaggerList({
  children,
  as: Component = 'div',
  className = '',
  staggerDelay = 0.08,
  delayChildren = 0.04,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  const MotionComponent = typeof Component === 'string' ? motion[Component] || motion.div : motion.div;

  return (
    <MotionComponent
      data-scroll-animated="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * StaggerItem: Individual item wrapper in a list, grid, or FAQ accordion.
 */
export function StaggerItem({
  children,
  as: Component = 'div',
  className = '',
  yOffset = 20,
  blur = '6px',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  const MotionComponent = typeof Component === 'string' ? motion[Component] || motion.div : motion.div;

  return (
    <MotionComponent
      data-scroll-animated="true"
      variants={{
        hidden: { opacity: 0, y: yOffset, filter: `blur(${blur})` },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * HighlightUnderline: Organic SVG brush stroke underline animation for key words in headlines.
 * Draws an organic, smooth highlighter brush stroke with signature blue-to-indigo gradient
 * (#0070AD -> #5846F6) from left to right on scroll, positioned safely below all letter descenders.
 */
export function HighlightUnderline({
  children,
  color,
  thickness = 3,
  delay = 0.25,
  duration = 0.65,
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
          className="absolute bottom-0 left-0 w-full h-[6px] sm:h-[8px] pointer-events-none overflow-visible -z-0 translate-y-1 sm:translate-y-1.5"
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
