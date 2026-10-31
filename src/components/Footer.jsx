// /src/components/Footer.jsx
// Modern engineering footer with dark evergreen background, full service directory, regions, and contact specs
// Light Editorial Engineering Theme (Footer grounding)

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import Logo from './Logo';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + href);
    }
  };

  return (
    <footer className="bg-[#0D1A18] text-white pt-16 pb-28 sm:pb-24 lg:pb-12 border-t border-[#1C332F] relative">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#1C332F]">
          
          {/* Col 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="md" />
            
            <p className="text-xs sm:text-sm text-[#9BB0A8] max-w-sm leading-relaxed">
              Offshore engineering support for global teams. We deliver Mechanical, Product and MEP design support with clear communication and production-ready documentation.
            </p>

            <div className="pt-2 text-xs text-[#9BB0A8] space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#52C5B6]" />
                <span>{companyData.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#52C5B6]" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                  {companyData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#52C5B6]" />
                <span>Monday – Friday | 10:00 – 19:00 BST (UTC+6)</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyData.contact?.linkedinUrl || 'https://www.linkedin.com/company/escalup'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#2E756E] hover:text-white border border-[#1C332F] text-white flex items-center justify-center transition-all"
                aria-label="LinkedIn Company Page"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-[#71857E]">
                Strict Mutual NDA Guaranteed
              </span>
            </div>
          </div>

          {/* Col 2: Engineering Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Engineering Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-[#9BB0A8] hover:text-[#52C5B6] transition-colors block py-0.5"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Governance (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Overview
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-[#9BB0A8] hover:text-[#52C5B6] transition-colors">
                  Services Grid
                </a>
              </li>
              <li>
                <a href="#offshore-model" onClick={(e) => handleNavClick(e, '#offshore-model')} className="text-[#9BB0A8] hover:text-[#52C5B6] transition-colors">
                  Offshore Engagement
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="text-[#9BB0A8] hover:text-[#52C5B6] transition-colors">
                  Delivery Process
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-[#9BB0A8] hover:text-[#52C5B6] transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-[#9BB0A8] hover:text-[#52C5B6] transition-colors">
                  About Hub
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="text-[#9BB0A8] hover:text-[#52C5B6] transition-colors">
                  Frequently Asked
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-[#9BB0A8] hover:text-[#52C5B6] transition-colors">
                  Request a Quote
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-[#9BB0A8] hover:text-[#52C5B6] transition-colors">
                  Privacy Policy & NDA
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Rapid Engagement & Inquiry (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Fast Project Turnaround
            </h4>
            <p className="text-xs text-[#9BB0A8] leading-relaxed">
              We return verified engineering quotes and feasibility assessments within 24 hours of brief submission.
            </p>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-xs shadow-md transition-all group"
            >
              <span>Submit Project Brief</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-[#71857E] uppercase tracking-wider block mb-2 font-mono">
                Serving Overseas Desks:
              </span>
              <div className="flex flex-wrap gap-1.5 text-[10px] text-[#D4E2DE]">
                <span className="bg-white/5 px-2.5 py-1 rounded-md border border-[#1C332F]">North America</span>
                <span className="bg-white/5 px-2.5 py-1 rounded-md border border-[#1C332F]">Europe</span>
                <span className="bg-white/5 px-2.5 py-1 rounded-md border border-[#1C332F]">Middle East</span>
                <span className="bg-white/5 px-2.5 py-1 rounded-md border border-[#1C332F]">Asia-Pacific</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71857E] gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {currentYear} escalup. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Dhaka Engineering Center</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#52C5B6]" />
              <span>100% Client IP Ownership</span>
            </span>
            <span>·</span>
            <span>ASME Y14.5 & ISO Standard Drafting</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
