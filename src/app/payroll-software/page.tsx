import type { Metadata } from "next";
import ProductLandingLayout from "@/components/ProductLandingLayout";

export const metadata: Metadata = {
  title: "Payroll Software India — Automated Statutory & Salary Management",
  description:
    "100% compliant Indian payroll software by Shenll HRMS. Automate PF, ESI, TDS, Professional Tax, payslips, and direct bank disbursement files.",
  alternates: {
    canonical: "https://shenllhrms.com/payroll-software",
  },
  openGraph: {
    title: "Payroll Software India — Automated Salary & Statutory Compliance | Shenll HRMS",
    description: "Generate monthly payroll in minutes with auto-calculated PF, ESI, and TDS deductions.",
    url: "https://shenllhrms.com/payroll-software",
  },
};

export default function PayrollSoftwarePage() {
  return (
    <ProductLandingLayout
      badge="Indian Statutory Payroll Software"
      h1="Error-Free, 100% Statutory Compliant Payroll in Minutes"
      tagline="Say goodbye to payroll calculation errors and late salary disbursements. Shenll HRMS automates attendance sync, statutory taxes, and bulk payslips in 1 click."
      overviewHeading="Automated Payroll Built Specifically for Indian Regulatory Laws"
      overviewDescription="Processing payroll in India involves complex statutory requirements including Provident Fund (PF), Employee State Insurance (ESI), Professional Tax (PT across different states), and Tax Deducted at Source (TDS). Shenll HRMS automates all rules out of the box with zero manual calculations."
      keyFeatures={[
        {
          title: "1-Click Monthly Salary Processing",
          description: "Pull validated attendance logs, approved leaves, and loss-of-pay (LOP) days directly into the salary calculation pipeline.",
          bulletPoints: ["Automatic prorated calculation for mid-month joiners", "Overtime allowance auto-calculation", "Instant batch salary adjustments"],
        },
        {
          title: "100% Indian Statutory Compliance",
          description: "Pre-configured rules for PF ECR format, ESI monthly contributions, state-wise Professional Tax slabs, and Labour Welfare Fund (LWF).",
          bulletPoints: ["Pre-formatted EPFO ECR text file download", "ESI online portal upload format", "Zero compliance penalty guarantee"],
        },
        {
          title: "Comprehensive Income Tax & TDS Management",
          description: "Supports both Old and New Tax Regimes with employee tax declaration submission, proof verification, and Form 16 generation.",
          bulletPoints: ["Section 80C, 80D, HRA proof vault", "Dynamic tax projection on employee portal", "Quarterly 24Q preparation support"],
        },
        {
          title: "Automated Bank Transfer Disbursal Files",
          description: "Generate bank payout files for leading Indian banks (HDFC, ICICI, SBI, Axis, Kotak, etc.) for swift salary crediting.",
          bulletPoints: ["Ready-to-upload NEFT/RTGS text files", "Direct corporate banking API integration", "Disbursement confirmation logs"],
        },
        {
          title: "Digital Payslips on Web & Mobile App",
          description: "Encrypted PDF payslips sent via automated email and instantly available in the Shenll HRMS mobile app.",
          bulletPoints: ["Company logo & branding watermark", "Password-protected encrypted PDF", "Historical payslip archives"],
        },
        {
          title: "Full & Final (F&F) Settlement Engine",
          description: "Effortlessly compute notice period recoveries, unavailed earned leave encashment, gratuity, and pending expense claims upon exit.",
          bulletPoints: ["Automated leave balance encashment", "Statutory gratuity computation formulas", "Clear printable settlement vouchers"],
        },
      ]}
      businessBenefits={[
        {
          metric: "90%",
          title: "Faster Payroll Run Cycles",
          description: "Reduce a 4-day manual spreadsheet reconciliation into a 20-minute review and disbursement process.",
        },
        {
          metric: "Zero",
          title: "Statutory Filing Errors & Penalties",
          description: "Ensure exact PF, ESI, and PT math every single month without fear of compliance notices or audit fines.",
        },
        {
          metric: "100%",
          title: "Employee Satisfaction on Payday",
          description: "Timely direct bank credits and instant access to digital payslips directly on the employee's mobile phone.",
        },
      ]}
      workflowSteps={[
        {
          step: "01",
          title: "Attendance & Leave Freeze",
          description: "Lock monthly attendance, biometric punch logs, approved leaves, and overtime hours with 1 click.",
        },
        {
          step: "02",
          title: "Automatic Computation",
          description: "The engine calculates basic, HRA, special allowances, statutory deductions, and income tax withholdings.",
        },
        {
          step: "03",
          title: "Review & Bank File Generation",
          description: "HR and finance leads verify gross vs net payout summaries and download the formatted bank upload file.",
        },
        {
          step: "04",
          title: "Disburse & Publish Payslips",
          description: "Execute bank transfer, and Shenll HRMS automatically publishes password-protected payslips to all employees.",
        },
      ]}
      faqs={[
        {
          question: "Can employees declare investment proofs for income tax in Shenll HRMS?",
          answer: "Yes. Employees can submit tax declarations for 80C, 80D, NPS, home loan interest, and upload rental receipts directly on the web and mobile app. HR admins can approve or reject submitted receipts with feedback.",
        },
        {
          question: "How does the system handle mid-month joiners or exits?",
          answer: "Shenll HRMS automatically computes prorated salary based on the exact joining date or relieving date, factoring in eligible working days and weekends as configured in your policy.",
        },
        {
          question: "Does Shenll HRMS support multiple salary structures for different employee grades?",
          answer: "Yes. You can configure unlimited salary templates—such as management CTC structures, blue-collar wage structures, sales commissions, and consultant retainers.",
        },
      ]}
      relatedModules={[
        {
          title: "Attendance Management",
          href: "/attendance-management-software",
          description: "Direct biometric sync ensuring 100% accurate shift & LOP data in payroll.",
        },
        {
          title: "Leave Management",
          href: "/leave-management-software",
          description: "Accrued leaves, sandwich deductions, and compensatory offs sync.",
        },
        {
          title: "Expense Management",
          href: "/expense-management",
          description: "Reimburse approved employee travel & office expenses through monthly payroll.",
        },
      ]}
    />
  );
}
