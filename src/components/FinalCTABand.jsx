// /src/components/FinalCTABand.jsx
// Full-width accent-colored band driving decisive conversions before the contact form

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ShieldCheck, Clock } from 'lucide-react';
import { trackCallBooking } from '../utils/analytics';
import { companyData } from '../data/company';

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
    <section className="bg-[#2E756E] dark:bg-[#122A27] dark:border-y dark:border-[#223249] text-white py-16 md:py-20 relative overflow-hidden">
      {/* Decorative background geometry */}
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-white/5 blur-2xl pointer-events-none" />

      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
            <Clock className="w-3.5 h-3.5 text-emerald-300" />
            <span>Guaranteed Quote Within 24 Hours</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to extend your engineering team?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Eliminate project backlogs, scale CAD & MEP bandwidth instantly, and access skilled engineering talent under strict confidentiality.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              onClick={handleQuoteClick}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="final-cta-btn btn-primary-white w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#F4F6F5] text-[#142F2C] font-extrabold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span className="font-extrabold">Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-[#2E756E] group-hover:translate-x-1.5 transition-transform" />
            </motion.a>

            <motion.button
              onClick={handleBookCall}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>Book a Free Intro Call</span>
            </motion.button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              NDA Executed Prior to File Review
            </span>
            <span className="hidden sm:inline">·</span>
            <span>You retain 100% IP rights</span>
            <span className="hidden sm:inline">·</span>
            <span>Direct engineer-to-engineer coordination</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
