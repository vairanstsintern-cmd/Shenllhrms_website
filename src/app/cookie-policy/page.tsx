import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ShieldCheck, Settings, Eye, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy — Shenll HRMS | User Consent & Preferences",
  description: "Learn how Shenll HRMS uses cookies and session storage technologies to maintain secure authentication and high-performance HR platform operations.",
  alternates: { canonical: "https://shenllhrms.com/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | Shenll HRMS",
    description: "Session storage, preference management, and cookie practices at Shenll HRMS.",
    url: "https://shenllhrms.com/cookie-policy",
    siteName: "Shenll HRMS",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="py-16 sm:py-24 bg-ron-canvas relative overflow-hidden">
      {/* Soft atmospheric glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-white/90 via-white/50 to-transparent pointer-events-none rounded-b-[48px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex mb-3">
            <span className="ron-badge-lime">
              <Cookie className="w-3.5 h-3.5 text-[#087E8B]" />
              Transparency &amp; Privacy
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0E151B] tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-3">
            Last Updated: November 2026 • Shenll Technology Solutions Pvt Ltd
          </p>
        </div>

        {/* Content Card */}
        <div className="ron-card p-8 sm:p-12 bg-white space-y-8 text-sm text-slate-700 leading-relaxed shadow-sm">
          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#EEF3F2] flex items-center justify-center text-[#087E8B]">
                <Cookie className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#0E151B]">1. What Are Cookies?</h2>
            </div>
            <p>
              Cookies are small text identifiers stored on your device when you browse <strong>https://shenllhrms.com</strong> or utilize the Shenll HRMS portal. They allow us to recognize your browser, verify active login tokens, preserve preferences, and maintain high page speeds.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#EEF3F2] flex items-center justify-center text-[#087E8B]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#0E151B]">2. Categories of Cookies We Use</h2>
            </div>
            <p className="mb-4">
              We maintain a minimal cookie footprint. Non-essential cookies are strictly optional:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#F4F7FA] border border-slate-200/80">
                <span className="font-bold text-[#0E151B] block mb-1">Strictly Essential</span>
                <p className="text-slate-600">Necessary for secure CSRF tokens, session integrity, and user authentication.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F4F7FA] border border-slate-200/80">
                <span className="font-bold text-[#0E151B] block mb-1">Functional &amp; UI</span>
                <p className="text-slate-600">Saves your cookie consent choices and theme preferences.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F4F7FA] border border-slate-200/80">
                <span className="font-bold text-[#0E151B] block mb-1">Performance Analytics</span>
                <p className="text-slate-600">Aggregated, anonymized statistics to measure page loading speeds.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F4F7FA] border border-slate-200/80">
                <span className="font-bold text-[#0E151B] block mb-1">No Third-Party Ad Trackers</span>
                <p className="text-slate-600">We do not sell data to advertising networks or third-party brokers.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#EEF3F2] flex items-center justify-center text-[#087E8B]">
                <Settings className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#0E151B]">3. Managing Your Preferences</h2>
            </div>
            <p>
              You can adjust or revoke your cookie choices anytime through our on-site Cookie Preferences banner or directly via your web browser settings. Disabling essential cookies may impair your ability to sign in to the administrative portal.
            </p>
          </section>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between text-xs text-slate-500">
            <Link href="/privacy-policy" className="hover:text-[#087E8B] font-medium transition-colors">
              Privacy Policy &rarr;
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#087E8B] font-medium transition-colors">
              Terms &amp; Conditions &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
