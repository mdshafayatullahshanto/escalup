// src/components/Navbar.jsx
// Header strictly ordered:
// Home, Services, Process, Offshore Model, Portfolio, About, Contact, FAQ.
// Clean floating pill navbar with logo, theme toggle with circular reveal, and gradient "CONTACT →" pill button.

import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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

  return (
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

        {/* Balance spacer for desktop center alignment */}
        <div className="w-[120px] hidden lg:block pointer-events-none" />

      </div>
    </header>
  );
}
