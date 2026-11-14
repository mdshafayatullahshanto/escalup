// src/components/Navbar.jsx
// Header strictly ordered:
// Home, Services, Process, Offshore Model, Portfolio, About, Contact, FAQ.
// Floating pill navbar with logo, Glowing Circular Hamburger Menu Button, and smooth slide-out drawer.

import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/company';
import Logo from './Logo';

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
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname === '/' ? 'home' : '');
  
  const navigate = useNavigate();
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  // Monitor scroll depth for subtle background blur enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Close drawer on route change
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMenuOpen(false);
  }

  // Scroll spy: Update active navigation tab based on scroll position
  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const sectionElements = NAV_ITEMS.map((item) => ({
      id: item.id,
      el: document.getElementById(item.id),
    })).filter((item) => item.el !== null);

    const handleIntersection = () => {
      if (isClickScrollingRef.current) return;

      const scrollPosition = window.scrollY + 220;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // Handle very bottom of the page -> FAQ
      if (window.scrollY + winHeight >= docHeight - 80) {
        setActiveSection('faq');
        return;
      }

      // Check sections in reverse order
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
          return;
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleIntersection, { passive: true });
    handleIntersection();

    return () => window.removeEventListener('scroll', handleIntersection);
  }, [location.pathname]);

  // Smooth scroll or route navigation handler
  const handleNavClick = (e, href) => {
    if (e && e.preventDefault) e.preventDefault();

    if (href.startsWith('#')) {
      const targetId = href.slice(1);
      if (targetId) {
        setActiveSection(targetId);
        isClickScrollingRef.current = true;
        if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = setTimeout(() => {
          isClickScrollingRef.current = false;
        }, 900);
      }

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

  const handleBookCallClick = () => {
    setMenuOpen(false);
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 py-3 sm:py-3.5 ${
          scrolled
            ? 'bg-white/80 dark:bg-[#080C0F]/80 backdrop-blur-md border-b border-[#E2E6EE] dark:border-white/10 shadow-xs'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LEFT: Official Combined Brand Logo */}
          <Logo size="md" />

          {/* CENTER: Floating Pill Navigation Bar (Exact 8 items with active pill) */}
          <nav
            className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full bg-white/85 dark:bg-[#11161B]/85 backdrop-blur-md border border-[#E2E6EE] dark:border-white/10 shadow-xs text-xs font-medium text-[#475569] dark:text-[#94A3B8]"
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

          {/* RIGHT: Circular Hamburger Menu Button (Matches Navbar height, no permanent glow) */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 rounded-full bg-white border-2 border-[#2563EB] shadow-xs hover:border-[#1D4ED8] hover:shadow-[0_0_10px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer relative z-50 group"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              title="Menu"
            >
              {menuOpen ? (
                <X className="w-4 h-4 text-[#2563EB] stroke-[2.5] transition-transform group-hover:rotate-90 duration-200" />
              ) : (
                <div className="flex flex-col justify-center items-center gap-[3px]">
                  <span className="w-3.5 h-[1.5px] bg-[#2563EB] rounded-full transition-all"></span>
                  <span className="w-3.5 h-[1.5px] bg-[#2563EB] rounded-full transition-all"></span>
                  <span className="w-3.5 h-[1.5px] bg-[#2563EB] rounded-full transition-all"></span>
                </div>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Slide-out Menu Overlay & Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Right Slide-out Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm sm:max-w-md bg-white dark:bg-[#0D1217] text-[#111827] dark:text-white z-50 shadow-2xl border-l border-[#E2E6EE] dark:border-white/10 flex flex-col justify-between overflow-y-auto"
            >
              <div className="p-6 sm:p-8">
                
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#E2E6EE] dark:border-white/10 mb-6">
                  <Logo size="md" />
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-9 h-9 rounded-full bg-[#F6F7FC] dark:bg-[#151D26] hover:bg-[#EEF2F8] dark:hover:bg-[#1E2833] flex items-center justify-center text-[#5A6679] dark:text-white transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* Navigation Links List */}
                <div className="space-y-1">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#0070AD] dark:text-[#38BDF8] mb-3 px-3">
                    Menu Navigation
                  </div>
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => {
                          setMenuOpen(false);
                          handleNavClick(e, item.href);
                        }}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm sm:text-base font-medium transition-all group cursor-pointer ${
                          isActive
                            ? 'bg-[#111827] dark:bg-white text-white dark:text-[#111827] font-semibold shadow-xs'
                            : 'text-[#111827] dark:text-white hover:bg-[#F6F7FC] dark:hover:bg-[#17202B] hover:text-[#0070AD] dark:hover:text-[#38BDF8]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-mono ${isActive ? 'text-white/70 dark:text-black/60' : 'text-[#5A6679] dark:text-[#9BA8BA]'}`}>
                            0{index + 1}
                          </span>
                          <span>{item.label}</span>
                        </div>
                        <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isActive ? 'text-white dark:text-[#111827]' : 'text-[#5A6679] group-hover:text-[#0070AD]'}`} />
                      </a>
                    );
                  })}
                </div>

              </div>

              {/* Drawer Bottom Actions */}
              <div className="p-6 sm:p-8 border-t border-[#E2E6EE] dark:border-white/10 bg-[#F6F7FC] dark:bg-[#11161B] space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#5A6679] dark:text-[#9BA8BA]">
                  <ShieldCheck className="w-4 h-4 text-[#5846F6]" />
                  <span>Mutual NDA & 100% Client IP Ownership</span>
                </div>
                <button
                  onClick={handleBookCallClick}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#0070AD] to-[#5846F6] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-95 shadow-md transition-all cursor-pointer"
                >
                  <span>Schedule Intro Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="block text-center text-xs text-[#5A6679] dark:text-[#9BA8BA] hover:underline"
                >
                  {companyData.contact.email}
                </a>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
