import type { Metadata } from "next";
import Link from "next/link";
import { Building, Users, ShieldCheck, Mail, Phone, MapPin, ArrowRight, Eye, Shield, Sparkles } from "lucide-react";
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
            {[
              {
                icon: Eye,
                iconColor: "text-emerald-500",
                iconBg: "bg-emerald-50/80 ring-8 ring-emerald-50/50",
                title: "Workforce Transparency",
                desc: "We believe employees should have instant, clear visibility into their work hours, approved leaves, and tax breakdowns right from their personal smartphone.",
              },
              {
                icon: Shield,
                iconColor: "text-amber-500",
                iconBg: "bg-amber-50/80 ring-8 ring-amber-50/50",
                title: "Zero-Error Payroll",
                desc: "Payroll is not just accounting—it is employee trust. We engineer every formula to guarantee 100% compliance with Indian PF, ESI, TDS, and state tax mandates.",
              },
              {
                icon: Sparkles,
                iconColor: "text-indigo-600",
                iconBg: "bg-indigo-50/80 ring-8 ring-indigo-50/50",
                title: "Purposeful AI Automation",
                desc: "We avoid vanity features. Our Adaptive Intelligence Engine focuses directly on helping HR leaders balance team workloads, predict attrition, and answer queries in natural language.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-100/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.06),0_2px_8px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_35px_-12px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Soft glowing icon circle inspired by reference image */}
                    <div className="mb-6">
                      <div
                        className={`w-13 h-13 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${item.iconBg}`}
                      >
                        <Icon className={`w-6 h-6 stroke-[1.8] ${item.iconColor}`} />
                      </div>
                    </div>

                    <h3 className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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
                  <div className="w-8 h-8 rounded-xl bg-[#087E8B]/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#087E8B]" />
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
                  <div className="w-8 h-8 rounded-xl bg-[#087E8B]/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#087E8B]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0E151B]">Phone & WhatsApp</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500">
                  <a href="tel:+918122046761" className="hover:text-[#087E8B] font-bold text-[#0E151B]">
                    +91-8122046761
                  </a>
                </p>
                <p className="text-xs text-slate-400">Monday – Saturday (9:00 AM – 7:00 PM IST)</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-[#0E151B]">
                  <div className="w-8 h-8 rounded-xl bg-[#087E8B]/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#087E8B]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0E151B]">Email Support</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500">
                  <a href="mailto:info@shenllhrms.com" className="hover:text-[#087E8B] font-bold text-[#0E151B]">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                  Dedicated technical account management
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
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
