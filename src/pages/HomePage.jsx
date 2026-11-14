// src/pages/HomePage.jsx
// Homepage sequence matching strict requirements:
// 1. Company Overview (FramedHero #home + LogoTicker)
// 2. Services (CuriousSection + ProductCardsTrio #services + IndustriesServicesLinks)
// 3. Process (ProcessTimeline #process)
// 4. Offshore Model (OffshoreModel #offshore-model, includes Data Security #data-security)
// 5. Portfolio (InActionCarousel #portfolio + TopStoriesCarousel)
// 6. About (AboutManifesto #about + NavigateYourNext + ThoughtLeadershipBento)
// 7. Contact (ContactSection #contact)
// 8. FAQ (FAQAccordion #faq)

import React from 'react';
import FramedHero from '../components/FramedHero';
import LogoTicker from '../components/LogoTicker';
import CuriousSection from '../components/CuriousSection';
import ProductCardsTrio from '../components/ProductCardsTrio';
import IndustriesServicesLinks from '../components/IndustriesServicesLinks';
import ProcessTimeline from '../components/ProcessTimeline';
import OffshoreModel from '../components/OffshoreModel';
import InActionCarousel from '../components/InActionCarousel';
import TopStoriesCarousel from '../components/TopStoriesCarousel';
import AboutManifesto from '../components/AboutManifesto';
import NavigateYourNext from '../components/NavigateYourNext';
import ContactSection from '../components/ContactSection';
import FAQAccordion from '../components/FAQAccordion';

export default function HomePage({ onOpenCalendly }) {
  return (
    <main className="flex-1 w-full overflow-hidden bg-[#F6F7FB] dark:bg-[#080C0F] text-[#111827] dark:text-[#F3F5FA] transition-colors">
      
      {/* -------------------------------------------------------- */}
      {/* 1. COMPANY OVERVIEW                                      */}
      {/* -------------------------------------------------------- */}
      <div id="home">
        <FramedHero onOpenCalendly={onOpenCalendly} />
        <LogoTicker />
      </div>

      {/* -------------------------------------------------------- */}
      {/* 2. SERVICES                                              */}
      {/* -------------------------------------------------------- */}
      <div id="services" className="scroll-mt-16">
        <CuriousSection onOpenCalendly={onOpenCalendly} />
        <ProductCardsTrio />
        <IndustriesServicesLinks />
      </div>

      {/* -------------------------------------------------------- */}
      {/* 3. PROCESS (Design Approach - 9 Steps)                   */}
      {/* -------------------------------------------------------- */}
      <ProcessTimeline />

      {/* -------------------------------------------------------- */}
      {/* 4. OFFSHORE MODEL & DATA SECURITY                        */}
      {/* -------------------------------------------------------- */}
      <OffshoreModel onOpenCalendly={onOpenCalendly} />

      {/* -------------------------------------------------------- */}
      {/* 5. PORTFOLIO                                             */}
      {/* -------------------------------------------------------- */}
      <InActionCarousel />
      <TopStoriesCarousel />

      {/* -------------------------------------------------------- */}
      {/* 6. ABOUT & TEAM EXTENSION                                */}
      {/* -------------------------------------------------------- */}
      <AboutManifesto onOpenCalendly={onOpenCalendly} />
      <NavigateYourNext onOpenCalendly={onOpenCalendly} />

      {/* -------------------------------------------------------- */}
      {/* 7. CONTACT                                               */}
      {/* -------------------------------------------------------- */}
      <ContactSection onOpenCalendly={onOpenCalendly} />

      {/* -------------------------------------------------------- */}
      {/* 8. FAQ                                                   */}
      {/* -------------------------------------------------------- */}
      <FAQAccordion onOpenCalendly={onOpenCalendly} />

    </main>
  );
}
