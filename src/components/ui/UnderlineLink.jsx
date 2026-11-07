// src/components/ui/UnderlineLink.jsx
// Reusable Infosys-style thin underline link that animates smoothly from left to right on hover.

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function UnderlineLink({
  children,
  href,
  to,
  icon = 'none', // 'arrow', 'external', 'none'
  className = '',
  color = 'default', // 'default', 'blue', 'white'
  onClick,
  ...props
}) {
  const colorStyles = {
    default: 'text-[#111827] dark:text-white',
    blue: 'text-[#0070AD] dark:text-[#38BDF8]',
    white: 'text-white',
    muted: 'text-[#5A6679] hover:text-[#111827] dark:text-[#9BA8BA] dark:hover:text-white',
  };

  const lineColors = {
    default: 'bg-[#111827] dark:bg-white',
    blue: 'bg-[#0070AD]',
    white: 'bg-white',
    muted: 'bg-[#111827] dark:bg-white',
  };

  const content = (
    <span className={`inline-flex items-center gap-1.5 font-medium group cursor-pointer relative py-0.5 ${colorStyles[color] || colorStyles.default} ${className}`}>
      <span className="relative">
        {children}
        <span
          className={`absolute bottom-0 left-0 w-full h-[1px] ${lineColors[color] || lineColors.default} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
        />
      </span>
      {icon === 'arrow' && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
      )}
      {icon === 'external' && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
      )}
    </span>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href || '#'} onClick={onClick} {...props}>
      {content}
    </a>
  );
}
