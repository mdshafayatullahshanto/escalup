// /src/pages/NotFoundPage.jsx
// 404 error page matching minimal modern design

import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] bg-[#000D0E] py-24 px-4 flex items-center justify-center blueprint-grid text-white">
      <div className="max-w-md w-full bg-[#001517] rounded-3xl p-8 border border-white/[0.08] shadow-2xl text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#14F3C1]/10 text-[#14F3C1] mx-auto flex items-center justify-center mb-6 font-mono font-black text-xl border border-[#14F3C1]/20">
          404
        </div>
        
        <h1 className="text-2xl font-extrabold text-white mb-2">
          Page Not Found
        </h1>
        
        <p className="text-xs sm:text-sm text-white/70 mb-8 leading-relaxed">
          The engineering page or drawing archive you are looking for does not exist or has been relocated.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full py-3 rounded-full bg-[#14F3C1] hover:bg-[#34F8CE] text-[#000D0E] font-bold text-xs shadow-[0_0_20px_rgba(20,243,193,0.3)] transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          
          <Link
            to="/#services"
            className="w-full py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/15 transition-colors block text-center"
          >
            Browse Engineering Services
          </Link>
        </div>
      </div>
    </div>
  );
}
