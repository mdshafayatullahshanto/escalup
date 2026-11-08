// src/components/Navbar.jsx
// Header strictly ordered:
// Home, Services, Process, Offshore Model, Portfolio, About, Contact, FAQ.
// Floating pill navbar with circular hamburger, logo, theme toggle with circular View Transition reveal,
// "+ Ask" modal trigger, and gradient "CONTACT →" pill button.

import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  Sun, 
  Moon, 
  Sparkles,
  ChevronRight
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

export default function Navbar({ onOpenCalendly }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);
  const [askModalOpen, setAskModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const overlayRef = useRef(null);

  // Monitor scroll depth for subtle background blur enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    if (location.pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
    );

    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  // Prevent background body scroll when mobile menu overlay is open
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

  // Close overlay on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOverlayOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Smooth scroll or route navigation handler
  const handleNavClick = (e, href) => {
    if (e && e.preventDefault) e.preventDefault();
    setMenuOverlayOpen(false);

    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/${href}`);
      }
    } else {
      navigate(href);
    }
  };

  const handleQuoteClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setMenuOverlayOpen(false);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  const handleBookCall = () => {
    setMenuOverlayOpen(false);
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* 1. FIXED TOP HEADER BAR */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 py-3 sm:py-3.5 ${
          scrolled
            ? 'bg-white/80 dark:bg-[#080C0F]/80 backdrop-blur-md border-b border-[#E2E6EE] dark:border-white/10 shadow-xs'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          
          {/* LEFT: Circular Hamburger [ ≡ ] + Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <button
              onClick={() => setMenuOverlayOpen(!menuOverlayOpen)}
              className="w-10 h-10 rounded-full bg-white dark:bg-[#11161B] text-[#111827] dark:text-white border border-[#E2E6EE] dark:border-white/10 shadow-xs hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
              aria-label={menuOverlayOpen ? 'Close navigation overlay' : 'Open navigation overlay'}
              title="Menu"
            >
              {menuOverlayOpen ? (
                <X className="w-4 h-4 text-[#111827] dark:text-white" />
              ) : (
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span className="w-4 h-[1.75px] bg-[#111827] dark:bg-white rounded-full transition-transform group-hover:scale-x-110" />
                  <span className="w-4 h-[1.75px] bg-[#111827] dark:bg-white rounded-full transition-transform" />
                  <span className="w-4 h-[1.75px] bg-[#111827] dark:bg-white rounded-full transition-transform group-hover:scale-x-110" />
                </div>
              )}
            </button>

            {/* Brand Logo: Circular "e" + "escalup" */}
            <Link
              to="/"
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="Escalup home"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0070AD] border border-white/40 flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
                e
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight font-sans text-[#111827] dark:text-white">
                escalup
              </span>
            </Link>
          </div>

          {/* CENTER: Floating Pill Navigation Bar (Exact 8 items with active pill) */}
          <nav
            className="hidden xl:flex items-center gap-2 px-5 py-2 rounded-full bg-white/85 dark:bg-[#11161B]/85 backdrop-blur-md border border-[#E2E6EE] dark:border-white/10 shadow-xs text-xs font-medium text-[#475569] dark:text-[#94A3B8]"
            aria-label="Primary Navigation"
          >
            {NAV_ITEMS.map((item, index) => {
              const isActive = (activeSection === item.id) || (item.id === 'home' && !activeSection && location.pathname === '/');
              return (
                <React.Fragment key={item.id}>
                  {index > 0 && (
                    <span className="text-[#94A3B8]/60 dark:text-white/20 select-none px-0.5">·</span>
                  )}
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'px-3.5 py-1 rounded-full bg-[#111827] dark:bg-white text-white dark:text-[#111827] font-semibold shadow-xs'
                        : 'px-2 py-1 rounded-full hover:text-[#111827] dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </React.Fragment>
              );
            })}
          </nav>

          {/* RIGHT: Theme Toggle + "+ Ask" Pill + "CONTACT →" Pill */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            
            {/* Theme switcher (with circular View Transition reveal) */}
            <button
              onClick={(e) => toggleTheme(e)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#11161B] text-[#111827] dark:text-white border border-[#E2E6EE] dark:border-white/10 shadow-xs hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[#F3BA2F]" />
              ) : (
                <Moon className="w-4 h-4 text-[#111827] dark:text-white" />
              )}
            </button>

            {/* "+ Ask" Pill Trigger */}
            <button
              onClick={() => setAskModalOpen(true)}
              className="hidden sm:flex px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0F172A] dark:bg-[#1E293B] hover:bg-black dark:hover:bg-[#334155] text-white text-xs font-semibold tracking-wide border border-white/10 shadow-xs items-center gap-1.5 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0070AD] dark:text-[#38BDF8] shrink-0" />
              <span>Ask</span>
            </button>

            {/* "CONTACT →" Pill */}
            <a
              href="#contact"
              onClick={handleQuoteClick}
              className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#0070AD] via-[#2563EB] to-[#5846F6] hover:opacity-95 text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-sm hover:shadow-md transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer shrink-0"
            >
              <span>Contact</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>

        </div>
      </header>

      {/* 2. MOBILE & EXPANDED MENU DRAWER */}
      <AnimatePresence>
        {menuOverlayOpen && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#080C0F]/70 backdrop-blur-md flex flex-col justify-end xl:justify-start"
            onClick={() => setMenuOverlayOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-xl mx-auto bg-white dark:bg-[#11161B] border border-[#E2E6EE] dark:border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 m-4 mt-20 relative max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E6EE] dark:border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#0070AD] flex items-center justify-center text-white font-bold text-xs">
                    e
                  </div>
                  <span className="font-bold text-lg text-[#111827] dark:text-white">escalup navigation</span>
                </div>
                <button
                  onClick={() => setMenuOverlayOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#EEF2F8] dark:bg-[#151D26] text-[#111827] dark:text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Items (All 8 in Exact Order) */}
              <div className="space-y-1 mb-8">
                {NAV_ITEMS.map((item, idx) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#EEF2F8] dark:hover:bg-[#151D26] text-[#111827] dark:text-white font-medium text-base transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#0070AD] dark:text-[#38BDF8] font-bold">0{idx + 1}</span>
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-4 border-t border-[#E2E6EE] dark:border-white/10 space-y-3">
                <button
                  onClick={handleBookCall}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#0070AD] via-[#2563EB] to-[#5846F6] text-white font-bold text-sm uppercase tracking-wider shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Schedule an Engineering Intro Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between pt-3 text-xs text-[#5A6679] dark:text-[#9BA8BA]">
                  <span>Offshore CAD, BIM & MEP Support</span>
                  <a
                    href="https://www.linkedin.com/in/md-shafayat-ullah-shanto-262456209/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5846F6] hover:underline flex items-center gap-1"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                    <span>Founder LinkedIn</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. AI / ASK ESCALUP MODAL */}
      <AskEscalupModal
        isOpen={askModalOpen}
        onClose={() => setAskModalOpen(false)}
        onOpenCalendly={onOpenCalendly}
      />
    </>
  );
}
