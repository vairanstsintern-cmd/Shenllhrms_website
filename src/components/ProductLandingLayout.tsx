import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";

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
      <section className="pt-24 pb-16 lg:pt-28 lg:pb-24 bg-ron-canvas border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="ron-pill-dark w-full sm:w-auto !py-3.5 !px-7 text-sm"
                >
                  <span>Request a Free Demo</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
                <Link
                  href="/pricing"
                  className="ron-pill-light w-full sm:w-auto !py-3.5 !px-6 text-sm bg-white border border-slate-200/80 shadow-xs"
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E151B]" />
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

      {/* 3. Key Feature Cards Grid */}
      <section className="py-20 bg-ron-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0E151B] text-[11px] font-bold uppercase tracking-wider border border-slate-200">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] mt-3 tracking-tight">
              Deep, Purpose-Built Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="ron-card p-7 sm:p-8 flex flex-col justify-between group hover:border-[#087E8B]/40 transition-all duration-300"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-[#087E8B]/10 text-[#087E8B] flex items-center justify-center font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#0E151B] mb-2 leading-snug group-hover:text-[#087E8B] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                    {feat.description}
                  </p>
                  {feat.bulletPoints && (
                    <ul className="space-y-2 text-xs text-slate-700">
                      {feat.bulletPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#087E8B] flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Business Benefits */}
      <section className="py-20 bg-white border-y border-slate-200/80">
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
            {businessBenefits.map((benefit, bIdx) => (
              <div
                key={bIdx}
                className="ron-card p-8 bg-white flex flex-col justify-between group hover:border-[#087E8B]/40 transition-all duration-300"
              >
                <div>
                  {benefit.metric && (
                    <span className="text-3xl sm:text-4xl font-black text-[#087E8B] block mb-2 tracking-tight">
                      {benefit.metric}
                    </span>
                  )}
                  <h3 className="font-bold text-base sm:text-lg text-[#0E151B] mb-2 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Workflow Explanation */}
      <section className="py-20 bg-ron-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0E151B] text-[11px] font-bold uppercase tracking-wider border border-slate-200">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] mt-3 tracking-tight">
              Standard Operating Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workflowSteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="ron-card p-7 bg-white flex flex-col justify-between group hover:border-slate-300 transition-all duration-300"
              >
                <div>
                  <span className="text-2xl font-black text-[#087E8B] font-mono">
                    {step.step}
                  </span>
                  <h4 className="font-bold text-base text-[#0E151B] mt-3 mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs Section */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="ron-badge-lime">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E151B]" />
              Module FAQs
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] mt-3 tracking-tight">
              Frequently Asked Questions
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

      {/* 7. Related Modules Internal Linking */}
      <section className="py-20 bg-ron-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#087E8B]">
                INTEGRATED SUITE
              </span>
              <h3 className="font-black text-xl text-[#0E151B] mt-1 tracking-tight">
                Related Shenll HRMS Modules
              </h3>
            </div>
            <Link
              href="/hrms-software"
              className="ron-pill-light text-xs inline-flex items-center gap-1.5"
            >
              <span>All Modules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedModules.map((rel, rIdx) => (
              <Link
                key={rIdx}
                href={rel.href}
                className="ron-card p-6 bg-white hover:border-[#087E8B]/40 transition-all group block"
              >
                <h4 className="font-bold text-base text-[#0E151B] group-hover:text-[#087E8B] transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                  {rel.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#087E8B]">
                  <span>Explore module</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Conversion Demo Request Section */}
      <section id="demo-form" className="py-24 bg-[#0E151B] text-white relative overflow-hidden">
        {/* Subtle mesh background accent */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#9DF52A]/10 blur-3xl pointer-events-none" />
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DF52A]" />
                  100% data migration assistance included
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DF52A]" />
                  Dedicated technical onboarding specialist
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DF52A]" />
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
