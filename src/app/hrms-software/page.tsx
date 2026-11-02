import type { Metadata } from "next";
import ProductLandingLayout from "@/components/ProductLandingLayout";

export const metadata: Metadata = {
  title: "HRMS Software — Enterprise Workforce & HR Management Platform",
  description:
    "End-to-end cloud HRMS software by Shenll HRMS. Unify employee databases, automated payroll, biometric attendance, leaves, and AI workforce insights.",
  alternates: {
    canonical: "https://shenllhrms.com/hrms-software",
  },
  openGraph: {
    title: "HRMS Software — Complete HR Management Suite | Shenll HRMS",
    description: "Automate workforce administration, attendance tracking, and 100% compliant payroll processing.",
    url: "https://shenllhrms.com/hrms-software",
  },
};

export default function HrmsSoftwarePage() {
  return (
    <ProductLandingLayout
      badge="Enterprise HRMS Platform"
      h1="Modern, Unified HRMS Software for Growing Enterprises"
      tagline="Centralize all employee lifecycle operations, automate everyday HR administration, and eliminate fragmented spreadsheets with Shenll HRMS."
      overviewHeading="Connected HR Architecture Across Entire Employee Lifecycles"
      overviewDescription="Shenll HRMS connects every facet of human resource operations. From candidate onboarding and shift rostering to 1-click statutory payroll and offboarding, employee records remain synchronized across both web and native mobile apps."
      keyFeatures={[
        {
          title: "Complete Digital Employee Vault",
          description: "Maintain comprehensive digital employee profiles with document vaults, bank account verification, education records, and job history.",
          bulletPoints: ["Aadhaar, PAN & Bank verification", "Emergency contacts & blood group registry", "Customizable company document templates"],
        },
        {
          title: "Configurable Approval Hierarchies",
          description: "Define multi-level managerial approval matrices for leaves, expense claims, attendance regularization, and shift adjustments.",
          bulletPoints: ["Reporting manager auto-routing", "Email, SMS & WhatsApp push alerts", "Delegation of authority during manager absence"],
        },
        {
          title: "Real-time Organization Charts",
          description: "Interactive org charts representing company hierarchy, departments, teams, and reporting lines with 1-click team directory search.",
          bulletPoints: ["Visual multi-branch hierarchies", "Departmental headcount tracking", "Direct manager contact shortcut"],
        },
        {
          title: "Role-Based Security & Permissions",
          description: "Granular access controls ensuring strict segregation of duties between HR admins, finance teams, managers, and general employees.",
          bulletPoints: ["Custom permission profiles", "Sensitive salary data masking", "Immutable audit action logs"],
        },
        {
          title: "Automated Lifecycle Transitions",
          description: "Automate employee milestone tracking including probationary evaluations, contract renewals, work anniversaries, and exit clearances.",
          bulletPoints: ["Probation completion alerts", "Digital exit interviews & asset handovers", "Automatic full-and-final settlement trigger"],
        },
        {
          title: "Comprehensive HR Analytics & Reports",
          description: "Export high-resolution MIS reports on workforce attrition, demographic distribution, attendance ratios, and departmental costs.",
          bulletPoints: ["1-click Excel & PDF export", "Custom report builder with filters", "Scheduled automated email delivery"],
        },
      ]}
      businessBenefits={[
        {
          metric: "80%",
          title: "Reduction in Administrative HR Tasks",
          description: "Empower staff with self-service leave requests, payslip access, and profile updates, freeing HR leaders to focus on talent growth.",
        },
        {
          metric: "100%",
          title: "Single Source of Workforce Truth",
          description: "Eliminate conflicting Excel spreadsheets, duplicated employee records, and communication gaps between departments.",
        },
        {
          metric: "0 Risk",
          title: "Data Leakage & Audit Compliance",
          description: "Bank-grade 256-bit encryption ensures sensitive staff information and financial records remain confidential and tamper-proof.",
        },
      ]}
      workflowSteps={[
        {
          step: "01",
          title: "Employee Profile Creation",
          description: "HR imports or inputs candidate credentials, assigns department, designation, and default shift roster.",
        },
        {
          step: "02",
          title: "Self-Service Access",
          description: "Employee receives welcome email with login credentials for web portal and iOS/Android mobile apps.",
        },
        {
          step: "03",
          title: "Day-to-Day Operations",
          description: "Employee punches attendance, logs work hours, and requests leaves with instant multi-tier managerial notifications.",
        },
        {
          step: "04",
          title: "Automated Monthly Sync",
          description: "Approved leaves and attendance logs flow automatically into the payroll processing engine without manual re-entry.",
        },
      ]}
      faqs={[
        {
          question: "Can we migrate our existing employee database into Shenll HRMS?",
          answer: "Yes. Our implementation team provides pre-formatted Excel/CSV migration templates and manages the entire initial import of your staff records, past leave balances, and salary components at zero extra charge.",
        },
        {
          question: "Does Shenll HRMS support multi-company or multi-branch setups?",
          answer: "Yes. You can manage multiple legal entities, branch offices, and factories under a single master tenant with separate shift policies and statutory tax registrations.",
        },
        {
          question: "How secure is employee data stored on Shenll HRMS?",
          answer: "All data is hosted on enterprise cloud infrastructure with TLS 1.3 in-transit encryption, AES-256 data-at-rest encryption, automated daily backups, and stringent role-based access controls.",
        },
      ]}
      relatedModules={[
        {
          title: "Payroll Software",
          href: "/payroll-software",
          description: "Automated 1-click Indian payroll with PF, ESI, TDS, and direct bank transfers.",
        },
        {
          title: "Attendance Management",
          href: "/attendance-management-software",
          description: "Biometric turnstile sync and GPS geo-fenced mobile punching.",
        },
        {
          title: "AI HRMS Features",
          href: "/ai-hrms",
          description: "Predictive attrition insights and natural language HR report queries.",
        },
      ]}
    />
  );
}
