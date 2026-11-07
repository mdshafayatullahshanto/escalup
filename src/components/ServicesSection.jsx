// /src/components/ServicesSection.jsx
// Infosys-inspired enterprise engineering services matrix with interactive discipline filters,
// structured capability cards, deliverable highlights, and deep links to /services/:slug.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Wrench, 
  Activity, 
  CheckCircle2, 
  Layers, 
  Database, 
  Briefcase, 
  ArrowRight,
  Sparkles
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

const CATEGORIES = [
  'All Disciplines',
  'Mechanical & CAD',
  'Manufacturing & DFMA',
  'MEP & BIM',
  'Simulation & PLM'
];

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState('All Disciplines');

  const filteredServices = servicesData.filter((service) => {
    if (activeFilter === 'All Disciplines') return true;
    if (activeFilter === 'Mechanical & CAD') {
      return service.slug.includes('mechanical') || service.slug.includes('standards');
    }
    if (activeFilter === 'Manufacturing & DFMA') {
      return service.slug.includes('manufacturing');
    }
    if (activeFilter === 'MEP & BIM') {
      return service.slug.includes('mep');
    }
    if (activeFilter === 'Simulation & PLM') {
      return service.slug.includes('simulation') || service.slug.includes('plm') || service.slug.includes('consultancy');
    }
    return true;
  });

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#0B1519] border-b border-[#DBE3E0] dark:border-[#263830] relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Our Engineering Disciplines"
          title="Expert Engineering For Every Stage Of Production"
          subtitle="From early concept sketches to fabrication-ready drawings and coordinated BIM models, our engineering disciplines cover the entire product and facility lifecycle."
        />

        {/* Infosys Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'text-white shadow-sm'
                    : 'bg-[#F4F6F5] dark:bg-[#152620] text-[#5A6A65] dark:text-[#8FA89F] hover:text-[#14201D] dark:hover:text-[#E4EDE9] border border-[#DBE3E0] dark:border-[#263830]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeServiceFilterPill"
                    className="absolute inset-0 bg-[#2E756E] dark:bg-[#3B948A] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid in Infosys Card Architecture */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = iconMap[service.iconName] || Cpu;
              const isWide = filteredServices.length === 7 && index === 6;

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className={`${isWide ? 'lg:col-span-3 lg:max-w-2xl lg:mx-auto w-full' : ''}`}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    data-cursor="Explore"
                    className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#F8FAF9] dark:bg-[#152620] hover:bg-white dark:hover:bg-[#1A2D26] border border-[#DBE3E0] dark:border-[#263830] hover:border-[#2E756E]/50 dark:hover:border-[#3B948A]/50 shadow-soft hover:shadow-card transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Top indicator line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#2E756E] dark:bg-[#14F3C1] opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      {/* Header: Icon + Category Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1D3328] border border-[#DBE3E0] dark:border-[#263830] text-[#2E756E] dark:text-[#14F3C1] flex items-center justify-center shadow-xs group-hover:bg-[#2E756E] group-hover:text-white transition-all duration-300 group-hover:scale-105">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#2E756E]/10 dark:bg-[#3B948A]/15 text-[#2E756E] dark:text-[#3B948A] border border-[#2E756E]/20 dark:border-[#3B948A]/30 font-mono">
                          {service.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#14201D] dark:text-[#E4EDE9] mb-3 group-hover:text-[#2E756E] dark:group-hover:text-[#14F3C1] transition-colors leading-snug">
                        {service.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#8FA89F] mb-6 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      {/* Sub-item highlights */}
                      <div className="space-y-2 mb-6 pt-4 border-t border-[#DBE3E0]/70 dark:border-[#263830]/70">
                        {service.items.slice(0, 3).map((subItem, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-[#14201D] dark:text-[#E4EDE9]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2E756E] dark:bg-[#14F3C1] shrink-0" />
                            <span className="truncate">{subItem}</span>
                          </div>
                        ))}
                        {service.items.length > 3 && (
                          <div className="text-[11px] font-medium text-[#889893] dark:text-[#5A7268] pl-3.5 font-mono">
                            + {service.items.length - 3} more technical capabilities
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="pt-4 border-t border-[#DBE3E0]/70 dark:border-[#263830]/70 flex items-center justify-between text-xs font-bold text-[#2E756E] dark:text-[#14F3C1] group-hover:text-[#255E58] transition-colors">
                      <span className="font-mono">Explore deliverables & specs</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Infosys Bottom Multi-Discipline Custom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#F8FAF9] dark:bg-[#152620] border border-[#DBE3E0] dark:border-[#263830] flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#2E756E]/10 dark:bg-[#3B948A]/10 text-[#2E756E] dark:text-[#14F3C1] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#14201D] dark:text-[#E4EDE9]">
                Need a Cross-Discipline Engineering Package?
              </h4>
              <p className="text-xs sm:text-sm text-[#5A6A65] dark:text-[#8FA89F]">
                We assemble combined mechanical, MEP, and BIM teams tailored to your exact software versions and submission milestones.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all shrink-0 cursor-pointer flex items-center gap-2"
          >
            <span>Request Custom Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
