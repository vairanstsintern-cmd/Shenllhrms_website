import type { Metadata } from "next";
import ProductLandingLayout from "@/components/ProductLandingLayout";

export const metadata: Metadata = {
  title: "Client Resume Builder — Tailor Employee Profiles for Client Proposals | Shenll HRMS",
  description:
    "Build client-specific resumes from existing employee profiles, skills, and projects without retyping. Reusable master libraries, versioned templates, and formatted PDF/Word export.",
  alternates: {
    canonical: "https://shenllhrms.com/resume-builder",
  },
  openGraph: {
    title: "Client Resume Builder — Shenll HRMS",
    description: "Take an employee's existing profile, tailor it to one client's requirement, and download a formatted resume — without retyping or reformatting anything.",
    url: "https://shenllhrms.com/resume-builder",
  },
};

export default function ResumeBuilderPage() {
  return (
    <ProductLandingLayout
      badge="Resume Builder"
      h1="Client-Specific Resume Builder for IT & Professional Services"
      tagline="Take an employee's existing profile, tailor it to one client's requirement, and download a formatted resume — without retyping or reformatting anything."
      liveAppUrl="https://resume-builder-naveenshenlls-projects.vercel.app/resumes"
      liveAppLabel="Launch Live App"
      overviewHeading="Tailor Resumes for Client Deployments Without Touching the Employee Master"
      overviewDescription="IT services, staffing firms, and consulting organizations waste hundreds of hours manually copy-pasting employee data into customized Word documents for client proposals and RFP bids. Shenll Resume Builder connects directly with your central HRMS records, isolates client versions, curates master skill libraries, and locks approved templates with 1-click PDF/Word export."
      keyFeatures={[
        {
          title: "Client-Specific Resumes",
          description: "Each resume holds its own copy of the profile, so editing one never touches the employee master or another client's version.",
          bulletPoints: [
            "Isolated profile copies per client or RFP",
            "Zero risk of mutating central employee master records",
            "Independent role highlights and project scopes",
          ],
        },
        {
          title: "Reusable Master Libraries",
          description: "Skills, projects and summary blocks are curated once, then pulled into any resume.",
          bulletPoints: [
            "Central repository of verified technical skills",
            "Standardized client project summaries & tech stacks",
            "Pre-approved executive bios and role achievements",
          ],
        },
        {
          title: "Versioned Templates",
          description: "A resume stays locked to the template version it was approved under, even after a newer one is activated.",
          bulletPoints: [
            "Strict template version lock for approved client bids",
            "Backward-compatible rendering across corporate redesigns",
            "Standardized corporate typography and brand headers",
          ],
        },
        {
          title: "1-Click Profile Ingestion",
          description: "Pull verified employee credentials, total tenure, designation history, certifications, and educational degrees directly from Shenll HRMS Core Master.",
          bulletPoints: [
            "Instant import from Core Employee Master",
            "Pre-populated candidate data from ATS pipeline",
            "Zero duplicate data re-entry across systems",
          ],
        },
        {
          title: "Formatted PDF & Word (DOCX) Export",
          description: "Export print-ready PDF resumes or editable Microsoft Word documents with company branding, headers, and confidential watermarks.",
          bulletPoints: [
            "Print-ready PDF generation with perfect page breaks",
            "Editable Microsoft Word (.docx) export for client portals",
            "Automatic company logo and contact header formatting",
          ],
        },
        {
          title: "Client Privacy & Anonymized Masking",
          description: "Generate blind or anonymized resumes for initial client screening by masking contact numbers, email addresses, and candidate surnames.",
          bulletPoints: [
            "1-Click contact details and surname masking",
            "Compliance with enterprise client anti-poaching policies",
            "Role-based download permissions and audit trail",
          ],
        },
      ]}
      businessBenefits={[
        {
          metric: "90%",
          title: "Faster Resume Dispatch for Client RFPs",
          description: "Eliminate the frantic scramble to format Word documents when bidding for high-value client contracts and RFP submissions.",
        },
        {
          metric: "100%",
          title: "Master Profile Data Integrity",
          description: "Allow project managers and account leads to tweak client versions without corrupting the employee's official HR record.",
        },
        {
          metric: "Zero",
          title: "Formatting Discrepancies Across Teams",
          description: "Standardize resume layouts across hundreds of consultants and developers with enterprise-grade typography and branding.",
        },
      ]}
      workflowSteps={[
        {
          step: "01",
          title: "Select Employee Profile",
          description: "Choose any active employee or shortlisted candidate directly from your Shenll HRMS centralized database.",
        },
        {
          step: "02",
          title: "Pull from Master Library",
          description: "Select pre-approved project summaries, technical skills, and domain certifications from your company master blocks.",
        },
        {
          step: "03",
          title: "Tailor for Client Requirements",
          description: "Customize the executive summary and emphasize relevant project deliverables specifically for the target client.",
        },
        {
          step: "04",
          title: "Lock Template & Export",
          description: "Lock to the approved template version and download clean, pixel-perfect PDF or Word resumes in 1 click.",
        },
      ]}
      faqs={[
        {
          question: "Does tailoring a resume for a client overwrite the employee's official record?",
          answer: "No. Each resume maintains an independent, isolated snapshot. Edits made for a specific client requirement never alter the employee's master HRMS profile or any other client version.",
        },
        {
          question: "Can we maintain different resume templates for different enterprise clients?",
          answer: "Yes. Shenll Resume Builder lets you configure multiple corporate templates (e.g., standard, executive, technical, blind/anonymized) and locks the exact template version upon approval.",
        },
        {
          question: "What file formats are supported for resume export?",
          answer: "Resumes can be downloaded as print-ready PDF documents or editable Microsoft Word (.docx) files, complete with standardized company branding, fonts, and headers.",
        },
        {
          question: "Can we use this for external candidates in the recruitment ATS pipeline?",
          answer: "Yes. You can import candidates directly from the Shenll Recruitment & ATS module to generate client-ready resumes during the interview or client vetting process.",
        },
        {
          question: "Can I try the live Resume Builder app right now?",
          answer: "Yes. You can explore the live deployed application directly at https://resume-builder-naveenshenlls-projects.vercel.app/resumes.",
        },
      ]}
      relatedModules={[
        {
          title: "Core HR & Employee Management",
          href: "/employee-management-software",
          description: "Centralized employee profiles, credential vaults, and verified tenure history.",
        },
        {
          title: "Recruitment & ATS",
          href: "/recruitment-software",
          description: "Applicant pipelines, candidate scorecards, and paperless onboarding.",
        },
        {
          title: "Project & Timesheets",
          href: "/project-management",
          description: "Track consultant billable hours, project allocation, and team margins.",
        },
      ]}
    />
  );
}

