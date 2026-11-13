import React from "react";
import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";
import { GooglePlayBadge, AppStoreBadge } from "@/components/BrandIcons";
import DemoRequestForm from "@/components/DemoRequestForm";
import FAQAccordionSection from "@/components/FAQAccordionSection";

interface ProductLandingLayoutProps {
  badge: string;
  h1: string;
  tagline: string;
  heroImage?: string;
  overviewHeading: string;
  overviewDescription: string;
  liveAppUrl?: string;
  liveAppLabel?: string;
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
  liveAppUrl,
  liveAppLabel = "Open Live App",
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
                    <MaterialIcon name="arrow_forward" size={16} weight={300} className="text-white" />
                  </div>
                </Link>

                {liveAppUrl ? (
                  <a
                    href={liveAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ron-pill-light w-full sm:w-auto !py-3.5 !px-6 text-sm justify-center bg-white hover:bg-[#087E8B]/10 text-[#087E8B] border border-[#087E8B]/30 shadow-xs font-bold inline-flex items-center gap-2 group transition-all"
                  >
                    <span>{liveAppLabel}</span>
                    <MaterialIcon name="north_east" size={18} weight={300} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <Link
                    href="/pricing"
                    className="ron-pill-light w-full sm:w-auto !py-3.5 !px-6 text-sm justify-center bg-white border border-slate-200/80 shadow-xs"
                  >
                    <span>View Pricing & Plans</span>
                  </Link>
                )}
              </div>

              {/* Conditional Live App Store & Google Play Badges for Mobile Modules */}
              {(badge.toLowerCase().includes("mobile") || h1.toLowerCase().includes("mobile")) && (
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <GooglePlayBadge />
                  <AppStoreBadge />
                </div>
              )}

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-2">
                  <MaterialIcon name="cloud_done" size={22} className="text-[#087E8B]" /> 100% Cloud-Based
                </span>
                <span className="flex items-center gap-2">
                  <MaterialIcon name="smartphone" size={22} className="text-[#087E8B]" /> Mobile App Included
                </span>
                <span className="flex items-center gap-2">
                  <MaterialIcon name="verified_user" size={22} className="text-[#087E8B]" /> Verified Indian Compliance
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
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#087E8B 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
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
                gradient: "from-teal-500/15 via-[#087E8B]/20 to-teal-50/60",
                icon: <MaterialIcon name="verified_user" size={32} weight={300} />,
              };

              if (text.includes("biometric") || text.includes("hardware") || text.includes("punch") || text.includes("fingerprint") || text.includes("facial")) {
                featMeta = {
                  gradient: "from-teal-500/15 via-cyan-500/20 to-sky-50/70",
                  icon: <MaterialIcon name="fingerprint" size={32} weight={300} />,
                };
              } else if (text.includes("geo") || text.includes("gps") || text.includes("perimeter") || text.includes("location") || text.includes("radius")) {
                featMeta = {
                  gradient: "from-indigo-500/15 via-sky-500/20 to-blue-50/70",
                  icon: <MaterialIcon name="location_on" size={32} weight={300} />,
                };
              } else if (text.includes("shift") || text.includes("roster") || text.includes("rotational") || text.includes("night shift")) {
                featMeta = {
                  gradient: "from-rose-500/15 via-pink-500/20 to-rose-50/70",
                  icon: <MaterialIcon name="calendar_month" size={32} weight={300} />,
                };
              } else if (text.includes("overtime") || text.includes("grace") || text.includes("ot rules") || text.includes("late arrival")) {
                featMeta = {
                  gradient: "from-amber-500/15 via-yellow-500/20 to-amber-50/70",
                  icon: <MaterialIcon name="timer" size={32} weight={300} />,
                };
              } else if (text.includes("regularization") || text.includes("gate pass") || text.includes("on-duty")) {
                featMeta = {
                  gradient: "from-cyan-500/15 via-teal-500/20 to-cyan-50/70",
                  icon: <MaterialIcon name="edit_calendar" size={32} weight={300} />,
                };
              } else if (text.includes("dashboard") || text.includes("muster") || text.includes("headcount")) {
                featMeta = {
                  gradient: "from-blue-500/15 via-indigo-500/20 to-sky-50/70",
                  icon: <MaterialIcon name="dashboard" size={32} weight={300} />,
                };
              } else if (text.includes("leave") || text.includes("sandwich") || text.includes("comp-off") || text.includes("holiday")) {
                featMeta = {
                  gradient: "from-pink-500/15 via-rose-500/20 to-pink-50/70",
                  icon: <MaterialIcon name="event_available" size={32} weight={300} />,
                };
              } else if (text.includes("salary") || text.includes("payroll run") || text.includes("wage") || text.includes("salary crediting")) {
                featMeta = {
                  gradient: "from-emerald-500/15 via-teal-500/20 to-cyan-50/70",
                  icon: <MaterialIcon name="payments" size={32} weight={300} />,
                };
              } else if (text.includes("compliance") || text.includes("statutory") || text.includes("pf") || text.includes("esi") || text.includes("pt") || text.includes("lwf")) {
                featMeta = {
                  gradient: "from-teal-500/15 via-emerald-500/20 to-teal-50/70",
                  icon: <MaterialIcon name="verified_user" size={32} weight={300} />,
                };
              } else if (text.includes("tax") || text.includes("tds") || text.includes("form 16") || text.includes("declaration") || text.includes("80c") || text.includes("24q")) {
                featMeta = {
                  gradient: "from-emerald-500/15 via-cyan-500/20 to-emerald-50/70",
                  icon: <MaterialIcon name="calculate" size={32} weight={300} />,
                };
              } else if (text.includes("bank transfer") || text.includes("neft") || text.includes("rtgs") || text.includes("disbursal files")) {
                featMeta = {
                  gradient: "from-indigo-500/15 via-blue-500/20 to-indigo-50/70",
                  icon: <MaterialIcon name="account_balance" size={32} weight={300} />,
                };
              } else if (text.includes("payslip") || text.includes("pdf payslip")) {
                featMeta = {
                  gradient: "from-violet-500/15 via-purple-500/20 to-violet-50/70",
                  icon: <MaterialIcon name="description" size={32} weight={300} />,
                };
              } else if (text.includes("settlement") || text.includes("f&f") || text.includes("gratuity")) {
                featMeta = {
                  gradient: "from-amber-500/15 via-orange-500/20 to-amber-50/70",
                  icon: <MaterialIcon name="handshake" size={32} weight={300} />,
                };
              } else if (text.includes("kyc") || text.includes("vault") || text.includes("document") || text.includes("aadhaar") || text.includes("pan")) {
                featMeta = {
                  gradient: "from-cyan-500/15 via-sky-500/20 to-cyan-50/70",
                  icon: <MaterialIcon name="folder_shared" size={32} weight={300} />,
                };
              } else if (text.includes("asset") || text.includes("laptop") || text.includes("hardware") || text.includes("device") || text.includes("serial")) {
                featMeta = {
                  gradient: "from-amber-500/15 via-orange-500/20 to-amber-50/70",
                  icon: <MaterialIcon name="laptop_mac" size={32} weight={300} />,
                };
              } else if (text.includes("org chart") || text.includes("directory") || text.includes("hierarchy") || text.includes("reporting line")) {
                featMeta = {
                  gradient: "from-sky-500/15 via-blue-500/20 to-sky-50/70",
                  icon: <MaterialIcon name="account_tree" size={32} weight={300} />,
                };
              } else if (text.includes("self-service") || text.includes("ess") || text.includes("profile")) {
                featMeta = {
                  gradient: "from-blue-500/15 via-indigo-500/20 to-blue-50/70",
                  icon: <MaterialIcon name="manage_accounts" size={32} weight={300} />,
                };
              } else if (text.includes("milestone") || text.includes("birthday") || text.includes("anniversary") || text.includes("probation")) {
                featMeta = {
                  gradient: "from-rose-500/15 via-pink-500/20 to-rose-50/70",
                  icon: <MaterialIcon name="celebration" size={32} weight={300} />,
                };
              } else if (text.includes("exit") || text.includes("clearance") || text.includes("relieving") || text.includes("offboarding")) {
                featMeta = {
                  gradient: "from-orange-500/15 via-rose-500/20 to-orange-50/70",
                  icon: <MaterialIcon name="assignment_turned_in" size={32} weight={300} />,
                };
              } else if (text.includes("client-specific") || text.includes("client specific")) {
                featMeta = {
                  gradient: "from-blue-500/15 via-sky-500/20 to-blue-50/70",
                  icon: <MaterialIcon name="assignment_ind" size={32} weight={300} />,
                };
              } else if (text.includes("master librar") || text.includes("reusable master") || text.includes("blocks")) {
                featMeta = {
                  gradient: "from-indigo-500/15 via-purple-500/20 to-indigo-50/70",
                  icon: <MaterialIcon name="layers" size={32} weight={300} />,
                };
              } else if (text.includes("template") || text.includes("versioned")) {
                featMeta = {
                  gradient: "from-teal-500/15 via-[#087E8B]/20 to-cyan-50/70",
                  icon: <MaterialIcon name="dashboard_customize" size={32} weight={300} />,
                };
              } else if (text.includes("masking") || text.includes("anonym") || text.includes("privacy")) {
                featMeta = {
                  gradient: "from-slate-500/15 via-slate-600/20 to-slate-50/70",
                  icon: <MaterialIcon name="visibility_off" size={32} weight={300} />,
                };
              } else if (text.includes("resume") || text.includes("cv")) {
                featMeta = {
                  gradient: "from-cyan-500/15 via-teal-500/20 to-sky-50/70",
                  icon: <MaterialIcon name="contact_page" size={32} weight={300} />,
                };
              } else if (text.includes("applicant") || text.includes("kanban") || text.includes("pipeline")) {
                featMeta = {
                  gradient: "from-fuchsia-500/15 via-pink-500/20 to-purple-50/70",
                  icon: <MaterialIcon name="view_kanban" size={32} weight={300} />,
                };
              } else if (text.includes("interview") || text.includes("panel") || text.includes("scorecard")) {
                featMeta = {
                  gradient: "from-purple-500/15 via-violet-500/20 to-purple-50/70",
                  icon: <MaterialIcon name="video_call" size={32} weight={300} />,
                };
              } else if (text.includes("offer letter") || text.includes("candidate to employee") || text.includes("joining")) {
                featMeta = {
                  gradient: "from-indigo-500/15 via-purple-500/20 to-indigo-50/70",
                  icon: <MaterialIcon name="mark_email_read" size={32} weight={300} />,
                };
              } else if (text.includes("recruit") || text.includes("hiring") || text.includes("talent") || text.includes("sourcing")) {
                featMeta = {
                  gradient: "from-fuchsia-500/15 via-pink-500/20 to-purple-50/70",
                  icon: <MaterialIcon name="person_search" size={32} weight={300} />,
                };
              } else if (text.includes("okr") || text.includes("goal") || text.includes("kpi") || text.includes("target")) {
                featMeta = {
                  gradient: "from-orange-500/15 via-amber-500/20 to-yellow-50/70",
                  icon: <MaterialIcon name="track_changes" size={32} weight={300} />,
                };
              } else if (text.includes("360") || text.includes("peer feedback") || text.includes("review")) {
                featMeta = {
                  gradient: "from-amber-500/15 via-yellow-500/20 to-amber-50/70",
                  icon: <MaterialIcon name="stars" size={32} weight={300} />,
                };
              } else if (text.includes("1-on-1") || text.includes("check-in") || text.includes("coaching")) {
                featMeta = {
                  gradient: "from-violet-500/15 via-purple-500/20 to-violet-50/70",
                  icon: <MaterialIcon name="forum" size={32} weight={300} />,
                };
              } else if (text.includes("bell curve") || text.includes("normalization") || text.includes("rating")) {
                featMeta = {
                  gradient: "from-emerald-500/15 via-teal-500/20 to-emerald-50/70",
                  icon: <MaterialIcon name="ssid_chart" size={32} weight={300} />,
                };
              } else if (text.includes("promotion") || text.includes("increment") || text.includes("appraisal")) {
                featMeta = {
                  gradient: "from-purple-500/15 via-fuchsia-500/20 to-purple-50/70",
                  icon: <MaterialIcon name="military_tech" size={32} weight={300} />,
                };
              } else if (text.includes("skill") || text.includes("training") || text.includes("course") || text.includes("learning")) {
                featMeta = {
                  gradient: "from-blue-500/15 via-sky-500/20 to-blue-50/70",
                  icon: <MaterialIcon name="school" size={32} weight={300} />,
                };
              } else if (text.includes("timesheet") || text.includes("billable") || text.includes("hours")) {
                featMeta = {
                  gradient: "from-cyan-500/15 via-blue-500/20 to-cyan-50/70",
                  icon: <MaterialIcon name="punch_clock" size={32} weight={300} />,
                };
              } else if (text.includes("bench") || text.includes("capacity") || text.includes("workload") || text.includes("bandwidth")) {
                featMeta = {
                  gradient: "from-indigo-500/15 via-sky-500/20 to-indigo-50/70",
                  icon: <MaterialIcon name="group_work" size={32} weight={300} />,
                };
              } else if (text.includes("budget") || text.includes("margin") || text.includes("profitability") || text.includes("cost")) {
                featMeta = {
                  gradient: "from-emerald-500/15 via-teal-500/20 to-emerald-50/70",
                  icon: <MaterialIcon name="monetization_on" size={32} weight={300} />,
                };
              } else if (text.includes("task") || text.includes("milestone") || text.includes("sprint") || text.includes("deliverable")) {
                featMeta = {
                  gradient: "from-blue-500/15 via-cyan-500/20 to-sky-50/70",
                  icon: <MaterialIcon name="task_alt" size={32} weight={300} />,
                };
              } else if (text.includes("camera") || text.includes("receipt") || text.includes("ocr") || text.includes("expense") || text.includes("claim") || text.includes("per diem") || text.includes("reimburse") || text.includes("travel")) {
                featMeta = {
                  gradient: "from-emerald-500/15 via-teal-500/20 to-mint-50/70",
                  icon: <MaterialIcon name="receipt_long" size={32} weight={300} />,
                };
              } else if (text.includes("ai") || text.includes("intelligence") || text.includes("smart") || text.includes("predict") || text.includes("agent") || text.includes("nlp") || text.includes("natural language")) {
                featMeta = {
                  gradient: "from-violet-500/15 via-purple-500/20 to-violet-50/70",
                  icon: <MaterialIcon name="auto_awesome" size={32} weight={300} />,
                };
              } else if (text.includes("helpdesk") || text.includes("ticket") || text.includes("sla") || text.includes("support")) {
                featMeta = {
                  gradient: "from-blue-500/15 via-indigo-500/20 to-blue-50/70",
                  icon: <MaterialIcon name="support_agent" size={32} weight={300} />,
                };
              } else if (text.includes("notification") || text.includes("alert") || text.includes("broadcast")) {
                featMeta = {
                  gradient: "from-amber-500/15 via-orange-500/20 to-yellow-50/70",
                  icon: <MaterialIcon name="notifications_active" size={32} weight={300} />,
                };
              } else if (text.includes("analytics") || text.includes("report") || text.includes("mis") || text.includes("export")) {
                featMeta = {
                  gradient: "from-teal-500/15 via-cyan-500/20 to-teal-50/70",
                  icon: <MaterialIcon name="analytics" size={32} weight={300} />,
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
                          className={`relative w-14 h-14 rounded-2xl bg-gradient-to-tr ${featMeta.gradient} border border-[#087E8B]/20 flex items-center justify-center text-[#087E8B] shadow-2xs group-hover:scale-110 group-hover:rotate-2 group-hover:bg-gradient-to-tr group-hover:from-[#087E8B] group-hover:to-[#19B5A5] group-hover:text-white transition-all duration-300`}
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
                            <div className="w-5 h-5 rounded-full bg-[#EEF3F2] group-hover/pt:bg-[#087E8B] text-[#087E8B] group-hover/pt:text-white flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                              <MaterialIcon name="check" size={16} weight={300} />
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

      {/* 4. Business Benefits (Measurable ROI) — OffersHub-Inspired 3D Perspective Card Layout */}
      <section className="py-24 bg-gradient-to-b from-[#FBFDFD] via-white to-slate-50/60 border-y border-slate-200/80 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-gradient-to-r from-teal-100/25 via-sky-100/20 to-purple-100/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="ron-badge-lime mb-3">
              Measurable ROI
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0E151B] tracking-tight">
              Real Impact for HR &amp; Business Leaders
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-3 max-w-2xl mx-auto leading-relaxed">
              Real quantified outcomes across workforce attendance, operational payroll time, and statutory dispute elimination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {businessBenefits.map((benefit, bIdx) => {
              const text = (benefit.title + " " + benefit.description + " " + (benefit.metric || "")).toLowerCase();

              // Content-Aware Material Icon Selection
              let roiIcon = <MaterialIcon name="verified_user" size={32} weight={300} className="text-white drop-shadow-md" />;
              let themeColor: "cyan" | "blue" | "emerald" | "purple" = bIdx % 3 === 0 ? "cyan" : bIdx % 3 === 1 ? "blue" : "emerald";

              if (text.includes("buddy") || text.includes("punch") || text.includes("biometric") || text.includes("turnstile")) {
                roiIcon = <MaterialIcon name="fingerprint" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "cyan";
              } else if (text.includes("roster") || text.includes("shift") || text.includes("calendar") || text.includes("absenteeism")) {
                roiIcon = <MaterialIcon name="calendar_month" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "blue";
              } else if (text.includes("dispute") || text.includes("loss of pay") || text.includes("lop") || text.includes("penalt") || text.includes("statutory")) {
                roiIcon = <MaterialIcon name="gavel" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "emerald";
              } else if (text.includes("faster") || text.includes("speed") || text.includes("instant") || text.includes("turnaround")) {
                roiIcon = <MaterialIcon name="bolt" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "cyan";
              } else if (text.includes("satisfaction") || text.includes("morale") || text.includes("attrition")) {
                roiIcon = <MaterialIcon name="sentiment_satisfied" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "blue";
              } else if (text.includes("smartphone") || text.includes("mobile") || text.includes("phone")) {
                roiIcon = <MaterialIcon name="smartphone" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "cyan";
              } else if (text.includes("paperless") || text.includes("cloud") || text.includes("vault")) {
                roiIcon = <MaterialIcon name="cloud_done" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "cyan";
              } else if (text.includes("star") || text.includes("rating")) {
                roiIcon = <MaterialIcon name="star" size={32} weight={300} fill className="text-white drop-shadow-md" />;
                themeColor = "blue";
              } else if (text.includes("billab") || text.includes("margin") || text.includes("timesheet")) {
                roiIcon = <MaterialIcon name="trending_up" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "blue";
              } else if (text.includes("hire") || text.includes("candidate") || text.includes("recruit")) {
                roiIcon = <MaterialIcon name="person_search" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "purple";
              } else if (text.includes("appraisal") || text.includes("okr") || text.includes("goal")) {
                roiIcon = <MaterialIcon name="track_changes" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "purple";
              } else if (text.includes("expense") || text.includes("receipt") || text.includes("claim")) {
                roiIcon = <MaterialIcon name="receipt_long" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "emerald";
              } else if (text.includes("leakage") || text.includes("risk") || text.includes("fraud") || text.includes("audit") || text.includes("encrypt")) {
                roiIcon = <MaterialIcon name="lock" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "emerald";
              } else if (text.includes("asset") || text.includes("hardware") || text.includes("laptop")) {
                roiIcon = <MaterialIcon name="laptop_mac" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "blue";
              } else if (text.includes("ai") || text.includes("insight")) {
                roiIcon = <MaterialIcon name="auto_awesome" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "purple";
              } else if (text.includes("encashment") || text.includes("saving") || text.includes("cost") || text.includes("money")) {
                roiIcon = <MaterialIcon name="payments" size={32} weight={300} className="text-white drop-shadow-md" />;
                themeColor = "emerald";
              }

              // OffersHub-Style 3D Visual Rendering
              const render3DROIVisual = () => {
                if (themeColor === "cyan") {
                  return (
                    <div className="relative w-full h-[185px] flex items-center justify-center overflow-hidden">
                      {/* Perspective floor grid receding into distance */}
                      <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 300 180" fill="none">
                        <defs>
                          <linearGradient id={`roi-grid-${bIdx}`} x1="0" y1="180" x2="0" y2="30" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#087E8B" stopOpacity="0.4" />
                            <stop offset="0.7" stopColor="#38BDF8" stopOpacity="0.15" />
                            <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <line x1="10" y1="170" x2="290" y2="170" stroke={`url(#roi-grid-${bIdx})`} strokeWidth="1" />
                        <line x1="30" y1="150" x2="270" y2="150" stroke={`url(#roi-grid-${bIdx})`} strokeWidth="1" />
                        <line x1="55" y1="130" x2="245" y2="130" stroke={`url(#roi-grid-${bIdx})`} strokeWidth="1" />
                        <line x1="80" y1="110" x2="220" y2="110" stroke={`url(#roi-grid-${bIdx})`} strokeWidth="1" />
                        <line x1="10" y1="170" x2="150" y2="70" stroke={`url(#roi-grid-${bIdx})`} strokeWidth="1" />
                        <line x1="60" y1="170" x2="150" y2="70" stroke={`url(#roi-grid-${bIdx})`} strokeWidth="1" />
                        <line x1="110" y1="170" x2="150" y2="70" stroke={`url(#roi-grid-${bIdx})`} strokeWidth="1" />
                        <line x1="150" y1="170" x2="150" y2="70" stroke={`url(#roi-grid-${bIdx})`} strokeWidth="1" />
                        <line x1="190" y1="170" x2="150" y2="70" stroke={`url(#roi-grid-${bIdx})`} strokeWidth="1" />
                        <line x1="240" y1="170" x2="150" y2="70" stroke={`url(#roi-grid-${bIdx})`} strokeWidth="1" />
                        <line x1="290" y1="170" x2="150" y2="70" stroke={`url(#roi-grid-${bIdx})`} strokeWidth="1" />
                      </svg>

                      {/* Vertical light rays with glowing heads */}
                      <div className="absolute inset-0 flex items-center justify-around px-8 pointer-events-none">
                        <div className="w-[1.5px] h-12 bg-gradient-to-t from-transparent via-[#38BDF8]/40 to-[#38BDF8] relative -translate-y-2">
                          <div className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
                        </div>
                        <div className="w-[1.5px] h-16 bg-gradient-to-t from-transparent via-[#087E8B]/40 to-[#087E8B] relative -translate-y-4">
                          <div className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#087E8B] shadow-[0_0_8px_#087E8B]" />
                        </div>
                        <div className="w-16" />
                        <div className="w-[1.5px] h-16 bg-gradient-to-t from-transparent via-[#087E8B]/40 to-[#087E8B] relative -translate-y-4">
                          <div className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#087E8B] shadow-[0_0_8px_#087E8B]" />
                        </div>
                      </div>

                      {/* 3D Cyan Disc with Material Icon */}
                      <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-[0_12px_32px_rgba(8,126,139,0.35)] group-hover:scale-110 transition-transform duration-300 border border-white/80"
                        style={{
                          background: "radial-gradient(circle at 35% 28%, #A5F3FC 0%, #087E8B 55%, #0E151B 100%)",
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.15)_40%,transparent_70%)] pointer-events-none" />
                        <div className="relative z-10 text-white">
                          {roiIcon}
                        </div>
                      </div>
                    </div>
                  );
                }

                if (themeColor === "blue") {
                  return (
                    <div className="relative w-full h-[185px] flex items-center justify-center overflow-hidden">
                      {/* Concentric ripple pulse rings */}
                      <div className="absolute w-44 h-44 rounded-full border border-sky-300/40 pointer-events-none" />
                      <div className="absolute w-32 h-32 rounded-full border border-blue-400/50 pointer-events-none" />
                      <div className="absolute w-24 h-24 rounded-full border border-blue-500/40 pointer-events-none" />

                      {/* Ambient blue glow */}
                      <div className="absolute w-28 h-28 rounded-full bg-blue-500/20 blur-xl pointer-events-none" />

                      {/* 3D Cobalt Sphere with Material Icon */}
                      <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-[0_12px_32px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-300 border border-white/80"
                        style={{
                          background: "radial-gradient(circle at 35% 28%, #BFDBFE 0%, #3B82F6 45%, #1D4ED8 85%, #1E3A8A 100%)",
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.15)_40%,transparent_70%)] pointer-events-none" />
                        <div className="relative z-10 text-white">
                          {roiIcon}
                        </div>
                      </div>
                    </div>
                  );
                }

                if (themeColor === "purple") {
                  return (
                    <div className="relative w-full h-[185px] flex items-center justify-center overflow-hidden">
                      {/* Isometric grid floor */}
                      <svg className="absolute inset-0 w-full h-full opacity-45" viewBox="0 0 300 180" fill="none">
                        <path d="M0 130 L150 180 L300 130 M0 90 L150 140 L300 90 M0 50 L150 100 L300 50" stroke="#DDD6FE" strokeWidth="1" strokeDasharray="2 3" />
                      </svg>

                      {/* Ambient violet glow */}
                      <div className="absolute w-28 h-28 rounded-full bg-[#8B5CF6]/20 blur-xl pointer-events-none" />

                      {/* 3D Stacked Glass Isometric Tiles */}
                      <div className="relative z-10 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <div className="w-20 h-10 rounded-2xl bg-purple-400/30 border border-purple-300/40 shadow-sm transform -rotate-[22deg] skew-x-[18deg] translate-y-2.5" />
                        <div
                          className="w-20 h-10 rounded-2xl border border-white/80 shadow-[0_10px_25px_rgba(124,58,237,0.35)] backdrop-blur-md transform -rotate-[22deg] skew-x-[18deg] flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, #A855F7 0%, #7C3AED 50%, #4F46E5 100%)",
                          }}
                        >
                          <div className="transform rotate-[22deg] skew-x-[-18deg] text-white">
                            {roiIcon}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Default / Emerald: 3D Isometric Glass Platform with Digital Stream
                return (
                  <div className="relative w-full h-[185px] flex items-center justify-center overflow-hidden">
                    {/* Matrix binary stream backdrop */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-[0.22] text-[8px] font-mono text-emerald-600 leading-tight select-none pointer-events-none">
                      <span>01010011 01101000 01100101 01101110 01101100 01101100</span>
                      <span>01001000 01010010 01001101 01010011 00100000 01000001</span>
                      <span>01001001 00100000 01000011 01101111 01110000 01101001</span>
                    </div>

                    {/* Ambient glow */}
                    <div className="absolute w-28 h-28 rounded-full bg-[#10B981]/20 blur-xl pointer-events-none" />

                    {/* Floating 3D Emerald Glass Platform */}
                    <div className="relative z-10 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div
                        className="w-20 h-12 rounded-2xl border border-emerald-300/70 shadow-[0_12px_28px_rgba(16,185,129,0.3)] backdrop-blur-md transform -rotate-[20deg] skew-x-[16deg] flex items-center justify-center p-2"
                        style={{
                          background: "linear-gradient(135deg, rgba(52,211,153,0.85) 0%, rgba(16,185,129,0.9) 60%, rgba(5,150,105,0.95) 100%)",
                        }}
                      >
                        <div className="transform rotate-[20deg] skew-x-[-16deg] text-white">
                          {roiIcon}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              };

              return (
                <div
                  key={bIdx}
                  className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(8,126,139,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
                >
                  {/* Top Text Content Area */}
                  <div>
                    <h3 className="text-lg sm:text-[20px] font-bold text-[#0E151B] tracking-tight leading-snug mb-2 group-hover:text-[#087E8B] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Bottom 3D Perspective Visual Area with Floating Metric Pill */}
                  <div className="w-full mt-6 rounded-2xl bg-[#F8FAFC]/80 border border-slate-100/90 overflow-hidden relative">
                    {render3DROIVisual()}

                    {/* Floating Glass Metric Badge */}
                    {benefit.metric && (
                      <div className="absolute bottom-3 left-3 right-3 py-2 px-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs flex items-center justify-between z-20">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Measurable Impact
                        </span>
                        <span className="text-xs sm:text-sm font-black text-[#087E8B] bg-[#087E8B]/10 px-2.5 py-0.5 rounded-full border border-[#087E8B]/20">
                          {benefit.metric}
                        </span>
                      </div>
                    )}
                  </div>
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

              // 1. Determine Content-Based Step Icon using Google Material Symbols
              let stepIcon = <MaterialIcon name="bolt" size={32} weight={300} className="drop-shadow-md" />;

              if (fullText.includes("freeze") || fullText.includes("lock")) {
                // Freeze / Lock Attendance or Ledger
                stepIcon = <MaterialIcon name="lock" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("punch") || fullText.includes("attendance") || fullText.includes("biometric") || fullText.includes("check-in")) {
                // Biometric / Terminal / Fingerprint Punch
                stepIcon = <MaterialIcon name="fingerprint" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("geo") || fullText.includes("gps") || fullText.includes("location") || fullText.includes("radius")) {
                // GPS Geo-fence
                stepIcon = <MaterialIcon name="location_on" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("camera") || fullText.includes("ocr") || fullText.includes("receipt capture")) {
                // OCR Receipt Camera
                stepIcon = <MaterialIcon name="photo_camera" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("app download") || fullText.includes("mobile") || fullText.includes("smartphone")) {
                // Mobile App Device
                stepIcon = <MaterialIcon name="smartphone" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("pre-boarding") || fullText.includes("document") || fullText.includes("kyc") || fullText.includes("upload") || fullText.includes("vault")) {
                // Verified Document / KYC Profile
                stepIcon = <MaterialIcon name="badge" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("setup") || fullText.includes("rapid") || fullText.includes("48-hour")) {
                // Rapid Launch
                stepIcon = <MaterialIcon name="rocket_launch" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("requisition") || fullText.includes("job") || fullText.includes("sourcing") || fullText.includes("screening")) {
                // Sourcing & Screening
                stepIcon = <MaterialIcon name="person_search" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("interview") || fullText.includes("scorecard") || fullText.includes("panel")) {
                // Interview Panel
                stepIcon = <MaterialIcon name="video_call" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("offer") || fullText.includes("onboard")) {
                // Offer Letter & Onboarding
                stepIcon = <MaterialIcon name="mark_email_read" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("okr") || fullText.includes("goal") || fullText.includes("cascading")) {
                // OKR / Goal Target
                stepIcon = <MaterialIcon name="track_changes" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("1-on-1") || fullText.includes("check-in") || fullText.includes("conversation")) {
                // 1-on-1 Check-in
                stepIcon = <MaterialIcon name="forum" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("360") || fullText.includes("evaluation") || fullText.includes("rating")) {
                // 360 Review
                stepIcon = <MaterialIcon name="stars" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("calibration") || fullText.includes("normalization") || fullText.includes("revision")) {
                // Calibration / Bell Curve
                stepIcon = <MaterialIcon name="ssid_chart" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("computation") || fullText.includes("calculate") || fullText.includes("salary calculation")) {
                // Salary / Tax Computation
                stepIcon = <MaterialIcon name="calculate" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("validation") || fullText.includes("policy engine") || fullText.includes("verification")) {
                // Cloud / Policy Validation
                stepIcon = <MaterialIcon name="verified_user" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("muster") || fullText.includes("headcount") || fullText.includes("attendance register")) {
                // Muster Roll & Headcount
                stepIcon = <MaterialIcon name="view_timeline" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("ai") || fullText.includes("intelligence") || fullText.includes("pattern") || fullText.includes("smart") || fullText.includes("query") || fullText.includes("insight")) {
                // AI Intelligence Engine
                stepIcon = <MaterialIcon name="auto_awesome" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("asset") || fullText.includes("hardware") || fullText.includes("laptop")) {
                // IT Laptop / Hardware Asset
                stepIcon = <MaterialIcon name="laptop_mac" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("review") || fullText.includes("approval") || fullText.includes("sla") || fullText.includes("bank file")) {
                // Review & Verification
                stepIcon = <MaterialIcon name="fact_check" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("balance") || fullText.includes("request") || fullText.includes("leave submission")) {
                // Balance & Leave Request
                stepIcon = <MaterialIcon name="event_available" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("delegation") || fullText.includes("task")) {
                // Task Allocation
                stepIcon = <MaterialIcon name="task_alt" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("timesheet") || fullText.includes("time logging") || fullText.includes("roster") || fullText.includes("calendar")) {
                // Shift Calendar & Timesheet
                stepIcon = <MaterialIcon name="punch_clock" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("disburs") || fullText.includes("payslip") || fullText.includes("reimburse") || fullText.includes("delivery") || fullText.includes("payout") || fullText.includes("publish") || fullText.includes("salary")) {
                // Secure Payout & Encrypted Download
                stepIcon = <MaterialIcon name="payments" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("continuous") || fullText.includes("timeline") || fullText.includes("lifecycle") || fullText.includes("history")) {
                // Timeline History Tracking
                stepIcon = <MaterialIcon name="history" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("sync") || fullText.includes("ingestion")) {
                // Automated Sync / Ingestion
                stepIcon = <MaterialIcon name="sync" size={32} weight={300} className="drop-shadow-md" />;
              } else if (fullText.includes("report") || fullText.includes("board") || fullText.includes("margin") || fullText.includes("billing")) {
                // Reporting & Analytics
                stepIcon = <MaterialIcon name="analytics" size={32} weight={300} className="drop-shadow-md" />;
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
              <MaterialIcon name="arrow_forward" size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {relatedModules.map((rel, rIdx) => {
              const t = (rel.title + " " + rel.href).toLowerCase();

              // Content-Aware Integration Metadata & Modern Icons
              let meta = {
                tag: "Core Database Vault",
                syncType: "Unified Profile Sync",
                icon: <MaterialIcon name="groups" size={30} weight={300} />,
                gradient: "from-[#087E8B]/10 via-[#19B5A5]/15 to-teal-50/50",
              };

              if (t.includes("payroll")) {
                meta = {
                  tag: "Statutory & Banking",
                  syncType: "Direct Bank File Sync",
                  icon: <MaterialIcon name="payments" size={30} weight={300} />,
                  gradient: "from-emerald-500/10 via-teal-500/15 to-cyan-50/50",
                };
              } else if (t.includes("attendance")) {
                meta = {
                  tag: "Biometric Webhook",
                  syncType: "Live Biometric Punch",
                  icon: <MaterialIcon name="fingerprint" size={30} weight={300} />,
                  gradient: "from-teal-500/10 via-cyan-500/15 to-sky-50/50",
                };
              } else if (t.includes("leave")) {
                meta = {
                  tag: "Auto-Balance Sync",
                  syncType: "Payroll Auto-Freeze",
                  icon: <MaterialIcon name="calendar_month" size={30} weight={300} />,
                  gradient: "from-rose-500/10 via-pink-500/15 to-rose-50/50",
                };
              } else if (t.includes("mobile")) {
                meta = {
                  tag: "Geo-Fenced Clock-in",
                  syncType: "Native iOS / Android",
                  icon: <MaterialIcon name="smartphone" size={30} weight={300} />,
                  gradient: "from-indigo-500/10 via-sky-500/15 to-blue-50/50",
                };
              } else if (t.includes("recruitment")) {
                meta = {
                  tag: "AI Talent Pipeline",
                  syncType: "Instant KYC Onboarding",
                  icon: <MaterialIcon name="person_search" size={30} weight={300} />,
                  gradient: "from-purple-500/10 via-fuchsia-500/15 to-purple-50/50",
                };
              } else if (t.includes("performance")) {
                meta = {
                  tag: "OKR & Appraisal Engine",
                  syncType: "360° Review Sync",
                  icon: <MaterialIcon name="track_changes" size={30} weight={300} />,
                  gradient: "from-amber-500/10 via-orange-500/15 to-amber-50/50",
                };
              } else if (t.includes("project")) {
                meta = {
                  tag: "Timesheet & Margins",
                  syncType: "Cross-Punch Crosscheck",
                  icon: <MaterialIcon name="task_alt" size={30} weight={300} />,
                  gradient: "from-blue-500/10 via-cyan-500/15 to-sky-50/50",
                };
              } else if (t.includes("expense")) {
                meta = {
                  tag: "Receipt OCR Engine",
                  syncType: "1-Click Direct Reimburse",
                  icon: <MaterialIcon name="receipt_long" size={30} weight={300} />,
                  gradient: "from-emerald-500/10 via-teal-500/15 to-mint-50/50",
                };
              } else if (t.includes("ai")) {
                meta = {
                  tag: "Natural Language AI",
                  syncType: "Continuous Workload Sync",
                  icon: <MaterialIcon name="auto_awesome" size={30} weight={300} />,
                  gradient: "from-violet-500/10 via-purple-500/15 to-violet-50/50",
                };
              } else if (t.includes("resume")) {
                meta = {
                  tag: "Client Resumes",
                  syncType: "Direct Master Sync",
                  icon: <MaterialIcon name="contact_page" size={30} weight={300} />,
                  gradient: "from-cyan-500/10 via-[#087E8B]/15 to-sky-50/50",
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
                      <MaterialIcon name="north_east" size={16} className="transition-transform group-hover:rotate-45" />
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
