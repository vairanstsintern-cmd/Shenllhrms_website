import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, Calculator, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";

export const metadata: Metadata = {
  title: "HR Resources, Compliance Guides & Tools — Shenll HRMS",
  description:
    "Free HR resources, Indian statutory compliance checklists, labor law guides, and workforce calculators by Shenll HRMS.",
  alternates: {
    canonical: "https://shenllhrms.com/resources",
  },
  openGraph: {
    title: "HR Resources, Guides & Compliance Tools | Shenll HRMS",
    description: "Essential knowledge base, compliance guides, and workforce tools for modern HR professionals.",
    url: "https://shenllhrms.com/resources",
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
    },
    {
      title: "Biometric Attendance & Shift Rostering Best Practices",
      category: "Implementation Guide",
      description: "How modern factories and multi-shift companies eliminate buddy punching, handle rotational night shifts, and integrate turnstile hardware.",
      tags: ["Biometrics", "Shifts", "Factories Act"],
      id: "guides",
    },
    {
      title: "HR Automation ROI Calculator & Template",
      category: "Business Tool",
      description: "Estimate monthly hours saved across payroll processing, leave reconciliation, and employee record administration for your specific company size.",
      tags: ["ROI Calculator", "Cost Optimization"],
      id: "roi-calculator",
    },
    {
      title: "Modern OKR vs Traditional KPI Playbook",
      category: "Performance Guide",
      description: "Step-by-step framework for setting quarterly engineering, sales, and operations OKRs with continuous 360-degree feedback reviews.",
      tags: ["OKRs", "Appraisals", "360 Reviews"],
      id: "performance",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Resources Hero */}
      <section className="pt-14 pb-20 bg-gradient-to-b from-white via-[#F4F7FA] to-[#F4F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#087E8B] bg-[#087E8B]/10 px-3.5 py-1.5 rounded-full">
            Knowledge Hub & Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#123B50] mt-4 tracking-tight">
            Workforce Knowledge, Compliance & Best Practices
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto mt-3">
            Practical resources, statutory labor checklists, and operational playbooks curated for HR leaders and business managers.
          </p>
        </div>
      </section>

      {/* 2. Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((res, idx) => (
              <div
                key={idx}
                id={res.id}
                className="bg-[#F4F7FA]/70 rounded-3xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#087E8B] bg-white border border-[#E2E8F0] px-3 py-1 rounded-full">
                    {res.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#123B50] mt-4 mb-2">
                    {res.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                    {res.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {res.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-medium bg-white px-2.5 py-1 rounded-lg border border-[#E2E8F0] text-[#263746]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="#demo-form"
                  className="text-xs font-bold text-[#087E8B] hover:underline inline-flex items-center gap-1"
                >
                  <span>Request Full Resource Pack / Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Statutory Quick Reference Table */}
      <section className="py-20 bg-[#F4F7FA] border-y border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#087E8B] bg-[#087E8B]/10 px-3 py-1 rounded-full">
              Quick Reference
            </span>
            <h2 className="text-2xl font-bold text-[#123B50] mt-2">
              Indian Payroll Statutory Cheat Sheet
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#123B50] text-white">
                <tr>
                  <th className="py-3.5 px-6">Component</th>
                  <th className="py-3.5 px-4">Employee Share</th>
                  <th className="py-3.5 px-4">Employer Share</th>
                  <th className="py-3.5 px-6">Wage Ceiling / Rules</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-[#263746]">
                <tr>
                  <td className="py-3 px-6 font-semibold text-[#123B50]">Provident Fund (EPF)</td>
                  <td className="py-3 px-4">12% of Basic + DA</td>
                  <td className="py-3 px-4">12% (3.67% EPF + 8.33% EPS)</td>
                  <td className="py-3 px-6">Mandatory for Basic ≤ ₹15,000/mo</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold text-[#123B50]">Employee State Insurance (ESI)</td>
                  <td className="py-3 px-4">0.75% of Gross</td>
                  <td className="py-3 px-4">3.25% of Gross</td>
                  <td className="py-3 px-6">Mandatory for Gross ≤ ₹21,000/mo</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold text-[#123B50]">Professional Tax (PT)</td>
                  <td className="py-3 px-4">State Slab (e.g. ₹200-₹208/mo)</td>
                  <td className="py-3 px-4">Nil</td>
                  <td className="py-3 px-6">Varies by State (TN, KA, MH, etc.)</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold text-[#123B50]">Gratuity</td>
                  <td className="py-3 px-4">Nil</td>
                  <td className="py-3 px-4">4.81% (accrual)</td>
                  <td className="py-3 px-6">Payable upon 5 years continuous service</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Conversion CTA */}
      <section id="demo-form" className="py-20 bg-gradient-to-b from-[#123B50] to-[#087E8B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#19B5A5] bg-white/10 px-3 py-1 rounded-full">
                Consult With Our HR Specialists
              </span>
              <h2 className="text-3xl font-bold text-white">
                Have Specific Compliance or Workflow Questions?
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed">
                Our HR technology consultants can audit your current shift schedules and payroll calculations to demonstrate how Shenll HRMS can automate your operations.
              </p>
            </div>
            <div className="lg:col-span-7">
              <DemoRequestForm heading="Request a Compliance & HRMS Consultation" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
