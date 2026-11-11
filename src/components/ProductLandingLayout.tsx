import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ShieldCheck, ChevronRight, ArrowUpRight, Sparkles, Check } from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";
import FAQAccordionSection from "@/components/FAQAccordionSection";

interface ProductLandingLayoutProps {
  badge: string;
  h1: string;
  tagline: string;
  heroImage?: string;
  overviewHeading: string;
  overviewDescription: string;
  keyFeatures: {
    title: string;
    description: string;
    bulletPoints?: string[];
  }[];
  businessBenefits: {
    metric?: string;
    title: string;
    description: string;
  }[];
  workflowSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedModules: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function ProductLandingLayout({
  badge,
  h1,
  tagline,
  heroImage = "/hero-section-img.webp",
  overviewHeading,
  overviewDescription,
  keyFeatures,
  businessBenefits,
  workflowSteps,
  faqs,
  relatedModules,
}: ProductLandingLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-ron-canvas border-b border-slate-200/80">
        {/* Soft Ambient Blur Orbs matching Overview / Home Hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-r from-emerald-200/40 via-teal-200/30 to-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="ron-badge-lime">
                {badge}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#0E151B] tracking-tight leading-[1.08]">
                {h1}
              </h1>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
                {tagline}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  href="#demo-form"
                  className="ron-pill-dark w-full sm:w-auto !py-3.5 !px-7 text-sm justify-center group"
                >
                  <span>Request a Free Demo</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
                <Link
                  href="/pricing"
                  className="ron-pill-light w-full sm:w-auto !py-3.5 !px-6 text-sm justify-center bg-white border border-slate-200/80 shadow-xs"
                >
                  <span>View Pricing & Plans</span>
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087E8B]" /> 100% Cloud-Based
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087E8B]" /> Mobile App Included
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087E8B]" /> Verified Indian Compliance
                </span>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5">
              <div className="ron-card p-3 sm:p-4 bg-white overflow-hidden shadow-[0_20px_50px_-15px_rgba(14,21,27,0.1)]">
                <div className="relative w-full h-[260px] sm:h-[340px] rounded-2xl overflow-hidden bg-slate-50">
                  <Image
                    src={heroImage}
                    alt={h1}
                    fill
                    priority
                    className="object-contain object-top p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="ron-badge-lime">
            Module Architecture
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] tracking-tight">
            {overviewHeading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {overviewDescription}
          </p>
        </div>
      </section>

      {/* 3. Key Feature Cards Grid — Modern Core Capabilities Showcase */}
      <section className="py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F4]/60 relative overflow-hidden border-b border-slate-200/60">
        {/* Ambient atmospheric backdrop orbs */}
        <div className="absolute -top-32 right-1/4 w-[600px] h-[300px] bg-gradient-to-r from-[#087E8B]/[0.05] via-[#19B5A5]/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="ron-badge-lime mb-3">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0E151B] mt-2 tracking-tight">
              Engineered for Precision: <span className="text-[#087E8B]">Core Capabilities</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-3 max-w-2xl mx-auto leading-relaxed">
              Purpose-built architectures designed to eliminate manual administrative overhead and guarantee 100% operational accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {keyFeatures.map((feat, idx) => {
              const text = (feat.title + " " + feat.description).toLowerCase();

              // Dynamic content-aware icon selection and gradient styling
              let featMeta = {
                gradient: "from-teal-500/10 via-cyan-500/15 to-teal-50/50",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              };

              if (text.includes("biometric") || text.includes("hardware") || text.includes("punch") || text.includes("fingerprint") || text.includes("facial")) {
                featMeta = {
                  gradient: "from-teal-500/10 via-cyan-500/15 to-sky-50/50",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.66-1.34-3-3-3s-3 1.34-3 3c0 3 3 5 3 7" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7c0-3.31-2.69-6-6-6S0 3.69 0 7c0 4.5 4.5 8 4.5 11" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 11c0-3-2-5-5-5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11c0-5-4-9-9-9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4 0 7-3 7-7" />
                    </svg>
                  ),
                };
              } else if (text.includes("geo") || text.includes("gps") || text.includes("mobile") || text.includes("perimeter") || text.includes("location")) {
                featMeta = {
                  gradient: "from-indigo-500/10 via-sky-500/15 to-blue-50/50",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                };
              } else if (text.includes("shift") || text.includes("roster") || text.includes("calendar") || text.includes("rotational")) {
                featMeta = {
                  gradient: "from-rose-500/10 via-pink-500/15 to-rose-50/50",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 16 2 2 4-4" />
                    </svg>
                  ),
                };
              } else if (text.includes("payroll") || text.includes("salary") || text.includes("statutory") || text.includes("deduction") || text.includes("pf") || text.includes("esi") || text.includes("tds")) {
                featMeta = {
                  gradient: "from-emerald-500/10 via-teal-500/15 to-cyan-50/50",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  ),
                };
              } else if (text.includes("ai") || text.includes("intelligence") || text.includes("smart") || text.includes("predict") || text.includes("nlp") || text.includes("natural language")) {
                featMeta = {
                  gradient: "from-violet-500/10 via-purple-500/15 to-violet-50/50",
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
                    </svg>
                  ),
                };
              } else if (text.includes("security") || text.includes("compliance") || text.includes("audit") || text.includes("encryption") || text.includes("bank-grade") || text.includes("law")) {
                featMeta = {
                  gradient: "from-teal-500/10 via-emerald-500/15 to-teal-50/50",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                };
              } else if (text.includes("asset") || text.includes("hardware") || text.includes("laptop") || text.includes("device")) {
                featMeta = {
                  gradient: "from-amber-500/10 via-orange-500/15 to-amber-50/50",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  ),
                };
              } else if (text.includes("appraisal") || text.includes("okr") || text.includes("kpi") || text.includes("goal") || text.includes("performance") || text.includes("rating")) {
                featMeta = {
                  gradient: "from-orange-500/10 via-amber-500/15 to-yellow-50/50",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  ),
                };
              } else if (text.includes("recruit") || text.includes("candidate") || text.includes("hiring") || text.includes("ats") || text.includes("job") || text.includes("interview")) {
                featMeta = {
                  gradient: "from-fuchsia-500/10 via-pink-500/15 to-purple-50/50",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <line x1="19" y1="8" x2="19" y2="14" />
                      <line x1="22" y1="11" x2="16" y2="11" />
                    </svg>
                  ),
                };
              } else if (text.includes("expense") || text.includes("claim") || text.includes("receipt") || text.includes("reimburse") || text.includes("ocr")) {
                featMeta = {
                  gradient: "from-emerald-500/10 via-teal-500/15 to-mint-50/50",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                      <line x1="8" y1="8" x2="16" y2="8" />
                      <line x1="8" y1="12" x2="14" y2="12" />
                    </svg>
                  ),
                };
              } else if (text.includes("project") || text.includes("timesheet") || text.includes("billable") || text.includes("task") || text.includes("milestone")) {
                featMeta = {
                  gradient: "from-blue-500/10 via-cyan-500/15 to-sky-50/50",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                    </svg>
                  ),
                };
              }

              return (
                <div
                  key={idx}
                  className="rounded-[30px] sm:rounded-[32px] p-7 sm:p-8 bg-white border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_50px_-12px_rgba(8,126,139,0.16)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group block"
                >
                  {/* Subtle top-right ambient flare on hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#087E8B]/10 via-[#19B5A5]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Micro dot pattern in corner */}
                  <div
                    className="absolute top-0 right-0 w-28 h-28 opacity-[0.1] group-hover:opacity-[0.25] transition-opacity pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(#087E8B 0.8px, transparent 0.8px)",
                      backgroundSize: "10px 10px",
                    }}
                  />

                  {/* Top: Floating 3D Icon Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-2xl bg-[#087E8B]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div
                          className={`relative w-13 h-13 rounded-2xl bg-gradient-to-tr ${featMeta.gradient} border border-[#087E8B]/20 flex items-center justify-center text-[#087E8B] shadow-2xs group-hover:scale-110 group-hover:rotate-2 group-hover:bg-gradient-to-tr group-hover:from-[#087E8B] group-hover:to-[#19B5A5] group-hover:text-white transition-all duration-300`}
                        >
                          {featMeta.icon}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#0E151B] group-hover:text-[#087E8B] transition-colors mb-2.5 tracking-tight leading-snug">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal mb-5">
                      {feat.description}
                    </p>
                  </div>

                  {/* Feature Bullet Points with verified micro-checkmarks */}
                  {feat.bulletPoints && feat.bulletPoints.length > 0 && (
                    <div className="pt-4 mt-auto border-t border-slate-100">
                      <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                        {feat.bulletPoints.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 group/pt">
                            <div className="w-4 h-4 rounded-full bg-[#EEF3F2] group-hover/pt:bg-[#087E8B] text-[#087E8B] group-hover/pt:text-white flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span className="leading-tight">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Bottom Interactive Accent Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#087E8B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Business Benefits (Measurable ROI) — Clean Card Style with Organic Pastel Badge Icons */}
      <section className="py-20 bg-[#FBFDFD] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="ron-badge-lime">
              Measurable ROI
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] mt-3 tracking-tight">
              Real Impact for HR &amp; Business Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessBenefits.map((benefit, bIdx) => {
              const text = (benefit.title + " " + benefit.description + " " + (benefit.metric || "")).toLowerCase();

              // Dynamic content-based icon matching for all modules and ROI cards
              let brushFill = "#E2F5A6";
              let iconSvg = (
                <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              );

              // 1. Biometric / Buddy Punching / Turnstile Verification
              if (text.includes("buddy") || text.includes("punch") || text.includes("biometric") || text.includes("turnstile")) {
                brushFill = "#E2F5A6"; // pastel lime
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
                    <path d="M5 10a7 7 0 0 0 14 0" />
                    <line x1="12" y1="17" x2="12" y2="22" />
                    <line x1="8" y1="22" x2="16" y2="22" />
                  </svg>
                );
              }
              // 2. Roster Planning / Shift Calendar / Scheduling
              else if (text.includes("roster") || text.includes("shift") || text.includes("calendar") || text.includes("absenteeism")) {
                brushFill = "#FDCEDB"; // pastel pink
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <path d="m9 16 2 2 4-4" />
                  </svg>
                );
              }
              // 3. Loss of Pay / Payroll Disputes / Statutory Fairness / Penalties
              else if (text.includes("dispute") || text.includes("loss of pay") || text.includes("lop") || text.includes("penalt") || text.includes("biased") || text.includes("statutory filing")) {
                brushFill = "#D6E2FB"; // pastel periwinkle
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="M7 21h10" />
                    <path d="M12 3v18" />
                    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                  </svg>
                );
              }
              // 4. Fast Cycles / Speed / Time Turnaround
              else if (text.includes("faster") || text.includes("speed") || text.includes("turnaround") || text.includes("20-minute") || text.includes("instant")) {
                brushFill = "#FEF08A"; // pastel yellow
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                );
              }
              // 5. Satisfaction / Payday Happiness / Morale / Retention / Attrition
              else if (text.includes("satisfaction") || text.includes("payday") || text.includes("attrition") || text.includes("burnout") || text.includes("drop-off")) {
                brushFill = "#FCE7F3"; // pastel rose
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                );
              }
              // 6. Mobile App / Smartphone / Field & Remote Workforce
              else if (text.includes("smartphone") || text.includes("mobile") || text.includes("field & remote") || text.includes("phone")) {
                brushFill = "#E0E7FF"; // pastel indigo
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                );
              }
              // 7. Paperless / Cloud Vault / Digital Documents
              else if (text.includes("paperless") || text.includes("paper") || text.includes("file management") || text.includes("vault")) {
                brushFill = "#CFFAFE"; // pastel sky
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                    <path d="m8 19 3 3 6-6" />
                  </svg>
                );
              }
              // 8. Verified Rating / App Store / 4.8★
              else if (text.includes("★") || text.includes("star") || text.includes("rating") || text.includes("verified experience")) {
                brushFill = "#FEF3C7"; // pastel amber
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                );
              }
              // 9. Billability / Project Margins / Timesheets
              else if (text.includes("billab") || text.includes("margin") || text.includes("timesheet") || text.includes("project")) {
                brushFill = "#E0F2FE"; // pastel cyan
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                );
              }
              // 10. Recruitment / Hire / Candidate / Offer Letter
              else if (text.includes("hire") || text.includes("candidate") || text.includes("offer letter") || text.includes("recruit")) {
                brushFill = "#FBCFE8"; // pastel pink
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" y1="8" x2="19" y2="14" />
                    <line x1="22" y1="11" x2="16" y2="11" />
                  </svg>
                );
              }
              // 11. Performance / Appraisal / OKR / Goals
              else if (text.includes("appraisal") || text.includes("okr") || text.includes("goal") || text.includes("evaluation")) {
                brushFill = "#FED7AA"; // pastel orange
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                );
              }
              // 12. Expense / Receipts / Reimbursements
              else if (text.includes("expense") || text.includes("receipt") || text.includes("reimburse") || text.includes("claim")) {
                brushFill = "#D1FAE5"; // pastel emerald
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                    <line x1="8" y1="8" x2="16" y2="8" />
                    <line x1="8" y1="12" x2="14" y2="12" />
                  </svg>
                );
              }
              // 13. Security / Data Leakage / Audit / 0 Risk
              else if (text.includes("leakage") || text.includes("0 risk") || text.includes("fraud") || text.includes("audit") || text.includes("encrypt")) {
                brushFill = "#CCFBF1"; // pastel mint
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                );
              }
              // 14. Company Assets / Hardware / Laptops
              else if (text.includes("asset") || text.includes("hardware") || text.includes("laptop")) {
                brushFill = "#FEEBC8"; // pastel peach
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                );
              }
              // 15. AI Queries / Insights / Single Source of Truth
              else if (text.includes("ai") || text.includes("queries") || text.includes("truth") || text.includes("insight")) {
                brushFill = "#EDE9FE"; // pastel violet
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
                  </svg>
                );
              }
              // 16. Leave Encashment / Overtime Savings / Money
              else if (text.includes("encashment") || text.includes("overtime") || text.includes("saving") || text.includes("cost")) {
                brushFill = "#FEF3C7"; // pastel yellow
                iconSvg = (
                  <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                );
              }
              // Fallback
              else {
                if (bIdx % 3 === 0) {
                  brushFill = "#E2F5A6";
                  iconSvg = (
                    <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  );
                } else if (bIdx % 3 === 1) {
                  brushFill = "#FDCEDB";
                  iconSvg = (
                    <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <path d="m9 16 2 2 4-4" />
                    </svg>
                  );
                } else {
                  brushFill = "#D6E2FB";
                  iconSvg = (
                    <svg className="w-5 h-5 text-slate-900 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                      <path d="M7 21h10" />
                      <path d="M12 3v18" />
                      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                    </svg>
                  );
                }
              }

              const currentBadge = (
                <div className="w-11 h-11 relative flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 44 44" fill="none">
                    <path
                      d="M8 12C6 6 14 4 24 5C33 6 39 10 40 18C41 27 38 36 31 38C23 40 12 39 7 32C3 26 5 19 8 12Z"
                      fill={brushFill}
                      className="opacity-95"
                    />
                  </svg>
                  {iconSvg}
                </div>
              );

              return (
                <div
                  key={bIdx}
                  className="bg-white rounded-3xl p-8 border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Hand-drawn Organic Pastel Icon Badge */}
                    <div className="mb-6">
                      {currentBadge}
                    </div>

                    <h3 className="font-bold text-lg sm:text-xl text-[#0E151B] tracking-tight mb-2.5">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>

                  {benefit.metric && (
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Measurable Impact
                      </span>
                      <span className="text-sm font-black text-[#087E8B] bg-[#087E8B]/10 px-3 py-1 rounded-full border border-[#087E8B]/20">
                        {benefit.metric}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Workflow Explanation — Modern OffersHub-Inspired 3D Perspective Card Layout */}
      <section className="py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 relative overflow-hidden border-b border-slate-200/60">
        {/* Ambient atmospheric backdrop orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-teal-200/20 via-sky-200/20 to-purple-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="ron-badge-lime mb-3">
              Workflow Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0E151B] tracking-tight">
              How <span className="text-[#087E8B]">{badge}</span> works?
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-3 max-w-2xl mx-auto leading-relaxed">
              From initial data ingestion to automated reconciliation and instant delivery — intuitive, transparent, and error-free.
            </p>
          </div>

          {/* Unified Cards Grid: Text at Top, 3D Perspective Visuals at Bottom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, sIdx) => {
              const titleLower = step.title.toLowerCase();
              const descLower = step.description.toLowerCase();
              const fullText = (titleLower + " " + descLower);

              // 1. Determine Content-Based Step Icon
              let stepIcon = (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              );

              if (fullText.includes("punch") || fullText.includes("attendance") || fullText.includes("biometric") || fullText.includes("check-in")) {
                // Biometric / Terminal / Fingerprint Punch
                stepIcon = (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.66-1.34-3-3-3s-3 1.34-3 3c0 3 3 5 3 7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7c0-3.31-2.69-6-6-6S0 3.69 0 7c0 4.5 4.5 8 4.5 11" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 11c0-3-2-5-5-5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11c0-5-4-9-9-9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4 0 7-3 7-7" />
                  </svg>
                );
              } else if (fullText.includes("document") || fullText.includes("verification") || fullText.includes("kyc") || fullText.includes("receipt") || fullText.includes("upload")) {
                // Verified Document / KYC
                stepIcon = (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                );
              } else if (fullText.includes("ai") || fullText.includes("computation") || fullText.includes("pattern") || fullText.includes("intelligent") || fullText.includes("recognition")) {
                // AI Sparkles Engine
                stepIcon = (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.9 5.8a2 2 0 001.3 1.3L21 12l-5.8 1.9a2 2 0 00-1.3 1.3L12 21l-1.9-5.8a2 2 0 00-1.3-1.3L3 12l5.8-1.9a2 2 0 001.3-1.3L12 3z" />
                  </svg>
                );
              } else if (fullText.includes("app") || fullText.includes("mobile") || fullText.includes("download") || fullText.includes("self-service") || fullText.includes("login")) {
                // Mobile App Device
                stepIcon = (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                );
              } else if (fullText.includes("asset") || fullText.includes("hardware") || fullText.includes("laptop")) {
                // IT Laptop / Hardware Asset
                stepIcon = (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                );
              } else if (fullText.includes("review") || fullText.includes("approval") || fullText.includes("scorecard") || fullText.includes("interview") || fullText.includes("delegation")) {
                // Manager Review & Verification
                stepIcon = (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                );
              } else if (fullText.includes("timesheet") || fullText.includes("time logging") || fullText.includes("roster") || fullText.includes("calendar")) {
                // Shift Calendar & Timesheet
                stepIcon = (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                );
              } else if (fullText.includes("disburs") || fullText.includes("payslip") || fullText.includes("delivery") || fullText.includes("bank file") || fullText.includes("payout") || fullText.includes("publish")) {
                // Secure Payout & Encrypted Download
                stepIcon = (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                );
              } else if (fullText.includes("continuous tracking") || fullText.includes("timeline") || fullText.includes("history")) {
                // 3D Timeline Wireframe Globe
                stepIcon = (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                );
              }

              // 2. Select 3D Visual Style matching OffersHub reference layout
              const render3DVisual = () => {
                // Style 0: Perspective Floor Grid with Vertical Light Rays & 3D Cyan Disc
                if (sIdx === 0) {
                  return (
                    <div className="relative w-full h-[180px] flex items-center justify-center overflow-hidden">
                      {/* Perspective floor grid receding into distance */}
                      <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 300 180" fill="none">
                        <defs>
                          <linearGradient id={`grid-cyan-${sIdx}`} x1="0" y1="180" x2="0" y2="30" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#087E8B" stopOpacity="0.45" />
                            <stop offset="0.7" stopColor="#38BDF8" stopOpacity="0.15" />
                            <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <line x1="10" y1="170" x2="290" y2="170" stroke={`url(#grid-cyan-${sIdx})`} strokeWidth="1" />
                        <line x1="30" y1="150" x2="270" y2="150" stroke={`url(#grid-cyan-${sIdx})`} strokeWidth="1" />
                        <line x1="55" y1="130" x2="245" y2="130" stroke={`url(#grid-cyan-${sIdx})`} strokeWidth="1" />
                        <line x1="80" y1="110" x2="220" y2="110" stroke={`url(#grid-cyan-${sIdx})`} strokeWidth="1" />
                        <line x1="105" y1="95" x2="195" y2="95" stroke={`url(#grid-cyan-${sIdx})`} strokeWidth="0.8" />
                        <line x1="10" y1="170" x2="150" y2="70" stroke={`url(#grid-cyan-${sIdx})`} strokeWidth="1" />
                        <line x1="60" y1="170" x2="150" y2="70" stroke={`url(#grid-cyan-${sIdx})`} strokeWidth="1" />
                        <line x1="110" y1="170" x2="150" y2="70" stroke={`url(#grid-cyan-${sIdx})`} strokeWidth="1" />
                        <line x1="150" y1="170" x2="150" y2="70" stroke={`url(#grid-cyan-${sIdx})`} strokeWidth="1" />
                        <line x1="190" y1="170" x2="150" y2="70" stroke={`url(#grid-cyan-${sIdx})`} strokeWidth="1" />
                        <line x1="240" y1="170" x2="150" y2="70" stroke={`url(#grid-cyan-${sIdx})`} strokeWidth="1" />
                        <line x1="290" y1="170" x2="150" y2="70" stroke={`url(#grid-cyan-${sIdx})`} strokeWidth="1" />
                      </svg>

                      {/* Vertical light rays with glowing heads */}
                      <div className="absolute inset-0 flex items-center justify-around px-8 pointer-events-none">
                        <div className="w-[1.5px] h-14 bg-gradient-to-t from-transparent via-[#38BDF8]/40 to-[#38BDF8] relative -translate-y-3">
                          <div className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse" />
                        </div>
                        <div className="w-[1.5px] h-18 bg-gradient-to-t from-transparent via-[#087E8B]/40 to-[#087E8B] relative -translate-y-5">
                          <div className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#087E8B] shadow-[0_0_8px_#087E8B]" />
                        </div>
                        <div className="w-16" />
                        <div className="w-[1.5px] h-18 bg-gradient-to-t from-transparent via-[#087E8B]/40 to-[#087E8B] relative -translate-y-5">
                          <div className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#087E8B] shadow-[0_0_8px_#087E8B]" />
                        </div>
                        <div className="w-[1.5px] h-14 bg-gradient-to-t from-transparent via-[#38BDF8]/40 to-[#38BDF8] relative -translate-y-3">
                          <div className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse" />
                        </div>
                      </div>

                      {/* Ambient cyan glow */}
                      <div className="absolute w-28 h-28 rounded-full bg-[#38BDF8]/20 blur-xl pointer-events-none" />

                      {/* 3D Cyan Glowing Disc / Sphere */}
                      <div
                        className="relative z-10 w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center shadow-[0_12px_32px_rgba(14,165,233,0.4)] group-hover:scale-110 transition-transform duration-300 border border-white/70"
                        style={{
                          background: "radial-gradient(circle at 35% 28%, #BAE6FD 0%, #38BDF8 40%, #0284C7 85%, #0369A1 100%)",
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.15)_40%,transparent_70%)] pointer-events-none" />
                        <div className="relative z-10 text-white drop-shadow-md">
                          {stepIcon}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Style 1: Concentric Radar Rings with 3D Deep Blue Sphere
                if (sIdx === 1) {
                  return (
                    <div className="relative w-full h-[180px] flex items-center justify-center overflow-hidden">
                      {/* Concentric ripple rings */}
                      <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 300 180" fill="none">
                        <circle cx="150" cy="90" r="30" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="150" cy="90" r="55" stroke="#BFDBFE" strokeWidth="1" />
                        <circle cx="150" cy="90" r="80" stroke="#DBEAFE" strokeWidth="1" />
                        <circle cx="150" cy="90" r="105" stroke="#EFF6FF" strokeWidth="1" strokeDasharray="2 4" />
                      </svg>

                      {/* Micro dot matrix */}
                      <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          backgroundImage: "radial-gradient(#3B82F6 0.8px, transparent 0.8px)",
                          backgroundSize: "12px 12px",
                        }}
                      />

                      {/* Ambient blue glow */}
                      <div className="absolute w-28 h-28 rounded-full bg-[#3B82F6]/25 blur-xl pointer-events-none" />

                      {/* 3D Deep Blue Sphere with Bullseye/Target */}
                      <div
                        className="relative z-10 w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center shadow-[0_12px_32px_rgba(37,99,235,0.45)] group-hover:scale-110 transition-transform duration-300 border border-white/70"
                        style={{
                          background: "radial-gradient(circle at 35% 28%, #BFDBFE 0%, #3B82F6 40%, #1D4ED8 85%, #1E3A8A 100%)",
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.15)_40%,transparent_70%)] pointer-events-none" />
                        <div className="relative z-10 text-white drop-shadow-md">
                          {stepIcon}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Style 2: 3D Stacked Isometric Translucent Glass Tiles
                if (sIdx === 2) {
                  return (
                    <div className="relative w-full h-[180px] flex items-center justify-center overflow-hidden">
                      {/* Isometric grid floor */}
                      <svg className="absolute inset-0 w-full h-full opacity-45" viewBox="0 0 300 180" fill="none">
                        <path d="M0 130 L150 180 L300 130 M0 90 L150 140 L300 90 M0 50 L150 100 L300 50" stroke="#DDD6FE" strokeWidth="1" strokeDasharray="2 3" />
                        <path d="M30 180 L30 0 M90 180 L90 0 M150 180 L150 0 M210 180 L210 0 M270 180 L270 0" stroke="#EDE9FE" strokeWidth="0.8" />
                      </svg>

                      {/* Ambient violet glow */}
                      <div className="absolute w-28 h-28 rounded-full bg-[#8B5CF6]/20 blur-xl pointer-events-none" />

                      {/* 3D Stacked Glass Isometric Tiles */}
                      <div className="relative z-10 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        {/* Layer 1 (bottom) */}
                        <div className="w-20 h-11 rounded-2xl bg-purple-400/30 border border-purple-300/40 shadow-sm backdrop-blur-xs transform -rotate-[22deg] skew-x-[18deg] translate-y-3" />
                        {/* Layer 2 (middle) */}
                        <div className="w-20 h-11 rounded-2xl bg-purple-500/40 border border-purple-300/60 shadow-md backdrop-blur-xs transform -rotate-[22deg] skew-x-[18deg] translate-y-1.5" />
                        {/* Layer 3 (top) */}
                        <div
                          className="w-20 h-11 rounded-2xl border border-white/80 shadow-[0_10px_25px_rgba(124,58,237,0.35)] backdrop-blur-md transform -rotate-[22deg] skew-x-[18deg] flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, #A855F7 0%, #7C3AED 50%, #4F46E5 100%)",
                          }}
                        >
                          <div className="transform rotate-[22deg] skew-x-[-18deg] text-white drop-shadow-sm">
                            {stepIcon}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Style 3: Isometric Emerald Glass Shield with Binary Streams OR Glowing Coral Capsule
                return (
                  <div className="relative w-full h-[180px] flex items-center justify-center overflow-hidden">
                    {/* Matrix binary stream backdrop */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-[0.25] text-[8px] font-mono text-emerald-600 leading-tight select-none pointer-events-none">
                      <span>01010011 01101000 01100101 01101110 01101100 01101100</span>
                      <span>01001000 01010010 01001101 01010011 00100000 01000001</span>
                      <span>01001001 00100000 01000011 01101111 01110000 01101001</span>
                      <span>01101100 01101111 01110100 00100000 01010110 00110011</span>
                    </div>

                    {/* Ambient glow */}
                    <div className="absolute w-28 h-28 rounded-full bg-[#10B981]/20 blur-xl pointer-events-none" />

                    {/* Floating 3D Emerald Glass Platform */}
                    <div className="relative z-10 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div
                        className="w-22 h-14 rounded-2xl border border-emerald-300/70 shadow-[0_12px_28px_rgba(16,185,129,0.3)] backdrop-blur-md transform -rotate-[20deg] skew-x-[16deg] flex items-center justify-center p-2"
                        style={{
                          background: "linear-gradient(135deg, rgba(52,211,153,0.85) 0%, rgba(16,185,129,0.9) 60%, rgba(5,150,105,0.95) 100%)",
                        }}
                      >
                        <div className="transform rotate-[20deg] skew-x-[-16deg] text-white drop-shadow-md">
                          {stepIcon}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              };

              return (
                <div
                  key={sIdx}
                  className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_-8px_rgba(8,126,139,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
                >
                  {/* Top Text Content Area (as in reference image) */}
                  <div>
                    <h3 className="text-lg sm:text-[19px] font-bold text-[#0E151B] tracking-tight leading-snug mb-2 group-hover:text-[#087E8B] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom 3D Perspective Visual Area (as in reference image) */}
                  <div className="w-full mt-6 rounded-2xl bg-[#F8FAFC]/70 border border-slate-100/80 overflow-hidden relative">
                    {render3DVisual()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FAQs Section — Modern Clean 2-Column Accordion Layout */}
      <FAQAccordionSection
        badge={`${badge} FAQs`}
        heading="Frequently asked questions"
        description={`Everything you need to know about setting up, automating, and maintaining ${badge} with Shenll HRMS.`}
        faqs={faqs}
      />

      {/* 7. Related Modules Internal Linking — Modern Integrated Suite Showcase */}
      <section className="py-24 bg-gradient-to-b from-[#F0F4F8]/80 via-[#F8FAFC] to-white relative overflow-hidden border-b border-slate-200/60">
        {/* Ambient atmospheric backdrop orbs */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#087E8B]/[0.04] via-[#19B5A5]/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="ron-badge-lime mb-3">
                INTEGRATED SUITE
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#0E151B] mt-2 tracking-tight">
                Seamlessly Connected with <span className="text-[#087E8B]">Your Entire HR Stack</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed font-normal">
                Every module natively shares attendance logs, employee profiles, and statutory deductions in real time with zero duplicate data entry.
              </p>
            </div>

            <Link
              href="/hrms-software"
              className="ron-pill-dark text-xs inline-flex items-center gap-2 group self-start md:self-auto shadow-md"
            >
              <span>Explore All 12 Modules</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {relatedModules.map((rel, rIdx) => {
              const t = (rel.title + " " + rel.href).toLowerCase();

              // Content-Aware Integration Metadata & Modern Icons
              let meta = {
                tag: "Core Database Vault",
                syncType: "Unified Profile Sync",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                gradient: "from-[#087E8B]/10 via-[#19B5A5]/15 to-teal-50/50",
              };

              if (t.includes("payroll")) {
                meta = {
                  tag: "Statutory & Banking",
                  syncType: "Direct Bank File Sync",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  ),
                  gradient: "from-emerald-500/10 via-teal-500/15 to-cyan-50/50",
                };
              } else if (t.includes("attendance")) {
                meta = {
                  tag: "Biometric Webhook",
                  syncType: "Live Biometric Punch",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  gradient: "from-teal-500/10 via-cyan-500/15 to-sky-50/50",
                };
              } else if (t.includes("leave")) {
                meta = {
                  tag: "Auto-Balance Sync",
                  syncType: "Payroll Auto-Freeze",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 16 2 2 4-4" />
                    </svg>
                  ),
                  gradient: "from-rose-500/10 via-pink-500/15 to-rose-50/50",
                };
              } else if (t.includes("mobile")) {
                meta = {
                  tag: "Geo-Fenced Clock-in",
                  syncType: "Native iOS / Android",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  ),
                  gradient: "from-indigo-500/10 via-sky-500/15 to-blue-50/50",
                };
              } else if (t.includes("recruitment")) {
                meta = {
                  tag: "AI Talent Pipeline",
                  syncType: "Instant KYC Onboarding",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <line x1="19" y1="8" x2="19" y2="14" />
                      <line x1="22" y1="11" x2="16" y2="11" />
                    </svg>
                  ),
                  gradient: "from-purple-500/10 via-fuchsia-500/15 to-purple-50/50",
                };
              } else if (t.includes("performance")) {
                meta = {
                  tag: "OKR & Appraisal Engine",
                  syncType: "360° Review Sync",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  ),
                  gradient: "from-amber-500/10 via-orange-500/15 to-amber-50/50",
                };
              } else if (t.includes("project")) {
                meta = {
                  tag: "Timesheet & Margins",
                  syncType: "Cross-Punch Crosscheck",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                    </svg>
                  ),
                  gradient: "from-blue-500/10 via-cyan-500/15 to-sky-50/50",
                };
              } else if (t.includes("expense")) {
                meta = {
                  tag: "Receipt OCR Engine",
                  syncType: "1-Click Direct Reimburse",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                      <line x1="8" y1="8" x2="16" y2="8" />
                      <line x1="8" y1="12" x2="14" y2="12" />
                    </svg>
                  ),
                  gradient: "from-emerald-500/10 via-teal-500/15 to-mint-50/50",
                };
              } else if (t.includes("ai")) {
                meta = {
                  tag: "Natural Language AI",
                  syncType: "Continuous Workload Sync",
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
                    </svg>
                  ),
                  gradient: "from-violet-500/10 via-purple-500/15 to-violet-50/50",
                };
              }

              return (
                <Link
                  key={rIdx}
                  href={rel.href}
                  className="rounded-[30px] sm:rounded-[32px] p-7 sm:p-8 bg-white border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_50px_-12px_rgba(8,126,139,0.16)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden block"
                >
                  {/* Subtle top-right ambient flare on hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#087E8B]/10 via-[#19B5A5]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Micro dot pattern in corner */}
                  <div
                    className="absolute top-0 right-0 w-28 h-28 opacity-[0.12] group-hover:opacity-[0.25] transition-opacity pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(#087E8B 0.8px, transparent 0.8px)",
                      backgroundSize: "10px 10px",
                    }}
                  />

                  {/* Top Row: Floating 3D Icon Badge & Capability Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      {/* Floating Glassmorphic Icon Badge */}
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-2xl bg-[#087E8B]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div
                          className={`relative w-13 h-13 rounded-2xl bg-gradient-to-tr ${meta.gradient} border border-[#087E8B]/20 flex items-center justify-center text-[#087E8B] shadow-2xs group-hover:scale-110 group-hover:rotate-2 group-hover:bg-gradient-to-tr group-hover:from-[#087E8B] group-hover:to-[#19B5A5] group-hover:text-white transition-all duration-300`}
                        >
                          {meta.icon}
                        </div>
                      </div>

                      {/* Integration Tag */}
                      <span className="text-[10px] font-bold tracking-wider text-[#087E8B] bg-[#EEF3F2] px-2.5 py-1 rounded-full border border-[#087E8B]/20 uppercase">
                        {meta.tag}
                      </span>
                    </div>

                    <h4 className="font-bold text-lg sm:text-xl text-[#0E151B] group-hover:text-[#087E8B] transition-colors tracking-tight leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-slate-500 mt-2 leading-relaxed font-normal">
                      {rel.description}
                    </p>
                  </div>

                  {/* Bottom Interactive Row: Live Sync status & Modern Action Arrow */}
                  <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {meta.syncType}
                    </span>

                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200/80 group-hover:bg-[#087E8B] group-hover:border-[#087E8B] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:shadow-md group-hover:translate-x-0.5">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Conversion Demo Request Section */}
      <section id="demo-form" className="py-24 bg-[#0E151B] text-white relative overflow-hidden">
        {/* Subtle mesh background accent */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#19B5A5]/15 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="ron-badge-lime">
                Schedule Walkthrough
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                See How This Module Automates Your Workforce Operations
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Book a customized live session tailored to your exact employee count, payroll statutory requirements, and shift rules.
              </p>
              <div className="pt-2 text-xs text-slate-300 space-y-2.5">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                  100% data migration assistance included
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                  Dedicated technical onboarding specialist
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                  Transparent employee pricing (₹12,000/mo up to 100 staff)
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <DemoRequestForm defaultModule={badge} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
