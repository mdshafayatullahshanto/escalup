// /src/components/PilotProject.jsx
// High-conversion lead capture section lowering risk for first-time overseas buyers

import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-white dark:bg-[#0B111E] border-b border-[#DBE3E0] dark:border-[#223249] relative overflow-hidden">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-gradient-to-br from-[#142F2C] to-[#0A1B19] rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-xl relative overflow-hidden border border-white/10 dark:border-[#2E756E]/30"
        >
          {/* Subtle background CAD grid */}
          <div className="absolute inset-0 blueprint-grid opacity-15" />

          <div className="relative z-10 max-w-3xl">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#97c0b9] border border-white/15 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Low-Risk International Kickoff</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Start with a small pilot project
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
              Not ready for a long-term commitment? Start with a small paid pilot so you can evaluate our quality, communication and delivery before commissioning larger engineering packages.
            </p>

            {/* 3 Points */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10 pt-4 border-t border-white/15">
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
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
                className="btn-primary-white px-8 py-3.5 rounded-full bg-white hover:bg-[#F4F6F5] text-[#142F2C] font-extrabold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span className="font-extrabold">Discuss a Pilot Project</span>
                <ArrowRight className="w-4 h-4 text-[#2E756E] group-hover:translate-x-1.5 transition-transform" />
              </motion.a>
              <span className="text-xs text-white/60">
                Guaranteed NDA signed prior to briefing
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
