'use client'

import { useEffect } from "react";
import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";

export default function Error({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error("[Shenll HRMS] Runtime error:", error);
  }, [error]);

  const digest =
    error instanceof Error && "digest" in error
      ? (error as Error & { digest?: string }).digest
      : undefined;

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-24 bg-ron-canvas relative overflow-hidden">
      {/* Soft atmospheric gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-white/90 via-white/50 to-transparent pointer-events-none rounded-b-[48px]" />

      {/* Badge */}
      <div className="relative z-10 mb-6">
        <span className="ron-badge-orange">
          HTTP Error 500 — Internal Server Error
        </span>
      </div>

      {/* Icon */}
      <div className="relative z-10 w-20 h-20 rounded-[22px] bg-[#0E151B] flex items-center justify-center mb-6 shadow-[0_12px_30px_-8px_rgba(14,21,27,0.25)] border border-slate-700/40">
        <MaterialIcon name="warning" size={36} className="text-[#FF6B35]" />
      </div>

      {/* Heading */}
      <h1 className="relative z-10 text-2xl sm:text-4xl font-black text-[#0E151B] text-center tracking-tight">
        Something Went Wrong
      </h1>
      <p className="relative z-10 text-sm sm:text-base text-slate-600 max-w-md text-center mt-3 leading-relaxed">
        An unexpected error occurred during page rendering. Our engineering team has been notified.
        Please attempt to reload, or contact customer support.
      </p>

      {/* Error digest */}
      {digest && (
        <div className="relative z-10 mt-5 text-xs text-slate-500 font-mono bg-white border border-slate-200/90 px-4 py-2 rounded-xl shadow-xs">
          Error Reference: <span className="text-[#0E151B] font-semibold">{digest}</span>
        </div>
      )}

      {/* Unified Action Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 mt-8 justify-center w-full max-w-xs sm:max-w-none">
        <button
          onClick={retry}
          className="ron-pill-dark w-full sm:w-auto !py-3.5 !px-7 text-sm justify-center group cursor-pointer"
        >
          <MaterialIcon name="refresh" size={16} className="text-white" />
          <span>Try Again</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
            <MaterialIcon name="arrow_forward" size={14} className="text-white" />
          </div>
        </button>
        <Link
          href="/"
          className="ron-pill-light w-full sm:w-auto !py-3.5 !px-6 text-sm justify-center bg-white border border-slate-200/80 shadow-xs"
        >
          <MaterialIcon name="home" size={16} className="text-[#087E8B]" />
          <span>Return Home</span>
        </Link>
        <a
          href="mailto:info@shenllhrms.com"
          className="ron-pill-light w-full sm:w-auto !py-3.5 !px-6 text-sm justify-center bg-white border border-slate-200/80 shadow-xs"
        >
          <MaterialIcon name="mail" size={16} className="text-[#087E8B]" />
          <span>Contact Support</span>
        </a>
      </div>
    </div>
  );
}
