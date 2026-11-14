import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import CalendlyModal from './components/CalendlyModal';
import HomePage from './pages/HomePage';
import Logo from './components/Logo';
import GlobalScrollRevealer from './components/GlobalScrollRevealer';

// Lazy-loaded subpages for optimal performance & fast initial load
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading fallback spinner with escalup brand styling
function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F6F7FB] dark:bg-[#080C0F] text-[#111827] dark:text-[#F3F5FA] gap-4">
      <Logo size="lg" link={false} />
      <div className="w-5 h-5 rounded-full border-2 border-[#2E756E]/20 border-t-[#2E756E] animate-spin"></div>
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

// Animated routes with smooth transition between pages
function AnimatedRoutes({ onOpenCalendly }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 w-full"
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route
              path="/"
              element={<HomePage onOpenCalendly={onOpenCalendly} />}
            />
            <Route
              path="/services/:slug"
              element={<ServiceDetailPage onOpenCalendly={onOpenCalendly} />}
            />
            <Route
              path="/thank-you"
              element={<ThankYouPage onOpenCalendly={onOpenCalendly} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  // Smooth scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ThemeProvider>
      <Router>
        <ScrollManager />
        <GlobalScrollRevealer />

        {/* Top Reading / Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#5846F6] origin-left z-50 pointer-events-none shadow-[0_0_10px_rgba(88,70,246,0.5)]"
          style={{ scaleX }}
        />

        <div className="flex flex-col min-h-screen bg-[#F6F7FB] dark:bg-[#080C0F] text-[#111827] dark:text-[#F3F5FA] font-sans antialiased selection:bg-[#5846F6]/20 selection:text-[#5846F6]">
          {/* Sticky Global Navigation */}
          <Navbar onOpenCalendly={() => setCalendlyOpen(true)} />

          {/* Animated Page Transitions */}
          <AnimatedRoutes onOpenCalendly={() => setCalendlyOpen(true)} />

          {/* Global Footer */}
          <Footer onOpenCalendly={() => setCalendlyOpen(true)} />

          {/* Floating Circular Assistant & Scroll to Top */}
          <FloatingActions onOpenCalendly={() => setCalendlyOpen(true)} />

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
