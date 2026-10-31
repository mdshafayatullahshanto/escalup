// /src/components/StatsStrip.jsx
// Consilio-style animated key metrics with clean counters and precision typography
// Modern black-and-white theme

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statsData } from '../data/stats';

function CounterItem({ item, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = item.value;
    const duration = 1800; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const stepIncrement = end / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, item.value]);

  const displayCount = item.value % 1 !== 0 
    ? count.toFixed(1) 
    : Math.floor(count);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (item.id || 1) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="text-center sm:text-left px-5 py-4 transition-all rounded-2xl bg-[#121214] hover:bg-[#18181B] cursor-default border border-white/10 shadow-xs hover:border-white/25"
    >
      <div className="flex items-baseline justify-center sm:justify-start gap-1 font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white font-mono tracking-tight">
        <span>{displayCount}</span>
        <span className="text-white/80">{item.suffix}</span>
      </div>
      <div className="text-sm lg:text-base font-bold text-white mt-1.5">{item.label}</div>
      <div className="text-xs text-[#A1A1AA] mt-0.5">{item.sublabel}</div>
    </motion.div>
  );
}

export default function StatsStrip() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-40px' });

  return (
    <section ref={containerRef} className="py-14 md:py-20 bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((item) => (
            <CounterItem key={item.id} item={item} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
