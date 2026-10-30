// /src/components/Navbar.jsx
// Sticky modern navbar with dynamic scroll shrink, shadow transition, desktop nav, and mobile drawer

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Calendar } from 'lucide-react';
import Logo from './Logo';
import { companyData } from '../data/company';
import { trackCallBooking } from '../utils/analytics';

export default function Navbar({ onOpenCalendly }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Offshore Model', href: '#offshore-model' },
    { label: 'Process', href: '#process' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

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
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleQuoteClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'py-2.5 bg-[#255E58]/95 dark:bg-[#1E4B47]/95 backdrop-blur-md shadow-md border-b border-[#1E4B47]/80 dark:border-[#163835]'
            : 'py-3.5 bg-[#2E756E]/95 dark:bg-[#235853]/95 backdrop-blur-md shadow-sm border-b border-[#245D57]/60'
        }`}
      >
        <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
          <div className="flex items-center justify-between">
            {/* Brand Logo - white variant on brand teal background */}
            <Logo variant="dark" size={scrolled ? 'sm' : 'md'} />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/90 hover:text-white transition-colors py-1 cursor-pointer relative group font-semibold text-sm tracking-wide"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A7F3D0] transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={handleBookCallClick}
                className="text-xs font-bold text-white hover:text-white transition-colors flex items-center gap-1.5 px-3.5 py-2 rounded-full hover:bg-white/15 cursor-pointer border border-white/20"
                title="Schedule 30-min intro call"
              >
                <Calendar className="w-3.5 h-3.5 text-[#A7F3D0]" />
                <span>Book a Call</span>
              </button>

              <a
                href="#contact"
                onClick={handleQuoteClick}
                className="navbar-cta-btn btn-primary-white px-5 py-2.5 rounded-full bg-white hover:bg-[#F0F6F5] text-[#1D4E49] font-bold text-xs tracking-wide shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group shrink-0"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2E756E] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#contact"
                onClick={handleQuoteClick}
                className="navbar-cta-btn btn-primary-white px-3.5 py-1.5 rounded-full bg-white text-[#1D4E49] text-xs font-bold shadow-sm hover:bg-[#F0F6F5] transition-colors"
              >
                <span>Quote</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white dark:bg-[#121C2D] shadow-2xl z-50 flex flex-col p-6 overflow-y-auto border-l border-[#DBE3E0] dark:border-[#223249]"
            >
              <div className="flex items-center justify-between pb-5 border-b border-[#DBE3E0] dark:border-[#223249]">
                <Logo size="sm" link={false} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-[#5A6A65] dark:text-[#94A3B8] hover:text-[#14201D] dark:hover:text-[#F1F5F9] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-medium text-[#14201D] dark:text-[#F1F5F9] hover:text-[#2E756E] dark:hover:text-[#34A096] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-[#DBE3E0] dark:border-[#223249] space-y-3">
                <a
                  href="#contact"
                  onClick={handleQuoteClick}
                  className="w-full py-3 rounded-xl bg-[#2E756E] hover:bg-[#255e58] text-white font-bold text-sm text-center shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleBookCallClick();
                  }}
                  className="w-full py-2.5 rounded-xl border border-[#DBE3E0] dark:border-[#223249] hover:border-[#2E756E] text-[#14201D] dark:text-[#F1F5F9] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#2E756E] dark:text-[#34A096]" />
                  <span>Book a Free Intro Call</span>
                </button>

                <div className="text-center pt-2 text-[11px] text-[#5A6A65] dark:text-[#94A3B8]">
                  Offshore Engineering Support · 24h Response
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
