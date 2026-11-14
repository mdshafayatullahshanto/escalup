// src/pages/ServiceDetailPage.jsx
// Service Detail Page Template
// - Hero: Breadcrumbs, badge, large light centered title, short text, pill button, segmented indicators.
// - Discipline Overview & Technical Capabilities.
// - Detailed Sub-Services & Production Deliverables for the active service.
// - International Standards Summary Table for all 7 services.
// - Design Approach integration.
// - Request for Services scope form.

import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../data/services';
import GlassBadge from '../components/ui/GlassBadge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ScrollRevealText from '../components/ScrollRevealText';
import { submitQuoteRequest } from '../lib/supabase';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

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
      document.title = `${service.title} | Escalup Engineering Services`;
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
      navigate('/thank-you');
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="bg-[#F6F7FB] dark:bg-[#080C0F] min-h-screen text-[#111827] dark:text-[#F3F5FA] transition-colors">
      
      {/* -------------------------------------------------------- */}
      {/* 1. HERO                                                  */}
      {/* -------------------------------------------------------- */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-b from-[#0B1528] via-[#0E1E33] to-[#0A121F] text-white overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0070AD]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

        <div className="w-full max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          
          {/* Breadcrumb row */}
          <div className="flex items-center gap-2 text-xs text-white/70 mb-8 font-sans">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <a href="/#services" className="hover:text-white transition-colors">
              Services
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#A5B4FC] font-semibold truncate max-w-xs">
              {service.title}
            </span>
          </div>

          <div className="mb-6">
            <GlassBadge>{service.tag}</GlassBadge>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.14] mb-6">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed font-normal">
            {service.intro}
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* 2. DISCIPLINE OVERVIEW & HIGHLIGHT CARDS                 */}
      {/* -------------------------------------------------------- */}
      <section className="py-20 sm:py-28 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 font-sans">
        <div className="w-full max-w-6xl space-y-6">
          <div className="mb-2">
            <GlassBadge>Discipline Overview</GlassBadge>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#111827] dark:text-white tracking-tight leading-tight sm:whitespace-nowrap">
            About <span className="font-semibold">{service.title}</span>
          </h2>

          <p className="text-sm sm:text-base text-[#475569] dark:text-[#9BA8BA] leading-relaxed max-w-3xl">
            {service.shortDesc}
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0 mt-1" />
              <span className="text-xs sm:text-sm text-[#111827] dark:text-white">
                <strong>Native CAD & Drawing Integrity:</strong> Modeled directly in client-specified formats using corporate drawing templates.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0 mt-1" />
              <span className="text-xs sm:text-sm text-[#111827] dark:text-white">
                <strong>Governing Standards:</strong> {service.standardsDetail}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#5846F6] shrink-0 mt-1" />
              <span className="text-xs sm:text-sm text-[#111827] dark:text-white">
                <strong>Controlled Revisions:</strong> Managed through controlled product data, change records, and milestone review gates.
              </span>
            </div>
          </div>
        </div>

        {/* Deliverables summary strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {service.deliverables.slice(0, 4).map((deliv, idx) => (
            <Card
              key={idx}
              variant="white"
              radius="2xl"
              className="p-5 border border-[#E2E6EE] dark:border-white/10 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#5846F6]" />
                <span className="text-[10px] text-[#5A6679] dark:text-[#9BA8BA]">0{idx + 1}</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#111827] dark:text-white leading-snug">
                {deliv}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* 3. SUB-SERVICES BREAKDOWN                                */}
      {/* -------------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] dark:bg-[#0A0E13] border-y border-[#E2E6EE] dark:border-white/10 transition-colors">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="w-full max-w-5xl mx-auto text-center mb-12">
            <div className="mb-3.5">
              <GlassBadge>Capabilities Breakdown</GlassBadge>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#111827] dark:text-white tracking-tight sm:whitespace-nowrap">
              Scope of <span className="font-semibold">{service.title}</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA] mt-2 max-w-xl mx-auto">
              Every deliverable is prepared for manufacturing or construction, following the Design Approach.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {service.items.map((item, idx) => (
              <div 
                key={idx}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-6 rounded-2xl bg-[#F6F7FB] dark:bg-[#11161B] border border-[#E2E6EE] dark:border-white/10 shadow-card flex flex-col justify-start"
              >
                <div className="text-xs font-mono font-bold text-[#5846F6] mb-2">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-semibold text-[#111827] dark:text-white leading-snug">
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* 4. SCROLL-REVEAL TEXT BLOCK                              */}
      {/* -------------------------------------------------------- */}
      <ScrollRevealText
        tag="Engineering Purpose & Integrity"
        text="Escalup works as an offshore extension of your engineering team. We take on defined design tasks or full project packages and deliver models, drawings and documents that meet your requirements and applicable standards."
      />

      {/* -------------------------------------------------------- */}
      {/* 5. REQUEST FOR SERVICES FORM SECTION                     */}
      {/* -------------------------------------------------------- */}
      <section 
        id="request-service" 
        className="py-20 sm:py-28 bg-[#0B0F14] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0070AD]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center mb-10">
            <div className="mb-3.5 flex justify-center">
              <GlassBadge>Request for Services</GlassBadge>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-tight sm:whitespace-nowrap">
              Initiate a Project Scope for <span className="font-semibold">{service.title}</span>
            </h2>
            <p className="text-sm text-white/70 mt-2">
              Share your project requirements. We will review them and respond with a proposed scope.
            </p>
          </div>

          {/* Form Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/95 dark:bg-[#111720]/95 backdrop-blur-xl text-[#111827] dark:text-white shadow-2xl border border-white/20">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#0070AD] mx-auto" />
                <h3 className="text-2xl font-bold">Request Received</h3>
                <p className="text-sm text-[#5A6679]">
                  Our lead engineering desk has received your scope parameters and is preparing your scope proposal.
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
                    placeholder="e.g. Apex Industrial Solutions"
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
                    placeholder="Describe parts, expected drawing count, preferred software (SolidWorks, Siemens NX, Inventor, Revit), and project timeline..."
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
                        Mutual NDA before data sharing; client owns all project IP.
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

    </div>
  );
}
