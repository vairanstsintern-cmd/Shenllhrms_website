import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";
import FAQAccordionSection from "@/components/FAQAccordionSection";
import { PRICING_PLANS } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Shenll HRMS Pricing — Transparent, Predictable Plans for Growing Teams",
  description:
    "Transparent Shenll HRMS pricing. Basic plan at ₹12,000/mo (up to 100 employees) and Professional plan at ₹24,999/mo (up to 250 employees). Pay only for active staff with zero hidden fees.",
  alternates: {
    canonical: "https://shenllhrms.com/pricing",
  },
  openGraph: {
    title: "Shenll HRMS Pricing — Transparent & Predictable | Shenll HRMS",
    description: "Basic ₹12,000/mo for 100 employees, Professional ₹24,999/mo for 250 employees. Additional employees ₹100/mo.",
    url: "https://shenllhrms.com/pricing",
  },
};

export default function PricingPage() {
  const comparisonMatrix = [
    { feature: "Active Employees Included", basic: "Up to 100", pro: "Up to 250", ent: "Unlimited Custom" },
    { feature: "Additional Employee Cost", basic: "₹100 / emp / mo", pro: "₹100 / emp / mo", ent: "Tiered Volume Discounts" },
    { feature: "Core Employee Directory & Vault", basic: true, pro: true, ent: true },
    { feature: "Biometric Hardware API Sync", basic: true, pro: true, ent: true },
    { feature: "Mobile App (iOS & Android)", basic: true, pro: true, ent: true },
    { feature: "Leave & Holiday Management", basic: true, pro: true, ent: true },
    { feature: "Statutory Payroll & Form 16", basic: true, pro: true, ent: true },
    { feature: "Payslip Generation", basic: "100 included / mo", pro: "250 included / mo", ent: "Unlimited" },
    { feature: "Project & Task Management", basic: false, pro: true, ent: true },
    { feature: "Billable Timesheets", basic: false, pro: true, ent: true },
    { feature: "Asset Management Vault", basic: false, pro: true, ent: true },
    { feature: "Travel & Expense Claims", basic: false, pro: true, ent: true },
    { feature: "Multi-Location & Branch Setup", basic: false, pro: true, ent: true },
    { feature: "Advanced Dashboards & Analytics", basic: false, pro: true, ent: true },
    { feature: "Dedicated Account Manager", basic: false, pro: true, ent: true },
    { feature: "Custom AI Agents & Workflows", basic: false, pro: false, ent: true },
    { feature: "SSO & Active Directory Integration", basic: false, pro: false, ent: true },
    { feature: "Custom SLA & 24/7 Dedicated Support", basic: false, pro: false, ent: true },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-ron-canvas">
      {/* 1. Pricing Hero */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 relative overflow-hidden">
        {/* Soft atmospheric gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none rounded-b-[48px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="ron-badge-lime">
            Transparent Commercials
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0E151B] mt-5 tracking-tight leading-[1.08]">
            Simple, Predictable Plans for Growing Organizations
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Pay only for active employees. Transparent pricing with no hidden setup fees, payslip charges, or surprise price hikes.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 font-semibold">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Assisted Data Migration
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verified Indian Statutory Compliance
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Web & Mobile Apps Included
            </span>
          </div>
        </div>
      </section>

      {/* 2. Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`ron-card p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlight
                    ? "border-2 border-[#0E151B] shadow-[0_25px_60px_-15px_rgba(14,21,27,0.18)] ring-4 ring-[#087E8B]/20 bg-white"
                    : "border-slate-200/90 bg-[#F8FAFA]"
                }`}
              >
                <div>
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                      <span className="ron-badge-lime shadow-sm">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-5">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {plan.name}
                    </span>
                    <div className="mt-3 flex items-baseline gap-1.5">
                      {plan.monthlyPrice ? (
                        <>
                          <span className="text-3xl sm:text-5xl font-black text-[#0E151B] tracking-tight">
                            ₹{plan.monthlyPrice.toLocaleString("en-IN")}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">/ month</span>
                        </>
                      ) : (
                        <span className="text-3xl sm:text-5xl font-black text-[#0E151B] tracking-tight">
                          Custom
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-bold text-emerald-700 mt-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {plan.employeeLimit}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6 text-xs text-slate-700">
                    <span className="font-bold text-[#0E151B]">Additional Employees:</span>{" "}
                    <span className="text-slate-500">{plan.additionalEmployeeCost}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Included Capabilities:
                    </p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="#contact-form"
                  className={`w-full py-4 px-6 rounded-full font-bold text-center text-sm transition-all duration-200 micro-btn-interactive ${
                    plan.highlight
                      ? "bg-[#0E151B] hover:bg-black text-[#19B5A5] shadow-md"
                      : "bg-[#EEF3F2] hover:bg-[#E2EAE8] text-[#0E151B]"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Feature Comparison Table */}
      <section className="py-20 bg-ron-canvas">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0E151B] text-[11px] font-bold uppercase tracking-wider border border-slate-200">
              Full Breakdown
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] mt-3 tracking-tight">
              Plan Feature Comparison Matrix
            </h2>
          </div>

          <div className="ron-card overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0E151B] text-white">
                    <th className="py-4 px-6 font-bold">Module / Feature</th>
                    <th className="py-4 px-4 font-bold text-center">Basic (₹12k/mo)</th>
                    <th className="py-4 px-4 font-bold text-center text-[#19B5A5]">Professional (₹25k/mo)</th>
                    <th className="py-4 px-4 font-bold text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F8FAFA] transition-colors">
                      <td className="py-3.5 px-6 font-medium text-[#0E151B]">{row.feature}</td>
                      <td className="py-3.5 px-4 text-center">
                        {typeof row.basic === "boolean" ? (
                          row.basic ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <span className="text-slate-300 font-bold">—</span>
                          )
                        ) : (
                          <span className="font-semibold text-xs text-slate-700">{row.basic}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center bg-[#9DF52A]/5">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <span className="text-slate-300 font-bold">—</span>
                          )
                        ) : (
                          <span className="font-bold text-xs text-[#0E151B]">{row.pro}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        {typeof row.ent === "boolean" ? (
                          row.ent ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <span className="text-slate-300 font-bold">—</span>
                          )
                        ) : (
                          <span className="font-semibold text-xs text-[#0E151B]">{row.ent}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pricing FAQs / Commercial Terms — Standardized Industry Q&A 2-Column Accordion Style */}
      <FAQAccordionSection
        badge="Commercial Terms"
        heading="Frequently asked questions"
        description="Everything you need to know about our active employee billing, onboarding commitments, plan upgrades, and transparent contracts."
        faqs={[
          {
            question: "What constitutes an 'active employee' for billing?",
            answer: "An active employee is any individual who is currently marked as active on your muster roll during that billing month and has access to attendance logging, self-service, or payslip generation. Exited or resigned employees stored in historical records are not billed.",
          },
          {
            question: "What happens if our headcount exceeds the plan limit during a month?",
            answer: "If your active headcount exceeds the included limit (e.g., 105 employees on the Basic Plan), additional employees are billed at ₹100 per employee per month with zero disruption to your account operations.",
          },
          {
            question: "Are there any one-time implementation or onboarding fees?",
            answer: "No. Standard cloud onboarding, employee master data import, and basic admin training are included at zero extra cost in our subscription plans.",
          },
          {
            question: "Can we switch between Basic, Professional, and Enterprise plans later?",
            answer: "Yes. You can upgrade or downgrade your plan at any billing renewal cycle as your team size and operational needs expand.",
          },
        ]}
      />

      {/* 5. Conversion Section */}
      <section id="contact-form" className="py-24 bg-[#0E151B] text-white relative overflow-hidden">
        {/* Subtle mesh background accent */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#9DF52A]/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="ron-badge-lime">
                Custom Commercial Quote
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Need a Custom Proposal for Your Exact Team Size?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tell us your active employee count and required HR modules. Our commercial specialist will share a transparent, itemized proposal within 2 hours.
              </p>
              <div className="pt-2 text-xs text-slate-300 space-y-2.5">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                  No locked-in long-term multi-year contracts
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                  Monthly or discounted annual billing options
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                  Direct billing helpline: +91-8122046761
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <DemoRequestForm heading="Request a Custom Pricing Quotation" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
