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
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  ChevronRight
} from 'lucide-react';
import { servicesData, standardsSummaryTable } from '../data/services';
import GlassBadge from '../components/ui/GlassBadge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ScrollRevealText from '../components/ScrollRevealText';
import { submitQuoteRequest } from '../lib/supabase';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

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

          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed font-normal mb-8">
            {service.intro}
          </p>

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
              Request a Service Scope
            </Button>
          </div>

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

      {/* -------------------------------------------------------- */}
      {/* 2. DISCIPLINE OVERVIEW & HIGHLIGHT CARDS                 */}
      {/* -------------------------------------------------------- */}
      <section className="py-20 sm:py-28 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="mb-2">
              <GlassBadge>Discipline Overview</GlassBadge>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#111827] dark:text-white tracking-tight leading-tight">
              About <span className="font-semibold">{service.title}</span>
            </h2>

            <p className="text-sm sm:text-base text-[#475569] dark:text-[#9BA8BA] leading-relaxed">
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

          {/* Right Video / Preview Card */}
          <div className="lg:col-span-6">
            <div 
              onClick={() => setVideoModalOpen(true)}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-[#0B1528] to-[#122A4A] aspect-[16/10] flex items-center justify-center cursor-pointer group border border-[#E2E6EE] dark:border-white/10"
            >
              <div className="absolute inset-0 blueprint-grid opacity-25" />
              <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/40 to-black/80" />

              <div className="relative z-10 flex flex-col items-center gap-4 text-center p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0070AD]/85 backdrop-blur-md text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#0070AD] transition-all">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                </div>
                <div className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                  Technical Workflow Overview
                </div>
              </div>
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
          
          <div className="max-w-3xl mb-12">
            <div className="mb-3.5">
              <GlassBadge>Capabilities Breakdown</GlassBadge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111827] dark:text-white tracking-tight">
              Scope of <span className="font-semibold">{service.title}</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA] mt-2">
              Every deliverable is prepared for manufacturing or construction, following the Design Approach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.items.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#F6F7FB] dark:bg-[#11161B] border border-[#E2E6EE] dark:border-white/10 shadow-card"
              >
                <div className="text-xs font-mono font-bold text-[#5846F6] mb-2">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-2 leading-snug">
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* 4. INTERNATIONAL STANDARDS SUMMARY TABLE                 */}
      {/* -------------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-[#F6F7FB] dark:bg-[#080C0F] border-b border-[#E2E6EE] dark:border-white/10 transition-colors">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-10">
            <div className="mb-3.5">
              <GlassBadge>Compliance & Quality</GlassBadge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111827] dark:text-white tracking-tight">
              International <span className="font-semibold">Standards Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#9BA8BA] mt-2">
              We apply the standards required by the project and the client. The governing standards and editions are confirmed at the Requirements & Scope stage.
            </p>
          </div>

          {/* Two-Column Standards Summary Table */}
          <div className="rounded-3xl bg-white dark:bg-[#11161B] border border-[#E2E6EE] dark:border-white/10 shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#EEF2F8] dark:bg-[#17202B] text-xs font-semibold uppercase tracking-wider text-[#111827] dark:text-white border-b border-[#E2E6EE] dark:border-white/10">
                    <th className="py-4 px-6 sm:px-8 w-1/3">Service</th>
                    <th className="py-4 px-6 sm:px-8 w-2/3">Key Standards</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E6EE] dark:divide-white/10">
                  {standardsSummaryTable.map((row, idx) => (
                    <tr 
                      key={idx}
                      className="hover:bg-[#F6F7FB] dark:hover:bg-[#151D26] transition-colors"
                    >
                      <td className="py-4 px-6 sm:px-8 font-semibold text-[#111827] dark:text-white">
                        {row.service}
                      </td>
                      <td className="py-4 px-6 sm:px-8 text-[#475569] dark:text-[#9BA8BA]">
                        {row.standards}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-white dark:bg-[#11161B] border border-[#E2E6EE] dark:border-white/10 text-xs text-[#5A6679] dark:text-[#9BA8BA]">
            <strong>Note:</strong> We apply the standards required by the project and the client. The governing standards and editions are confirmed at the Requirements & Scope stage.
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* 5. SCROLL-REVEAL TEXT BLOCK                              */}
      {/* -------------------------------------------------------- */}
      <ScrollRevealText
        tag="Engineering Purpose & Integrity"
        text="Escalup works as an offshore extension of your engineering team. We take on defined design tasks or full project packages and deliver models, drawings and documents that meet your requirements and applicable standards."
      />

      {/* -------------------------------------------------------- */}
      {/* 6. REQUEST FOR SERVICES FORM SECTION                     */}
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
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
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

      {/* -------------------------------------------------------- */}
      {/* 7. PREVIEW MODAL                                         */}
      {/* -------------------------------------------------------- */}
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

              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#0B1528] to-[#040810] border border-white/10 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-30" />
                <div className="relative z-10 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-[#5846F6]/20 border border-[#5846F6]/40 text-[#A5B4FC] flex items-center justify-center mx-auto">
                    <Cpu className="w-8 h-8 animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold">
                    Parametric CAD & Technical Coordination
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto">
                    All deliverables are checked against applicable standards and managed through controlled change records.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-white/60">
                <span>Governed Under ASME & ISO Standards</span>
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
