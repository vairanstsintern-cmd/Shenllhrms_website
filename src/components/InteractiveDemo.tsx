"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Clock,
  FolderKanban,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  FileText,
  Download,
  Calendar,
} from "lucide-react";

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "employees" | "payroll" | "attendance" | "projects" | "ai"
  >("dashboard");

  return (
    <div className="ron-card border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(14,21,27,0.08)] overflow-hidden bg-white">
      {/* Interactive Tabs Header — RonDesign Segmented Pill Style */}
      <div className="p-4 sm:p-6 border-b border-slate-100 bg-[#FBFDFD]">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0E151B] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Shenll Cloud Platform v3.8</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#0E151B] tracking-tight mt-0.5">
                Unified Workforce Workspace
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF3F2] text-xs font-semibold text-[#0E151B]">
              <span className="w-2 h-2 rounded-full bg-[#9DF52A] animate-pulse"></span>
              Live Connected Sandbox
            </div>
          </div>
        </div>

        {/* Tab Buttons — RonDesign Segmented Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#EEF3F2] rounded-full overflow-x-auto no-scrollbar w-max max-w-full">
          {[
            { id: "dashboard", label: "Executive Dashboard", icon: LayoutDashboard },
            { id: "employees", label: "Employee Directory", icon: Users },
            { id: "payroll", label: "1-Click Payroll", icon: CreditCard },
            { id: "attendance", label: "Attendance & Shifts", icon: Clock },
            { id: "projects", label: "Projects & Tasks", icon: FolderKanban },
            { id: "ai", label: "AI Insights & Reports", icon: Sparkles },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-[#0E151B] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#0E151B] hover:bg-white/60"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Screen Content */}
      <div className="p-6 sm:p-8 bg-[#EEF3F2]/60">
        {/* DASHBOARD TAB — RonDesign Bento Grid */}
        {activeTab === "dashboard" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Top RonDesign Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="ron-card p-5 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Workforce</span>
                  <span className="ron-badge-lime">+8 New</span>
                </div>
                <p className="text-3xl font-black text-[#0E151B] tracking-tight">142</p>
                <p className="text-xs text-slate-500 mt-2 font-medium">96% Active On-Roster</p>
              </div>

              <div className="ron-card p-5 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Attendance</span>
                  <span className="ron-badge-lime">96.4%</span>
                </div>
                <p className="text-3xl font-black text-[#0E151B] tracking-tight">137</p>
                <p className="text-xs text-slate-500 mt-2 font-medium">5 on approved leave</p>
              </div>

              <div className="ron-card p-5 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Payroll Cycle</span>
                  <span className="ron-badge-blue">100% Tax OK</span>
                </div>
                <p className="text-3xl font-black text-[#0E151B] tracking-tight">₹68.4L</p>
                <p className="text-xs text-slate-500 mt-2 font-medium">PF / ESI / TDS reconciled</p>
              </div>

              <div className="ron-card p-5 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Approvals</span>
                  <span className="ron-badge-orange">3 Urgent</span>
                </div>
                <p className="text-3xl font-black text-[#0E151B] tracking-tight">3</p>
                <p className="text-xs text-slate-500 mt-2 font-medium">2 Leaves · 1 Expense claim</p>
              </div>
            </div>

            {/* RonDesign Bento Showcase Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left: Graphic preview */}
              <div className="lg:col-span-8 ron-card p-3 sm:p-4 bg-white overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0E151B]">Live HR Console View</span>
                    <span className="text-[10px] text-slate-400 font-mono">hrms.shenll.com</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                  </div>
                </div>
                <div className="relative h-[300px] sm:h-[380px] w-full rounded-2xl overflow-hidden bg-slate-50">
                  <Image
                    src="/hero-section-img.webp"
                    alt="Shenll HRMS Actual Dashboard Preview"
                    fill
                    className="object-contain object-top p-2"
                  />
                </div>
              </div>

              {/* Right: RonDesign Health & Credit Gauge Panel */}
              <div className="lg:col-span-4 ron-card p-6 bg-gradient-to-br from-white via-[#F8FBFA] to-[#EEF7F4] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">System Pulse</span>
                    <span className="ron-badge-lime">Optimal</span>
                  </div>
                  <h4 className="text-xl font-black text-[#0E151B] tracking-tight">Workforce Health</h4>
                  <p className="text-xs text-slate-500 mt-1">Real-time attendance & statutory compliance score</p>

                  {/* RonDesign Speedometer Gauge Inspired Widget */}
                  <div className="my-6 flex flex-col items-center justify-center relative">
                    <div className="relative w-40 h-24 flex items-center justify-center overflow-hidden">
                      <div className="w-36 h-36 rounded-full border-[10px] border-[#EEF3F2] border-t-[#9DF52A] border-r-[#FFD124] border-l-[#FF6B35] transform rotate-45" />
                      <div className="absolute top-8 flex flex-col items-center">
                        <span className="text-3xl font-black text-[#0E151B]">98.2</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Score</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 mt-2 ron-badge-lime">
                      <TrendingUp className="w-3 h-3" />
                      <span>+4.2 pts this month</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-slate-500 font-medium">Biometric Sync Uptime</span>
                    <span className="font-bold text-[#0E151B]">99.98%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-slate-500 font-medium">Statutory Compliance</span>
                    <span className="font-bold text-[#2F6B00]">100% Tax Proof</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-slate-500 font-medium">Turnover Risk Index</span>
                    <span className="font-bold text-[#0E151B]">Low (2.1%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EMPLOYEE MANAGEMENT TAB */}
        {activeTab === "employees" && (
          <div className="space-y-4 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
              <div>
                <h4 className="text-base font-bold text-[#123B50]">
                  Employee Directory (Active Roster)
                </h4>
                <p className="text-xs text-[#64748B]">
                  Centralized records with departmental hierarchy, CTC, statutory IDs, and leave quota.
                </p>
              </div>
              <button className="px-3.5 py-1.5 bg-[#087E8B] text-white rounded-lg text-xs font-semibold hover:bg-[#123B50] transition-colors">
                + Add Employee
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-[#64748B] uppercase tracking-wider font-semibold">
                    <th className="py-3 px-3">Emp ID</th>
                    <th className="py-3 px-3">Employee Name</th>
                    <th className="py-3 px-3">Department</th>
                    <th className="py-3 px-3">Designation</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3">Shift</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-[#263746]">
                  {[
                    { id: "SH-0101", name: "Ananya Sharma", dept: "Engineering", role: "Senior Backend Lead", status: "Active", shift: "General (9am-6pm)" },
                    { id: "SH-0102", name: "Venkatesh Prasad", dept: "Manufacturing", role: "Plant Quality Inspector", status: "Active", shift: "Morning Shift (6am-2pm)" },
                    { id: "SH-0103", name: "Pooja Sundaram", dept: "Human Resources", role: "HR Operations Specialist", status: "Active", shift: "General (9am-6pm)" },
                    { id: "SH-0104", name: "Mohammad Irfan", dept: "Logistics", role: "Fleet Coordinator", status: "On Leave", shift: "Rotational" },
                    { id: "SH-0105", name: "Kavitha R.", dept: "Product Design", role: "UI/UX Designer", status: "Active", shift: "Flexible (Remote)" },
                  ].map((emp) => (
                    <tr key={emp.id} className="hover:bg-[#F4F7FA]/70">
                      <td className="py-3 px-3 font-mono font-medium text-[#087E8B]">{emp.id}</td>
                      <td className="py-3 px-3 font-semibold text-[#123B50]">{emp.name}</td>
                      <td className="py-3 px-3">{emp.dept}</td>
                      <td className="py-3 px-3 text-[#64748B]">{emp.role}</td>
                      <td className="py-3 px-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            emp.status === "Active"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {emp.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#64748B]">{emp.shift}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PAYROLL TAB */}
        {activeTab === "payroll" && (
          <div className="space-y-6 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#087E8B]">
                  Payroll Run Preview
                </span>
                <h4 className="text-base font-bold text-[#123B50]">
                  October 2026 Monthly Payroll Cycle
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F4F7FA] border border-[#E2E8F0] text-[#123B50] rounded-lg text-xs font-semibold">
                  <Download className="w-3.5 h-3.5" /> Export Bank File
                </button>
                <button className="px-3.5 py-1.5 bg-[#F59E0B] text-white rounded-lg text-xs font-bold hover:bg-[#D97706] transition-colors">
                  Lock & Disburse
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#F4F7FA] border border-[#E2E8F0]">
                <p className="text-xs text-[#64748B]">Gross Salary Payable</p>
                <p className="text-xl font-bold text-[#123B50] mt-1">₹74,20,400</p>
                <p className="text-[11px] text-[#64748B] mt-1">142 Employees calculated</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4F7FA] border border-[#E2E8F0]">
                <p className="text-xs text-[#64748B]">Statutory Deductions</p>
                <p className="text-xl font-bold text-[#087E8B] mt-1">₹5,75,200</p>
                <p className="text-[11px] text-[#64748B] mt-1">PF ₹3.8L · ESI ₹85k · TDS ₹1.1L</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <p className="text-xs text-emerald-800 font-semibold">Net Payout to Bank</p>
                <p className="text-xl font-bold text-emerald-900 mt-1">₹68,45,200</p>
                <p className="text-[11px] text-emerald-700 mt-1">Auto-generated Form 16 / Payslips</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-[#E2E8F0] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-[#123B50]">
                  Sandwich leave rule, LOP calculation & biometric sync validated 100%.
                </span>
              </div>
              <span className="text-[#087E8B] font-semibold cursor-pointer hover:underline">
                View Payslip Sample
              </span>
            </div>
          </div>
        )}

        {/* ATTENDANCE TAB */}
        {activeTab === "attendance" && (
          <div className="space-y-4 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <div>
                <h4 className="text-base font-bold text-[#123B50]">
                  Today Attendance & Punch-in Realtime Log
                </h4>
                <p className="text-xs text-[#64748B]">
                  Synchronized from biometric turnstiles, RFID sensors, and Geo-Fenced Mobile App.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-bold">
                Auto-Sync Live
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-[#F4F7FA] rounded-xl text-center">
                <p className="text-xs text-[#64748B]">On Time Punches</p>
                <p className="text-lg font-bold text-emerald-600">128</p>
              </div>
              <div className="p-3 bg-[#F4F7FA] rounded-xl text-center">
                <p className="text-xs text-[#64748B]">Late Arrivals (&gt;15 min)</p>
                <p className="text-lg font-bold text-amber-600">9</p>
              </div>
              <div className="p-3 bg-[#F4F7FA] rounded-xl text-center">
                <p className="text-xs text-[#64748B]">Approved Leave / WFH</p>
                <p className="text-lg font-bold text-[#087E8B]">5</p>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              {[
                { time: "08:54 AM", name: "Ananya Sharma", mode: "Geo-Fenced Mobile Punch", status: "On-Time (9:00 AM Shift)" },
                { time: "08:58 AM", name: "Venkatesh Prasad", mode: "Biometric Fingerprint #Device-02", status: "On-Time" },
                { time: "09:18 AM", name: "Kavitha R.", mode: "Web Portal Check-in", status: "Grace Period (+18 min)" },
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#F4F7FA] text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-[#087E8B]">{log.time}</span>
                    <span className="font-semibold text-[#123B50]">{log.name}</span>
                    <span className="text-[#64748B] hidden sm:inline">via {log.mode}</span>
                  </div>
                  <span className="font-medium text-slate-700">{log.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <div className="space-y-4 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <div>
                <h4 className="text-base font-bold text-[#123B50]">
                  Project Task & Timesheet Allocation
                </h4>
                <p className="text-xs text-[#64748B]">
                  Track project milestone deliverables, billable hours, and engineer utilization.
                </p>
              </div>
              <button className="px-3 py-1.5 bg-[#087E8B] text-white rounded-lg text-xs font-semibold">
                + New Project
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-[#E2E8F0] bg-white space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-sm text-[#123B50]">Automotive MES Platform Phase 2</h5>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">In Progress</span>
                </div>
                <p className="text-xs text-[#64748B]">Client: TurboTech Automotive · 6 Engineers allocated</p>
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#64748B] mb-1">
                    <span>Milestone Progress</span>
                    <span>74%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#087E8B] rounded-full" style={{ width: "74%" }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-1">
                  <span>Logged Hours: 320 hrs</span>
                  <span>Budget: ₹12,00,000</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-[#E2E8F0] bg-white space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-sm text-[#123B50]">Hospital Staff Roster Digitization</h5>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Testing & UAT</span>
                </div>
                <p className="text-xs text-[#64748B]">Client: Metro Care Hospitals · 4 Specialists allocated</p>
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#64748B] mb-1">
                    <span>Milestone Progress</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-1">
                  <span>Logged Hours: 195 hrs</span>
                  <span>Budget: ₹6,50,000</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI INSIGHTS TAB */}
        {activeTab === "ai" && (
          <div className="space-y-4 bg-gradient-to-br from-[#0f2735] to-[#123B50] p-6 rounded-2xl text-white shadow-sm animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#19B5A5]" />
                <h4 className="text-base font-bold text-white">
                  Shenll AI Adaptive Workforce Engine
                </h4>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#19B5A5]/20 text-[#19B5A5] border border-[#19B5A5]/40">
                Natural Language Query
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 text-xs text-slate-200">
              <p className="text-[#19B5A5] font-semibold mb-1">
                Prompt to Shenll AI:
              </p>
              <p className="italic font-mono">
                &ldquo;Show me teams with highest overtime this month and calculate fatigue risk.&rdquo;
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300">
                    ⚠️ AI Insight: Logistics Night Shift Overtime +38%
                  </span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">Action Recommended</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fleet maintenance staff logged an extra 42 overtime hours across 3 consecutive weeks. AI suggests redistributing 2 drivers from the afternoon roster to prevent fatigue penalties and optimize cost by ₹18,400.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#19B5A5]">
                    💡 AI Skill Match: React Native & Golang Project
                  </span>
                  <span className="text-[10px] bg-[#19B5A5]/20 text-[#19B5A5] px-2 py-0.5 rounded">Optimal Team Matched</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Matched 3 engineers with matching skillset, upcoming project completion dates, and 98% quality ratings. Allocation proposal ready for 1-click team lead approval.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
