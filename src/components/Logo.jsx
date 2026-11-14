// /src/components/Logo.jsx
// escalup official combined brand logo component
// Uses signature blue-to-indigo gradient (#0070AD -> #5846F6) for company name and logo mark.
// Clicking navigates to homepage and scrolls to the top smoothly.

import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ 
  variant = 'gradient', // 'gradient' (#0070AD -> #5846F6, default) | 'white' (for dark contrast) | 'auto'
  size = 'md', 
  link = true, 
  className = '',
  onClick 
}) {
  // Height sizing presets; width auto maintains the natural ~3.74:1 aspect ratio
  const sizeMap = {
    xs: 'h-5',
    sm: 'h-6 sm:h-7',
    md: 'h-7 sm:h-8',
    lg: 'h-9 sm:h-10',
    xl: 'h-11 sm:h-12',
  };

  const currentHeight = sizeMap[size] || sizeMap.md;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }

    if (window.location.pathname === '/') {
      e.preventDefault();
      if (window.location.hash) {
        window.history.pushState(null, '', '/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  let imageElement;

  if (variant === 'dark' || variant === 'white') {
    // For high-contrast dark background when explicitly requested
    imageElement = (
      <img
        src="/escalup-logo-white.png"
        alt="escalup"
        className={`${currentHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105 pointer-events-none select-none`}
        loading="eager"
      />
    );
  } else {
    // Default: Signature Brand Gradient (#0070AD to #5846F6)
    imageElement = (
      <img
        src="/escalup-logo-gradient.png"
        alt="escalup"
        className={`${currentHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105 pointer-events-none select-none`}
        loading="eager"
      />
    );
  }

  const content = (
    <div className={`inline-flex items-center group cursor-pointer ${className}`}>
      {imageElement}
    </div>
  );

  if (link) {
    return (
      <Link
        to="/"
        onClick={handleClick}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0070AD] rounded-md transition-opacity cursor-pointer inline-flex items-center shrink-0"
        aria-label="escalup home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
