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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 320 }}
        className="relative w-full max-w-2xl bg-white text-[#14201D] rounded-3xl shadow-2xl border border-[#DBE3E0] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#DBE3E0] bg-[#F8FAF9]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2E756E]/10 text-[#2E756E] flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#2E756E]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#14201D]">Schedule an Engineering Intro Call</h3>
              <p className="text-xs text-[#5A6A65]">30 minutes with our Principal Engineering Lead</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#889893] hover:text-[#14201D] hover:bg-[#F4F6F5] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-[#DBE3E0]">
              <span className="font-semibold text-[#14201D] block mb-1">Time-Zone Aligned</span>
              <span className="text-[#5A6A65]">Slots adapted to international client time zones</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-[#DBE3E0]">
              <span className="font-semibold text-[#14201D] block mb-1">Confidential & Direct</span>
              <span className="text-[#5A6A65]">Discuss specs under strict NDA protection</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-[#DBE3E0]">
              <span className="font-semibold text-[#14201D] block mb-1">Zero Sales Pressure</span>
              <span className="text-[#5A6A65]">Direct technical feasibility & quote scope review</span>
            </div>
          </div>

          {/* Calendly placeholder / embed frame */}
          <div className="border border-[#DBE3E0] rounded-2xl p-6 bg-[#F8FAF9] text-center">
            <div className="w-12 h-12 rounded-full bg-[#2E756E]/10 text-[#2E756E] mx-auto flex items-center justify-center mb-3">
              <Clock className="w-6 h-6 text-[#2E756E]" />
            </div>
            <h4 className="font-bold text-[#14201D] text-base mb-1">Pick a Convenient Time (Cal.com)</h4>
            <p className="text-xs text-[#5A6A65] max-w-md mx-auto mb-5">
              Select an available slot matching your regional time zone (London, New York, Dubai, Sydney, or Dhaka).
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleOpenExternal}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Open Booking Calendar</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </button>
              <a
                href={`mailto:${companyData.contact.email}?subject=Intro%20Call%20Request%20-%20escalup`}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-white border border-[#DBE3E0] hover:border-[#2E756E] text-[#14201D] font-semibold text-sm transition-colors text-center"
              >
                Or Request via Email
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#5A6A65] justify-center">
            <ShieldCheck className="w-4 h-4 text-[#2E756E]" />
            <span>Need an NDA before discussing project files? We will sign and countersign in under 2 hours.</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
