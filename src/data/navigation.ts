export interface NavItem {
  name: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
  image?: string;
}

export const PRODUCT_MODULES: NavItem[] = [
  {
    name: "Core HR & Employee Management",
    href: "/employee-management-software",
    description: "Centralized employee repository, lifecycle tracking, and digital document vaults.",
  },
  {
    name: "Payroll & Compliance",
    href: "/payroll-software",
    description: "100% statutory compliant 1-click payroll, PF, ESI, TDS, and automated payslips.",
  },
  {
    name: "Attendance & Shift Tracking",
    href: "/attendance-management-software",
    description: "Biometric & geo-fenced mobile punch-in, flexible multi-shift roster allocation.",
  },
  {
    name: "Leave & Holiday Management",
    href: "/leave-management-software",
    description: "Custom leave types, sandwich rules, compensatory offs, and multi-tier approvals.",
  },
  {
    name: "Recruitment & Onboarding",
    href: "/recruitment-software",
    description: "Applicant pipeline, interview scheduling, offer letters, and paperless onboarding.",
  },
  {
    name: "Performance & Appraisal",
    href: "/performance-management-software",
    description: "360-degree reviews, KPI/OKR tracking, continuous feedback, and rating curves.",
  },
  {
    name: "Project & Task Management",
    href: "/project-management",
    description: "Real-time task tracking, billable timesheets, project budgets, and milestone monitoring.",
  },
  {
    name: "Expense & Reimbursements",
    href: "/expense-management",
    description: "Digital receipt capture, travel expense claims, auto-audit, and payroll sync.",
  },
  {
    name: "AI-Powered HR Automation",
    href: "/ai-hrms",
    description: "Predictive attrition signals, AI workforce matching, and natural language analytics.",
  },
  {
    name: "Mobile HR App",
    href: "/hrms-mobile-app",
    description: "Native iOS & Android self-service mobile app for attendance, leaves, and payslips.",
  },
];

export const INDUSTRY_SOLUTIONS: NavItem[] = [
  {
    name: "Manufacturing & Factories",
    href: "/industries/manufacturing",
    description: "Shift roster management, overtime tracking, punch-in biometrics, and contractor payroll.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80",
    badge: "Shift Rosters",
  },
  {
    name: "Information Technology",
    href: "/industries/information-technology",
    description: "Hybrid work logs, project-based timesheets, tech talent appraisals, and OKRs.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
    badge: "Hybrid Logs",
  },
  {
    name: "Engineering & EPC",
    href: "/industries/engineering",
    description: "Site-level attendance, multi-location deployments, skill tagging, and asset handovers.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
    badge: "Field Ops",
  },
  {
    name: "Construction & Infrastructure",
    href: "/industries/construction",
    description: "Field crew tracking, wage disbursement compliance, and dynamic project site management.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80",
    badge: "Site Punch",
  },
  {
    name: "Logistics & Supply Chain",
    href: "/industries/logistics",
    description: "Driver rosters, fleet staff attendance, night shift differentials, and mobile app sync.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80",
    badge: "Fleet Sync",
  },
  {
    name: "Healthcare & Hospitals",
    href: "/industries/healthcare",
    description: "24/7 rotational shifts, medical staff credentials, emergency duty tracking, and compliance.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80",
    badge: "24/7 Shifts",
  },
  {
    name: "Education & Institutions",
    href: "/industries/education",
    description: "Faculty leave rules, academic calendar payroll, multi-department approvals, and contracts.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
    badge: "Faculty HR",
  },
  {
    name: "Textile & Garments",
    href: "/industries/textile",
    description: "Piece-rate & hourly wage calculation, biometric turnstile integration, and labor audit logs.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=80",
    badge: "Piece Rate",
  },
  {
    name: "Professional Services",
    href: "/industries/professional-services",
    description: "Client billable hours, expense approvals, multi-currency invoicing, and project profitability.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80",
    badge: "Billable Hours",
  },
];

export const RESOURCE_LINKS: NavItem[] = [
  {
    name: "Knowledge Base & Guides",
    href: "/resources#guides",
    description: "Step-by-step documentation on HRMS configuration, payroll statutory rules, and setups.",
  },
  {
    name: "HR Compliance Checklist (India)",
    href: "/resources#compliance",
    description: "Essential guide to PF, ESI, Gratuity, Professional Tax, and labor law regulations.",
  },
  {
    name: "HR Automation ROI Calculator",
    href: "/resources#roi-calculator",
    description: "Estimate hours saved and payroll accuracy gains for your organization size.",
  },
  {
    name: "Customer Case Studies",
    href: "/resources#case-studies",
    description: "Real-world transformation stories from modern enterprises running on Shenll HRMS.",
  },
];

export const PRICING_PLANS = [
  {
    id: "basic",
    name: "Basic Plan",
    badge: "For Growing Teams",
    monthlyPrice: 12000,
    yearlyPrice: 9600,
    employeeLimit: "Up to 100 active employees",
    additionalEmployeeCost: "₹100 / employee / month",
    description: "Essential HR operations, biometric attendance, mobile app, and automated payroll.",
    features: [
      "Core Employee Management & Records",
      "Attendance & Shift Tracking",
      "Leave Management & Approvals",
      "Automated Payroll Processing",
      "Helpdesk & Ticket Management",
      "Role-Based Access Control",
      "Web Admin Portal Access",
      "Employee Mobile App (iOS & Android)",
      "Payslip Generation (100 included/mo)",
      "Standard Dashboards & Basic Reports",
      "Performance Management",
      "Employee Self-Service (ESS)",
    ],
    highlight: false,
    ctaText: "Schedule Free Demo",
  },
  {
    id: "professional",
    name: "Professional Plan",
    badge: "MOST POPULAR",
    monthlyPrice: 24999,
    yearlyPrice: 19999,
    employeeLimit: "Up to 250 active employees",
    additionalEmployeeCost: "₹100 / employee / month",
    description: "Complete enterprise suite with project tracking, asset vaults, expense claims, and advanced analytics.",
    features: [
      "Everything in Basic Plan, plus:",
      "Project & Milestone Management",
      "Task Allocation & Workload Tracking",
      "Asset Tracking & Allocation Vault",
      "Expense & Travel Claim Management",
      "Advanced Multi-level Dashboards",
      "Billable Timesheets Management",
      "Multi-Branch & Location Support",
      "Automated Email Alerts & Push Notifications",
      "Dedicated Account Manager & Priority Support",
      "Custom Workflow Approvals",
      "Advanced HR Reports & Excel Exports",
    ],
    highlight: true,
    ctaText: "Get Started / Request Demo",
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    badge: "Large Enterprises",
    monthlyPrice: null, // Custom
    yearlyPrice: null,
    employeeLimit: "Unlimited active employees",
    additionalEmployeeCost: "Volume customized tiered pricing",
    description: "Custom enterprise workflows, tailored AI agents, dedicated cloud deployment, and ERP integrations.",
    features: [
      "Everything in Professional Plan, plus:",
      "Custom AI Agents & Workforce Matching",
      "Custom ERP & Active Directory / SSO Integrations",
      "Dedicated Enterprise Cloud / Hybrid Options",
      "Custom Approval Hierarchies & Forms",
      "Tailored SLA & 24/7 Dedicated Support",
      "Comprehensive Onboarding & Data Migration Assistance",
      "Custom Security & Audit Logging Profiles",
      "Unlimited Payslip & Document Storage",
    ],
    highlight: false,
    ctaText: "Contact Enterprise Sales",
  },
];
