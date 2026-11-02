import type { Metadata } from "next";
import ProductLandingLayout from "@/components/ProductLandingLayout";

export const metadata: Metadata = {
  title: "Attendance Management Software — Biometric & Geo-Fenced Tracking",
  description:
    "Real-time attendance tracking software by Shenll HRMS. Seamless biometric machine integration, rotational shifts, GPS mobile punch-in, and auto-LOP calculations.",
  alternates: {
    canonical: "https://shenllhrms.com/attendance-management-software",
  },
  openGraph: {
    title: "Attendance Management Software — Biometric & GPS Sync | Shenll HRMS",
    description: "Eliminate buddy punching and manual shift tracking with real-time biometric and mobile sync.",
    url: "https://shenllhrms.com/attendance-management-software",
  },
};

export default function AttendanceSoftwarePage() {
  return (
    <ProductLandingLayout
      badge="Smart Time & Attendance Engine"
      h1="Accurate, Real-Time Workforce Attendance Management"
      tagline="Capture every working hour accurately. Seamlessly synchronize biometric turnstiles, RFID sensors, and mobile GPS check-ins directly into your monthly payroll."
      overviewHeading="Eliminate Time Theft, Buddy Punching & Manual Shift Discrepancies"
      overviewDescription="Whether your team works in an office, on a manufacturing floor across rotational night shifts, or in the field, Shenll HRMS captures punches with high accuracy and feeds verified attendance data directly into leave and payroll systems."
      keyFeatures={[
        {
          title: "Direct Biometric Hardware Integration",
          description: "Connect finger scanners, facial recognition cameras, and RFID card readers directly to the cloud via secure API listeners.",
          bulletPoints: ["Works with leading biometric brands", "Real-time punch sync without delay", "Automated offline punch caching & upload"],
        },
        {
          title: "Geo-Fenced Mobile Punch-In",
          description: "Enable sales representatives, delivery staff, and site engineers to check in on the Shenll HRMS mobile app within configured GPS perimeters.",
          bulletPoints: ["Radius-based geo-fence boundary limits", "Selfie capture verification", "Live location coordinate stamping"],
        },
        {
          title: "Complex Multi-Shift & Roster Management",
          description: "Easily plan day, evening, and night shifts. Assign rotational schedules, weekend rules, and automated shift-swap approvals.",
          bulletPoints: ["Auto-detection of shift based on punch time", "Rotational weekly shift allocations", "Night shift differential calculation"],
        },
        {
          title: "Grace Periods & Overtime (OT) Rules",
          description: "Define late-coming grace periods (e.g., 15 minutes), half-day deduction rules for chronic delays, and approved overtime tracking.",
          bulletPoints: ["3-strikes late arrival policy", "Manager overtime pre-approval workflow", "Double-rate weekend/holiday OT formulas"],
        },
        {
          title: "Attendance Regularization Workflow",
          description: "Employees can submit attendance regularization requests if they forgot to punch or were on official duty, with instant manager review.",
          bulletPoints: ["On-duty (OD) gate pass requests", "Instant reporting manager push alerts", "Reason tagging with documentation"],
        },
        {
          title: "Real-time Attendance Dashboard",
          description: "Live floor status showing who is present, absent, on leave, or late across multiple branches and departments.",
          bulletPoints: ["Real-time headcount status", "Absence alert triggers", "Exportable daily muster rolls"],
        },
      ]}
      businessBenefits={[
        {
          metric: "100%",
          title: "Elimination of Buddy Punching",
          description: "Biometric and geo-fenced verification ensure that only the actual employee can record their arrival and departure.",
        },
        {
          metric: "15+ Hrs",
          title: "Saved Monthly on Roster Planning",
          description: "Say goodbye to weekly WhatsApp shift planning. Allocate rotational rosters with simple visual drag-and-drop calendars.",
        },
        {
          metric: "Zero",
          title: "Payroll Dispute Over Loss of Pay",
          description: "Transparent daily logs accessible to employees on their phone eliminate disputes over late arrivals and LOP deductions.",
        },
      ]}
      workflowSteps={[
        {
          step: "01",
          title: "Punch Recorded",
          description: "Employee marks attendance via office biometric device, facial recognition turnstile, or mobile geo-fenced app.",
        },
        {
          step: "02",
          title: "Cloud Engine Validation",
          description: "Shenll HRMS matches the punch against the employee assigned shift, grace period, and break duration.",
        },
        {
          step: "03",
          title: "Real-time Muster Update",
          description: "Daily muster roll reflects present, half-day, or absent status. Discrepancies trigger regularization prompts.",
        },
        {
          step: "04",
          title: "Direct Payroll Ingestion",
          description: "At month-end, total present days, approved overtime, and LOP count flow straight into salary calculation.",
        },
      ]}
      faqs={[
        {
          question: "Can we use our existing biometric devices with Shenll HRMS?",
          answer: "Yes. Shenll HRMS integrates with most standard biometric devices (e.g., ZKTeco, eSSL, Realtime, Mantra) via our lightweight background sync utility that connects to your local machine IP.",
        },
        {
          question: "Can employees punch attendance outside the office geo-fence?",
          answer: "No. The mobile app strictly enforces GPS perimeter coordinates set by the administrator. If an employee is outside the allowed zone, the app restricts check-in and logs a location deviation warning.",
        },
        {
          question: "How does the software handle overnight shifts spanning across two calendar days?",
          answer: "Shenll HRMS has specialized 24-hour overnight shift logic that attributes punch-out hours in the morning back to the original shift date, preventing accidental absence or incorrect overtime calculations.",
        },
      ]}
      relatedModules={[
        {
          title: "Leave Management",
          href: "/leave-management-software",
          description: "Automatically match absent days against approved leave balances.",
        },
        {
          title: "Payroll Software",
          href: "/payroll-software",
          description: "Convert attendance records into accurate statutory salary disbursements.",
        },
        {
          title: "Mobile App",
          href: "/hrms-mobile-app",
          description: "Allow employees to check in with GPS geo-fencing on iOS and Android.",
        },
      ]}
    />
  );
}
