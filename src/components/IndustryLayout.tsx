import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";

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
                <span className="w-2 h-2 rounded-full bg-[#0E151B]" />
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
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9DF52A]" />
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

      {/* 2. Industry Specific Workforce Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF3F2] text-[#0E151B] text-[11px] font-bold uppercase tracking-wider">
              Industry Realities
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] mt-3 tracking-tight">
              Workforce Pain Points in {industryName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryChallenges.map((item, idx) => (
              <div
                key={idx}
                className="ron-card p-7 flex flex-col justify-between group hover:border-[#9DF52A] transition-all duration-300"
              >
                <div>
                  <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                    Operational Friction
                  </span>
                  <h3 className="font-bold text-lg text-[#0E151B] mt-3 mb-1.5 leading-snug">
                    {item.challenge}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                    {item.impact}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 bg-slate-50/60 -mx-7 -mb-7 p-6 rounded-b-[26px]">
                  <p className="text-[11px] font-bold text-[#0E151B] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9DF52A]" />
                    Shenll Solution:
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.shenllSolution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tailored Capabilities */}
      <section className="py-20 bg-ron-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0E151B] text-[11px] font-bold uppercase tracking-wider border border-slate-200">
              Tailored Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] mt-3 tracking-tight">
              How Shenll HRMS Supports {industryName} Workflows
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tailoredSolutions.map((sol, sIdx) => (
              <div
                key={sIdx}
                className="ron-card p-8 sm:p-10 flex flex-col justify-between group hover:border-slate-300 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#EEF3F2] flex items-center justify-center text-[#0E151B] font-black text-xs mb-4">
                    0{sIdx + 1}
                  </div>
                  <h3 className="text-xl font-black text-[#0E151B] mb-2 tracking-tight">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                    {sol.description}
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {sol.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Statutory & Sector Compliance */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="ron-badge-lime">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0E151B]" />
            Statutory Safeguards
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] tracking-tight">
            100% Compliant with {industryName} Regulations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-6">
            {complianceHighlights.map((comp, cIdx) => (
              <div
                key={cIdx}
                className="ron-card p-5 flex items-start gap-3.5 text-xs sm:text-sm text-slate-700"
              >
                <div className="w-7 h-7 rounded-xl bg-[#9DF52A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#0E151B]" />
                </div>
                <span className="leading-relaxed font-medium">{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industry FAQs */}
      <section className="py-20 bg-ron-canvas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0E151B] text-[11px] font-bold uppercase tracking-wider border border-slate-200">
              Industry Q&A
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] mt-3 tracking-tight">
              Frequently Asked Questions for {industryName}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="ron-card p-6 sm:p-7"
              >
                <h3 className="font-bold text-sm sm:text-base text-[#0E151B]">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DF52A]" />
                  Biometric hardware integration verification
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DF52A]" />
                  Fast migration of employee and wage registers
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DF52A]" />
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
