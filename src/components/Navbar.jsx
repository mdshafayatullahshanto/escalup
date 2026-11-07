// /src/components/Navbar.jsx
// Infosys-inspired enterprise corporate navigation bar with interactive multi-column mega menu,
// real-time timezone sync badge, dark/light theme switch, and quick-action CTAs.

import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Calendar, 
  Sun, 
  Moon, 
  ChevronDown, 
  Cpu, 
  Wrench, 
  Activity, 
  Layers, 
  Database, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Factory, 
  DraftingCompass, 
  Building2, 
  Rocket,
  Sparkles
} from 'lucide-react';
import Logo from './Logo';
import Magnetic from './Magnetic';
import { companyData } from '../data/company';
import { servicesData } from '../data/services';
import { trackCallBooking } from '../utils/analytics';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenCalendly }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'services' | 'industries' | 'delivery' | null
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const timeoutRef = useRef(null);

  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile and mega menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);

    if (location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + href);
    }
  };

  const handleBookCallClick = () => {
    trackCallBooking('navbar_link');
    setActiveMegaMenu(null);
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleQuoteClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#contact');
    }
  };

  return (
    <>
      {/* Top Infosys-Style Utility Ribbon */}
      <div className="hidden lg:block w-full bg-[#0E1E1B] text-[#A0D4CE] text-[11px] font-mono py-1.5 px-6 border-b border-[#2E756E]/20">
        <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#14F3C1] animate-pulse"></span>
              <span className="text-white font-medium">Dhaka Engineering Center (HQ):</span> 
              <span>Active BST (UTC+6)</span>
            </span>
            <span className="text-white/30">|</span>
            <span className="text-[#A0D4CE]/80">Synchronous Overlap: London, Dubai, Sydney, New York</span>
          </div>

          <div className="flex items-center gap-5 text-white/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#14F3C1]" />
              <span>Strict Mutual NDA</span>
            </span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#14F3C1]" />
              <span>24h Quote Turnaround</span>
            </span>
            <span className="text-white/30">|</span>
            <a 
              href="mailto:contact.escalup@gmail.com" 
              className="text-[#14F3C1] hover:underline"
            >
              contact.escalup@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'py-2.5 bg-white/95 dark:bg-[#0B1519]/95 backdrop-blur-md shadow-md border-b border-[#DBE3E0] dark:border-[#1E3036]'
            : 'py-3.5 bg-[#FFFFFF]/90 dark:bg-[#0B1519]/90 backdrop-blur-md border-b border-[#DBE3E0]/70 dark:border-[#1E3036]/70'
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
          <div className="flex items-center justify-between">
            
            {/* Left: Brand Identity */}
            <div className="flex items-center gap-8">
              <Magnetic strength={0.12}>
                <Logo 
                  variant="default" 
                  size={scrolled ? 'sm' : 'md'} 
                  onClick={() => setMobileMenuOpen(false)} 
                />
              </Magnetic>

              {/* Tagline separator on large screens */}
              <div className="hidden xl:flex items-center pl-6 border-l border-[#DBE3E0] dark:border-[#263830]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6A65] dark:text-[#8FA89F]">
                  Navigate Your Next · Engineering Services
                </span>
              </div>
            </div>

            {/* Center Desktop Navigation Links with Infosys Mega Menus */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
              
              {/* 1. Services Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
              >
                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer ${
                    activeMegaMenu === 'services'
                      ? 'text-[#2E756E] dark:text-[#3B948A] bg-[#2E756E]/10'
                      : 'text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A]'
                  }`}
                  aria-expanded={activeMegaMenu === 'services'}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* 2. Industries Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('industries')}
              >
                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer ${
                    activeMegaMenu === 'industries'
                      ? 'text-[#2E756E] dark:text-[#3B948A] bg-[#2E756E]/10'
                      : 'text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A]'
                  }`}
                  aria-expanded={activeMegaMenu === 'industries'}
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'industries' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* 3. Global Offshore Delivery Model Trigger */}
              <a
                href="#offshore-model"
                onClick={(e) => handleNavClick(e, '#offshore-model')}
                className="px-3 py-2 rounded-lg font-semibold text-xs tracking-wider uppercase text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors cursor-pointer"
              >
                Offshore Model
              </a>

              {/* 4. Case Studies */}
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="px-3 py-2 rounded-lg font-semibold text-xs tracking-wider uppercase text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors cursor-pointer"
              >
                Case Studies
              </a>

              {/* 5. Process & Framework */}
              <a
                href="#process"
                onClick={(e) => handleNavClick(e, '#process')}
                className="px-3 py-2 rounded-lg font-semibold text-xs tracking-wider uppercase text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors cursor-pointer"
              >
                Framework
              </a>

              {/* 6. About Us */}
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
                className="px-3 py-2 rounded-lg font-semibold text-xs tracking-wider uppercase text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors cursor-pointer"
              >
                About
              </a>

              {/* 7. FAQs */}
              <a
                href="#faq"
                onClick={(e) => handleNavClick(e, '#faq')}
                className="px-3 py-2 rounded-lg font-semibold text-xs tracking-wider uppercase text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors cursor-pointer"
              >
                FAQ
              </a>
            </nav>

            {/* Right Side: Actions, Theme Toggle, Primary CTAs */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              
              {/* Dark mode toggle */}
              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-xl text-[#14201D] dark:text-[#E4EDE9] hover:bg-[#F4F6F5] dark:hover:bg-[#152620] border border-transparent hover:border-[#DBE3E0] dark:hover:border-[#263830] transition-colors cursor-pointer"
                title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {isDark ? <Sun className="w-4 h-4 text-[#F3BA2F]" /> : <Moon className="w-4 h-4 text-[#5A6A65]" />}
              </button>

              {/* Secondary CTA: Schedule Call (Desktop) */}
              <button
                onClick={handleBookCallClick}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#F4F6F5] dark:bg-[#152620] hover:bg-[#E1EDEA] dark:hover:bg-[#1D3328] text-[#14201D] dark:text-[#E4EDE9] border border-[#DBE3E0] dark:border-[#263830] font-semibold text-xs transition-colors cursor-pointer shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#2E756E] dark:text-[#3B948A]" />
                <span>Book Intro Call</span>
              </button>

              {/* Primary CTA: Request Quote (Infosys pill with right arrow) */}
              <a
                href="#contact"
                onClick={handleQuoteClick}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#14201D] dark:text-[#E4EDE9] hover:bg-neutral-100 dark:hover:bg-[#152620] lg:hidden cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* INFOSYS MEGA MENU 1: SERVICES & CAPABILITIES            */}
        {/* ======================================================== */}
        <AnimatePresence>
          {activeMegaMenu === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="hidden lg:block absolute top-full left-0 w-full bg-white dark:bg-[#0D1A17] border-b border-[#DBE3E0] dark:border-[#263830] shadow-2xl z-50 overflow-hidden"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-6 md:px-12 py-8">
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Column 1: Mechanical & Product Design (3 cols) */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#DBE3E0] dark:border-[#263830]">
                      <Cpu className="w-4 h-4 text-[#2E756E]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#14201D] dark:text-[#E4EDE9] font-mono">
                        Mechanical & Product Design
                      </h4>
                    </div>
                    <ul className="space-y-2.5 text-xs">
                      <li>
                        <Link
                          to="/services/mechanical-design-product-development"
                          className="font-bold text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors block"
                        >
                          Mechanical Design & Product Development
                        </Link>
                        <p className="text-[11px] text-[#5A6A65] dark:text-[#8FA89F] mt-0.5">
                          Parametric 3D CAD, kinematics & mechanism design
                        </p>
                      </li>
                      <li>
                        <Link
                          to="/services/manufacturing-engineering-dfma"
                          className="font-bold text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors block"
                        >
                          Manufacturing Engineering & DFMA
                        </Link>
                        <p className="text-[11px] text-[#5A6A65] dark:text-[#8FA89F] mt-0.5">
                          Sheet metal flat patterns, CNC, injection molding & tooling
                        </p>
                      </li>
                      <li>
                        <Link
                          to="/services/engineering-standards-gdt-quality"
                          className="font-bold text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors block"
                        >
                          GD&T & Tolerance Stack-Up Analysis
                        </Link>
                        <p className="text-[11px] text-[#5A6A65] dark:text-[#8FA89F] mt-0.5">
                          ASME Y14.5 & ISO 1101 drafting verification
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Simulation, Validation & PLM (3 cols) */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#DBE3E0] dark:border-[#263830]">
                      <Activity className="w-4 h-4 text-[#2E756E]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#14201D] dark:text-[#E4EDE9] font-mono">
                        Simulation, PLM & Automation
                      </h4>
                    </div>
                    <ul className="space-y-2.5 text-xs">
                      <li>
                        <Link
                          to="/services/cad-modeling-simulation-validation"
                          className="font-bold text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors block"
                        >
                          Finite Element Analysis (FEA) & Simulation
                        </Link>
                        <p className="text-[11px] text-[#5A6A65] dark:text-[#8FA89F] mt-0.5">
                          Structural, thermal & dynamic load verification
                        </p>
                      </li>
                      <li>
                        <Link
                          to="/services/plm-bom-engineering-data-management"
                          className="font-bold text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors block"
                        >
                          PLM, BOM & Engineering Data Management
                        </Link>
                        <p className="text-[11px] text-[#5A6A65] dark:text-[#8FA89F] mt-0.5">
                          Multi-level BOMs, revision control & ECN/ECO governance
                        </p>
                      </li>
                      <li>
                        <Link
                          to="/services/engineering-consultancy-project-management"
                          className="font-bold text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors block"
                        >
                          Engineering Consultancy & CAD Automation
                        </Link>
                        <p className="text-[11px] text-[#5A6A65] dark:text-[#8FA89F] mt-0.5">
                          Custom Python macros, workflow audits & technical oversight
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: MEP & BIM Engineering (3 cols) */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#DBE3E0] dark:border-[#263830]">
                      <Layers className="w-4 h-4 text-[#2E756E]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#14201D] dark:text-[#E4EDE9] font-mono">
                        MEP & BIM Engineering
                      </h4>
                    </div>
                    <ul className="space-y-2.5 text-xs">
                      <li>
                        <Link
                          to="/services/mep-design-bim-coordination"
                          className="font-bold text-[#14201D] dark:text-[#E4EDE9] hover:text-[#2E756E] dark:hover:text-[#3B948A] transition-colors block"
                        >
                          MEP Design & BIM Coordination
                        </Link>
                        <p className="text-[11px] text-[#5A6A65] dark:text-[#8FA89F] mt-0.5">
                          HVAC loads (HAP), plumbing & fire safety engineering
                        </p>
                      </li>
                      <li className="pt-1">
                        <span className="font-semibold text-[#14201D] dark:text-[#E4EDE9]">Revit BIM LOD 300 - 400</span>
                        <p className="text-[11px] text-[#5A6A65] dark:text-[#8FA89F]">
                          Multi-discipline spatial modeling & fabrication drawing releases
                        </p>
                      </li>
                      <li className="pt-1">
                        <span className="font-semibold text-[#14201D] dark:text-[#E4EDE9]">Navisworks Clash Resolution</span>
                        <p className="text-[11px] text-[#5A6A65] dark:text-[#8FA89F]">
                          Zero-clash matrices before site installation
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Column 4: Infosys Featured Spotlight Card (3 cols) */}
                  <div className="col-span-3 bg-gradient-to-br from-[#142F2C] via-[#102724] to-[#0A1B19] rounded-2xl p-5 text-white border border-[#2E756E]/40 flex flex-col justify-between shadow-lg">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2E756E]/40 text-[#A0D4CE] border border-[#2E756E]/50 mb-3 font-mono">
                        <Sparkles className="w-3 h-3 text-[#14F3C1]" />
                        <span>Featured Capability</span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
                        Zero Clash Verified · Navisworks & Revit BIM
                      </h4>
                      <p className="text-xs text-[#D4E2DE] leading-relaxed mb-4">
                        Catch 100+ spatial clashes virtually before concrete is poured. Guaranteed ASME Y14.5 and ISO drawing compliance.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <Link
                        to="/services/mep-design-bim-coordination"
                        className="text-xs font-bold text-[#14F3C1] hover:underline flex items-center gap-1"
                      >
                        <span>Explore BIM Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* INFOSYS MEGA MENU 2: INDUSTRIES & SECTORS                */}
        {/* ======================================================== */}
        <AnimatePresence>
          {activeMegaMenu === 'industries' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="hidden lg:block absolute top-full left-0 w-full bg-white dark:bg-[#0D1A17] border-b border-[#DBE3E0] dark:border-[#263830] shadow-2xl z-50 overflow-hidden"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-6 md:px-12 py-8">
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Sector 1: Manufacturers & OEMs */}
                  <div className="col-span-3 p-4 rounded-2xl bg-[#F8FAF9] dark:bg-[#152620] border border-[#DBE3E0] dark:border-[#263830] hover:border-[#2E756E]/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#2E756E]/10 text-[#2E756E] flex items-center justify-center mb-3">
                      <Factory className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#14201D] dark:text-[#E4EDE9] mb-1">
                      Manufacturers & OEMs
                    </h4>
                    <p className="text-xs text-[#5A6A65] dark:text-[#8FA89F] leading-relaxed mb-3">
                      Absorb CAD spikes, flat pattern sheet metal detailing, and DFMA cost reduction without increasing payroll.
                    </p>
                    <span className="text-[11px] font-mono text-[#2E756E] dark:text-[#3B948A] font-bold">
                      Focus: CAD Capacity · DFMA · Shop Drawings
                    </span>
                  </div>

                  {/* Sector 2: Engineering Consultancies */}
                  <div className="col-span-3 p-4 rounded-2xl bg-[#F8FAF9] dark:bg-[#152620] border border-[#DBE3E0] dark:border-[#263830] hover:border-[#2E756E]/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#2E756E]/10 text-[#2E756E] flex items-center justify-center mb-3">
                      <DraftingCompass className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#14201D] dark:text-[#E4EDE9] mb-1">
                      Engineering Consultancies
                    </h4>
                    <p className="text-xs text-[#5A6A65] dark:text-[#8FA89F] leading-relaxed mb-3">
                      White-label drafting desk conforming to your corporate CAD templates, layer discipline, and title blocks.
                    </p>
                    <span className="text-[11px] font-mono text-[#2E756E] dark:text-[#3B948A] font-bold">
                      Focus: Overflow Detailing · White-Label · ASME/ISO
                    </span>
                  </div>

                  {/* Sector 3: MEP & BIM Contractors */}
                  <div className="col-span-3 p-4 rounded-2xl bg-[#F8FAF9] dark:bg-[#152620] border border-[#DBE3E0] dark:border-[#263830] hover:border-[#2E756E]/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#2E756E]/10 text-[#2E756E] flex items-center justify-center mb-3">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#14201D] dark:text-[#E4EDE9] mb-1">
                      MEP & BIM Contractors
                    </h4>
                    <p className="text-xs text-[#5A6A65] dark:text-[#8FA89F] leading-relaxed mb-3">
                      Rapid load calculations, duct sizing, and coordinated Revit models preventing expensive on-site rework.
                    </p>
                    <span className="text-[11px] font-mono text-[#2E756E] dark:text-[#3B948A] font-bold">
                      Focus: Revit BIM · HVAC Loads · Navisworks
                    </span>
                  </div>

                  {/* Sector 4: Hardware Innovators */}
                  <div className="col-span-3 p-4 rounded-2xl bg-[#F8FAF9] dark:bg-[#152620] border border-[#DBE3E0] dark:border-[#263830] hover:border-[#2E756E]/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#2E756E]/10 text-[#2E756E] flex items-center justify-center mb-3">
                      <Rocket className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#14201D] dark:text-[#E4EDE9] mb-1">
                      Hardware Innovators & Startups
                    </h4>
                    <p className="text-xs text-[#5A6A65] dark:text-[#8FA89F] leading-relaxed mb-3">
                      Concept sketches to prototype-ready STEP assemblies and BOMs with zero equity or payroll liabilities.
                    </p>
                    <span className="text-[11px] font-mono text-[#2E756E] dark:text-[#3B948A] font-bold">
                      Focus: Concept to CAD · Prototyping · Rapid NPI
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ======================================================== */}
      {/* MOBILE CORPORATE DRAWER MENU                             */}
      {/* ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-[#0F201C] text-[#14201D] dark:text-[#E4EDE9] shadow-2xl z-50 flex flex-col p-6 overflow-y-auto border-l border-[#DBE3E0] dark:border-[#263830]"
            >
              <div className="flex items-center justify-between pb-5 border-b border-[#DBE3E0] dark:border-[#263830]">
                <Logo 
                  variant="default" 
                  size="sm" 
                  onClick={() => setMobileMenuOpen(false)} 
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-[#14201D] dark:text-[#E4EDE9] hover:bg-neutral-100 dark:hover:bg-[#152620] cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Live operational badge in mobile drawer */}
              <div className="mt-4 p-3 rounded-xl bg-[#2E756E]/10 dark:bg-[#3B948A]/10 border border-[#2E756E]/20 text-xs text-[#2E756E] dark:text-[#3B948A] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2E756E] animate-pulse"></span>
                <span className="font-semibold">Dhaka Hub (BST UTC+6): Active</span>
              </div>

              {/* Nav links with accordion expansion */}
              <div className="flex-1 py-5 space-y-1">
                
                {/* Services Accordion */}
                <div className="border-b border-[#DBE3E0]/60 dark:border-[#263830]/60 py-2">
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
                    className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#14201D] dark:text-[#E4EDE9]"
                  >
                    <span>Services & Capabilities</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileSubmenu === 'services' && (
                    <div className="pl-3 py-2 space-y-2 text-xs">
                      {servicesData.map((s) => (
                        <Link
                          key={s.id}
                          to={`/services/${s.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-[#5A6A65] dark:text-[#8FA89F] hover:text-[#2E756E] dark:hover:text-[#3B948A]"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Direct Links */}
                <a
                  href="#offshore-model"
                  onClick={(e) => handleNavClick(e, '#offshore-model')}
                  className="block py-3 text-sm font-bold text-[#14201D] dark:text-[#E4EDE9] border-b border-[#DBE3E0]/60 dark:border-[#263830]/60"
                >
                  Global Offshore Model
                </a>

                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, '#projects')}
                  className="block py-3 text-sm font-bold text-[#14201D] dark:text-[#E4EDE9] border-b border-[#DBE3E0]/60 dark:border-[#263830]/60"
                >
                  Case Studies & Outcomes
                </a>

                <a
                  href="#process"
                  onClick={(e) => handleNavClick(e, '#process')}
                  className="block py-3 text-sm font-bold text-[#14201D] dark:text-[#E4EDE9] border-b border-[#DBE3E0]/60 dark:border-[#263830]/60"
                >
                  Delivery Framework
                </a>

                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="block py-3 text-sm font-bold text-[#14201D] dark:text-[#E4EDE9] border-b border-[#DBE3E0]/60 dark:border-[#263830]/60"
                >
                  About escalup
                </a>

                <a
                  href="#faq"
                  onClick={(e) => handleNavClick(e, '#faq')}
                  className="block py-3 text-sm font-bold text-[#14201D] dark:text-[#E4EDE9] border-b border-[#DBE3E0]/60 dark:border-[#263830]/60"
                >
                  Frequently Asked Questions
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block py-3 text-sm font-bold text-[#2E756E] dark:text-[#3B948A]"
                >
                  Contact & RFQ
                </a>
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-[#DBE3E0] dark:border-[#263830] space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleBookCallClick();
                  }}
                  className="w-full py-3 rounded-full bg-[#F4F6F5] dark:bg-[#152620] text-[#14201D] dark:text-[#E4EDE9] font-bold text-xs flex items-center justify-center gap-2 border border-[#DBE3E0] dark:border-[#263830]"
                >
                  <Calendar className="w-4 h-4 text-[#2E756E]" />
                  <span>Book Intro Call</span>
                </button>

                <a
                  href="#contact"
                  onClick={handleQuoteClick}
                  className="w-full py-3 rounded-full bg-[#2E756E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Request Engineering Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
