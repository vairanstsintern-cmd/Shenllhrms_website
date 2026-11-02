import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Shenll HRMS",
  description: "Privacy policy and employee data protection practices of Shenll HRMS and Shenll Technology Solutions Pvt Ltd.",
  alternates: { canonical: "https://shenllhrms.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-[#F4F7FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] shadow-sm">
        <h1 className="text-3xl font-bold text-[#123B50] mb-6">Privacy Policy</h1>
        <p className="text-xs text-[#64748B] mb-8">Last updated: October 2026</p>

        <div className="space-y-6 text-sm text-[#263746] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#123B50] mb-2">1. Introduction</h2>
            <p>
              Shenll Technology Solutions Pvt Ltd (&ldquo;Shenll HRMS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website https://shenllhrms.com and the Shenll HRMS web and mobile application suite. We are committed to safeguarding the privacy and security of personal and corporate employee information entrusted to us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#123B50] mb-2">2. Information We Collect</h2>
            <p>
              When organizations use Shenll HRMS, we process information on behalf of the customer (the Data Controller). This includes employee personal identification (name, contact details, blood group), employment records (designation, department, shift schedules), statutory identity credentials (PAN, Aadhaar, PF/ESI numbers where mandated by labor laws), attendance logs, and payroll calculations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#123B50] mb-2">3. Mobile App Location Data</h2>
            <p>
              Our mobile application requests access to location services exclusively to verify attendance check-in within designated organizational geo-fences. We do NOT track employee locations continuously throughout the day. Location coordinates are stamped momentarily only upon the explicit trigger of the attendance punch action.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#123B50] mb-2">4. Data Security & Storage</h2>
            <p>
              All customer data is encrypted in transit using Transport Layer Security (TLS 1.3) and encrypted at rest using AES-256 bit encryption. Access to sensitive payroll data is governed by strict role-based access controls (RBAC) and immutable system audit logs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#123B50] mb-2">5. Contact Information</h2>
            <p>
              For data privacy inquiries or requests regarding your personal records, please reach out to our grievance officer at:
            </p>
            <div className="p-4 bg-[#F4F7FA] rounded-xl mt-2 text-xs">
              <p className="font-bold text-[#123B50]">Shenll Technology Solutions Pvt Ltd</p>
              <p>Plot No.1069, Munusamy Salai, K.K Nagar, Chennai – 600 078, India.</p>
              <p>Email: <a href="mailto:info@shenllhrms.com" className="text-[#087E8B] font-semibold">info@shenllhrms.com</a></p>
              <p>Phone: +91-8122046761</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
