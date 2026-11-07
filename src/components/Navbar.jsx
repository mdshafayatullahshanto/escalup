// src/components/Navbar.jsx
// 100% faithful replication of the modern Infosys header & side-menu overlay architecture:
// 1. Top bar: Left circular hamburger [ ≡ ], brand logo, center translucent blurred pill nav (morphs to white pill on scroll), right dark pill CTA ("Ask escalup").
// 2. Full-screen side-menu overlay: Left lavender rail (#EEF2F8) with active blue bar & white highlighted row, right 2-3 column light-blue rounded panels.
// 3. Mobile view: Stacked accordion-style drawer with smooth height expand/collapse.

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
import { LinkedInIcon, TwitterIcon, FacebookIcon, YoutubeIcon } from './Icons';
import { companyData } from '../data/company';
import AskEscalupModal from './AskEscalupModal';
import { useTheme } from '../context/ThemeContext';

const MEGA_MENU_ITEMS = [
  { id: 'navigate-next', label: 'Navigate your next' },
  { id: 'industries', label: 'Industries' },
  { id: 'services', label: 'Services' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'about-us', label: 'About Us' },
];

const MEGA_MENU_DATA = {
  'navigate-next': {
    title: 'Navigate Your Next',
    subtitle: 'Enterprise transformation framework for global engineering directors and procurement heads.',
    panels: [
      {
        title: 'Capacity & Agility',
        links: [
          { label: 'Scale CAD Capacity On-Demand', href: '#navigate-next' },
          { label: '50–70% Cost Efficiency vs Onshore Rates', href: '#navigate-next' },
          { label: 'Zero Long-Term Payroll Liabilities', href: '#navigate-next' },
          { label: 'Flexible Monthly FTE or Project Basis', href: '#offshore-model' }
        ]
      },
      {
        title: 'Multi-Discipline Clash Sync',
        links: [
          { label: 'Navisworks Spatial Clash Matrix', href: '#navigate-next' },
          { label: 'ASME Y14.5 GD&T Precision Detailing', href: '#services' },
          { label: 'Revit MEP LOD 300–400 Assemblies', href: '#services' },
          { label: 'Pre-Construction Clash Resolution Logs', href: '#projects' }
        ]
      },
      {
        title: 'Native CAD Integrity',
        links: [
          { label: '100% Parametric Feature Tree Guarantee', href: '#navigate-next' },
          { label: 'Conforms to Client Title Blocks & Layers', href: '#services' },
          { label: 'Multi-Level Indented BOMs for ERP Import', href: '#services' },
          { label: 'ECN / ECO Engineering Change Governance', href: '#navigate-next' }
        ]
      },
      {
        title: 'Global Delivery Alignment',
        links: [
          { label: 'Dhaka Center of Excellence (BST, UTC+6)', href: '#offshore-model' },
          { label: 'Direct Morning Overlap with Western Europe', href: '#offshore-model' },
          { label: 'North America Overnight Turnaround Sprints', href: '#offshore-model' },
          { label: 'Fluent Technical English Collaboration', href: '#about' }
        ]
      }
    ]
  },
  'industries': {
    title: 'Industries We Serve',
    subtitle: 'Specialized CAD, BIM, and drafting support tailored to your sector standards.',
    panels: [
      {
        title: 'Industrial Equipment & Machinery',
        links: [
          { label: 'Packaging & Automated Material Handling', href: '#industries' },
          { label: 'Custom Special Purpose Machinery (SPM)', href: '#industries' },
          { label: 'Robotic Welding & Assembly Cells', href: '#industries' },
          { label: 'Structural Skids & Frame Assemblies', href: '#services' }
        ]
      },
      {
        title: 'Building Systems & MEP Contractors',
        links: [
          { label: 'Commercial HVAC Ductwork & Piping', href: '#industries' },
          { label: 'Plumbing & Stormwater Drainage Systems', href: '#industries' },
          { label: 'Fire Suppression & Sprinkler Layouts', href: '#industries' },
          { label: 'Prefabrication Spool & Shop Drawings', href: '#services' }
        ]
      },
      {
        title: 'Hardware Innovators & Startups',
        links: [
          { label: 'Injection Molded Plastic Enclosures', href: '#industries' },
          { label: 'Precision Sheet Metal Electronics Chassis', href: '#industries' },
          { label: 'Kinematic Synthesis & Mechanism Prototyping', href: '#services' },
          { label: 'DFMA Reviews for Volume Production', href: '#services' }
        ]
      },
      {
        title: 'Consultancies & Architecture Firms',
        links: [
          { label: 'Overflow Drafting Packages on 48h Notice', href: '#industries' },
          { label: 'As-Built 2D to 3D Parametric CAD Conversion', href: '#services' },
          { label: 'Scan to BIM Point Cloud Modeling', href: '#services' },
          { label: 'Multi-Discipline Drawing Border Standardization', href: '#services' }
        ]
      }
    ]
  },
  'services': {
    title: 'Engineering Services',
    subtitle: 'Comprehensive Mechanical, Product Design, MEP, and Production Detailing.',
    panels: [
      {
        title: 'Mechanical Design & CAD',
        links: [
          { label: 'SolidWorks 3D Parametric Modeling', to: '/services/mechanical-design-cad' },
          { label: 'Siemens NX Complex Solid Modeling', to: '/services/mechanical-design-cad' },
          { label: 'Autodesk Inventor Assembly Engineering', to: '/services/mechanical-design-cad' },
          { label: 'Kinematic & Dynamic Mechanism Simulation', to: '/services/mechanical-design-cad' },
          { label: 'Reverse Engineering from 3D Point Clouds', to: '/services/mechanical-design-cad' }
        ]
      },
      {
        title: 'MEP Design & BIM Coordination',
        links: [
          { label: 'Autodesk Revit MEP LOD 300–400 Modeling', to: '/services/mep-design-bim' },
          { label: 'Navisworks Spatial Clash Detection', to: '/services/mep-design-bim' },
          { label: 'HVAC Duct & Pipe Sizing (Carrier HAP)', to: '/services/mep-design-bim' },
          { label: 'Plumbing & Public Health Engineering', to: '/services/mep-design-bim' },
          { label: 'Fire Protection & NFPA Code Layouts', to: '/services/mep-design-bim' }
        ]
      },
      {
        title: 'DFMA & Production Detailing',
        links: [
          { label: 'ASME Y14.5M Geometric Dimensioning (GD&T)', to: '/services/dfma-production-detailing' },
          { label: 'Sheet Metal Flat Patterns & Bend Tables', to: '/services/dfma-production-detailing' },
          { label: 'Tooling, Jigs & Fixture Fabrication Prints', to: '/services/dfma-production-detailing' },
          { label: 'CNC & CAM Toolpath Manufacturing Prep', to: '/services/dfma-production-detailing' },
          { label: 'Weldment & Structural Detail Drafting', to: '/services/dfma-production-detailing' }
        ]
      },
      {
        title: 'PLM, BOM & Engineering Data',
        links: [
          { label: 'Siemens Teamcenter & Autodesk Vault PDM', to: '/services/plm-bom-engineering-data' },
          { label: 'Multi-Level Indented Bills of Materials (BOM)', to: '/services/plm-bom-engineering-data' },
          { label: 'Engineering Change Notices (ECN/ECO)', to: '/services/plm-bom-engineering-data' },
          { label: 'Title Block & Drawing Layer Standardization', to: '/services/plm-bom-engineering-data' },
          { label: 'ISO 9001 Quality Control Check Gates', to: '/services/plm-bom-engineering-data' }
        ]
      }
    ]
  },
  'platforms': {
    title: 'Software Platforms & Standards',
    subtitle: 'Native engineering file integrity conforming to international compliance codes.',
    panels: [
      {
        title: 'Autodesk Ecosystem',
        links: [
          { label: 'Autodesk Revit (Architecture & MEP)', href: '#tools' },
          { label: 'Navisworks Manage (Clash Detective)', href: '#tools' },
          { label: 'AutoCAD & AutoCAD MEP Detailing', href: '#tools' },
          { label: 'Autodesk Inventor Professional CAD', href: '#tools' }
        ]
      },
      {
        title: 'Parametric Solid Modeling',
        links: [
          { label: 'Dassault Systèmes SolidWorks', href: '#tools' },
          { label: 'Siemens NX (Unigraphics) CAD', href: '#tools' },
          { label: 'PTC Creo Parametric Solid Modeling', href: '#tools' },
          { label: 'Mastercam & CAM Preparation', href: '#tools' }
        ]
      },
      {
        title: 'Codes & Compliance Standards',
        links: [
          { label: 'ASME Y14.5M GD&T Dimensioning', href: '#about' },
          { label: 'ISO 1101 & ISO 9001 Quality Gates', href: '#about' },
          { label: 'ASHRAE 90.1 Energy Standards', href: '#about' },
          { label: 'BIM Forum Level of Development (LOD 350-400)', href: '#about' }
        ]
      }
    ]
  },
  'about-us': {
    title: 'About escalup',
    subtitle: 'High-precision offshore engineering partner operating from Dhaka (BST, UTC+6).',
    panels: [
      {
        title: 'Global Delivery Engine',
        links: [
          { label: 'Dhaka Engineering Center (BST, UTC+6)', href: '#about' },
          { label: 'Synchronous Live Overlap & Overnights', href: '#offshore-model' },
          { label: '6-Gate Quality Review Framework', href: '#process' },
          { label: 'Dedicated Named Principal Drafters', href: '#about' }
        ]
      },
      {
        title: 'Trust & Governance',
        links: [
          { label: 'Strict Mutual NDA Signed Before Kickoff', href: '#contact' },
          { label: 'Client Owns 100% of IP & Native CAD Files', href: '#about' },
          { label: 'Secure Cloud Vault File Exchange', href: '#about' },
          { label: 'Guaranteed 24-Hour Scope & Quote Turnaround', href: '#contact' }
        ]
      },
      {
        title: 'Commercial Models',
        links: [
          { label: 'Project-Based Fixed Price Delivery', href: '#offshore-model' },
          { label: 'Dedicated Monthly Offshore FTE Retainer', href: '#offshore-model' },
          { label: 'Flexible Hourly Engineering Buckets', href: '#offshore-model' },
          { label: 'Low-Risk 40-Hour Paid Pilot Project', href: '#pilot' }
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
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (menuOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
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

  const activeContent = MEGA_MENU_DATA[activeMenuId] || MEGA_MENU_DATA['services'];

  return (
    <>
      {/* ======================================================== */}
      {/* 1. TOP INFOSYS FLOATING HEADER BAR                       */}
      {/* ======================================================== */}
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
            
            {/* Infosys Circular White Hamburger Button */}
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

            {/* Brand Logo: "escalup" */}
            <Link
              to="/"
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="escalup home"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0070AD] dark:bg-[#2E756E] border border-white/40 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
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

          {/* CENTER: Floating Capsule Nav Pill (Morphic on Scroll) */}
          <nav
            className={`hidden lg:flex items-center gap-6 xl:gap-8 px-6 py-2.5 rounded-full transition-all duration-300 text-xs font-semibold tracking-wide ${
              scrolled
                ? 'bg-white/95 dark:bg-[#11161B]/95 text-[#111827] dark:text-[#F3F5FA] border border-[#E2E6EE] dark:border-white/10 shadow-card backdrop-blur-md'
                : 'bg-white/15 dark:bg-black/35 text-white border border-white/20 shadow-xl backdrop-blur-md'
            }`}
          >
            <a
              href="#navigate-next"
              onClick={(e) => handleNavClick(e, '#navigate-next')}
              className="hover:text-[#0070AD] dark:hover:text-[#14F3C1] transition-colors cursor-pointer"
            >
              Navigate your next
            </a>

            <span className={`w-1 h-1 rounded-full ${scrolled ? 'bg-[#9BA8BA]' : 'bg-white/40'}`}></span>

            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="hover:text-[#0070AD] dark:hover:text-[#14F3C1] transition-colors cursor-pointer"
            >
              Services
            </a>

            <span className={`w-1 h-1 rounded-full ${scrolled ? 'bg-[#9BA8BA]' : 'bg-white/40'}`}></span>

            <a
              href="#industries"
              onClick={(e) => handleNavClick(e, '#industries')}
              className="hover:text-[#0070AD] dark:hover:text-[#14F3C1] transition-colors cursor-pointer"
            >
              Industries
            </a>

            <span className={`w-1 h-1 rounded-full ${scrolled ? 'bg-[#9BA8BA]' : 'bg-white/40'}`}></span>

            <a
              href="#offshore-model"
              onClick={(e) => handleNavClick(e, '#offshore-model')}
              className="hover:text-[#0070AD] dark:hover:text-[#14F3C1] transition-colors cursor-pointer"
            >
              Delivery Model
            </a>

            <span className={`w-1 h-1 rounded-full ${scrolled ? 'bg-[#9BA8BA]' : 'bg-white/40'}`}></span>

            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="hover:text-[#0070AD] dark:hover:text-[#14F3C1] transition-colors cursor-pointer"
            >
              Case Studies
            </a>
          </nav>

          {/* RIGHT: [ ✦ Ask escalup ] Dark Pill + Theme Toggle */}
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

            {/* Infosys Signature Dark Pill CTA: [ ✦ Ask escalup ] */}
            <button
              onClick={() => setAskModalOpen(true)}
              className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer border border-white/10 group hover:border-[#0070AD]/60"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0070AD] dark:text-[#14F3C1] group-hover:rotate-12 transition-transform shrink-0" />
              <span className="hidden xs:inline">Ask escalup</span>
              <span className="xs:hidden">Ask</span>
            </button>

            {/* Quick Quote Shortcut */}
            <a
              href="#contact"
              onClick={handleQuoteClick}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0070AD] hover:bg-[#005c8f] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <span>Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

          </div>

        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. FULL-SCREEN INFOSYS SPLIT MEGA MENU OVERLAY           */}
      {/* ======================================================== */}
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
            {/* ---------------------------------------------------- */}
            {/* LEFT COLUMN: Lavender rail with active indicator     */}
            {/* ---------------------------------------------------- */}
            <div className="w-full md:w-[320px] lg:w-[360px] xl:w-[400px] shrink-0 bg-[#EEF2F8] dark:bg-[#101720] border-r border-[#D8DFEB] dark:border-white/10 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
              
              <div>
                {/* Header Row: Close (X) circular button + Brand text */}
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

                {/* Primary Navigation List with Left Blue Indicator */}
                <nav className="space-y-1.5" aria-label="Main Sections">
                  {MEGA_MENU_ITEMS.map((item) => {
                    const isActive = activeMenuId === item.id;
                    return (
                      <div key={item.id} className="relative">
                        {/* Blue active vertical bar */}
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
                          className={`w-full text-left px-5 py-3.5 rounded-r-2xl transition-all flex items-center justify-between text-base lg:text-lg font-medium cursor-pointer ${
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

                        {/* Mobile Accordion Content (<768px) */}
                        <div className="md:hidden">
                          <AnimatePresence>
                            {mobileExpandedSection === item.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 pr-2 py-3 space-y-3 bg-white/70 dark:bg-[#151D26] rounded-xl my-1 border border-[#D8DFEB] dark:border-white/10"
                              >
                                {MEGA_MENU_DATA[item.id]?.panels.map((panel, pIdx) => (
                                  <div key={pIdx} className="space-y-1">
                                    <h4 className="text-xs font-bold text-[#0070AD] uppercase tracking-wider font-mono">
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

                {/* Subtle Divider */}
                <div className="my-6 border-b border-[#D8DFEB] dark:border-white/10" />

                {/* Secondary Links */}
                <div className="space-y-2.5 text-sm text-[#5A6679] dark:text-[#9BA8BA] px-4 font-normal">
                  <a
                    href="#offshore-model"
                    onClick={(e) => handleNavClick(e, '#offshore-model')}
                    className="block hover:text-[#111827] dark:hover:text-white transition-colors"
                  >
                    Delivery Model
                  </a>
                  <a
                    href="#projects"
                    onClick={(e) => handleNavClick(e, '#projects')}
                    className="block hover:text-[#111827] dark:hover:text-white transition-colors"
                  >
                    Case Studies
                  </a>
                  <a
                    href="#about"
                    onClick={(e) => handleNavClick(e, '#about')}
                    className="block hover:text-[#111827] dark:hover:text-white transition-colors"
                  >
                    About Leadership
                  </a>
                  <a
                    href="#faq"
                    onClick={(e) => handleNavClick(e, '#faq')}
                    className="block hover:text-[#111827] dark:hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                  <a
                    href="#contact"
                    onClick={handleQuoteClick}
                    className="block hover:text-[#0070AD] font-semibold transition-colors"
                  >
                    Contact & RFQ →
                  </a>
                </div>
              </div>

              {/* Bottom Social Icons */}
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
                <a
                  href={companyData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#1A232E] border border-[#D8DFEB] dark:border-white/10 flex items-center justify-center hover:text-[#111827] dark:hover:text-white hover:scale-105 transition-all"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href={companyData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#1A232E] border border-[#D8DFEB] dark:border-white/10 flex items-center justify-center hover:text-[#0070AD] hover:scale-105 transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={companyData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#1A232E] border border-[#D8DFEB] dark:border-white/10 flex items-center justify-center hover:text-red-500 hover:scale-105 transition-all"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* ---------------------------------------------------- */}
            {/* RIGHT PANEL: Crisp White Area with 2-3 Column Panels */}
            {/* ---------------------------------------------------- */}
            <div className="hidden md:flex flex-1 flex-col bg-white dark:bg-[#0A0E13] p-8 lg:p-12 xl:p-16 overflow-y-auto">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMenuId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-6xl w-full"
                >
                  {/* Category Header */}
                  <div className="mb-8 pb-4 border-b border-[#E2E6EE] dark:border-white/10">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight">
                      {activeContent.title}
                    </h2>
                    <p className="text-sm text-[#5A6679] dark:text-[#9BA8BA] mt-1.5 font-normal">
                      {activeContent.subtitle}
                    </p>
                  </div>

                  {/* 2-3 Column Rounded Light-Blue Panels */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {activeContent.panels.map((panel, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-[#F2F5FA] dark:bg-[#131B24] border border-[#E2E7F0] dark:border-white/10 transition-all hover:shadow-card flex flex-col justify-between"
                      >
                        <div>
                          <h3 className="text-base font-bold text-[#111827] dark:text-white mb-4 flex items-center justify-between">
                            <span>{panel.title}</span>
                            <span className="w-2 h-2 rounded-full bg-[#0070AD]" />
                          </h3>

                          <ul className="space-y-2.5 text-xs text-[#5A6679] dark:text-[#9BA8BA]">
                            {panel.links.map((link, lIdx) => (
                              <li key={lIdx}>
                                {link.to ? (
                                  <Link
                                    to={link.to}
                                    onClick={() => setMenuOverlayOpen(false)}
                                    className="group flex items-center justify-between text-xs font-medium text-[#5A6679] hover:text-[#0070AD] dark:text-[#9BA8BA] dark:hover:text-[#38BDF8] py-1 transition-colors"
                                  >
                                    <span>{link.label}</span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#0070AD]" />
                                  </Link>
                                ) : (
                                  <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="group flex items-center justify-between text-xs font-medium text-[#5A6679] hover:text-[#0070AD] dark:text-[#9BA8BA] dark:hover:text-[#38BDF8] py-1 transition-colors"
                                  >
                                    <span>{link.label}</span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#0070AD]" />
                                  </a>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-5 pt-3 border-t border-[#E2E7F0] dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#0070AD] font-semibold">
                          <span>Explore Scope</span>
                          <span>→</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Direct CTA Band */}
                  <div className="mt-8 p-5 rounded-2xl bg-[#EEF2F8] dark:bg-[#151D26] border border-[#D8DFEB] dark:border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0070AD] text-white flex items-center justify-center font-bold text-xs">
                        ✦
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111827] dark:text-white">
                          Ready to discuss drawing backlogs or upcoming project release?
                        </div>
                        <div className="text-[11px] text-[#5A6679] dark:text-[#9BA8BA]">
                          Guaranteed 24-hour formal scope and price turnaround.
                        </div>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      onClick={handleQuoteClick}
                      className="px-5 py-2 rounded-full bg-[#111827] hover:bg-black text-white text-xs font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
                    >
                      Request a Quote →
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* 3. ASK ESCALUP MODAL (INFOSYS "ASK LEON" EQUIVALENT)     */}
      {/* ======================================================== */}
      <AskEscalupModal
        isOpen={askModalOpen}
        onClose={() => setAskModalOpen(false)}
        onOpenCalendly={onOpenCalendly}
      />
    </>
  );
}
