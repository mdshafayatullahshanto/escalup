// src/components/CuriousSection.jsx
// STEP 3 - Item 3: Centered heading with a gradient highlight word, short subtext, dark pill button ("I'm Curious").

import React from 'react';
import Button from './ui/Button';
import GlassBadge from './ui/GlassBadge';
import { HighlightUnderline } from './ui/ScrollAnimations';

export default function CuriousSection() {
  const handleCuriousClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-12 sm:pt-16 pb-8 sm:pb-10 bg-[#F6F7FB] dark:bg-[#080C0F] transition-colors">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Glassmorphism Eyebrow */}
        <div className="mb-3.5">
          <GlassBadge>The Engineering Edge</GlassBadge>
        </div>

        {/* Centered Heading with Gradient Highlight Word */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] dark:text-white tracking-tight leading-[1.16] mb-4 [text-wrap:balance]">
          Transforming engineering capacity with{' '}
          <HighlightUnderline color="#2E756E">
            <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
              intelligent CAD collaboration.
            </span>
          </HighlightUnderline>
        </h2>

        {/* Short Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-[#5A6679] dark:text-[#9BA8BA] max-w-2xl leading-relaxed mb-6 font-normal">
          Discover how equipment manufacturers and building consultancies scale their engineering teams without local payroll liability or quality trade-offs.
        </p>

        {/* Dark Pill Primary Button: "I'm Curious" */}
        <div>
          <Button
            variant="primary"
            size="md"
            onClick={handleCuriousClick}
            icon="arrow"
            className="shadow-md px-7 py-3 text-sm font-semibold"
          >
            I'm Curious
          </Button>
        </div>

      </div>
    </section>
  );
}
