import type { Metadata } from "next";
import ProductLandingLayout from "@/components/ProductLandingLayout";

export const metadata: Metadata = {
  title: "Expense Management Software — Travel Reimbursements & Claim Approvals",
  description:
    "Automate employee business travel and expense claims with Shenll HRMS. Mobile receipt capture, multi-level approvals, policy enforcement, and payroll sync.",
  alternates: {
    canonical: "https://shenllhrms.com/expense-management",
  },
  openGraph: {
    title: "Expense Management Software — Travel & Reimbursement Claims | Shenll HRMS",
    description: "Submit digital expense claims with photo receipts and disburse approved reimbursements through monthly payroll.",
    url: "https://shenllhrms.com/expense-management",
  },
};

export default function ExpenseManagementPage() {
  return (
    <ProductLandingLayout
      badge="Expense & Reimbursement Hub"
      h1="Hassle-Free Employee Expense Claims & Fast Reimbursements"
      tagline="Say goodbye to paper receipts and delayed reimbursements. Allow employees to snap bills on mobile, enforce departmental travel policies automatically, and disburse claims via monthly payroll."
      overviewHeading="Automated Expense Reporting with Full Audit Compliance"
      overviewDescription="Managing business travel, client meals, and office supplies should not involve manual paper invoices. Shenll HRMS streamlines the entire reimbursement cycle—enforcing per diem caps, auto-checking tax invoices, and routing claims to managers for rapid approval."
      keyFeatures={[
        {
          title: "Mobile Camera Receipt Capture",
          description: "Employees take photos of paper bills and taxi invoices on their phone; the system stores high-resolution digital copies with timestamp metadata.",
          bulletPoints: ["Mobile receipt upload from camera or gallery", "Automatic receipt compression & storage", "Supports multi-page hotel and travel bills"],
        },
        {
          title: "Custom Expense Categories & Per Diem Caps",
          description: "Configure specific categories (Fuel, Meals, Flights, Client Entertainment) with maximum daily per diem allowances based on employee grade.",
          bulletPoints: ["Tier-based city expense limits (Tier 1 vs Tier 2)", "Mandatory receipt requirement thresholds", "Automatic flag on policy cap violations"],
        },
        {
          title: "Multi-Level Managerial Approval Workflows",
          description: "Route claims based on department and amount thresholds to project managers, department heads, and finance controllers with full audit visibility.",
          bulletPoints: ["Instant mobile push alerts for approvals", "Partial approval or line-item rejection with notes", "Direct communication thread per claim"],
        },
        {
          title: "Advance Cash Requests & Settlement",
          description: "Allow employees to request travel cash advances prior to customer visits, with automatic deduction and settlement against submitted bills.",
          bulletPoints: ["Travel advance requisition workflow", "1-click settlement balance calculation", "Unused advance recovery through payroll"],
        },
        {
          title: "Direct Monthly Payroll Disbursal",
          description: "Approved employee reimbursements automatically flow into the current month's payroll payout without manual finance spreadsheets.",
          bulletPoints: ["Separate non-taxable reimbursement payslip line", "Eliminates duplicate payments", "Bank payment transfer file integration"],
        },
        {
          title: "Expense Spend Analytics & GST Audit Logs",
          description: "Gain executive insight into departmental travel spend, vendor costs, and claim trends with exportable GST tax breakdown reports.",
          bulletPoints: ["Departmental expense budget tracking", "GSTIN identification for input tax credit", "Downloadable audit bundles with receipts"],
        },
      ]}
      businessBenefits={[
        {
          metric: "85%",
          title: "Faster Reimbursement Processing",
          description: "Cut down claim approval and disbursement cycles from weeks to just 24-48 hours, keeping employees motivated.",
        },
        {
          metric: "Zero",
          title: "Policy Violations & Fraudulent Claims",
          description: "Automated per diem limits and duplicate receipt detection prevent unauthorized expense claims from being processed.",
        },
        {
          metric: "100%",
          title: "GST Input Tax Credit Recovery",
          description: "Ensure verified GSTIN invoices are captured properly for company tax filing and input credit reclamation.",
        },
      ]}
      workflowSteps={[
        {
          step: "01",
          title: "Snap & Submit",
          description: "Employee snaps receipt photo on mobile app, enters amount and category, and submits the claim within seconds.",
        },
        {
          step: "02",
          title: "Policy Validation",
          description: "System verifies whether the amount falls within the employee's per diem allowance and flags any limit breaches.",
        },
        {
          step: "03",
          title: "Manager Approval",
          description: "Reporting manager reviews receipts and approves or rejects items on the go with real-time push notification.",
        },
        {
          step: "04",
          title: "Payroll Disbursal",
          description: "Finance locks approved total; reimbursement appears as non-taxable credit on the employee's next payslip.",
        },
      ]}
      faqs={[
        {
          question: "Can an employee submit expenses in foreign currencies?",
          answer: "Yes. Shenll HRMS supports international travel expense logging with automated currency conversion based on daily exchange rates.",
        },
        {
          question: "How does the system prevent employees from uploading the same receipt twice?",
          answer: "Shenll HRMS uses hash checks and invoice number tracking to alert managers if a duplicate receipt with the same amount and date is re-submitted.",
        },
        {
          question: "Are employee reimbursements taxed as part of salary?",
          answer: "No. Valid business expense reimbursements are categorized as non-taxable items on the payslip, ensuring compliance with Indian Income Tax rules.",
        },
      ]}
      relatedModules={[
        {
          title: "Payroll Software",
          href: "/payroll-software",
          description: "Disburse approved travel reimbursements directly on monthly salary day.",
        },
        {
          title: "Mobile App",
          href: "/hrms-mobile-app",
          description: "Snap and upload receipts on the go with Android and iOS apps.",
        },
        {
          title: "Project Management",
          href: "/project-management",
          description: "Attribute travel expenses directly to specific client project budgets.",
        },
      ]}
    />
  );
}
