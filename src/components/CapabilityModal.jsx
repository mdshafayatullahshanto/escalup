import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, FileText, Download, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/company';
import { trackCapabilityDownload } from '../utils/analytics';

export default function CapabilityModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e) => {
    e.preventDefault();
    trackCapabilityDownload();
    setSubmitted(true);

    // Create a temporary link to download capability PDF
    const link = document.createElement('a');
    link.href = companyData.contact.capabilityStatementPdf;
    link.download = 'escalup-offshore-engineering-capability-statement.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        className="relative w-full max-w-lg bg-[#001517] text-white rounded-3xl shadow-2xl border border-white/[0.08] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/[0.08] bg-[#000D0E]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#14F3C1]/10 text-[#14F3C1] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Capability Statement</h3>
              <p className="text-xs text-white/60">Official escalup Engineering Dossier (PDF)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {!submitted ? (
            <>
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-white">Inside the Capability Statement:</h4>
                <ul className="text-xs text-white/70 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14F3C1] shrink-0" />
                    <span>Complete Mechanical CAD, DFMA & MEP BIM capability matrix</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14F3C1] shrink-0" />
                    <span>Sample 2D manufacturing drawing standards & GD&T samples</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14F3C1] shrink-0" />
                    <span>Software versions, security protocols & engagement rate tiers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14F3C1] shrink-0" />
                    <span>Dhaka offshore infrastructure & engineering team credentials</span>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleDownload} className="space-y-3 pt-2">
                <div>
                  <label htmlFor="cap-email" className="block text-xs font-semibold text-white/90 mb-1">
                    Your Work Email (Optional)
                  </label>
                  <input
                    id="cap-email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-[#000D0E] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-[#14F3C1] focus:border-[#14F3C1]"
                  />
                  <span className="text-[11px] text-white/50 mt-1 block">
                    No spam ever. We only send relevant technical documentation.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#14F3C1] hover:bg-[#34F8CE] text-[#000D0E] font-bold text-sm shadow-[0_0_20px_rgba(20,243,193,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#000D0E]" />
                  <span>Download PDF Capability Statement</span>
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#14F3C1]/10 text-[#14F3C1] mx-auto flex items-center justify-center border border-[#14F3C1]/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-white">Download Started!</h4>
              <p className="text-xs text-white/70 max-w-xs mx-auto">
                Your PDF is downloading. If it didn't start automatically,{' '}
                <a
                  href={companyData.contact.capabilityStatementPdf}
                  download
                  className="text-[#14F3C1] underline font-semibold"
                >
                  click here to retry
                </a>.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/15 transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
