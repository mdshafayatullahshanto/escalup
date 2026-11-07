// src/components/ui/Button.jsx
// Reusable Infosys-style pill button with arrow nudge interaction and elevation physics.

import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary', // 'primary' (dark pill), 'white' (white pill on dark), 'outline', 'ghost'
  size = 'md',         // 'sm', 'md', 'lg'
  icon = 'arrow',      // 'arrow' (right), 'external' (up-right), 'none'
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 sm:py-3 gap-2',
    lg: 'text-base px-8 py-3.5 sm:py-4 gap-2.5',
  };

  const variantStyles = {
    // Infosys signature dark pill
    primary: 'bg-[#111827] text-white hover:bg-black hover:shadow-card active:scale-[0.98] border border-transparent focus-visible:ring-[#111827]',
    // White pill on dark sections
    white: 'bg-white text-[#111827] hover:bg-[#F3F4F6] shadow-sm hover:shadow-md active:scale-[0.98] border border-transparent focus-visible:ring-white',
    // Outline pill
    outline: 'bg-transparent text-[#111827] dark:text-white border border-[#D1D5DB] dark:border-white/20 hover:border-[#111827] dark:hover:border-white hover:bg-[#F9FAFB] dark:hover:bg-white/10 active:scale-[0.98]',
    // Translucent glass pill (used in hero overlays)
    glass: 'bg-white/15 backdrop-blur-md text-white border border-white/25 hover:bg-white/25 shadow-sm active:scale-[0.98]',
    // Accent blue/violet pill
    accent: 'bg-gradient-to-r from-[#0070AD] to-[#5846F6] text-white hover:opacity-95 shadow-md active:scale-[0.98]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className} ${disabled ? 'opacity-50 pointer-events-none' : ''}`;

  const renderIcon = () => {
    if (icon === 'arrow') {
      return (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
      );
    }
    if (icon === 'external') {
      return (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
      );
    }
    return null;
  };

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClasses} {...props}>
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
