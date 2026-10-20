// /src/pages/HomePage.jsx
// Complete one-page scroll engineering conversion experience

import React from 'react';
import Hero from '../components/Hero';
import StatsStrip from '../components/StatsStrip';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import ServicesSection from '../components/ServicesSection';
import OffshoreModel from '../components/OffshoreModel';
import PilotProject from '../components/PilotProject';
import ProcessTimeline from '../components/ProcessTimeline';
import WhyEscalup from '../components/WhyEscalup';
import SampleProjects from '../components/SampleProjects';
import ToolsSoftware from '../components/ToolsSoftware';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQAccordion from '../components/FAQAccordion';
import FinalCTABand from '../components/FinalCTABand';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenCalendly }) {
  return (
    <main className="flex-1 w-full overflow-hidden">
      <Hero onOpenCalendly={onOpenCalendly} />
      <StatsStrip />
      <WhoWeWorkWith />
      <ServicesSection />
      <OffshoreModel onOpenCalendly={onOpenCalendly} />
      <PilotProject />
      <ProcessTimeline />
      <WhyEscalup />
      <SampleProjects />
      <ToolsSoftware />
      <AboutSection />
      <TestimonialsSection />
      <FAQAccordion />
      <FinalCTABand onOpenCalendly={onOpenCalendly} />
      <ContactSection onOpenCalendly={onOpenCalendly} />
    </main>
  );
}
