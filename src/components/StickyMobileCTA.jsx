// /src/components/StickyMobileCTA.jsx
// Sticky bottom CTA bar on mobile screens ("Email Us" + "Get a Quote")
// Light Editorial Engineering Theme with Deep Teal accents

import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { companyData } from '../data/company';

export default function StickyMobileCTA() {
  const handleQuote = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#DBE3E0] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-soft lg:hidden">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Email Button */}
        <a
          href={`mailto:${companyData.contact.email}?subject=Offshore%20Engineering%20Inquiry%20-%20escalup`}
          className="flex-1 py-2.5 px-3 rounded-full bg-[#F8FAF9] hover:bg-[#F4F6F5] border border-[#DBE3E0] text-[#14201D] font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-all"
        >
          <Mail className="w-4 h-4 text-[#2E756E]" />
          <span>Email Us</span>
        </a>

        {/* Get a Quote Button */}
        <a
          href="#contact"
          onClick={handleQuote}
          className="flex-1 py-2.5 px-3 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
        >
          <span>Get a Quote</span>
          <ArrowRight className="w-3.5 h-3.5 text-white" />
        </a>
      </div>
    </div>
  );
}
