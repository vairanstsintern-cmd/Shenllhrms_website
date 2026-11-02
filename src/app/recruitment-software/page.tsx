import type { Metadata } from "next";
import ProductLandingLayout from "@/components/ProductLandingLayout";

export const metadata: Metadata = {
  title: "Recruitment Software & ATS — Candidate Pipeline & Onboarding",
  description:
    "End-to-end recruitment and applicant tracking software by Shenll HRMS. Manage job postings, candidate pipelines, interview evaluations, and digital offer letters.",
  alternates: {
    canonical: "https://shenllhrms.com/recruitment-software",
  },
  openGraph: {
    title: "Recruitment Software & ATS Platform | Shenll HRMS",
    description: "Streamline talent acquisition, interview scheduling, offer generation, and new-hire onboarding.",
    url: "https://shenllhrms.com/recruitment-software",
  },
};

export default function RecruitmentSoftwarePage() {
  return (
    <ProductLandingLayout
      badge="Talent Acquisition & ATS"
      h1="Smarter Recruitment & Seamless Paperless Onboarding"
      tagline="Attract top talent, streamline candidate evaluation pipelines, and convert shortlisted applicants into productive employees with Shenll HRMS Recruitment & ATS."
      overviewHeading="Accelerate Time-to-Hire from Job Requisition to First Day at Work"
      overviewDescription="Hiring top talent requires agility and team collaboration. Shenll HRMS connects hiring managers and recruiters in one intuitive workspace—from job requisition approvals and multi-stage interview scorecards to digital offer letter generation and 1-click onboarding."
      keyFeatures={[
        {
          title: "Visual Applicant Pipeline (Kanban)",
          description: "Track candidates across customized hiring stages: Sourced, Screened, Technical Round 1, Manager Review, HR Round, Offered, and Joined.",
          bulletPoints: ["Drag-and-drop candidate stage movement", "Bulk resume parser & automatic field population", "Custom rejection reason tracking"],
        },
        {
          title: "Interview Scheduling & Panel Feedback",
          description: "Schedule video or in-person interviews with automated Google/Outlook calendar invites, interviewer reminders, and structured evaluation scorecards.",
          bulletPoints: ["Pre-configured competency rating scorecards", "Panelist private notes & recommendations", "Automated candidate reminder emails"],
        },
        {
          title: "Digital Offer Letter Generation",
          description: "Generate customized offer letters with dynamic CTC salary breakdowns, terms of employment, and electronic signature support.",
          bulletPoints: ["Branded company offer letter templates", "Multi-tier offer approval workflow before release", "Real-time candidate offer status tracking"],
        },
        {
          title: "Pre-Onboarding Document Vault",
          description: "Allow prospective hires to securely upload previous company relieving letters, payslips, education degrees, and identification before Day 1.",
          bulletPoints: ["Self-service pre-joining candidate portal", "Document verification status checklist", "Reduces Day 1 administrative friction"],
        },
        {
          title: "1-Click Conversion to Active Employee",
          description: "Once the candidate accepts the offer and joins, convert their applicant profile directly into the core employee database without re-typing data.",
          bulletPoints: ["Auto-generates employee ID & email setup", "Direct transfer of verified KYC & bank details", "Triggers initial asset allocation workflow"],
        },
        {
          title: "Recruitment Analytics & Source Tracking",
          description: "Identify your most effective talent acquisition channels (LinkedIn, referrals, portals, agencies) and measure average cost & time to hire.",
          bulletPoints: ["Source-wise conversion rate analysis", "Recruiter performance metrics", "Recruitment pipeline velocity reports"],
        },
      ]}
      businessBenefits={[
        {
          metric: "40%",
          title: "Faster Time-to-Hire",
          description: "Keep interviewers and candidates on track with automated reminders, feedback forms, and rapid offer generation.",
        },
        {
          metric: "Zero",
          title: "Duplicate Candidate Data Entry",
          description: "Convert shortlisted candidate documents and salary structures directly into payroll and HR records with 1 click.",
        },
        {
          metric: "95%",
          title: "Candidate Offer Acceptance Rate",
          description: "Deliver a polished, transparent, and professional candidate experience from first touch to the first day of work.",
        },
      ]}
      workflowSteps={[
        {
          step: "01",
          title: "Job Requisition Approval",
          description: "Department head initiates hiring request with job description and approved CTC budget; HR management approves.",
        },
        {
          step: "02",
          title: "Sourcing & Screening",
          description: "Resumes are uploaded, automatically parsed, and tagged with candidate skills and experience levels.",
        },
        {
          step: "03",
          title: "Interview & Scorecards",
          description: "Panelists interview the candidate and submit standardized scorecards assessing role fit and technical skills.",
        },
        {
          step: "04",
          title: "Offer & 1-Click Onboard",
          description: "Candidate digitally signs the offer letter, uploads documents, and is welcomed into the core employee database.",
        },
      ]}
      faqs={[
        {
          question: "Can external recruitment agencies upload profiles directly?",
          answer: "Yes. You can provide specialized agency portal logins where authorized staffing partners upload candidate profiles for specific approved job openings.",
        },
        {
          question: "Does Shenll HRMS support electronic signatures on offer letters?",
          answer: "Yes. Candidates can review and digitally sign their offer letters directly from their smartphone or computer browser.",
        },
        {
          question: "Can we customize the hiring stages for different departments?",
          answer: "Yes. Technical engineering roles can have multi-stage coding and design rounds, while sales or administrative positions can follow a streamlined two-round evaluation flow.",
        },
      ]}
      relatedModules={[
        {
          title: "Core Employee Management",
          href: "/employee-management-software",
          description: "Convert hired candidates into verified digital employee profiles.",
        },
        {
          title: "Performance Management",
          href: "/performance-management-software",
          description: "Set initial 90-day probationary goals and OKRs for new hires.",
        },
        {
          title: "AI HRMS Features",
          href: "/ai-hrms",
          description: "Leverage AI to match candidate skillsets against open project requirements.",
        },
      ]}
    />
  );
}
