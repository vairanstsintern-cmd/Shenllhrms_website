import type { Metadata } from "next";
import IndustryLayout from "@/components/IndustryLayout";

export const metadata: Metadata = {
  title: "IT & Tech HRMS Software — Hybrid Work Logs, OKRs & Developer Appraisals",
  description:
    "Specialized HRMS platform for IT and Software companies by Shenll HRMS. Manage hybrid and remote check-ins, sprint timesheets, tech OKRs, and talent retention.",
  alternates: {
    canonical: "https://shenllhrms.com/industries/information-technology",
  },
  openGraph: {
    title: "IT & Software HRMS Software | Shenll HRMS",
    description: "Empower tech teams with hybrid work check-ins, billable timesheets, and performance OKRs.",
    url: "https://shenllhrms.com/industries/information-technology",
  },
};

export default function InformationTechnologyPage() {
  return (
    <IndustryLayout
      industryName="Information Technology"
      badge="IT, SaaS & Software Engineering"
      h1="Agile HRMS & Timesheet Management for Modern Tech Companies"
      tagline="Empower your software engineers and consultants with seamless hybrid check-ins, billable sprint timesheets, continuous OKR appraisals, and predictive talent retention."
      industryChallenges={[
        {
          challenge: "Hybrid & Remote Attendance Disconnect",
          impact: "Managing flexible work-from-home vs in-office days across distributed teams creates confusion and lack of operational visibility.",
          shenllSolution: "Unified web check-in and mobile GPS geo-fencing with customizable hybrid weekly office policies.",
        },
        {
          challenge: "Client Billability & Unlogged Timesheets",
          impact: "Engineers delay submitting weekly hours, leading to delayed client invoicing and lost billable revenue.",
          shenllSolution: "Intuitive sprint timesheets integrated into daily workflow with 1-click approvals for engineering leads.",
        },
        {
          challenge: "Tech Talent Attrition & Poaching",
          impact: "High turnover of senior developers increases recruitment costs and stalls critical project deliveries.",
          shenllSolution: "Shenll AI predictive flight-risk signals and continuous 360 reviews to retain top engineering talent.",
        },
      ]}
      tailoredSolutions={[
        {
          title: "Hybrid Work & Roster Allocation",
          description: "Allow developers to schedule WFH vs Office days with automated seat allocation and manager visibility.",
          features: [
            "Weekly office attendance quota tracking",
            "Desk booking and meeting room synchronization",
            "Real-time visibility into who is in the office today",
          ],
        },
        {
          title: "Billable Sprint & Milestone Tracking",
          description: "Track developer hours against client contracts with granular project milestone and task mapping.",
          features: [
            "Billable vs non-billable client tagging",
            "Project margin and developer CTC cost correlation",
            "Ready-to-bill client timesheet PDF export",
          ],
        },
        {
          title: "Engineering OKRs & Continuous Reviews",
          description: "Align sprint delivery goals, code quality, and peer architectural feedback in continuous review cycles.",
          features: [
            "Quarterly engineering OKR progress tracking",
            "Peer reviews from fellow engineers and product managers",
            "Merit-based increments and bonus payout calculation",
          ],
        },
        {
          title: "Automated IT Asset & Cloud Vault",
          description: "Track high-end laptops, test devices, and cloud software licenses allocated to engineering staff.",
          features: [
            "Laptop serial number and warranty tracking",
            "Digital security agreement sign-off upon onboarding",
            "Automated exit clearance across IT and DevOps",
          ],
        },
      ]}
      complianceHighlights={[
        "Shops and Commercial Establishments Act compliance",
        "Statutory PF, ESI, and state Professional Tax calculations",
        "Quarterly Form 24Q preparation & automated Form 16 issuance",
        "Non-Disclosure Agreement (NDA) & IP assignment storage",
      ]}
      faqs={[
        {
          question: "Can developers log time directly against client project milestones?",
          answer: "Yes. Engineers can select assigned project sprints and subtasks, log their daily hours, and submit weekly timesheets with 1-click approval for tech leads.",
        },
        {
          question: "Can we support both employees in India and international contractors?",
          answer: "Yes. Shenll HRMS manages full-time employees under Indian payroll alongside international contractors with custom currencies and invoice generation.",
        },
        {
          question: "Does Shenll HRMS integrate with developer single sign-on (SSO)?",
          answer: "Yes. Enterprise plans support SAML 2.0 / Google Workspace / Microsoft Azure Active Directory single sign-on for secure developer authentication.",
        },
      ]}
    />
  );
}
