"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

export default function StickyBottomBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 max-w-2xl w-[92%] sm:w-auto">
      <div className="bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-2xl rounded-full px-5 py-2.5 flex items-center justify-between gap-4 text-xs sm:text-sm text-[#123B50] ring-1 ring-black/5 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-medium text-[#263746]">
            See Why Indian Enterprises Choose <strong className="text-[#123B50]">Shenll HRMS</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact-form"
            className="px-4 py-1.5 rounded-full font-bold text-white bg-[#087E8B] hover:bg-[#123B50] transition-colors shadow-sm text-xs flex items-center gap-1"
          >
            <span>Book Free Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
