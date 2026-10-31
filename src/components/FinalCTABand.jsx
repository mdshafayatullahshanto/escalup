// /src/components/FinalCTABand.jsx
// Consilio-style signature conversion band: "Build with precision. Unlock engineering scale."
// Light Editorial Engineering Theme with Deep Forest Teal Band

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ShieldCheck, Clock, Star, Lock } from 'lucide-react';
import { trackCallBooking } from '../utils/analytics';
import { companyData } from '../data/company';
import Magnetic from './Magnetic';

export default function FinalCTABand({ onOpenCalendly }) {
  const handleQuoteClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCall = () => {
    trackCallBooking('final_cta_band');
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#142F2C] via-[#0E2421] to-[#081614] text-white py-20 md:py-28 relative overflow-hidden border-y border-[#2E756E]/30">
      {/* Decorative technical grid and glow */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E756E]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2E756E]/40 text-[#A0D4CE] border border-[#2E756E]/50">
            <Clock className="w-3.5 h-3.5 text-[#A0D4CE]" />
            <span>Guaranteed Quote Within 24 Hours</span>
          </div>

          {/* Consilio-style Display Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Build with precision. <br className="hidden sm:inline" />
            <span className="text-[#A0D4CE]">Unlock engineering scale.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D4E2DE] max-w-2xl mx-auto leading-relaxed">
            Book a 30-minute discovery call or submit your CAD & MEP project brief for a guaranteed turnaround within 24 hours.
          </p>

          {/* Dual Action Buttons with Magnetic Hover */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Magnetic strength={0.18}>
              <a
                href="#contact"
                onClick={handleQuoteClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#F4F6F5] text-[#14201D] font-bold text-sm sm:text-base tracking-wide shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request a Detailed Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#14201D] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic strength={0.15}>
              <button
                onClick={handleBookCall}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#2E756E]/30 hover:bg-[#2E756E]/50 text-white border border-[#2E756E]/50 hover:border-[#A0D4CE] font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#A0D4CE]" />
                <span>Book 30-Min Intro Call</span>
              </button>
            </Magnetic>
          </div>

          {/* Trust Guarantees Row */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#D4E2DE]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#A0D4CE]" />
              <span>Non-Disclosure Agreement signed before file upload</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#A0D4CE]" />
              <span>You retain 100% intellectual property ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#A0D4CE] fill-[#A0D4CE]" />
              <span>4.9 / 5.0 Average Client Satisfaction</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
