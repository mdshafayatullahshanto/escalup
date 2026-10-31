// /src/pages/NotFoundPage.jsx
// 404 error page matching minimal modern black-and-white design

import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] bg-[#0A0A0A] py-24 px-4 flex items-center justify-center blueprint-grid text-white">
      <div className="max-w-md w-full bg-[#121214] rounded-3xl p-8 border border-white/10 shadow-2xl text-center">
        <div className="w-14 h-14 rounded-2xl bg-white/10 text-white mx-auto flex items-center justify-center mb-6 font-mono font-black text-xl border border-white/20">
          404
        </div>
        
        <h1 className="text-2xl font-extrabold text-white mb-2">
          Page Not Found
        </h1>
        
        <p className="text-xs sm:text-sm text-[#A1A1AA] mb-8 leading-relaxed">
          The engineering page or drawing archive you are looking for does not exist or has been relocated.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 text-black" />
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
