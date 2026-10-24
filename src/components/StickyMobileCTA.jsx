// /src/components/StickyMobileCTA.jsx
// Sticky bottom CTA bar on mobile screens ("Email Us" + "Get a Quote")

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
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-[#121C2D]/95 backdrop-blur-md border-t border-[#DBE3E0] dark:border-[#223249] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg lg:hidden">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Email Button */}
        <a
          href={`mailto:${companyData.contact.email}?subject=Offshore%20Engineering%20Inquiry%20-%20escalup`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-white dark:bg-[#162235] border border-[#DBE3E0] dark:border-[#223249] text-[#14201D] dark:text-[#F1F5F9] font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
        >
          <Mail className="w-4 h-4 text-[#2E756E] dark:text-[#34A096]" />
          <span>Email Us</span>
        </a>

        {/* Get a Quote Button */}
        <a
          href="#contact"
          onClick={handleQuote}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#2E756E] hover:bg-[#255e58] text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
        >
          <span>Get a Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
