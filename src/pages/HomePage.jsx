// src/pages/HomePage.jsx
// STEP 3 – Complete Homepage Reorganization (Strict Infosys Flow):
// 1. Full-viewport framed hero: media inside frame, outer margin, rounded corners, rotating lightweight headline with word opacity/weight changes, scroll parallax.
// 2. "Top Stories" carousel on light panel: image-left cards, "1/4" counter, circular prev/next arrows.
// 3. Centered heading with gradient highlight word, short subtext, dark pill button ("I'm Curious").
// 4. Three tall product cards with abstract gradient graphics & overlapping white content cards (center card raised).
// 5. Black "In Action" section with horizontal carousel and arrow/counter controls.
// 6. "Industries and Services" 4-column grid of underlined links.
// 7. "Research, Announcements & Thought Leadership" bento grid.
// 8. Black careers & partnership banner with heading, text, white pill button, photo on right.
// 9. Supporting enterprise sections: NavigateYourNext, Standards Ticker, Offshore Model, FAQ Accordion, Contact Section.

import React from 'react';
import FramedHero from '../components/FramedHero';
import TopStoriesCarousel from '../components/TopStoriesCarousel';
import CuriousSection from '../components/CuriousSection';
import ProductCardsTrio from '../components/ProductCardsTrio';
import InActionCarousel from '../components/InActionCarousel';
import IndustriesServicesLinks from '../components/IndustriesServicesLinks';
import ThoughtLeadershipBento from '../components/ThoughtLeadershipBento';
import CareersBanner from '../components/CareersBanner';
import LogoTicker from '../components/LogoTicker';
import NavigateYourNext from '../components/NavigateYourNext';
import OffshoreModel from '../components/OffshoreModel';
import FAQAccordion from '../components/FAQAccordion';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenCalendly }) {
  return (
    <main className="flex-1 w-full overflow-hidden bg-[#F6F7FB] dark:bg-[#080C0F] text-[#111827] dark:text-[#F3F5FA] transition-colors">
      
      {/* -------------------------------------------------------- */}
      {/* 1. Full-viewport framed hero with rotating headline      */}
      {/* -------------------------------------------------------- */}
      <FramedHero onOpenCalendly={onOpenCalendly} />

      {/* Engineering Compliance & CAD Platforms Marquee Ticker */}
      <LogoTicker />

      {/* -------------------------------------------------------- */}
      {/* 2. "Top Stories" carousel on a light panel               */}
      {/* -------------------------------------------------------- */}
      <TopStoriesCarousel />

      {/* -------------------------------------------------------- */}
      {/* 3. Centered heading with gradient highlight & dark pill  */}
      {/* -------------------------------------------------------- */}
      <CuriousSection onOpenCalendly={onOpenCalendly} />

      {/* -------------------------------------------------------- */}
      {/* 4. Three tall product cards (center card raised)         */}
      {/* -------------------------------------------------------- */}
      <ProductCardsTrio />

      {/* -------------------------------------------------------- */}
      {/* 5. Black "In Action" section with horizontal carousel    */}
      {/* -------------------------------------------------------- */}
      <InActionCarousel />

      {/* -------------------------------------------------------- */}
      {/* 6. "Industries and Services" 4-column underlined links   */}
      {/* -------------------------------------------------------- */}
      <IndustriesServicesLinks />

      {/* -------------------------------------------------------- */}
      {/* 7. "Research, Announcements & Thought Leadership" bento  */}
      {/* -------------------------------------------------------- */}
      <ThoughtLeadershipBento />

      {/* -------------------------------------------------------- */}
      {/* 8. Black careers banner (text, white pill, team photo)   */}
      {/* -------------------------------------------------------- */}
      <CareersBanner onOpenCalendly={onOpenCalendly} />

      {/* Enterprise Transformation Deep Dive */}
      <NavigateYourNext onOpenCalendly={onOpenCalendly} />

      {/* Global Offshore Delivery Engine & Working Hours */}
      <OffshoreModel onOpenCalendly={onOpenCalendly} />

      {/* Frequently Asked Questions */}
      <FAQAccordion onOpenCalendly={onOpenCalendly} />

      {/* Enterprise RFQ & Scope Request */}
      <ContactSection onOpenCalendly={onOpenCalendly} />

    </main>
  );
}
