// /src/components/Navbar.jsx
// 100% faithful replication of the modern Infosys header architecture:
// Left circular hamburger button [ ≡ ], white brand logo, center floating frosted pill navigation,
// right-hand [ ✦ Ask escalup ] AI navigator pill, theme toggle, and full-screen enterprise mega overlay.

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  Calendar, 
  Sun, 
  Moon, 
  Sparkles,
  ShieldCheck, 
  Clock, 
  Factory, 
  DraftingCompass, 
  Building2, 
  Rocket
} from 'lucide-react';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';
import AskEscalupModal from './AskEscalupModal';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenCalendly }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);
  const [askModalOpen, setAskModalOpen] = useState(false);
  
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

  // Close menus on route change
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMenuOverlayOpen(false);
    setAskModalOpen(false);
  }

  const handleNavClick = (e, href) => {
    e.preventDefault();
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

  const handleBookCallClick = () => {
    setMenuOverlayOpen(false);
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleQuoteClick = (e) => {
    e.preventDefault();
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

  return (
    <>
      {/* ======================================================== */}
      {/* 1. TOP INFOSYS FLOATING HEADER BAR                       */}
      {/* ======================================================== */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#0B1519]/90 dark:bg-[#071012]/95 backdrop-blur-md shadow-lg border-b border-white/10'
            : 'py-4 sm:py-5 bg-gradient-to-b from-black/75 via-black/40 to-transparent'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          
          {/* LEFT: Circular White Hamburger [ ≡ ] + White Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Infosys Circular White Hamburger Button */}
            <button
              onClick={() => setMenuOverlayOpen(!menuOverlayOpen)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-black shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
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

            {/* White Brand Logo: "escalup" */}
            <Link
              to="/"
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="escalup home"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2E756E] border border-white/40 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                e
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
                escalup
              </span>
            </Link>
          </div>

          {/* CENTER: Floating Frosted Glass Capsule Navigation Pill (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 px-6 py-2.5 rounded-full bg-white/15 dark:bg-black/35 backdrop-blur-md border border-white/25 shadow-xl text-white text-xs font-semibold tracking-wide">
            <a
              href="#navigate-next"
              onClick={(e) => handleNavClick(e, '#navigate-next')}
              className="hover:text-[#14F3C1] transition-colors cursor-pointer"
            >
              Navigate your next
            </a>

            <span className="w-1 h-1 rounded-full bg-white/40"></span>

            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="hover:text-[#14F3C1] transition-colors cursor-pointer"
            >
              Services
            </a>

            <span className="w-1 h-1 rounded-full bg-white/40"></span>

            <a
              href="#industries"
              onClick={(e) => handleNavClick(e, '#industries')}
              className="hover:text-[#14F3C1] transition-colors cursor-pointer"
            >
              Industries
            </a>

            <span className="w-1 h-1 rounded-full bg-white/40"></span>

            <a
              href="#offshore-model"
              onClick={(e) => handleNavClick(e, '#offshore-model')}
              className="hover:text-[#14F3C1] transition-colors cursor-pointer"
            >
              Delivery Model
            </a>

            <span className="w-1 h-1 rounded-full bg-white/40"></span>

            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="hover:text-[#14F3C1] transition-colors cursor-pointer"
            >
              Case Studies
            </a>
          </nav>

          {/* RIGHT: [ ✦ Ask escalup ] Dark Pill + Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Dark mode switcher */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
              title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? <Sun className="w-4 h-4 text-[#F3BA2F]" /> : <Moon className="w-4 h-4 text-white" />}
            </button>

            {/* Infosys Signature Dark Action Pill: [ ✦ Ask escalup ] */}
            <button
              onClick={() => setAskModalOpen(true)}
              className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/25 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer backdrop-blur-md group hover:border-[#14F3C1]/50"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#14F3C1] group-hover:rotate-12 transition-transform shrink-0" />
              <span className="hidden xs:inline">Ask escalup</span>
              <span className="xs:hidden">Ask</span>
            </button>

            {/* Quick Quote Button on large screens */}
            <a
              href="#contact"
              onClick={handleQuoteClick}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <span>Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

          </div>

        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. FULL-SCREEN INFOSYS ENTERPRISE MEGA OVERLAY MENU      */}
      {/* ======================================================== */}
      <AnimatePresence>
        {menuOverlayOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0B1519]/98 dark:bg-[#060D0F]/98 backdrop-blur-2xl text-white overflow-y-auto"
          >
            <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 py-8 flex flex-col min-h-screen justify-between">
              
              {/* Overlay Top Bar */}
              <div className="flex items-center justify-between pb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2E756E] flex items-center justify-center font-bold text-sm">
                    e
                  </div>
                  <span className="text-2xl font-bold tracking-tight text-white">
                    escalup
                  </span>
                  <span className="hidden sm:inline-block pl-4 ml-4 border-l border-white/20 text-xs text-[#A0D4CE] font-mono">
                    Offshore Engineering Directory
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Close circular button */}
                  <button
                    onClick={() => setMenuOverlayOpen(false)}
                    className="w-11 h-11 rounded-full bg-white text-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-lg"
                    aria-label="Close navigation"
                  >
                    <X className="w-5 h-5 text-black" />
                  </button>
                </div>
              </div>

              {/* Main Multi-Column Enterprise Navigation */}
              <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-left">
                
                {/* Column 1: Navigate Your Next & Overview */}
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#14F3C1] block">
                    01 · Corporate Vision
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    Navigate Your Next
                  </h3>
                  <ul className="space-y-3 text-sm text-[#A0D4CE]">
                    <li>
                      <a
                        href="#navigate-next"
                        onClick={(e) => handleNavClick(e, '#navigate-next')}
                        className="hover:text-white transition-colors block font-semibold text-base"
                      >
                        The Offshore Transformation →
                      </a>
                      <p className="text-xs text-[#889893] mt-0.5">
                        Agile mechanical, MEP, and BIM scaling with 50–70% cost efficiency.
                      </p>
                    </li>
                    <li>
                      <a
                        href="#about"
                        onClick={(e) => handleNavClick(e, '#about')}
                        className="hover:text-white transition-colors block font-semibold"
                      >
                        About escalup & Leadership
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about"
                        onClick={(e) => handleNavClick(e, '#about')}
                        className="hover:text-white transition-colors block font-semibold"
                      >
                        Dhaka Engineering Center (HQ)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#process"
                        onClick={(e) => handleNavClick(e, '#process')}
                        className="hover:text-white transition-colors block font-semibold"
                      >
                        6-Gate Delivery Framework
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 2: Engineering Services & Capabilities */}
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#14F3C1] block">
                    02 · Capabilities
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    Engineering Services
                  </h3>
                  <ul className="space-y-2.5 text-xs text-[#A0D4CE]">
                    {servicesData.map((s) => (
                      <li key={s.id}>
                        <Link
                          to={`/services/${s.slug}`}
                          onClick={() => setMenuOverlayOpen(false)}
                          className="hover:text-white transition-colors block py-0.5"
                        >
                          <span className="font-semibold text-white block">{s.title}</span>
                          <span className="text-[11px] text-[#889893] truncate block">{s.shortDesc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Industries & Client Sectors */}
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#14F3C1] block">
                    03 · Sectors
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    Industries We Serve
                  </h3>
                  <ul className="space-y-3.5 text-xs text-[#A0D4CE]">
                    <li className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 text-white font-bold mb-1">
                        <Factory className="w-4 h-4 text-[#14F3C1]" />
                        <span>Manufacturers & OEMs</span>
                      </div>
                      <p className="text-[11px] text-[#889893]">
                        Sheet metal enclosures, 3D CAD modeling & DFMA cost reduction.
                      </p>
                    </li>
                    <li className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 text-white font-bold mb-1">
                        <DraftingCompass className="w-4 h-4 text-[#14F3C1]" />
                        <span>Engineering Consultancies</span>
                      </div>
                      <p className="text-[11px] text-[#889893]">
                        White-label drafting desk conforming to client templates & ASME/ISO standards.
                      </p>
                    </li>
                    <li className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 text-white font-bold mb-1">
                        <Building2 className="w-4 h-4 text-[#14F3C1]" />
                        <span>MEP & BIM Contractors</span>
                      </div>
                      <p className="text-[11px] text-[#889893]">
                        HVAC load calculations, plant room routing & Navisworks clash detection.
                      </p>
                    </li>
                    <li className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 text-white font-bold mb-1">
                        <Rocket className="w-4 h-4 text-[#14F3C1]" />
                        <span>Hardware Innovators & Startups</span>
                      </div>
                      <p className="text-[11px] text-[#889893]">
                        Concept sketches to prototype-ready STEP files with zero equity overhead.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Column 4: Delivery, World Clock & Direct Kickoff */}
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#14F3C1] block">
                    04 · Engagement
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    Delivery & Kickoff
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2">
                      <div className="flex items-center gap-2 text-white font-bold">
                        <Clock className="w-4 h-4 text-[#14F3C1]" />
                        <span>Dhaka Engineering Center (HQ)</span>
                      </div>
                      <p className="text-[11px] text-[#889893]">
                        Active BST (UTC+6) with synchronous morning overlap for Europe & Middle East, plus overnight turnarounds for North America.
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <button
                        onClick={handleBookCallClick}
                        className="w-full py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors cursor-pointer"
                      >
                        <Calendar className="w-4 h-4 text-[#2E756E]" />
                        <span>Book 30-Min Intro Call</span>
                      </button>

                      <a
                        href="#contact"
                        onClick={handleQuoteClick}
                        className="w-full py-3 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <span>Request Engineering Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Overlay Bottom Bar */}
              <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#889893] gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-white">
                    <ShieldCheck className="w-4 h-4 text-[#14F3C1]" />
                    <span>Strict Mutual NDA Executed Prior to CAD Exchange</span>
                  </span>
                  <span className="hidden md:inline">·</span>
                  <span className="hidden md:inline">100% Client Intellectual Property Ownership</span>
                </div>

                <div className="flex items-center gap-4 text-white">
                  <a href={`mailto:${companyData.contact.email}`} className="text-[#14F3C1] hover:underline font-mono">
                    {companyData.contact.email}
                  </a>
                  <span>·</span>
                  <span>Uttara, Dhaka</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* 3. "ASK ESCALUP" INTERACTIVE MODAL (INFOSYS "ASK LEON") */}
      {/* ======================================================== */}
      <AskEscalupModal
        isOpen={askModalOpen}
        onClose={() => setAskModalOpen(false)}
        onOpenCalendly={onOpenCalendly}
      />
    </>
  );
}
