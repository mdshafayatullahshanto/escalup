// src/components/ThoughtLeadershipBento.jsx
// STEP 3 - Item 7: "Research, Announcements & Thought Leadership" as a bento grid
// Image + badge (dark navy) + title + date + "Read More" link.

import React from 'react';
import { ArrowRight, BookOpen, FileText, Newspaper, TrendingUp } from 'lucide-react';
import Badge from './ui/Badge';
import Card from './ui/Card';
import UnderlineLink from './ui/UnderlineLink';

const BENTO_ARTICLES = [
  {
    id: 1,
    badge: 'Technical Paper',
    badgeVariant: 'navy',
    icon: FileText,
    title: 'Managing Engineering Capacity: Structured CAD Desks Under ECN Governance',
    description: 'An operational analysis on engineering workflows, change control, and dedicated offshore CAD support operating under strict ECN/ECO governance.',
    date: 'October 24, 2026',
    readTime: '8 min read',
    large: true,
    gradient: 'from-[#0B1528] to-[#122A4A]',
  },
  {
    id: 2,
    badge: 'Insights',
    badgeVariant: 'navy',
    icon: TrendingUp,
    title: 'Navisworks Spatial Collision Matrix: Pre-empting MEP Clashes in Complex Commercial Facilities',
    description: 'Case report on automating clash detection between HVAC ductwork, structural beams, and gravity plumbing risers.',
    date: 'September 18, 2026',
    readTime: '5 min read',
    large: false,
    gradient: 'from-[#0F1E28] to-[#1B3A48]',
  },
  {
    id: 3,
    badge: 'Technical Report',
    badgeVariant: 'navy',
    icon: BookOpen,
    title: 'ASME Y14.5M GD&T Tolerance Stack-Up: Eliminating Assembly Binding on the Factory Floor',
    description: 'How standardized datum references and feature control frames protect interchangeability during multi-supplier fabrication.',
    date: 'August 30, 2026',
    readTime: '6 min read',
    large: false,
    gradient: 'from-[#19152B] to-[#2E2452]',
  },
  {
    id: 4,
    badge: 'Announcement',
    badgeVariant: 'navy',
    icon: Newspaper,
    title: 'Escalup Expands Offshore Engineering Support for Mechanical and MEP Work',
    description: 'Scaling parametric SolidWorks, Inventor, and Revit LOD 300–400 drafting capacity for European and North American clients.',
    date: 'November 02, 2026',
    readTime: '4 min read',
    large: false,
    gradient: 'from-[#13221E] to-[#1C3B34]',
  }
];

export default function ThoughtLeadershipBento() {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-[#F6F7FB] dark:bg-[#080C0F] border-b border-[#E2E6EE] dark:border-white/10 transition-colors">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-16 font-sans">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#0070AD] dark:text-[#A5B4FC] mb-2">
              Engineering Knowledge & Perspectives
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] dark:text-white tracking-tight">
              Research, Announcements &{' '}
              <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
                Thought Leadership
              </span>
            </h2>
          </div>

          <a
            href="#contact"
            className="text-xs sm:text-sm font-semibold text-[#5846F6] dark:text-[#A5B4FC] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View All Engineering Reports</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bento Grid Layout (1 Large Card on Left, 3 Stacked on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Large Bento Feature Card (7 cols) */}
          <div className="lg:col-span-7 flex">
            <Card
              variant="white"
              radius="3xl"
              className="p-8 sm:p-12 flex flex-col justify-between w-full border border-[#E2E6EE] dark:border-white/10 group overflow-hidden relative"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant="navy" size="sm">
                    {BENTO_ARTICLES[0].badge}
                  </Badge>
                  <span className="text-xs text-[#5A6679] dark:text-[#9BA8BA]">
                    {BENTO_ARTICLES[0].date} · {BENTO_ARTICLES[0].readTime}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#111827] dark:text-white leading-tight group-hover:text-[#5846F6] transition-colors">
                  {BENTO_ARTICLES[0].title}
                </h3>

                <p className="text-sm sm:text-base text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed">
                  {BENTO_ARTICLES[0].description}
                </p>
              </div>

              {/* Bottom Visual / Read More Link */}
              <div className="pt-8 mt-8 border-t border-[#E2E6EE] dark:border-white/10 flex items-center justify-between">
                <div className="text-xs text-[#5A6679] dark:text-[#9BA8BA]">
                  Engineering Strategy · Operations Research
                </div>

                <UnderlineLink
                  href="#contact"
                  color="blue"
                  icon="external"
                  className="text-xs sm:text-sm font-bold"
                >
                  Read Whitepaper
                </UnderlineLink>
              </div>
            </Card>
          </div>

          {/* 3 Secondary Bento Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {BENTO_ARTICLES.slice(1).map((article) => {
              return (
                <Card
                  key={article.id}
                  variant="white"
                  radius="2xl"
                  className="p-6 sm:p-7 flex-1 flex flex-col justify-between border border-[#E2E6EE] dark:border-white/10 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="navy" size="xs">
                        {article.badge}
                      </Badge>
                      <span className="text-[11px] text-[#5A6679] dark:text-[#9BA8BA]">
                        {article.date}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-medium text-[#111827] dark:text-white group-hover:text-[#5846F6] transition-colors line-clamp-2 mb-2 leading-snug">
                      {article.title}
                    </h4>

                    <p className="text-xs text-[#5A6679] dark:text-[#9BA8BA] line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E2E6EE] dark:border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#5A6679] dark:text-[#9BA8BA]">
                      {article.readTime}
                    </span>
                    <UnderlineLink href="#contact" color="blue" icon="arrow" className="text-xs font-bold">
                      Read More
                    </UnderlineLink>
                  </div>
                </Card>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
