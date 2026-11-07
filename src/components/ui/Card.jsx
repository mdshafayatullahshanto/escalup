// src/components/ui/Card.jsx
// Reusable Infosys-style card container with large rounded corners and soft layered shadows.

import React from 'react';

export default function Card({
  children,
  variant = 'white', // 'white', 'lavender', 'dark', 'glass', 'outline'
  radius = '2xl',     // 'xl', '2xl', '3xl'
  hover = true,
  className = '',
  onClick,
  ...props
}) {
  const baseStyles = 'relative transition-all duration-300';

  const radiusStyles = {
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl sm:rounded-3xl',
    '3xl': 'rounded-3xl sm:rounded-[36px]',
  };

  const variantStyles = {
    white: 'bg-white dark:bg-[#11161B] text-[#111827] dark:text-[#F3F5FA] border border-[#E5E9F0] dark:border-[#1E2833] shadow-card',
    lavender: 'bg-[#F2F5FA] dark:bg-[#151C24] text-[#111827] dark:text-[#F3F5FA] border border-[#E2E7F0] dark:border-[#1E2833]',
    dark: 'bg-[#0B0F14] text-white border border-white/10 shadow-2xl',
    glass: 'bg-white/10 dark:bg-black/30 backdrop-blur-md text-white border border-white/20',
    outline: 'bg-transparent text-inherit border border-[#E5E9F0] dark:border-white/15',
  };

  const hoverStyles = hover
    ? 'hover:-translate-y-1 hover:shadow-card-hover'
    : '';

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${radiusStyles[radius] || radiusStyles['2xl']} ${variantStyles[variant] || variantStyles.white} ${hoverStyles} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      {...props}
    >
      {children}
    </div>
  );
}
