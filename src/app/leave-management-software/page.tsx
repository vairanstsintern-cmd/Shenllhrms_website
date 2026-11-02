import type { Metadata } from "next";
import ProductLandingLayout from "@/components/ProductLandingLayout";

export const metadata: Metadata = {
  title: "Leave Management Software — Custom Leave Policies & Approvals",
  description:
    "Automate leave applications, approvals, sandwich rules, and holiday calendars with Shenll HRMS. Seamless sync with attendance and payroll.",
  alternates: {
    canonical: "https://shenllhrms.com/leave-management-software",
  },
  openGraph: {
    title: "Leave Management Software — Flexible Policies & Approvals | Shenll HRMS",
    description: "Manage casual, sick, earned leaves, compensatory offs, and multi-tier manager approvals effortlessly.",
    url: "https://shenllhrms.com/leave-management-software",
  },
};

export default function LeaveManagementPage() {
  return (
    <ProductLandingLayout
      badge="Smart Leave & Holiday Engine"
      h1="Flexible, Automated Leave & Holiday Management Software"
      tagline="Eliminate email leave trails and disputes. Empower employees to apply for leaves on mobile with real-time balance calculations, automated sandwich rules, and multi-tier manager approvals."
      overviewHeading="Configure Complex Leave Rules Without Operational Bottlenecks"
      overviewDescription="Every organization maintains different leave policies across full-time, contract, and probationary staff. Shenll HRMS provides complete policy customization—handling accrual cycles, carry-forward limits, encashment formulas, and sandwich weekend rules automatically."
      keyFeatures={[
        {
          title: "Custom Leave Types & Policies",
          description: "Define unlimited leave categories including Casual Leave (CL), Sick Leave (SL), Earned Leave (EL), Maternity/Paternity, and Sabbaticals.",
          bulletPoints: ["Prorated monthly or yearly accrual", "Custom probationary waiting period", "Gender-specific policy assignment"],
        },
        {
          title: "Automated Sandwich & Weekend Rules",
          description: "Automate sandwich rules where weekends or public holidays falling between leave days are optionally counted as leave, as per company policy.",
          bulletPoints: ["Automated policy enforcement", "Transparent warning shown to employee during application", "Zero manual payroll recalculation"],
        },
        {
          title: "Compensatory Off (Comp-Off) Workflow",
          description: "Enable employees who work on weekends, festivals, or approved project overtime to apply for comp-off credits with manager approval.",
          bulletPoints: ["Linked to verified weekend attendance", "Configurable validity expiry (e.g. 60 days)", "Auto-deduction upon leave application"],
        },
        {
          title: "Multi-Tier Approval Matrices",
          description: "Route leave applications to reporting managers, department heads, or HR admins with instant email, WhatsApp, and mobile push notifications.",
          bulletPoints: ["1-tap approval from mobile notifications", "Auto-approval fallback on manager inactivity", "Delegation of approval rights during leaves"],
        },
        {
          title: "Location-Specific Holiday Calendars",
          description: "Configure multi-location public and regional festival holiday lists across branches in Chennai, Bangalore, Mumbai, Delhi, etc.",
          bulletPoints: ["Regional state holiday configuration", "Optional/Restricted holiday quotas", "Interactive team calendar visibility"],
        },
        {
          title: "Real-Time Balance & Encashment",
          description: "Employees view live leave balances, pending applications, and accrued days directly on their mobile phone self-service portal.",
          bulletPoints: ["Year-end leave carry-forward limits", "Leave encashment calculator linked to basic salary", "Audit ledger of every credit & debit"],
        },
      ]}
      businessBenefits={[
        {
          metric: "Zero",
          title: "Leave Balance Discrepancies",
          description: "Real-time ledger updates after every approved application prevent over-utilization or incorrect loss-of-pay deductions.",
        },
        {
          metric: "2 Mins",
          title: "Average Leave Approval Turnaround",
          description: "Managers review team leave clashes and approve requests directly from mobile push notifications in seconds.",
        },
        {
          metric: "100%",
          title: "Payroll Synchronization",
          description: "Approved leaves automatically offset unpunched days, ensuring clean attendance records on payroll processing day.",
        },
      ]}
      workflowSteps={[
        {
          step: "01",
          title: "Employee Applies",
          description: "Employee selects leave type, dates, and optional reason on the Shenll HRMS mobile app, viewing live balance impact.",
        },
        {
          step: "02",
          title: "Conflict Check",
          description: "System alerts manager if multiple team members have already applied for leave during the same date window.",
        },
        {
          step: "03",
          title: "Manager Approval",
          description: "Reporting manager receives a push notification and approves or rejects the request with a comment in 1 tap.",
        },
        {
          step: "04",
          title: "Ledger Deduction",
          description: "Leave balance updates instantly, the team calendar reflects absence, and data feeds into attendance records.",
        },
      ]}
      faqs={[
        {
          question: "Can managers view their team's leave calendar before approving a request?",
          answer: "Yes. The manager portal displays an interactive team availability calendar showing who is already scheduled off on those dates, helping prevent project staffing shortages.",
        },
        {
          question: "Can we set minimum notice periods for applying for leaves?",
          answer: "Yes. You can mandate that earned leaves must be applied at least 7 days in advance, while sick leaves can be applied post-facto upon returning to work.",
        },
        {
          question: "How does year-end leave lapse and carry-forward work?",
          answer: "At the end of the calendar or financial year, Shenll HRMS automatically carries forward eligible unused leave days up to your policy limit and lapses excess balances, with full audit logs.",
        },
      ]}
      relatedModules={[
        {
          title: "Attendance Management",
          href: "/attendance-management-software",
          description: "Synchronize approved leaves with daily biometric punches.",
        },
        {
          title: "Payroll Software",
          href: "/payroll-software",
          description: "Factor approved leaves and LOP into monthly salary deductions.",
        },
        {
          title: "Mobile App",
          href: "/hrms-mobile-app",
          description: "Apply for leaves and track balance on iOS and Android.",
        },
      ]}
    />
  );
}
