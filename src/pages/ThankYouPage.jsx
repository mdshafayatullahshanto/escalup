// /src/pages/ThankYouPage.jsx
// Conversion tracking thank you page with confetti celebration, confirmation SLA, and Calendly accelerator
// Light Editorial Engineering Theme with Deep Teal accents

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Mail, 
  FileCheck2, 
  ExternalLink 
} from 'lucide-react';
import { companyData } from '../data/company';
import { trackCallBooking } from '../utils/analytics';

export default function ThankYouPage({ onOpenCalendly }) {
  const [submissionInfo, setSubmissionInfo] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Quote Request Received | escalup';

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2E756E', '#14201D', '#5A6A65', '#DBE3E0']
      });
    } catch {
      // safe fallback
    }

    const stored = sessionStorage.getItem('escalup_last_quote');
    if (stored) {
      try {
        setSubmissionInfo(JSON.parse(stored));
      } catch {
        // ignore
      }
    }
  }, []);

  const handleBookCall = () => {
    trackCallBooking('thank_you_page_accelerator');
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-[85vh] bg-[#F8FAF9] py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center blueprint-grid">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 sm:p-12 border border-[#DBE3E0] shadow-soft text-center relative overflow-hidden">
        
        {/* Animated Check Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#2E756E]/10 text-[#2E756E] mx-auto flex items-center justify-center mb-6 shadow-xs animate-bounce">
          <CheckCircle2 className="w-9 h-9 text-[#2E756E]" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-[#2E756E] px-3.5 py-1.5 rounded-full bg-[#2E756E]/10 border border-[#2E756E]/20 inline-block mb-3 font-mono">
          Request Successfully Received
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#14201D] tracking-tight mb-4">
          Thank you for reaching out to escalup.
        </h1>

        <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#DBE3E0] text-[#14201D] font-bold text-sm sm:text-base flex items-center justify-center gap-2 mb-6 shadow-xs">
          <Clock className="w-5 h-5 text-[#2E756E]" />
          <span>We will reply with a detailed quote within 24 hours.</span>
        </div>

        <p className="text-xs sm:text-sm text-[#5A6A65] leading-relaxed mb-8 max-w-lg mx-auto">
          {submissionInfo?.name ? (
            <>Thank you, <strong className="text-[#14201D]">{submissionInfo.name}</strong> from <strong className="text-[#14201D]">{submissionInfo.company}</strong>. </>
          ) : null}
          Our lead engineering desk in Uttara, Dhaka is reviewing your technical requirements. We will prepare an itemized milestone estimate and drawing timeline.
        </p>

        {/* 3 Steps What Happens Next */}
        <div className="bg-[#F8FAF9] rounded-2xl p-6 border border-[#DBE3E0] text-left mb-8 space-y-3.5">
          <h4 className="text-xs font-bold text-[#14201D] uppercase tracking-wider font-mono">
            What Happens Next:
          </h4>
          <div className="space-y-2.5 text-xs text-[#5A6A65]">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#2E756E] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#14201D]">1. NDA Execution:</strong> We countersign your confidentiality agreement before examining proprietary CAD models or drawings.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <FileCheck2 className="w-4 h-4 text-[#2E756E] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#14201D]">2. Technical Review:</strong> Our senior mechanical and MEP engineers evaluate tolerances, drafting scope, and tooling feasibility.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#2E756E] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#14201D]">3. Fixed Quote & Milestones:</strong> You receive a clear, binding proposal with delivery dates and payment terms.
              </span>
            </div>
          </div>
        </div>

        {/* Accelerated Next Action: Book a Call on Cal.com */}
        <div className="p-6 rounded-2xl border-2 border-dashed border-[#2E756E]/40 bg-[#F8FAF9] mb-8">
          <h4 className="font-bold text-sm text-[#14201D] mb-1">
            Want to accelerate your kickoff?
          </h4>
          <p className="text-xs text-[#5A6A65] mb-4">
            Skip the email delay and reserve 30 minutes with our Principal Engineer right away.
          </p>
          <button
            onClick={handleBookCall}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-xs shadow-sm transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Open Booking Calendar (Cal.com)</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

        {/* Return Links */}
        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#889893]">
          <Link to="/" className="text-[#2E756E] hover:underline flex items-center gap-1">
            <span>← Return to Home</span>
          </Link>
          <span>·</span>
          <Link to="/#services" className="hover:text-[#14201D] transition-colors">
            Explore All Services
          </Link>
          <span>·</span>
          <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#14201D] transition-colors">
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
}
