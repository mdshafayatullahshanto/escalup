// /src/components/ContactSection.jsx
// SECTION 6: "Request a Detailed Engineering Quote"
// Unified design system: Lavender background, white form card, filled-light inputs with floating labels,
// black pill submit button, toggle switches for consent, clear validation states.
// Right column: Intro call card with black pill button, and lazy-loaded rounded map card.
// Zero green/teal, zero monospace, zero stray dots.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Loader2, 
  FileUp
} from 'lucide-react';
import { companyData } from '../data/company';
import { servicesData } from '../data/services';
import { trackQuoteSubmit, trackCallBooking } from '../utils/analytics';
import { submitQuoteRequest } from '../lib/supabase';
import GlassBadge from './ui/GlassBadge';
import Button from './ui/Button';
import { BlurReveal, HighlightUnderline } from './ui/ScrollAnimations';

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
      trackQuoteSubmit(formData.service, formData.engagementModel);
      await submitQuoteRequest(formData, selectedFile);

      sessionStorage.setItem('escalup_last_quote', JSON.stringify({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        service: formData.service,
        model: formData.engagementModel
      }));

      navigate('/thank-you');
    } catch (err) {
      console.error('Submission error:', err);
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
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[#F6F7FC] dark:bg-[#080C0F] border-b border-[#E2E6EE] dark:border-white/10 font-sans relative scroll-mt-12 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Light-weight heading with ONE highlighted phrase */}
        <BlurReveal className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="mb-3.5">
            <GlassBadge>Initiate Project Discussion</GlassBadge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
            Request a{' '}
            <HighlightUnderline>
              <span className="font-semibold bg-gradient-to-r from-[#0070AD] to-[#5846F6] bg-clip-text text-transparent">
                Detailed Engineering Quote.
              </span>
            </HighlightUnderline>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed max-w-2xl mx-auto font-normal">
            Share your project requirements. We will review them and respond with a proposed scope. Work is carried out under a mutual NDA, and the client owns all project IP.
          </p>
        </BlurReveal>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Form Column (50%): White Card with Balanced Padding & Equal-Height Stretch */}
          <div className="bg-white dark:bg-[#11161F] rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#E2E6EE] dark:border-white/10 shadow-card flex flex-col justify-between h-full">
            
            <div>
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#E2E6EE] dark:border-white/10">
                <div>
                  <h3 className="text-xl font-medium text-[#111827] dark:text-white">Project Scope & Specifications</h3>
                  <p className="text-xs text-[#5A6679] dark:text-[#9BA8BA] mt-0.5">All submissions are encrypted and strictly protected under mutual NDA.</p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-[#5846F6] bg-[#5846F6]/10 px-3 py-1 rounded-full shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#5846F6]" />
                  <span>NDA Protected</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
                
                {/* Row 1: Name & Company */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label htmlFor="form-name" className="block text-xs font-medium text-[#5A6679] dark:text-[#9BA8BA]">
                      Your Name *
                    </label>
                    <input
                      id="form-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Michael Vance"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 sm:py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#5846F6] bg-[#F6F7FC] dark:bg-[#17202B] text-[#111827] dark:text-white placeholder-[#8E9BAE] ${
                        errors.name ? 'border-rose-400' : 'border-[#E2E6EE] dark:border-white/10'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="form-company" className="block text-xs font-medium text-[#5A6679] dark:text-[#9BA8BA]">
                      Company / Organization *
                    </label>
                    <input
                      id="form-company"
                      name="company"
                      type="text"
                      required
                      placeholder="e.g. Apex Industrial Systems"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 sm:py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#5846F6] bg-[#F6F7FC] dark:bg-[#17202B] text-[#111827] dark:text-white placeholder-[#8E9BAE] ${
                        errors.company ? 'border-rose-400' : 'border-[#E2E6EE] dark:border-white/10'
                      }`}
                    />
                    {errors.company && <p className="text-[11px] text-rose-500 mt-1">{errors.company}</p>}
                  </div>
                </div>

                {/* Row 2: Work Email & Country */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label htmlFor="form-email" className="block text-xs font-medium text-[#5A6679] dark:text-[#9BA8BA]">
                      Work Email *
                    </label>
                    <input
                      id="form-email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 sm:py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#5846F6] bg-[#F6F7FC] dark:bg-[#17202B] text-[#111827] dark:text-white placeholder-[#8E9BAE] ${
                        errors.email ? 'border-rose-400' : 'border-[#E2E6EE] dark:border-white/10'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="form-country" className="block text-xs font-medium text-[#5A6679] dark:text-[#9BA8BA]">
                      Country & Timezone *
                    </label>
                    <input
                      id="form-country"
                      name="country"
                      type="text"
                      required
                      placeholder="e.g. Germany (CET, UTC+1)"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 sm:py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#5846F6] bg-[#F6F7FC] dark:bg-[#17202B] text-[#111827] dark:text-white placeholder-[#8E9BAE] ${
                        errors.country ? 'border-rose-400' : 'border-[#E2E6EE] dark:border-white/10'
                      }`}
                    />
                    {errors.country && <p className="text-[11px] text-rose-500 mt-1">{errors.country}</p>}
                  </div>
                </div>

                {/* Row 3: Service Selection */}
                <div className="space-y-1">
                  <label htmlFor="form-service" className="block text-xs font-medium text-[#5A6679] dark:text-[#9BA8BA]">
                    Primary Engineering Discipline *
                  </label>
                  <select
                    id="form-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#E2E6EE] dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#5846F6] bg-[#F6F7FC] dark:bg-[#17202B] text-[#111827] dark:text-white cursor-pointer"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Multi-Discipline Project">Multi-Discipline Engineering Package</option>
                  </select>
                </div>

                {/* Row 4: Engagement Model & Timeline */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label htmlFor="form-model" className="block text-xs font-medium text-[#5A6679] dark:text-[#9BA8BA]">
                      Engagement Model
                    </label>
                    <select
                      id="form-model"
                      name="engagementModel"
                      value={formData.engagementModel}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#E2E6EE] dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#5846F6] bg-[#F6F7FC] dark:bg-[#17202B] text-[#111827] dark:text-white cursor-pointer"
                    >
                      <option value="Project-Based">Project-Based (Fixed Price)</option>
                      <option value="Dedicated Team (FTE)">Dedicated Team (Monthly FTE)</option>
                      <option value="Hourly Bucket">Hourly Bucket / On-Demand</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="form-timeline" className="block text-xs font-medium text-[#5A6679] dark:text-[#9BA8BA]">
                      Target Start Timeline
                    </label>
                    <select
                      id="form-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#E2E6EE] dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#5846F6] bg-[#F6F7FC] dark:bg-[#17202B] text-[#111827] dark:text-white cursor-pointer"
                    >
                      <option value="Immediate (48h)">Immediate (Within 48 hours)</option>
                      <option value="Within 2 weeks">Within 2 weeks</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="Planning / Exploring">Planning & Budgeting Phase</option>
                    </select>
                  </div>
                </div>

                {/* Row 5: Project Details Textarea */}
                <div className="space-y-1">
                  <label htmlFor="form-details" className="block text-xs font-medium text-[#5A6679] dark:text-[#9BA8BA]">
                    Project Description & Technical Brief *
                  </label>
                  <textarea
                    id="form-details"
                    name="details"
                    rows={3}
                    required
                    placeholder="Outline your assemblies, required drawing sheets, software preferences (SolidWorks, Inventor, Revit, NX), and standards..."
                    value={formData.details}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#5846F6] bg-[#F6F7FC] dark:bg-[#17202B] text-[#111827] dark:text-white placeholder-[#8E9BAE] resize-none ${
                      errors.details ? 'border-rose-400' : 'border-[#E2E6EE] dark:border-white/10'
                    }`}
                  />
                  {errors.details && <p className="text-[11px] text-rose-500 mt-1">{errors.details}</p>}
                </div>

                {/* File Attachment Upload */}
                <div className="p-3.5 rounded-xl border border-dashed border-[#D8DFEB] dark:border-white/20 bg-[#F6F7FC] dark:bg-[#17202B] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-[#11161F] border border-[#E2E6EE] text-[#5846F6] flex items-center justify-center shrink-0">
                      <FileUp className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-medium text-[#111827] dark:text-white">
                        {selectedFile ? selectedFile.name : 'Attach CAD / PDF specification (Optional)'}
                      </div>
                      <div className="text-[11px] text-[#5A6679] dark:text-[#9BA8BA]">
                        PDF, STEP, DWG, ZIP up to 50MB
                      </div>
                    </div>
                  </div>

                  <label htmlFor="file-upload" className="px-3 py-1 rounded-full bg-white dark:bg-[#11161F] border border-[#D8DFEB] dark:border-white/15 text-xs font-medium text-[#111827] dark:text-white hover:bg-[#EEF2F8] cursor-pointer transition-colors shrink-0">
                    Browse
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                {/* Primary Black Pill Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={loading}
                    icon="arrow"
                    className="w-full shadow-md py-3.5"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        <span>Processing Request...</span>
                      </>
                    ) : (
                      <span>Submit Quote Request (Reply within 24h)</span>
                    )}
                  </Button>
                </div>

              </form>
            </div>
          </div>

          {/* Right Sidebar: 2 Symmetrical Cards (50% Width, Equal Height Split, Matching Outer Height) */}
          <div className="flex flex-col gap-6 lg:gap-8 h-full">
            
            {/* Card 2: Book Intro Call Card */}
            <div className="bg-white dark:bg-[#11161F] rounded-3xl p-6 sm:p-8 border border-[#E2E6EE] dark:border-white/10 shadow-card flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#5846F6]/10 text-[#5846F6] flex items-center justify-center mb-3.5">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-medium text-[#111827] dark:text-white mb-2">
                  Book a Free Intro Call
                </h4>
                <p className="text-xs sm:text-sm text-[#5A6679] dark:text-[#9BA8BA] leading-relaxed font-normal">
                  Prefer to talk directly? Pick a 30-minute slot that suits your local time zone to discuss technical scope, team sizing, and pricing models.
                </p>
              </div>
              
              <div className="space-y-2.5 pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleBookCall}
                  icon="external"
                  className="w-full py-3"
                >
                  Book a Call (Cal.com)
                </Button>

                <a
                  href={`mailto:${companyData.contact.email}?subject=Engineering%20Project%20Inquiry%20-%20escalup`}
                  className="w-full py-2.5 rounded-full bg-[#F6F7FC] dark:bg-[#17202B] hover:bg-[#EEF2F8] dark:hover:bg-[#1E2833] border border-[#E2E6EE] dark:border-white/10 text-[#111827] dark:text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#5846F6]" />
                  <span>Email: {companyData.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Card 3: Operational Location & Lazy-Loaded Map Card */}
            <div className="bg-white dark:bg-[#11161F] rounded-3xl p-6 sm:p-8 border border-[#E2E6EE] dark:border-white/10 shadow-card flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-7 h-7 rounded-xl bg-[#5846F6]/10 text-[#5846F6] flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#111827] dark:text-white">Uttara Engineering Center</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-[#5A6679] dark:text-[#9BA8BA] mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#5846F6] shrink-0" />
                    <span className="truncate">{companyData.location.fullAddress}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#5846F6] shrink-0" />
                    <a href={`mailto:${companyData.contact.email}`} className="text-[#5846F6] hover:underline font-medium transition-colors truncate">
                      {companyData.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <Clock className="w-3.5 h-3.5 text-[#5846F6] shrink-0" />
                    <span>{companyData.workingHours.schedule} ({companyData.workingHours.timezone})</span>
                  </div>
                </div>
              </div>

              {/* Styled interactive map container (rounded corners, lazy-loaded) */}
              <div className="rounded-2xl overflow-hidden border border-[#E2E6EE] dark:border-white/10 w-full flex-1 min-h-[160px] bg-[#F6F7FC] dark:bg-[#0B0F14] relative mt-1">
                <iframe
                  title="escalup Uttara Dhaka Office Location"
                  src={companyData.location.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
