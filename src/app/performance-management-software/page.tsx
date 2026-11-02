import type { Metadata } from "next";
import ProductLandingLayout from "@/components/ProductLandingLayout";

export const metadata: Metadata = {
  title: "Performance Management Software — OKRs, 360 Reviews & Appraisals",
  description:
    "Drive employee growth and transparent appraisals with Shenll HRMS. Continuous feedback, KPI & OKR tracking, 360 reviews, and rating curves.",
  alternates: {
    canonical: "https://shenllhrms.com/performance-management-software",
  },
  openGraph: {
    title: "Performance Management Software — OKRs & 360 Appraisals | Shenll HRMS",
    description: "Align organizational goals, track continuous feedback, and conduct fair appraisals without bias.",
    url: "https://shenllhrms.com/performance-management-software",
  },
};

export default function PerformanceManagementPage() {
  return (
    <ProductLandingLayout
      badge="Workforce Performance & OKR Suite"
      h1="Goal-Driven Performance Reviews & Continuous Appraisals"
      tagline="Transform yearly appraisal dread into continuous growth. Align company objectives with individual OKRs, conduct 360-degree feedback reviews, and reward high performers fairly."
      overviewHeading="Build a High-Performance Culture Grounded in Transparency"
      overviewDescription="Traditional annual performance reviews are disconnected from daily work. Shenll HRMS enables continuous performance management—combining OKR goal tracking, quarterly check-ins, peer feedback, and data-driven bell curve calibrations into an integrated workflow."
      keyFeatures={[
        {
          title: "Goal & OKR Framework Alignment",
          description: "Cascade company-level strategic goals down to department targets and individual key results with measurable quantitative metrics.",
          bulletPoints: ["Percentage progress tracking & milestone updates", "Quarterly & annual goal cycles", "Alignment visualization from CEO to team"],
        },
        {
          title: "Comprehensive 360-Degree Feedback",
          description: "Gather well-rounded evaluations from reporting managers, cross-functional peers, direct subordinates, and self-evaluations.",
          bulletPoints: ["Configurable anonymity controls", "Custom competency rating scales (1 to 5)", "Qualitative comments and development feedback"],
        },
        {
          title: "Continuous 1-on-1 Check-ins",
          description: "Facilitate ongoing coaching conversations between managers and employees with structured agenda templates and action item tracking.",
          bulletPoints: ["Reduces recency bias during annual reviews", "Documented monthly check-in history", "Private manager notes & guidance logs"],
        },
        {
          title: "Bell Curve & Rating Normalization",
          description: "Calibrate appraisal ratings across departments using customizable bell curve distribution models to prevent managerial bias.",
          bulletPoints: ["Visual rating distribution histograms", "Manager override justification workflow", "Executive leadership calibration panel"],
        },
        {
          title: "Promotion & Increment Recommendations",
          description: "Link validated appraisal ratings directly with salary revisions, bonuses, and title promotions for streamlined payroll handoffs.",
          bulletPoints: ["Budget-capped increment simulators", "Automated appraisal letter generation", "Direct payroll salary revision sync"],
        },
        {
          title: "Skill Gap & Training Needs Analysis",
          description: "Identify organizational skill shortages from review scores and automatically enroll employees into recommended development programs.",
          bulletPoints: ["Individual development plans (IDPs)", "Competency matrix scorecards", "Post-training evaluation tracking"],
        },
      ]}
      businessBenefits={[
        {
          metric: "3x",
          title: "Higher Goal Achievement Velocity",
          description: "Regular OKR check-ins keep teams focused on high-priority deliverables rather than reacting to ad-hoc distractions.",
        },
        {
          metric: "Zero Bias",
          title: "Fair, Calibrated Appraisals",
          description: "Objective ratings backed by continuous work logs and 360 feedback eliminate favoritism and employee dissatisfaction.",
        },
        {
          metric: "25%",
          title: "Reduction in Top Performer Churn",
          description: "Transparent career paths, timely recognition, and competitive performance-linked incentives retain your top talent.",
        },
      ]}
      workflowSteps={[
        {
          step: "01",
          title: "Goal Setting & OKR Cascade",
          description: "At the start of the appraisal cycle, managers and employees define 3-5 measurable key results and milestone dates.",
        },
        {
          step: "02",
          title: "Continuous Check-ins",
          description: "Employees update progress percentages bi-weekly and conduct monthly 1-on-1 coaching conversations with managers.",
        },
        {
          step: "03",
          title: "360 Review & Evaluation",
          description: "Self-reviews, peer feedback, and manager evaluations are collected through standardized competency rating forms.",
        },
        {
          step: "04",
          title: "Calibration & Revision",
          description: "HR leaders normalize departmental ratings, finalize increment letters, and push new CTC figures straight to payroll.",
        },
      ]}
      faqs={[
        {
          question: "Can we use our company's existing rating scale (e.g. 1-5 or descriptive bands)?",
          answer: "Yes. Shenll HRMS supports customizable rating scales, weighting percentages (e.g. 70% Goals + 30% Core Values), and custom qualitative questionnaire sections.",
        },
        {
          question: "Are peer reviews kept anonymous?",
          answer: "HR admins can configure peer reviews to be fully anonymous, visible only to managers, or transparent, based on your company's organizational culture.",
        },
        {
          question: "How does Shenll HRMS sync approved increments with payroll?",
          answer: "Once leadership approves the final appraisal cycle ratings and increment percentages, new basic pay and allowance structures update automatically for the effective payroll month.",
        },
      ]}
      relatedModules={[
        {
          title: "Project & Task Management",
          href: "/project-management",
          description: "Evaluate actual project delivery velocities and billable timesheet records.",
        },
        {
          title: "Payroll Software",
          href: "/payroll-software",
          description: "Instantly disburse performance bonuses and updated salary bands.",
        },
        {
          title: "AI HRMS Features",
          href: "/ai-hrms",
          description: "Predict high-performer attrition risks and recommend retention strategies.",
        },
      ]}
    />
  );
}
