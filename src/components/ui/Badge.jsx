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
    // Infosys signature dark-navy badge
    navy: 'bg-[#0B1528] text-white shadow-xs',
    // Corporate Blue
    blue: 'bg-[#0070AD]/10 text-[#0070AD] border border-[#0070AD]/25 dark:bg-[#0070AD]/20 dark:text-[#38BDF8]',
    // Violet
    violet: 'bg-[#5846F6]/10 text-[#5846F6] border border-[#5846F6]/25 dark:bg-[#5846F6]/20 dark:text-[#A78BFA]',
    // Engineering Teal
    teal: 'bg-[#2E756E]/15 text-[#2E756E] border border-[#2E756E]/25 dark:bg-[#14F3C1]/15 dark:text-[#14F3C1]',
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
