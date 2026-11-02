import type { Metadata } from "next";
import ProductLandingLayout from "@/components/ProductLandingLayout";

export const metadata: Metadata = {
  title: "HRMS Mobile App — Android & iOS Employee Self-Service",
  description:
    "Native HRMS mobile application for iOS and Android by Shenll HRMS. Geo-fenced mobile attendance, leave applications, payslip downloads, and task work logs.",
  alternates: {
    canonical: "https://shenllhrms.com/hrms-mobile-app",
  },
  openGraph: {
    title: "HRMS Mobile App (Android & iOS) | Shenll HRMS",
    description: "Manage attendance, leaves, payslips, and shift rosters directly from your smartphone.",
    url: "https://shenllhrms.com/hrms-mobile-app",
  },
};

export default function MobileAppPage() {
  return (
    <ProductLandingLayout
      badge="iOS & Android Mobile HRMS"
      h1="Your Complete HRMS, Available in Your Pocket"
      tagline="Empower your on-site, hybrid, and deskless field workforce with a modern mobile app. Mark GPS attendance, apply for leaves, download payslips, and log daily work in seconds."
      heroImage="/payrol-phone-img-1.webp"
      overviewHeading="Built for Deskless Workers, Field Crews & Hybrid Teams"
      overviewDescription="Not all employees sit behind a desktop computer. The Shenll HRMS mobile app brings all self-service capabilities to smartphones—ensuring factory staff, sales teams, drivers, and site engineers remain fully connected to company HR operations wherever they operate."
      keyFeatures={[
        {
          title: "Geo-Fenced Mobile Punch-In / Punch-Out",
          description: "Allows employees to record attendance from their smartphone with automatic GPS perimeter validation and timestamp stamping.",
          bulletPoints: ["Configurable office & job site geo-fences", "Location accuracy verification", "Offline punch mode with auto-sync"],
        },
        {
          title: "1-Tap Leave Requests & Balances",
          description: "Apply for sick, casual, or earned leave on the go; view accrued balances, remaining quotas, and upcoming company holidays.",
          bulletPoints: ["Instant push alerts to reporting managers", "Live leave calendar visibility", "Document upload for medical certificates"],
        },
        {
          title: "Encrypted Payslip Downloads",
          description: "Employees can view monthly salary breakdowns, deductions (PF, ESI, TDS), and download password-protected PDF payslips anytime.",
          bulletPoints: ["Historical salary slip archives", "Download & share securely", "Annual tax deduction summary view"],
        },
        {
          title: "Daily Work Logs & Task Timesheets",
          description: "Log daily work hours, task milestones, and sprint progress directly from the mobile app for manager review.",
          bulletPoints: ["Assigned project task list", "Quick time duration logger", "Milestone status updates (In Progress / Done)"],
        },
        {
          title: "Instant Mobile Push Notifications",
          description: "Stay updated on critical approvals, shift roster changes, company announcements, and emergency HR broadcasts in real time.",
          bulletPoints: ["Leave & expense approval alerts", "Manager regularization prompts", "Company-wide digital bulletin board"],
        },
        {
          title: "Helpdesk & Query Ticket Submission",
          description: "Submit HR, IT, and administrative support tickets directly from the mobile device and monitor resolution progress.",
          bulletPoints: ["Photo attachment from smartphone camera", "Priority categorization", "Direct communication thread with HR desk"],
        },
      ]}
      businessBenefits={[
        {
          metric: "100%",
          title: "Field & Remote Workforce Reach",
          description: "Connect employees without company email addresses or laptops directly into enterprise HR operations via their smartphones.",
        },
        {
          metric: "Zero",
          title: "Paper Leave Slips & Time Sheets",
          description: "Eliminate manual paper attendance registers and handwritten leave slips with digital mobile check-ins.",
        },
        {
          metric: "4.8★",
          title: "App Store Verified Experience",
          description: "Available on Google Play and Apple App Store with high employee adoption and intuitive interface design.",
        },
      ]}
      workflowSteps={[
        {
          step: "01",
          title: "App Store Download",
          description: "Employee downloads the official Shenll HRMS app from Google Play Store or Apple App Store.",
        },
        {
          step: "02",
          title: "Secure Mobile Login",
          description: "Login with company domain credentials and optional biometric fingerprint/FaceID phone authentication.",
        },
        {
          step: "03",
          title: "Everyday Self-Service",
          description: "Punch GPS attendance within designated geofences, log daily tasks, and check shift roster times.",
        },
        {
          step: "04",
          title: "Payday On Mobile",
          description: "Receive push notification on salary day, review earnings, and download the official encrypted PDF payslip.",
        },
      ]}
      faqs={[
        {
          question: "Where can our employees download the Shenll HRMS mobile app?",
          answer: "The mobile app is officially published and available for download on the Google Play Store (Android) and Apple App Store (iOS) under 'Shenll HRMS'.",
        },
        {
          question: "Does the app track employee GPS locations continuously throughout the day?",
          answer: "No. Shenll HRMS respects employee privacy. Location data is only accessed momentarily at the exact time of attendance check-in or check-out to verify geo-fence proximity.",
        },
        {
          question: "Can managers approve requests on the mobile app?",
          answer: "Yes. Managers receive actionable push notifications allowing them to approve or reject leave applications, timesheets, and attendance regularizations in a single tap.",
        },
      ]}
      relatedModules={[
        {
          title: "Attendance Management",
          href: "/attendance-management-software",
          description: "Integrate mobile GPS punches with biometric office turnstiles.",
        },
        {
          title: "Payroll Software",
          href: "/payroll-software",
          description: "Deliver digital payslips directly to employee smartphones.",
        },
        {
          title: "Leave Management",
          href: "/leave-management-software",
          description: "Instant mobile leave requests and live balance ledger.",
        },
      ]}
    />
  );
}
