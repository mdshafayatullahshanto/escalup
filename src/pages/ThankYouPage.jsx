// /src/pages/ThankYouPage.jsx
// Confirmation page shown after quote submission
// Unified design system: Lavender background, white card, indigo accents, black pill button, zero green/mono

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
  ArrowLeft 
} from 'lucide-react';
import { companyData } from '../data/company';
import { trackCallBooking } from '../utils/analytics';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Logo from '../components/Logo';

export default function ThankYouPage({ onOpenCalendly }) {
  const [submissionInfo] = useState(() => {
    try {
      const stored = sessionStorage.getItem('escalup_last_quote');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Quote Request Received | escalup';

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5846F6', '#0070AD', '#111827', '#E2E6EE']
      });
    } catch {
      // safe fallback
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
    <div className="min-h-[85vh] bg-[#F6F7FC] dark:bg-[#080C0F] py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      <div className="max-w-2xl w-full bg-white dark:bg-[#11161F] rounded-3xl p-8 sm:p-12 border border-[#E2E6EE] dark:border-white/10 shadow-card text-center relative overflow-hidden">
        
        {/* Brand Logo */}
        <div className="flex justify-center mb-6">
          <Logo size="md" />
        </div>

        {/* Animated Check Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#5846F6]/10 text-[#5846F6] mx-auto flex items-center justify-center mb-6 shadow-xs animate-bounce">
          <CheckCircle2 className="w-9 h-9 text-[#5846F6]" />
        </div>

        <div className="flex justify-center mb-4">
          <Badge variant="navy">Request Successfully Received</Badge>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#111827] dark:text-white tracking-tight mb-4">
          Thank you for reaching out to <span className="font-semibold text-[#2E756E]">escalup.</span>
        </h1>

        <div className="p-4 rounded-2xl bg-[#EEF2F8] dark:bg-[#161D27] border border-[#E2E6EE] dark:border-white/10 text-[#111827] dark:text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-[#5846F6]" />
          <span>We will reply with a detailed quote within 24 hours.</span>
        </div>

        <p className="text-xs sm:text-sm text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed mb-8 max-w-lg mx-auto">
          {submissionInfo?.name ? (
            <>Thank you, <strong className="text-[#111827] dark:text-white">{submissionInfo.name}</strong> from <strong className="text-[#111827] dark:text-white">{submissionInfo.company}</strong>. </>
          ) : null}
          Our lead engineering desk in Uttara, Dhaka is reviewing your technical requirements. We will prepare an itemized milestone estimate and drawing timeline.
        </p>

        {/* 3 Steps What Happens Next */}
        <div className="bg-[#F6F7FC] dark:bg-[#0B0F14] rounded-2xl p-6 border border-[#E2E6EE] dark:border-white/10 text-left mb-8 space-y-3.5">
          <h4 className="text-xs font-semibold text-[#111827] dark:text-white uppercase tracking-wider">
            What Happens Next:
          </h4>
          <div className="space-y-2.5 text-xs text-[#5A6679] dark:text-[#9BA8BA]">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#5846F6] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#111827] dark:text-white">1. NDA Execution:</strong> We countersign your confidentiality agreement before examining proprietary CAD models or drawings.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <FileCheck2 className="w-4 h-4 text-[#5846F6] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#111827] dark:text-white">2. Technical Review:</strong> Our senior mechanical and MEP engineers evaluate tolerances, drafting scope, and tooling feasibility.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#5846F6] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#111827] dark:text-white">3. Fixed Quote & Milestones:</strong> You receive a clear, binding proposal with delivery dates and payment terms.
              </span>
            </div>
          </div>
        </div>

        {/* Accelerated Next Action: Book a Call on Cal.com */}
        <div className="p-6 rounded-2xl border border-dashed border-[#5846F6]/40 bg-[#EEF2F8]/60 dark:bg-[#161D27]/60 mb-8">
          <h4 className="font-semibold text-sm text-[#111827] dark:text-white mb-1">
            Want to accelerate your kickoff?
          </h4>
          <p className="text-xs text-[#5A6679] dark:text-[#9BA8BA] mb-4">
            Skip the email delay and reserve 30 minutes with our Principal Engineer right away.
          </p>
          <Button
            onClick={handleBookCall}
            variant="primary"
            size="md"
            icon="arrow"
            className="w-full sm:w-auto"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Open Booking Calendar (Cal.com)</span>
          </Button>
        </div>

        {/* Return Links */}
        <div className="flex items-center justify-center gap-4 text-xs font-medium text-[#5A6679] dark:text-[#9BA8BA]">
          <Link to="/" className="text-[#5846F6] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <span>·</span>
          <Link to="/#services" className="hover:text-[#111827] dark:hover:text-white transition-colors">
            Explore All Services
          </Link>
          <span>·</span>
          <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#111827] dark:hover:text-white transition-colors">
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
}