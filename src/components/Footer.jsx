// /src/components/Footer.jsx
// Modern engineering footer with dark background, full service directory, regions, and contact specs

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Globe 
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import Logo from './Logo';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';

export default function Footer({ onOpenCalendly }) {
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
    <footer className="bg-[#142F2C] text-white pt-16 pb-28 sm:pb-24 lg:pb-12 border-t border-[#1D4C47] relative">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="md" />
            
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              Offshore engineering support for global teams. We deliver Mechanical, Product and MEP design support with clear communication and production-ready documentation.
            </p>

            <div className="pt-2 text-xs text-white/60 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2E756E]" />
                <span>{companyData.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2E756E]" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                  {companyData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#2E756E]" />
                <span>Monday – Friday | 10:00 – 19:00 BST (UTC+6)</span>
              </div>
            </div>

            {/* Social & Certs */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyData.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#2E756E] border border-white/10 text-white flex items-center justify-center transition-colors"
                aria-label="escalup on LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <div className="text-[11px] text-white/60 flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mutual NDA Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-white hover:underline transition-colors block truncate"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Engagement (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#offshore-model" onClick={(e) => handleNavClick(e, '#offshore-model')} className="hover:text-white transition-colors">
                  Offshore Model
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="hover:text-white transition-colors">
                  6-Step Process
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-white transition-colors">
                  Sample Projects
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">
                  About escalup
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-white transition-colors">
                  FAQ & Turnaround
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-white transition-colors">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Regions & Rapid CTAs (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Global Client Coverage
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Building engineering partnerships and delivering design solutions for clients across international markets.
            </p>

            <div className="space-y-2 pt-2">
              <button
                onClick={onOpenCalendly}
                className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
              >
                <span>Book 30-Min Intro Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center sm:text-left">
          <div>
            © {currentYear} escalup. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1">
            <span>Mechanical & CAD Design</span>
            <span className="hidden sm:inline">·</span>
            <span>MEP & BIM Coordination</span>
            <span className="hidden sm:inline">·</span>
            <span>Offshore Engineering Services</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
