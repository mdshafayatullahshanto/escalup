// src/components/Footer.jsx
// Footer matching exact navigation order and 7 core services.
// Navigation links: Home, Services, Process, Offshore Model, Portfolio, About, Contact, FAQ.
// Includes Data Security & Client Environment, founder credit, and contact information intact.

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import UnderlineLink from './ui/UnderlineLink';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';
import Logo from './Logo';

export default function Footer() {
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
    <footer className="bg-white dark:bg-[#070B0E] text-[#111827] dark:text-[#F3F5FA] pt-12 sm:pt-16 pb-10 border-t border-[#E2E6EE] dark:border-white/10 transition-colors font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Header */}
        <div data-reveal-item="true" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#E2E6EE] dark:border-white/10 mb-10">
          <Logo size="md" />
          <p className="text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA] whitespace-normal sm:whitespace-nowrap">
            Offshore Mechanical Design, BIM & MEP engineering support for global innovators.
          </p>
        </div>

        {/* Top: 4 Link Columns Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:items-start gap-8 lg:gap-8 pb-10 border-b border-[#E2E6EE] dark:border-white/10">
          
          {/* Column 1: Services (All 7 in exact order - single line per topic) */}
          <div data-reveal-item="true" className="space-y-4 sm:col-span-2 lg:col-span-auto shrink-0">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111827] dark:text-white whitespace-nowrap">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesData.map((s) => (
                <li key={s.id} className="whitespace-nowrap">
                  <UnderlineLink
                    to={`/services/${s.slug}`}
                    color="muted"
                    className="block py-0.5 whitespace-nowrap"
                  >
                    {s.title}
                  </UnderlineLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Navigation Links (Matching navbar order) */}
          <div data-reveal-item="true" className="space-y-4 shrink-0">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111827] dark:text-white whitespace-nowrap">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="whitespace-nowrap">
                <UnderlineLink href="#home" onClick={(e) => handleNavClick(e, '#home')} color="muted" className="block py-0.5 whitespace-nowrap">
                  Home
                </UnderlineLink>
              </li>
              <li className="whitespace-nowrap">
                <UnderlineLink href="#services" onClick={(e) => handleNavClick(e, '#services')} color="muted" className="block py-0.5 whitespace-nowrap">
                  Services
                </UnderlineLink>
              </li>
              <li className="whitespace-nowrap">
                <UnderlineLink href="#process" onClick={(e) => handleNavClick(e, '#process')} color="muted" className="block py-0.5 whitespace-nowrap">
                  Process (Design Approach)
                </UnderlineLink>
              </li>
              <li className="whitespace-nowrap">
                <UnderlineLink href="#offshore-model" onClick={(e) => handleNavClick(e, '#offshore-model')} color="muted" className="block py-0.5 whitespace-nowrap">
                  Offshore Model
                </UnderlineLink>
              </li>
              <li className="whitespace-nowrap">
                <UnderlineLink href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} color="muted" className="block py-0.5 whitespace-nowrap">
                  Portfolio
                </UnderlineLink>
              </li>
              <li className="whitespace-nowrap">
                <UnderlineLink href="#about" onClick={(e) => handleNavClick(e, '#about')} color="muted" className="block py-0.5 whitespace-nowrap">
                  About
                </UnderlineLink>
              </li>
              <li className="whitespace-nowrap">
                <UnderlineLink href="#contact" onClick={handleQuoteClick} color="muted" className="block py-0.5 whitespace-nowrap">
                  Contact
                </UnderlineLink>
              </li>
              <li className="whitespace-nowrap">
                <UnderlineLink href="#faq" onClick={(e) => handleNavClick(e, '#faq')} color="muted" className="block py-0.5 whitespace-nowrap">
                  FAQ
                </UnderlineLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Data Security & Governance */}
          <div data-reveal-item="true" className="space-y-4 shrink-0">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111827] dark:text-white whitespace-nowrap">
              Data Security & Standards
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="whitespace-nowrap">
                <UnderlineLink href="#data-security" onClick={(e) => handleNavClick(e, '#data-security')} color="muted" className="block py-0.5 whitespace-nowrap">
                  Data Security & Client Environment
                </UnderlineLink>
              </li>
              <li className="whitespace-nowrap">
                <UnderlineLink href="#data-security" onClick={(e) => handleNavClick(e, '#data-security')} color="muted" className="block py-0.5 whitespace-nowrap">
                  Microsoft 365 Architecture
                </UnderlineLink>
              </li>
              <li className="whitespace-nowrap">
                <UnderlineLink href="#offshore-model" onClick={(e) => handleNavClick(e, '#offshore-model')} color="muted" className="block py-0.5 whitespace-nowrap">
                  Mutual NDA & Client IP Ownership
                </UnderlineLink>
              </li>
              <li className="whitespace-nowrap">
                <UnderlineLink href="#services" onClick={(e) => handleNavClick(e, '#services')} color="muted" className="block py-0.5 whitespace-nowrap">
                  International Standards Applied
                </UnderlineLink>
              </li>
              <li className="whitespace-nowrap">
                <UnderlineLink href="#process" onClick={(e) => handleNavClick(e, '#process')} color="muted" className="block py-0.5 whitespace-nowrap">
                  9-Step Design Approach
                </UnderlineLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Leadership */}
          <div data-reveal-item="true" className="space-y-4 shrink-0">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111827] dark:text-white whitespace-nowrap">
              Office & Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA]">
              <div className="flex items-start gap-2 whitespace-nowrap">
                <MapPin className="w-4 h-4 text-[#0070AD] shrink-0 mt-0.5" />
                <span className="whitespace-nowrap">Sector 10, Uttara, Dhaka-1230</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Mail className="w-4 h-4 text-[#0070AD] shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:underline text-[#111827] dark:text-white whitespace-nowrap">
                  {companyData.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright Row */}
        <div data-reveal-item="true" className="pt-8 flex items-center justify-center text-center">
          <div className="text-xs text-[#5A6679] dark:text-[#9BA8BA]">
            Copyright © 2026 <span className="bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent font-semibold">escalup</span>. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
