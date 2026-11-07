// /src/pages/HomePage.jsx
// Infosys-inspired corporate enterprise engineering experience for escalup
// Seamless corporate storytelling, interactive multi-story carousel, industry solutions, and verified outcomes.

import React from 'react';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';
import NavigateYourNext from '../components/NavigateYourNext';
import ServicesSection from '../components/ServicesSection';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import ValuesSection from '../components/ValuesSection';
import SampleProjects from '../components/SampleProjects';
import ProcessTimeline from '../components/ProcessTimeline';
import WhyEscalup from '../components/WhyEscalup';
import ComparisonSection from '../components/ComparisonSection';
import OffshoreModel from '../components/OffshoreModel';
import PilotProject from '../components/PilotProject';
import StatsStrip from '../components/StatsStrip';
import ToolsSoftware from '../components/ToolsSoftware';
import AboutManifesto from '../components/AboutManifesto';
import FAQAccordion from '../components/FAQAccordion';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function HomePage({ onOpenCalendly }) {
  return (
    <main className="flex-1 w-full overflow-hidden bg-[#FFFFFF] dark:bg-[#0B1519] text-[#14201D] dark:text-[#E4EDE9]">
      
      {/* 1. Infosys-Style Hero: Authoritative typography, interactive 4-story carousel, CAD 3D wireframe */}
      <Hero onOpenCalendly={onOpenCalendly} />

      {/* 2. Engineering Standards, Compliance & Software Marquee Ticker */}
      <LogoTicker />

      {/* 3. Infosys Signature: "Navigate Your Next" Enterprise Transformation Section */}
      <NavigateYourNext onOpenCalendly={onOpenCalendly} />

      {/* 4. Engineering Services & Capabilities Matrix (With Category Filter Pills) */}
      <ServicesSection />

      {/* 5. Industries & Sectors We Serve (Manufacturers, Consultancies, MEP, Hardware Innovators) */}
      <WhoWeWorkWith />

      {/* 6. Real Results & Case Studies (Quantifiable metrics: 28% cost reduction, 124 clashes caught) */}
      <SampleProjects />

      {/* 7. Engineering Principles & Hygiene (Values Grid) */}
      <ValuesSection />

      {/* 8. Verified Client Reviews (Auto-hides cleanly when empty) */}
      <TestimonialsSection />

      {/* 9. A Proven 6-Gate Delivery Framework */}
      <ProcessTimeline />

      {/* 10. The escalup Advantage */}
      <WhyEscalup onOpenCalendly={onOpenCalendly} />

      {/* 11. Symmetrical Comparison: Other Offshore Firms vs The escalup Standard */}
      <ComparisonSection />

      {/* 12. Global Delivery Engine, Live World Clock & 3 Engagement Models */}
      <OffshoreModel onOpenCalendly={onOpenCalendly} />

      {/* 13. Low-Risk International Trial: Small Paid Pilot Project */}
      <PilotProject />

      {/* 14. Verified Key Performance Indicators & Impact Statistics Strip */}
      <StatsStrip />

      {/* 14. Supported Engineering CAD & BIM Software Platforms */}
      <ToolsSoftware />

      {/* 15. Consolidated About escalup: Narrative, Dhaka Engineering Hub & Leadership */}
      <AboutManifesto />

      {/* 16. Frequently Asked Questions (Split Corporate Accordion) */}
      <FAQAccordion onOpenCalendly={onOpenCalendly} />

      {/* 17. Comprehensive Enterprise RFQ & Quote Request Hub */}
      <ContactSection onOpenCalendly={onOpenCalendly} />

    </main>
  );
}
