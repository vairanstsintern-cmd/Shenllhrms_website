import type { Metadata } from "next";
import IndustryLayout from "@/components/IndustryLayout";

export const metadata: Metadata = {
  title: "Education & Institution HRMS Software — Faculty Leaves & Academic Payroll",
  description:
    "Specialized HRMS platform for Schools, Colleges, and Universities by Shenll HRMS. Manage faculty leave rules, vacation payroll, academic contracts, and UGC/AICTE compliance.",
  alternates: {
    canonical: "https://shenllhrms.com/industries/education",
  },
  openGraph: {
    title: "Education & Institution HRMS Software | Shenll HRMS",
    description: "Manage teaching faculty, vacation payroll cycles, research allowances, and institutional compliance.",
    url: "https://shenllhrms.com/industries/education",
  },
};

export default function EducationPage() {
  return (
    <IndustryLayout
      industryName="Education & Institutions"
      badge="Schools, Colleges & Universities"
      h1="HRMS & Academic Payroll Software for Educational Institutions"
      tagline="Unify teaching faculty and non-teaching staff administration. Configure summer/winter vacation leave rules, automate academic payroll, and stay compliant with AICTE/UGC standards."
      industryChallenges={[
        {
          challenge: "Dual Vacation & Regular Leave Rules",
          impact: "Teaching faculty adhere to semester academic calendars with vacation entitlements, while administrative staff work regular corporate year-round schedules.",
          shenllSolution: "Separate policy templates allowing distinct vacation leave rules for teaching staff vs non-teaching administrative employees.",
        },
        {
          challenge: "Adjunct Faculty & Guest Lecture Payouts",
          impact: "Calculating guest lecturer pay based on logged class hours and subject credits creates immense monthly administrative workload.",
          shenllSolution: "Direct hourly lecture session logging with automated fee calculations and statutory TDS withholding.",
        },
        {
          challenge: "NAAC, NBA & UGC Accreditation Audits",
          impact: "Gathering faculty qualifications, research publication records, and PhD completion documents for university audits takes weeks.",
          shenllSolution: "Comprehensive faculty credentials vault tracking degrees, research papers, and training programs ready for inspection.",
        },
      ]}
      tailoredSolutions={[
        {
          title: "Academic Calendar & Vacation Management",
          description: "Align leave accrual and public holidays with your institution's semester schedules, exam windows, and term breaks.",
          features: [
            "Faculty vacation leave entitlement configuration",
            "Exam duty and paper valuation allowance tracking",
            "Automatic adjustments for summer and winter breaks",
          ],
        },
        {
          title: "Multi-Department Academic Org Charts",
          description: "Represent university structures clearly: Deans, Department Heads (HODs), Professors, Assistant Professors, and Lab Technicians.",
          features: [
            "Departmental faculty hierarchy with 1-click directories",
            "HOD approval routing for conferences and casual leaves",
            "Tenure and sabbatical tracking per faculty member",
          ],
        },
        {
          title: "Faculty Research & Publication Vault",
          description: "Record journal publications, patent filings, research grants, and conference sponsorships linked to performance appraisals.",
          features: [
            "Research grant fund utilization tracking",
            "NAAC Criterion 2 & Criterion 6 compliance data exports",
            "API (Academic Performance Index) score calculations",
          ],
        },
        {
          title: "Biometric Campus & Gate Attendance",
          description: "Deploy biometric fingerprint or facial recognition scanners across campus gates, department libraries, and staff rooms.",
          features: [
            "Period-wise lecture attendance logging",
            "Campus geo-fencing for professors and field researchers",
            "Automated monthly attendance reports for university registrars",
          ],
        },
      ]}
      complianceHighlights={[
        "UGC (University Grants Commission) staff guidelines",
        "AICTE pay scale and qualification norm alignment",
        "NAAC and NBA faculty qualification audit compliance",
        "PF, Gratuity, and Group Insurance statutory deductions",
      ]}
      faqs={[
        {
          question: "Can Shenll HRMS manage both teaching and non-teaching staff differently?",
          answer: "Yes. Teaching faculty can be assigned academic calendars with semester breaks and vacation leaves, while non-teaching staff (librarians, IT support, admin) follow standard corporate leave policies.",
        },
        {
          question: "How does the system calculate pay for visiting guest lecturers?",
          answer: "Guest lecturers or visiting professors log their completed lecture periods; Shenll HRMS automatically multiplies the sessions by their agreed hourly rate and generates an itemized payout statement.",
        },
        {
          question: "Can we export faculty data for NAAC or NBA accreditation visits?",
          answer: "Yes. Shenll HRMS provides pre-formatted Excel and PDF exports containing faculty educational qualifications, years of experience, journal publications, and training programs.",
        },
      ]}
    />
  );
}
