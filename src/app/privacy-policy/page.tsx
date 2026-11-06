import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, ArrowRight, Lock, Eye, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Shenll HRMS | Enterprise Data Protection",
  description: "Privacy policy and employee data protection practices of Shenll HRMS and Shenll Technology Solutions Pvt Ltd. ISO-grade data encryption and zero location tracking.",
  alternates: { canonical: "https://shenllhrms.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Shenll HRMS",
    description: "Employee data privacy and cloud security practices at Shenll Technology Solutions Pvt Ltd.",
    url: "https://shenllhrms.com/privacy-policy",
    siteName: "Shenll HRMS",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-24 bg-ron-canvas relative overflow-hidden">
      {/* Soft atmospheric glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-white/90 via-white/50 to-transparent pointer-events-none rounded-b-[48px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex mb-3">
            <span className="ron-badge-lime">
              <ShieldCheck className="w-3.5 h-3.5 text-[#087E8B]" />
              Enterprise Data Safeguards
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0E151B] tracking-tight">
            Privacy Policy
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
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#0E151B]">1. Introduction &amp; Scope</h2>
            </div>
            <p>
              Shenll Technology Solutions Pvt Ltd (&ldquo;Shenll HRMS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website <strong>https://shenllhrms.com</strong> and the Shenll HRMS cloud portal and mobile application suite. We are committed to safeguarding corporate workforce records, employee privacy, and statutory identification data entrusted to our systems.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#EEF3F2] flex items-center justify-center text-[#087E8B]">
                <Eye className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#0E151B]">2. Information We Process</h2>
            </div>
            <p>
              When organizations use Shenll HRMS, we process data on behalf of the customer (the Data Controller). This encompasses employee master records (name, official email, phone, designation, department, work shift), statutory numbers required for payroll compliance (PAN, Aadhaar, PF UAN, ESIC credentials), attendance punch logs, and salary calculations.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#EEF3F2] flex items-center justify-center text-[#087E8B]">
                <MapPin className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#0E151B]">3. Mobile App Location Data &amp; Geo-Fencing</h2>
            </div>
            <p>
              Our mobile apps request location permissions solely to validate punch-in events against organizational geo-fences (e.g., registered office or verified client work site). <strong>We do NOT track or store continuous background location data.</strong> Coordinates are verified only at the exact instant an employee clocks in or out.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#EEF3F2] flex items-center justify-center text-[#087E8B]">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#0E151B]">4. Security, Encryption &amp; Storage</h2>
            </div>
            <p>
              All customer data is encrypted in transit using TLS 1.3 protocol and encrypted at rest utilizing AES-256 bit algorithms. Access to sensitive payroll data is protected through multi-factor authentication, granular Role-Based Access Controls (RBAC), and immutable audit logs.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#EEF3F2] flex items-center justify-center text-[#087E8B]">
                <Mail className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#0E151B]">5. Grievance Redressal &amp; Contact</h2>
            </div>
            <p className="mb-4">
              For privacy-related inquiries, data access requests, or to exercise data rights, contact our Data Protection Officer:
            </p>
            <div className="p-5 rounded-2xl bg-[#F4F7FA] border border-slate-200/80 space-y-1.5 text-xs text-slate-700">
              <p className="font-bold text-[#0E151B] text-sm">Shenll Technology Solutions Pvt Ltd</p>
              <p>Plot No.1069, Munusamy Salai, K.K Nagar, Chennai – 600 078, Tamil Nadu, India.</p>
              <p>
                Email:{" "}
                <a href="mailto:info@shenllhrms.com" className="text-[#087E8B] font-bold hover:underline">
                  info@shenllhrms.com
                </a>
              </p>
              <p>Phone: +91-8122046761</p>
            </div>
          </section>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between text-xs text-slate-500">
            <Link href="/terms-and-conditions" className="hover:text-[#087E8B] font-medium transition-colors">
              Terms &amp; Conditions &rarr;
            </Link>
            <Link href="/cookie-policy" className="hover:text-[#087E8B] font-medium transition-colors">
              Cookie Policy &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
