// /src/components/TestimonialsSection.jsx
// Reads from /src/data/testimonials.js and automatically hides itself when the array is empty

import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import SectionHeading from './SectionHeading';

export default function TestimonialsSection() {
  // Hide automatically if no testimonials are available
  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28 bg-[#000D0E] border-b border-white/[0.08] relative">
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
              className="bg-[#001517] rounded-3xl p-7 border border-white/[0.08] flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-[#14F3C1] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#14F3C1]" />
                  ))}
                </div>
                <p className="text-sm text-white/80 leading-relaxed italic mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">{item.clientName}</h4>
                  <p className="text-xs text-white/60">
                    {item.role}, {item.company}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-[#14F3C1] bg-[#14F3C1]/10 px-2.5 py-1 rounded-full border border-[#14F3C1]/20">
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
