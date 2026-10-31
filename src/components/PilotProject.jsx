// /src/components/PilotProject.jsx
// High-conversion lead capture section lowering risk for first-time overseas buyers

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function PilotProject() {
  const handlePilotClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      // Preselect project-based in the form if possible
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
    <section className="py-16 md:py-24 bg-[#000D0E] border-b border-white/[0.08] relative overflow-hidden">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-gradient-to-br from-[#001517] to-[#012B30] rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-2xl relative overflow-hidden border border-white/[0.08]"
        >
          {/* Subtle background CAD grid */}
          <div className="absolute inset-0 blueprint-grid opacity-15" />

          <div className="relative z-10 max-w-3xl">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#14F3C1]/10 text-[#14F3C1] border border-[#14F3C1]/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#14F3C1]" />
              <span>Low-Risk International Kickoff</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Start with a small pilot project
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8">
              Not ready for a long-term commitment? Start with a small paid pilot so you can evaluate our quality, communication and delivery before commissioning larger engineering packages.
            </p>

            {/* 3 Points */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10 pt-4 border-t border-white/[0.08]">
              {points.map((pt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="space-y-1.5"
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#14F3C1] shrink-0" />
                    <span>{pt.title}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed pl-6">
                    {pt.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.a
                href="#contact"
                onClick={handlePilotClick}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary-white px-8 py-3.5 rounded-full bg-[#14F3C1] hover:bg-[#34F8CE] text-[#000D0E] font-extrabold text-sm shadow-[0_0_20px_rgba(20,243,193,0.3)] hover:shadow-[0_0_30px_rgba(20,243,193,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span className="font-extrabold">Discuss a Pilot Project</span>
                <ArrowRight className="w-4 h-4 text-[#000D0E] group-hover:translate-x-1.5 transition-transform" />
              </motion.a>
              <span className="text-xs text-white/50">
                Guaranteed NDA signed prior to briefing
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
