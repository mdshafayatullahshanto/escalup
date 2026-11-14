// src/components/GlobalScrollRevealer.jsx
// Unified, high-performance global scroll animation engine
// Guarantees:
// 1. Identical timing (0.6s), identical distance (18px), identical easing, and light blur (4px) everywhere.
// 2. Strict top-to-bottom (and left-to-right) animation order within every section.
// 3. Single IntersectionObserver with zero layout shift and hardware acceleration.
// 4. Zero double-animation: outer visual containers animate as a unit, or standalone text elements animate individually.
// 5. Accessible: respects prefers-reduced-motion instantly.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GlobalScrollRevealer() {
  const location = useLocation();

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Containers that should never be animated (navigation, cursor, background grids, overlays)
    const EXCLUDE_CONTAINERS = [
      'header',
      'nav',
      '[role="navigation"]',
      '#navbar',
      '#custom-cursor',
      '[aria-hidden="true"]',
      '.blueprint-grid',
      '#hero-grain-filter',
      '.no-reveal',
      '[data-no-reveal]',
      '[role="tablist"]',
      '#home', // Hero slider handles its own internal slide crossfades
    ].join(', ');

    // Single IntersectionObserver for all reveal items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.setAttribute('data-reveal', 'revealed');
            el.setAttribute('data-revealed', 'true');
            el.classList.add('is-revealed');
            observer.unobserve(el);
            setTimeout(() => {
              el.setAttribute('data-reveal', 'done');
            }, 750);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -30px 0px', // trigger smoothly as content enters viewport
        threshold: 0.05,
      }
    );

    const scanAndObserve = () => {
      // Find all potential section containers across the website
      const allContainers = Array.from(
        document.querySelectorAll('section, main > div:not(#home), footer')
      );

      // Filter to innermost "leaf" sections so each section staggers independently
      const leafSections = allContainers.filter((container) => {
        if (container.closest(EXCLUDE_CONTAINERS)) return false;
        // If this container contains another candidate container, let the child sections be processed
        const hasChildSection = allContainers.some(
          (other) => other !== container && container.contains(other)
        );
        return !hasChildSection;
      });

      const globallyObserved = new Set();

      leafSections.forEach((section) => {
        if (section.closest(EXCLUDE_CONTAINERS)) return;

        // Query raw potential candidates inside this section
        const rawCandidates = Array.from(
          section.querySelectorAll(
            'h1, h2, h3, h4, h5, h6, p, ul > li, ol > li, blockquote, [class*="shadow-card"]:not(button):not([role="tab"]), [class*="rounded-2xl"]:not(section):not(main):not(button):not([role="tab"]), [class*="rounded-3xl"]:not(section):not(main):not(button):not([role="tab"]), [data-reveal-item]'
          )
        );

        // Filter candidates:
        // 1. Exclude navigation, cursor, and modal elements
        // 2. Prevent double animation: if candidate B is inside candidate A (e.g. p inside a card),
        //    keep the card container as the single animated unit and skip B.
        const validCandidates = rawCandidates.filter((el) => {
          if (el.closest(EXCLUDE_CONTAINERS)) return false;
          if (
            el.getAttribute('data-revealed') === 'true' ||
            el.getAttribute('data-reveal') === 'done' ||
            el.getAttribute('data-reveal') === 'revealed' ||
            el.classList.contains('is-revealed')
          ) {
            return false;
          }
          if (el.hasAttribute('data-reveal')) return false;

          // Check if el is nested inside another candidate container (card, rounded container, etc.)
          const parentContainer = el.parentElement?.closest(
            '[class*="shadow-card"], [class*="rounded-2xl"], [class*="rounded-3xl"], [data-reveal-item]'
          );
          if (parentContainer && parentContainer !== el && section.contains(parentContainer)) {
            // Let the parent container be the single animated unit
            return false;
          }

          // Check if el is an empty container or invisible
          if (el.offsetWidth === 0 && el.offsetHeight === 0) return false;

          return true;
        });

        // Calculate visual screen positions to sort strictly top-to-bottom
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollX = window.scrollX || window.pageXOffset;

        const positionedItems = validCandidates.map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            el,
            top: rect.top + scrollY,
            left: rect.left + scrollX,
          };
        });

        // Strict top-to-bottom sorting:
        // Items on different vertical levels sort by 'top'.
        // Items on the same horizontal row/shelf (within 16px) sort left-to-right.
        positionedItems.sort((a, b) => {
          if (Math.abs(a.top - b.top) > 16) {
            return a.top - b.top;
          }
          return a.left - b.left;
        });

        // Assign strictly sequential stagger indices (0, 1, 2, 3...)
        positionedItems.forEach((item, index) => {
          const el = item.el;
          if (globallyObserved.has(el)) return;
          globallyObserved.add(el);

          if (!el.hasAttribute('data-reveal')) {
            el.setAttribute('data-reveal', 'pending');
            el.style.setProperty('--stagger-idx', index.toString());
          }

          // Check if already in viewport on load (above the fold)
          const rect = el.getBoundingClientRect();
          const inViewportInitially = rect.top < window.innerHeight && rect.bottom > 0;

          if (inViewportInitially) {
            const delay = Math.min(index, 8) * 45;
            setTimeout(() => {
              el.setAttribute('data-reveal', 'revealed');
              el.setAttribute('data-revealed', 'true');
              el.classList.add('is-revealed');
              setTimeout(() => {
                el.setAttribute('data-reveal', 'done');
              }, 750);
            }, delay);
          } else {
            observer.observe(el);
          }
        });
      });
    };

    // Initial scan
    scanAndObserve();

    // Re-scan after short delay for lazy fonts and DOM hydration
    const timer = setTimeout(scanAndObserve, 250);

    // Watch for dynamically loaded subpages, tabs, or DOM additions
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
