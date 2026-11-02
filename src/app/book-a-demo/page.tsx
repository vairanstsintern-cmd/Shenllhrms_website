import type { Metadata } from "next";
import DemoRequestForm from "@/components/DemoRequestForm";
import { Check, ShieldCheck, Clock, Users, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Demo — Interactive 1-on-1 Walkthrough | Shenll HRMS",
  description:
    "Schedule a personalized 30-minute demo of Shenll HRMS. Experience automated Indian statutory payroll, biometric attendance sync, and workforce AI agents with a specialist.",
  alternates: { canonical: "https://shenllhrms.com/book-a-demo" },
};

export default function BookADemoPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-24 bg-[#F4F7FA] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-[#087E8B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-[#19B5A5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="nextsaas-badge mb-3">
            <span>Tailored 1-on-1 Walkthrough</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#123B50] tracking-tight leading-tight">
            See Shenll HRMS in Action with a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087E8B] to-[#19B5A5]">
              Product Specialist
            </span>
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Experience how our modular platform simplifies attendance, reconciles biometric punches, automates Indian statutory payroll, and powers employees with native apps.
          </p>
        </div>

        {/* 2-Column Layout: Left Value Props & What to Expect, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: What you'll get */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-slate-200/90 shadow-[0_15px_35px_-15px_rgba(14,21,27,0.06)] space-y-6">
              <h3 className="text-lg font-bold text-[#123B50] tracking-tight border-b border-slate-100 pb-3">
                What to Expect During the Demo
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: "30-Minute Tailored Walkthrough",
                    desc: "Focus on your company's exact shift rotas, salary structure heads, and employee headcount.",
                    icon: Clock,
                  },
                  {
                    title: "Live Hardware & Biometric Sync",
                    desc: "See how turnstiles (eSSL, Matrix, ZKTeco) and GPS geo-fenced mobile punches sync automatically.",
                    icon: Cpu,
                  },
                  {
                    title: "Statutory Payroll Automation",
                    desc: "Live demonstration of PF ECR, ESI, TDS calculations, and direct corporate bank payment files.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "48-Hour Rapid Data Migration",
                    desc: "We explain how we bulk-import your historical records and employee documents with zero downtime.",
                    icon: Users,
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#087E8B]/10 border border-[#087E8B]/20 text-[#087E8B] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#123B50]">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Helpline Glass Card */}
            <div className="rounded-[28px] p-6 bg-[#0E2836] border border-[#087E8B]/35 text-white shadow-xl flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#19B5A5]">Need Urgent Assistance?</span>
                <p className="text-sm font-bold text-white mt-0.5">Call our Chennai Implementation Desk</p>
                <a
                  href="tel:+918122046761"
                  className="text-lg font-black text-[#19B5A5] hover:text-white transition-colors block mt-1"
                >
                  +91-8122046761
                </a>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#087E8B]/30 border border-[#19B5A5]/40 flex items-center justify-center text-[#19B5A5] shrink-0">
                <Users className="w-6 h-6" />
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 italic leading-relaxed">
              &ldquo;The 30-minute walkthrough showed us exactly how biometric turnstile logs connect with our multi-tier overtime payroll. We went live within 48 hours without a hitch.&rdquo;
              <div className="mt-2 text-[11px] font-bold text-[#123B50] not-italic">
                — Operations Director, Chennai Manufacturing Unit
              </div>
            </div>

          </div>

          {/* Right Column: Demo Form Component */}
          <div className="lg:col-span-7">
            <DemoRequestForm
              heading="Book Your Personalized 1-on-1 Walkthrough"
              subheading="Fill out this quick form. Our solution specialist will confirm your session within 2 business hours."
            />
          </div>

        </div>

      </div>
    </div>
  );
}
