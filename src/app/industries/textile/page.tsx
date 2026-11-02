import type { Metadata } from "next";
import IndustryLayout from "@/components/IndustryLayout";

export const metadata: Metadata = {
  title: "Textile & Garment HRMS Software — Piece-Rate Wages & Mill Shift Management",
  description:
    "Tailored HRMS platform for Textile mills, Spinning units, and Garment factories by Shenll HRMS. Piece-rate wage calculation, biometric turnstiles, and export compliance.",
  alternates: {
    canonical: "https://shenllhrms.com/industries/textile",
  },
  openGraph: {
    title: "Textile & Garment HRMS Software | Shenll HRMS",
    description: "Piece-rate wages, spinning mill shifts, biometric gate attendance, and social compliance audits.",
    url: "https://shenllhrms.com/industries/textile",
  },
};

export default function TextilePage() {
  return (
    <IndustryLayout
      industryName="Textile & Apparel"
      badge="Textile Mills, Spinning & Garments"
      h1="HRMS & Piece-Rate Wage Software for Textile & Garments"
      tagline="Automate complex piece-rate and daily wage computations, manage multi-shift spinning mill attendance, and maintain flawless compliance for international buyer audits."
      industryChallenges={[
        {
          challenge: "Piece-Rate Wage vs Hourly Calculations",
          impact: "Garment tailors and sewing operators are paid per stitched garment piece, requiring tedious manual ticket reconciliation each week.",
          shenllSolution: "Dynamic piece-rate wage engine that calculates daily production outputs directly against operator codes.",
        },
        {
          challenge: "High Mill Worker Churn & Hostel Tracking",
          impact: "Spinning mills housing migrant workers in staff hostels face high turnover and frequent proxy sign-ins during shift rotations.",
          shenllSolution: "Turnstile biometric attendance with facial recognition linked to company hostel accommodation records.",
        },
        {
          challenge: "Social Audits & International Buyer Compliance",
          impact: "Export brands (Walmart, H&M, Inditex) demand rigorous proof of minimum wage payments, overtime limits, and no child labor.",
          shenllSolution: "Export-grade audit trail with verified age proof KYC, overtime caps, and digitally timestamped muster rolls.",
        },
      ]}
      tailoredSolutions={[
        {
          title: "Piece-Rate & Production Ticket Accounting",
          description: "Log daily garment production quantities per operator and calculate gross wages with statutory PF/ESI deductions.",
          features: [
            "Piece-rate style and operation code rate card configuration",
            "Barcode/ticket scanning for finished garment bundles",
            "Weekly or fortnightly piece-rate payout calculation",
          ],
        },
        {
          title: "Spinning Mill Rotational Shifts & Overtime",
          description: "Manage 3-shift 8-hour continuous operations with automated night shift allowances and statutory rest intervals.",
          features: [
            "Turnstile gate integration handling 500+ workers in 15 minutes",
            "Automatic night shift allowance computation",
            "Overtime hour threshold alerts compliant with the Factories Act",
          ],
        },
        {
          title: "Hostel & Migrant Worker Registry",
          description: "Maintain records of residential hostel room allocations, mess food deductions, and emergency family contact details.",
          features: [
            "Hostel room inventory and worker allocation records",
            "Mess fee deduction directly linked to monthly payroll",
            "Inter-State Migrant Workmen (ISMW) statutory registers",
          ],
        },
        {
          title: "Social Compliance & Age Verification Vault",
          description: "Store government photo IDs (Aadhaar, Voter ID) with automated birthdate validation to guarantee zero underage employment.",
          features: [
            "Strict age verification checkpoint during worker enrollment",
            "SMETA and WRAP social audit export reports",
            "Equal wage compliance registers for male and female operators",
          ],
        },
      ]}
      complianceHighlights={[
        "Factories Act 1948 mill working hour compliance",
        "WRAP, SMETA & BSCI international buyer audit documentation",
        "Inter-State Migrant Workmen Act statutory registers",
        "PF, ESI, and statutory bonus calculations for mill staff",
      ]}
      faqs={[
        {
          question: "Can Shenll HRMS calculate wages when an operator works on multiple garment styles in one day?",
          answer: "Yes. Operators can have multiple operations logged against different piece-rate values; Shenll HRMS consolidates all production units and calculates the exact gross wage.",
        },
        {
          question: "How does the software handle weekly wage disbursements instead of monthly salaries?",
          answer: "Shenll HRMS supports both weekly, fortnightly, and monthly payroll processing cycles with instant bank upload files or cash wage payout registers.",
        },
        {
          question: "Will this system help us during social compliance audits by international apparel buyers?",
          answer: "Yes. Shenll HRMS produces complete tamper-proof muster rolls, verified overtime calculation sheets, and age verification archives required by international auditors like SMETA and BSCI.",
        },
      ]}
    />
  );
}
