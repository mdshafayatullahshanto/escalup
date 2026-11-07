// src/components/Footer.jsx
// Footer matching exact navigation order and 7 core services.
// Navigation links: Home, Services, Process, Offshore Model, Portfolio, About, Contact, FAQ.
// Includes Data Security & Client Environment, founder credit, and contact information intact.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, ChevronDown, Check, Mail, Phone, MapPin } from 'lucide-react';
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
    <footer className="bg-white dark:bg-[#070B0E] text-[#111827] dark:text-[#F3F5FA] pt-16 sm:pt-20 pb-12 border-t border-[#E2E6EE] dark:border-white/10 transition-colors font-sans">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Top: 4 Link Columns Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-[#E2E6EE] dark:border-white/10">
          
          {/* Column 1: Services (All 7 in exact order) */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111827] dark:text-white">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <UnderlineLink
                    to={`/services/${s.slug}`}
                    color="muted"
                    className="block py-0.5"
                  >
                    0{s.id}. {s.title}
                  </UnderlineLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Navigation Links (Matching navbar order) */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111827] dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <UnderlineLink href="#home" onClick={(e) => handleNavClick(e, '#home')} color="muted">
                  Home
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#services" onClick={(e) => handleNavClick(e, '#services')} color="muted">
                  Services
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#process" onClick={(e) => handleNavClick(e, '#process')} color="muted">
                  Process (Design Approach)
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#offshore-model" onClick={(e) => handleNavClick(e, '#offshore-model')} color="muted">
                  Offshore Model
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} color="muted">
                  Portfolio
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#about" onClick={(e) => handleNavClick(e, '#about')} color="muted">
                  About
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#contact" onClick={handleQuoteClick} color="muted">
                  Contact
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#faq" onClick={(e) => handleNavClick(e, '#faq')} color="muted">
                  FAQ
                </UnderlineLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Data Security & Governance */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111827] dark:text-white">
              Data Security & Standards
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <UnderlineLink href="#data-security" onClick={(e) => handleNavClick(e, '#data-security')} color="muted">
                  Data Security & Client Environment
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#data-security" onClick={(e) => handleNavClick(e, '#data-security')} color="muted">
                  Microsoft 365 Architecture
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#offshore-model" onClick={(e) => handleNavClick(e, '#offshore-model')} color="muted">
                  Mutual NDA & Client IP Ownership
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#services" onClick={(e) => handleNavClick(e, '#services')} color="muted">
                  International Standards Applied
                </UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#process" onClick={(e) => handleNavClick(e, '#process')} color="muted">
                  9-Step Design Approach
                </UnderlineLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Leadership */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111827] dark:text-white">
              Office & Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0070AD] shrink-0 mt-0.5" />
                <span>Sector 10, Uttara, Dhaka-1230</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0070AD] shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:underline text-[#111827] dark:text-white">
                  {companyData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0070AD] shrink-0" />
                <a href={`tel:${companyData.contact.phone}`} className="hover:underline text-[#111827] dark:text-white">
                  {companyData.contact.phone}
                </a>
              </div>
              <div className="pt-2 text-xs">
                <span>Led by </span>
                <span className="text-[#111827] dark:text-white">
                  <em><strong>Md. Shafayat Ullah Shanto</strong></em>
                </span>
                <span className="block text-[11px] text-[#5A6679]">Founder & Lead Mechanical Engineer</span>
              </div>
            </div>
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
              <span>Location: Dhaka</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${locationOpen ? 'rotate-180' : ''}`} />
            </button>

            {locationOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-64 p-3 rounded-2xl bg-white dark:bg-[#151D26] border border-[#D8DFEB] dark:border-white/10 shadow-xl text-xs space-y-1.5 z-20">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#5A6679] dark:text-[#9BA8BA] px-2">
                  Operating Engineering Center
                </div>
                <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-[#EEF2F8] dark:bg-[#1E2833] font-medium text-[#111827] dark:text-white">
                  <span>Dhaka, Sector 10, Uttara</span>
                  <Check className="w-3.5 h-3.5 text-[#0070AD]" />
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
          <div className="text-xs text-[#5A6679] dark:text-[#9BA8BA]">
            Copyright © 2026 escalup. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
