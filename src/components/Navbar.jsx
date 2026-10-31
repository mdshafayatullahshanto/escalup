// /src/components/Navbar.jsx
// Sticky modern navbar with dynamic scroll shrink, shadow transition, desktop nav, and mobile drawer
// High contrast black-and-white theme

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Calendar } from 'lucide-react';
import Logo from './Logo';
import Magnetic from './Magnetic';
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
            ? 'py-3 bg-[#0A0A0A]/95 backdrop-blur-md shadow-2xl border-b border-white/10'
            : 'py-4 bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/[0.07]'
        }`}
      >
        <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
          <div className="flex items-center justify-between">
            {/* Brand Logo - white variant */}
            <Magnetic strength={0.12}>
              <Logo variant="dark" size={scrolled ? 'sm' : 'md'} />
            </Magnetic>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/80 hover:text-white transition-colors py-1 cursor-pointer relative group font-semibold text-sm tracking-wide"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3.5">
              <Magnetic strength={0.15}>
                <button
                  onClick={handleBookCallClick}
                  className="text-xs font-semibold text-white/90 hover:text-white transition-colors flex items-center gap-1.5 px-4 py-2 rounded-full hover:bg-white/10 cursor-pointer border border-white/20 hover:border-white"
                  title="Schedule 30-min intro call"
                >
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>Book a Call</span>
                </button>
              </Magnetic>

              <Magnetic strength={0.18}>
                <a
                  href="#contact"
                  onClick={handleQuoteClick}
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-xs tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2 cursor-pointer group shrink-0"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Magnetic>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#contact"
                onClick={handleQuoteClick}
                className="px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-bold shadow-xs hover:bg-neutral-200 transition-colors"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#0D0D0E] text-white shadow-2xl z-50 flex flex-col p-6 overflow-y-auto border-l border-white/10"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Logo variant="dark" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex-1 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-base font-semibold text-white/80 hover:text-white py-1.5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleBookCallClick();
                  }}
                  className="w-full py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2 border border-white/20"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book a Call</span>
                </button>

                <a
                  href="#contact"
                  onClick={handleQuoteClick}
                  className="w-full py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
