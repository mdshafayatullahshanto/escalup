// /src/components/TestimonialsSection.jsx
// Reads from /src/data/testimonials.js and automatically hides itself when the array is empty
// Modern black-and-white theme

import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import SectionHeading from './SectionHeading';

export default function TestimonialsSection() {
  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <SectionHeading
          eyebrow="Verified Client Feedback"
          title="What Engineering Leaders Say"
          subtitle="Real reviews from procurement managers, engineering heads, and contractors."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#121214] rounded-3xl p-7 border border-white/10 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-white mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <p className="text-sm text-[#D4D4D8] leading-relaxed italic mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">{item.clientName}</h4>
                  <p className="text-xs text-[#A1A1AA]">
                    {item.role}, {item.company}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-white bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                  {item.country || 'International'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
