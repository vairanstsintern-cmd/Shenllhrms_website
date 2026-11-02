import type { Metadata } from "next";
import IndustryLayout from "@/components/IndustryLayout";

export const metadata: Metadata = {
  title: "Healthcare & Hospital HRMS Software — 24/7 Shifts & Doctor Rosters",
  description:
    "Tailored HRMS platform for Hospitals, Clinics, and Healthcare networks by Shenll HRMS. 24/7 rotational nurse rosters, doctor consultation billing, and medical compliance.",
  alternates: {
    canonical: "https://shenllhrms.com/industries/healthcare",
  },
  openGraph: {
    title: "Healthcare & Hospital HRMS Software | Shenll HRMS",
    description: "Manage 24/7 hospital shifts, nursing rosters, doctor consultation fees, and NABH compliance.",
    url: "https://shenllhrms.com/industries/healthcare",
  },
};

export default function HealthcarePage() {
  return (
    <IndustryLayout
      industryName="Healthcare & Hospitals"
      badge="Hospitals, Nursing & Healthcare Networks"
      h1="HRMS & 24/7 Shift Roster Software for Hospitals & Clinics"
      tagline="Coordinate 24/7 clinical shifts, ensure nurse-to-patient staffing ratios, automate doctor consultation payouts, and maintain strict NABH healthcare compliance."
      industryChallenges={[
        {
          challenge: "Complex 24/7 Rotational Nursing Rosters",
          impact: "Unplanned nurse absenteeism in ICU or emergency wards endangers patient care and causes nurse burnout.",
          shenllSolution: "Shift roster management with automatic swap requests and emergency recall push notifications.",
        },
        {
          challenge: "Dual Payroll (Salaried Staff vs Visiting Consultants)",
          impact: "Managing full-time nursing payroll alongside visiting doctor consultation fees and surgery charges causes billing chaos.",
          shenllSolution: "Unified payroll engine supporting regular salaried staff and consultant professional fee billing with TDS Section 194J.",
        },
        {
          challenge: "NABH Audit & Credential Compliance",
          impact: "Inspections require immediate verification of nursing council registrations, doctor medical degrees, and immunization records.",
          shenllSolution: "Digital medical credential vault with automated expiry alerts and instant audit export packages.",
        },
      ]}
      tailoredSolutions={[
        {
          title: "Clinical Shift & ICU Roster Management",
          description: "Schedule day, evening, and night clinical shifts ensuring adequate ward staffing and mandatory rest periods.",
          features: [
            "Department-wise nurse-to-bed staffing ratio enforcement",
            "Emergency call-duty and on-call allowance calculation",
            "Automatic night shift differential allowances",
          ],
        },
        {
          title: "Doctor & Visiting Specialist Payouts",
          description: "Handle diverse compensation models: fixed monthly stipends, per-patient OPD fees, and surgical procedure fees.",
          features: [
            "194J Professional TDS calculation and deduction",
            "Detailed fee credit statement generation per consultant",
            "Direct corporate bank disbursement upload",
          ],
        },
        {
          title: "Medical License & Credentialing Vault",
          description: "Maintain verified records of State Medical Council registrations, nursing licenses, BLS/ACLS certifications, and vaccines.",
          features: [
            "Renewal reminder 90 days before medical license lapses",
            "NABH and JCI audit-ready staff file exports",
            "Hepatitis B and COVID immunization status tracking",
          ],
        },
        {
          title: "Biometric Touchless Facial Attendance",
          description: "Deploy hygienic facial recognition terminals outside ICUs and OT corridors to maintain clean clinical environments.",
          features: [
            "Masked face recognition capability",
            "Zero physical contact required, preventing hospital infections",
            "Real-time attendance feeds directly into monthly payroll",
          ],
        },
      ]}
      complianceHighlights={[
        "NABH (National Accreditation Board for Hospitals) HR standards",
        "Clinical Establishments (Registration and Regulation) Act",
        "Section 194J TDS compliance for medical consultants",
        "Statutory PF, ESI, and maternity benefits for hospital staff",
      ]}
      faqs={[
        {
          question: "Can Shenll HRMS manage visiting doctors who are paid per OPD consultation?",
          answer: "Yes. Shenll HRMS supports both regular salaried employees (with PF, ESI, and standard salary structures) and visiting doctors who receive professional fees subject to 10% TDS under Section 194J.",
        },
        {
          question: "How does the platform assist with NABH accreditation audits?",
          answer: "NABH requires documented staff training records, verified medical council certificates, and job descriptions for every hospital employee. Shenll HRMS produces complete digital staff dossiers for audit inspection in 1 click.",
        },
        {
          question: "Can nurses swap shifts with colleagues using the mobile app?",
          answer: "Yes. A nurse can request a shift exchange with an eligible colleague in the same department; upon the colleague's acceptance, the head nurse or matron receives a 1-tap approval notification on mobile.",
        },
      ]}
    />
  );
}
