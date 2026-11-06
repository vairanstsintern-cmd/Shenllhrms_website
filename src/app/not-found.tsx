import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Shenll HRMS",
  description: "The page you are looking for doesn't exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-24 bg-ron-canvas relative overflow-hidden">
      {/* Soft atmospheric gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-white/90 via-white/50 to-transparent pointer-events-none rounded-b-[48px]" />

      {/* Error code badge */}
      <div className="relative z-10 mb-6">
        <span className="ron-badge-lime">
          <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B] animate-pulse" />
          HTTP Error 404
        </span>
      </div>

      {/* Big number */}
      <h1
        className="relative z-10 font-black text-[110px] sm:text-[160px] tracking-tight leading-none select-none text-[#0E151B]"
      >
        404
      </h1>

      {/* Heading & description */}
      <h2 className="relative z-10 text-2xl sm:text-4xl font-black text-[#0E151B] mt-2 text-center tracking-tight">
        Page Not Found
      </h2>
      <p className="relative z-10 text-sm sm:text-base text-slate-600 max-w-md text-center mt-3 leading-relaxed">
        The page you are looking for doesn&apos;t exist, has been relocated, or the link may be outdated.
      </p>

      {/* Unified Action Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 mt-8 justify-center w-full max-w-xs sm:max-w-none">
        <Link
          href="/"
          className="ron-pill-dark w-full sm:w-auto !py-3.5 !px-7 text-sm justify-center group"
        >
          <Home className="w-4 h-4 text-white" />
          <span>Return Home</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
        <Link
          href="/book-a-demo"
          className="ron-pill-light w-full sm:w-auto !py-3.5 !px-6 text-sm justify-center bg-white border border-slate-200/80 shadow-xs"
        >
          <CalendarCheck className="w-4 h-4 text-[#087E8B]" />
          <span>Book a Free Demo</span>
        </Link>
      </div>

      {/* Suggested pages card */}
      <div className="relative z-10 mt-14 max-w-2xl w-full">
        <div className="ron-card p-6 sm:p-8 bg-white/95">
          <div className="text-center mb-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#087E8B]">
              QUICK NAVIGATION
            </span>
            <p className="text-xs text-slate-500 mt-1">Explore our most popular HRMS modules and tools</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {[
              { label: "HRMS Software", href: "/hrms-software" },
              { label: "Payroll Software", href: "/payroll-software" },
              { label: "Attendance Software", href: "/attendance-management-software" },
              { label: "Leave Management", href: "/leave-management-software" },
              { label: "AI HRMS Suite", href: "/ai-hrms" },
              { label: "Transparent Pricing", href: "/pricing" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-center text-xs font-semibold text-slate-700 hover:text-[#087E8B] bg-[#F4F7FA] hover:bg-[#EEF3F2] border border-slate-200/70 hover:border-[#087E8B]/40 px-3 py-2.5 rounded-xl transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
