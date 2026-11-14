// src/components/IndustriesServicesLinks.jsx
// STEP 3 - Item 6: "Industries and Services" as a 4-column grid of underlined links.

import React from 'react';
import UnderlineLink from './ui/UnderlineLink';
import GlassBadge from './ui/GlassBadge';
import { BlurReveal, HighlightUnderline } from './ui/ScrollAnimations';

const DIRECTORY_COLUMNS = [
  {
    title: 'Mechanical & Production',
    links: [
      { label: '1. Mechanical Design & Product Development', to: '/services/mechanical-design-product-development' },
      { label: '2. CAD, Parametric Modeling & Simulation', to: '/services/cad-parametric-modeling-simulation' },
      { label: '3. Design for Manufacturing & Production Engineering', to: '/services/dfma-production-engineering' },
      { label: '4. Engineering Standards, GD&T & Quality', to: '/services/engineering-standards-gdt-quality' },
    ]
  },
  {
    title: 'Digital, PM & BIM',
    links: [
      { label: '5. PLM, Digital Engineering & Automation', to: '/services/plm-digital-engineering-automation' },
      { label: '6. Engineering Project Management & Offshore Support', to: '/services/project-management-offshore-support' },
      { label: '7. BIM & MEP Design Engineering', to: '/services/bim-mep-design-engineering' },
      { label: 'International Standards Summary', to: '/services/mechanical-design-product-development' },
    ]
  },
  {
    title: 'Methodology & Security',
    links: [
      { label: '9-Step Design Approach', href: '#process' },
      { label: 'Microsoft 365 Data Security', href: '#data-security' },
      { label: 'Mutual NDA & Client IP Ownership', href: '#offshore-model' },
      { label: 'Client Environment Integration', href: '#data-security' },
    ]
  },
  {
    title: 'Offshore Engineering Support',
    links: [
      { label: 'Dedicated Engineering Desks', href: '#offshore-model' },
      { label: 'Project-Based & Overflow Support', href: '#offshore-model' },
      { label: 'Revision Handling & Support', href: '#offshore-model' },
      { label: 'Schedule an Engineering Intro Call', href: '#contact' },
    ]
  }
];

export default function IndustriesServicesLinks() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FFFFFF] dark:bg-[#0A0E13] border-b border-[#E2E6EE] dark:border-white/10 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <BlurReveal className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="mb-3.5 flex justify-center">
            <GlassBadge>Engineering Directory</GlassBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#111827] dark:text-white tracking-tight leading-tight mb-3">
            Industries and Services{' '}
            <HighlightUnderline color="#2E756E">
              <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
                Capability Matrix
              </span>
            </HighlightUnderline>
          </h2>
          <p className="text-sm sm:text-base text-[#5A6679] dark:text-[#9BA8BA] max-w-2xl mx-auto leading-relaxed font-normal">
            Explore dedicated offshore engineering teams across mechanical, MEP, and manufacturing disciplines.
          </p>
        </BlurReveal>

        {/* 4-Column Grid of Thin Underlined Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {DIRECTORY_COLUMNS.map((col, idx) => (
            <div key={idx} data-reveal-item="true" className="space-y-4">
              <h3 className="text-base font-bold text-[#111827] dark:text-white pb-3 border-b border-[#E2E6EE] dark:border-white/10 flex items-center justify-between">
                <span>{col.title}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070AD]" />
              </h3>

              <ul className="space-y-3">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <UnderlineLink
                      to={link.to}
                      href={link.href}
                      color="default"
                      icon="none"
                      className="text-xs sm:text-sm text-[#5A6679] dark:text-[#9BA8BA] hover:text-[#0070AD] dark:hover:text-[#38BDF8]"
                    >
                      {link.label}
                    </UnderlineLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

