// /src/components/ContactSection.jsx
// Conversion-focused engineering quote request form with Calendly embed trigger, capability download, and Dhaka operational card

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Send, 
  Calendar, 
  MapPin, 
  Mail, 
  Clock, 
  FileUp, 
  ShieldCheck, 
  Loader2, 
  ExternalLink
} from 'lucide-react';
import { companyData } from '../data/company';
import { servicesData } from '../data/services';
import { trackQuoteSubmit, trackCallBooking } from '../utils/analytics';
import { submitQuoteRequest } from '../lib/supabase';
import SectionHeading from './SectionHeading';

export default function ContactSection({ onOpenCalendly }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    service: servicesData[0].title,
    engagementModel: 'Project-Based',
    timeline: 'Within 2 weeks',
    details: '',
    ndaRequested: true,
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.company.trim()) errs.company = 'Please specify your company or organization';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid work email';
    }
    if (!formData.country.trim()) errs.country = 'Country is required';
    if (!formData.details.trim()) errs.details = 'Please briefly outline your engineering project';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // Track analytics event
      trackQuoteSubmit(formData.service, formData.engagementModel);

      // Save to Supabase backend database & storage
      await submitQuoteRequest(formData, selectedFile);

      // Optional forward to external webhook (Formspree/EmailJS) if configured
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      if (formspreeEndpoint) {
        try {
          await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...formData,
              fileName: selectedFile ? selectedFile.name : null,
              submittedAt: new Date().toISOString()
            })
          });
        } catch (webhookErr) {
          console.warn('External webhook warning:', webhookErr);
        }
      }

      // Store submitted info in session storage for the thank you page
      sessionStorage.setItem('escalup_last_quote', JSON.stringify({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        service: formData.service,
        model: formData.engagementModel
      }));

      // Redirect to thank-you page
      navigate('/thank-you');
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback navigate to thank you page so client conversion is never blocked
      navigate('/thank-you');
    } finally {
      setLoading(false);
    }
  };

  const handleBookCall = () => {
    trackCallBooking('contact_sidebar_button');
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#000D0E] relative scroll-mt-12">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        
        <SectionHeading
          eyebrow="Initiate Project Discussion"
          title="Request a Detailed Engineering Quote"
          subtitle="Send us your drawings, CAD files, or project brief. We will review your technical specifications and return a comprehensive quote within 24 hours."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Form Column (7 cols) with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 bg-[#001517] rounded-3xl p-7 sm:p-10 border border-white/[0.08] shadow-2xl"
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
              <div>
                <h3 className="text-xl font-bold text-white">Project Scope & Specifications</h3>
                <p className="text-xs text-white/60">All submissions are encrypted and strictly protected under mutual NDA.</p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#14F3C1] bg-[#14F3C1]/10 px-3 py-1 rounded-full border border-[#14F3C1]/20">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA Protected</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & Company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-name" className="block text-xs font-semibold text-white/90 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Michael Vance"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[#14F3C1] focus:border-[#14F3C1] bg-[#000D0E] text-white placeholder-white/30 ${
                      errors.name ? 'border-rose-400' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="form-company" className="block text-xs font-semibold text-white/90 mb-1.5">
                    Company / Organization <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="form-company"
                    name="company"
                    type="text"
                    required
                    placeholder="e.g. Apex Industrial Systems"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[#14F3C1] focus:border-[#14F3C1] bg-[#000D0E] text-white placeholder-white/30 ${
                      errors.company ? 'border-rose-400' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {errors.company && <p className="text-[11px] text-rose-400 mt-1">{errors.company}</p>}
                </div>
              </div>

              {/* Row 2: Work Email & Country */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-email" className="block text-xs font-semibold text-white/90 mb-1.5">
                    Work Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="form-email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[#14F3C1] focus:border-[#14F3C1] bg-[#000D0E] text-white placeholder-white/30 ${
                      errors.email ? 'border-rose-400' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="form-country" className="block text-xs font-semibold text-white/90 mb-1.5">
                    Country / Region <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="form-country"
                    name="country"
                    type="text"
                    required
                    placeholder="e.g. Europe, North America, Middle East, APAC"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[#14F3C1] focus:border-[#14F3C1] bg-[#000D0E] text-white placeholder-white/30 ${
                      errors.country ? 'border-rose-400' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {errors.country && <p className="text-[11px] text-rose-400 mt-1">{errors.country}</p>}
                </div>
              </div>

              {/* Row 3: Service needed dropdown */}
              <div>
                <label htmlFor="form-service" className="block text-xs font-semibold text-white/90 mb-1.5">
                  Primary Service Needed
                </label>
                <select
                  id="form-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-[#000D0E] hover:border-white/20 text-white text-xs sm:text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[#14F3C1] focus:border-[#14F3C1]"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#000D0E] text-white">
                      {s.title}
                    </option>
                  ))}
                  <option value="Multi-Discipline Engineering Package" className="bg-[#000D0E] text-white">Multi-Discipline Package (Mechanical + MEP + BIM)</option>
                  <option value="Not Sure - Need Recommendation" className="bg-[#000D0E] text-white">Not sure — recommend based on brief</option>
                </select>
              </div>

              {/* Row 4: Engagement Model & Timeline */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-model" className="block text-xs font-semibold text-white/90 mb-1.5">
                    Preferred Engagement Model
                  </label>
                  <select
                    id="form-model"
                    name="engagementModel"
                    value={formData.engagementModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-[#000D0E] hover:border-white/20 text-white text-xs sm:text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[#14F3C1] focus:border-[#14F3C1]"
                  >
                    <option value="Project-Based" className="bg-[#000D0E] text-white">Project-Based (Fixed Lump-Sum)</option>
                    <option value="Dedicated Team" className="bg-[#000D0E] text-white">Dedicated Team / Monthly Retainer</option>
                    <option value="On-Demand" className="bg-[#000D0E] text-white">On-Demand / Hourly Rates</option>
                    <option value="Paid Pilot" className="bg-[#000D0E] text-white">Small Paid Pilot Project</option>
                    <option value="Not Sure" className="bg-[#000D0E] text-white">Not sure / Advise me</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-timeline" className="block text-xs font-semibold text-white/90 mb-1.5">
                    Expected Timeline
                  </label>
                  <select
                    id="form-timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-[#000D0E] hover:border-white/20 text-white text-xs sm:text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[#14F3C1] focus:border-[#14F3C1]"
                  >
                    <option value="Urgent (1-3 days)" className="bg-[#000D0E] text-white">Urgent (1 - 3 working days)</option>
                    <option value="Within 2 weeks" className="bg-[#000D0E] text-white">Standard (Within 2 weeks)</option>
                    <option value="1 month+" className="bg-[#000D0E] text-white">Long-term (1 - 3 months)</option>
                    <option value="Ongoing capacity" className="bg-[#000D0E] text-white">Ongoing offshore capacity</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Project Details Textarea */}
              <div>
                <label htmlFor="form-details" className="block text-xs font-semibold text-white/90 mb-1.5">
                  Project Details & Scope <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="form-details"
                  name="details"
                  required
                  rows={4}
                  placeholder="Outline the assembly type, CAD software and version (e.g. SolidWorks 2024, Revit 2025), required deliverables (3D models, 2D shop drawings, FEA report), or any specific drawing standards."
                  value={formData.details}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[#14F3C1] focus:border-[#14F3C1] bg-[#000D0E] text-white placeholder-white/30 ${
                    errors.details ? 'border-rose-400' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.details && <p className="text-[11px] text-rose-400 mt-1">{errors.details}</p>}
              </div>

              {/* Optional File Upload */}
              <div className="p-4 rounded-2xl border border-dashed border-white/15 bg-[#000D0E]/60 text-center hover:border-[#14F3C1]/40 transition-colors">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center justify-center gap-1.5"
                >
                  <FileUp className="w-5 h-5 text-[#14F3C1]" />
                  <span className="text-xs font-semibold text-white">
                    {selectedFile ? selectedFile.name : 'Attach brief, sketch, or drawing set (Optional)'}
                  </span>
                  <span className="text-[10px] text-white/50">
                    PDF, STEP, ZIP, DWG up to 25MB (Larger CAD models can be shared via secure link)
                  </span>
                </label>
              </div>

              {/* NDA Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="form-nda"
                  name="ndaRequested"
                  checked={formData.ndaRequested}
                  onChange={handleChange}
                  className="mt-0.5 rounded border-white/20 bg-[#000D0E] text-[#14F3C1] focus:ring-[#14F3C1] cursor-pointer"
                />
                <label htmlFor="form-nda" className="text-xs text-white/70 cursor-pointer leading-relaxed">
                  <strong className="text-white">Mutual NDA protection:</strong> Please countersign an NDA before detailed CAD exchange. escalup respects all intellectual property rights.
                </label>
              </div>

              {/* Submit Button with spring interaction */}
              <div className="pt-3">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-full bg-[#14F3C1] hover:bg-[#34F8CE] disabled:opacity-70 text-[#000D0E] font-bold text-sm shadow-[0_0_25px_rgba(20,243,193,0.3)] hover:shadow-[0_0_35px_rgba(20,243,193,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#000D0E]" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#000D0E]" />
                      <span>Submit Quote Request (Reply within 24h)</span>
                    </>
                  )}
                </motion.button>
                <div className="text-center mt-2.5 text-[11px] text-white/50">
                  We review incoming briefs daily at 09:00, 13:00, and 17:00 UTC+6.
                </div>
              </div>

            </form>
          </motion.div>

          {/* Right Sidebar: Quick Actions, Intro Call, Map & Overlap (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Book Intro Call Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-[#001517] rounded-3xl p-7 border border-white/[0.08] hover:border-[#14F3C1]/30 shadow-xl transition-all"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#14F3C1]/10 text-[#14F3C1] flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Book a Free Intro Call
              </h4>
              <p className="text-xs text-white/70 mb-5 leading-relaxed">
                Prefer to talk directly? Pick a 30-minute slot that suits your local time zone to discuss technical scope and pricing.
              </p>
              <div className="space-y-2.5">
                <button
                  onClick={handleBookCall}
                  className="w-full py-3 rounded-full bg-[#14F3C1] hover:bg-[#34F8CE] text-[#000D0E] font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(20,243,193,0.25)] transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#000D0E]" />
                  <span>Book a Call (Cal.com)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#000D0E]" />
                </button>
                <a
                  href={`mailto:${companyData.contact.email}?subject=Engineering%20Project%20Inquiry%20-%20escalup`}
                  className="w-full py-2.5 rounded-full bg-white/5 border border-white/15 hover:border-[#14F3C1] text-white hover:text-[#14F3C1] font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#14F3C1]" />
                  <span>Email: {companyData.contact.email}</span>
                </a>
              </div>
            </motion.div>

            {/* Operational Location & Styled Map Card */}
            <div className="bg-[#001517] rounded-3xl p-7 border border-white/[0.08] shadow-xl space-y-4">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#14F3C1]" />
                <h4 className="text-sm font-bold text-white">Uttara Engineering Center</h4>
              </div>

              <div className="space-y-2 text-xs text-white/70">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#14F3C1] shrink-0 mt-0.5" />
                  <span>{companyData.location.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#14F3C1] shrink-0" />
                  <a href={`mailto:${companyData.contact.email}`} className="text-white hover:text-[#14F3C1] font-medium transition-colors">
                    {companyData.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#14F3C1] shrink-0" />
                  <span>{companyData.workingHours.schedule} ({companyData.workingHours.timezone})</span>
                </div>
              </div>

              {/* Styled interactive map container */}
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] w-full bg-[#000D0E] relative">
                <iframe
                  title="escalup Uttara Dhaka Office Location"
                  src={companyData.location.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Time-zone overlap pills */}
              <div className="pt-2 border-t border-white/[0.08]">
                <span className="text-[11px] font-bold text-white block mb-2">
                  Regional Working Overlap:
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-semibold text-white block">London (GMT)</span>
                    <span className="text-white/60">4 - 5h morning sync</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-semibold text-white block">Dubai (GST)</span>
                    <span className="text-white/60">6 - 7h direct overlap</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
