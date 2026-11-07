// src/components/IndustriesServicesLinks.jsx
// STEP 3 - Item 6: "Industries and Services" as a 4-column grid of underlined links.

import React from 'react';
import UnderlineLink from './ui/UnderlineLink';

const DIRECTORY_COLUMNS = [
  {
    title: 'Mechanical Design & CAD',
    links: [
      { label: 'SolidWorks 3D Parametric Modeling', to: '/services/mechanical-design-cad' },
      { label: 'Siemens NX Complex Solid Assemblies', to: '/services/mechanical-design-cad' },
      { label: 'Autodesk Inventor Machine Design', to: '/services/mechanical-design-cad' },
      { label: 'Kinematic & Dynamic Mechanism Simulation', to: '/services/mechanical-design-cad' },
      { label: 'Reverse Engineering from 3D Scan Data', to: '/services/mechanical-design-cad' },
      { label: 'Finite Element Analysis (FEA) Stress Checks', to: '/services/mechanical-design-cad' },
    ]
  },
  {
    title: 'MEP Design & BIM Coordination',
    links: [
      { label: 'Autodesk Revit MEP LOD 300–400 Modeling', to: '/services/mep-design-bim' },
      { label: 'Navisworks Spatial Clash Detection', to: '/services/mep-design-bim' },
      { label: 'HVAC Duct & Pipe Sizing (Carrier HAP)', to: '/services/mep-design-bim' },
      { label: 'Plumbing & Drainage Engineering Drawings', to: '/services/mep-design-bim' },
      { label: 'Fire Protection & Sprinkler Network Layouts', to: '/services/mep-design-bim' },
      { label: 'Contractor Spool & Fabrication Drawings', to: '/services/mep-design-bim' },
    ]
  },
  {
    title: 'DFMA & Production Detailing',
    links: [
      { label: 'ASME Y14.5M Geometric Tolerancing (GD&T)', to: '/services/dfma-production-detailing' },
      { label: 'Sheet Metal Flat Patterns & Bend Deduction', to: '/services/dfma-production-detailing' },
      { label: 'Tooling, Jigs & Fixture Manufacturing Prints', to: '/services/dfma-production-detailing' },
      { label: 'CNC & CAM Machine Shop Preparation', to: '/services/dfma-production-detailing' },
      { label: 'Multi-Level Indented Bills of Materials (BOM)', to: '/services/plm-bom-engineering-data' },
      { label: 'Engineering Change Orders (ECN / ECO)', to: '/services/plm-bom-engineering-data' },
    ]
  },
  {
    title: 'Industries We Support',
    links: [
      { label: 'Packaging & Automated Machinery Builders', href: '#industries' },
      { label: 'Commercial MEP & HVAC Contractors', href: '#industries' },
      { label: 'Consumer Electronics & Hardware Startups', href: '#industries' },
      { label: 'Engineering & Architectural Consultancies', href: '#industries' },
      { label: 'Heavy Equipment & Structural Fabricators', href: '#industries' },
      { label: 'Global Dedicated Offshore CAD Desks', href: '#offshore-model' },
    ]
  }
];

export default function IndustriesServicesLinks() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] dark:bg-[#0A0E13] border-b border-[#E2E6EE] dark:border-white/10 transition-colors">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#0070AD] dark:text-[#38BDF8] mb-2">
            Engineering Directory
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#111827] dark:text-white tracking-tight">
            Industries and Services <span className="font-semibold">Capability Matrix</span>
          </h2>
          <p className="text-sm text-[#5A6679] dark:text-[#9BA8BA] mt-2">
            Explore dedicated offshore engineering teams across mechanical, MEP, and manufacturing disciplines.
          </p>
        </div>

        {/* 4-Column Grid of Thin Underlined Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {DIRECTORY_COLUMNS.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-base font-bold text-[#111827] dark:text-white pb-3 border-b border-[#E2E6EE] dark:border-white/10 flex items-center justify-between">
                <span>{col.title}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070AD]" />
              </h3>

              <ul className="space-y-3">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <UnderlineLink
                      to={link.to}
                      href={link.href}
                      color="default"
                      icon="none"
                      className="text-xs sm:text-sm text-[#5A6679] dark:text-[#9BA8BA] hover:text-[#0070AD] dark:hover:text-[#38BDF8]"
                    >
                      {link.label}
                    </UnderlineLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
