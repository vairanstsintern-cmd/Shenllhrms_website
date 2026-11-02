import type { Metadata } from "next";
import IndustryLayout from "@/components/IndustryLayout";

export const metadata: Metadata = {
  title: "Engineering & EPC HRMS Software — Project Sites & Multi-Location Crews",
  description:
    "Tailored HRMS platform for Engineering and EPC companies by Shenll HRMS. Manage site attendance, remote project allowances, skill tagging, and crew deployments.",
  alternates: {
    canonical: "https://shenllhrms.com/industries/engineering",
  },
  openGraph: {
    title: "Engineering & EPC HRMS Software | Shenll HRMS",
    description: "Multi-site crew attendance, engineer project deployment, and field allowances.",
    url: "https://shenllhrms.com/industries/engineering",
  },
};

export default function EngineeringPage() {
  return (
    <IndustryLayout
      industryName="Engineering & EPC"
      badge="Engineering, Procurement & Construction"
      h1="HRMS & Field Workforce Management for Engineering & EPC"
      tagline="Coordinate multi-site engineering crews, track field biometric attendance, manage project deputation allowances, and ensure total safety compliance across project locations."
      industryChallenges={[
        {
          challenge: "Fragmented Remote Site Attendance",
          impact: "Engineers stationed across remote project sites, client plants, and fabrication yards lead to delayed attendance reconciliation.",
          shenllSolution: "Portable solar-powered biometric devices and offline mobile geo-fenced check-in that syncs automatically when online.",
        },
        {
          challenge: "Complex Site Deputation Allowances",
          impact: "Manual processing of daily site allowances (Batta), travel expenses, and hardship premiums causes payroll errors.",
          shenllSolution: "Automated project deputation rules calculating site allowances directly based on verified site attendance.",
        },
        {
          challenge: "Specialized Engineering Skill Tracking",
          impact: "Difficulty identifying which certified engineers (welding inspectors, electrical leads, safety officers) are available for new bids.",
          shenllSolution: "Centralized skill repository with certification expiry tracking and AI-driven project team matching.",
        },
      ]}
      tailoredSolutions={[
        {
          title: "Multi-Location Site Deployment Roster",
          description: "Deploy engineers and technicians to client job sites with defined start and end dates and automated travel allowances.",
          features: [
            "Site-level organizational hierarchy and supervisor delegation",
            "Automatic site allowance trigger based on location GPS",
            "Client site access card and safety induction logs",
          ],
        },
        {
          title: "Offline Mobile Attendance with Geo-Tagging",
          description: "Engineers punch in at remote substations or offshore rigs even without cellular connectivity; data syncs when back in range.",
          features: [
            "GPS coordinate stamping with date/time cryptographic locks",
            "Selfie punch verification prevents buddy punching on site",
            "Real-time site headcount alerts for project directors",
          ],
        },
        {
          title: "Engineering Certification & Compliance Vault",
          description: "Track mandatory safety credentials, boiler inspection certificates, and NDT licenses with renewal countdowns.",
          features: [
            "Automated alert 60 days before license expiration",
            "Digital certificate repository per engineer",
            "Audit-ready safety compliance exports for client audits",
          ],
        },
        {
          title: "Project Milestone Billing & Timesheets",
          description: "Track engineer hours logged on specific project WBS (Work Breakdown Structure) codes against client billing budgets.",
          features: [
            "Direct sync between site hours and project cost accounting",
            "Client reimbursable travel claim management",
            "Project margin variance and engineer utilization heatmaps",
          ],
        },
      ]}
      complianceHighlights={[
        "Building and Other Construction Workers (BOCW) Act compliance",
        "Inter-State Migrant Workmen (ISMW) statutory registers",
        "PF & ESI multi-state branch registration handling",
        "Workmen Compensation policy tracking and claims management",
      ]}
      faqs={[
        {
          question: "Can Shenll HRMS operate at remote engineering sites with poor internet?",
          answer: "Yes. Our mobile app and hardware sync listeners cache attendance punches offline in encrypted local memory and automatically upload records as soon as internet connectivity is restored.",
        },
        {
          question: "How are site deputation allowances calculated in payroll?",
          answer: "Shenll HRMS checks verified site attendance days and automatically adds the designated daily site allowance (e.g. ₹500/day for Tier-2 sites) directly to the monthly salary payslip without manual calculation.",
        },
        {
          question: "Can we track engineer certifications like NDT Level 2 or OSHA?",
          answer: "Yes. You can attach any number of specialized engineering certifications to employee profiles, complete with issue dates, issuing authorities, and automated renewal alerts.",
        },
      ]}
    />
  );
}
