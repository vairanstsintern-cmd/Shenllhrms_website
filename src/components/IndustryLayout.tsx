import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Fingerprint,
  Truck,
  Warehouse,
  HardHat,
  Wrench,
  GraduationCap,
  Laptop,
  Timer,
  Calculator,
  Wallet,
  Receipt,
  Clock,
  Calendar,
  Users,
  Coins,
  AlertTriangle,
  Sparkles,
  Check,
  Scale,
  FileCheck,
  BadgeCheck,
} from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";
import FAQAccordionSection from "@/components/FAQAccordionSection";

interface IndustryLayoutProps {
  industryName: string;
  badge: string;
  h1: string;
  tagline: string;
  heroImage?: string;
  industryChallenges: {
    challenge: string;
    impact: string;
    shenllSolution: string;
  }[];
  tailoredSolutions: {
    title: string;
    description: string;
    features: string[];
  }[];
  complianceHighlights: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

function getChallengeIconMeta(challenge: string) {
  const t = challenge.toLowerCase();

  if (t.includes("buddy punching") || t.includes("biometric") || t.includes("fingerprint")) {
    return {
      gradient: "from-rose-500/10 via-amber-500/15 to-rose-50/60",
      border: "border-rose-200/70",
      textColor: "text-rose-700",
      hoverBg: "group-hover:from-rose-600 group-hover:to-amber-500",
      icon: <Fingerprint className="w-6 h-6" />,
    };
  }
  if (t.includes("driver") || t.includes("truck") || t.includes("haul")) {
    return {
      gradient: "from-blue-500/10 via-teal-500/15 to-blue-50/60",
      border: "border-blue-200/70",
      textColor: "text-blue-700",
      hoverBg: "group-hover:from-blue-600 group-hover:to-teal-500",
      icon: <Truck className="w-6 h-6" />,
    };
  }
  if (t.includes("warehouse") || t.includes("sorting hub")) {
    return {
      gradient: "from-indigo-500/10 via-purple-500/15 to-indigo-50/60",
      border: "border-indigo-200/70",
      textColor: "text-indigo-700",
      hoverBg: "group-hover:from-indigo-600 group-hover:to-purple-500",
      icon: <Warehouse className="w-6 h-6" />,
    };
  }
  if (t.includes("remote site") || t.includes("multi-site") || t.includes("site attendance") || t.includes("construction") || t.includes("site labor")) {
    return {
      gradient: "from-amber-500/10 via-orange-500/15 to-amber-50/60",
      border: "border-amber-200/70",
      textColor: "text-amber-800",
      hoverBg: "group-hover:from-amber-600 group-hover:to-orange-500",
      icon: <HardHat className="w-6 h-6" />,
    };
  }
  if (t.includes("skill tracking") || t.includes("engineering skill")) {
    return {
      gradient: "from-cyan-500/10 via-teal-500/15 to-cyan-50/60",
      border: "border-cyan-200/70",
      textColor: "text-cyan-800",
      hoverBg: "group-hover:from-cyan-600 group-hover:to-teal-500",
      icon: <Wrench className="w-6 h-6" />,
    };
  }
  if (t.includes("faculty") || t.includes("lecture") || t.includes("academic") || t.includes("student")) {
    return {
      gradient: "from-purple-500/10 via-pink-500/15 to-purple-50/60",
      border: "border-purple-200/70",
      textColor: "text-purple-700",
      hoverBg: "group-hover:from-purple-600 group-hover:to-pink-500",
      icon: <GraduationCap className="w-6 h-6" />,
    };
  }
  if (t.includes("laptop") || t.includes("remote attendance") || t.includes("hybrid")) {
    return {
      gradient: "from-sky-500/10 via-blue-500/15 to-sky-50/60",
      border: "border-sky-200/70",
      textColor: "text-sky-700",
      hoverBg: "group-hover:from-sky-600 group-hover:to-blue-500",
      icon: <Laptop className="w-6 h-6" />,
    };
  }
  if (t.includes("timesheet") || t.includes("billab") || t.includes("hours")) {
    return {
      gradient: "from-orange-500/10 via-rose-500/15 to-orange-50/60",
      border: "border-orange-200/70",
      textColor: "text-orange-700",
      hoverBg: "group-hover:from-orange-600 group-hover:to-rose-500",
      icon: <Timer className="w-6 h-6" />,
    };
  }
  if (t.includes("piece-rate") || t.includes("overtime") || t.includes("formula")) {
    return {
      gradient: "from-emerald-500/10 via-teal-500/15 to-emerald-50/60",
      border: "border-emerald-200/70",
      textColor: "text-emerald-700",
      hoverBg: "group-hover:from-emerald-600 group-hover:to-teal-500",
      icon: <Calculator className="w-6 h-6" />,
    };
  }
  if (t.includes("ghost worker") || t.includes("dispute")) {
    return {
      gradient: "from-rose-500/10 via-red-500/15 to-rose-50/60",
      border: "border-rose-200/70",
      textColor: "text-rose-700",
      hoverBg: "group-hover:from-rose-600 group-hover:to-red-500",
      icon: <AlertTriangle className="w-6 h-6" />,
    };
  }
  if (t.includes("payroll") || t.includes("deputation") || t.includes("allowance") || t.includes("cash wage") || t.includes("wage")) {
    return {
      gradient: "from-teal-500/10 via-emerald-500/15 to-teal-50/60",
      border: "border-teal-200/70",
      textColor: "text-[#087E8B]",
      hoverBg: "group-hover:from-[#087E8B] group-hover:to-[#19B5A5]",
      icon: <Wallet className="w-6 h-6" />,
    };
  }
  if (t.includes("expense") || t.includes("claim") || t.includes("trip bata")) {
    return {
      gradient: "from-amber-500/10 via-yellow-500/15 to-amber-50/60",
      border: "border-amber-200/70",
      textColor: "text-amber-700",
      hoverBg: "group-hover:from-amber-600 group-hover:to-yellow-500",
      icon: <Receipt className="w-6 h-6" />,
    };
  }
  if (t.includes("roster") || t.includes("shift") || t.includes("nursing") || t.includes("rotational")) {
    return {
      gradient: "from-blue-500/10 via-indigo-500/15 to-blue-50/60",
      border: "border-blue-200/70",
      textColor: "text-blue-700",
      hoverBg: "group-hover:from-blue-600 group-hover:to-indigo-500",
      icon: <Clock className="w-6 h-6" />,
    };
  }
  if (t.includes("vacation") || t.includes("leave")) {
    return {
      gradient: "from-cyan-500/10 via-blue-500/15 to-cyan-50/60",
      border: "border-cyan-200/70",
      textColor: "text-cyan-700",
      hoverBg: "group-hover:from-cyan-600 group-hover:to-blue-500",
      icon: <Calendar className="w-6 h-6" />,
    };
  }
  if (t.includes("churn") || t.includes("attrition") || t.includes("poaching") || t.includes("hostel")) {
    return {
      gradient: "from-rose-500/10 via-pink-500/15 to-rose-50/60",
      border: "border-rose-200/70",
      textColor: "text-rose-700",
      hoverBg: "group-hover:from-rose-600 group-hover:to-pink-500",
      icon: <Users className="w-6 h-6" />,
    };
  }
  if (t.includes("audit") || t.includes("compliance") || t.includes("bocw") || t.includes("nabh") || t.includes("accreditation")) {
    return {
      gradient: "from-teal-500/10 via-emerald-500/15 to-teal-50/60",
      border: "border-teal-200/70",
      textColor: "text-teal-700",
      hoverBg: "group-hover:from-teal-600 group-hover:to-emerald-500",
      icon: <ShieldCheck className="w-6 h-6" />,
    };
  }
  if (t.includes("margin") || t.includes("cost") || t.includes("visibility")) {
    return {
      gradient: "from-amber-500/10 via-emerald-500/15 to-amber-50/60",
      border: "border-amber-200/70",
      textColor: "text-amber-700",
      hoverBg: "group-hover:from-amber-600 group-hover:to-emerald-500",
      icon: <Coins className="w-6 h-6" />,
    };
  }

  // Fallback
  return {
    gradient: "from-rose-500/10 via-amber-500/15 to-rose-50/60",
    border: "border-rose-200/70",
    textColor: "text-rose-700",
    hoverBg: "group-hover:from-rose-600 group-hover:to-amber-500",
    icon: <AlertTriangle className="w-6 h-6" />,
  };
}

export default function IndustryLayout({
  industryName,
  badge,
  h1,
  tagline,
  heroImage,
  industryChallenges,
  tailoredSolutions,
  complianceHighlights,
  faqs,
}: IndustryLayoutProps) {
  const displayImage = heroImage || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="flex flex-col min-h-screen bg-ron-canvas">
      {/* 1. Industry Hero */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 relative overflow-hidden">
        {/* Soft atmospheric gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none rounded-b-[48px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="ron-badge-lime">
                {badge}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-[#0E151B] tracking-tight leading-[1.08]">
                {h1}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {tagline}
              </p>

              {/* Standardized Unified Button Pair */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                <Link
                  href="#demo-form"
                  className="ron-pill-dark w-full sm:w-auto !py-3.5 !px-7 text-sm justify-center group"
                >
                  <span>Request {industryName} Demo</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
                <Link
                  href="/pricing"
                  className="ron-pill-light w-full sm:w-auto !py-3.5 !px-6 text-sm justify-center bg-white border border-slate-200/80 shadow-xs"
                >
                  <span>View Transparent Pricing</span>
                </Link>
              </div>

              {/* Trust highlights checklist */}
              <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087E8B]" /> 100% Cloud-Based
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087E8B]" /> Mobile App & Biometrics
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087E8B]" /> Statutory Compliant
                </span>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5">
              <div className="ron-card p-3 sm:p-4 bg-white overflow-hidden shadow-[0_20px_50px_-15px_rgba(14,21,27,0.1)]">
                <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={displayImage}
                    alt={h1}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider mb-1 border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                      {industryName}
                    </span>
                    <p className="text-xs text-white/90 font-medium line-clamp-1">{badge}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Industry Specific Workforce Challenges (Industry Realities) */}
      <section className="py-24 bg-gradient-to-b from-[#F0F4F8]/70 via-white to-[#F8FAFC] relative overflow-hidden border-b border-slate-200/70">
        {/* Soft atmospheric ambient glow orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-r from-rose-200/20 via-teal-100/25 to-amber-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#087E8B]/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#19B5A5]/[0.05] rounded-full blur-3xl pointer-events-none" />

        {/* Subtle dot pattern grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#087E8B 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="ron-badge-lime mb-3">
              Industry Realities
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0E151B] tracking-tight leading-tight">
              Workforce Pain Points in <span className="text-[#087E8B]">{industryName}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-3 max-w-2xl mx-auto leading-relaxed">
              The structural operational bottlenecks that create friction in {industryName}, and how Shenll HRMS eliminates manual friction with automated, compliant workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {industryChallenges.map((item, idx) => {
              const iconMeta = getChallengeIconMeta(item.challenge);

              return (
                <div
                  key={idx}
                  className="rounded-[30px] sm:rounded-[32px] p-7 sm:p-8 bg-white border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_50px_-12px_rgba(8,126,139,0.16)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Subtle top-right ambient hover flare */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-rose-500/10 via-amber-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Corner micro dot pattern */}
                  <div
                    className="absolute top-0 right-0 w-28 h-28 opacity-[0.1] group-hover:opacity-[0.25] transition-opacity pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(#087E8B 0.8px, transparent 0.8px)",
                      backgroundSize: "10px 10px",
                    }}
                  />

                  {/* Top: Icon Badge & Status Tags */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      {/* Floating 3D Icon Badge */}
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-rose-500/20 to-amber-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div
                          className={`relative w-13 h-13 rounded-2xl bg-gradient-to-tr ${iconMeta.gradient} border ${iconMeta.border} flex items-center justify-center ${iconMeta.textColor} shadow-2xs group-hover:scale-110 group-hover:rotate-3 group-hover:bg-gradient-to-tr ${iconMeta.hoverBg} group-hover:text-white group-hover:border-transparent transition-all duration-300`}
                        >
                          {iconMeta.icon}
                        </div>
                      </div>

                      {/* Operational Friction indicator badge */}
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/70 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                        Friction
                      </span>
                    </div>

                    {/* Challenge Title & Impact */}
                    <h3 className="text-xl font-bold text-[#0E151B] group-hover:text-[#087E8B] transition-colors mb-2.5 tracking-tight leading-snug">
                      {item.challenge}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal mb-6">
                      {item.impact}
                    </p>
                  </div>

                  {/* Bottom: Shenll Resolution Container */}
                  <div className="pt-2 mt-auto">
                    <div className="rounded-2xl bg-gradient-to-br from-[#EEF3F2]/90 via-[#F8FAFC] to-white border border-[#087E8B]/20 p-4 sm:p-5 shadow-2xs group-hover:border-[#087E8B]/45 group-hover:shadow-xs transition-all duration-300 relative overflow-hidden">
                      {/* Top subtle highlight */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#087E8B]/30 to-transparent" />

                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-[#087E8B]/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#087E8B]" />
                          </div>
                          <span className="text-[11px] font-extrabold text-[#087E8B] uppercase tracking-wider">
                            Shenll Solution
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Resolved
                        </span>
                      </div>

                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {item.shenllSolution}
                      </p>
                    </div>
                  </div>

                  {/* Bottom hover accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#087E8B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Tailored Capabilities (Refined UI-Card Style from Design Specification) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Soft background radial accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#087E8B]/[0.03] via-transparent to-[#19B5A5]/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="ron-badge-lime mb-3">
              Tailored Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0E151B] tracking-tight">
              How Shenll HRMS Supports {industryName} Workflows
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-3 max-w-2xl mx-auto leading-relaxed">
              Purpose-built automation components designed specifically for the operational demands and compliance frameworks of {industryName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tailoredSolutions.map((sol, sIdx) => {
              // Procedural UI mockup illustrations based on index
              const visualVariants = [
                // Variant 0: Filter / Search Bar with Green pill button
                (
                  <div className="w-full h-full flex flex-col justify-center items-center px-4">
                    <div className="w-full max-w-[280px] bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-slate-100/90 p-2.5 flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400">
                        <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div className="h-2 w-10 bg-slate-200 rounded-full" />
                      <div className="h-3 w-px bg-slate-200 mx-0.5" />
                      <div className="h-2 w-12 bg-slate-200 rounded-full" />
                      <div className="h-3 w-px bg-slate-200 mx-0.5" />
                      <div className="h-2 w-8 bg-slate-200 rounded-full" />
                      <div className="ml-auto w-7 h-5 rounded-md bg-[#087E8B] flex items-center justify-center">
                        <div className="w-2.5 h-1 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                ),
                // Variant 1: Table row with inline dropdown menu / cursor
                (
                  <div className="w-full h-full flex flex-col justify-center items-center px-4">
                    <div className="w-full max-w-[280px] bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-slate-100/90 p-3 space-y-2 relative">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-slate-100 flex items-center justify-center text-[10px] text-slate-400 font-bold">+</div>
                        <div className="h-2 w-14 bg-slate-300 rounded-full" />
                        <div className="h-2 w-16 bg-slate-200 rounded-full" />
                        <div className="ml-auto flex gap-1">
                          <div className="w-3 h-1.5 bg-emerald-400 rounded-full" />
                          <div className="w-3 h-1.5 bg-emerald-400 rounded-full" />
                        </div>
                      </div>
                      <div className="h-px bg-slate-100 w-full" />
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-12 bg-slate-200 rounded-full" />
                        <div className="h-2 w-20 bg-slate-200 rounded-full" />
                        {/* Dropdown menu card */}
                        <div className="ml-auto bg-white rounded-lg shadow-lg border border-slate-100 p-1.5 space-y-1 w-20 -mb-6 relative z-10">
                          <div className="h-1.5 w-12 bg-slate-200 rounded-full" />
                          <div className="h-1.5 w-14 bg-[#087E8B] rounded-full" />
                          <div className="h-1.5 w-10 bg-slate-200 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                ),
                // Variant 2: Hierarchy Tree with toggle switches
                (
                  <div className="w-full h-full flex flex-col justify-center items-center px-4">
                    <div className="w-full max-w-[280px] flex items-center gap-3">
                      {/* Left root badge with Building vector icon */}
                      <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 shrink-0 shadow-xs">
                        <svg className="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                      </div>
                      <div className="w-3 h-px bg-slate-300 shrink-0" />
                      {/* Stacked list with toggles */}
                      <div className="space-y-1.5 flex-1">
                        {[
                          { active: false },
                          { active: true },
                          { active: true },
                          { active: false },
                        ].map((row, rIdx) => (
                          <div key={rIdx} className="bg-white rounded-lg border border-slate-100 px-2.5 py-1.5 flex items-center justify-between shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)]">
                            <div className="h-1.5 w-16 bg-slate-200 rounded-full" />
                            <div className={`w-6 h-3.5 rounded-full p-0.5 transition-colors ${row.active ? "bg-[#087E8B]" : "bg-slate-200"}`}>
                              <div className={`w-2.5 h-2.5 rounded-full bg-white shadow-xs transition-transform ${row.active ? "translate-x-2.5" : "translate-x-0"}`} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ),
                // Variant 3: Entity Card with badge and status bars
                (
                  <div className="w-full h-full flex flex-col justify-center items-center px-4">
                    <div className="w-full max-w-[280px] bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-slate-100/90 p-3.5 flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.333A12.062 12.062 0 0012 9.75c-2.551 0-4.956.79-6.942 2.148V21" />
                          </svg>
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border border-white flex items-center justify-center text-[8px] text-white font-bold">
                          ★
                        </div>
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2 w-28 bg-[#087E8B] rounded-full" />
                        <div className="flex gap-1.5">
                          <div className="h-2 w-12 bg-slate-300 rounded-full" />
                          <div className="h-2 w-14 bg-slate-200 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                ),
                // Variant 4: User Profile Card with form lines
                (
                  <div className="w-full h-full flex flex-col justify-center items-center px-4">
                    <div className="w-full max-w-[280px] bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-slate-100/90 p-3.5 space-y-2">
                      <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                        <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                          <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                        <div className="h-2 w-16 bg-slate-400 rounded-full" />
                      </div>
                      <div className="space-y-1.5 pt-0.5">
                        <div className="h-1.5 w-full bg-slate-200 rounded-full" />
                        <div className="h-1.5 w-3/4 bg-slate-200 rounded-full" />
                      </div>
                      <div className="flex justify-end gap-1.5 pt-1">
                        <div className="w-6 h-2 bg-slate-300 rounded-full" />
                        <div className="w-8 h-2 bg-[#087E8B] rounded-full" />
                      </div>
                    </div>
                  </div>
                ),
                // Variant 5: Settings Card with Toggle and Checklist
                (
                  <div className="w-full h-full flex flex-col justify-center items-center px-4">
                    <div className="w-full max-w-[280px] bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-slate-100/90 p-3 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-700">Auto Verification</span>
                        <div className="w-7 h-4 rounded-full bg-[#087E8B] p-0.5">
                          <div className="w-3 h-3 rounded-full bg-white shadow-xs translate-x-3" />
                        </div>
                      </div>
                      <div className="space-y-1.5 pt-1">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[8px] font-bold">
                              ✓
                            </div>
                            <div className="h-1.5 bg-slate-200 rounded-full flex-1" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ),
              ];

              const visual = visualVariants[sIdx % visualVariants.length];

              return (
                <div
                  key={sIdx}
                  className="bg-white rounded-[26px] border border-slate-200/80 shadow-[0_10px_30px_-10px_rgba(14,21,27,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(14,21,27,0.12)] hover:-translate-y-1.5 hover:border-[#087E8B]/40 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Top Graphic Area: Soft Gradient Canvas with Centered UI Widget */}
                  <div className="w-full h-44 bg-gradient-to-b from-[#F7FAF9] via-[#F1F5F4] to-white/60 relative flex items-center justify-center border-b border-slate-100/80 p-4">
                    {/* Subtle micro grid / dot pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.35] pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(#94A3B8 0.75px, transparent 0.75px)",
                        backgroundSize: "14px 14px",
                      }}
                    />
                    <div className="relative z-10 w-full flex justify-center">
                      {visual}
                    </div>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0E151B] tracking-tight group-hover:text-[#087E8B] transition-colors mb-2.5">
                        {sol.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-5">
                        {sol.description}
                      </p>

                      {/* Micro Checklist Points */}
                      {sol.features && sol.features.length > 0 && (
                        <ul className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
                          {sol.features.slice(0, 2).map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B] mt-1.5 shrink-0" />
                              <span className="line-clamp-2">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Statutory & Sector Compliance (Statutory Safeguards) */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAFC] via-[#EEF3F2]/40 to-white relative overflow-hidden border-y border-slate-200/80">
        {/* Soft atmospheric ambient glow orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-r from-teal-100/30 via-emerald-100/25 to-sky-100/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#087E8B]/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#19B5A5]/[0.05] rounded-full blur-3xl pointer-events-none" />

        {/* Subtle dot pattern grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#087E8B 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="ron-badge-lime mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#087E8B]" />
              Statutory Safeguards
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0E151B] tracking-tight leading-tight">
              100% Compliant with <span className="text-[#087E8B]">{industryName}</span> Regulations
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-3 max-w-2xl mx-auto leading-relaxed">
              Automated audit trails, statutory register generation, and state-specific labor law rules calibrated for {industryName} enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceHighlights.map((comp, cIdx) => {
              const lower = comp.toLowerCase();
              let icon = <ShieldCheck className="w-6 h-6" />;
              let gradient = "from-[#087E8B]/10 via-[#19B5A5]/15 to-emerald-50/50";
              let badgeText = "Statutory Law";

              if (lower.includes("act") || lower.includes("law") || lower.includes("court") || lower.includes("legal")) {
                icon = <Scale className="w-6 h-6" />;
                gradient = "from-amber-500/10 via-yellow-500/15 to-amber-50/50";
                badgeText = "Legal Mandate";
              } else if (lower.includes("audit") || lower.includes("wrap") || lower.includes("smeta") || lower.includes("bsci") || lower.includes("nabh") || lower.includes("naac")) {
                icon = <BadgeCheck className="w-6 h-6" />;
                gradient = "from-purple-500/10 via-indigo-500/15 to-purple-50/50";
                badgeText = "Audit Standard";
              } else if (lower.includes("register") || lower.includes("report") || lower.includes("form") || lower.includes("documentation") || lower.includes("calculation") || lower.includes("pf") || lower.includes("esi")) {
                icon = <FileCheck className="w-6 h-6" />;
                gradient = "from-teal-500/10 via-cyan-500/15 to-teal-50/50";
                badgeText = "Auto-Register";
              }

              return (
                <div
                  key={cIdx}
                  className="rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(8,126,139,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Subtle top-right ambient flare on hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#087E8B]/10 via-[#19B5A5]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Corner micro dot pattern */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 opacity-[0.08] group-hover:opacity-[0.2] transition-opacity pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(#087E8B 0.8px, transparent 0.8px)",
                      backgroundSize: "10px 10px",
                    }}
                  />

                  <div>
                    {/* Top Row: Floating 3D Icon Badge & Status Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-2xl bg-[#087E8B]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div
                          className={`relative w-12 h-12 rounded-2xl bg-gradient-to-tr ${gradient} border border-[#087E8B]/25 flex items-center justify-center text-[#087E8B] shadow-2xs group-hover:scale-110 group-hover:rotate-2 group-hover:bg-gradient-to-tr group-hover:from-[#087E8B] group-hover:to-[#19B5A5] group-hover:text-white transition-all duration-300`}
                        >
                          {icon}
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/70 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {badgeText}
                      </span>
                    </div>

                    {/* Headline and Description */}
                    <h3 className="text-base sm:text-lg font-bold text-[#0E151B] group-hover:text-[#087E8B] transition-colors leading-snug mb-2">
                      {comp}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                      Full digital traceability with automated register generation, timestamped log archives, and audit-ready data exports for labor inspections.
                    </p>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-medium text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#087E8B]" />
                      100% Audit Guaranteed
                    </span>
                    <span className="text-[11px] font-semibold text-[#087E8B] uppercase tracking-wider">
                      Auto-Updated
                    </span>
                  </div>

                  {/* Bottom hover accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#087E8B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          {/* Bottom Statutory Assurance Guarantee Banner */}
          <div className="mt-10 rounded-[24px] sm:rounded-[28px] bg-gradient-to-r from-[#0E151B] to-[#123B50] p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-[#19B5A5]/20 to-transparent pointer-events-none" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 text-[#19B5A5]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-white">
                  Zero Non-Compliance Penalty Shield
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                  Shenll HRMS automatically updates state-wise labor codes, minimum wage notifications, and PF/ESI filing formats so your business is always inspection-ready.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 relative z-10 w-full md:w-auto justify-end">
              <Link
                href="#demo-form"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#19B5A5] text-[#0E151B] text-xs font-bold hover:bg-white transition-all shadow-sm"
              >
                <span>Request Compliance Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industry FAQs — Modern Clean 2-Column Accordion Layout */}
      <FAQAccordionSection
        badge="Industry Q&A"
        heading="Frequently asked questions"
        description={`To help you make informed decisions for your organization, we've compiled verified answers to the most commonly asked questions about ${industryName}.`}
        faqs={faqs}
      />

      {/* 6. Lead Capture */}
      <section id="demo-form" className="py-24 bg-[#0E151B] text-white relative overflow-hidden">
        {/* Subtle mesh background accent */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#9DF52A]/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="ron-badge-lime">
                {industryName} Specialist Walkthrough
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Ready to Modernize HR in Your {industryName} Organization?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our vertical specialists to see a live demonstration configured for your exact shift rotations, factory locations, or project rosters.
              </p>
              <div className="pt-2 text-xs text-slate-300 space-y-2.5">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                  Biometric hardware integration verification
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                  Fast migration of employee and wage registers
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                  Phone assistance: +91-8122046761
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <DemoRequestForm defaultModule={`${industryName} Solution`} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
