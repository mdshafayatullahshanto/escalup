// src/components/AboutManifesto.jsx
// ABOUT ESCALUP
// Corporate engineering company overview and leadership profile.

import React from 'react';
import { LinkedInIcon } from './Icons';
import founderImg from '../assets/founder.png';
import GlassBadge from './ui/GlassBadge';
import { BlurReveal, HighlightUnderline } from './ui/ScrollAnimations';

export default function AboutManifesto({ onOpenCalendly: _onOpenCalendly }) {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#F6F7FB] dark:bg-[#080C0F] text-[#111827] dark:text-white border-b border-[#E2E6EE] dark:border-white/10 relative overflow-hidden scroll-mt-12 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Block */}
        <BlurReveal className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="mb-3.5">
            <GlassBadge>About Escalup</GlassBadge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
            Offshore Engineering Services for{' '}
            <HighlightUnderline color="#2E756E">
              <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
                Global Innovators
              </span>
            </HighlightUnderline>
          </h2>
        </BlurReveal>

        {/* Main Narrative Block */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          
          {/* Narrative Paragraphs */}
          <BlurReveal delay={0.1} className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#475569] dark:text-[#9BA8BA] leading-relaxed flex flex-col justify-center font-normal">
            <p className="text-base sm:text-lg text-[#111827] dark:text-white font-normal leading-relaxed">
              <strong className="text-[#2E756E] font-semibold">Escalup</strong> is an offshore engineering services company. We provide Mechanical Design, BIM and MEP Design support to international clients, including technology-focused and AI-driven companies.
            </p>
            <p>
              The company is led by <em><strong>Md. Shafayat Ullah Shanto</strong></em>, a mechanical engineer with a background in mechanical design, industrial product development, CAD modeling, engineering documentation, PLM and MEP engineering, including HVAC, fire protection and plumbing systems.
            </p>
            <p>
              We deliver precise, standards-compliant work across multidisciplinary projects. Our files are native parametric CAD models in your corporate drawing format, ready for use in your workflow. We also work with digital engineering, AI-assisted workflows, engineering automation and data-driven design to support better decisions and faster product development.
            </p>
          </BlurReveal>

          {/* Founder Card: Matching height with narrative block, large prominent portrait */}
          <BlurReveal delay={0.2} className="lg:col-span-5 flex flex-col">
            <div className="w-full h-full bg-white dark:bg-[#11161B] rounded-3xl p-6 sm:p-7 lg:p-6 xl:p-8 border border-[#E2E6EE] dark:border-white/10 shadow-card flex flex-col sm:flex-row items-center sm:items-stretch gap-5 sm:gap-6 text-center sm:text-left">
              <div className="w-40 sm:w-44 md:w-48 lg:w-40 xl:w-48 self-stretch shrink-0 rounded-2xl overflow-hidden shadow-xs border border-[#E2E6EE] dark:border-white/10 bg-[#EEF2F8] dark:bg-[#151D26] relative min-h-[200px]">
                <img
                  src={founderImg}
                  alt="Md. Shafayat Ullah Shanto - Founder & Lead Mechanical Engineer at Escalup"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-2">
                <h4 className="text-lg sm:text-xl font-medium text-[#111827] dark:text-white tracking-tight">
                  <em><strong>Md. Shafayat Ullah Shanto</strong></em>
                </h4>
                <p className="text-xs sm:text-sm text-[#0070AD] dark:text-[#38BDF8] font-medium">
                  Founder & Lead Mechanical Engineer, Escalup
                </p>
                <p className="text-xs sm:text-sm text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed pt-0.5">
                  Mechanical design, NPI, PLM governance, and MEP systems engineering.
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.linkedin.com/in/md-shafayat-ullah-shanto-262456209/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#5846F6] hover:underline"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </BlurReveal>

        </div>

      </div>
    </section>
  );
}
