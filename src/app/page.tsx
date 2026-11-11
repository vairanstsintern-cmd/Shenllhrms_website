import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  CreditCard,
  Clock,
  Calendar,
  FolderKanban,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Smartphone,
  ShieldCheck,
  Zap,
  FileCheck,
  Lock,
  ChevronRight,
  Play,
  Star,
  Check,
  TrendingUp,
  Headphones,
  Phone,
  MessageSquare,
  MapPin,
  Building,
  Target,
  BarChart3,
  PieChart,
  Lightbulb,
  Rocket,
  Shield,
  LifeBuoy,
  ArrowLeftRight,
  FileText,
  SlidersHorizontal,
  Settings,
  Activity,
  Cpu,
  Bot,
} from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";
import FAQSection from "@/components/FAQSection";
import IndustryHorizontalScroll from "@/components/IndustryHorizontalScroll";
import { PRICING_PLANS } from "@/data/navigation";

export default function HomePage() {
  const hrProblems = [
    {
      problem: "Manual HR & Paper Spreadsheets",
      pain: "Fragmented Excel sheets, lost employee files, and error-prone records during audits.",
      solution: "Centralized Digital HR Repository",
      fix: "Single source of truth with 100% digital document vaults, automated lifecycles, and tamper-proof audit trails.",
      metric: "95% Faster Audits",
      accent: "teal",
    },
    {
      problem: "Payroll Calculation & Statutory Delays",
      pain: "Lengthy payroll computation, complex LOP deductions, and last-minute PF/ESI/PT tax miscalculations.",
      solution: "1-Click Statutory Payroll Engine",
      fix: "Auto-syncs live biometric attendance, computes taxes in real-time, and generates bank transfer files instantly.",
      metric: "100% Tax Compliant",
      accent: "mint",
    },
    {
      problem: "Attendance & Shift Irregularities",
      pain: "Buddy punching, turnstile sync failures, and chaotic rotating shift rosters across departments.",
      solution: "Biometric & Geo-Fenced Punching",
      fix: "Direct hardware API sync with facial recognition & GPS mobile geo-fencing for hybrid and on-site staff.",
      metric: "Zero Time Leakage",
      accent: "teal",
    },
    {
      problem: "Slow Multi-Level Approvals",
      pain: "Leave requests, expense claims, and requisitions stuck in unmonitored manager inboxes for days.",
      solution: "Configurable Real-Time Workflows",
      fix: "Dynamic hierarchy routing with 1-click approvals via WhatsApp, email, and mobile push notifications.",
      metric: "80% Faster Approvals",
      accent: "amber",
    },
    {
      problem: "Opaque Project Work Allocation",
      pain: "No visibility into team bandwidth, bench strength, or billable timesheets across active client projects.",
      solution: "Integrated Project & Timesheet Suite",
      fix: "Track billable hours, balance team workloads in real-time, and align deliverables with client budgets.",
      metric: "35% Higher Utilization",
      accent: "teal",
    },
    {
      problem: "Blind Workforce Decision Making",
      pain: "HR leaders lack predictive visibility into attrition risks, overtime spikes, and departmental cost overruns.",
      solution: "Shenll AI Intelligence Engine",
      fix: "Predictive turnover alerts, natural language query insights, and automated head-count forecasting.",
      metric: "Predictive Insights",
      accent: "mint",
    },
  ];

  const coreModules = [
    {
      title: "Core HR & Employee Management",
      desc: "Complete digital records, organizational chart hierarchies, onboarding checklists, and secure digital document vaults.",
      href: "/employee-management-software",
      tag: "Foundation",
    },
    {
      title: "Payroll & Compensation",
      desc: "100% statutory compliant Indian payroll. Automate PF, ESI, TDS, Professional Tax, bonuses, and bulk payslips in minutes.",
      href: "/payroll-software",
      tag: "Payroll Engine",
    },
    {
      title: "Attendance & Shift Management",
      desc: "Seamless biometric device integration, multi-shift rotational rosters, grace periods, and overtime calculations.",
      href: "/attendance-management-software",
      tag: "Time Tracking",
    },
    {
      title: "Leave Management",
      desc: "Custom leave policies, sandwich rules, accrued balances, compensatory off workflows, and automated approvals.",
      href: "/leave-management-software",
      tag: "Leave Hub",
    },
    {
      title: "Recruitment & Onboarding",
      desc: "End-to-end applicant tracking, automated candidate stages, interview scheduling, and digital offer letter generation.",
      href: "/recruitment-software",
      tag: "Talent Acquisition",
    },
    {
      title: "Performance Management",
      desc: "Continuous feedback, 360-degree appraisal cycles, customized KPI scorecards, and automated increment calculation.",
      href: "/performance-management-software",
      tag: "Appraisals",
    },
    {
      title: "Expense & Travel Management",
      desc: "Digital receipts, automated mileage calculations, multi-currency claims, and 1-click reimbursement approvals.",
      href: "/expense-management",
      tag: "Claims",
    },
    {
      title: "Project Management & Timesheets",
      desc: "Task assignments, billable hour tracking, client invoicing integrations, and project profitability analytics.",
      href: "/project-management",
      tag: "Operations",
    },
    {
      title: "Statutory Compliance (India)",
      desc: "Pre-configured templates for PF, ESI, Gratuity, Bonus, Minimum Wages Act, and state-wise Professional Tax slabs.",
      href: "/payroll-software",
      tag: "Compliance",
    },
    {
      title: "Helpdesk & Ticket Management",
      desc: "Internal employee ticketing for HR, IT, and admin queries with defined SLA resolution timelines and tracking.",
      href: "/hrms-software",
      tag: "Support",
    },
    {
      title: "Asset Management",
      desc: "Track company laptops, devices, peripherals, allocation dates, and digital acknowledgment upon offboarding.",
      href: "/employee-management-software",
      tag: "Operations",
    },
    {
      title: "AI Workforce Intelligence",
      desc: "Ask HR questions in plain English, predict attrition trends, and automatically match optimal talent to tasks.",
      href: "/ai-hrms",
      tag: "AI Powered",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── 1. RONDESIGNLAB AESTHETIC HERO SECTION ──────────────────────── */}
      <section className="relative pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28 overflow-hidden bg-ron-canvas">
        {/* Soft Ambient Blur Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-r from-emerald-200/40 via-teal-200/30 to-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* RonDesign Dynamic Micro Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 sm:px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_16px_rgba(14,21,27,0.04)] mb-6 animate-fade-up">
            <span className="nextsaas-badge !border-none !bg-[#087E8B]/10 !text-[11px] !py-0.5 !px-2.5">
              TRUSTED BY 500+ TEAMS
            </span>
            <span className="text-xs font-bold text-[#0E151B] tracking-tight pr-1">
              Modular Cloud HRMS &amp; Statutory Payroll
            </span>
          </div>

          {/* Hero Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black text-[#0E151B] tracking-tight leading-[1.06] max-w-4xl mx-auto animate-fade-up delay-100">
            HR Software That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087E8B] via-[#0D2E40] to-[#087E8B]">
              Fits Your Business
            </span>{" "}
            — Not the Other Way Around
          </h1>

          {/* Subtitle Description */}
          <p className="mt-6 text-base sm:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed font-normal animate-fade-up delay-200">
            Affordable, modular HRMS trusted by 500+ businesses. Pick only what you need, automate your attendance, payroll, and tasks, and reclaim hours every week.
          </p>

          {/* RonDesignLab Action Pills */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up delay-300">
            <Link href="#contact-form" className="ron-pill-dark w-full sm:w-auto !py-3.5 !px-7 text-sm justify-center group">
              <span>Get a Live Demo</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link href="/pricing" className="ron-pill-light w-full sm:w-auto !py-3.5 !px-6 text-sm justify-center bg-white border border-slate-200/80 shadow-xs">
              <span>View Modular Pricing</span>
            </Link>
          </div>

          {/* Trust Highlights Checklist */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-[13px] text-[#475569] font-medium animate-fade-up delay-400">
            {[
              "100% Indian Statutory (PF, ESI, TDS, PT)",
              "Native Android & iOS Self-Service",
              "Direct API Sync With Biometric Turnstiles",
              "Bank-Grade 256-Bit Data Security",
            ].map((text) => (
              <span key={text} className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#087E8B] stroke-[3]" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. KEY METRICS & PROOFS (RonDesign Minimalist Aesthetic) ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="ron-card p-8 sm:p-14 lg:p-16 bg-white shadow-[0_20px_60px_-15px_rgba(14,21,27,0.06)] border border-slate-200/80">
            {/* Header: Tag + 2-Column Split Title and Description */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 sm:pb-16 border-b border-slate-100">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#087E8B]">
                  OPERATIONAL RESILIENCE
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#0E151B] tracking-tight leading-[1.12]">
                  Workforce infrastructure that grows with your scale.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pt-8">
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  Design a connected workforce operating system engineered for your organization, automated statutory compliance, and zero payroll errors.
                </p>
              </div>
            </div>

            {/* Features Row: Minimal Outline Icons matching second reference image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pt-10 sm:pt-12">
              {/* Item 1 */}
              <div className="space-y-3 group">
                <div className="w-12 h-12 flex items-center justify-center text-[#1E3A4C] group-hover:text-[#087E8B] transition-colors">
                  <svg className="w-9 h-9 stroke-[1.4]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="2" y="6" width="16" height="12" rx="2" />
                    <path d="M6 18V20" />
                    <path d="M14 18V20" />
                    <path d="M18 10L22 10" />
                    <path d="M18 14L22 14" />
                    <circle cx="10" cy="12" r="2" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#0E151B]">99.9%</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Uptime</span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0E151B] mt-1">Biometric Hardware Sync</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Automated biometric turnstile log polling every 60 seconds with instant cloud synchronization.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="space-y-3 group">
                <div className="w-12 h-12 flex items-center justify-center text-[#1E3A4C] group-hover:text-[#087E8B] transition-colors">
                  <svg className="w-9 h-9 stroke-[1.4]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#0E151B]">100%</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Guaranteed</span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0E151B] mt-1">Statutory Accuracy</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Zero tax calculation penalties with automated PF, ESI, TDS challans and Form 16 generators.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="space-y-3 group">
                <div className="w-12 h-12 flex items-center justify-center text-[#1E3A4C] group-hover:text-[#087E8B] transition-colors">
                  <svg className="w-9 h-9 stroke-[1.4]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 21h18" />
                    <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4" />
                    <line x1="5" y1="21" x2="5" y2="10.85" />
                    <line x1="19" y1="21" x2="19" y2="10.85" />
                    <line x1="9" y1="21" x2="9" y2="10.85" />
                    <line x1="15" y1="21" x2="15" y2="10.85" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#0E151B]">48 Hrs</span>
                    <span className="text-xs font-bold text-[#087E8B] bg-[#087E8B]/10 px-2 py-0.5 rounded-full">Migration</span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0E151B] mt-1">Rapid Assisted Go-Live</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Dedicated data migration specialists port all your legacy employee files, leaves, and salary structures.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="space-y-3 group">
                <div className="w-12 h-12 flex items-center justify-center text-[#1E3A4C] group-hover:text-[#087E8B] transition-colors">
                  <svg className="w-9 h-9 stroke-[1.4]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#0E151B]">1-Click</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Automated</span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0E151B] mt-1">Payroll Execution</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Generate password-protected digital payslips and NEFT / RTGS banking disbursal sheets in seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY TEAMS CHOOSE SHENLL HRMS (Live Site Features) ───────── */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="nextsaas-badge mb-3">
              <span>Why Choose Shenll</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0E151B] tracking-tight mt-2.5">
              Why Teams Choose Shenll HRMS
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
              A flexible HRMS that simplifies operations, adapts to your policies, and scales with your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {[
              {
                icon: BarChart3,
                iconColor: "text-indigo-500",
                iconBg: "bg-indigo-50/80 ring-8 ring-indigo-50/50",
                title: "Built for Your Workflow",
                desc: "Personalize attendance, payroll, shift rules, and task flows to align directly with your internal processes.",
              },
              {
                icon: PieChart,
                iconColor: "text-sky-500",
                iconBg: "bg-sky-50/80 ring-8 ring-sky-50/50",
                title: "Fully Synced HR Processes",
                desc: "Attendance, payroll, projects, tasks, invoices, and assets sync automatically across web and mobile platforms.",
              },
              {
                icon: Users,
                iconColor: "text-rose-500",
                iconBg: "bg-rose-50/80 ring-8 ring-rose-50/50",
                title: "Customer-Centric Experience",
                desc: "Built for your team, with flexible features that adapt to the exact way your people collaborate and work every day.",
              },
              {
                icon: Lightbulb,
                iconColor: "text-emerald-500",
                iconBg: "bg-emerald-50/80 ring-8 ring-emerald-50/50",
                title: "Simple, Modern UI/UX",
                desc: "An intuitive, clutter-free interface your HR administrators and managers can start using instantly without training.",
              },
              {
                icon: Rocket,
                iconColor: "text-amber-500",
                iconBg: "bg-amber-50/80 ring-8 ring-amber-50/50",
                title: "AI-Powered HR Automation",
                desc: "Smart AI automation that simplifies daily tasks, workload balancing, and enhances decision accuracy in seconds.",
              },
              {
                icon: Shield,
                iconColor: "text-indigo-600",
                iconBg: "bg-indigo-50/80 ring-8 ring-indigo-50/50",
                title: "High Efficiency, Zero Hassle",
                desc: "A streamlined cloud platform that speeds up your HR operations while keeping statutory calculations 100% error-free.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-100/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.06),0_2px_8px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_35px_-12px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
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

      {/* ── 5. MODULAR CLOUD ARCHITECTURE (RonDesign Tactile Bento Mockups) ─── */}
      <section className="py-24 bg-[#F4F6F8] relative overflow-hidden">
        {/* Soft background glow accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="nextsaas-badge mb-3">
              <span>Modular Cloud Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0E151B] tracking-tight mt-3">
              Everything Your Organization Needs to Scale
            </h2>
            <p className="text-base sm:text-lg text-slate-500 mt-4 leading-relaxed">
              Every module communicates seamlessly in real-time — zero data silos between employee master records, biometric turnstiles, and statutory payroll.
            </p>
          </div>

          {/* Bento Grid Layout matching attached image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* LEFT COLUMN: Cards 1, 2, 3 (span 7) */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* CARD 1 (Top Wide): Connected Hub / Data Flow Pipeline */}
              <div className="ron-card p-7 sm:p-9 bg-white shadow-[0_20px_50px_-20px_rgba(14,21,27,0.06)] border border-slate-200/80 flex flex-col justify-between group hover:border-slate-300 transition-all">
                {/* Visual Canvas with connected node pills */}
                <div className="relative py-8 px-4 rounded-2xl bg-gradient-to-b from-[#F9FAFC] to-[#F1F4F8] border border-slate-100/80 overflow-hidden mb-6">
                  {/* Subtle dotted matrix grid background */}
                  <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                  
                  <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
                    {/* Left node stack */}
                    <div className="flex flex-col gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center text-blue-600 font-bold text-xs">
                        W
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center text-emerald-600 font-bold text-xs">
                        X
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center text-rose-600 font-bold text-xs">
                        PDF
                      </div>
                    </div>

                    {/* Connecting line */}
                    <div className="hidden sm:block w-8 h-[2px] bg-gradient-to-r from-slate-200 via-purple-300 to-purple-400" />

                    {/* Central Glowing Capsule Pill: "Reading Data..." */}
                    <div className="px-5 py-3 rounded-full bg-white shadow-[0_10px_25px_-5px_rgba(168,85,247,0.25)] border-2 border-purple-200 flex items-center gap-3 animate-pulse">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center text-xs shadow-sm">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#0E151B]">
                        Processing Biometric & Tax Data...
                      </span>
                    </div>

                    {/* Connecting line */}
                    <div className="hidden sm:block w-8 h-[2px] bg-gradient-to-r from-purple-400 via-pink-300 to-slate-200" />

                    {/* Right destination node stack */}
                    <div className="flex flex-col gap-3">
                      <div className="px-3 py-1.5 rounded-xl bg-white shadow-sm border border-slate-200/80 text-[11px] font-bold text-indigo-600">
                        Payroll API
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-white shadow-sm border border-slate-200/80 text-[11px] font-bold text-emerald-600">
                        Turnstiles
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-white shadow-sm border border-slate-200/80 text-[11px] font-bold text-slate-700">
                        Bank NEFT
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Title & Description split */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#EEF3F2] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#0E151B]">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-black text-lg text-[#0E151B] tracking-tight">
                        All Workforce Data in One Secure Hub
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md leading-relaxed">
                        Easily consolidate and encrypt all biometric logs, wage structures, and employee vaults in a single repository.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/employee-management-software"
                    className="ron-circle-btn flex-shrink-0 group-hover:bg-[#0E151B] group-hover:text-white"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* ROW OF 2 CARDS (Bottom Left) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* CARD 2: AI Assistance Assistant */}
                <div className="ron-card p-6 sm:p-7 bg-white shadow-[0_20px_50px_-20px_rgba(14,21,27,0.06)] border border-slate-200/80 flex flex-col justify-between group hover:border-slate-300 transition-all">
                  {/* Visual mockup of dialog capsule */}
                  <div className="py-5 px-4 rounded-2xl bg-gradient-to-b from-[#F9FAFC] to-[#F1F4F8] border border-slate-100/80 mb-5 relative overflow-hidden">
                    {/* User prompt pill */}
                    <div className="p-2.5 rounded-xl bg-purple-50/90 border border-purple-100 flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
                        HR
                      </div>
                      <div className="h-2 w-28 bg-purple-200 rounded-full" />
                    </div>
                    {/* Bot greeting capsule */}
                    <div className="p-3 rounded-xl bg-orange-50/90 border border-orange-200/70 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center">
                          <Zap className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-bold text-slate-800">Shift Roster Balanced</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-4 h-4 rounded bg-orange-200" />
                        <div className="w-4 h-4 rounded bg-orange-300" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-full bg-[#EEF3F2] flex items-center justify-center text-[#0E151B]">
                        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      </div>
                      <h4 className="font-bold text-base text-[#0E151B]">
                        AI Workforce Assistance
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pl-9">
                      Ask natural language questions and generate roster allocations in seconds.
                    </p>
                  </div>
                </div>

                {/* CARD 3: Timely Shift Reminders & Notifications */}
                <div className="ron-card p-6 sm:p-7 bg-white shadow-[0_20px_50px_-20px_rgba(14,21,27,0.06)] border border-slate-200/80 flex flex-col justify-between group hover:border-slate-300 transition-all">
                  {/* Calendar / Matrix visual preview */}
                  <div className="py-5 px-4 rounded-2xl bg-gradient-to-b from-[#F9FAFC] to-[#F1F4F8] border border-slate-100/80 mb-5 relative flex items-center justify-center">
                    <div className="w-full max-w-[200px] p-2.5 rounded-xl bg-white shadow-sm border border-slate-200/80">
                      {/* Mini calendar grid */}
                      <div className="grid grid-cols-4 gap-1.5 text-center">
                        <div className="h-5 rounded bg-slate-100" />
                        <div className="h-5 rounded bg-slate-100" />
                        <div className="h-5 rounded bg-purple-600 text-white flex items-center justify-center text-[9px] font-bold">14</div>
                        <div className="h-5 rounded bg-slate-100" />
                        <div className="h-5 rounded bg-slate-100" />
                        <div className="h-5 rounded bg-purple-500 text-white flex items-center justify-center text-[9px] font-bold">28</div>
                        <div className="h-5 rounded bg-slate-100" />
                        <div className="h-5 rounded bg-slate-100" />
                      </div>
                    </div>
                    {/* Floating pill badge */}
                    <div className="absolute -bottom-2 -right-1 px-3 py-1 rounded-full bg-orange-500 text-white text-[10px] font-bold shadow-md flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />
                      <span>Payroll Due</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-full bg-[#EEF3F2] flex items-center justify-center text-[#0E151B]">
                        <Clock className="w-3.5 h-3.5 text-orange-600" />
                      </div>
                      <h4 className="font-bold text-base text-[#0E151B]">
                        Automated Roster Alerts
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pl-9">
                      Never miss a compliance deadline with automated reminders for PF, ESI & TDS filings.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT COLUMN: CARD 4 (Tall Card spanning 5 columns) */}
            <div className="lg:col-span-5">
              <div className="ron-card p-7 sm:p-9 bg-white shadow-[0_20px_50px_-20px_rgba(14,21,27,0.06)] border border-slate-200/80 h-full flex flex-col justify-between group hover:border-slate-300 transition-all">
                
                {/* Visual Top Preview: Interactive Search & Statutory Clause Stack */}
                <div className="space-y-4">
                  {/* Window frame header with browser dots */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-orange-50/50 via-rose-50/30 to-white border border-orange-100/80">
                    <div className="flex items-center gap-1.5 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>

                    {/* File / Doc Title Pill */}
                    <div className="px-4 py-2.5 rounded-xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-rose-500 text-white flex items-center justify-center text-[10px] font-bold">
                          §
                        </div>
                        <span className="text-xs font-bold text-slate-800">
                          Form 16 & Tax Declarations
                        </span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>

                    {/* Glowing Search Pill: "Searching..." */}
                    <div className="py-3 px-6 rounded-full bg-white shadow-[0_8px_20px_rgba(244,63,94,0.18)] border-2 border-rose-200/80 flex items-center justify-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-rose-500 to-orange-400 text-white flex items-center justify-center">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#0E151B]">
                        Reconciling TDS Slabs...
                      </span>
                    </div>
                  </div>

                  {/* Expandable Statutory Category Accordions */}
                  <div className="space-y-2 pt-2">
                    {[
                      { title: "Employee Provident Fund (EPF)", value: "12% Automated" },
                      { title: "Employee State Insurance (ESIC)", value: "0.75% / 3.25%" },
                      { title: "State Professional Tax (PT)", value: "State-Wise Slabs" },
                      { title: "Gratuity & Bonus Provision", value: "Compliant" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs hover:bg-slate-100/80 transition-colors"
                      >
                        <span className="font-semibold text-slate-700">{item.title}</span>
                        <span className="font-bold text-[#087E8B] text-[11px] bg-white px-2 py-0.5 rounded-md border border-slate-200">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tall Card Footer Info */}
                <div className="pt-6 border-t border-slate-100 mt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#EEF3F2] flex items-center justify-center text-[#0E151B]">
                      <FileCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h3 className="font-black text-lg text-[#0E151B] tracking-tight">
                      Statutory Compliance & Tax Automation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pl-11">
                    Automatically extract, compute, and generate filing-ready challans for Indian tax bodies with 100% audit protection.
                  </p>
                  <div className="pl-11 mt-4">
                    <Link
                      href="/payroll-software"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#087E8B] hover:text-[#0E151B] transition-colors"
                    >
                      <span>Explore Statutory Engine</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Quick-Access Module Pill Strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
            {coreModules.map((module, i) => (
              <Link
                key={i}
                href={module.href}
                className="px-4 py-2 rounded-full bg-white border border-slate-200/80 text-xs font-bold text-slate-700 hover:bg-[#0E151B] hover:text-[#19B5A5] hover:border-[#0E151B] transition-all shadow-xs"
              >
                {module.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. NEXTSAAS AI INTELLIGENCE SECTION (Shenll Brand Theme Dark Bento) ─────── */}
      <section className="py-20 lg:py-28 bg-[#081B26] text-white relative overflow-hidden">
        {/* Soft atmospheric ambient brand glows: Teal & Mint */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#087E8B]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#19B5A5]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-[300px] h-[300px] bg-[#0A9AAA]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/20 backdrop-blur-md border border-[#087E8B]/40 text-[#19B5A5] text-xs font-semibold tracking-normal mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#19B5A5]" />
              <span>Shenll HRMS AI Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 leading-tight tracking-tight">
              Make HR Operations{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19B5A5] via-[#087E8B] to-emerald-300">
                Intelligent with AI
              </span>
            </h2>
            <p className="text-base text-slate-300 mt-4 leading-relaxed max-w-2xl mx-auto">
              Automate complex workforce management with purposive AI agents engineered for Indian labor policies, attendance reconciliation, and predictive attrition modeling.
            </p>
          </div>

          {/* 5-Card Bento Grid Layout in Shenll Theme Palette */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
            
            {/* ROW 1 — CARD 1: Workforce AI Agent (span 2) */}
            <div className="lg:col-span-2 rounded-[28px] p-6 sm:p-7 bg-[#0E2836] border border-[#087E8B]/35 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[#19B5A5]/50 hover:-translate-y-1 transition-all duration-300">
              {/* Graphic: Glowing Workforce Node Network / Roster Grid */}
              <div className="relative h-44 rounded-2xl bg-gradient-to-b from-[#087E8B]/20 to-transparent border border-[#087E8B]/30 overflow-hidden flex items-center justify-center p-4 mb-6">
                <div className="relative flex items-center gap-4">
                  {/* Central Workforce Agent Badge */}
                  <div className="w-28 h-24 rounded-2xl bg-gradient-to-br from-[#087E8B] to-[#0D2E40] p-3 shadow-xl shadow-[#04121A] border border-[#19B5A5]/40 flex flex-col justify-between group-hover:scale-105 transition-transform">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-[#19B5A5]" />
                        <span className="text-[10px] font-bold text-white tracking-wide">Roster AI</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#19B5A5] animate-ping" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[9px] text-slate-300">
                        <span>Matched</span>
                        <span className="text-[#19B5A5] font-bold">98.4%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/15 overflow-hidden">
                        <div className="w-[98%] h-full bg-gradient-to-r from-[#087E8B] to-[#19B5A5] rounded-full" />
                      </div>
                    </div>
                    <div className="flex gap-1 pt-1 border-t border-white/15">
                      <div className="w-2 h-2 rounded-full bg-[#19B5A5]" />
                      <div className="w-2 h-2 rounded-full bg-teal-200" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Radiating Skill & Shift Match Nodes */}
                  <div className="flex flex-col gap-2.5">
                    {[
                      { label: "Shift A", color: "from-[#19B5A5] to-[#5EEAD4]" },
                      { label: "Skills OK", color: "from-[#087E8B] to-[#19B5A5]" },
                      { label: "Allocated", color: "from-[#19B5A5] to-emerald-400" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <div className="w-7 h-[2px] bg-gradient-to-r from-[#19B5A5]/80 to-[#19B5A5]/20" />
                        <div className="px-2 py-0.5 rounded-md bg-[#091F2C] border border-[#087E8B]/50 text-[9px] font-medium text-[#19B5A5] whitespace-nowrap shadow-sm">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#19B5A5] transition-colors tracking-tight mb-2">
                  Workforce AI Agent
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Intelligent autonomous agent for skill-based shift allocation, dynamic roster scheduling, availability tracking, and automated staffing coverage.
                </p>
              </div>
            </div>

            {/* ROW 1 — CARD 2: AI Task Orchestration (span 2) */}
            <div className="lg:col-span-2 rounded-[28px] p-6 sm:p-7 bg-[#0E2836] border border-[#087E8B]/35 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[#19B5A5]/50 hover:-translate-y-1 transition-all duration-300">
              {/* Graphic: Cogwheels & Orchestration Pipeline */}
              <div className="relative h-44 rounded-2xl bg-gradient-to-b from-[#087E8B]/20 to-transparent border border-[#087E8B]/30 overflow-hidden flex items-center justify-center p-4 mb-6">
                <div className="relative flex items-center justify-center">
                  {/* Central Orchestrator Core */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#087E8B] to-[#19B5A5] p-0.5 shadow-lg shadow-[#04121A] flex items-center justify-center">
                    <div className="w-full h-full rounded-full border-4 border-dashed border-teal-200/40 animate-[spin_20s_linear_infinite] flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#0E2836] flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-[#19B5A5]" />
                      </div>
                    </div>
                  </div>

                  {/* Satellite Dispatch Nodes */}
                  <div className="absolute -top-1 -right-4 w-9 h-9 rounded-full bg-gradient-to-tr from-[#19B5A5] to-emerald-400 p-0.5 flex items-center justify-center shadow-md">
                    <div className="w-full h-full rounded-full border-2 border-dashed border-white/50 animate-[spin_12s_linear_infinite_reverse] flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#0E2836] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-1 -left-4 w-9 h-9 rounded-full bg-gradient-to-tr from-[#087E8B] to-teal-400 p-0.5 flex items-center justify-center shadow-md">
                    <div className="w-full h-full rounded-full border-2 border-dashed border-white/50 animate-[spin_12s_linear_infinite_reverse] flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#0E2836] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#19B5A5] transition-colors tracking-tight mb-2">
                  AI Task Orchestration
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Automated priority dispatch, cross-departmental workload rebalancing, bottleneck resolution, and real-time capacity burnout alerts.
                </p>
              </div>
            </div>

            {/* ROW 1 — CARD 3: Predictive Intelligence Engine (span 2) */}
            <div className="lg:col-span-2 rounded-[28px] p-6 sm:p-7 bg-[#0E2836] border border-[#087E8B]/35 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[#19B5A5]/50 hover:-translate-y-1 transition-all duration-300">
              {/* Graphic: Glowing Sine Wave Curve in Mint/Teal with Attrition / Overtime Data Point */}
              <div className="relative h-44 rounded-2xl bg-gradient-to-b from-[#087E8B]/20 to-transparent border border-[#087E8B]/30 overflow-hidden flex items-center justify-center p-4 mb-6">
                <svg className="w-full h-24 overflow-visible" viewBox="0 0 200 80" fill="none">
                  <defs>
                    <linearGradient id="themeCurveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#087E8B" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#19B5A5" stopOpacity="1" />
                      <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="themeAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#19B5A5" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#19B5A5" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Fill Under Curve */}
                  <path
                    d="M 10 55 Q 50 10, 100 45 T 190 20 L 190 80 L 10 80 Z"
                    fill="url(#themeAreaGradient)"
                  />
                  {/* Main Glowing Curve Line */}
                  <path
                    d="M 10 55 Q 50 10, 100 45 T 190 20"
                    stroke="url(#themeCurveGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(25,181,165,0.8)]"
                  />
                  {/* Peak Key Data Point */}
                  <circle cx="100" cy="45" r="4" fill="#FFFFFF" className="drop-shadow-[0_0_8px_#19B5A5]" />
                </svg>
              </div>

              <div>
                <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#19B5A5] transition-colors tracking-tight mb-2">
                  Predictive Intelligence Engine
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Surfaces attrition risk indicators, absenteeism heatmaps, overtime leakage warnings, and retention trends before notice periods start.
                </p>
              </div>
            </div>

            {/* ROW 2 — CARD 4: Custom AI Agents (span 3) */}
            <div className="lg:col-span-3 rounded-[28px] p-6 sm:p-7 bg-[#0E2836] border border-[#087E8B]/35 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[#19B5A5]/50 hover:-translate-y-1 transition-all duration-300">
              {/* Graphic: Custom AI Agent Hub with Policy & Multi-department Bots */}
              <div className="relative h-44 rounded-2xl bg-gradient-to-b from-[#087E8B]/20 to-transparent border border-[#087E8B]/30 overflow-hidden flex items-center justify-center p-4 mb-6">
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  {/* Central Agent Controller Node */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#087E8B]/30 flex items-center justify-center mb-1">
                    <div className="absolute inset-0 bg-[#19B5A5]/30 rounded-full blur-md" />
                    <Bot className="w-6 h-6 text-[#19B5A5] relative z-10" />
                  </div>

                  {/* Multi-Agent Department Connectors */}
                  <div className="relative w-72 h-16 flex items-center justify-around px-2">
                    {/* SVG Arc track */}
                    <svg className="absolute inset-x-0 -top-3 w-full h-12 overflow-visible pointer-events-none" viewBox="0 0 240 40">
                      <path d="M 10 35 Q 120 0, 230 35" fill="none" stroke="#19B5A5" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.45" />
                    </svg>

                    {/* Agent 1: HR Policy Bot */}
                    <div className="flex flex-col items-center gap-1 z-10 hover:scale-110 transition-transform">
                      <div className="w-8 h-8 rounded-full bg-[#091F2C] border border-[#087E8B]/50 flex items-center justify-center text-[#19B5A5] shadow-sm">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-medium text-slate-300">Policy Bot</span>
                    </div>

                    {/* Agent 2: Payroll Bot */}
                    <div className="flex flex-col items-center gap-1 z-10 hover:scale-110 transition-transform">
                      <div className="w-8 h-8 rounded-full bg-[#091F2C] border border-[#087E8B]/50 flex items-center justify-center text-[#19B5A5] shadow-sm">
                        <Zap className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-medium text-slate-300">Payroll Bot</span>
                    </div>

                    {/* Agent 3: Compliance Bot */}
                    <div className="flex flex-col items-center gap-1 z-10 hover:scale-110 transition-transform">
                      <div className="w-8 h-8 rounded-full bg-[#091F2C] border border-[#087E8B]/50 flex items-center justify-center text-[#19B5A5] shadow-sm">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-medium text-slate-300">Audit Bot</span>
                    </div>

                    {/* Agent 4: Helpdesk Bot */}
                    <div className="flex flex-col items-center gap-1 z-10 hover:scale-110 transition-transform">
                      <div className="w-8 h-8 rounded-full bg-[#091F2C] border border-[#087E8B]/50 flex items-center justify-center text-[#19B5A5] shadow-sm">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-medium text-slate-300">Helpdesk</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#19B5A5] transition-colors tracking-tight mb-2">
                  Custom AI Agents
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Build and deploy tailored reasoning agents trained on your organization’s unique employee handbooks, statutory rules, branch nuances, and custom approval flows.
                </p>
              </div>
            </div>

            {/* ROW 2 — CARD 5: AI Report Generation (span 3) */}
            <div className="lg:col-span-3 rounded-[28px] p-6 sm:p-7 bg-[#0E2836] border border-[#087E8B]/35 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[#19B5A5]/50 hover:-translate-y-1 transition-all duration-300">
              {/* Graphic: Conversational Prompt with Word, Excel, PDF Format Badges */}
              <div className="relative h-44 rounded-2xl bg-gradient-to-b from-[#087E8B]/20 to-transparent border border-[#087E8B]/30 overflow-hidden flex items-center justify-center p-3 mb-6">
                <div className="w-full max-w-md flex items-center justify-center gap-4">
                  
                  {/* Left Column: Word (W), Excel (X), PDF (PDF) Squircles matching attached image */}
                  <div className="flex flex-col gap-2 shrink-0">
                    {/* Word Squircle */}
                    <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_12px_rgba(0,0,0,0.18)] flex items-center justify-center transition-transform hover:scale-110">
                      <span className="text-sm font-black text-blue-600 font-sans tracking-tight">W</span>
                    </div>

                    {/* Excel Squircle */}
                    <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_12px_rgba(0,0,0,0.18)] flex items-center justify-center transition-transform hover:scale-110">
                      <span className="text-sm font-black text-emerald-600 font-sans tracking-tight">X</span>
                    </div>

                    {/* PDF Squircle */}
                    <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_12px_rgba(0,0,0,0.18)] flex items-center justify-center transition-transform hover:scale-110">
                      <span className="text-[11px] font-black text-rose-600 font-sans tracking-tighter">PDF</span>
                    </div>
                  </div>

                  {/* Gradient Connecting Ray */}
                  <div className="hidden sm:block w-6 h-[2px] bg-gradient-to-r from-purple-400 via-[#19B5A5] to-transparent shrink-0" />

                  {/* Right Column: Natural Language Prompt Pill & Export Card */}
                  <div className="flex-1 flex flex-col gap-2 min-w-0">
                    {/* Natural Language Prompt Pill */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#091F2C] border border-[#087E8B]/50 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-[#19B5A5] shrink-0" />
                      <span className="text-[10px] text-slate-200 truncate font-mono">
                        &quot;Export payroll variance summary&quot;
                      </span>
                    </div>

                    {/* Generated Report Preview Card */}
                    <div className="rounded-xl bg-gradient-to-r from-[#087E8B]/30 to-[#19B5A5]/20 border border-[#19B5A5]/40 p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-[#19B5A5]/20 flex items-center justify-center text-[#19B5A5] shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-bold text-white truncate">Q3_Payroll_Audit.xlsx</div>
                          <div className="text-[9px] text-[#19B5A5]">Ready in DOCX, XLSX, PDF</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#087E8B] to-[#19B5A5] text-[#081B26] text-[10px] font-black uppercase tracking-wider shrink-0 shadow-xs">
                        Export
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#19B5A5] transition-colors tracking-tight mb-2">
                  AI Report Generation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Turn plain-English prompts into boardroom-ready HR audit sheets, payroll variance reports, PF/ESI summaries, and downloadable visual analytics in seconds.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. MOBILE APP SECTION (Nicepay / Mobile App Style) ─────── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Ambient Brand Glowing Orbs */}
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#087E8B]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#19B5A5]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading, Subtitle & 4 Features Grid */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <div className="nextsaas-badge mb-3">
                  <span>Native iOS &amp; Android Apps</span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-[#0E151B] tracking-tight leading-[1.08] mt-3">
                  Supercharge your workforce with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087E8B] via-[#0D2E40] to-[#19B5A5]">
                    Shenll HRMS
                  </span>
                </h2>
                <p className="text-base text-slate-500 mt-4 leading-relaxed max-w-xl">
                  Empower your workforce with on-the-go self-service — from corporate offices and manufacturing turnstiles to remote field projects.
                </p>
              </div>

              {/* 4 Feature Items Grid with Theme Teal Icons & Hover Micro-Interactions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 pt-2">
                {/* Feature 1 */}
                <div className="space-y-3 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-[#087E8B] group-hover:bg-[#0D2E40] flex items-center justify-center text-white shadow-md shadow-[#087E8B]/25 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#087E8B]/35 transition-all duration-300">
                    <ArrowLeftRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#087E8B] transition-colors tracking-tight">
                      Flexible Attendance Sync
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      Instant geo-fenced mobile punching and automated real-time biometric turnstile syncing.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="space-y-3 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-[#087E8B] group-hover:bg-[#0D2E40] flex items-center justify-center text-white shadow-md shadow-[#087E8B]/25 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#087E8B]/35 transition-all duration-300">
                    <Smartphone className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#087E8B] transition-colors tracking-tight">
                      1-Tap Leave &amp; Requests
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      Apply for paid leaves, check holiday calendars, and receive instant supervisor push approvals.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="space-y-3 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-[#087E8B] group-hover:bg-[#0D2E40] flex items-center justify-center text-white shadow-md shadow-[#087E8B]/25 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#087E8B]/35 transition-all duration-300">
                    <Headphones className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#087E8B] transition-colors tracking-tight">
                      Dedicated Support
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      Direct employee helpdesk ticketing and in-app query resolution for shift and payroll clarifications.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="space-y-3 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-[#087E8B] group-hover:bg-[#0D2E40] flex items-center justify-center text-white shadow-md shadow-[#087E8B]/25 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#087E8B]/35 transition-all duration-300">
                    <FileText className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#087E8B] transition-colors tracking-tight">
                      Instant Digital Payslips
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      Password-protected monthly salary slips, tax summaries, and NEFT payment records on your phone.
                    </p>
                  </div>
                </div>
              </div>

              {/* App Store Download Badges */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.sts.stshrms&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0D2E40] text-white hover:bg-[#087E8B] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Image src="/google-play-brand.svg" alt="Google Play Store" width={22} height={22} className="object-contain" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-semibold text-slate-300 leading-none">GET IT ON</p>
                    <p className="text-sm font-bold leading-tight mt-0.5">Google Play</p>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com/ie/app/shenll-hrms/id6757430801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0D2E40] text-white hover:bg-[#087E8B] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Image src="/apple-brand.svg" alt="Apple App Store" width={22} height={22} className="object-contain brightness-0 invert" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-semibold text-slate-300 leading-none">Download on the</p>
                    <p className="text-sm font-bold leading-tight mt-0.5">App Store</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Animated Dual Phone Mockup from Attached Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] sm:max-w-[440px] animate-float">
                {/* Ambient Soft Brand Glow Backdrops */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-[#087E8B]/25 via-[#19B5A5]/20 to-sky-300/30 rounded-[64px] blur-3xl -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#1E73E8]/20 rounded-full blur-2xl -z-10" />

                {/* Dual Phone Image Container */}
                <div className="relative w-full aspect-[1274/1844] drop-shadow-[0_25px_60px_rgba(13,46,64,0.28)] hover:drop-shadow-[0_35px_80px_rgba(8,126,139,0.38)] transition-all duration-500 hover:scale-[1.02]">
                  <Image
                    src="/mobile-dual-mockup.png"
                    alt="Shenll HRMS Mobile App - Time Off & Attendance Overview"
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 440px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 8. INDUSTRY SOLUTIONS (4-In-One-Row Horizontal Scroll) ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="nextsaas-badge mb-3">
              <span>Industry Vertical Playbooks</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0E151B] tracking-tight">
              Tailored for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087E8B] to-[#19B5A5]">
                Diverse Sector
              </span>{" "}
              Demands
            </h2>
            <p className="text-base sm:text-lg text-slate-500 mt-4 leading-relaxed">
              Every industry operates under different shift laws and worker policies. Click any sector to view its specialized HRMS configuration.
            </p>
          </div>

          {/* 4 in One Row Scroll Component */}
          <IndustryHorizontalScroll />
        </div>
      </section>

      {/* ── 9. PRICING SECTION ──────────────────────────────────────── */}
      <section className="py-24 bg-white" id="pricing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="nextsaas-badge mb-3">
              <span>Predictable Cloud Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0D2E40] tracking-tight">
              Cost-Effective{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087E8B] to-[#19B5A5]">
                Workforce Plans
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 mt-4 leading-relaxed">
              Starting at just <strong className="text-[#0D2E40]">₹3.3 per employee/day</strong> with zero setup fees and unlimited monthly payroll runs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 relative ${
                  plan.highlight
                    ? "bg-white border-[#087E8B] shadow-2xl ring-2 ring-[#087E8B]/20"
                    : "bg-[#F8FAFC] border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-lg"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-[11px] font-black text-white bg-[#087E8B] shadow-md uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{plan.name}</span>
                  <div className="mt-3 flex items-baseline gap-1">
                    {plan.monthlyPrice ? (
                      <>
                        <span className="text-4xl font-black text-[#0D2E40]">₹{plan.monthlyPrice.toLocaleString("en-IN")}</span>
                        <span className="text-xs text-slate-500">/ month</span>
                      </>
                    ) : (
                      <span className="text-3xl font-black text-[#0D2E40]">Custom Enterprise</span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-[#087E8B] mt-1.5">{plan.employeeLimit}</p>
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">{plan.description}</p>

                  <div className="mt-4 p-3 rounded-2xl bg-white border border-slate-200/80 text-xs">
                    <span className="font-bold text-[#0D2E40]">Extra Employees: </span>
                    <span className="text-slate-500">{plan.additionalEmployeeCost}</span>
                  </div>

                  <div className="space-y-2.5 mt-6 mb-8">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#0D2E40]">What&apos;s included:</p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#087E8B] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="#contact-form"
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-center text-xs sm:text-sm transition-all shadow-sm ${
                    plan.highlight
                      ? "bg-[#087E8B] hover:bg-[#0D2E40] text-white shadow-md hover:shadow-lg"
                      : "bg-[#0D2E40] hover:bg-[#087E8B] text-white"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. RAPID 48-HOUR IMPLEMENTATION (RonDesign 3 Simple Steps) ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header with targeted bracket styling & highlighted pill */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="nextsaas-badge mb-4">
              <span>Rapid 48-Hour Implementation</span>
            </div>
            <div className="relative inline-block">
              {/* Corner brackets */}
              <span className="absolute -top-3 -left-4 text-slate-300 text-lg font-light">┌</span>
              <span className="absolute -top-3 -right-4 text-slate-300 text-lg font-light">┐</span>
              <span className="absolute -bottom-2 -left-4 text-slate-300 text-lg font-light">└</span>
              <span className="absolute -bottom-2 -right-4 text-slate-300 text-lg font-light">┘</span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0E151B] tracking-tight leading-[1.12]">
                Transition Your Workforce In{" "}
                <span className="relative inline-block px-3 py-0.5 rounded-xl bg-[#087E8B]/10 text-[#087E8B] border border-[#087E8B]/25">
                  3 Simple Steps
                </span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-500 mt-4 leading-relaxed max-w-2xl mx-auto">
              Kickstart your automated workforce journey with ready-to-go, fully compliant HR & payroll modules. Zero downtime, zero stress.
            </p>
          </div>

          {/* 3 Interactive Mockup Cards with Hand-Drawn Style Step Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">

            {/* ── STEP 1: Contact with us (Chat Dialog Mockup) ─── */}
            <div className="relative flex flex-col">
              {/* Step indicator with curved arrow */}
              <div className="flex items-center gap-2 mb-3 text-slate-400 font-medium text-xs self-start sm:ml-4">
                <span>Step 1</span>
                <svg className="w-8 h-4 text-slate-400" viewBox="0 0 40 20" fill="none" stroke="currentColor">
                  <path d="M2 15C12 15 22 5 36 6M36 6L30 2M36 6L30 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="ron-card p-6 bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(14,21,27,0.06)] hover:border-blue-400 transition-all flex flex-col justify-between min-h-[380px]">
                {/* Visual Canvas: Chat conversation preview */}
                <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex flex-col gap-3 min-h-[220px] justify-center">
                  {/* User sent bubble */}
                  <div className="flex items-end justify-end gap-2">
                    <div className="p-3.5 rounded-2xl rounded-br-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs leading-relaxed max-w-[210px] shadow-sm">
                      Hey, we have 180 factory workers on rotational shifts and need biometric sync.
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#0E151B] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      HR
                    </div>
                  </div>

                  {/* Specialist response bubble */}
                  <div className="flex items-end gap-2 pt-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      S
                    </div>
                    <div className="p-3 rounded-2xl rounded-bl-sm bg-white border border-slate-200 text-slate-700 text-xs leading-relaxed max-w-[200px] shadow-xs">
                      Yes! We support direct API sync for eSSL & Matrix turnstiles with 48h migration.
                    </div>
                  </div>

                  {/* Typing pill */}
                  <div className="flex items-center gap-1.5 pl-8 text-[11px] text-slate-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
                    <span>Deployment team typing...</span>
                  </div>
                </div>

                {/* Footer text */}
                <div className="pt-5">
                  <h3 className="font-black text-lg text-[#0E151B] tracking-tight">
                    Share Your Requirements
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                    Tell us your employee count and shift roster rules. We configure your company account within hours.
                  </p>
                </div>
              </div>
            </div>

            {/* ── STEP 2: Configure Modules (Module Catalog Mockup) ─── */}
            <div className="relative flex flex-col">
              <div className="ron-card p-6 bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(14,21,27,0.06)] hover:border-purple-400 transition-all flex flex-col justify-between min-h-[380px]">
                {/* Visual Canvas: Search and channel checklist preview */}
                <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex flex-col gap-2.5 min-h-[220px] justify-center">
                  {/* Search prompt */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-600 shadow-xs mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>Configuring active modules...</span>
                  </div>

                  {/* Module rows with avatars and badges */}
                  {[
                    { name: "Payroll & Statutory", tag: "PF/ESI", verified: true, color: "bg-blue-50 text-blue-600" },
                    { name: "Biometric Turnstiles", tag: "Sync OK", verified: true, color: "bg-emerald-50 text-emerald-600" },
                    { name: "Shift Rotations & Leaves", tag: "Live", verified: true, color: "bg-purple-50 text-purple-600" },
                  ].map((item, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-white border border-slate-200/70 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-700">
                          0{idx + 1}
                        </div>
                        <span className="text-xs font-bold text-slate-800">{item.name}</span>
                        {item.verified && <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />}
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${item.color}`}>
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer text */}
                <div className="pt-5">
                  <h3 className="font-black text-lg text-[#0E151B] tracking-tight">
                    Select & Verify Modules
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                    Browse our full suite of automated modules and select the precise combination that matches your workflow.
                  </p>
                </div>
              </div>

              {/* Bottom step 2 indicator with upward curved arrow */}
              <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 font-medium text-xs">
                <span>Step 2</span>
                <svg className="w-8 h-4 text-slate-400 rotate-180" viewBox="0 0 40 20" fill="none" stroke="currentColor">
                  <path d="M2 15C12 15 22 5 36 6M36 6L30 2M36 6L30 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* ── STEP 3: Instant Go-Live (Certificate / Contract Mockup) ─── */}
            <div className="relative flex flex-col">
              {/* Step indicator with curved arrow */}
              <div className="flex items-center justify-end gap-2 mb-3 text-slate-400 font-medium text-xs self-end sm:mr-4">
                <span>Step 3</span>
                <svg className="w-8 h-4 text-slate-400" viewBox="0 0 40 20" fill="none" stroke="currentColor">
                  <path d="M2 15C12 15 22 5 36 6M36 6L30 2M36 6L30 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="ron-card p-6 bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(14,21,27,0.06)] hover:border-emerald-400 transition-all flex flex-col justify-between min-h-[380px]">
                {/* Visual Canvas: Stacked documents and congratulations card */}
                <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex flex-col items-center justify-center gap-3 min-h-[220px] relative overflow-hidden">
                  {/* Layered Document Graphic */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-24 h-28 rounded-2xl bg-blue-100/60 -rotate-6 absolute" />
                    <div className="w-24 h-28 rounded-2xl bg-white border border-slate-200 shadow-md p-3 flex flex-col justify-between relative z-10">
                      <div className="space-y-1.5">
                        <div className="h-1.5 w-12 bg-blue-500 rounded-full" />
                        <div className="h-1.5 w-16 bg-slate-200 rounded-full" />
                        <div className="h-1.5 w-10 bg-slate-200 rounded-full" />
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] font-bold text-emerald-600 font-mono">100% OK</span>
                      </div>
                    </div>
                  </div>

                  {/* Congratulations Toast Pill */}
                  <div className="px-4 py-2 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center gap-2 z-20 mt-1">
                    <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-slate-800 leading-tight">Congratulations!</p>
                      <p className="text-[9px] text-slate-400">Your organization is fully live.</p>
                    </div>
                  </div>
                </div>

                {/* Footer text */}
                <div className="pt-5">
                  <h3 className="font-black text-lg text-[#0E151B] tracking-tight">
                    Instant 48-Hour Go-Live
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                    Your cloud tenant, employee mobile app access, and automated payslip generation are securely live and fully yours.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Centered CTA */}
          <div className="mt-14 text-center">
            <Link
              href="#contact-form"
              className="ron-pill-dark !py-3.5 !px-7 text-sm inline-flex items-center gap-2 group"
            >
              <span>Book Your 48-Hour Implementation</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ─────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── 12. FINAL NEXTSAAS CTA + LEAD FORM ───────────────────────── */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0D2E40] via-[#087E8B] to-[#123B50] text-white relative overflow-hidden" id="contact-form">
        <div className="glow-mint w-[550px] h-[550px] top-0 right-0 opacity-25 blur-3xl pointer-events-none" />
        <div className="glow-teal w-[450px] h-[450px] bottom-0 left-0 opacity-20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#19B5A5] text-xs font-bold uppercase tracking-wider">
                <span>Get Started Today</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                Transform Your HR Operations with <span className="text-[#19B5A5]">Shenll HRMS</span>.
              </h2>

              <p className="text-base text-slate-200 leading-relaxed">
                Discover a smarter way to manage your workforce — connected HR, automated payroll, biometric punch sync, and predictive insights with zero implementation stress.
              </p>

              {/* Value checklist */}
              <div className="space-y-3 pt-1">
                {[
                  "Free 30-minute tailored platform walkthrough",
                  "Complete guidance on biometric integration & data migration",
                  "Transparent per-employee pricing with zero setup fee",
                  "Dedicated onboarding specialist and 48-hour data go-live",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-100">
                    <div className="w-5 h-5 rounded-full bg-[#19B5A5]/20 text-[#19B5A5] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#19B5A5]/30">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Helpline Glass Card */}
              <div className="pt-6 border-t border-white/15">
                <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#F59E0B] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-slate-300 font-bold">Direct Sales Helpline</p>
                      <a href="tel:+918122046761" className="text-lg font-black text-white hover:text-[#F59E0B] transition-colors">
                        +91-8122046761
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/918122046761?text=Hello%20Shenll%20HRMS,%20I%20would%20like%20to%20book%20a%20demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-md hover:shadow-lg"
                  >
                    <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={18} height={18} className="brightness-0 invert" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <p className="text-xs text-slate-300 mt-3 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Shenll HQ · Plot No.1069, Munusamy Salai, K.K Nagar, Chennai
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <DemoRequestForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
