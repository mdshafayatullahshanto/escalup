import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import FloatingActions from './components/FloatingActions';
import CalendlyModal from './components/CalendlyModal';
import HomePage from './pages/HomePage';

// Lazy-loaded subpages for optimal performance & fast initial load
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading fallback spinner with escalup brand styling
function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F4F6F5] dark:bg-[#0B111E]">
      <div className="w-10 h-10 rounded-full border-3 border-[#DBE3E0] dark:border-[#223249] border-t-[#2E756E] animate-spin mb-3"></div>
      <span className="text-xs font-semibold text-[#5A6A65] dark:text-[#94A3B8] font-mono">escalup engineering...</span>
    </div>
  );
}

// Scroll to top or handle hash navigation on route change
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  // Smooth scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <Router>
        <ScrollManager />
        {/* Top Reading / Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#2E756E] origin-left z-50 pointer-events-none shadow-sm"
          style={{ scaleX }}
        />

        <div className="flex flex-col min-h-screen bg-[#F4F6F5] dark:bg-[#0B111E] text-[#14201D] dark:text-[#F1F5F9] font-sans antialiased selection:bg-[#2E756E]/20 selection:text-[#2E756E]">
          {/* Sticky Global Navigation */}
          <Navbar onOpenCalendly={() => setCalendlyOpen(true)} />

          {/* Route Pages with Suspense */}
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenCalendly={() => setCalendlyOpen(true)}
                  />
                }
              />
              <Route
                path="/services/:slug"
                element={
                  <ServiceDetailPage
                    onOpenCalendly={() => setCalendlyOpen(true)}
                  />
                }
              />
              <Route
                path="/thank-you"
                element={<ThankYouPage onOpenCalendly={() => setCalendlyOpen(true)} />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>

          {/* Global Footer */}
          <Footer
            onOpenCalendly={() => setCalendlyOpen(true)}
          />

          {/* Desktop Floating Actions (Scroll to Top) */}
          <FloatingActions />

          {/* Mobile Sticky Bottom CTA */}
          <StickyMobileCTA />

          {/* Global Modals with AnimatePresence */}
          <AnimatePresence>
            {calendlyOpen && (
              <CalendlyModal
                isOpen={calendlyOpen}
                onClose={() => setCalendlyOpen(false)}
              />
            )}
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
}
