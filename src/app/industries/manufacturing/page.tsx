import type { Metadata } from "next";
import IndustryLayout from "@/components/IndustryLayout";

export const metadata: Metadata = {
  title: "Manufacturing HRMS Software — Shift Rosters & Factory Labor Payroll",
  description:
    "Tailored HRMS software for manufacturing and industrial plants by Shenll HRMS. Multi-shift rotational rosters, biometric turnstile punch-in, overtime calculations, and labor compliance.",
  alternates: {
    canonical: "https://shenllhrms.com/industries/manufacturing",
  },
  openGraph: {
    title: "Manufacturing HRMS Software — Factory Workforce Management | Shenll HRMS",
    description: "Manage 24/7 rotational shifts, overtime tracking, piece-rate wages, and factory compliance.",
    url: "https://shenllhrms.com/industries/manufacturing",
  },
};

export default function ManufacturingPage() {
  return (
    <IndustryLayout
      industryName="Manufacturing & Factory"
      badge="Manufacturing & Industrial Workforce"
      h1="HRMS & Compliant Payroll Built for Manufacturing Plants"
      tagline="Streamline 24/7 rotational shift planning, prevent buddy punching on the production floor, automate complex overtime calculations, and ensure 100% factory compliance."
      industryChallenges={[
        {
          challenge: "24/7 Multi-Shift Roster Conflicts",
          impact: "Unplanned absenteeism on critical production lines causes output delays and costly machine idle time.",
          shenllSolution: "Dynamic rotational shift planning with automated shift swap approvals and instant SMS/WhatsApp notifications.",
        },
        {
          challenge: "Buddy Punching & Time Leakage",
          impact: "Manual card punching or proxy sign-ins lead to inflated labor costs and unauthorized overtime claims.",
          shenllSolution: "Biometric turnstiles with facial recognition and fingerprint scanning directly connected to cloud attendance.",
        },
        {
          challenge: "Complex Overtime & Wage Formulas",
          impact: "Manual calculations of double-rate overtime, night shift allowances, and piece-rate pay lead to wage disputes.",
          shenllSolution: "Automated wage engine computing exact overtime, allowances, and statutory PF/ESI in 1 click.",
        },
      ]}
      tailoredSolutions={[
        {
          title: "Factory Turnstile & Biometric Sync",
          description: "Connect high-throughput turnstiles and gates directly to Shenll HRMS for instantaneous punch-in during shift changeovers.",
          features: [
            "Handles hundreds of worker punches per minute during shift changes",
            "Offline buffer memory prevents punch loss during internet downtime",
            "Real-time floor presence dashboard for plant supervisors",
          ],
        },
        {
          title: "Contractor & Direct Labor Management",
          description: "Manage both permanent factory staff and third-party contract labor on separate muster rolls with uniform compliance.",
          features: [
            "Contractor agency billing verification",
            "Statutory wage register generation (Form 17/Form 22)",
            "Safety induction and certification tracking",
          ],
        },
        {
          title: "Automated Overtime & Night Shift Differential",
          description: "Pre-configured rules for standard overtime and night allowances compliant with the Factories Act.",
          features: [
            "Pre-shift manager OT approval authorization",
            "Automatic rate multipliers for holiday shifts",
            "Overtime hour threshold alerts to prevent worker fatigue",
          ],
        },
        {
          title: "Plant Safety & Asset Issue Tracking",
          description: "Record PPE gear issue (helmets, safety boots, gloves) with digital acknowledgment and replacement schedules.",
          features: [
            "Equipment safety gear logs per worker",
            "Digital incident and injury reporting registry",
            "Medical check-up tracking and renewal reminders",
          ],
        },
      ]}
      complianceHighlights={[
        "Factories Act 1948 overtime rules and working hour limits",
        "Contract Labour (Regulation and Abolition) Act registers",
        "Form 16 & Form 24 muster rolls with automated export",
        "PF, ESI, and Labour Welfare Fund (LWF) monthly returns",
      ]}
      faqs={[
        {
          question: "Can Shenll HRMS handle shifts that change every week (e.g. Morning to Evening to Night)?",
          answer: "Yes. Shenll HRMS features automated rotational shift patterns where workers automatically transition to the next shift cycle weekly or fortnightly without manual admin intervention.",
        },
        {
          question: "How does the software handle biometric turnstiles in heavy industrial environments?",
          answer: "Our system connects with ruggedized industrial facial recognition terminals and optical fingerprint readers that function reliably even with dust, oil, or wet hands.",
        },
        {
          question: "Can plant supervisors approve shift adjustments directly on their phones?",
          answer: "Yes. Supervisors can reassign workers, approve overtime, and view real-time headcount on the Shenll HRMS mobile app directly on the plant floor.",
        },
      ]}
    />
  );
}
