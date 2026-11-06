"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#090E13] text-white pt-20 pb-12 border-t border-slate-800/80 overflow-hidden">
      {/* Soft Ambient Background Mesh Highlights */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Pre-Footer Banner Card — RonDesign Card */}
        <div className="mb-16 p-8 sm:p-12 rounded-[32px] bg-gradient-to-r from-[#121A21] via-[#16232D] to-[#0E151B] border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/20 border border-[#087E8B]/40 text-xs font-semibold text-[#19B5A5] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#19B5A5] animate-pulse"></span>
              Fast-Track Implementation
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Ready to automate your Indian HR &amp; payroll?
            </h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Join 99+ modern Indian organizations transitioning to automated payroll, biometric punch sync, and AI workforce planning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <Link
              href="/book-a-demo"
              className="ron-pill-dark !bg-white !text-[#0E151B] hover:!bg-slate-100 !py-3.5 !px-7 text-sm w-full sm:w-auto text-center font-bold"
            >
              <span>Book a Live Demo</span>
              <div className="w-5 h-5 rounded-full bg-[#0E151B] text-white flex items-center justify-center">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800/80">
          {/* Brand & Bio Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block group">
              <div className="relative w-[180px] h-[45px] transition-transform group-hover:scale-102">
                <Image
                  src="/footer-hrms-logo.svg"
                  alt="Shenll HRMS"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              Shenll HRMS is an enterprise-grade cloud workforce &amp; statutory payroll automation suite built for modern Indian businesses. Zero errors, biometric device API sync, and predictive AI insights.
            </p>

            {/* App Store Download Badges */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                Download Mobile Self-Service Apps
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://play.google.com/store/apps/details?id=com.sts.stshrms&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-slate-800 hover:border-slate-700 rounded-2xl px-4 py-2.5 text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
                >
                  <Image
                    src="/google-play-brand.svg"
                    alt="Google Play"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <div className="text-left">
                    <p className="text-[9px] uppercase text-slate-400 leading-none">GET IT ON</p>
                    <p className="text-xs font-bold leading-tight mt-0.5">Google Play</p>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com/ie/app/shenll-hrms/id6757430801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-slate-800 hover:border-slate-700 rounded-2xl px-4 py-2.5 text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
                >
                  <Image
                    src="/apple-brand.svg"
                    alt="Apple App Store"
                    width={18}
                    height={18}
                    className="brightness-0 invert object-contain"
                  />
                  <div className="text-left">
                    <p className="text-[9px] uppercase text-slate-400 leading-none">Download on</p>
                    <p className="text-xs font-bold leading-tight mt-0.5">App Store</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                Follow Shenll HRMS
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.linkedin.com/company/shenll-technology-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shenll HRMS on LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0077B5] border border-slate-800 hover:border-[#0077B5] text-slate-400 hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.94H5.06v8.56z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@shenllhrms"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shenll HRMS on YouTube"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#FF0000] border border-slate-800 hover:border-[#FF0000] text-slate-400 hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/shenll"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shenll HRMS on Instagram"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#E4405F] border border-slate-800 hover:border-[#E4405F] text-slate-400 hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>

                <a
                  href="https://x.com/shenll"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shenll HRMS on X / Twitter"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-black border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/shenll"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shenll HRMS on Facebook"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1877F2] border border-slate-800 hover:border-[#1877F2] text-slate-400 hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* HRMS Modules Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Core Modules
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/employee-management-software" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Core Employee Database</span>
                </Link>
              </li>
              <li>
                <Link href="/payroll-software" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Indian Statutory Payroll</span>
                </Link>
              </li>
              <li>
                <Link href="/attendance-management-software" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Biometric Punch Sync</span>
                </Link>
              </li>
              <li>
                <Link href="/leave-management-software" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Leave Workflows &amp; Holiday</span>
                </Link>
              </li>
              <li>
                <Link href="/recruitment-software" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Recruitment &amp; ATS</span>
                </Link>
              </li>
              <li>
                <Link href="/performance-management-software" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Appraisals &amp; OKRs</span>
                </Link>
              </li>
              <li>
                <Link href="/project-management" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Project Timesheets</span>
                </Link>
              </li>
              <li>
                <Link href="/expense-management" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Travel &amp; Expense Claims</span>
                </Link>
              </li>
              <li>
                <Link href="/ai-hrms" className="text-[#19B5A5] font-bold hover:underline flex items-center gap-1.5 mt-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Predictive Engine</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry Playbooks Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Industry Verticals
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/industries/manufacturing" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Manufacturing &amp; Factories</span>
                </Link>
              </li>
              <li>
                <Link href="/industries/information-technology" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">IT &amp; Software Companies</span>
                </Link>
              </li>
              <li>
                <Link href="/industries/engineering" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Engineering &amp; EPC</span>
                </Link>
              </li>
              <li>
                <Link href="/industries/construction" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Construction Sites</span>
                </Link>
              </li>
              <li>
                <Link href="/industries/logistics" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Logistics &amp; Transport</span>
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Hospitals &amp; Healthcare</span>
                </Link>
              </li>
              <li>
                <Link href="/industries/professional-services" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Professional Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* HQ Location & Contact Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Chennai Head Office
            </h4>
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#19B5A5] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Plot No.1069, Munusamy Salai, K.K Nagar, Chennai – 600 078, Tamil Nadu, India.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#19B5A5] flex-shrink-0" />
                <a href="tel:+918122046761" className="hover:text-white transition-colors font-bold text-slate-200">
                  +91-8122046761
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#19B5A5] flex-shrink-0" />
                <a href="mailto:info@shenllhrms.com" className="hover:text-white transition-colors font-semibold text-slate-200">
                  info@shenllhrms.com
                </a>
              </div>

              <div className="pt-2">
                <div className="p-3 rounded-2xl bg-white/5 border border-slate-800">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-400 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Support Desk Status: Active
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Dedicated onboarding specialist and 48-hour data go-live support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Verification Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Shenll Technology Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/pricing" className="hover:text-slate-300 transition-colors">
              Pricing Transparency
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
