// /src/components/Footer.jsx
// Infosys-inspired deep corporate engineering footer with multi-column enterprise directory,
// standards compliance, live operational hours, and strict NDA assurances.

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import Logo from './Logo';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';

export default function Footer() {
  const currentYear = 2026;
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
    <footer className="bg-gradient-to-br from-[#0B1519] via-[#0E1E1B] to-[#07100F] text-white pt-16 pb-28 sm:pb-24 lg:pb-12 border-t border-[#2E756E]/30 relative overflow-hidden">
      {/* Decorative technical grid and ambient glow */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2E756E]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        {/* Top Section: Multi-Column Infosys Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2E756E]/20">
          
          {/* Col 1: Brand & Operational Center (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="md" />
            
            <p className="text-xs sm:text-sm text-[#9BB0A8] leading-relaxed max-w-sm">
              <strong className="text-white">escalup</strong> is your dedicated offshore engineering partner. Delivering Mechanical, Product, and MEP design support for manufacturers, consultancies, and contractors worldwide.
            </p>

            <div className="pt-2 text-xs text-[#9BB0A8] space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#14F3C1] shrink-0 mt-0.5" />
                <span>{companyData.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#14F3C1] shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                  {companyData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#14F3C1] shrink-0" />
                <span>Monday – Friday | 10:00 – 19:00 BST (UTC+6)</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyData.contact?.linkedinUrl || 'https://www.linkedin.com/company/escalup'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#2E756E] hover:text-white border border-[#2E756E]/40 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="LinkedIn Company Page"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-[#A0D4CE] flex items-center gap-1.5 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#14F3C1]" />
                <span>Strict Mutual NDA Executed</span>
              </span>
            </div>
          </div>

          {/* Col 2: Engineering Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14F3C1]"></span>
              <span>Engineering Services</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-[#9BB0A8] hover:text-[#14F3C1] transition-colors block py-0.5"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Sectors (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14F3C1]"></span>
              <span>Overview & Sectors</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#industries" onClick={(e) => handleNavClick(e, '#industries')} className="text-[#9BB0A8] hover:text-[#14F3C1] transition-colors">
                  Manufacturers & OEMs
                </a>
              </li>
              <li>
                <a href="#industries" onClick={(e) => handleNavClick(e, '#industries')} className="text-[#9BB0A8] hover:text-[#14F3C1] transition-colors">
                  Engineering Consultancies
                </a>
              </li>
              <li>
                <a href="#industries" onClick={(e) => handleNavClick(e, '#industries')} className="text-[#9BB0A8] hover:text-[#14F3C1] transition-colors">
                  MEP & BIM Contractors
                </a>
              </li>
              <li>
                <a href="#offshore-model" onClick={(e) => handleNavClick(e, '#offshore-model')} className="text-[#9BB0A8] hover:text-[#14F3C1] transition-colors">
                  Offshore Engagement Models
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="text-[#9BB0A8] hover:text-[#14F3C1] transition-colors">
                  6-Gate Delivery Process
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-[#9BB0A8] hover:text-[#14F3C1] transition-colors">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-[#9BB0A8] hover:text-[#14F3C1] transition-colors">
                  About escalup
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="text-[#9BB0A8] hover:text-[#14F3C1] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Standards & Compliance (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14F3C1]"></span>
              <span>Standards & Quality</span>
            </h4>
            <div className="space-y-2 text-xs font-mono text-[#9BB0A8]">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <span className="text-white font-bold block">ASME Y14.5M</span>
                <span className="text-[10px] text-[#A0D4CE]">GD&T Drafting Precision</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <span className="text-white font-bold block">ISO 1101 / 9001</span>
                <span className="text-[10px] text-[#A0D4CE]">Quality Assurance Gates</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <span className="text-white font-bold block">Revit LOD 300–400</span>
                <span className="text-[10px] text-[#A0D4CE]">BIM Spatial Accuracy</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <span className="text-white font-bold block">ASHRAE 90.1</span>
                <span className="text-[10px] text-[#A0D4CE]">HVAC Energy Baselines</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Corporate Signoff */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71857E] gap-4">
          <p>© {currentYear} escalup. All rights reserved. Registered offshore engineering initiative.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono text-[#A0D4CE]">
            <span>Navigate Your Next · Precision Engineering</span>
            <span>·</span>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-[#14F3C1] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
