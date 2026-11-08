// src/components/AboutManifesto.jsx
// ABOUT ESCALUP
// Corporate engineering company overview, leadership profile, and scaling team capabilities.

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import founderImg from '../assets/founder.png';
import Button from './ui/Button';
import GlassBadge from './ui/GlassBadge';

export default function AboutManifesto({ onOpenCalendly }) {
  const handleBookCall = () => {
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open('https://cal.com/escalup/book-a-call', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 md:py-32 bg-[#F6F7FB] dark:bg-[#080C0F] text-[#111827] dark:text-white border-b border-[#E2E6EE] dark:border-white/10 relative overflow-hidden scroll-mt-12 transition-colors">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Top Header Block */}
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-18">
          <div className="mb-6">
            <GlassBadge>About Escalup</GlassBadge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] dark:text-white tracking-tight leading-tight mb-8">
            Offshore Engineering Services for{' '}
            <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
              Global Innovators
            </span>
          </h2>
        </div>

        {/* Main Narrative Block */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-stretch mb-16 sm:mb-20">
          
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#475569] dark:text-[#9BA8BA] leading-relaxed flex flex-col justify-center">
            <p className="text-base sm:text-lg text-[#111827] dark:text-white font-normal leading-relaxed">
              Escalup is an offshore engineering services company. We provide Mechanical Design, BIM and MEP Design support to international clients, including technology-focused and AI-driven companies.
            </p>
            <p>
              The company is led by <em><strong>Md. Shafayat Ullah Shanto</strong></em>, a mechanical engineer with a background in mechanical design, industrial product development, CAD modeling, engineering documentation, PLM and MEP engineering, including HVAC, fire protection and plumbing systems.
            </p>
            <p>
              We deliver precise, standards-compliant work across multidisciplinary projects. Our files are native parametric CAD models in your corporate drawing format, ready for use in your workflow. We also work with digital engineering, AI-assisted workflows, engineering automation and data-driven design to support better decisions and faster product development.
            </p>
          </div>

          {/* Founder Card: Matching height with narrative block, large prominent portrait */}
          <div className="lg:col-span-5 flex flex-col">
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
          </div>

        </div>

        {/* Scaling Your Project Team Block */}
        <div className="rounded-3xl bg-white dark:bg-[#11161B] p-8 sm:p-12 border border-[#E2E6EE] dark:border-white/10 shadow-card">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="mb-2">
                <GlassBadge>Team Extension</GlassBadge>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-[#111827] dark:text-white tracking-tight">
                Scaling Your Project Team
              </h3>
              <p className="text-sm sm:text-base text-[#475569] dark:text-[#9BA8BA] leading-relaxed">
                When your workload grows, Escalup adds engineering capacity to your team. This can be overflow 3D parametric CAD modeling, MEP clash resolution, or dedicated mechanical and MEP specialists for an upcoming release. Our engineers join your standups, work to your drawing standards, and follow the same Design Approach on every project. Team size and engagement terms are agreed per project.
              </p>
              <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#111827] dark:text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0" />
                  <span>Work is carried out under a mutual NDA. The client owns all project IP.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0" />
                  <span>Data security is a strict requirement for us. We handle project data in a Microsoft 365 environment and adapt to the client's software and environment when needed.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <Button
                variant="primary"
                size="lg"
                onClick={handleBookCall}
                icon="arrow"
                className="shadow-md px-7"
              >
                Schedule an Engineering Intro Call
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
