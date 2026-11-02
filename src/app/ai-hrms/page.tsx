import type { Metadata } from "next";
import ProductLandingLayout from "@/components/ProductLandingLayout";

export const metadata: Metadata = {
  title: "AI HRMS Software — Adaptive Workforce Automation & Predictive Analytics",
  description:
    "Next-generation AI HRMS by Shenll HRMS. Features Workforce AI Agents, automated task orchestration, predictive attrition signals, and natural language report queries.",
  alternates: {
    canonical: "https://shenllhrms.com/ai-hrms",
  },
  openGraph: {
    title: "AI HRMS — Adaptive Workforce Intelligence Platform | Shenll HRMS",
    description: "Make HR operations truly intelligent with autonomous AI agents, talent matching, and natural language analytics.",
    url: "https://shenllhrms.com/ai-hrms",
  },
};

export default function AiHrmsPage() {
  return (
    <ProductLandingLayout
      badge="Adaptive AI Workforce Intelligence"
      h1="Make Your Entire HR Operations Intelligent with AI"
      tagline="Move beyond passive HR databases. Shenll HRMS deploys purposeful AI agents that autonomously match talent to projects, balance workforce capacity, and surface predictive HR insights in natural language."
      heroImage="/ai-features-img.webp"
      overviewHeading="An Intelligent Core That Analyzes, Predicts & Optimizes Human Resources"
      overviewDescription="Traditional HR software simply records what happened in the past. Shenll HRMS uses an Adaptive Intelligence Engine to predict future bottlenecks—such as upcoming attrition spikes, project team burnout, and shift absenteeism—while answering complex HR queries instantly in plain English."
      keyFeatures={[
        {
          title: "Workforce AI Agent",
          description: "Intelligently recommends project team compositions and shift allocations using live skill matrices, current workload capacity, availability calendars, and past ratings.",
          bulletPoints: ["Automated skill-to-task matching", "Cross-departmental bench recommendations", "Minimizes project ramping delays"],
        },
        {
          title: "AI Task Orchestration & Load Balancing",
          description: "Automatically suggests task re-allocations when team members are overburdened or call in sick, ensuring project milestones remain on schedule.",
          bulletPoints: ["Real-time burnout risk detection", "Automated reallocation suggestions", "Capacity threshold notifications for managers"],
        },
        {
          title: "Predictive Attrition Intelligence",
          description: "Detect early indicators of employee dissatisfaction and turnover risk by analyzing tenure, overtime frequency, leave patterns, and appraisal trends.",
          bulletPoints: ["Early flight risk warning dashboard", "Actionable retention strategy recommendations", "Historical pattern learning"],
        },
        {
          title: "Natural Language AI Report Generation",
          description: "Ask questions in conversational English (e.g. 'Show me departments with over 15% overtime this month') and receive instant tables and visualizations.",
          bulletPoints: ["Zero complex SQL or Excel formulas needed", "Instant downloadable chart exports", "Accessible to business managers and executives"],
        },
        {
          title: "Custom Organizational AI Agents",
          description: "Configure specialized reasoning agents tailored to your company's proprietary SOPs, compliance handbooks, and internal escalation protocols.",
          bulletPoints: ["Company policy reasoning bots", "Automated employee HR query resolution", "Compliant with strict data boundaries"],
        },
        {
          title: "Shift Roster & Overtime Optimization",
          description: "AI analyzes historical production demand to generate optimal rotational shift rosters, reducing unnecessary contractor overtime costs.",
          bulletPoints: ["Predictive attendance forecasting", "Optimal staffing level recommendations", "Overtime budget containment"],
        },
      ]}
      businessBenefits={[
        {
          metric: "70%",
          title: "Faster Ad-Hoc Report Generation",
          description: "Executives get immediate answers to complex workforce queries without waiting days for HR MIS teams to compile spreadsheets.",
        },
        {
          metric: "30%",
          title: "Reduction in Preventable Attrition",
          description: "Identify and resolve burnout or disengagement signals proactively before key talent submits their resignation.",
        },
        {
          metric: "20%+",
          title: "Savings on Unplanned Overtime Costs",
          description: "Intelligently balance shift staffing and project hours to prevent costly overtime penalties across production floors.",
        },
      ]}
      workflowSteps={[
        {
          step: "01",
          title: "Continuous Ingestion",
          description: "The AI engine securely processes anonymized attendance patterns, project timesheets, skills, and leave requests.",
        },
        {
          step: "02",
          title: "Pattern Recognition",
          description: "Machine learning models identify workload imbalances, skill deficits, and shift absenteeism anomalies.",
        },
        {
          step: "03",
          title: "Actionable Insights",
          description: "Managers receive actionable recommendations (e.g., 'Reassign 2 tasks to avoid milestone delay') with 1-click approvals.",
        },
        {
          step: "04",
          title: "Natural Language Queries",
          description: "Leadership asks ad-hoc operational questions and instantly views generated data visualizations and trend summaries.",
        },
      ]}
      faqs={[
        {
          question: "Is our company data used to train public AI models?",
          answer: "No. Shenll HRMS strictly respects enterprise data privacy. Your organization's employee records and operational data are isolated and never shared with or used to train third-party public AI models.",
        },
        {
          question: "Can managers query the AI using plain English questions?",
          answer: "Yes. You can ask queries such as 'Which department had the most sick leaves in October?' or 'Find React developers with under 60% workload' and receive instant structured responses.",
        },
        {
          question: "Does the AI make hiring or termination decisions automatically?",
          answer: "No. Shenll HRMS AI acts strictly as an intelligent co-pilot. It provides recommendations, trend warnings, and draft allocations; all operational decisions always require explicit human manager approval.",
        },
      ]}
      relatedModules={[
        {
          title: "HRMS Software",
          href: "/hrms-software",
          description: "Explore the complete enterprise platform powered by Shenll AI.",
        },
        {
          title: "Project Management",
          href: "/project-management",
          description: "Leverage AI task orchestration to prevent milestone slip.",
        },
        {
          title: "Performance Management",
          href: "/performance-management-software",
          description: "Correlate performance OKRs with predictive workforce retention.",
        },
      ]}
    />
  );
}
