// /src/components/ValuesSection.jsx
// Consilio-style 4-card core values section establishing trust, rigor, and transparent partnership
// Brand color combination matching reference design

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Users2, Activity } from 'lucide-react';
import SectionHeading from './SectionHeading';

const VALUES = [
  {
    number: '01',
    title: 'Client-First Precision',
    desc: 'Every drawing package begins with your fabrication constraints and CAD standards. We adopt your layers, title blocks, and revision conventions seamlessly.',
    icon: Target
  },
  {
    number: '02',
    title: 'Long-Term IP & Value',
    desc: 'We treat client IP with absolute sanctity. Strict NDA signed before file exchange, zero public disclosure without permission, and you retain 100% ownership.',
    icon: Shield
  },
  {
    number: '03',
    title: 'Collaborative Overlap',
    desc: 'We operate as a direct desk extension of your team. Daily Slack/Teams syncs, rapid responses, and synchronous BST (UTC+6) time overlap with your working hours.',
    icon: Users2
  },
  {
    number: '04',
    title: 'Evidence-Based Engineering',
    desc: 'We combine kinematics validation, DFMA reviews, tolerance stack-up analysis, and Navisworks clash reports to ensure designs work on the first try.',
    icon: Activity
  }
];

export default function ValuesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#DBE3E0] relative">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <SectionHeading
          eyebrow="Our Values"
          title="Principles Behind Our Client Partnerships"
          subtitle="Our offshore engineering model is built on transparency, technical rigor, and zero-defect drafting—ensuring reliable delivery for international procurement heads."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.number}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-white hover:bg-[#F4F6F5] rounded-3xl p-7 border border-[#DBE3E0] hover:border-[#2E756E]/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#2E756E]/10 border border-[#2E756E]/20 text-[#2E756E] flex items-center justify-center group-hover:bg-[#2E756E] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-mono text-[#2E756E]/30 group-hover:text-[#2E756E] transition-colors">
                      {val.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#14201D] mb-3 group-hover:text-[#2E756E] transition-colors">
                    {val.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A6A65] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
