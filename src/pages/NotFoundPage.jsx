// /src/pages/NotFoundPage.jsx
// 404 error page matching light editorial engineering theme

import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] bg-[#F8FAF9] py-24 px-4 flex items-center justify-center blueprint-grid text-[#14201D]">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#DBE3E0] shadow-soft text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#2E756E]/10 text-[#2E756E] mx-auto flex items-center justify-center mb-6 font-mono font-black text-xl border border-[#2E756E]/20">
          404
        </div>
        
        <h1 className="text-2xl font-extrabold text-[#14201D] mb-2">
          Page Not Found
        </h1>
        
        <p className="text-xs sm:text-sm text-[#5A6A65] mb-8 leading-relaxed">
          The engineering page or drawing archive you are looking for does not exist or has been relocated.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full py-3 rounded-full bg-[#2E756E] hover:bg-[#255E58] text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 text-white" />
            <span>Return to Homepage</span>
          </Link>
          
          <Link
            to="/#services"
            className="w-full py-2.5 rounded-full bg-[#F8FAF9] hover:bg-[#F4F6F5] text-[#14201D] font-semibold text-xs border border-[#DBE3E0] hover:border-[#2E756E] transition-colors block text-center"
          >
            Browse Engineering Services
          </Link>
        </div>
      </div>
    </div>
  );
}
