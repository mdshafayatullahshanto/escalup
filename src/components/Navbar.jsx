// src/components/Navbar.jsx
// Navigation Bar strictly ordered:
// Home, Services, Process, Offshore Model, Portfolio, About, Contact, FAQ.
// Morphic header with circular hamburger, logo, center pill nav, theme switcher, and Ask Escalup modal.

import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  Sun, 
  Moon, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { companyData } from '../data/company';
import AskEscalupModal from './AskEscalupModal';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'process', label: 'Process', href: '#process' },
  { id: 'offshore-model', label: 'Offshore Model', href: '#offshore-model' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
];

const MEGA_PANEL_DATA = {
  'home': {
    title: 'Offshore Engineering Services',
    subtitle: 'Mechanical Design, BIM and MEP Design support for international clients.',
    panels: [
      {
        title: 'Company Positioning',
        links: [
          { label: 'Offshore Extension of Your Team', href: '#offshore-model' },
          { label: 'Mechanical, BIM & MEP Support', href: '#services' },
          { label: 'Technology & AI-Driven Focus', href: '#about' },
          { label: 'Microsoft 365 Data Security', href: '#data-security' }
        ]
      },
      {
        title: 'Engagement Overview',
        links: [
          { label: 'Native Parametric CAD Files', href: '#services' },
          { label: 'Client Corporate Drawing Format', href: '#services' },
          { label: 'Strict Mutual NDA Governance', href: '#offshore-model' },
          { label: 'Client Owns All Project IP', href: '#offshore-model' }
        ]
      }
    ]
  },
  'services': {
    title: 'Engineering Services',
    subtitle: 'Comprehensive Mechanical, CAD, DFMA, Standards, PLM, Project Management, and BIM/MEP.',
    panels: [
      {
        title: 'Mechanical & Production',
        links: [
          { label: '1. Mechanical Design & Product Development', to: '/services/mechanical-design-product-development' },
          { label: '2. CAD, Parametric Modeling & Simulation', to: '/services/cad-parametric-modeling-simulation' },
          { label: '3. Design for Manufacturing & Production Engineering', to: '/services/dfma-production-engineering' },
          { label: '4. Engineering Standards, GD&T & Quality', to: '/services/engineering-standards-gdt-quality' }
        ]
      },
      {
        title: 'Digital, PM & BIM',
        links: [
          { label: '5. PLM, Digital Engineering & Automation', to: '/services/plm-digital-engineering-automation' },
          { label: '6. Engineering Project Management & Offshore Support', to: '/services/project-management-offshore-support' },
          { label: '7. BIM & MEP Design Engineering', to: '/services/bim-mep-design-engineering' },
          { label: 'View Standards Summary Table', href: '#services' }
        ]
      }
    ]
  },
  'process': {
    title: 'Design Approach',
    subtitle: 'A structured 9-step engineering design methodology built on precision, thorough analysis, and iterative refinement.',
    panels: [
      {
        title: 'Phase 1: Concept to Analysis',
        links: [
          { label: '1. Requirements & Scope', href: '#process' },
          { label: '2. Concept Design', href: '#process' },
          { label: '3. CAD / BIM Modeling', href: '#process' },
          { label: '4. Engineering Calculations & Analysis', href: '#process' },
          { label: '5. Detailed Drawings, GD&T & BOM', href: '#process' }
        ]
      },
      {
        title: 'Phase 2: Review to Handover',
        links: [
          { label: '6. Review, Simulation & Coordination', href: '#process' },
          { label: '7. Client Approval', href: '#process' },
          { label: '8. Manufacturing / Construction Support', href: '#process' },
          { label: '9. Feedback, Change Management & Continuous Improvement', href: '#process' }
        ]
      }
    ]
  },
  'offshore-model': {
    title: 'Offshore Engineering Support',
    subtitle: 'A dedicated engineering partner for your mechanical, BIM and MEP design work.',
    panels: [
      {
        title: 'Delivery & Governance',
        links: [
          { label: 'Project-Based & Dedicated Support', href: '#offshore-model' },
          { label: '7-Stage Project Workflow', href: '#offshore-model' },
          { label: 'Technical Communication & Single POC', href: '#offshore-model' },
          { label: 'Tracked Version-Controlled Revisions', href: '#offshore-model' }
        ]
      },
      {
        title: 'Data Security & Environment',
        links: [
          { label: 'Microsoft 365 (SharePoint & OneDrive)', href: '#data-security' },
          { label: 'Entra ID & Multi-Factor Authentication', href: '#data-security' },
          { label: 'BitLocker & Defender Protected Devices', href: '#data-security' },
          { label: 'Work in Client Secure Platform & VPN', href: '#data-security' }
        ]
      }
    ]
  },
  'portfolio': {
    title: 'Engineering Portfolio',
    subtitle: 'Representative engineering deliverables across Mechanical, MEP, BIM, and PLM.',
    panels: [
      {
        title: 'Case Insights',
        links: [
          { label: 'Conveyor & Packaging Cell Kinematics', href: '#portfolio' },
          { label: 'Hospital Commercial HVAC & Plumbing LOD 400', href: '#portfolio' },
          { label: 'High-Volume Precision Sheet Metal Enclosures', href: '#portfolio' },
          { label: 'Turbine Housing Drawing Border Migration', href: '#portfolio' }
        ]
      },
      {
        title: 'Verified Results',
        links: [
          { label: 'Mechanical Solid Modeling', href: '#portfolio' },
          { label: 'MEP BIM Coordination', href: '#portfolio' },
          { label: 'DFMA & Tooling Detailing', href: '#portfolio' },
          { label: 'PLM Vault Data Governance', href: '#portfolio' }
        ]
      }
    ]
  },
  'about': {
    title: 'About Escalup',
    subtitle: 'Offshore engineering services led by Md. Shafayat Ullah Shanto.',
    panels: [
      {
        title: 'Company Leadership',
        links: [
          { label: 'Md. Shafayat Ullah Shanto (Founder)', href: '#about' },
          { label: 'Multidisciplinary Engineering Background', href: '#about' },
          { label: 'Digital Engineering & AI Workflows', href: '#about' },
          { label: 'Scaling Project Capacity', href: '#about' }
        ]
      },
      {
        title: 'Operating Principles',
        links: [
          { label: 'Applied International Standards', href: '#services' },
          { label: 'Client Drawing Formats & Borders', href: '#services' },
          { label: 'Mutual NDA & Full IP Ownership', href: '#about' },
          { label: 'Microsoft 365 Data Security', href: '#data-security' }
        ]
      }
    ]
  },
  'contact': {
    title: 'Contact Escalup',
    subtitle: 'Share your project requirements for a formal proposed scope.',
    panels: [
      {
        title: 'Get In Touch',
        links: [
          { label: 'Schedule an Engineering Intro Call', href: companyData.contact.calendlyUrl },
          { label: 'Submit Scope & RFQ Form', href: '#contact' },
          { label: 'Email: contact.escalup@gmail.com', href: `mailto:${companyData.contact.email}` },
          { label: 'Location: Sector 10, Uttara, Dhaka-1230', href: '#contact' }
        ]
      }
    ]
  },
  'faq': {
    title: 'Frequently Asked Questions',
    subtitle: 'Answers to key technical, data security, and operational questions.',
    panels: [
      {
        title: 'Key Technical Inquiries',
        links: [
          { label: 'Reducing Late Design Changes', href: '#faq' },
          { label: 'Working with Legacy Parts & Neutral Formats', href: '#faq' },
          { label: 'DFMA & Manufacturing Review', href: '#faq' },
          { label: 'Tolerancing, GD&T & Fit Issues', href: '#faq' }
        ]
      },
      {
        title: 'Data & Coordination',
        links: [
          { label: 'PLM, BOM & Revision Control', href: '#faq' },
          { label: 'Data Security in Microsoft Environment', href: '#faq' },
          { label: 'MEP BIM Clash Coordination', href: '#faq' }
        ]
      }
    ]
  }
};

