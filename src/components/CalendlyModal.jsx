import React from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/company';
import { trackCallBooking } from '../utils/analytics';

export default function CalendlyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleOpenExternal = () => {
    trackCallBooking('calendly_modal_external');
    window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 320 }}
        className="relative w-full max-w-2xl bg-[#121214] text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Schedule an Engineering Intro Call</h3>
              <p className="text-xs text-[#A1A1AA]">30 minutes with our Principal Engineering Lead</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-[#0A0A0A] border border-white/10">
              <span className="font-semibold text-white block mb-1">Time-Zone Aligned</span>
              <span className="text-[#A1A1AA]">Slots adapted to international client time zones</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0A0A0A] border border-white/10">
              <span className="font-semibold text-white block mb-1">Confidential & Direct</span>
              <span className="text-[#A1A1AA]">Discuss specs under strict NDA protection</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0A0A0A] border border-white/10">
              <span className="font-semibold text-white block mb-1">Zero Sales Pressure</span>
              <span className="text-[#A1A1AA]">Direct technical feasibility & quote scope review</span>
            </div>
          </div>

          {/* Calendly placeholder / embed frame */}
          <div className="border border-white/10 rounded-2xl p-6 bg-[#0A0A0A] text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 text-white mx-auto flex items-center justify-center mb-3">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-white text-base mb-1">Pick a Convenient Time (Cal.com)</h4>
            <p className="text-xs text-[#A1A1AA] max-w-md mx-auto mb-5">
              Select an available slot matching your regional time zone (London, New York, Dubai, Sydney, or Dhaka).
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleOpenExternal}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Open Booking Calendar</span>
                <ExternalLink className="w-4 h-4 text-black" />
              </button>
              <a
                href={`mailto:${companyData.contact.email}?subject=Intro%20Call%20Request%20-%20escalup`}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/5 border border-white/15 hover:border-white text-white font-semibold text-sm transition-colors text-center"
              >
                Or Request via Email
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#A1A1AA] justify-center">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Need an NDA before discussing project files? We will sign and countersign in under 2 hours.</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
