import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, Calculator, Award, ArrowRight, CheckCircle2, ShieldCheck, Download, ChevronRight } from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";

export const metadata: Metadata = {
  title: "HR Resources, Compliance Guides & Indian Payroll Tools — Shenll HRMS",
  description:
    "Free HR resources, Indian statutory compliance checklists (PF, ESI, PT, TDS), shift rosters, and workforce ROI calculators by Shenll HRMS.",
  alternates: {
    canonical: "https://shenllhrms.com/resources",
  },
  openGraph: {
    title: "HR Resources, Compliance Guides & Tools | Shenll HRMS",
    description: "Essential workforce playbooks, Indian labor law guides, and statutory checklists for modern HR professionals.",
    url: "https://shenllhrms.com/resources",
    siteName: "Shenll HRMS",
  },
};

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Statutory Compliance Handbook (India)",
      category: "Compliance Guide",
      description: "Comprehensive breakdown of Employee Provident Fund (EPF), ESI contribution limits, state-by-state Professional Tax (PT), and Gratuity formulas.",
      tags: ["PF & ESI", "Labor Law", "Tax Regimes"],
      id: "compliance",
      icon: ShieldCheck,
    },
    {
      title: "Biometric Attendance & Shift Rostering Best Practices",
      category: "Implementation Guide",
      description: "How modern factories and multi-shift companies eliminate buddy punching, handle rotational night shifts, and integrate turnstile hardware.",
      tags: ["Biometrics", "Shifts", "Factories Act"],
      id: "guides",
      icon: BookOpen,
    },
    {
      title: "HR Automation ROI Calculator & Template",
      category: "Business Tool",
      description: "Estimate monthly hours saved across payroll processing, leave reconciliation, and employee record administration for your specific company size.",
      tags: ["ROI Calculator", "Cost Optimization"],
      id: "roi-calculator",
      icon: Calculator,
    },
    {
      title: "Modern OKR vs Traditional KPI Playbook",
      category: "Performance Guide",
      description: "Step-by-step framework for setting quarterly engineering, sales, and operations OKRs with continuous 360-degree feedback reviews.",
      tags: ["OKRs", "Appraisals", "360 Reviews"],
      id: "performance",
      icon: Award,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-ron-canvas">
      {/* 1. Resources Hero */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 relative overflow-hidden">
        {/* Soft atmospheric gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none rounded-b-[48px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="ron-badge-lime">
            Knowledge Hub &amp; Compliance Guides
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0E151B] mt-5 tracking-tight leading-[1.08]">
            Workforce Knowledge, Compliance &amp; Best Practices
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Practical resources, statutory labor checklists, and operational playbooks curated by HR practitioners for modern enterprise leaders.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 justify-center">
            <Link
              href="#statutory-cheat-sheet"
              className="ron-pill-dark w-full sm:w-auto !py-3.5 !px-7 text-sm justify-center group"
            >
              <span>View Statutory Cheat Sheet</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="#demo-form"
              className="ron-pill-light w-full sm:w-auto !py-3.5 !px-6 text-sm justify-center bg-white border border-slate-200/80 shadow-xs"
            >
              <span>Consult an HR Specialist</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#087E8B]">
              CURATED GUIDES &amp; PLAYBOOKS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] mt-2 tracking-tight">
              Essential Tools for Modern HR Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((res, idx) => {
              const IconComp = res.icon;
              return (
                <div
                  key={idx}
                  id={res.id}
                  className="ron-card p-8 sm:p-10 flex flex-col justify-between group hover:border-[#087E8B]/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="ron-badge-lime text-[11px]">
                        {res.category}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-[#EEF3F2] text-[#087E8B] flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#0E151B] mb-2.5 group-hover:text-[#087E8B] transition-colors">
                      {res.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {res.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {res.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-semibold bg-[#F4F7FA] text-slate-700 px-3 py-1 rounded-lg border border-slate-200/70">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="#demo-form"
                    className="ron-pill-light w-full sm:w-auto text-xs justify-between group-hover:bg-[#0E151B] group-hover:text-white transition-all"
                  >
                    <span>Request Full Resource Pack / Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Statutory Quick Reference Table */}
      <section id="statutory-cheat-sheet" className="py-24 bg-ron-canvas border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="ron-badge-lime">
              <ShieldCheck className="w-3.5 h-3.5 text-[#087E8B]" />
              Quick Reference
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E151B] mt-3 tracking-tight">
              Indian Payroll Statutory Cheat Sheet
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
              Mandatory wage ceilings, employer contributions, and tax deduction thresholds enforced under Indian labor laws.
            </p>
          </div>

          <div className="ron-card overflow-hidden bg-white shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0E151B] text-white">
                  <tr>
                    <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider">Component</th>
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-wider">Employee Share</th>
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-wider">Employer Share</th>
                    <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider">Wage Ceiling / Statutory Rules</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0E151B]">Provident Fund (EPF)</td>
                    <td className="py-4 px-4 font-semibold text-[#087E8B]">12% of Basic + DA</td>
                    <td className="py-4 px-4">12% (3.67% EPF + 8.33% EPS)</td>
                    <td className="py-4 px-6 text-slate-600">Mandatory for Basic ≤ ₹15,000/mo; optional on higher amounts.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0E151B]">Employee State Insurance (ESI)</td>
                    <td className="py-4 px-4 font-semibold text-[#087E8B]">0.75% of Gross</td>
                    <td className="py-4 px-4">3.25% of Gross</td>
                    <td className="py-4 px-6 text-slate-600">Mandatory for employees with Gross Wage ≤ ₹21,000/mo.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0E151B]">Professional Tax (PT)</td>
                    <td className="py-4 px-4 font-semibold text-[#087E8B]">State Slab (₹200–₹208/mo)</td>
                    <td className="py-4 px-4">Nil</td>
                    <td className="py-4 px-6 text-slate-600">Varies state-wise (Tamil Nadu, Karnataka, Maharashtra, etc.).</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0E151B]">Payment of Gratuity</td>
                    <td className="py-4 px-4">Nil</td>
                    <td className="py-4 px-4 font-semibold text-[#087E8B]">4.81% (accrual)</td>
                    <td className="py-4 px-6 text-slate-600">Payable after 5 years continuous service: (15 × Last Basic × Tenure) / 26.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0E151B]">TDS (Income Tax)</td>
                    <td className="py-4 px-4 font-semibold text-[#087E8B]">Per Selected Regime</td>
                    <td className="py-4 px-4">Nil</td>
                    <td className="py-4 px-6 text-slate-600">Calculated under Section 192 based on employee declarations (Old vs New Regime).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Conversion Demo Request Section */}
      <section id="demo-form" className="py-24 bg-[#0E151B] text-white relative overflow-hidden">
        {/* Subtle mesh background accent */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#087E8B]/15 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="ron-badge-lime">
                Consult With Our HR Specialists
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Have Specific Compliance or Workflow Questions?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our HR technology consultants can audit your current shift schedules and payroll calculations to demonstrate how Shenll HRMS automates operations with zero compliance errors.
              </p>
              <div className="pt-2 text-xs text-slate-300 space-y-2.5">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B]" />
                  Complimentary payroll &amp; statutory compliance audit
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B]" />
                  Biometric turnstile hardware compatibility test
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B]" />
                  Direct phone assistance: +91-8122046761
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <DemoRequestForm defaultModule="Compliance & HRMS Consultation" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
