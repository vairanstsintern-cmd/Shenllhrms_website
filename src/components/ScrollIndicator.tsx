"use client";

import React, { useEffect, useState } from "react";
import MaterialIcon from "@/components/MaterialIcon";

export default function ScrollIndicator() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      setShowScrollTop(scrollTop > 240);
      setShowScrollBottom(scrollTop < docHeight - 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollDownOneScreen = () => {
    window.scrollBy({ top: window.innerHeight * 0.75, behavior: "smooth" });
  };

  return (
    <div className="fixed left-5 sm:left-8 bottom-8 z-40 flex flex-col items-center gap-2 select-none pointer-events-auto">
      {/* Scroll to Top Indicator Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="ron-circle-btn !w-10 !h-10 bg-white/90 backdrop-blur-md shadow-lg border border-slate-200 text-[#0E151B] hover:bg-[#0E151B] hover:text-white transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 group"
          aria-label="Scroll to top of page"
          title="Back to Top"
        >
          <MaterialIcon name="expand_less" size={20} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Progress Ring / Dot */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg className="w-8 h-8 transform -rotate-90">
          <circle
            cx="16"
            cy="16"
            r="12"
            stroke="rgba(226, 232, 240, 0.8)"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="16"
            cy="16"
            r="12"
            stroke="#087E8B"
            strokeWidth="2.5"
            strokeDasharray={75.39}
            strokeDashoffset={75.39 - (75.39 * scrollProgress) / 100}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-150 ease-out"
          />
        </svg>
        <span className="absolute text-[9px] font-black text-slate-500 font-mono">
          {Math.round(scrollProgress)}%
        </span>
      </div>

      {/* Scroll Down Indicator Button */}
      {showScrollBottom && (
        <button
          onClick={scrollDownOneScreen}
          className="ron-circle-btn !w-10 !h-10 bg-white/90 backdrop-blur-md shadow-lg border border-slate-200 text-[#0E151B] hover:bg-[#0E151B] hover:text-white transition-all duration-300 group"
          aria-label="Scroll down one screen"
          title="Scroll Down"
        >
          <MaterialIcon name="expand_more" size={20} className="group-hover:translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}
