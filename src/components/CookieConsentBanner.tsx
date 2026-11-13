"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";

const COOKIE_STORAGE_KEY = "shenll_cookie_consent_v1";

export default function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if the user has already recorded their choice
    try {
      const storedConsent = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!storedConsent) {
        // Graceful entrance delay after initial page render
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsVisible(false);
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(
        COOKIE_STORAGE_KEY,
        JSON.stringify({ status: "accepted", timestamp: new Date().toISOString() })
      );
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(
        COOKIE_STORAGE_KEY,
        JSON.stringify({ status: "essential_only", timestamp: new Date().toISOString() })
      );
    } catch {}
    setIsVisible(false);
  };

  const handleClose = () => {
    try {
      sessionStorage.setItem("shenll_cookie_dismissed", "true");
    } catch {}
    setIsVisible(false);
  };

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Cookie Preferences"
      className="fixed bottom-5 left-5 z-50 max-w-[420px] w-[calc(100vw-36px)] animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
    >
      {/* Outer Shell in Theme Navy with Brand Glowing Ambient Highlights */}
      <div className="relative rounded-[26px] bg-[#0E2836] border border-[#087E8B]/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65),0_0_30px_rgba(8,126,139,0.18)] p-5 text-white overflow-hidden backdrop-blur-xl">
        
        {/* Soft atmospheric brand theme glow circles */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#087E8B]/25 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-[#19B5A5]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {/* Theme Teal Circular Icon Badge */}
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#087E8B] to-[#041B26] border border-[#19B5A5]/40 flex items-center justify-center text-[#19B5A5] shadow-md shadow-[#04121A] shrink-0">
              <MaterialIcon name="cookie" size={20} className="text-[#19B5A5]" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#19B5A5] animate-ping" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-sm text-white tracking-tight leading-tight">
                  Cookie Preferences
                </h4>
                <span className="px-2 py-0.5 rounded-full bg-[#19B5A5]/15 border border-[#19B5A5]/30 text-[#19B5A5] text-[10px] font-bold uppercase tracking-wider">
                  Optional
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5">Your privacy, your choice</p>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleClose}
            aria-label="Dismiss cookie notice"
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
          >
            <MaterialIcon name="close" size={14} />
          </button>
        </div>

        {/* Explanation text */}
        <p className="relative z-10 text-xs text-slate-300 leading-relaxed mb-4">
          We use cookies to maintain secure sessions, remember your portal preferences, and optimize HR operations. You can accept all or continue with essential cookies only.
        </p>

        {/* Theme Transparency Pill & Policy Link */}
        <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300 mb-4 pb-3 border-b border-[#087E8B]/25">
          <div className="flex items-center gap-1.5 text-[#19B5A5] font-medium">
            <MaterialIcon name="verified_user" size={14} className="text-[#19B5A5]" />
            <span>Zero ad tracking</span>
          </div>
          <Link
            href="/cookie-policy"
            className="text-[#19B5A5] hover:text-teal-200 font-semibold underline underline-offset-2 transition-colors flex items-center gap-1"
          >
            <span>Read Policy</span>
            <MaterialIcon name="auto_awesome" size={13} className="text-[#19B5A5]" />
          </Link>
        </div>

        {/* Action Buttons styled in Theme Palette */}
        <div className="relative z-10 flex items-center gap-2.5">
          {/* Primary Action Button: Gradient Teal to Mint */}
          <button
            onClick={handleAcceptAll}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-full bg-gradient-to-r from-[#087E8B] to-[#19B5A5] hover:from-[#0a9aaa] hover:to-[#5EEAD4] text-[#081B26] text-xs font-black transition-all shadow-md shadow-[#087E8B]/30 hover:scale-[1.02]"
          >
            <MaterialIcon name="check" size={14} weight={300} />
            <span>Accept All</span>
          </button>

          {/* Secondary Action: Theme Navy/Glass */}
          <button
            onClick={handleDecline}
            className="inline-flex items-center justify-center py-2 px-4 rounded-full bg-white/10 hover:bg-white/15 border border-[#087E8B]/30 text-white hover:text-[#19B5A5] text-xs font-semibold transition-colors"
          >
            Essential Only
          </button>
        </div>

      </div>
    </div>
  );
}
