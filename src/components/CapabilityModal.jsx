import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, FileText, Download, CheckCircle2, ArrowRight } from 'lucide-react';
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
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#DBE3E0] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#DBE3E0] bg-[#F4F6F5]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2E756E]/10 text-[#2E756E] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#14201D]">Capability Statement</h3>
              <p className="text-xs text-[#5A6A65]">Official escalup Engineering Dossier (PDF)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#5A6A65] hover:text-[#14201D] hover:bg-black/5 transition-colors"
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
                <h4 className="font-bold text-sm text-[#14201D]">Inside the Capability Statement:</h4>
                <ul className="text-xs text-[#5A6A65] space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E756E] shrink-0" />
                    <span>Complete Mechanical CAD, DFMA & MEP BIM capability matrix</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E756E] shrink-0" />
                    <span>Sample 2D manufacturing drawing standards & GD&T samples</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E756E] shrink-0" />
                    <span>Software versions, security protocols & engagement rate tiers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E756E] shrink-0" />
                    <span>Dhaka offshore infrastructure & engineering team credentials</span>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleDownload} className="space-y-3 pt-2">
                <div>
                  <label htmlFor="cap-email" className="block text-xs font-semibold text-[#14201D] mb-1">
                    Your Work Email (Optional)
                  </label>
                  <input
                    id="cap-email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DBE3E0] text-sm focus:outline-none focus:ring-2 focus:ring-[#2E756E] focus:border-transparent"
                  />
                  <span className="text-[11px] text-[#5A6A65] mt-1 block">
                    No spam ever. We only send relevant technical documentation.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#2E756E] hover:bg-[#255e58] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Capability Statement</span>
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-[#14201D]">Download Started!</h4>
              <p className="text-xs text-[#5A6A65] max-w-xs mx-auto">
                Your PDF is downloading. If it didn't start automatically,{' '}
                <a
                  href={companyData.contact.capabilityStatementPdf}
                  download
                  className="text-[#2E756E] underline font-semibold"
                >
                  click here to retry
                </a>.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl bg-[#F4F6F5] hover:bg-[#e6eeeb] text-[#14201D] font-semibold text-xs transition-colors"
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
