"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HelpCircle, Headphones, Phone, ArrowRight, ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  category: "General" | "Payroll & Tax" | "Attendance" | "Mobile & AI";
}

const FAQS_DATA: FAQItem[] = [
  {
    q: "What is Shenll HRMS software?",
    a: "Shenll HRMS is an all-in-one cloud platform that unifies core employee management, automated Indian statutory payroll, biometric attendance, leaves, recruitment, project timesheets, and AI workforce insights into a single accessible system on web and native mobile apps.",
    category: "General",
  },
  {
    q: "How does Shenll HRMS automate Indian payroll and statutory compliance?",
    a: "Shenll HRMS auto-syncs live biometric attendance, leaves, and LOP deductions directly with customizable salary structures. It automatically calculates PF, ESI, Professional Tax, TDS (new & old regimes), and generates ready-to-upload bank disbursement files and ECR registers without manual spreadsheet recalculations.",
    category: "Payroll & Tax",
  },
  {
    q: "Can Shenll HRMS connect directly to our physical biometric turnstiles?",
    a: "Yes. Shenll HRMS features an enterprise hardware API bridge compatible with Essl, Realtime, ZKTeco, Matrix, and Suprema devices. Attendance punches sync automatically every 60 seconds into the employee timesheet ledger.",
    category: "Attendance",
  },
  {
    q: "How does the mobile app work for remote and hybrid employees?",
    a: "Our verified iOS and Android mobile apps feature GPS geo-fencing and facial recognition punch-in. Employees can only clock in when physically within designated office radius zones or client project sites.",
    category: "Mobile & AI",
  },
  {
    q: "What purpose-built AI features are included in Shenll HRMS?",
    a: "Shenll HRMS includes an Adaptive AI Intelligence Engine that predicts departmental attrition risks, balances project resource workloads, detects suspicious time-punch irregularities, and provides natural-language workforce reports.",
    category: "Mobile & AI",
  },
  {
    q: "How long does data migration and onboarding take?",
    a: "Most companies go live within 48 to 72 hours. Our dedicated Chennai deployment specialists assist with employee master data migration, historical leave balance imports, salary component setup, and turnstile API connectivity.",
    category: "General",
  },
  {
    q: "What is the pricing model, and are there setup fees?",
    a: "Shenll HRMS offers clear, predictable pricing starting at ₹12,000/month for up to 100 employees (approx. ₹4/day/employee) with ZERO implementation or setup fees. Additional active employees are charged at a transparent ₹100/month rate.",
    category: "General",
  },
  {
    q: "Can custom leave rules (sandwich policies, comp-offs) be configured?",
    a: "Yes, fully configurable. You can define exact paid, casual, medical, and privilege leave accrual rules, sandwich weekend deductions, half-day policies, and multi-tier approval hierarchies.",
    category: "Attendance",
  },
];

const CATEGORIES = ["All", "General", "Payroll & Tax", "Attendance", "Mobile & AI"] as const;

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs =
    activeCategory === "All"
      ? FAQS_DATA
      : FAQS_DATA.filter((f) => f.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#F0F4F8] via-[#F8FAFC] to-[#F0F4F8] relative overflow-hidden" id="faq">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#087E8B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="nextsaas-badge mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#087E8B]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D2E40] tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] mt-4 leading-relaxed">
            Everything you need to know about Shenll HRMS features, biometric sync, Indian statutory payroll, and rapid 48-hour onboarding.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0D2E40] text-white shadow-md shadow-[#0D2E40]/15"
                  : "bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#087E8B] hover:text-[#087E8B]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Layout: Left Sticky Help Card, Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Support Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <div className="p-7 rounded-3xl bg-white border border-[#E1E8F0] shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#087E8B] to-[#123B50] text-white flex items-center justify-center shadow-md mb-5">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0D2E40] leading-snug">
                Still have unanswered questions?
              </h3>
              <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                Can&apos;t find the answers you&apos;re looking for? Speak directly with an HR tech consultant today.
              </p>

              <div className="pt-6 mt-6 border-t border-[#E1E8F0] space-y-3">
                <a
                  href="tel:+918122046761"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#087E8B] transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#087E8B]/10 text-[#087E8B] flex items-center justify-center group-hover:bg-[#087E8B] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Direct Call</span>
                    <p className="text-xs font-bold text-[#0D2E40] group-hover:text-[#087E8B] transition-colors">+91-8122046761</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918122046761?text=Hello%20Shenll%20HRMS,%20I%20have%20questions%20about%20the%20platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#25D366]/5 border border-[#25D366]/20 hover:bg-[#25D366]/10 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
                    <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#128C7E]">Instant Chat</span>
                    <p className="text-xs font-bold text-[#0D2E40]">WhatsApp Support</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E1E8F0]/70">
                <Link
                  href="/#contact-form"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] shadow-sm hover:shadow transition-all"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 space-y-3.5">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#087E8B]/40 shadow-lg shadow-[#087E8B]/5 ring-1 ring-[#087E8B]/20"
                      : "bg-white/90 border-[#E1E8F0] hover:border-[#CBD5E1] hover:bg-white shadow-xs"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="pt-0.5">
                        <span className="inline-block text-[10px] font-bold text-[#087E8B] uppercase tracking-wider mb-1">
                          {faq.category}
                        </span>
                        <h3
                          className={`text-sm sm:text-base font-bold transition-colors leading-snug ${
                            isOpen ? "text-[#087E8B]" : "text-[#0D2E40]"
                          }`}
                        >
                          {faq.q}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 mt-1 ${
                        isOpen
                          ? "bg-[#087E8B]/10 text-[#087E8B] rotate-180"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1">
                      <div className="pt-3 border-t border-[#F1F5F9]">
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
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