export default function Navbar({ onOpenCalendly }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);
  const [askModalOpen, setAskModalOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState('services');
  const [mobileExpandedSection, setMobileExpandedSection] = useState('services');
  
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const overlayRef = useRef(null);

  // Monitor scroll depth
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOverlayOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOverlayOpen]);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOverlayOpen) {
        setMenuOverlayOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOverlayOpen]);

  // Close menus on route change
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMenuOverlayOpen(false);
    setAskModalOpen(false);
  }

  const handleNavClick = (e, href) => {
    if (e && e.preventDefault) e.preventDefault();
    setMenuOverlayOpen(false);

    if (location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + href);
    }
  };

  const handleQuoteClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setMenuOverlayOpen(false);
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#contact');
    }
  };

  const activeContent = MEGA_PANEL_DATA[activeMenuId] || MEGA_PANEL_DATA['services'];

  return (
    <>
      {/* 1. TOP FLOATING HEADER BAR */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 py-3.5 sm:py-4 ${
          scrolled
            ? 'bg-white/85 dark:bg-[#080C0F]/85 backdrop-blur-md shadow-sm border-b border-[#E2E6EE] dark:border-white/10'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          
          {/* LEFT: Circular White Hamburger [ ≡ ] + Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setMenuOverlayOpen(!menuOverlayOpen)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-black shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group border border-black/5"
              aria-label={menuOverlayOpen ? 'Close navigation overlay' : 'Open navigation overlay'}
              title="Menu"
            >
              {menuOverlayOpen ? (
                <X className="w-5 h-5 text-black" />
              ) : (
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span className="w-4 h-[2px] bg-black rounded-full transition-transform group-hover:scale-x-110"></span>
                  <span className="w-4 h-[2px] bg-black rounded-full transition-transform"></span>
                  <span className="w-4 h-[2px] bg-black rounded-full transition-transform group-hover:scale-x-110"></span>
                </div>
              )}
            </button>

            {/* Brand Logo: "Escalup" */}
            <Link
              to="/"
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="Escalup home"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0070AD] border border-white/40 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                e
              </div>
              <span
                className={`text-xl sm:text-2xl font-bold tracking-tight font-sans transition-colors duration-300 ${
                  scrolled
                    ? 'text-[#111827] dark:text-white'
                    : 'text-white'
                }`}
              >
                escalup
              </span>
            </Link>
          </div>

          {/* CENTER: Floating Capsule Nav Pill (Strict 8 Items in Exact Order) */}
          <nav
            className={`hidden xl:flex items-center gap-4 2xl:gap-6 px-6 py-2.5 rounded-full transition-all duration-300 text-xs font-semibold tracking-wide ${
              scrolled
                ? 'bg-white/95 dark:bg-[#11161B]/95 text-[#111827] dark:text-[#F3F5FA] border border-[#E2E6EE] dark:border-white/10 shadow-card backdrop-blur-md'
                : 'bg-white/15 dark:bg-black/35 text-white border border-white/20 shadow-xl backdrop-blur-md'
            }`}
          >
            {NAV_ITEMS.map((item, index) => (
              <React.Fragment key={item.id}>
                {index > 0 && (
                  <span className={`w-1 h-1 rounded-full ${scrolled ? 'bg-[#9BA8BA]' : 'bg-white/40'}`} />
                )}
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="hover:text-[#0070AD] dark:hover:text-[#38BDF8] transition-colors cursor-pointer whitespace-nowrap"
                >
                  {item.label}
                </a>
              </React.Fragment>
            ))}
          </nav>

          {/* RIGHT: [ Ask Escalup ] CTA + Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Theme switcher */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-md ${
                scrolled
                  ? 'bg-[#EEF2F8] dark:bg-[#151C24] text-[#111827] dark:text-white border border-[#D8DFEB] dark:border-white/10'
                  : 'bg-black/40 hover:bg-black/60 border border-white/20 text-white'
              }`}
              title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? <Sun className="w-4 h-4 text-[#F3BA2F]" /> : <Moon className="w-4 h-4 text-[#111827] dark:text-white" />}
            </button>

            {/* Ask Escalup Modal Trigger */}
            <button
              onClick={() => setAskModalOpen(true)}
              className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer border border-white/10 group hover:border-[#0070AD]/60"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0070AD] dark:text-[#38BDF8] group-hover:rotate-12 transition-transform shrink-0" />
              <span className="hidden xs:inline">Ask Escalup</span>
              <span className="xs:hidden">Ask</span>
            </button>

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={handleQuoteClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0070AD] hover:bg-[#005c8f] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </header>

      {/* 2. FULL-SCREEN SPLIT MEGA MENU OVERLAY */}
      <AnimatePresence>
        {menuOverlayOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            className="fixed inset-0 z-50 flex flex-col md:flex-row bg-[#EEF2F8] dark:bg-[#0A0E13] text-[#111827] dark:text-[#F3F5FA] overflow-hidden"
          >
            {/* LEFT COLUMN: Lavender rail with active indicator */}
            <div className="w-full md:w-[320px] lg:w-[360px] xl:w-[400px] shrink-0 bg-[#EEF2F8] dark:bg-[#101720] border-r border-[#D8DFEB] dark:border-white/10 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
              
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between pb-8">
                  <button
                    onClick={() => setMenuOverlayOpen(false)}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-black shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer border border-[#D8DFEB]"
                    aria-label="Close navigation"
                    title="Close"
                  >
                    <X className="w-5 h-5 text-black" />
                  </button>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#0070AD] flex items-center justify-center text-white text-xs font-bold">
                      e
                    </div>
                    <span className="font-bold text-lg tracking-tight text-[#111827] dark:text-white">
                      escalup
                    </span>
                  </div>
                </div>

                {/* Primary Navigation List (Strict 8 Items in Exact Order) */}
                <nav className="space-y-1" aria-label="Main Navigation">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeMenuId === item.id;
                    return (
                      <div key={item.id} className="relative">
                        {isActive && (
                          <motion.div
                            layoutId="activeMegaIndicator"
                            className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0070AD] rounded-r"
                          />
                        )}

                        <button
                          onClick={() => {
                            setActiveMenuId(item.id);
                            setMobileExpandedSection(mobileExpandedSection === item.id ? null : item.id);
                          }}
                          onMouseEnter={() => setActiveMenuId(item.id)}
                          className={`w-full text-left px-5 py-3 rounded-r-2xl transition-all flex items-center justify-between text-base lg:text-lg font-medium cursor-pointer ${
                            isActive
                              ? 'bg-white dark:bg-[#1A232E] text-[#111827] dark:text-white font-bold shadow-sm'
                              : 'text-[#5A6679] dark:text-[#9BA8BA] hover:text-[#111827] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
                          }`}
                        >
                          <span>{item.label}</span>
                          <span className="md:hidden">
                            <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === item.id ? 'rotate-180' : ''}`} />
                          </span>
                        </button>

                        {/* Mobile Accordion (<768px) */}
                        <div className="md:hidden">
                          <AnimatePresence>
                            {mobileExpandedSection === item.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 pr-2 py-3 space-y-3 bg-white/70 dark:bg-[#151D26] rounded-xl my-1 border border-[#D8DFEB] dark:border-white/10"
                              >
                                {MEGA_PANEL_DATA[item.id]?.panels.map((panel, pIdx) => (
                                  <div key={pIdx} className="space-y-1">
                                    <h4 className="text-xs font-bold text-[#0070AD] uppercase tracking-wider">
                                      {panel.title}
                                    </h4>
                                    <ul className="space-y-1 text-xs">
                                      {panel.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                          {link.to ? (
                                            <Link
                                              to={link.to}
                                              onClick={() => setMenuOverlayOpen(false)}
                                              className="block py-1 text-[#5A6679] hover:text-[#111827] dark:text-[#9BA8BA] dark:hover:text-white"
                                            >
                                              {link.label}
                                            </Link>
                                          ) : (
                                            <a
                                              href={link.href}
                                              onClick={(e) => handleNavClick(e, link.href)}
                                              className="block py-1 text-[#5A6679] hover:text-[#111827] dark:text-[#9BA8BA] dark:hover:text-white"
                                            >
                                              {link.label}
                                            </a>
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                      </div>
                    );
                  })}
                </nav>

                <div className="my-6 border-b border-[#D8DFEB] dark:border-white/10" />

                <div className="px-4">
                  <a
                    href="#contact"
                    onClick={handleQuoteClick}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0070AD] hover:underline"
                  >
                    <span>Contact & Proposed Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bottom Social */}
              <div className="pt-6 border-t border-[#D8DFEB] dark:border-white/10 flex items-center gap-3 px-4 text-[#5A6679] dark:text-[#9BA8BA]">
                <a
                  href={companyData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#1A232E] border border-[#D8DFEB] dark:border-white/10 flex items-center justify-center hover:text-[#0070AD] hover:scale-105 transition-all"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <span className="text-xs text-[#5A6679] dark:text-[#9BA8BA]">
                  Sector 10, Uttara, Dhaka-1230
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: Desktop Content Panels */}
            <div className="hidden md:flex flex-1 flex-col justify-between p-8 lg:p-12 xl:p-16 overflow-y-auto bg-white dark:bg-[#0E1318]">
              <div className="max-w-5xl">
                <div className="mb-8">
                  <span className="text-xs font-semibold text-[#0070AD] uppercase tracking-wider block mb-2">
                    Section Overview
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-light text-[#111827] dark:text-white tracking-tight">
                    {activeContent.title}
                  </h3>
                  <p className="text-sm text-[#5A6679] dark:text-[#9BA8BA] mt-2 max-w-2xl leading-relaxed">
                    {activeContent.subtitle}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {activeContent.panels.map((panel, idx) => (
                    <div
                      key={idx}
                      className="p-6 lg:p-8 rounded-3xl bg-[#F6F7FB] dark:bg-[#141B24] border border-[#E2E6EE] dark:border-white/10 space-y-4"
                    >
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111827] dark:text-white">
                        {panel.title}
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm">
                        {panel.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            {link.to ? (
                              <Link
                                to={link.to}
                                onClick={() => setMenuOverlayOpen(false)}
                                className="block py-1 text-[#475569] dark:text-[#9BA8BA] hover:text-[#0070AD] dark:hover:text-[#38BDF8] transition-colors"
                              >
                                {link.label}
                              </Link>
                            ) : (
                              <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="block py-1 text-[#475569] dark:text-[#9BA8BA] hover:text-[#0070AD] dark:hover:text-[#38BDF8] transition-colors"
                              >
                                {link.label}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-8 border-t border-[#E2E6EE] dark:border-white/10 flex items-center justify-between text-xs text-[#5A6679] dark:text-[#9BA8BA]">
                <span>Escalup Offshore Engineering Services</span>
                <button
                  onClick={() => {
                    setMenuOverlayOpen(false);
                    if (onOpenCalendly) onOpenCalendly();
                  }}
                  className="font-semibold text-[#0070AD] hover:underline cursor-pointer"
                >
                  Schedule an Engineering Intro Call →
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. ASK ESCALUP MODAL */}
      <AskEscalupModal
        isOpen={askModalOpen}
        onClose={() => setAskModalOpen(false)}
      />
    </>
  );
}
