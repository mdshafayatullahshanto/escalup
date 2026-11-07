// src/components/CareersBanner.jsx
// STEP 3 - Item 8: Black careers & partnership banner
// Heading, text, white pill button, photo on the right.

import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import founderImg from '../assets/founder.png';
import Button from './ui/Button';

export default function CareersBanner({ onOpenCalendly }) {
  const handleConnectClick = () => {
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open('https://cal.com/escalup/book-a-call', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F6F7FB] dark:bg-[#080C0F] transition-colors">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Black Container Banner (rounded-3xl, black bg, white text) */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-[#000000] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/10">
          {/* Subtle blueprint grid and ambient radial light */}
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] bg-[#0070AD]/20 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 cols: Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-[#14F3C1] border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Careers & Global Engineering Partnerships</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                Scale Your Project Team with{' '}
                <span className="font-semibold text-white">
                  Dedicated Offshore Engineering Talent.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                Whether you need overflow 3D parametric CAD modeling, MEP clash resolution, or full-time dedicated drafters for an upcoming release, escalup delivers production-ready engineering under strict mutual NDA.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* White pill button */}
                <Button
                  variant="white"
                  size="lg"
                  onClick={handleConnectClick}
                  icon="arrow"
                  className="shadow-xl"
                >
                  Schedule an Engineering Intro Call
                </Button>

                <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                  <ShieldCheck className="w-4 h-4 text-[#14F3C1]" />
                  <span>Client owns 100% of IP</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Photo on the right */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-t from-[#0B0F14] to-transparent">
                <img
                  src={founderImg}
                  alt="Md. Shafayatullah Shanto - Founder & Principal Engineer at escalup"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay Name Tag */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-xs text-left">
                  <div className="text-xs font-bold text-white">
                    Md. Shafayatullah Shanto
                  </div>
                  <div className="text-[11px] font-mono text-[#14F3C1]">
                    Founder & Lead Mechanical Engineer · escalup
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
