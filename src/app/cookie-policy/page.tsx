import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ShieldCheck, Settings, Eye, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy — Shenll HRMS",
  description: "Learn how Shenll HRMS uses cookies and tracking technologies to ensure reliable performance, session security, and a seamless HR management experience.",
  alternates: { canonical: "https://shenllhrms.com/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="py-20 sm:py-24 bg-[#F4F7FA] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#087E8B]/10 via-[#19B5A5]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center mb-12">
          <div className="nextsaas-badge mb-3">
            <Cookie className="w-3.5 h-3.5 text-[#087E8B]" />
            <span>Transparency &amp; Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#123B50] tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] mt-3">
            Last Updated: November 2026 • Shenll Technology Solutions Pvt Ltd
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-[28px] p-8 sm:p-12 border border-slate-200/90 shadow-[0_15px_40px_-15px_rgba(14,21,27,0.06)] space-y-8 text-sm text-[#334155] leading-relaxed">
          
          {/* Section 1: Introduction */}
          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#087E8B]/10 flex items-center justify-center text-[#087E8B]">
                <Cookie className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#123B50]">1. What Are Cookies?</h2>
            </div>
            <p>
              Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit our website (<strong>https://shenllhrms.com</strong>) or use the Shenll HRMS web portal. They enable our system to remember your secure session, language preferences, and device characteristics to deliver a seamless, high-speed human resources management experience.
            </p>
          </section>

          {/* Section 2: How Shenll HRMS Uses Cookies */}
          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center text-[#087E8B]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#123B50]">2. Categories of Cookies We Use</h2>
            </div>
            <p className="mb-4">
              We classify cookies into four distinct types. Non-essential cookies are completely optional, and your consent is non-mandatory.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm text-[#123B50]">Essential Cookies</h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">Mandatory</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Required for user authentication, CSRF token security, role-based tenant routing, and session state persistence. These cannot be disabled.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm text-[#123B50]">Functional Cookies</h3>
                  <span className="text-[10px] font-bold text-[#087E8B] bg-[#087E8B]/10 px-2 py-0.5 rounded-full">Optional</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Remembers your display preferences, sidebar collapses, active module filters, and customized dashboard widgets.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm text-[#123B50]">Analytics &amp; Performance</h3>
                  <span className="text-[10px] font-bold text-[#087E8B] bg-[#087E8B]/10 px-2 py-0.5 rounded-full">Optional</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Helps us understand page response times, navigation patterns, and feature adoption to optimize application speed. All telemetry is aggregated and anonymized.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm text-[#123B50]">Marketing &amp; Demo Cookies</h3>
                  <span className="text-[10px] font-bold text-[#087E8B] bg-[#087E8B]/10 px-2 py-0.5 rounded-full">Optional</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Allows us to track personalized demo request inquiries, book consultation scheduling, and evaluate marketing campaign efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Third-Party Services */}
          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Eye className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#123B50]">3. Third-Party Integrations</h2>
            </div>
            <p>
              When navigating Shenll HRMS, you may encounter embedded services such as Google Fonts, cloud hosting infrastructure, and analytics engines. These service providers may place temporary cookies subject to their independent privacy standards. Shenll HRMS does not monetize or sell your telemetry data to advertising networks.
            </p>
          </section>

          {/* Section 4: Your Rights & Managing Cookies */}
          <section>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Settings className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#123B50]">4. How You Can Control Cookies</h2>
            </div>
            <p className="mb-2">
              Cookie consent on Shenll HRMS is entirely voluntary and non-mandatory. You can manage your preferences at any time:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-600 pl-2">
              <li><strong>Interactive Cookie Banner:</strong> Click &ldquo;Accept All&rdquo;, &ldquo;Decline Non-Essential&rdquo;, or configure granular category toggles when prompted.</li>
              <li><strong>Browser Settings:</strong> You can configure your browser (Chrome, Safari, Edge, Firefox) to block or delete cookies automatically.</li>
              <li><strong>Incognito Mode:</strong> Browsing in Private/Incognito windows ensures cookies are cleared immediately upon closing your browser session.</li>
            </ul>
          </section>

          {/* Section 5: Grievance & Contact */}
          <section className="pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                <FileText className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-[#123B50]">5. Questions &amp; Support</h2>
            </div>
            <p className="text-xs text-slate-500">
              If you have any questions regarding our use of cookies or privacy practices, please contact our data governance team at:
            </p>
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 mt-3 text-xs space-y-1">
              <p className="font-bold text-[#123B50]">Shenll Technology Solutions Pvt Ltd</p>
              <p className="text-slate-600">Plot No.1069, Munusamy Salai, K.K Nagar, Chennai – 600 078, Tamil Nadu, India.</p>
              <p>Email: <a href="mailto:info@shenllhrms.com" className="text-[#087E8B] font-bold hover:underline">info@shenllhrms.com</a></p>
              <p className="text-slate-600">Phone: +91-8122046761</p>
            </div>
          </section>

          {/* Back to Home CTA */}
          <div className="pt-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#123B50] hover:bg-[#087E8B] text-white text-xs font-bold transition-all shadow-sm"
            >
              <span>Return to Shenll HRMS Home</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
