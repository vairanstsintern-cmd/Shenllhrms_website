import type { Metadata } from "next";
import ProductLandingLayout from "@/components/ProductLandingLayout";

export const metadata: Metadata = {
  title: "Employee Management Software — Centralized Records & Digital Profiles",
  description:
    "Comprehensive employee database and lifecycle management by Shenll HRMS. Manage employee profiles, digital document vaults, org charts, and assets.",
  alternates: {
    canonical: "https://shenllhrms.com/employee-management-software",
  },
  openGraph: {
    title: "Employee Management Software — Centralized Digital Database | Shenll HRMS",
    description: "Manage employee lifecycles from onboarding to exit with automated document vaults and asset management.",
    url: "https://shenllhrms.com/employee-management-software",
  },
};

export default function EmployeeManagementPage() {
  return (
    <ProductLandingLayout
      badge="Core HR & Workforce Database"
      h1="Secure, Centralized Employee Record & Lifecycle Management"
      tagline="Consolidate scattered employee files into a single, compliant cloud database. Maintain digital KYC profiles, organizational charts, asset vaults, and automated lifecycle milestones."
      overviewHeading="One Unified Source of Truth for Your Entire Workforce"
      overviewDescription="Eliminate paper filing cabinets and scattered folders. Shenll HRMS provides every employee with a comprehensive digital profile, keeping personal details, emergency contacts, statutory identity documents, bank accounts, and asset assignments synchronized in one secure place."
      keyFeatures={[
        {
          title: "Complete Digital KYC & Document Vault",
          description: "Securely store resumes, signed offer letters, educational degrees, PAN, Aadhaar, and passport scans with expiration tracking.",
          bulletPoints: ["Encrypted document storage per employee", "Document expiry alerts (passports, visas)", "Self-service document upload requests"],
        },
        {
          title: "Company Asset Management & Handover",
          description: "Track laptops, phones, monitors, vehicles, and access cards allocated to employees throughout their tenure.",
          bulletPoints: ["Asset serial numbers & warranty dates", "Digital acknowledgment signatures", "Auto-clearance checklist during offboarding"],
        },
        {
          title: "Interactive Organizational Directory",
          description: "Visual hierarchy showing departmental structures, reporting managers, peers, and internal extension directories.",
          bulletPoints: ["Dynamic reporting line visualization", "Filter by department, location or role", "1-click Slack/Email contact shortcut"],
        },
        {
          title: "Employee Self-Service (ESS) Portal",
          description: "Allow employees to update residential addresses, emergency contacts, and personal information with admin approval verification.",
          bulletPoints: ["Reduces HR administrative back-and-forth", "Mobile and web accessible", "Audit log of all profile edits"],
        },
        {
          title: "Milestone & Lifecycle Notifications",
          description: "Never miss an employee birthday, work anniversary, probationary confirmation date, or upcoming contract expiry.",
          bulletPoints: ["Automated company-wide celebratory posts", "Manager reminder before probation ends", "Contract renewal countdown alerts"],
        },
        {
          title: "Standardized Exit Clearance (No Dues)",
          description: "Multi-department digital clearance workflow across IT, Admin, Finance, and HR before generating final relieving letters.",
          bulletPoints: ["Asset recovery checklists", "Online exit interview questionnaires", "1-click experience letter generation"],
        },
      ]}
      businessBenefits={[
        {
          metric: "100%",
          title: "Paperless HR File Management",
          description: "Replace physical employee cabinets with cloud-encrypted vaults accessible securely from any device.",
        },
        {
          metric: "Zero",
          title: "Unreturned Company Assets",
          description: "Accurately track every piece of IT hardware assigned to employees, ensuring full recovery before final settlement.",
        },
        {
          metric: "Instant",
          title: "Audit & Labor Law Readiness",
          description: "Pull statutory employee registers, KYC documents, and proof of address instantly during compliance inspections.",
        },
      ]}
      workflowSteps={[
        {
          step: "01",
          title: "Candidate to Employee",
          description: "New hire information seamlessly transfers from recruitment into the core database upon offer acceptance.",
        },
        {
          step: "02",
          title: "Document Verification",
          description: "Employee uploads KYC and bank details; HR admin verifies documents and issues welcome credentials.",
        },
        {
          step: "03",
          title: "Asset Allocation",
          description: "IT logs assigned laptop serial numbers; employee signs digital receipt on the mobile application.",
        },
        {
          step: "04",
          title: "Continuous Tracking",
          description: "Promotions, salary increments, appraisals, and shift reassignments are logged in the historical timeline.",
        },
      ]}
      faqs={[
        {
          question: "Can employees edit their salary details in the ESS portal?",
          answer: "No. Sensitive financial data such as CTC, base salary, and bank account numbers can only be viewed or modified by authorized HR and Payroll administrators under strict permission controls.",
        },
        {
          question: "Does Shenll HRMS support custom profile fields?",
          answer: "Yes. You can add custom fields such as blood group, uniform size, branch territory, medical insurance policy number, or specific certifications with just a few clicks.",
        },
        {
          question: "Can we track both full-time employees and contractual consultants?",
          answer: "Yes. Shenll HRMS allows you to classify workers under various employment types including Full-time, Probation, Intern, Contract, and Consultant with dedicated agreement terms.",
        },
      ]}
      relatedModules={[
        {
          title: "HRMS Software",
          href: "/hrms-software",
          description: "Overview of the complete integrated HRMS management ecosystem.",
        },
        {
          title: "Payroll Software",
          href: "/payroll-software",
          description: "Direct sync between employee salary structures and monthly bank payouts.",
        },
        {
          title: "Performance Management",
          href: "/performance-management-software",
          description: "Track employee KPI goals and appraisal ratings over time.",
        },
      ]}
    />
  );
}
