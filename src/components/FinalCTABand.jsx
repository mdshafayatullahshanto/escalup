// /src/components/FinalCTABand.jsx
// Consilio-style signature conversion band: "Build with precision. Unlock engineering scale."

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
      <div className="absolute inset-0 blueprint-grid opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#14F3C1]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#14F3C1] border border-[#14F3C1]/30">
            <Clock className="w-3.5 h-3.5 text-[#14F3C1]" />
            <span>Guaranteed Quote Within 24 Hours</span>
          </div>

          {/* Consilio-style Display Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Build with precision. <br className="hidden sm:inline" />
            Unlock engineering scale.
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Book a 30-minute discovery call or submit your CAD & MEP project brief for a guaranteed turnaround within 24 hours.
          </p>

          {/* Dual Action Buttons with Magnetic Hover */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Magnetic strength={0.2}>
              <motion.a
                href="#contact"
                onClick={handleQuoteClick}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="final-cta-btn btn-primary-white w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#F0F6F5] text-[#142F2C] font-extrabold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span className="font-extrabold text-[#142F2C]">Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-[#2E756E] group-hover:translate-x-1.5 transition-transform" />
              </motion.a>
            </Magnetic>

            <Magnetic strength={0.18}>
              <motion.button
                onClick={handleBookCall}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/25 hover:border-white font-bold text-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-xs"
              >
                <Calendar className="w-4 h-4 text-[#14F3C1]" />
                <span>Book 30-Min Intro Call</span>
              </motion.button>
            </Magnetic>
          </div>

          {/* Consilio-style Trust & Rating Footer */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/75 border-t border-white/15 mt-8">
            <span className="flex items-center gap-1.5 font-medium">
              <Star className="w-3.5 h-3.5 fill-[#14F3C1] text-[#14F3C1]" />
              <span>4.9 / 5.0 Rating from International Clients</span>
            </span>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Lock className="w-3.5 h-3.5 text-[#14F3C1]" />
              <span>Strict NDA Signed Before Kickoff</span>
            </span>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#14F3C1]" />
              <span>100% IP & Source File Ownership</span>
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
