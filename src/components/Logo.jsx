// /src/components/Logo.jsx
// escalup official brand logo component (do not redraw or alter logo geometry)
// The brand name is always written in lowercase: "escalup"
// Clicking the logo navigates to homepage and scrolls to the top smoothly

import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ 
  variant = 'default', 
  size = 'md', 
  link = true, 
  className = '',
  onClick 
}) {
  // Size presets
  const sizeMap = {
    sm: { icon: 'w-6 h-6', text: 'text-lg', dot: 'w-1.5 h-1.5' },
    md: { icon: 'w-8 h-8', text: 'text-xl', dot: 'w-2 h-2' },
    lg: { icon: 'w-10 h-10', text: 'text-2xl', dot: 'w-2.5 h-2.5' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const isDarkVariant = variant === 'dark'; // for dark background (e.g. footer)

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

  const content = (
    <div className={`inline-flex items-center gap-2.5 select-none font-sans group cursor-pointer ${className}`}>
      {/* Official Symbol using the attached SVG */}
      <div className={`relative ${currentSize.icon} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <img
          src={isDarkVariant ? '/e-logo-white.svg' : '/e-logo-2e756e.svg'}
          alt="escalup logo"
          className="w-full h-full object-contain pointer-events-none"
          onError={(e) => {
            // Fallback to inline SVG if image file fails to load
            e.target.style.display = 'none';
            if (e.target.nextSibling) {
              e.target.nextSibling.style.display = 'block';
            }
          }}
        />
        {/* Inline SVG Fallback matching exact geometry of e-logo-2e756e.svg */}
        <svg
          viewBox="-151 -151 302 302"
          className="w-full h-full hidden pointer-events-none"
          fill={isDarkVariant ? '#FFFFFF' : '#2E756E'}
        >
          <g transform="rotate(-22)">
            <path d="M147.75 30.16 A150.80 150.80 0 1 0 120.64 90.48 L0 90.48 A90.48 90.48 0 1 1 85.31 -30.16 L0 -30.16 A30.16 30.16 0 0 0 0 30.16 Z" />
          </g>
        </svg>
      </div>

      {/* Brand Name: always lowercase "escalup" matching the logo teal color */}
      <span
        className={`font-bold tracking-tight lowercase ${currentSize.text} ${
          isDarkVariant ? 'text-white' : 'text-[#2E756E] dark:text-[#38B2A6]'
        } transition-colors`}
      >
        escalup
      </span>
    </div>
  );

  if (link) {
    return (
      <Link
        to="/"
        onClick={handleClick}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E756E] rounded-md transition-opacity cursor-pointer inline-block"
        aria-label="escalup home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
