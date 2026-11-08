// src/components/ui/GlassBadge.jsx
// Symmetrical, consistently-sized glassmorphism badge with dynamic ambient glow and pulse dot.
// Applied uniformly across all section eyebrows and small title texts.

import React from 'react';

export default function GlassBadge({
  children,
  icon = true,
  className = '',
  ...props
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider font-sans select-none
        bg-white/70 dark:bg-white/[0.06] backdrop-blur-md 
        text-[#0070AD] dark:text-[#38BDF8]
        border border-[#0070AD]/20 dark:border-white/15 
        shadow-[0_2px_10px_rgba(0,112,173,0.06),inset_0_1px_1px_rgba(255,255,255,0.7)] 
        dark:shadow-[0_2px_12px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.12)]
        hover:border-[#0070AD]/40 dark:hover:border-white/25
        hover:bg-white/85 dark:hover:bg-white/[0.1]
        hover:scale-[1.02] active:scale-[0.98]
        transition-all duration-300 group ${className}`}
      {...props}
    >
      {icon && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#0070AD] dark:bg-[#38BDF8] animate-pulse shrink-0" />
      )}
      <span>{children}</span>
    </div>
  );
}

