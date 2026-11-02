"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Sparkles,
  Bot,
  Send,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  HelpCircle,
  TrendingUp,
} from "lucide-react";

export default function FloatingAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ sender: "ai" | "user"; text: string; time: string; options?: string[] }>
  >([
    {
      sender: "ai",
      text: "Hello! I am Shenll AI Assistant. How can I assist you with HRMS automation, Indian payroll (PF/ESI/TDS), or biometric sync today?",
      time: "Just now",
      options: [
        "1-Click Statutory Payroll",
        "Biometric Turnstile Sync",
        "Book a Free Live Demo",
        "Pricing & Plans",
      ],
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const predefinedAnswers: Record<string, string> = {
    "1-Click Statutory Payroll":
      "Shenll HRMS computes 100% compliant Indian statutory deductions (PF, ESI, TDS, PT) automatically. It syncs live attendance, computes overtime, and generates bank transfer payout files for HDFC, ICICI, SBI, and others.",
    "Biometric Turnstile Sync":
      "We offer direct API sync with fingerprint, facial recognition, and RFID biometric turnstiles, as well as GPS geo-fenced mobile punches for remote and on-site staff with zero buddy-punching.",
    "Book a Free Live Demo":
      "Our Chennai implementation team provides a tailored 30-minute walkthrough and 48-hour data onboarding. You can scroll down to the booking form or call our direct line at +91-8122046761.",
    "Pricing & Plans":
      "Shenll HRMS starts at just ₹3.3 per employee/day (₹999/month for up to 25 employees) with zero setup fees and unlimited monthly payroll runs.",
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText.trim();
    if (!query) return;

    const userMsg = {
      sender: "user" as const,
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      let reply =
        predefinedAnswers[query] ||
        `Thanks for asking about "${query}". Shenll HRMS streamlines this workflow end-to-end. Would you like to schedule a quick 1-on-1 walkthrough or review our documentation?`;

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          options: ["Book a Free Live Demo", "Pricing & Plans"],
        },
      ]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="mb-3 w-[340px] sm:w-[390px] h-[520px] max-h-[85vh] bg-white rounded-[28px] shadow-[0_25px_70px_-15px_rgba(14,21,27,0.25)] border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header with RonDesign aesthetics */}
          <div className="p-4 bg-[#0E151B] text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-[#1A252C] border border-slate-700 flex items-center justify-center text-white">
                <Bot className="w-5 h-5 text-[#9DF52A]" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#9DF52A] rounded-full border-2 border-[#0E151B] animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white leading-tight">Shenll HR AI</h4>
                  <span className="ron-badge-lime !py-0.5 !px-2 text-[10px]">v3.8</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">Online · Statutory &amp; HR Assistant</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close AI Chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F9FBFA]/80 text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed shadow-2xs ${
                    msg.sender === "user"
                      ? "bg-[#0E151B] text-white rounded-tr-xs"
                      : "bg-white border border-slate-200/80 text-[#0E151B] rounded-tl-xs shadow-xs"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>

                {/* Predefined Quick Suggestion Chips */}
                {msg.options && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSend(opt)}
                        className="py-1 px-2.5 rounded-full bg-white border border-slate-200 text-[#0E151B] hover:border-[#087E8B] hover:bg-[#EEF3F2] font-semibold text-[11px] transition-all cursor-pointer shadow-2xs"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white border border-slate-200 w-max text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
          </div>

          {/* Quick Contact Action Bar */}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#087E8B]" /> +91-8122046761
            </span>
            <Link
              href="#contact-form"
              onClick={() => setIsOpen(false)}
              className="text-[#087E8B] hover:underline font-bold"
            >
              Book Live Demo &rarr;
            </Link>
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200/90 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about payroll, biometric, pricing..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-full bg-[#F1F5F4] text-xs text-[#0E151B] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0E151B] transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-full bg-[#0E151B] text-white flex items-center justify-center hover:bg-[#1A252C] disabled:opacity-40 transition-all cursor-pointer flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Animated Button Trigger */}
      <div className="relative group">
        {/* Pulsing Aura Rings */}
        <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#087E8B] via-[#19B5A5] to-[#9DF52A] opacity-75 blur-md group-hover:opacity-100 animate-pulse transition-all pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative px-5 py-3.5 rounded-full bg-[#0E151B] text-white shadow-2xl flex items-center gap-2.5 transform group-hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20"
          aria-label="Toggle Shenll AI Chatbot"
        >
          {isOpen ? (
            <>
              <X className="w-5 h-5 text-white" />
              <span className="text-xs font-bold">Close</span>
            </>
          ) : (
            <>
              <div className="relative">
                <Bot className="w-5 h-5 text-[#9DF52A]" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#9DF52A] rounded-full border-2 border-[#0E151B]" />
              </div>
              <span className="text-xs font-bold tracking-tight">Ask Shenll AI</span>
              <Sparkles className="w-3.5 h-3.5 text-[#9DF52A]" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
