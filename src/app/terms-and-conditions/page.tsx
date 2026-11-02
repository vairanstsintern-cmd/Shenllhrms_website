import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — Shenll HRMS",
  description: "Terms and conditions governing the subscription and usage of Shenll HRMS software.",
  alternates: { canonical: "https://shenllhrms.com/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <div className="py-16 bg-[#F4F7FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] shadow-sm">
        <h1 className="text-3xl font-bold text-[#123B50] mb-6">Terms and Conditions</h1>
        <p className="text-xs text-[#64748B] mb-8">Last updated: October 2026</p>

        <div className="space-y-6 text-sm text-[#263746] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#123B50] mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Shenll HRMS SaaS platform, websites, or associated mobile applications, you agree to be bound by these Terms and Conditions on behalf of your subscribing organization.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#123B50] mb-2">2. Commercial Subscription & Active Employee Billing</h2>
            <p>
              Subscription fees are billed on a monthly or annual basis as designated in your service agreement. Basic Plan covers up to 100 active employees at ₹12,000/month. Professional Plan covers up to 250 active employees at ₹24,999/month. Additional active headcount is billed at the verified rate of ₹100 per active employee per month.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#123B50] mb-2">3. Customer Responsibilities</h2>
            <p>
              The subscribing organization is responsible for ensuring the accuracy of employee master data, statutory tax settings, and attendance policies configured within their tenant instance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#123B50] mb-2">4. Service Availability & Support</h2>
            <p>
              Shenll HRMS targets a 99.9% service uptime across cloud servers. Technical assistance and customer queries are handled through our dedicated helpline (+91-8122046761) and support ticketing channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
