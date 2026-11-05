// /src/pages/ServiceDetailPage.jsx
// Dedicated SEO landing page per service category (/services/:slug)
// Light Editorial Engineering Theme with Deep Teal accents

import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileCheck2, 
  ShieldCheck
} from 'lucide-react';
import { servicesData } from '../data/services';

export default function ServiceDetailPage() {
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
      <div className="py-32 px-4 text-center max-w-lg mx-auto bg-[#F8FAF9] dark:bg-[#0D1A17] min-h-screen text-[#14201D] dark:text-[#E4EDE9]">
        <h2 className="text-2xl font-bold text-[#14201D] dark:text-[#E4EDE9] mb-4">Service Category Not Found</h2>
        <p className="text-sm text-[#5A6A65] dark:text-[#8FA89F] mb-6">
          The requested engineering service category does not exist or may have been relocated.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white text-xs font-bold shadow-md inline-block"
        >
          Return to Home
        </Link>
      </div>
    );
  }

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
      className="bg-[#F8FAF9] dark:bg-[#0D1A17] min-h-screen text-[#14201D] dark:text-[#E4EDE9]"
    >
      
      {/* Top Breadcrumb & Hero Header */}
      <section className="bg-white dark:bg-[#0F201C] border-b border-[#DBE3E0] dark:border-[#263830] pt-8 pb-16 relative blueprint-grid">
        <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-[#889893] dark:text-[#5A7268] mb-6">
            <Link to="/" className="hover:text-[#2E756E] flex items-center gap-1 font-medium transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-[#2E756E] font-medium transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#14201D] dark:text-[#E4EDE9] font-bold truncate max-w-xs">{service.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2E756E]/10 text-[#2E756E] border border-[#2E756E]/20 mb-4 font-mono">
              <span>{service.tag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14201D] dark:text-[#E4EDE9] tracking-tight mb-6 leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-[#5A6A65] dark:text-[#8FA89F] leading-relaxed">
              {service.intro}
            </p>
          </div>

        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-16 w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Scope & Deliverables (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Full Item List */}
            <div className="bg-white dark:bg-[#152620] rounded-3xl p-7 sm:p-9 border border-[#DBE3E0] dark:border-[#263830] shadow-soft">
              <h2 className="text-xl font-extrabold text-[#14201D] dark:text-[#E4EDE9] mb-2">
                Core Technical Scope & Services
              </h2>
              <p className="text-xs text-[#5A6A65] dark:text-[#8FA89F] mb-6">
                Available as discrete packages or integrated into your team's ongoing sprint cycles.
              </p>

              <div className="space-y-3">
                {service.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAF9] dark:bg-[#1D3328] border border-[#DBE3E0] dark:border-[#263830]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2E756E] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-[#14201D] dark:text-[#E4EDE9]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Deliverables */}
            <div className="bg-white dark:bg-[#152620] rounded-3xl p-7 sm:p-9 border border-[#DBE3E0] dark:border-[#263830] shadow-soft">
              <div className="flex items-center gap-2.5 mb-2">
                <FileCheck2 className="w-5 h-5 text-[#2E756E]" />
                <h2 className="text-xl font-extrabold text-[#14201D] dark:text-[#E4EDE9]">
                  Typical Engineering Deliverables
                </h2>
              </div>
              <p className="text-xs text-[#5A6A65] dark:text-[#8FA89F] mb-6">
                Standard packages prepared in native software releases and neutral exchange formats.
              </p>

              <ul className="space-y-3">
                {service.deliverables.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#5A6A65] dark:text-[#8FA89F]">
                    <span className="w-2 h-2 rounded-full bg-[#2E756E] shrink-0 mt-1.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Sidebar: Tools, Turnaround & Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Specs Card */}
            <div className="bg-white dark:bg-[#152620] rounded-3xl p-7 border border-[#DBE3E0] dark:border-[#263830] shadow-soft space-y-5">
              <h3 className="text-base font-bold text-[#14201D] dark:text-[#E4EDE9] pb-3 border-b border-[#DBE3E0] dark:border-[#263830]">
                Service Specifications
              </h3>

              <div>
                <span className="text-xs font-bold text-[#14201D] dark:text-[#E4EDE9] block mb-1">
                  Supported Software & Platforms:
                </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {service.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#F8FAF9] dark:bg-[#1D3328] border border-[#DBE3E0] dark:border-[#263830] text-[#14201D] dark:text-[#E4EDE9]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-[#14201D] dark:text-[#E4EDE9] block mb-1">
                  Typical Turnaround:
                </span>
                <div className="flex items-center gap-2 text-xs text-[#5A6A65] dark:text-[#8FA89F]">
                  <Clock className="w-3.5 h-3.5 text-[#2E756E]" />
                  <span>{service.typicalTurnaround}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-[#14201D] dark:text-[#E4EDE9] block mb-1">
                  Recommended For:
                </span>
                <p className="text-xs text-[#5A6A65] dark:text-[#8FA89F] leading-relaxed">
                  {service.bestFor}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DBE3E0] dark:border-[#263830] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#14201D] dark:text-[#E4EDE9]">
                  <ShieldCheck className="w-4 h-4 text-[#2E756E]" />
                  <span>NDA signed prior to project brief</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#14201D] dark:text-[#E4EDE9]">
                  <CheckCircle2 className="w-4 h-4 text-[#2E756E]" />
                  <span>Client owns 100% of all generated IP</span>
                </div>
              </div>

              <button
                onClick={handleQuoteClick}
                className="w-full py-3 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Scope Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Other Services Navigation Strip */}
        <div className="mt-20 pt-12 border-t border-[#DBE3E0] dark:border-[#263830]">
          <h3 className="text-xl font-bold text-[#14201D] dark:text-[#E4EDE9] mb-6">
            Explore Other Engineering Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.slice(0, 3).map((other) => (
              <Link
                key={other.id}
                to={`/services/${other.slug}`}
                className="p-5 rounded-3xl bg-white dark:bg-[#152620] border border-[#DBE3E0] dark:border-[#263830] hover:border-[#2E756E]/50 dark:hover:border-[#3B948A]/50 transition-all group flex flex-col justify-between shadow-soft hover:shadow-card"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#2E756E] uppercase tracking-wider block mb-1 font-mono">
                    {other.tag}
                  </span>
                  <h4 className="text-sm font-bold text-[#14201D] dark:text-[#E4EDE9] group-hover:text-[#2E756E] dark:group-hover:text-[#3B948A] transition-colors mb-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-[#5A6A65] dark:text-[#8FA89F] line-clamp-2">
                    {other.shortDesc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#DBE3E0] dark:border-[#263830] flex items-center justify-between text-xs font-semibold text-[#5A6A65] dark:text-[#8FA89F] group-hover:text-[#2E756E] dark:group-hover:text-[#3B948A]">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>

    </motion.div>
  );
}
