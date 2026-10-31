// /src/components/ServicesSection.jsx
// Consilio-style interactive 7-category services grid linking directly to dedicated detail pages (/services/:slug)
// Modern black-and-white theme

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
  HelpCircle
} from 'lucide-react';
import { servicesData } from '../data/services';
import SectionHeading from './SectionHeading';
import Magnetic from './Magnetic';

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
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const handleQuoteClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <SectionHeading
          eyebrow="Our Services"
          title="Expert Engineering For Every Stage Of Production"
          subtitle="From early concept sketches to fabrication-ready drawings and coordinated BIM models, our engineering disciplines cover the entire product and facility lifecycle."
        />

        {/* 7 Services Grid in Consilio Bento Layout */}
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
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`${isWide ? 'lg:col-span-3 lg:max-w-2xl lg:mx-auto w-full' : ''}`}
              >
                <Link
                  to={`/services/${service.slug}`}
                  data-cursor="Explore"
                  className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#121214] hover:bg-[#18181B] border border-white/10 hover:border-white/30 shadow-soft hover:shadow-card transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Subtle top indicator bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center shadow-xs group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 group-hover:scale-105">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/15 font-mono">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#A1A1AA] mb-6 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Sub-item highlights (preview 3 items) */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                      {service.items.slice(0, 3).map((subItem, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#E4E4E7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                          <span className="truncate">{subItem}</span>
                        </div>
                      ))}
                      {service.items.length > 3 && (
                        <div className="text-[11px] font-medium text-[#71717A] pl-3.5">
                          + {service.items.length - 3} more technical capabilities
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white/80 group-hover:text-white transition-colors">
                    <span>View deliverables & tools</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Consilio-style Discovery CTA Band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#121214] border border-white/10 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-11 h-11 rounded-2xl bg-white/10 text-white shrink-0 flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Not sure which service or software package your project requires?
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                Share your initial sketches, project brief, or current drawings. Our senior engineering lead will review your scope within 24 hours.
              </p>
            </div>
          </div>

          <Magnetic strength={0.15}>
            <a
              href="#contact"
              onClick={handleQuoteClick}
              className="w-full md:w-auto px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-xs sm:text-sm whitespace-nowrap shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
