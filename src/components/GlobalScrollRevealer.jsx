// src/components/GlobalScrollRevealer.jsx
// Global reusable scroll-triggered animation engine
// Automatically discovers and animates all headings, paragraphs, lists, cards, buttons, FAQs, and footer elements across the entire website.
// Zero heavy libraries — built on native IntersectionObserver and CSS hardware-accelerated transforms.
// Runs once per element, staggers items within the same section, respects prefers-reduced-motion, and prevents layout shift.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GlobalScrollRevealer() {
  const location = useLocation();

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Elements or containers that should never be hidden/animated (navigation, cursor, modals, etc.)
    const EXCLUDE_CONTAINERS = 'header, nav, [role="navigation"], #navbar, #custom-cursor, [aria-hidden="true"], .no-reveal, .blueprint-grid';

    // Target elements to discover and animate
    const TARGET_SELECTOR = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p',
      'ul > li', 'ol > li',
      '[class*="shadow-card"]',
      '[class*="rounded-3xl"]:not(section):not(main)',
      'button:not([aria-hidden="true"])',
      'a[class*="rounded-full"]',
      '#faq .rounded-2xl',
      'footer .grid > div',
      'footer .pt-8',
    ].join(', ');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('is-revealed');
            observer.unobserve(el);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px', // trigger smoothly as content approaches viewport
        threshold: 0.05,
      }
    );

    const scanAndObserve = () => {
      // Find all sections, major content blocks, and footer
      const containers = document.querySelectorAll('section, main > div, footer, [id="services"], [id="process"], [id="offshore-model"], [id="portfolio"], [id="about"], [id="contact"], [id="faq"]');

      const observedSet = new Set();

      containers.forEach((container) => {
        if (container.closest(EXCLUDE_CONTAINERS)) return;

        // Query all candidates inside this container
        const rawCandidates = Array.from(container.querySelectorAll(TARGET_SELECTOR));

        // Filter out candidates that are inside excluded containers or already processed
        const filtered = rawCandidates.filter((el) => {
          if (el.closest(EXCLUDE_CONTAINERS)) return false;
          if (el.classList.contains('is-revealed')) return false;

          // Avoid double-animating deeply nested elements if the direct card parent is already animated
          const parentCard = el.closest('[class*="shadow-card"]');
          if (parentCard && parentCard !== el && (el.tagName === 'P' || el.tagName === 'LI')) {
            // Allow card itself to animate smoothly, unless it's a prominent heading or CTA button
            if (el.tagName !== 'H3' && el.tagName !== 'H4') return false;
          }

          return true;
        });

        // Assign automatic stagger indices within the section cluster
        filtered.forEach((el, index) => {
          if (observedSet.has(el)) return;
          observedSet.add(el);

          if (!el.hasAttribute('data-reveal')) {
            el.setAttribute('data-reveal', 'true');
            // Cap stagger delay at 8 items (max 560ms) to ensure snappy response
            const staggerIndex = Math.min(index % 9, 8);
            el.style.setProperty('--stagger-idx', staggerIndex.toString());
          }

          // Check if element is already in the viewport on initial page load (above the fold)
          const rect = el.getBoundingClientRect();
          const inViewportInitially = rect.top < window.innerHeight && rect.bottom > 0;

          if (inViewportInitially) {
            const delay = parseInt(el.style.getPropertyValue('--stagger-idx') || '0', 10) * 45;
            setTimeout(() => {
              el.classList.add('is-revealed');
            }, delay);
          } else {
            observer.observe(el);
          }
        });
      });
    };

    // Initial scan
    scanAndObserve();

    // Re-scan after short delay for lazy-loaded assets and fonts
    const timer = setTimeout(scanAndObserve, 250);

    // Watch for dynamically added DOM nodes (e.g. routes, modals, dynamic lists)
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return null;
}
