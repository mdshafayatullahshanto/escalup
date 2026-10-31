// /src/components/StatsStrip.jsx
// Consilio-style animated key metrics with clean counters and precision typography
// Exact color combination from reference screenshot (white background, teal numbers, bold dark labels)

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
      whileHover={{ y: -2 }}
      className="text-left px-4 sm:px-6 py-4 transition-all cursor-default"
    >
      <div className="flex items-baseline gap-1 font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2E756E] font-mono tracking-tight">
        <span>{displayCount}</span>
        <span>{item.suffix}</span>
      </div>
      <div className="text-sm lg:text-base font-bold text-[#14201D] mt-1.5">{item.label}</div>
      <div className="text-xs text-[#5A6A65] mt-0.5">{item.sublabel}</div>
    </motion.div>
  );
}

export default function StatsStrip() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-40px' });

  return (
    <section ref={containerRef} className="py-10 md:py-14 bg-white border-y border-[#DBE3E0] relative">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-x divide-[#DBE3E0]/70">
          {statsData.map((item) => (
            <CounterItem key={item.id} item={item} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
