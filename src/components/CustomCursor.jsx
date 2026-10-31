// /src/components/CustomCursor.jsx
// Smooth, premium dual-layer custom cursor with magnetic & hover reaction states.
// Automatically disabled on touch / tablet / mobile devices and when reduced motion is preferred.

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return hasFinePointer && !prefersReducedMotion;
  });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [visible, setVisible] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer trailing ring
  const ringSpringConfig = { damping: 26, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, ringSpringConfig);
  const smoothY = useSpring(mouseY, ringSpringConfig);

  // Snappier spring for center dot
  const dotSpringConfig = { damping: 35, stiffness: 600, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    // Dynamic hover detection for interactive elements
    const handleElementHover = (e) => {
      const target = e.target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover, .magnetic-btn');
      if (target) {
        setHovered(true);
        const customText = target.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
        }
      } else {
        setHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [enabled, mouseX, mouseY, visible]);

  if (!enabled) return null;

  return (
    <>
      {/* Outer Smooth Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-opacity duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: hovered ? (cursorText ? 64 : 46) : 32,
          height: hovered ? (cursorText ? 64 : 46) : 32,
          backgroundColor: hovered
            ? 'rgba(20, 243, 193, 0.12)'
            : 'rgba(20, 243, 193, 0.04)',
          borderColor: hovered
            ? 'rgba(20, 243, 193, 0.85)'
            : 'rgba(20, 243, 193, 0.35)',
          borderWidth: hovered ? '1.5px' : '1px',
          scale: clicked ? 0.88 : 1,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 300 }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-white select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Precision Tracking Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#14F3C1] shadow-[0_0_10px_rgba(20,243,193,0.6)] transition-opacity duration-200"
        style={{
          x: dotX,
          y: dotY,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: hovered ? (cursorText ? 0 : 5) : 7,
          height: hovered ? (cursorText ? 0 : 5) : 7,
          scale: clicked ? 0.6 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 450 }}
      />
    </>
  );
}
