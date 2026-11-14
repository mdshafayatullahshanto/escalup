// /src/pages/NotFoundPage.jsx
// 404 error page matching Infosys corporate style
// Unified design system: Lavender background, white card, indigo accents, black pill button

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Logo from '../components/Logo';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] bg-[#F6F7FC] dark:bg-[#080C0F] py-24 px-4 flex items-center justify-center text-[#111827] dark:text-[#F3F5FA] font-sans">
      <div className="max-w-md w-full bg-white dark:bg-[#11161F] rounded-3xl p-8 sm:p-10 border border-[#E2E6EE] dark:border-white/10 shadow-card text-center">
        <div className="flex justify-center mb-6">
          <Logo size="md" />
        </div>
        <div className="w-14 h-14 rounded-2xl bg-[#5846F6]/10 text-[#5846F6] mx-auto flex items-center justify-center mb-6 font-bold text-xl border border-[#5846F6]/20">
          404
        </div>
        
        <h1 className="text-2xl font-light text-[#111827] dark:text-white mb-2">
          Page <span className="font-semibold">Not Found</span>
        </h1>
        
        <p className="text-xs sm:text-sm text-[#5A6679] dark:text-[#9BA8BA] mb-8 leading-relaxed">
          The engineering page or drawing archive you are looking for does not exist or has been relocated.
        </p>

        <div className="space-y-3">
          <Link to="/" className="block">
            <Button variant="primary" size="md" className="w-full">
              <Home className="w-4 h-4 text-white" />
              <span>Return to Homepage</span>
            </Button>
          </Link>
          
          <Link to="/#services" className="block">
            <Button variant="outline" size="md" className="w-full">
              <span>Browse Engineering Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}