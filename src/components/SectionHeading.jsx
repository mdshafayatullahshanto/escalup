// /src/components/SectionHeading.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`max-w-3xl mb-12 md:mb-16 ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 ${
          light 
            ? 'bg-white/10 text-white border border-white/20' 
            : 'bg-[#2E756E]/10 text-[#2E756E] border border-[#2E756E]/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          {eyebrow}
        </div>
      )}
      
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-[#14201D]'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          light ? 'text-white/80' : 'text-[#5A6A65]'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
