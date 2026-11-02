import type { Metadata } from "next";
import IndustryLayout from "@/components/IndustryLayout";

export const metadata: Metadata = {
  title: "Professional Services HRMS — Law, Accounting, Consulting & Agencies",
  description:
    "Tailored HRMS platform for Consulting, Accounting, Legal, and Creative agencies by Shenll HRMS. Billable client hours, multi-currency invoicing, and partner appraisals.",
  alternates: {
    canonical: "https://shenllhrms.com/industries/professional-services",
  },
  openGraph: {
    title: "Professional Services HRMS Software | Shenll HRMS",
    description: "Manage client billable timesheets, project profitability, partner equity, and consultant appraisals.",
    url: "https://shenllhrms.com/industries/professional-services",
  },
};

export default function ProfessionalServicesPage() {
  return (
    <IndustryLayout
      industryName="Professional Services"
      badge="Consulting, Accounting, Legal & Creative Firms"
      h1="HRMS & Billable Workforce Management for Professional Services"
      tagline="Capture every billable consultant hour, streamline client project cost accounting, automate travel reimbursements, and retain high-performing professional talent."
      industryChallenges={[
        {
          challenge: "Lost Billable Hours & Time Leakage",
          impact: "Consultants and lawyers delay entering daily project timesheets, leading to unbilled client work and reduced firm profitability.",
          shenllSolution: "Frictionless mobile and desktop timesheet logging with automated weekend reminders for consultants.",
        },
        {
          challenge: "Client Project Cost & Margin Visibility",
          impact: "Partners lack real-time visibility into whether a fixed-fee advisory engagement is eroding project profit margins.",
          shenllSolution: "Real-time correlation of consultant CTC hourly costs against billed hours with early margin warning alerts.",
        },
        {
          challenge: "Complex Consultant Expense Claims",
          impact: "Client site visits, flights, and client entertainment bills take weeks to approve, delaying client invoicing.",
          shenllSolution: "Mobile camera receipt upload with project-specific tagging and 1-click partner approvals.",
        },
      ]}
      tailoredSolutions={[
        {
          title: "Client Billable Timesheet & Matter Management",
          description: "Allow lawyers, accountants, and consultants to record time against specific client codes and matter numbers.",
          features: [
            "Client and engagement code tagging",
            "Billable, non-billable, and business development category tracking",
            "Exportable client invoice backing sheets in PDF and Excel",
          ],
        },
        {
          title: "Resource Utilization & Bench Capacity Heatmap",
          description: "Identify senior consultants who are overbooked and junior associates available for new client proposals.",
          features: [
            "Real-time utilization percentages across practice groups",
            "Skill-based consultant matching for upcoming bids",
            "Prevents consultant burnout and attrition",
          ],
        },
        {
          title: "Partner & Associate 360 Appraisals",
          description: "Conduct transparent performance reviews measuring client feedback, billable realization rates, and firm leadership.",
          features: [
            "Billable realization metrics embedded in review scorecards",
            "Client feedback survey integration",
            "Discretionary bonus and profit-share payout calculator",
          ],
        },
        {
          title: "Client-Reimbursable Expense Workflows",
          description: "Tag flight tickets, hotel stays, and client meals directly to specific client accounts for easy passthrough billing.",
          features: [
            "Mobile receipt capture with currency conversion",
            "Passthrough client billing flag for accounts team",
            "Fast reimbursement crediting on the consultant's next salary",
          ],
        },
      ]}
      complianceHighlights={[
        "Shops and Commercial Establishments Act compliance",
        "Bar Council & ICAI professional engagement guidelines",
        "Statutory PF, ESI, and Professional Tax calculations",
        "Form 16 generation and Section 192/194J compliance",
      ]}
      faqs={[
        {
          question: "Can consultants log time against specific client codes on their phone?",
          answer: "Yes. Consultants can open the Shenll HRMS mobile app, select the client name and engagement code, enter their hours with task notes, and submit in seconds.",
        },
        {
          question: "Can we generate client-ready timesheet reports for billing?",
          answer: "Yes. Partners and finance leads can export client-branded PDF and Excel timesheet logs detailing all approved consultant hours, dates, and work summaries.",
        },
        {
          question: "Does the system support profit-share and partner equity bonuses?",
          answer: "Yes. You can configure variable performance incentives, partner dividend distributions, and quarterly profit-sharing payouts that seamlessly sync with payroll.",
        },
      ]}
    />
  );
}
