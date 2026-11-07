// src/components/CareersBanner.jsx
// SECTION 2: Full-width black careers & partnership band.
// Light-weight headline with one semibold phrase, text, white pill button, large portrait on the right with name and title below it.
// Clean Inter-style sans typography, zero monospace, zero green, zero stray dots.

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import founderImg from '../assets/founder.png';
import Button from './ui/Button';
import Badge from './ui/Badge';

export default function CareersBanner({ onOpenCalendly }) {
  const handleConnectClick = () => {
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open('https://cal.com/escalup/book-a-call', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="w-full bg-[#000000] text-white py-20 sm:py-28 md:py-32 border-y border-white/10 font-sans relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5846F6]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left 7 cols: Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <Badge variant="navy" size="sm" className="bg-[#121926] text-[#A5B4FC] border border-white/10">
                Careers & Global Engineering Partnerships
              </Badge>
            </div>

            {/* Light-weight headline with ONE semibold phrase */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              Scale Your Project Team with{' '}
              <span className="font-semibold text-white">
                Dedicated Offshore Engineering Talent.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed font-normal">
              Whether you need overflow 3D parametric CAD modeling, MEP clash resolution, or full-time dedicated drafters for an upcoming release, escalup delivers production-ready engineering under strict mutual NDA.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              {/* White pill button */}
              <Button
                variant="white"
                size="lg"
                onClick={handleConnectClick}
                icon="arrow"
                className="shadow-xl px-8"
              >
                Schedule an Engineering Intro Call
              </Button>

              <div className="flex items-center gap-2 text-xs text-white/70">
                <ShieldCheck className="w-4 h-4 text-[#5846F6]" />
                <span>Client owns 100% of IP</span>
              </div>
            </div>
          </div>

          {/* Right 5 cols: Large portrait on the right with name and title below it */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-72 sm:w-84 lg:w-96">
              {/* Large Portrait */}
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0B0F14]">
                <img
                  src={founderImg}
                  alt="Md. Shafayatullah Shanto - Founder & Principal Engineer at escalup"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Name and Title BELOW the portrait */}
              <div className="pt-4 text-left">
                <h4 className="text-base font-medium text-white">
                  Md. Shafayatullah Shanto
                </h4>
                <p className="text-xs text-white/60 mt-0.5">
                  Founder & Lead Mechanical Engineer, escalup
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
