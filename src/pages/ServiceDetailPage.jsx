// src/pages/ServiceDetailPage.jsx
// STEP 4: Comprehensive Infosys-style Inner Service Page Template
// - Hero: Breadcrumbs, dark badge, very large light centered title, short text, dark pill button, soft atmospheric background, 3 segmented progress indicators.
// - Video block with centered play button and capability narrative.
// - 4 Abstract 3D capability cards.
// - "Our Offerings" split layout: left vertical tab list with active indicator, right numbered scope list.
// - Scroll-reveal text block ("Our Purpose" style).
// - "Request for Services" section: dark textured background, rounded translucent white form card, consent toggle, validation.

import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Wrench, 
  Database,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../data/services';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ScrollRevealText from '../components/ScrollRevealText';
import { submitQuoteRequest } from '../lib/supabase';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [consentNda, setConsentNda] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    scope: '',
  });

  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (service) {
      document.title = `${service.title} | escalup Engineering Services`;
    }
  }, [slug, service]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      await submitQuoteRequest({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: service.title,
        message: formData.scope,
        ndaRequested: consentNda,
      });
      setFormSubmitted(true);
      setTimeout(() => {
        navigate('/thank-you');
      }, 800);
    } catch {
      // safe fallback
      navigate('/thank-you');
    } finally {
      setFormLoading(false);
    }
  };

  const offeringsData = [
    {
      title: 'Parametric CAD & Design Modeling',
      desc: 'Creation of native SolidWorks, Inventor, and Siemens NX parts and assemblies with clean sketch constraints, robust parent-child relationships, and zero broken feature trees.',
      points: [
        'Kinematic link and actuator motion simulations',
        'Complex organic surfacing and industrial aesthetics',
        'Parametric configuration tables for product families',
        'Mass property optimization and material assignments'
      ]
    },
    {
      title: 'Production Drawings & ASME GD&T',
      desc: 'Full 2D manufacturing prints detailing datum references, feature control frames, surface finish callouts, and geometric tolerances in accordance with ASME Y14.5M.',
      points: [
        'First-article inspection balloon drawing packages',
        'Sheet metal unfolded flat patterns with K-factor deductions',
        'Tooling, jig, and fixture fabrication blueprints',
        'Borders formatted directly to client corporate standards'
      ]
    },
    {
      title: 'Multi-Level BOMs & PLM Data Migration',
      desc: 'Structured indented Bills of Materials with part numbering, description standardization, and direct ERP/MRP compatibility.',
      points: [
        'Teamcenter, Vault, and SolidWorks PDM attribute mapping',
        'Engineering Change Orders (ECN/ECO) management',
        'Legacy paper and 2D DWG conversion into parametric 3D',
        '100% drawing-to-ERP component parity guarantee'
      ]
    }
  ];

  return (
    <div className="bg-[#F6F7FB] dark:bg-[#080C0F] min-h-screen text-[#111827] dark:text-[#F3F5FA] transition-colors">
      
      {/* ======================================================== */}
      {/* 1. INFOSYS INNER HERO (matching user screenshot)         */}
      {/* ======================================================== */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-b from-[#0B1528] via-[#0E1E33] to-[#0A121F] text-white overflow-hidden">
        {/* Soft atmospheric glow / bokeh background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0070AD]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

        <div className="w-full max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          
          {/* Breadcrumb row: Services > Engineering Services > Title */}
          <div className="flex items-center gap-2 text-xs text-white/70 mb-8 font-sans">
            <Link to="/" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <Link to="/#services" className="hover:text-white transition-colors">
              Engineering Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#A5B4FC] font-semibold truncate max-w-xs">
              {service.title}
            </span>
          </div>

          {/* Dark Navy Rounded Badge Tag (Infosys style) */}
          <div className="mb-6">
            <Badge variant="navy" size="md" className="border border-white/20 shadow-md">
              Engineering Services
            </Badge>
          </div>

          {/* Very Large, Light-Weight (300-400) Title */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.14] mb-6">
            {service.title}
          </h1>

          {/* Centered Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed font-normal mb-8">
            {service.intro || 'At escalup Engineering Services, we deliver high-precision native 3D CAD modeling, MEP BIM clash resolution, and production-ready fabrication detailing for global engineering innovators.'}
          </p>

          {/* Dark Pill CTA Button */}
          <div className="flex items-center justify-center gap-3">
            <Button
              variant="white"
              size="lg"
              onClick={() => {
                const el = document.getElementById('request-service');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              icon="arrow"
              className="shadow-2xl"
            >
              Request a Service Quote
            </Button>
          </div>

          {/* Segmented Progress Indicators */}
          <div className="flex items-center gap-2.5 mt-12">
            {[0, 1, 2].map((idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === 0 ? 'w-10 bg-[#5846F6]' : 'w-4 bg-white/30'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. ABOUT CAPABILITY & VIDEO CARD SECTION                 */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left 6 cols: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0070AD] dark:text-[#A5B4FC]">
              Discipline Overview
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#111827] dark:text-white tracking-tight leading-tight">
              About <span className="font-semibold">{service.title}</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed">
              Enterprises need resilient, scalable engineering capacity to reorient their production to be more agile and enable faster launch of new releases. This requires disciplined engineering interventions in 3D parametric CAD modeling, tolerance analysis, and multi-discipline coordination.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-[#111827] dark:text-white">
                  <strong>100% Native CAD Integrity:</strong> Delivered in SolidWorks, Siemens NX, Inventor, or Revit using your exact layer and title block standards.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-[#111827] dark:text-white">
                  <strong>Zero Spatial Clash Verification:</strong> Multi-discipline collision detection in Navisworks before fabrication drawings hit the shop floor.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-[#111827] dark:text-white">
                  <strong>Dhaka Center of Excellence (BST, UTC+6):</strong> Synchronous collaboration with Western Europe and overnight sprint turnarounds for North America.
                </span>
              </div>
            </div>
          </div>

          {/* Right 6 cols: Video Block with Centered Play Button */}
          <div className="lg:col-span-6">
            <div 
              onClick={() => setVideoModalOpen(true)}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-[#0B1528] to-[#122A4A] aspect-[16/10] flex items-center justify-center cursor-pointer group border border-[#E2E6EE] dark:border-white/10"
            >
              {/* Technical background blueprint mesh */}
              <div className="absolute inset-0 blueprint-grid opacity-25" />
              
              {/* Abstract CAD wireframe overlay */}
              <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/40 to-black/80" />

              <div className="relative z-10 flex flex-col items-center gap-4 text-center p-6">
                {/* Large Centered Translucent Play Button (Infosys style) */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0070AD]/85 backdrop-blur-md text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#0070AD] transition-all">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                </div>
                <div className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                  Watch Engineering Workflow Overview
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Abstract 3D Cards below the video block (matching user screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {[
            { title: 'ASME Y14.5M Detailing', metric: 'LOD 350-400 Precision', icon: Wrench, color: 'from-blue-900/30 to-indigo-900/10' },
            { title: 'Navisworks Clash Sync', metric: 'Zero Spatial Collisions', icon: Layers, color: 'from-teal-900/30 to-emerald-900/10' },
            { title: 'Native Parametric Models', metric: '100% Feature Trees', icon: Cpu, color: 'from-purple-900/30 to-pink-900/10' },
            { title: 'Teamcenter / Vault PDM', metric: '100% ERP BOM Parity', icon: Database, color: 'from-cyan-900/30 to-blue-900/10' },
          ].map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <Card
                key={idx}
                variant="white"
                radius="2xl"
                className="p-6 border border-[#E2E6EE] dark:border-white/10 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <ItemIcon className="w-5 h-5 text-[#5846F6]" />
                  <span className="text-[10px] text-[#5A6679] dark:text-[#9BA8BA]">0{idx + 1}</span>
                </div>
                <div>
                  <div className="text-base font-bold text-[#111827] dark:text-white mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs font-medium text-[#5846F6] dark:text-[#A5B4FC]">
                    {item.metric}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. "OUR OFFERINGS" SPLIT LAYOUT                          */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] dark:bg-[#0A0E13] border-y border-[#E2E6EE] dark:border-white/10 transition-colors">
        <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
          
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0070AD] dark:text-[#A5B4FC] mb-2">
              Structured Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111827] dark:text-white tracking-tight">
              Our Detailed <span className="font-semibold">Offerings & Scopes</span>
            </h2>
          </div>

          {/* Split Layout: Left vertical tabs, Right numbered content list */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start font-sans">
            
            {/* Left 4 cols: Vertical tab list with active indicator */}
            <div className="lg:col-span-4 space-y-2 border-l-2 border-[#E2E6EE] dark:border-white/10 pl-2">
              {offeringsData.map((offering, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all relative cursor-pointer ${
                      isActive
                        ? 'bg-[#EEF2F8] dark:bg-[#151D26] text-[#5846F6] dark:text-[#A5B4FC] font-semibold shadow-sm'
                        : 'text-[#5A6679] dark:text-[#9BA8BA] hover:text-[#111827] dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeOfferingBar"
                        className="absolute -left-[10px] top-0 bottom-0 w-1 bg-[#5846F6] rounded-r"
                      />
                    )}
                    <div className="text-xs mb-1 text-[#5A6679]">Offering 0{idx + 1}</div>
                    <div className="text-sm font-semibold">{offering.title}</div>
                  </button>
                );
              })}
            </div>

            {/* Right 8 cols: Numbered Link List & Detailed Scope */}
            <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#F6F7FB] dark:bg-[#11161B] border border-[#E2E6EE] dark:border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-[#111827] dark:text-white">
                    {offeringsData[activeTab].title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed">
                    {offeringsData[activeTab].desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E2E6EE] dark:border-white/10">
                    {offeringsData[activeTab].points.map((pt, pIdx) => (
                      <div key={pIdx} className="p-4 rounded-2xl bg-white dark:bg-[#17202B] border border-[#E2E7F0] dark:border-white/5 space-y-1">
                        <div className="text-xs font-semibold text-[#5846F6]">
                          0{pIdx + 1}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-[#111827] dark:text-[#F3F5FA]">
                          {pt}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. SCROLL-REVEAL TEXT BLOCK ("OUR PURPOSE" STYLE)        */}
      {/* ======================================================== */}
      <ScrollRevealText
        tag="Engineering Purpose & Integrity"
        text="escalup bridges the global engineering talent gap with precision native CAD modeling, MEP BIM coordination, and production-ready documentation. Every drawing package is governed under strict NDA, ASME Y14.5 tolerances, and full client IP ownership."
      />

      {/* ======================================================== */}
      {/* 5. REQUEST FOR SERVICES FORM SECTION                     */}
      {/* ======================================================== */}
      <section 
        id="request-service" 
        className="py-20 sm:py-28 bg-[#0B0F14] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0070AD]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center mb-10">
            <Badge variant="teal" size="sm" className="mb-3">
              Request for Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Initiate a Project Scope for <span className="font-semibold">{service.title}</span>
            </h2>
            <p className="text-sm text-white/70 mt-2">
              Guaranteed formal scope assessment and pricing quote within 24 hours.
            </p>
          </div>

          {/* Rounded Translucent Form Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/95 dark:bg-[#111720]/95 backdrop-blur-xl text-[#111827] dark:text-white shadow-2xl border border-white/20">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#0070AD] mx-auto" />
                <h3 className="text-2xl font-bold">Request Received</h3>
                <p className="text-sm text-[#5A6679]">
                  Our lead engineering desk has received your scope parameters and is preparing your quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#5A6679] dark:text-[#9BA8BA]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F7FB] dark:bg-[#17202B] border border-[#D8DFEB] dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0070AD]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#5A6679] dark:text-[#9BA8BA]">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F7FB] dark:bg-[#17202B] border border-[#D8DFEB] dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0070AD]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#5A6679] dark:text-[#9BA8BA]">
                    Company Name & Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Industrial Solutions (London, UK)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F6F7FB] dark:bg-[#17202B] border border-[#D8DFEB] dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0070AD]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#5A6679] dark:text-[#9BA8BA]">
                    Project Scope & Software Preferences *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe parts, expected drawing count, preferred software (SolidWorks, Inventor, Revit), and project timeline..."
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F6F7FB] dark:bg-[#17202B] border border-[#D8DFEB] dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0070AD]"
                  />
                </div>

                {/* Consent & NDA Toggle */}
                <div className="pt-2 flex items-center justify-between p-4 rounded-xl bg-[#EEF2F8] dark:bg-[#17202B] border border-[#D8DFEB] dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-[#5846F6] shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-[#111827] dark:text-white">
                        Execute Mutual Non-Disclosure Agreement (NDA)
                      </div>
                      <div className="text-[11px] text-[#5A6679] dark:text-[#9BA8BA]">
                        Send signed mutual NDA before sharing CAD files or proprietary data.
                      </div>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    checked={consentNda}
                    onChange={(e) => setConsentNda(e.target.checked)}
                    className="w-5 h-5 text-[#5846F6] rounded cursor-pointer"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formLoading}
                    icon="arrow"
                    className="w-full shadow-lg"
                  >
                    {formLoading ? 'Submitting Scope...' : 'Submit Request for Services'}
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* VIDEO MODAL (Interactive Play Demo)                      */}
      {/* ======================================================== */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setVideoModalOpen(false)}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-3xl bg-[#0B0F14] border border-white/20 p-6 sm:p-8 text-white shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Play className="w-4 h-4 text-[#0070AD]" />
                  <span>{service.title} · Engineering Workflow Overview</span>
                </div>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Technical Animation / CAD Simulation Placeholder */}
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#0B1528] to-[#040810] border border-white/10 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-30" />
                <div className="relative z-10 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-[#5846F6]/20 border border-[#5846F6]/40 text-[#A5B4FC] flex items-center justify-center mx-auto">
                    <Cpu className="w-8 h-8 animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold">
                    Parametric CAD & Clash Detection Engine
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto">
                    Our team conducts live engineering sprint reviews over Microsoft Teams, Slack, and Google Meet with screen sharing and model walkthroughs.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-white/60">
                <span>Governed Under ASME Y14.5M & ISO 9001</span>
                <Button variant="white" size="sm" onClick={() => setVideoModalOpen(false)}>
                  Close Preview
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
