// /src/pages/ThankYouPage.jsx
// Conversion tracking thank you page with confetti celebration, confirmation SLA, and Calendly accelerator
// Modern black-and-white theme

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
        colors: ['#FFFFFF', '#D4D4D8', '#71717A', '#18181B']
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
    <div className="min-h-[85vh] bg-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center blueprint-grid">
      <div className="max-w-2xl w-full bg-[#121214] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl text-center relative overflow-hidden">
        
        {/* Animated Check Icon */}
        <div className="w-16 h-16 rounded-2xl bg-white/10 text-white mx-auto flex items-center justify-center mb-6 shadow-inner animate-bounce">
          <CheckCircle2 className="w-9 h-9 text-white" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-white px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 inline-block mb-3 font-mono">
          Request Successfully Received
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
          Thank you for reaching out to escalup.
        </h1>

        <div className="p-4 rounded-2xl bg-[#18181B] border border-white/20 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 mb-6 shadow-sm">
          <Clock className="w-5 h-5 text-white" />
          <span>We will reply with a detailed quote within 24 hours.</span>
        </div>

        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-8 max-w-lg mx-auto">
          {submissionInfo?.name ? (
            <>Thank you, <strong className="text-white">{submissionInfo.name}</strong> from <strong className="text-white">{submissionInfo.company}</strong>. </>
          ) : null}
          Our lead engineering desk in Uttara, Dhaka is reviewing your technical requirements. We will prepare an itemized milestone estimate and drawing timeline.
        </p>

        {/* 3 Steps What Happens Next */}
        <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-white/10 text-left mb-8 space-y-3.5">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
            What Happens Next:
          </h4>
          <div className="space-y-2.5 text-xs text-[#A1A1AA]">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">1. NDA Execution:</strong> We countersign your confidentiality agreement before examining proprietary CAD models or drawings.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <FileCheck2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">2. Technical Review:</strong> Our senior mechanical and MEP engineers evaluate tolerances, drafting scope, and tooling feasibility.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">3. Fixed Quote & Milestones:</strong> You receive a clear, binding proposal with delivery dates and payment terms.
              </span>
            </div>
          </div>
        </div>

        {/* Accelerated Next Action: Book a Call on Cal.com */}
        <div className="p-6 rounded-2xl border-2 border-dashed border-white/20 bg-[#18181B] mb-8">
          <h4 className="font-bold text-sm text-white mb-1">
            Want to accelerate your kickoff?
          </h4>
          <p className="text-xs text-[#A1A1AA] mb-4">
            Skip the email delay and reserve 30 minutes with our Principal Engineer right away.
          </p>
          <button
            onClick={handleBookCall}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-xs shadow-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>Open Booking Calendar (Cal.com)</span>
            <ExternalLink className="w-3.5 h-3.5 text-black" />
          </button>
        </div>

        {/* Return Links */}
        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#A1A1AA]">
          <Link to="/" className="text-white hover:underline flex items-center gap-1">
            <span>← Return to Home</span>
          </Link>
          <span>·</span>
          <Link to="/#services" className="hover:text-white transition-colors">
            Explore All Services
          </Link>
          <span>·</span>
          <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
}
