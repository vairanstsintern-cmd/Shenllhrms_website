"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, X, Send, User, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function LeadChatWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const intents = [
    { id: "demo", label: "Product Demo", action: "demo" },
    { id: "pricing", label: "Pricing Inquiry", action: "pricing" },
    { id: "job", label: "Job & Careers", action: "job" },
    { id: "support", label: "Support & Help", action: "support" },
  ];

  const handleSelect = (id: string) => {
    setSelectedIntent(id);
    if (id === "pricing") {
      window.location.href = "/pricing";
    }
  };

  const handleQuickLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* Floating Bottom Right Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Chat Popup Box */}
        {isOpen && !isMinimized && (
          <div className="mb-3 w-[330px] sm:w-[360px] bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
            {/* Header with Avatar */}
            <div className="relative bg-gradient-to-r from-[#123B50] via-[#087E8B] to-[#123B50] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-white/20 p-0.5 border border-white/40 flex items-center justify-center font-bold text-white shadow-inner">
                  <User className="w-6 h-6 text-white" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#123B50] rounded-full"></span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">Shenll HR Assistant</p>
                  <p className="text-[11px] text-teal-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Online · Ready to Help
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Content Body */}
            <div className="p-5 space-y-4">
              {!submitted ? (
                <>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#123B50]">
                      Hi there! How can I help you today?
                    </h4>
                    <p className="text-xs text-[#64748B]">
                      Are you looking for?
                    </p>
                  </div>

                  {/* Intent Options Badges */}
                  <div className="grid grid-cols-2 gap-2">
                    {intents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.id)}
                        className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                          selectedIntent === item.id
                            ? "bg-[#087E8B] text-white border-[#087E8B] shadow-sm"
                            : "bg-[#F4F7FA] text-[#263746] border-[#E2E8F0] hover:border-[#087E8B] hover:text-[#087E8B]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* If user clicked Demo or Needs contact */}
                  {selectedIntent && selectedIntent !== "pricing" && (
                    <form onSubmit={handleQuickLead} className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#087E8B]">
                        Get 1-on-1 Walkthrough:
                      </p>
                      <input
                        type="tel"
                        required
                        placeholder="Your Phone / WhatsApp *"
                        value={phoneInput}
                        onChange={(e) => setPhoneInput(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-[#087E8B]"
                      />
                      <input
                        type="email"
                        placeholder="Work Email (Optional)"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-[#087E8B]"
                      />
                      <button
                        type="submit"
                        className="w-full py-2 px-4 rounded-xl text-xs font-bold text-white bg-[#F59E0B] hover:bg-[#D97706] shadow transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>Request Callback in 15 Mins</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}
                </>
              ) : (
                <div className="text-center py-4 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-sm font-bold text-[#123B50]">
                    Request Received!
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Our Chennai solution consultant will call you at <strong className="text-[#123B50]">{phoneInput}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedIntent(null);
                    }}
                    className="text-[11px] font-semibold text-[#087E8B] hover:underline"
                  >
                    Ask another query
                  </button>
                </div>
              )}
            </div>

            {/* Direct Phone Call Footer */}
            <div className="bg-[#F4F7FA] px-5 py-2.5 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
              <span>Direct Sales Line:</span>
              <a href="tel:+918122046761" className="font-bold text-[#087E8B] hover:underline">
                +91-8122046761
              </a>
            </div>
          </div>
        )}

        {/* Trigger Bubble Button */}
        <button
          onClick={() => {
            if (isOpen && !isMinimized) {
              setIsOpen(false);
            } else {
              setIsOpen(true);
              setIsMinimized(false);
            }
          }}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:scale-105 active:scale-95 transition-all"
          aria-label="Open support chat"
        >
          {isOpen && !isMinimized ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
