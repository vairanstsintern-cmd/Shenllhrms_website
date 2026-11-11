"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface FAQAccordionSectionProps {
  badge?: string;
  heading?: string;
  description?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function FAQAccordionSection({
  badge = "Common Inquiries",
  heading = "Frequently asked questions",
  description = "To help you make informed decisions, we've compiled answers to some of the most commonly asked questions.",
  faqs,
}: FAQAccordionSectionProps) {
  // First item open by default matching reference style
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Sticky Column: Heading & Subtitle */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-4">
            <span className="ron-badge-lime">
              {badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0E151B] tracking-tight leading-[1.12]">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal max-w-md pt-1">
              {description}
            </p>
          </div>

          {/* Right Column: Clean Divided Accordion List */}
          <div className="lg:col-span-7 divide-y divide-slate-200/90 border-t border-slate-200/90">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="py-6 sm:py-7 transition-colors">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
                        isOpen
                          ? "text-[#0E151B]"
                          : "text-[#0E151B] group-hover:text-[#087E8B]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Circular Action Button with Arrow */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0E151B] text-white"
                          : "bg-[#0E151B] text-white group-hover:bg-[#087E8B] group-hover:scale-105"
                      }`}
                    >
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-90 text-white" : "rotate-0 text-white"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expanded Answer Content */}
                  {isOpen && (
                    <div className="pt-4 pr-12 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

