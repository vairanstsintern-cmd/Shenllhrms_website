"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";
import { INDUSTRY_SOLUTIONS } from "@/data/navigation";

export default function IndustryHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll Navigation Controls */}
      <div className="flex items-center justify-end gap-2 mb-6">
        <button
          onClick={() => scroll("left")}
          className="ron-circle-btn !w-10 !h-10 bg-white shadow-sm border border-slate-200 hover:bg-[#0E151B] hover:text-white transition-all cursor-pointer"
          aria-label="Scroll industry solutions left"
        >
          <MaterialIcon name="chevron_left" size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="ron-circle-btn !w-10 !h-10 bg-white shadow-sm border border-slate-200 hover:bg-[#0E151B] hover:text-white transition-all cursor-pointer"
          aria-label="Scroll industry solutions right"
        >
          <MaterialIcon name="chevron_right" size={20} />
        </button>
      </div>

      {/* 4 in One Row Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {INDUSTRY_SOLUTIONS.map((industry) => (
          <Link
            key={industry.name}
            href={industry.href}
            className="flex-none w-[82vw] sm:w-[45vw] lg:w-[calc(25%-18px)] snap-start group block"
          >
            <div className="ron-card bg-white overflow-hidden h-full flex flex-col justify-between border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Top Image Container */}
              <div className="relative w-full h-[180px] overflow-hidden bg-slate-100">
                {industry.image && (
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-bold text-[#0E151B] group-hover:text-[#087E8B] transition-colors mb-2 leading-snug">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
