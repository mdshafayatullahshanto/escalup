// /src/pages/HomePage.jsx
// Complete Consilio-inspired editorial engineering experience for escalup

import React from 'react';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';
import AboutManifesto from '../components/AboutManifesto';
import ServicesSection from '../components/ServicesSection';
import ValuesSection from '../components/ValuesSection';
import SampleProjects from '../components/SampleProjects';
import TestimonialsSection from '../components/TestimonialsSection';
import ProcessTimeline from '../components/ProcessTimeline';
import WhyEscalup from '../components/WhyEscalup';
import ComparisonSection from '../components/ComparisonSection';
import OffshoreModel from '../components/OffshoreModel';
import PilotProject from '../components/PilotProject';
import StatsStrip from '../components/StatsStrip';
import ToolsSoftware from '../components/ToolsSoftware';
import AboutSection from '../components/AboutSection';
import FAQAccordion from '../components/FAQAccordion';
import FinalCTABand from '../components/FinalCTABand';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenCalendly }) {
  return (
    <main className="flex-1 w-full overflow-hidden">
      {/* 1. Consilio-style Hero with editorial typography, pill CTAs & CAD 3D wireframe */}
      <Hero onOpenCalendly={onOpenCalendly} />

      {/* 2. Continuous Engineering Standards & Software Marquee Ticker */}
      <LogoTicker />

      {/* 3. Consilio-style Large Statement, 3 Feature Pillars & Tag Ticker */}
      <AboutManifesto />

      {/* 4. Expert Engineering For Every Stage (Services Bento Grid) */}
      <ServicesSection />

      {/* 5. Principles Behind Our Client Partnerships (Values Grid) */}
      <ValuesSection />

      {/* 6. Real Results From Engineering Partnerships (Case Studies / Projects) */}
      <SampleProjects />

      {/* 7. Client Reviews & Feedback (Auto-hides cleanly when empty) */}
      <TestimonialsSection />

      {/* 8. A Proven Framework For Precision Delivery (3-Phase Process Workflow) */}
      <ProcessTimeline />

      {/* 9. The Advantage Of Working With escalup */}
      <WhyEscalup onOpenCalendly={onOpenCalendly} />

      {/* 10. Consilio-style Signature Comparison: Other Firms vs With escalup */}
      <ComparisonSection />

      {/* 11. Dedicated Offshore Engagement Models & BST Time Overlaps */}
      <OffshoreModel onOpenCalendly={onOpenCalendly} />

      {/* 12. Low-Risk International Kickoff Paid Pilot Project */}
      <PilotProject />

      {/* 13. Key Metrics & Impact Statistics Strip */}
      <StatsStrip />

      {/* 14. Supported Engineering CAD & BIM Platforms */}
      <ToolsSoftware />

      {/* 15. About escalup Leadership & Dhaka Engineering Hub */}
      <AboutSection />

      {/* 16. Commonly Asked Questions (Split FAQ Layout with Guidance Box) */}
      <FAQAccordion onOpenCalendly={onOpenCalendly} />

      {/* 17. Build With Precision. Unlock Engineering Scale (Final CTA Band) */}
      <FinalCTABand onOpenCalendly={onOpenCalendly} />

      {/* 18. Comprehensive Engineering Inquiry & Quote Form */}
      <ContactSection onOpenCalendly={onOpenCalendly} />
    </main>
  );
}
