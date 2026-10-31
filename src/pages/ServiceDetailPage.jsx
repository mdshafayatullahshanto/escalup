// /src/pages/ServiceDetailPage.jsx
// Dedicated SEO landing page per service category (/services/:slug)

import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileCheck2, 
  ShieldCheck, 
  Calendar
} from 'lucide-react';
import { servicesData } from '../data/services';
import FinalCTABand from '../components/FinalCTABand';
import { companyData } from '../data/company';
import { trackCallBooking } from '../utils/analytics';

export default function ServiceDetailPage({ onOpenCalendly }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.slug === slug);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (service) {
      document.title = `${service.title} | escalup Offshore Engineering`;
    }
  }, [slug, service]);

  if (!service) {
    return (
      <div className="py-32 px-4 text-center max-w-lg mx-auto bg-[#000D0E] min-h-screen text-white">
        <h2 className="text-2xl font-bold text-white mb-4">Service Category Not Found</h2>
        <p className="text-sm text-white/70 mb-6">
          The requested engineering service category does not exist or may have been relocated.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-[#14F3C1] hover:bg-[#34F8CE] text-[#000D0E] text-xs font-bold shadow-md inline-block"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  const handleBookCall = () => {
    trackCallBooking(`service_detail_${service.slug}`);
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      window.open(companyData.contact.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleQuoteClick = () => {
    navigate('/#contact');
  };

  // Other services for bottom discovery
  const otherServices = servicesData.filter((s) => s.slug !== slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-[#000D0E] min-h-screen text-white"
    >
      
      {/* Top Breadcrumb & Hero Header */}
      <section className="bg-[#001517] border-b border-white/[0.08] pt-8 pb-16 relative blueprint-grid">
        <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link to="/" className="hover:text-[#14F3C1] flex items-center gap-1 font-medium transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-[#14F3C1] font-medium transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white font-bold truncate max-w-xs">{service.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#14F3C1]/10 text-[#14F3C1] border border-[#14F3C1]/20 mb-4">
              <span>{service.tag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
              {service.intro}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                onClick={handleQuoteClick}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 rounded-full bg-[#14F3C1] hover:bg-[#34F8CE] text-[#000D0E] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(20,243,193,0.3)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Quote for this Service</span>
                <ArrowRight className="w-4 h-4 text-[#000D0E]" />
              </motion.button>

              <motion.button
                onClick={handleBookCall}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-[#14F3C1] font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#14F3C1]" />
                <span>Book a Technical Review Call</span>
              </motion.button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-16 w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Scope & Deliverables (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Full Item List */}
            <div className="bg-[#001517] rounded-3xl p-7 sm:p-9 border border-white/[0.08] shadow-xl">
              <h2 className="text-xl font-extrabold text-white mb-2">
                Core Technical Scope & Services
              </h2>
              <p className="text-xs text-white/60 mb-6">
                Available as discrete packages or integrated into your team's ongoing sprint cycles.
              </p>

              <div className="space-y-3">
                {service.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#000D0E] border border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#14F3C1] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Deliverables */}
            <div className="bg-[#001517] rounded-3xl p-7 sm:p-9 border border-white/[0.08] shadow-xl">
              <div className="flex items-center gap-2.5 mb-2">
                <FileCheck2 className="w-5 h-5 text-[#14F3C1]" />
                <h2 className="text-xl font-extrabold text-white">
                  Typical Engineering Deliverables
                </h2>
              </div>
              <p className="text-xs text-white/60 mb-6">
                Standard packages prepared in native software releases and vendor-neutral neutral exchange formats.
              </p>

              <ul className="space-y-3">
                {service.deliverables.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/70">
                    <span className="w-2 h-2 rounded-full bg-[#14F3C1] shrink-0 mt-1.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Sidebar: Tools, Turnaround & Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Specs Card */}
            <div className="bg-[#001517] rounded-3xl p-7 border border-white/[0.08] shadow-xl space-y-5">
              <h3 className="text-base font-bold text-white pb-3 border-b border-white/[0.08]">
                Service Specifications
              </h3>

              <div>
                <span className="text-xs font-bold text-white block mb-1">
                  Supported Software & Platforms:
                </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {service.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-white block mb-1">
                  Typical Turnaround:
                </span>
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <Clock className="w-3.5 h-3.5 text-[#14F3C1]" />
                  <span>{service.typicalTurnaround}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-white block mb-1">
                  Recommended For:
                </span>
                <p className="text-xs text-white/70 leading-relaxed">
                  {service.bestFor}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.08] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#14F3C1]" />
                  <span>NDA signed prior to project brief</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#14F3C1]" />
                  <span>Client owns 100% of all generated IP</span>
                </div>
              </div>

              <button
                onClick={handleQuoteClick}
                className="w-full py-3 rounded-full bg-[#14F3C1] hover:bg-[#34F8CE] text-[#000D0E] font-bold text-xs shadow-[0_0_20px_rgba(20,243,193,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Scope Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Other Services Navigation Strip */}
        <div className="mt-20 pt-12 border-t border-white/[0.08]">
          <h3 className="text-xl font-bold text-white mb-6">
            Explore Other Engineering Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.slice(0, 3).map((other) => (
              <Link
                key={other.id}
                to={`/services/${other.slug}`}
                className="p-5 rounded-3xl bg-[#001517] border border-white/[0.08] hover:border-[#14F3C1]/40 hover:bg-[#012B30]/60 transition-all group flex flex-col justify-between shadow-xl"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#14F3C1] uppercase tracking-wider block mb-1">
                    {other.tag}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#14F3C1] transition-colors mb-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-white/70 line-clamp-2">
                    {other.shortDesc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-[#14F3C1]">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>

      {/* Final CTA band */}
      <FinalCTABand onOpenCalendly={onOpenCalendly} />

    </motion.div>
  );
}
