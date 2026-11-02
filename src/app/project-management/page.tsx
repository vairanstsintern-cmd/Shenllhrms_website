import type { Metadata } from "next";
import ProductLandingLayout from "@/components/ProductLandingLayout";

export const metadata: Metadata = {
  title: "Project & Task Management Software — Timesheets & Resource Allocation",
  description:
    "Integrated project and task tracking software by Shenll HRMS. Manage project milestones, billable timesheets, engineer utilization, and sprint deliverables.",
  alternates: {
    canonical: "https://shenllhrms.com/project-management",
  },
  openGraph: {
    title: "Project & Task Management Software | Shenll HRMS",
    description: "Connect employee time logs, project tasks, client billability, and productivity within your HRMS.",
    url: "https://shenllhrms.com/project-management",
  },
};

export default function ProjectManagementPage() {
  return (
    <ProductLandingLayout
      badge="Project, Tasks & Timesheets"
      h1="Unify Project Deliverables with Workforce Capacity"
      tagline="Bridge the gap between HR records and daily engineering tasks. Assign project milestones, track billable timesheets, balance team workloads, and safeguard project profitability."
      overviewHeading="Stop Switching Between Fragmented Project Tools & HR Software"
      overviewDescription="Most organizations use separate software for project tasks and HR, causing disconnects between attendance, billable hours, and employee appraisals. Shenll HRMS embeds project milestone tracking, task prioritization, and timesheets right alongside your core employee roster."
      keyFeatures={[
        {
          title: "Milestone & Sprint Task Allocation",
          description: "Break complex customer projects into manageable sprints, deliverables, and assigned tasks with estimated hours and deadlines.",
          bulletPoints: ["Visual Kanban boards & Gantt timeline charts", "Subtask checklists with priority flags", "Automated deadline alert notifications"],
        },
        {
          title: "Billable & Non-Billable Timesheets",
          description: "Allow developers, consultants, and field engineers to log daily hours against client projects with manager approval workflows.",
          bulletPoints: ["Daily and weekly timesheet view", "Client billing rate tagging", "Direct sync with biometric working hours"],
        },
        {
          title: "Workforce Resource Capacity & Bench Visibility",
          description: "Gain real-time visibility into who is over-allocated, who is on the bench, and who is available for upcoming project contracts.",
          bulletPoints: ["Departmental utilization heatmaps", "Prevents team burnout & overtime fatigue", "Skill-based resource search"],
        },
        {
          title: "Project Budget & Cost Tracking",
          description: "Monitor logged billable hours against client project budgets to prevent cost leakages and optimize contract margins.",
          bulletPoints: ["Estimated vs actual hours comparison", "Internal cost rate vs client billing rate", "Early margin erosion warnings"],
        },
        {
          title: "Document & Asset Association",
          description: "Attach project specifications, design links, and client sign-off approvals directly to milestone cards for easy reference.",
          bulletPoints: ["Centralized project asset vault", "Role-based client confidentiality", "Audit logs of deliverables"],
        },
        {
          title: "Productivity & Velocity Reports",
          description: "Export comprehensive executive summaries of sprint completion velocity, delayed tasks, and departmental billability percentages.",
          bulletPoints: ["1-click client timesheet PDF exports", "Engineer efficiency scorecards", "Excel export for billing reconciliation"],
        },
      ]}
      businessBenefits={[
        {
          metric: "25%",
          title: "Improvement in Team Billability",
          description: "Accurately capture every client-facing hour with intuitive daily mobile and web timesheets, eliminating unbilled work.",
        },
        {
          metric: "Zero",
          title: "Discrepancy with Attendance Records",
          description: "Timesheet hours are automatically cross-referenced against biometric punch logs, ensuring real working time accuracy.",
        },
        {
          metric: "100%",
          title: "Project Margin Visibility",
          description: "Track developer CTC costs against project revenue in real time to ensure every delivered milestone remains profitable.",
        },
      ]}
      workflowSteps={[
        {
          step: "01",
          title: "Project & Budget Setup",
          description: "Project manager defines project scope, milestones, allocated team members, and estimated billable hours.",
        },
        {
          step: "02",
          title: "Task Delegation",
          description: "Tasks are assigned to team members based on availability and required technical skillsets with target due dates.",
        },
        {
          step: "03",
          title: "Daily Time Logging",
          description: "Engineers log work hours on web or mobile; managers review and approve weekly timesheet submissions in 1 click.",
        },
        {
          step: "04",
          title: "Billing & Margin Reconciliation",
          description: "Finance exports approved timesheets for client invoice generation and performance appraisal scoring.",
        },
      ]}
      faqs={[
        {
          question: "Can we track both internal company initiatives and billable client projects?",
          answer: "Yes. Projects can be categorized as Billable (Client), Non-Billable, or Internal R&D with distinct hourly rate tracking and reporting.",
        },
        {
          question: "Can employees log time using the Shenll HRMS mobile app?",
          answer: "Yes. Team members can easily view assigned tasks, update completion statuses, and log daily timesheets on both iOS and Android apps.",
        },
        {
          question: "How does project management integrate with performance appraisals?",
          answer: "Task completion velocities, on-time milestone delivery percentages, and total billable hours directly feed into the employee's performance evaluation profile.",
        },
      ]}
      relatedModules={[
        {
          title: "Attendance Management",
          href: "/attendance-management-software",
          description: "Verify logged task hours against biometric punch-in and punch-out records.",
        },
        {
          title: "Performance Management",
          href: "/performance-management-software",
          description: "Reward engineers based on verified project velocity and milestone delivery.",
        },
        {
          title: "AI HRMS Features",
          href: "/ai-hrms",
          description: "Deploy AI agents to recommend optimal project teams based on skills.",
        },
      ]}
    />
  );
}
