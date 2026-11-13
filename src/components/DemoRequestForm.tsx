"use client";

import React, { useState } from "react";
import MaterialIcon from "@/components/MaterialIcon";

interface DemoFormProps {
  heading?: string;
  subheading?: string;
  defaultModule?: string;
}

export default function DemoRequestForm({
  heading = "Book Your Personalized Shenll HRMS Demo",
  subheading = "Experience how Shenll HRMS automates payroll, connects biometric devices, and powers your workforce.",
  defaultModule,
}: DemoFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    employeeCount: "25-100",
    modules: defaultModule ? [defaultModule] : ["Payroll & Statutory", "Attendance & Shifts"],
    requirements: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const popularModules = [
    { id: "Payroll & Statutory", label: "Statutory Payroll" },
    { id: "Attendance & Shifts", label: "Biometric Attendance" },
    { id: "Leave Management", label: "Leave Workflows" },
    { id: "Recruitment & ATS", label: "Recruitment / ATS" },
    { id: "Performance & OKRs", label: "Appraisals & OKRs" },
    { id: "AI Intelligence", label: "AI Analytics" },
  ];

  const handleModuleToggle = (mod: string) => {
    setFormData((prev) => {
      const exists = prev.modules.includes(mod);
      return {
        ...prev,
        modules: exists
          ? prev.modules.filter((m) => m !== mod)
          : [...prev.modules, mod],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const cleanedPhone = formData.phone.replace(/[\s\-\+]/g, "");
    if (cleanedPhone.length < 10) {
      setStatus("error");
      setErrorMessage("Please enter a valid 10-digit mobile or phone number.");
      return;
    }

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit demo request.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please call +91-8122046761."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/40 text-center max-w-xl mx-auto backdrop-blur-xl">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-xs border border-emerald-100">
          <MaterialIcon name="check_circle" size={32} fill className="text-emerald-600" />
        </div>
        <h3 className="text-2xl font-black text-[#0D2E40] mb-2 tracking-tight">
          Demo Request Confirmed!
        </h3>
        <p className="text-[#64748B] text-sm leading-relaxed mb-6">
          Thank you, <strong className="text-[#0D2E40]">{formData.name}</strong>. Our HRMS specialist has received your requirements for <strong className="text-[#0D2E40]">{formData.companyName}</strong> and will connect with you at <strong className="text-[#0D2E40]">{formData.phone}</strong> within 2 business hours.
        </p>
        <div className="p-4 bg-[#F8FAFC] rounded-2xl text-xs text-[#334155] text-left space-y-1.5 mb-6 border border-[#E2E8F0]">
          <p className="flex items-center gap-1.5">
            <MaterialIcon name="check" size={15} weight={300} className="text-[#087E8B]" />
            <strong>Focus Areas:</strong> {formData.modules.join(", ") || "General Overview"}
          </p>
          <p className="flex items-center gap-1.5">
            <MaterialIcon name="check" size={15} weight={300} className="text-[#087E8B]" />
            <strong>Team Size:</strong> {formData.employeeCount} Active Staff
          </p>
          <p className="flex items-center gap-1.5">
            <MaterialIcon name="check" size={15} weight={300} className="text-[#087E8B]" />
            <strong>Sales Line:</strong> +91-8122046761
          </p>
        </div>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              phone: "",
              companyName: "",
              employeeCount: "25-100",
              modules: [],
              requirements: "",
            });
          }}
          className="text-xs font-bold text-[#087E8B] hover:text-[#0D2E40] transition-colors uppercase tracking-wider"
        >
          &larr; Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="ron-card p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(14,21,27,0.12)] border border-slate-200/90 relative overflow-hidden bg-white">
      {/* Top Header Badge */}
      <div className="mb-7 text-left">
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EEF3F2] text-[#0E151B] text-[11px] font-bold uppercase tracking-wider mb-2">
          <span>Fast-Track Onboarding</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#0E151B] tracking-tight">
          {heading}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">{subheading}</p>
      </div>

      {status === "error" && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-3">
          <MaterialIcon name="error" size={20} className="text-rose-600 flex-shrink-0 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-[#0E151B] uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rajesh Kumar"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm text-[#0E151B] placeholder-slate-400 bg-[#F9FBFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E151B] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#0E151B] uppercase tracking-wider mb-1.5">
              Work Email *
            </label>
            <input
              type="email"
              required
              placeholder="rajesh@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm text-[#0E151B] placeholder-slate-400 bg-[#F9FBFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E151B] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Row 2: Phone & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-[#0E151B] uppercase tracking-wider mb-1.5">
              Phone / WhatsApp *
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm text-[#0E151B] placeholder-slate-400 bg-[#F9FBFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E151B] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#0E151B] uppercase tracking-wider mb-1.5">
              Company Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Apex Technologies"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm text-[#0E151B] placeholder-slate-400 bg-[#F9FBFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E151B] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Row 3: Employee Size Dropdown */}
        <div>
          <label className="block text-[11px] font-bold text-[#0E151B] uppercase tracking-wider mb-1.5">
            Active Employee Count *
          </label>
          <select
            value={formData.employeeCount}
            onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm text-[#0E151B] bg-[#F9FBFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E151B] focus:border-transparent transition-all cursor-pointer"
          >
            <option value="1-25">1 – 25 employees (Startup / Boutique)</option>
            <option value="25-100">25 – 100 employees (Growing SME)</option>
            <option value="101-250">101 – 250 employees (Mid-Market)</option>
            <option value="251-500">251 – 500 employees (Multi-department Enterprise)</option>
            <option value="500+">500+ employees (Large Multi-site Corporation)</option>
          </select>
        </div>

        {/* Row 4: Interactive Module Chips */}
        <div>
          <label className="block text-[11px] font-bold text-[#0E151B] uppercase tracking-wider mb-2">
            Select Focus Modules (Click to toggle)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {popularModules.map((mod) => {
              const isSelected = formData.modules.includes(mod.id);
              return (
                <button
                  type="button"
                  key={mod.id}
                  onClick={() => handleModuleToggle(mod.id)}
                  className={`flex items-center justify-between p-2.5 rounded-full px-4 text-left text-xs font-bold border transition-all cursor-pointer ${isSelected
                    ? "bg-[#0E151B] text-white border-[#0E151B] shadow-sm"
                    : "bg-[#F1F5F4] text-slate-700 border-transparent hover:bg-slate-200"
                    }`}
                >
                  <span className="truncate">{mod.label}</span>
                  {isSelected && <MaterialIcon name="check" size={14} weight={300} className="text-[#19B5A5] ml-1" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 5: Notes */}
        <div>
          <label className="block text-[11px] font-bold text-[#0E151B] uppercase tracking-wider mb-1.5">
            Special Requirements / Biometric Model (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Need biometric turnstile sync for 2 branch offices in Chennai and Coimbatore..."
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm text-[#0E151B] placeholder-slate-400 bg-[#F9FBFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E151B] focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Submit Button — RonDesign Dark Pill CTA */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full font-bold text-white bg-[#0E151B] hover:bg-[#1A252C] shadow-lg shadow-slate-900/15 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 text-sm sm:text-base cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <MaterialIcon name="progress_activity" size={20} className="animate-spin" />
              <span>Confirming Your Slot...</span>
            </>
          ) : (
            <>
              <span>Book Your Free Live Demo</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <MaterialIcon name="arrow_forward" size={14} className="text-white" />
              </div>
            </>
          )}
        </button>

        {/* Trust Guarantees */}
        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2 font-medium">
          <span className="flex items-center gap-1">
            <MaterialIcon name="lock" size={14} className="text-slate-500" />
            100% Confidential
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1">
            <MaterialIcon name="verified_user" size={14} className="text-slate-500" />
            No Credit Card Needed
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1">
            <MaterialIcon name="bolt" size={14} className="text-slate-500" />
            Setup in 48 Hours
          </span>
        </div>
      </form>
    </div>
  );
}
