// src/components/ui/Badge.jsx
// Reusable Infosys-style badge: small dark-navy rounded tags with high contrast.

import React from 'react';

export default function Badge({
  children,
  variant = 'navy', // 'navy' (Infosys default), 'blue', 'violet', 'teal', 'outline', 'light'
  size = 'sm',      // 'xs', 'sm', 'md'
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-wide transition-colors select-none';

  const sizeStyles = {
    xs: 'text-[10px] px-2.5 py-0.5 gap-1',
    sm: 'text-xs px-3 py-1 gap-1.5',
    md: 'text-sm px-4 py-1.5 gap-2',
  };

  const variantStyles = {
    // Dynamic Glassmorphism
    glass: 'bg-white/70 dark:bg-white/[0.06] backdrop-blur-md text-[#0070AD] dark:text-[#38BDF8] border border-[#0070AD]/20 dark:border-white/15 shadow-[0_2px_10px_rgba(0,112,173,0.06),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.12)]',
    // Infosys signature dark-navy badge
    navy: 'bg-[#0B1528] text-white shadow-xs',
    // Corporate Blue
    blue: 'bg-[#0070AD]/10 text-[#0070AD] border border-[#0070AD]/25 dark:bg-[#0070AD]/20 dark:text-[#38BDF8]',
    // Violet
    violet: 'bg-[#5846F6]/10 text-[#5846F6] border border-[#5846F6]/25 dark:bg-[#5846F6]/20 dark:text-[#A78BFA]',
    // Indigo accent
    indigo: 'bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/25 dark:bg-[#4F46E5]/20 dark:text-[#818CF8]',
    // Light subtle
    light: 'bg-white/80 dark:bg-white/10 text-[#111827] dark:text-white border border-[#E5E7EB] dark:border-white/15',
    // Outline
    outline: 'bg-transparent text-current border border-current opacity-85',
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.sm} ${variantStyles[variant] || variantStyles.navy} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

