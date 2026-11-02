import type { Metadata } from "next";
import IndustryLayout from "@/components/IndustryLayout";

export const metadata: Metadata = {
  title: "Logistics & Supply Chain HRMS — Driver Rosters, Hub Shifts & Mobile Sync",
  description:
    "Tailored HRMS software for Logistics and Transport fleets by Shenll HRMS. Manage driver rosters, transit trip allowances, hub shifts, and mobile check-ins.",
  alternates: {
    canonical: "https://shenllhrms.com/industries/logistics",
  },
  openGraph: {
    title: "Logistics & Supply Chain HRMS Software | Shenll HRMS",
    description: "Manage driver rosters, warehouse hub shifts, trip bata, and mobile attendance sync.",
    url: "https://shenllhrms.com/industries/logistics",
  },
};

export default function LogisticsPage() {
  return (
    <IndustryLayout
      industryName="Logistics & Supply Chain"
      badge="Transport, Fleet & Warehouse Operations"
      h1="HRMS & Field Roster Management for Logistics & Warehousing"
      tagline="Synchronize multi-hub warehouse shifts, track long-haul driver attendance, automate trip bata allowances, and maintain driver licensing compliance across your fleet."
      industryChallenges={[
        {
          challenge: "Mobile & Long-Haul Driver Attendance",
          impact: "Drivers traveling across inter-state corridors cannot punch in at fixed office terminals, leading to delayed trip allowance reconciliation.",
          shenllSolution: "Mobile app with GPS geo-tagged check-ins and automatic transit trip tracking.",
        },
        {
          challenge: "24/7 Sorting Hub & Warehouse Shifts",
          impact: "E-commerce distribution centers face peak-hour loading bottlenecks when night-shift warehouse labor fails to report on time.",
          shenllSolution: "Automated warehouse shift scheduling with biometric turnstiles and real-time shortfall notifications.",
        },
        {
          challenge: "Trip Bata & Travel Allowance Calculation",
          impact: "Manual trip sheets and fuel expense slips take weeks to verify, causing cash-flow friction for drivers.",
          shenllSolution: "1-click trip allowance calculation based on verified route logs and automated reimbursement in payroll.",
        },
      ]}
      tailoredSolutions={[
        {
          title: "Fleet Driver Management & Roster Planning",
          description: "Schedule long-haul and last-mile driver rotations with mandatory rest intervals to comply with transport safety regulations.",
          features: [
            "Mandatory rest period enforcement between trips",
            "Driving license validity tracking with renewal notifications",
            "Emergency SOS broadcast feature within the driver mobile app",
          ],
        },
        {
          title: "Multi-Hub Warehouse Biometric Sync",
          description: "Unify attendance data across Mother Hubs, sorting centers, and last-mile delivery fulfillment centers under one dashboard.",
          features: [
            "Real-time warehouse headcount during peak sorting hours",
            "Automated shift allowance and overtime calculation",
            "Temporary festive season contract worker management",
          ],
        },
        {
          title: "Trip Bata & Fuel Allowance Automation",
          description: "Configure per-kilometer, per-day, or inter-state fixed trip allowances calculated automatically upon trip completion.",
          features: [
            "Direct sync between fleet dispatch and HRMS trip allowance",
            "Camera upload of toll receipts and fuel vouchers on mobile app",
            "Fast reimbursement crediting directly to driver bank accounts",
          ],
        },
        {
          title: "Driver Vehicle Incident & Penalty Tracking",
          description: "Maintain records of traffic citations, vehicle maintenance handovers, and safe driving incentive bonuses.",
          features: [
            "Clean driving record bonus payout calculation",
            "Vehicle handover acknowledgment checklists",
            "Accident insurance coverage documentation vault",
          ],
        },
      ]}
      complianceHighlights={[
        "Motor Transport Workers Act 1961 compliance",
        "Commercial vehicle driving license verification",
        "PF & ESI coverage for inter-state transport workers",
        "Statutory minimum wage compliance across warehouse hubs",
      ]}
      faqs={[
        {
          question: "Can drivers mark attendance when driving through areas without cell service?",
          answer: "Yes. The Shenll HRMS mobile app logs GPS location stamps locally on the phone's encrypted storage and uploads them automatically as soon as the vehicle enters cellular coverage.",
        },
        {
          question: "Can we configure different trip allowances for different vehicle categories?",
          answer: "Yes. You can configure customized daily bata rates for 2-wheeler delivery riders, medium commercial vehicles (MCV), and heavy multi-axle trailers.",
        },
        {
          question: "How does Shenll HRMS manage seasonal warehouse worker spikes during Diwali/festivals?",
          answer: "You can import hundreds of temporary festive warehouse workers using bulk Excel templates and generate short-term employment IDs with biometric access in minutes.",
        },
      ]}
    />
  );
}
