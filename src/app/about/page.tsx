import type { Metadata } from "next";
import Link from "next/link";
import { Building, Users, ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";

export const metadata: Metadata = {
  title: "About Shenll HRMS — Modern Workforce Software by Shenll Technology Solutions",
  description:
    "Learn about Shenll Technology Solutions Pvt Ltd and our mission to simplify workforce operations and payroll through intelligent, AI-powered HR automation.",
  alternates: {
    canonical: "https://shenllhrms.com/about",
  },
  openGraph: {
    title: "About Shenll HRMS | Shenll Technology Solutions",
    description: "Enterprise HR and payroll automation engineered for modern organizations across India.",
    url: "https://shenllhrms.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-ron-canvas">
      {/* 1. About Hero */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 relative overflow-hidden">
        {/* Soft atmospheric gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none rounded-b-[48px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="ron-badge-lime">
            <span className="w-2 h-2 rounded-full bg-[#0E151B]" />
            Our Mission & Story
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0E151B] mt-5 tracking-tight leading-[1.08]">
            Building the Next-Generation Workforce Platform
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Engineered by Shenll Technology Solutions Pvt Ltd to eliminate administrative HR friction, ensure 100% statutory compliance, and empower modern teams with AI.
          </p>
        </div>
      </section>

      {/* 2. Core Values & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="ron-card p-8 sm:p-10 space-y-4 group hover:border-[#9DF52A] transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF3F2] text-[#0E151B] flex items-center justify-center font-black text-sm">
                01
              </div>
              <h3 className="text-xl font-black text-[#0E151B] tracking-tight">Workforce Transparency</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We believe employees should have instant, clear visibility into their work hours, approved leaves, and tax breakdowns right from their personal smartphone.
              </p>
            </div>

            <div className="ron-card p-8 sm:p-10 space-y-4 group hover:border-[#9DF52A] transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF3F2] text-[#0E151B] flex items-center justify-center font-black text-sm">
                02
              </div>
              <h3 className="text-xl font-black text-[#0E151B] tracking-tight">Zero-Error Payroll</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Payroll is not just accounting—it is employee trust. We engineer every formula to guarantee 100% compliance with Indian PF, ESI, TDS, and state tax mandates.
              </p>
            </div>

            <div className="ron-card p-8 sm:p-10 space-y-4 group hover:border-[#9DF52A] transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF3F2] text-[#0E151B] flex items-center justify-center font-black text-sm">
                03
              </div>
              <h3 className="text-xl font-black text-[#0E151B] tracking-tight">Purposeful AI Automation</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We avoid vanity features. Our Adaptive Intelligence Engine focuses directly on helping HR leaders balance team workloads, predict attrition, and answer queries in natural language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Verified Company Information */}
      <section className="py-20 bg-ron-canvas border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0E151B] text-[11px] font-bold uppercase tracking-wider border border-slate-200">
              Corporate Headquarters
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] mt-3 tracking-tight">
              Shenll Technology Solutions Pvt Ltd
            </h2>
          </div>

          <div className="ron-card p-8 sm:p-12 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-[#0E151B]">
                  <div className="w-8 h-8 rounded-xl bg-[#9DF52A]/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#0E151B]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0E151B]">Registered Office</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Plot No.1069, Munusamy Salai,<br />
                  K.K Nagar, Chennai – 600 078,<br />
                  Tamil Nadu, India.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-[#0E151B]">
                  <div className="w-8 h-8 rounded-xl bg-[#9DF52A]/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#0E151B]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0E151B]">Phone & WhatsApp</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500">
                  <a href="tel:+918122046761" className="hover:text-emerald-700 font-bold text-[#0E151B]">
                    +91-8122046761
                  </a>
                </p>
                <p className="text-xs text-slate-400">Monday – Saturday (9:00 AM – 7:00 PM IST)</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-[#0E151B]">
                  <div className="w-8 h-8 rounded-xl bg-[#9DF52A]/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#0E151B]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0E151B]">Email Support</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500">
                  <a href="mailto:info@shenllhrms.com" className="hover:text-emerald-700 font-bold text-[#0E151B]">
                    info@shenllhrms.com
                  </a>
                </p>
                <p className="text-xs text-slate-400">Enterprise sales and customer support inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Conversion CTA */}
      <section className="py-24 bg-[#0E151B] text-white relative overflow-hidden">
        {/* Subtle mesh background accent */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#9DF52A]/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="ron-badge-lime">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Partner with Shenll HRMS for Your Workforce Transformation
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our product leadership team to explore how Shenll HRMS can be customized to match your organizational structure.
              </p>
              <div className="pt-2 text-xs text-slate-300 space-y-2">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DF52A]" />
                  Dedicated technical account management
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DF52A]" />
                  Tailored SLA and migration assurance
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <DemoRequestForm heading="Connect with Shenll HRMS Leadership" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
