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
      { label: 'Mechanical Design & Product Development', to: '/services/mechanical-design-product-development' },
      { label: 'CAD, Parametric Modeling & Simulation', to: '/services/cad-parametric-modeling-simulation' },
      { label: 'Design for Manufacturing & Production Engineering', to: '/services/dfma-production-engineering' },
      { label: 'Engineering Standards, GD&T & Quality', to: '/services/engineering-standards-gdt-quality' },
    ]
  },
  {
    title: 'Digital, PM & BIM',
    links: [
      { label: 'PLM, Digital Engineering & Automation', to: '/services/plm-digital-engineering-automation' },
      { label: 'Engineering Project Management & Offshore Support', to: '/services/project-management-offshore-support' },
      { label: 'BIM & MEP Design Engineering', to: '/services/bim-mep-design-engineering' },
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
      { label: 'Schedule an Engineering Intro Call', href: 'https://cal.com/escalup/book-a-call?overlayCalendar=true', target: '_blank', rel: 'noopener noreferrer' },
    ]
  }
];

export default function IndustriesServicesLinks() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FFFFFF] dark:bg-[#0A0E13] border-b border-[#E2E6EE] dark:border-white/10 transition-colors">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        
        {/* Section Header */}
        <BlurReveal className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="mb-3.5 flex justify-center">
            <GlassBadge>Engineering Directory</GlassBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#111827] dark:text-white tracking-tight leading-tight mb-3">
            Industries and Services{' '}
            <HighlightUnderline>
              <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
                Capability Matrix
              </span>
            </HighlightUnderline>
          </h2>
          <p className="text-sm sm:text-base text-[#5A6679] dark:text-[#9BA8BA] max-w-2xl mx-auto leading-relaxed font-normal">
            Explore dedicated offshore engineering teams across mechanical, MEP, and manufacturing disciplines.
          </p>
        </BlurReveal>

        {/* 4-Column Layout without horizontal scrollbar - perfectly adjusted positions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:items-start gap-6 sm:gap-8 lg:gap-4 xl:gap-6 2xl:gap-8">
          {DIRECTORY_COLUMNS.map((col, idx) => (
            <div key={idx} data-reveal-item="true" className="space-y-3.5 sm:space-y-4 shrink-0">
              <h3 className="text-sm lg:text-[15px] xl:text-base font-bold text-[#111827] dark:text-white pb-3 border-b border-[#E2E6EE] dark:border-white/10 flex items-center justify-between gap-3 whitespace-nowrap">
                <span>{col.title}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070AD] shrink-0" />
              </h3>

              <ul className="space-y-2 sm:space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx} className="whitespace-nowrap">
                    <UnderlineLink
                      to={link.to}
                      href={link.href}
                      color="default"
                      icon="none"
                      className="text-xs lg:text-[13px] xl:text-[13.5px] 2xl:text-sm text-[#5A6679] dark:text-[#9BA8BA] hover:text-[#0070AD] dark:hover:text-[#38BDF8] whitespace-nowrap block py-0.5"
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

