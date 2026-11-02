"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Laptop,
  Users,
  CreditCard,
  Clock,
  Calendar,
  Briefcase,
  TrendingUp,
  FolderKanban,
  Receipt,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import { PRODUCT_MODULES, INDUSTRY_SOLUTIONS } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Active state helpers
  const isOverviewActive = pathname === "/";
  const isPricingActive = pathname === "/pricing";
  const isAboutActive = pathname === "/about";
  const isBookDemoActive = pathname === "/book-a-demo";
  const isModuleActive = PRODUCT_MODULES.some((mod) => pathname === mod.href) || pathname === "/ai-hrms";
  const isIndustryActive = pathname.startsWith("/industries");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Top Floating Island Navbar (RonDesignLab Style) ──────────── */}
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-[1240px] ${
          isScrolled ? "top-3" : "top-4 sm:top-6"
        }`}
      >
        <div className="bg-white/85 backdrop-blur-xl border border-slate-200/80 rounded-full px-3.5 sm:px-5 py-2.5 flex items-center justify-between transition-all shadow-[0_10px_35px_-10px_rgba(14,21,27,0.08)] hover:border-slate-300">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 pl-1 group">
            <div className="relative w-[130px] sm:w-[155px] h-[34px] sm:h-[38px]">
              <Image
                src="/shenll-logo.svg"
                alt="Shenll HRMS Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-[#F1F5F4]/80 p-1 rounded-full border border-slate-200/60">
            {/* Overview / Home */}
            <Link
              href="/"
              className={`px-4 py-1.5 text-[13px] font-semibold rounded-full transition-all ${
                isOverviewActive
                  ? "text-[#0E151B] bg-white shadow-xs font-bold"
                  : "text-[#475569] hover:text-[#0E151B] hover:bg-white/70"
              }`}
            >
              Overview
            </Link>

            {/* PRODUCT MEGA DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("product")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-semibold rounded-full transition-all ${
                  isModuleActive || activeDropdown === "product"
                    ? "text-[#0E151B] bg-white shadow-xs font-bold"
                    : "text-[#475569] hover:text-[#0E151B] hover:bg-white/70"
                }`}
              >
                <span>Modules</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "product" ? "rotate-180 text-[#0E151B]" : ""
                  }`}
                />
              </button>

              {activeDropdown === "product" && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[780px] bg-white rounded-[28px] shadow-[0_30px_70px_-15px_rgba(14,21,27,0.18)] border border-slate-200/90 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="ron-badge-lime">
                          ENTERPRISE SUITE
                        </span>
                        <span className="text-xs text-slate-400 font-medium">12 Integrated Modules</span>
                      </div>
                      <h4 className="text-sm font-bold text-[#0E151B]">
                        Unified Cloud HR, Payroll &amp; Workforce Engine
                      </h4>
                    </div>
                    <Link
                      href="/ai-hrms"
                      onClick={() => setActiveDropdown(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087E8B] hover:text-[#0D2E40] bg-[#087E8B]/10 hover:bg-[#087E8B]/15 px-3 py-1.5 rounded-full transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#087E8B]" />
                      <span>AI Intelligence</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      {
                        name: "Core HR & Employees",
                        subtitle: "Vaults & records",
                        href: "/employee-management-software",
                        icon: "badge",
                        color: "bg-blue-50 text-blue-600",
                      },
                      {
                        name: "Statutory Payroll",
                        subtitle: "PF, ESI, TDS compliant",
                        href: "/payroll-software",
                        icon: "payments",
                        color: "bg-emerald-50 text-emerald-600",
                      },
                      {
                        name: "Attendance & Shifts",
                        subtitle: "Biometric & geo-fence",
                        href: "/attendance-management-software",
                        icon: "fingerprint",
                        color: "bg-amber-50 text-amber-600",
                      },
                      {
                        name: "Leave Management",
                        subtitle: "Sandwich rules & approvals",
                        href: "/leave-management-software",
                        icon: "event_available",
                        color: "bg-rose-50 text-rose-600",
                      },
                      {
                        name: "Recruitment & ATS",
                        subtitle: "Applicant tracking",
                        href: "/recruitment-software",
                        icon: "person_search",
                        color: "bg-indigo-50 text-indigo-600",
                      },
                      {
                        name: "Performance & OKR",
                        subtitle: "360-degree reviews",
                        href: "/performance-management-software",
                        icon: "military_tech",
                        color: "bg-purple-50 text-purple-600",
                      },
                      {
                        name: "Travel & Expense",
                        subtitle: "1-Click claim processing",
                        href: "/expense-management",
                        icon: "receipt_long",
                        color: "bg-amber-50 text-amber-600",
                      },
                      {
                        name: "Project & Timesheets",
                        subtitle: "Team allocation & cost",
                        href: "/project-management",
                        icon: "folder_managed",
                        color: "bg-blue-50 text-blue-600",
                      },
                      {
                        name: "Mobile Self-Service",
                        subtitle: "iOS & Android apps",
                        href: "/hrms-mobile-app",
                        icon: "smartphone",
                        color: "bg-teal-50 text-teal-600",
                      },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className={`p-3 rounded-2xl border transition-all group block ${
                          pathname === item.href
                            ? "bg-[#087E8B]/10 border-[#087E8B]/40"
                            : "hover:bg-[#F8FAFC] border-transparent hover:border-[#E1E8F0]"
                        }`}
                      >
                        <h5 className={`text-[13px] font-bold transition-colors leading-tight ${
                          pathname === item.href ? "text-[#087E8B]" : "text-[#0D2E40] group-hover:text-[#087E8B]"
                        }`}>
                          {item.name}
                        </h5>
                        <p className="text-[11.5px] text-[#64748B] mt-1 leading-snug">
                          {item.subtitle}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* INDUSTRY VERTICALS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("industry")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-semibold rounded-full transition-all ${
                  isIndustryActive || activeDropdown === "industry"
                    ? "text-[#0E151B] bg-white shadow-xs font-bold"
                    : "text-[#475569] hover:text-[#0E151B] hover:bg-white/70"
                }`}
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "industry" ? "rotate-180 text-[#0E151B]" : ""
                  }`}
                />
              </button>

              {activeDropdown === "industry" && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-white rounded-[28px] shadow-[0_30px_70px_-15px_rgba(14,21,27,0.18)] border border-slate-200/90 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="ron-badge-lime">
                          VERTICAL SOLUTIONS
                        </span>
                        <span className="text-xs text-slate-400 font-medium">9 Tailored Playbooks</span>
                      </div>
                      <h4 className="text-sm font-bold text-[#0E151B]">
                        Configured for Your Sector&apos;s Shift &amp; Labor Laws
                      </h4>
                    </div>
                    <Link
                      href="/#industries-section"
                      onClick={() => setActiveDropdown(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087E8B] hover:text-[#0D2E40] bg-[#087E8B]/10 hover:bg-[#087E8B]/15 px-3 py-1.5 rounded-full transition-colors"
                    >
                      <span>View All Playbooks</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    {INDUSTRY_SOLUTIONS.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className={`p-3 rounded-2xl border transition-all group block ${
                          pathname === item.href
                            ? "bg-[#087E8B]/10 border-[#087E8B]/40"
                            : "hover:bg-[#F8FAFC] border-transparent hover:border-[#E1E8F0]"
                        }`}
                      >
                        <h5 className={`text-[13px] font-bold transition-colors leading-tight mb-1 ${
                          pathname === item.href ? "text-[#087E8B]" : "text-[#0D2E40] group-hover:text-[#087E8B]"
                        }`}>
                          {item.name}
                        </h5>
                        <p className="text-[11.5px] text-[#64748B] leading-snug line-clamp-1">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className={`px-3.5 py-1.5 text-[13px] font-semibold rounded-full transition-all ${
                isPricingActive
                  ? "text-[#0E151B] bg-white shadow-xs font-bold"
                  : "text-[#475569] hover:text-[#0E151B] hover:bg-white/70"
              }`}
            >
              Pricing
            </Link>

            {/* Book a Demo */}
            <Link
              href="/book-a-demo"
              className={`px-3.5 py-1.5 text-[13px] font-semibold rounded-full transition-all ${
                isBookDemoActive
                  ? "text-[#0E151B] bg-white shadow-xs font-bold"
                  : "text-[#475569] hover:text-[#0E151B] hover:bg-white/70"
              }`}
            >
              Book a Demo
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`px-3.5 py-1.5 text-[13px] font-semibold rounded-full transition-all ${
                isAboutActive
                  ? "text-[#0E151B] bg-white shadow-xs font-bold"
                  : "text-[#475569] hover:text-[#0E151B] hover:bg-white/70"
              }`}
            >
              About
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/book-a-demo"
              className="ron-pill-dark text-xs sm:text-sm !py-2.5 !px-5"
            >
              <span>Book a Demo</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full text-[#0E151B] hover:bg-[#F1F5F4] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (NextSaaS Clean Drawer) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[70px] bg-white/95 backdrop-blur-xl z-40 overflow-y-auto px-6 py-8 border-t border-[#E2E8F0] animate-in fade-in duration-200">
          <div className="max-w-md mx-auto space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base font-semibold py-2.5 px-3 rounded-xl border-b transition-colors ${
                isOverviewActive
                  ? "text-[#087E8B] bg-[#087E8B]/10 font-bold border-transparent"
                  : "text-[#123B50] border-[#E2E8F0]/60 hover:text-[#087E8B]"
              }`}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() =>
                  setMobileDropdown(mobileDropdown === "product" ? null : "product")
                }
                className={`flex items-center justify-between w-full py-2.5 px-3 rounded-xl text-base font-semibold border-b transition-colors ${
                  isModuleActive
                    ? "text-[#087E8B] bg-[#087E8B]/10 font-bold border-transparent"
                    : "text-[#123B50] border-[#E2E8F0]/60 hover:text-[#087E8B]"
                }`}
              >
                <span>Modules &amp; Solutions</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileDropdown === "product" ? "rotate-180 text-[#087E8B]" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "product" && (
                <div className="pl-3 py-2 space-y-2 bg-[#F8FAFC] rounded-2xl my-2 border border-slate-100">
                  {PRODUCT_MODULES.map((mod) => (
                    <Link
                      key={mod.name}
                      href={mod.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-sm py-1.5 px-2 rounded-lg transition-colors ${
                        pathname === mod.href
                          ? "text-[#087E8B] font-bold bg-[#087E8B]/10"
                          : "text-[#263746] hover:text-[#087E8B]"
                      }`}
                    >
                      {mod.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() =>
                  setMobileDropdown(mobileDropdown === "industry" ? null : "industry")
                }
                className={`flex items-center justify-between w-full py-2.5 px-3 rounded-xl text-base font-semibold border-b transition-colors ${
                  isIndustryActive
                    ? "text-[#087E8B] bg-[#087E8B]/10 font-bold border-transparent"
                    : "text-[#123B50] border-[#E2E8F0]/60 hover:text-[#087E8B]"
                }`}
              >
                <span>Industry Solutions</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileDropdown === "industry" ? "rotate-180 text-[#087E8B]" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "industry" && (
                <div className="pl-3 py-2 space-y-2 bg-[#F8FAFC] rounded-2xl my-2 border border-slate-100">
                  {INDUSTRY_SOLUTIONS.map((ind) => (
                    <Link
                      key={ind.name}
                      href={ind.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-sm py-1.5 px-2 rounded-lg transition-colors ${
                        pathname === ind.href
                          ? "text-[#087E8B] font-bold bg-[#087E8B]/10"
                          : "text-[#263746] hover:text-[#087E8B]"
                      }`}
                    >
                      {ind.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base font-semibold py-2.5 px-3 rounded-xl border-b transition-colors ${
                isPricingActive
                  ? "text-[#087E8B] bg-[#087E8B]/10 font-bold border-transparent"
                  : "text-[#123B50] border-[#E2E8F0]/60 hover:text-[#087E8B]"
              }`}
            >
              Pricing &amp; Plans
            </Link>

            <Link
              href="/book-a-demo"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base font-semibold py-2.5 px-3 rounded-xl border-b transition-colors ${
                isBookDemoActive
                  ? "text-[#087E8B] bg-[#087E8B]/10 font-bold border-transparent"
                  : "text-[#123B50] border-[#E2E8F0]/60 hover:text-[#087E8B]"
              }`}
            >
              Book a Demo
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base font-semibold py-2.5 px-3 rounded-xl border-b transition-colors ${
                isAboutActive
                  ? "text-[#087E8B] bg-[#087E8B]/10 font-bold border-transparent"
                  : "text-[#123B50] border-[#E2E8F0]/60 hover:text-[#087E8B]"
              }`}
            >
              About Shenll
            </Link>

            <div className="pt-6 space-y-3">
              <Link
                href="/book-a-demo"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white bg-[#087E8B] rounded-full shadow-lg"
              >
                <span>Request a Free Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
