// /src/components/StatsStrip.jsx
// Animated number counter stats strip reading from /src/data/stats.js

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
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (item.id || 1) * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      className="text-center sm:text-left px-4 py-3 sm:py-2 transition-all rounded-xl hover:bg-[#F4F6F5]/60 cursor-default border-l border-[#DBE3E0] dark:border-[#223249]"
    >
      <div className="flex items-baseline justify-center sm:justify-start gap-1 font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#14201D] font-mono tracking-tight">
        <span className="text-[#2E756E]">{displayCount}</span>
        <span className="text-[#2E756E]">{item.suffix}</span>
      </div>
      <div className="text-sm lg:text-base font-bold text-[#14201D] mt-1">{item.label}</div>
      <div className="text-xs lg:text-sm text-[#5A6A65]">{item.sublabel}</div>
    </motion.div>
  );
}

export default function StatsStrip() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-40px' });

  return (
    <div ref={containerRef} className="w-full bg-white dark:bg-[#0B111E] border-b border-[#DBE3E0] dark:border-[#223249] py-8 lg:py-10 shadow-soft relative z-20">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <CounterItem key={stat.id} item={stat} inView={isInView} />
          ))}
        </div>
      </div>
    </div>
  );
}
