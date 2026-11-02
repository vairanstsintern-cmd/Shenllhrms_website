import type { Metadata } from "next";
import IndustryLayout from "@/components/IndustryLayout";

export const metadata: Metadata = {
  title: "Construction HRMS Software — Job Sites, Field Labor & Wage Compliance",
  description:
    "Tailored HRMS software for Construction & Infrastructure companies by Shenll HRMS. Dynamic site muster rolls, biometric turnstiles, wage disbursement, and BOCW compliance.",
  alternates: {
    canonical: "https://shenllhrms.com/industries/construction",
  },
  openGraph: {
    title: "Construction HRMS Software | Shenll HRMS",
    description: "Manage multi-site construction labor, geo-fenced attendance, and statutory wage registers.",
    url: "https://shenllhrms.com/industries/construction",
  },
};

export default function ConstructionPage() {
  return (
    <IndustryLayout
      industryName="Construction & Infrastructure"
      badge="Civil & Infrastructure Workforce"
      h1="HRMS & Field Labor Compliance for Construction Companies"
      tagline="Control multi-site labor costs, track on-site worker attendance, streamline contractor wage disbursements, and ensure complete statutory labor compliance across all active project sites."
      heroImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
      industryChallenges={[
        {
          challenge: "Dynamic Multi-Site Labor Turnover",
          impact: "Labor crews constantly move between excavation, foundation, and finishing stages across scattered geographical sites.",
          shenllSolution: "Site-specific geo-fenced mobile punching and portable biometric scanners with instant worker profile tagging.",
        },
        {
          challenge: "Cash Wage Disputes & Ghost Workers",
          impact: "Unverified paper sign-in registers create ghost workers and inflated wage billing from subcontracted labor gangs.",
          shenllSolution: "Biometric and photo-verified daily attendance rolls ensuring wages are paid only for actual physical presence.",
        },
        {
          challenge: "BOCW & Inter-State Migrant Labor Compliance",
          impact: "Strict government audits require instant production of wage registers, cess deductions, and safety induction records.",
          shenllSolution: "Pre-configured statutory construction registers ready for 1-click inspection export.",
        },
      ]}
      tailoredSolutions={[
        {
          title: "Job Site Geo-Fencing & Portable Biometrics",
          description: "Define custom GPS perimeters around construction sites or deploy rugged battery-powered biometric scanners.",
          features: [
            "Perimeter-bound mobile check-in for civil supervisors and engineers",
            "Ruggedized dust-proof hardware terminals for labor gates",
            "Real-time site headcount dashboard for project directors",
          ],
        },
        {
          title: "Contractor Labor Gang Management",
          description: "Track daily muster rolls for subcontractor gangs with direct verification against approved project contractor budgets.",
          features: [
            "Daily contractor attendance sign-off workflow",
            "Prevents duplicate labor billing across multiple project heads",
            "Digital wage disbursement records with bank account / Aadhaar sync",
          ],
        },
        {
          title: "Safety Induction & Incident Tracking",
          description: "Log mandatory on-site toolbox talks, safety gear issuance, and site incident logs compliant with labor department norms.",
          features: [
            "PPE safety kit issue and acknowledgment records",
            "Digital accident reporting and insurance claim tracking",
            "Emergency contact directory accessible on site supervisor mobile app",
          ],
        },
        {
          title: "Material & Equipment Operator Shift Tracking",
          description: "Monitor crane operators, heavy machinery drivers, and specialized technicians with overtime and machine uptime correlation.",
          features: [
            "Heavy machinery license and badge verification",
            "Overtime tracking aligned with concrete pour schedules",
            "Shift handover checklists on mobile application",
          ],
        },
      ]}
      complianceHighlights={[
        "Building and Other Construction Workers (BOCW) Act registers",
        "Minimum Wages Act daily and monthly compliance tracking",
        "Equal Remuneration Act documentation",
        "Form B & Form D wage register automation",
      ]}
      faqs={[
        {
          question: "Can we track workers across 10 or more different construction sites simultaneously?",
          answer: "Yes. Shenll HRMS provides central administrative control where headquarters can view live worker headcounts, attendance percentages, and contractor costs across all 10+ sites in real time.",
        },
        {
          question: "How do we prevent ghost workers on construction muster rolls?",
          answer: "Every worker punch requires optical fingerprint or facial recognition with live timestamp and GPS location stamping, making it impossible to add fake names or buddy punch.",
        },
        {
          question: "Can site engineers approve daily labor sheets using the mobile app?",
          answer: "Yes. Site supervisors can review daily crew attendance, make manual notes on rain delays or material shortages, and approve daily timecards directly on their smartphones.",
        },
      ]}
    />
  );
}
