// /src/components/TestimonialsSection.jsx
// Reads from /src/data/testimonials.js and automatically hides itself when the array is empty

import React from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import SectionHeading from './SectionHeading';

export default function TestimonialsSection() {
  // Hide automatically if no testimonials are available
  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0B111E] border-b border-[#DBE3E0] dark:border-[#223249] relative">
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
              className="bg-[#F4F6F5] dark:bg-[#121C2D] rounded-2xl p-7 border border-[#DBE3E0] dark:border-[#223249] flex flex-col justify-between shadow-soft"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-[#14201D] leading-relaxed italic mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#DBE3E0] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#14201D]">{item.clientName}</h4>
                  <p className="text-xs text-[#5A6A65]">
                    {item.role}, {item.company}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-[#2E756E] bg-[#2E756E]/10 px-2 py-0.5 rounded">
                  {item.country}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
