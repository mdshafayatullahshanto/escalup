// /src/components/SectionHeading.jsx
// Clean, semantic section headings with consistent typography across the site
// Automatically animated in top-to-bottom order by the global scroll reveal engine.

import React from 'react';
import GlassBadge from './ui/GlassBadge';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div className="mb-3.5">
          <GlassBadge>{eyebrow}</GlassBadge>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#111827] dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5A6A65] dark:text-[#8FA89F]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
