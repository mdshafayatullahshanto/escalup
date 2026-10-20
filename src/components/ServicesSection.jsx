// /src/components/ServicesSection.jsx
// Interactive 7-category services grid linking directly to dedicated detail pages (/services/:slug)

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Wrench, 
  Activity, 
  CheckCircle2, 
  Layers, 
  Database, 
  Briefcase, 
  ArrowRight,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { servicesData } from '../data/services';
import SectionHeading from './SectionHeading';

const iconMap = {
  Cpu,
  Wrench,
  Activity,
  CheckCircle2,
  Layers,
  Database,
  Briefcase
};

export default function ServicesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const handleQuoteClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-[#0B111E] border-b border-[#DBE3E0] dark:border-[#223249] relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Complete Mechanical, Manufacturing & MEP Design Services"
          subtitle="From early concept sketches to fabrication-ready drawings and coordinated BIM models, our engineering disciplines cover the entire product and facility lifecycle."
        />

        {/* 7 Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Cpu;
            const isWide = index === 6; // 7th item spans full width on lg screens for balanced layout

            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className={`${isWide ? 'lg:col-span-3 lg:max-w-2xl lg:mx-auto' : ''}`}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="h-full flex flex-col justify-between p-7 rounded-2xl bg-[#F4F6F5]/50 dark:bg-[#121C2D] hover:bg-white dark:hover:bg-[#162235] border border-[#DBE3E0] dark:border-[#223249] hover:border-[#2E756E]/40 shadow-soft hover:shadow-card transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Subtle top indicator bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#2E756E] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#162235] border border-[#DBE3E0] dark:border-[#223249] text-[#2E756E] flex items-center justify-center shadow-sm group-hover:bg-[#2E756E] group-hover:text-white group-hover:border-[#2E756E] transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#2E756E]/10 text-[#2E756E]">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#14201D] mb-3 group-hover:text-[#2E756E] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#5A6A65] mb-5 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Sub-item highlights (preview 3 items) */}
                    <div className="space-y-1.5 mb-6 pt-4 border-t border-[#DBE3E0]/70">
                      {service.items.slice(0, 3).map((subItem, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#14201D]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E756E]" />
                          <span className="truncate">{subItem}</span>
                        </div>
                      ))}
                      {service.items.length > 3 && (
                        <div className="text-[11px] font-medium text-[#5A6A65] pl-3.5">
                          + {service.items.length - 3} more technical capabilities
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-[#DBE3E0]/70 flex items-center justify-between text-xs font-bold text-[#2E756E] group-hover:text-[#255e58]">
                    <span>View deliverables & tools</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Band below the grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#F4F6F5] via-white to-[#F4F6F5] dark:from-[#121C2D] dark:via-[#162235] dark:to-[#121C2D] border border-[#DBE3E0] dark:border-[#223249] shadow-soft flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-11 h-11 rounded-xl bg-[#2E756E]/10 dark:bg-[#162235] text-[#2E756E] dark:text-[#34A096] shrink-0 flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#14201D] dark:text-[#F1F5F9]">
                Not sure which service or software package you need?
              </h4>
              <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#94A3B8]">
                Tell us your project requirements or share your current drawings. We will review your scope and recommend the most cost-effective approach.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            onClick={handleQuoteClick}
            className="w-full md:w-auto px-6 py-3 rounded-full bg-[#2E756E] hover:bg-[#255e58] text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm hover:shadow transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
