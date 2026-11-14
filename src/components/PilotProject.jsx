// /src/components/PilotProject.jsx
// High-conversion lead capture section lowering risk for first-time overseas buyers
// Light Editorial Engineering Theme with Deep Teal accents

import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function PilotProject() {
  const handlePilotClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      const modelSelect = document.getElementById('form-model');
      if (modelSelect) {
        modelSelect.value = 'Project-Based';
      }
      const detailsInput = document.getElementById('form-details');
      if (detailsInput && !detailsInput.value) {
        detailsInput.value = 'I would like to discuss a small paid pilot project to evaluate quality and turnaround.';
      }
    }
  };

  const points = [
    {
      title: 'Small, Clearly Defined Scope',
      desc: 'Pick a single sheet-metal part, a 2D-to-3D CAD conversion, a sub-assembly tolerance review, or a Revit clash test.'
    },
    {
      title: 'Fixed Price & Rapid Timeline',
      desc: 'Transparent flat fee with an agreed 3–5 day delivery window. No hidden extras or open-ended hourly billing.'
    },
    {
      title: 'Seamless Path to Dedicated Team',
      desc: 'Experience our drafting fidelity and communication firsthand. If satisfied, roll into ongoing retainer hours effortlessly.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0D1A17] border-b border-[#DBE3E0] dark:border-[#263830] relative overflow-hidden">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        <div className="bg-gradient-to-br from-[#142F2C] via-[#102724] to-[#0A1B19] rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-2xl relative overflow-hidden border border-[#2E756E]/40">
          {/* Subtle background CAD grid */}
          <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2E756E]/30 text-[#A0D4CE] border border-[#2E756E]/40 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#A0D4CE]" />
              <span>Low-Risk International Kickoff</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight text-center">
              Start with a Small Paid Pilot Project
            </h3>

            <p className="text-sm sm:text-base text-[#D4E2DE] mb-8 leading-relaxed max-w-2xl mx-auto text-center">
              Evaluating a new overseas engineering partner is a critical operational decision. You do not need to commit to a long-term contract right away. Test our speed, drafting rigor, and communication with a low-risk trial assignment.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
              {points.map((pt, idx) => (
                <div key={idx} className="bg-white/5 border border-[#2E756E]/30 rounded-2xl p-4 sm:p-5 flex flex-col justify-start">
                  <div className="w-6 h-6 rounded-full bg-[#2E756E]/40 text-[#A0D4CE] flex items-center justify-center shrink-0 mb-3 border border-[#2E756E]/50">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A0D4CE]" />
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">{pt.title}</h4>
                  <p className="text-xs text-[#A0D4CE]/90 leading-relaxed mt-1.5">{pt.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={handlePilotClick}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-[#F4F6F5] text-[#14201D] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg group cursor-pointer"
              >
                <span>Propose a Pilot Assignment</span>
                <ArrowRight className="w-4 h-4 text-[#14201D] group-hover:translate-x-1 transition-transform" />
              </a>

              <span className="text-xs text-[#A0D4CE] text-center font-mono">
                Average pilot delivered in 3–5 business days under strict NDA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
