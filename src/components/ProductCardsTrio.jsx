// src/components/ProductCardsTrio.jsx
// STEP 3 - Item 4: Three tall product cards with abstract gradient images and a white content card overlapping the image bottom.
// The center card is raised/larger. Cards animate in on scroll with a small stagger.

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Layers, Wrench, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from './ui/Badge';

const TRIO_CARDS = [
  {
    id: 1,
    tag: 'Mechanical CAD',
    title: 'Parametric Mechanical Modeling',
    subtitle: 'Kinematic assemblies, surface modeling, and sheet metal flat patterns built directly in SolidWorks, Siemens NX, and Inventor.',
    metric: '100% Native Files',
    benefits: ['Zero generic STEP file conversions', 'Client title block & layer standardization', 'Full parametric feature trees'],
    link: '/services/mechanical-design-cad',
    gradient: 'from-[#0B1528] via-[#0F223D] to-[#0070AD]/40',
    icon: Cpu,
    raised: false,
  },
  {
    id: 2,
    tag: 'Flagship BIM & Facilities',
    title: 'MEP Design & BIM Coordination',
    subtitle: 'Multi-discipline clash detection in Navisworks, HVAC load sizing (HAP), and LOD 300–400 Revit fabrication assemblies.',
    metric: 'Zero Spatial Clashes',
    benefits: ['Pre-construction clash resolution logs', 'ASME & ASHRAE standards compliance', 'Spool & shop drawings for contractors'],
    link: '/services/mep-design-bim',
    gradient: 'from-[#0A161F] via-[#0D2E3A] to-[#14F3C1]/30',
    icon: Layers,
    raised: true, // Center card is raised/larger
  },
  {
    id: 3,
    tag: 'Manufacturing Precision',
    title: 'DFMA & Production Detailing',
    subtitle: 'Design for Manufacturing & Assembly (DFMA), ASME Y14.5 GD&T tolerance stacks, and tooling fixture designs for the factory floor.',
    metric: '28% Cost Reduction',
    benefits: ['Prevents shop-floor binding & scrap', 'Sheet metal K-factor bend deduction', 'CNC & CAM manufacturing readiness'],
    link: '/services/dfma-production-detailing',
    gradient: 'from-[#120F24] via-[#241B4B] to-[#5846F6]/40',
    icon: Wrench,
    raised: false,
  }
];

export default function ProductCardsTrio() {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-[#F6F7FB] dark:bg-[#080C0F] border-b border-[#E2E6EE] dark:border-white/10 transition-colors">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#0070AD] dark:text-[#38BDF8] mb-3">
            Core Engineering Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] dark:text-white tracking-tight leading-tight">
            Specialized Engineering Capabilities,{' '}
            <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
              Built for Scale.
            </span>
          </h2>
        </div>

        {/* 3 Tall Product Cards with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {TRIO_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
                  card.raised
                    ? 'md:-translate-y-4 md:shadow-2xl border-2 border-[#0070AD]/40 dark:border-[#38BDF8]/40'
                    : 'border border-[#E2E6EE] dark:border-white/10 shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* TOP: Abstract Tall Gradient Image / Banner */}
                <div className={`h-64 sm:h-72 bg-gradient-to-br ${card.gradient} p-8 flex flex-col justify-between relative overflow-hidden`}>
                  {/* Technical CAD blueprint mesh */}
                  <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <Badge variant={card.raised ? 'teal' : 'navy'} size="xs">
                      {card.tag}
                    </Badge>
                    <Icon className="w-6 h-6 text-white/80" />
                  </div>

                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {card.metric}
                    </div>
                    <div className="text-xs text-white/70 font-mono mt-0.5">
                      Production Verified Metric
                    </div>
                  </div>
                </div>

                {/* BOTTOM: Overlapping White Content Card Surface */}
                <div className="p-6 sm:p-8 bg-white dark:bg-[#11161B] -mt-10 mx-3 sm:mx-4 mb-4 rounded-2xl sm:rounded-3xl shadow-card relative z-10 flex-1 flex flex-col justify-between border border-[#E2E6EE] dark:border-white/10">
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white leading-tight">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed">
                      {card.subtitle}
                    </p>

                    <div className="pt-2 space-y-2">
                      {card.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-[#111827] dark:text-[#F3F5FA]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0070AD] dark:text-[#14F3C1] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E2E6EE] dark:border-white/10">
                    <Link
                      to={card.link}
                      className="group flex items-center justify-between text-xs font-bold text-[#0070AD] dark:text-[#38BDF8] hover:underline"
                    >
                      <span>Explore Technical Scope</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

