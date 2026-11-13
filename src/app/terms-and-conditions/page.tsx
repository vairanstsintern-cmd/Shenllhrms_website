import type { Metadata } from "next";
import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";

export const metadata: Metadata = {
  title: "Terms and Conditions — Shenll HRMS | Subscription & SLA Agreement",
  description: "Terms and conditions governing subscription, licensing, uptime SLAs, and usage of Shenll HRMS software by Shenll Technology Solutions Pvt Ltd.",
  alternates: { canonical: "https://shenllhrms.com/terms-and-conditions" },
  openGraph: {
    title: "Terms and Conditions | Shenll HRMS",
    description: "Subscription terms, active employee billing, and SLAs for Shenll HRMS platform.",
    url: "https://shenllhrms.com/terms-and-conditions",
    siteName: "Shenll HRMS",
  },
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-ron-canvas relative overflow-hidden">
      {/* Soft atmospheric glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-white/90 via-white/50 to-transparent pointer-events-none rounded-b-[48px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex mb-3">
            <span className="ron-badge-lime">
              Commercial &amp; Subscription Terms
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0E151B] tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-3">
            Last updated: November 2026 • Shenll Technology Solutions Pvt Ltd
          </p>
        </div>

        {/* Content Card */}
        <div className="ron-card p-8 sm:p-12 bg-white space-y-8 text-sm text-slate-700 leading-relaxed shadow-sm">
          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#EEF3F2] flex items-center justify-center text-[#087E8B]">
                <MaterialIcon name="description" size={18} />
              </div>
              <h2 className="text-lg font-bold text-[#0E151B]">1. Agreement to Terms</h2>
            </div>
            <p>
              By accessing, deploying, or utilizing the Shenll HRMS SaaS platform, mobile applications, or hardware bridges, you agree to be bound by these Terms and Conditions on behalf of your subscribing corporate entity.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#EEF3F2] flex items-center justify-center text-[#087E8B]">
                <MaterialIcon name="check_circle" size={18} />
              </div>
              <h2 className="text-lg font-bold text-[#0E151B]">2. Commercial Plans &amp; Active Headcount Billing</h2>
            </div>
            <p className="mb-3">
              Subscription tiers are billed transparently with zero setup or hidden implementation fees:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm pl-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B] mt-2" />
                <span><strong>Basic Plan:</strong> ₹12,000/month covers up to 100 active employees (approx. ₹4/day/user).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B] mt-2" />
                <span><strong>Professional Plan:</strong> ₹24,999/month covers up to 250 active employees.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B] mt-2" />
                <span><strong>Incremental Active Headcount:</strong> Billed at ₹100 per active employee per month beyond base tier.</span>
              </li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#EEF3F2] flex items-center justify-center text-[#087E8B]">
                <MaterialIcon name="verified_user" size={18} />
              </div>
              <h2 className="text-lg font-bold text-[#0E151B]">3. Customer Obligations &amp; Data Accuracy</h2>
            </div>
            <p>
              The subscribing organization is responsible for maintaining accurate employee records, verifying shift rules, ensuring statutory wage formulas (PF, ESI, PT, and TDS) comply with applicable state labor notifications, and managing admin account credentials.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#EEF3F2] flex items-center justify-center text-[#087E8B]">
                <MaterialIcon name="description" size={18} />
              </div>
              <h2 className="text-lg font-bold text-[#0E151B]">4. Service Level Agreement (SLA) &amp; Support</h2>
            </div>
            <p>
              Shenll HRMS guarantees 99.9% monthly cloud infrastructure availability, excluding scheduled maintenance windows announced at least 48 hours in advance. Dedicated phone and ticket support is available via <strong>+91-8122046761</strong> and <strong>info@shenllhrms.com</strong>.
            </p>
          </section>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between text-xs text-slate-500">
            <Link href="/privacy-policy" className="hover:text-[#087E8B] font-medium transition-colors">
              Privacy Policy &rarr;
            </Link>
            <Link href="/cookie-policy" className="hover:text-[#087E8B] font-medium transition-colors">
              Cookie Policy &rarr;
            </Link>
            <Link href="/pricing" className="hover:text-[#087E8B] font-medium transition-colors">
              Pricing Details &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
