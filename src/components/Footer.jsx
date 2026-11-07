// src/components/Footer.jsx
// STEP 3 - Item 9: Infosys-style 4-column enterprise footer:
// 4 link columns with thin animated underline links, location select pill, social icons, and copyright row.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { LinkedInIcon, TwitterIcon, FacebookIcon, YoutubeIcon } from './Icons';
import UnderlineLink from './ui/UnderlineLink';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';

export default function Footer() {
  const [locationOpen, setLocationOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    if (e && e.preventDefault) e.preventDefault();
    if (window.location.pathname === '/') {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + href);
    }
  };

  const handleQuoteClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (window.location.pathname === '/') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <footer className="bg-white dark:bg-[#070B0E] text-[#111827] dark:text-[#F3F5FA] pt-16 sm:pt-20 pb-12 border-t border-[#E2E6EE] dark:border-white/10 transition-colors">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Top: 4 Link Columns Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-[#E2E6EE] dark:border-white/10">
          
          {/* Column 1: Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#111827] dark:text-white font-mono">
              Engineering Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <UnderlineLink
                    to={`/services/${s.slug}`}
                    color="muted"
                    className="block py-0.5"
                  >
                    {s.title}
                  </UnderlineLink>
                </li>
              ))}
              <li>
                <UnderlineLink
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  color="blue"
                  icon="arrow"
                  className="block py-0.5 font-semibold"
                >
                  View All Capabilities
                </UnderlineLink>
              </li>
            </ul>
          </div>

          {/* Column 2: Industries & Sectors */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#111827] dark:text-white font-mono">
              Industries & Sectors
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <UnderlineLink href="#industries" onClick={(e) => handleNavClick(e, '#industries')} color="muted">
                  Industrial Equipment & Machinery
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#industries" onClick={(e) => handleNavClick(e, '#industries')} color="muted">
                  Commercial MEP & HVAC Contractors
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#industries" onClick={(e) => handleNavClick(e, '#industries')} color="muted">
                  Hardware Innovators & Startups
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#industries" onClick={(e) => handleNavClick(e, '#industries')} color="muted">
                  Consultancies & Architecture Firms
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#offshore-model" onClick={(e) => handleNavClick(e, '#offshore-model')} color="muted">
                  Dedicated Offshore CAD Desks
                </UnderlineLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Delivery */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#111827] dark:text-white font-mono">
              Company & Operations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <UnderlineLink href="#about" onClick={(e) => handleNavClick(e, '#about')} color="muted">
                  About escalup & Engineering Team
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#offshore-model" onClick={(e) => handleNavClick(e, '#offshore-model')} color="muted">
                  Dhaka Engineering Center (HQ)
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#process" onClick={(e) => handleNavClick(e, '#process')} color="muted">
                  6-Gate Delivery Quality Framework
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#projects" onClick={(e) => handleNavClick(e, '#projects')} color="muted">
                  Case Studies & Verified Outcomes
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#contact" onClick={handleQuoteClick} color="blue" icon="arrow">
                  Request a Formal Scope Quote
                </UnderlineLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Governance & Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#111827] dark:text-white font-mono">
              Standards & Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <UnderlineLink href="#about" onClick={(e) => handleNavClick(e, '#about')} color="muted">
                  ASME Y14.5M GD&T Compliance
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#about" onClick={(e) => handleNavClick(e, '#about')} color="muted">
                  ISO 9001 Quality Control System
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#about" onClick={(e) => handleNavClick(e, '#about')} color="muted">
                  Revit BIM LOD 350–400 Precision
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#faq" onClick={(e) => handleNavClick(e, '#faq')} color="muted">
                  Frequently Asked Questions (FAQ)
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#contact" onClick={handleQuoteClick} color="muted">
                  Strict Mutual NDA Policy
                </UnderlineLink>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Location Select, Social Icons, Copyright Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Location Select Pill */}
          <div className="relative">
            <button
              onClick={() => setLocationOpen(!locationOpen)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EEF2F8] dark:bg-[#151D26] text-[#111827] dark:text-white text-xs font-medium border border-[#D8DFEB] dark:border-white/10 hover:bg-[#E2E8F0] dark:hover:bg-[#1C2530] transition-colors cursor-pointer"
              aria-label="Location selector"
            >
              <Globe className="w-4 h-4 text-[#0070AD] dark:text-[#38BDF8]" />
              <span>Location: Dhaka (BST, UTC+6)</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${locationOpen ? 'rotate-180' : ''}`} />
            </button>

            {locationOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-64 p-3 rounded-2xl bg-white dark:bg-[#151D26] border border-[#D8DFEB] dark:border-white/10 shadow-xl text-xs space-y-1.5 z-20">
                <div className="text-[10px] font-mono font-bold uppercase text-[#5A6679] dark:text-[#9BA8BA] px-2">
                  Operating Engineering Center
                </div>
                <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-[#EEF2F8] dark:bg-[#1E2833] font-medium text-[#111827] dark:text-white">
                  <span>Dhaka, Sector 10, Uttara</span>
                  <Check className="w-3.5 h-3.5 text-[#0070AD]" />
                </div>
                <div className="px-2 pt-1 text-[11px] text-[#5A6679] dark:text-[#9BA8BA]">
                  Operating hours: Mon–Fri, 10:00–19:00 BST (UTC+6)
                </div>
              </div>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[#5A6679] dark:text-[#9BA8BA]">
            <a
              href={companyData.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#0070AD] transition-colors p-1"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={companyData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#0070AD] transition-colors p-1"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={companyData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="hover:text-[#111827] dark:hover:text-white transition-colors p-1"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={companyData.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-500 transition-colors p-1"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright Row */}
          <div className="text-xs text-[#5A6679] dark:text-[#9BA8BA] font-mono">
            Copyright © 2026 escalup. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
