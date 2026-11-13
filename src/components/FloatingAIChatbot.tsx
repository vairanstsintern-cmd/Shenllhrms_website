"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";
import { WhatsAppIcon } from "@/components/BrandIcons";

interface ChatMessage {
  id: string;
  sender: "ai" | "user";
  text: string;
  time: string;
  options?: string[];
  actionLink?: { label: string; href: string };
}

export default function FloatingAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [todayDate, setTodayDate] = useState("Today");
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: ChatMessage[] = [
    {
      id: "m-1",
      sender: "ai",
      text: "Hi! 👋 I'm Shenll Assistant, and I'll be your guide to Shenll HRMS today.",
      time: "5:55 PM",
    },
    {
      id: "m-2",
      sender: "ai",
      text: "What interests you most about HRMS & payroll automation?",
      time: "5:55 PM",
      options: [
        "1-Click Statutory Indian Payroll (PF/ESI/TDS)",
        "Biometric Turnstile & Geo-fenced Attendance",
        "Employee Mobile App & Shift Rosters",
        "Transparent Pricing (₹3.3/emp/day)",
        "Book a Free 1-on-1 Guided Demo",
      ],
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  useEffect(() => {
    const now = new Date();
    setTodayDate(
      now.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const knowledgeBase: Record<
    string,
    { reply: string; options?: string[]; actionLink?: { label: string; href: string } }
  > = {
    "1-Click Statutory Indian Payroll (PF/ESI/TDS)": {
      reply:
        "Shenll HRMS automates 100% compliant Indian statutory deductions (EPFO, ESIC, Professional Tax, TDS) across all states. It automatically syncs live attendance, computes overtime and LOP deductions, and outputs direct bank payout batch files for HDFC, ICICI, SBI, and other banks with 1-click Form 16 generation.",
      options: [
        "Biometric Turnstile & Geo-fenced Attendance",
        "Transparent Pricing (₹3.3/emp/day)",
        "Book a Free 1-on-1 Guided Demo",
      ],
      actionLink: { label: "Explore Payroll Software →", href: "/payroll-software" },
    },
    "Biometric Turnstile & Geo-fenced Attendance": {
      reply:
        "Shenll HRMS connects natively via real-time webhooks with biometric turnstiles, fingerprint, RFID, and facial recognition devices (ZKTeco, eSSL, Matrix). For hybrid and field staff, our mobile app provides GPS geo-fenced clock-ins with live selfie verification for 100% zero buddy-punching.",
      options: [
        "Employee Mobile App & Shift Rosters",
        "1-Click Statutory Indian Payroll (PF/ESI/TDS)",
        "Book a Free 1-on-1 Guided Demo",
      ],
      actionLink: {
        label: "Explore Attendance Management →",
        href: "/attendance-management-software",
      },
    },
    "Employee Mobile App & Shift Rosters": {
      reply:
        "Employees enjoy an intuitive iOS & Android app to clock in/out with GPS verification, download itemized monthly payslips, request leaves with multi-level approval hierarchies, and view rotational shift rosters. HR leaders report a 70% drop in routine employee tickets.",
      options: [
        "1-Click Statutory Indian Payroll (PF/ESI/TDS)",
        "Transparent Pricing (₹3.3/emp/day)",
        "Book a Free 1-on-1 Guided Demo",
      ],
      actionLink: { label: "Explore HRMS Mobile App →", href: "/hrms-mobile-app" },
    },
    "Transparent Pricing (₹3.3/emp/day)": {
      reply:
        "Shenll HRMS starts at just ₹3.3 per employee/day (₹999/month for up to 25 employees) with zero setup fees, unlimited monthly payroll runs, automated statutory reports, and free mobile app access for all employees.",
      options: [
        "Book a Free 1-on-1 Guided Demo",
        "1-Click Statutory Indian Payroll (PF/ESI/TDS)",
        "Call +91-8122046761",
      ],
      actionLink: { label: "View Complete Pricing Table & ROI →", href: "/pricing" },
    },
    "Book a Free 1-on-1 Guided Demo": {
      reply:
        "Our Chennai implementation team provides a tailored 30-minute walkthrough for your company size, with 48-hour data onboarding and historical employee import. You can submit our demo booking form or connect directly with our specialist line at +91-8122046761.",
      options: ["Call +91-8122046761", "Transparent Pricing (₹3.3/emp/day)"],
      actionLink: { label: "Open Live Demo Booking Form →", href: "/book-a-demo" },
    },
    "Call +91-8122046761": {
      reply:
        "You can reach our senior HRMS solution specialists directly at +91-8122046761 from Monday through Saturday, 9:00 AM – 7:00 PM IST for immediate answers or onboarding inquiries.",
      options: ["Book a Free 1-on-1 Guided Demo", "Transparent Pricing (₹3.3/emp/day)"],
      actionLink: { label: "Call Now: +91-8122046761", href: "tel:+918122046761" },
    },
  };

  const handleResetChat = () => {
    setMessages(initialMessages);
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: query,
      time: currentTime,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const matched = knowledgeBase[query];
      let replyText = "";
      let nextOptions: string[] | undefined = [
        "1-Click Statutory Indian Payroll (PF/ESI/TDS)",
        "Biometric Turnstile & Geo-fenced Attendance",
        "Book a Free 1-on-1 Guided Demo",
      ];
      let nextActionLink: { label: string; href: string } | undefined = undefined;

      if (matched) {
        replyText = matched.reply;
        nextOptions = matched.options;
        nextActionLink = matched.actionLink;
      } else {
        const lower = query.toLowerCase();
        if (lower.includes("price") || lower.includes("cost") || lower.includes("plan") || lower.includes("fee")) {
          replyText =
            "Shenll HRMS starts at just ₹3.3 per employee/day (₹999/month for up to 25 employees) with zero setup fees, unlimited payroll runs, and free mobile app access for all employees.";
          nextOptions = ["Book a Free 1-on-1 Guided Demo", "1-Click Statutory Indian Payroll (PF/ESI/TDS)"];
          nextActionLink = { label: "View Pricing Plans →", href: "/pricing" };
        } else if (lower.includes("demo") || lower.includes("walkthrough") || lower.includes("trial") || lower.includes("contact")) {
          replyText =
            "We'd love to show you Shenll HRMS live! Our Chennai engineering experts provide a 30-minute tailored walkthrough with 48-hour onboarding support.";
          nextOptions = ["Call +91-8122046761", "Transparent Pricing (₹3.3/emp/day)"];
          nextActionLink = { label: "Book Free Live Demo →", href: "/book-a-demo" };
        } else if (lower.includes("payroll") || lower.includes("salary") || lower.includes("pf") || lower.includes("esi") || lower.includes("tds")) {
          replyText =
            "Our payroll engine automates Indian statutory deductions (PF, ESI, TDS, PT) with 100% compliance, auto salary register generation, and one-click direct bank payout transfers.";
          nextOptions = ["Book a Free 1-on-1 Guided Demo", "Biometric Turnstile & Geo-fenced Attendance"];
          nextActionLink = { label: "Explore Payroll Module →", href: "/payroll-software" };
        } else if (lower.includes("attendance") || lower.includes("biometric") || lower.includes("punch") || lower.includes("shift")) {
          replyText =
            "Shenll connects directly with biometric turnstiles via real-time webhooks, and supports GPS geo-fenced mobile punches with selfie verification for 100% elimination of buddy-punching.";
          nextOptions = ["1-Click Statutory Indian Payroll (PF/ESI/TDS)", "Book a Free 1-on-1 Guided Demo"];
          nextActionLink = { label: "Explore Attendance Module →", href: "/attendance-management-software" };
        } else if (lower.includes("leave") || lower.includes("holiday") || lower.includes("encashment")) {
          replyText =
            "Shenll HRMS simplifies leave management with custom leave policies (earned, casual, sick, comp-off), real-time leave balances, and multi-level manager approval workflows.";
          nextOptions = ["1-Click Statutory Indian Payroll (PF/ESI/TDS)", "Book a Free 1-on-1 Guided Demo"];
          nextActionLink = { label: "Explore Leave Management →", href: "/leave-management-software" };
        } else if (lower.includes("recruit") || lower.includes("hiring") || lower.includes("ats") || lower.includes("candidate")) {
          replyText =
            "Our Recruitment ATS module manages your entire talent acquisition pipeline—from job board posting and AI resume parsing to automated interview scheduling and offer letter generation.";
          nextOptions = ["Book a Free 1-on-1 Guided Demo", "Transparent Pricing (₹3.3/emp/day)"];
          nextActionLink = { label: "Explore Recruitment ATS →", href: "/recruitment-software" };
        } else if (lower.includes("app") || lower.includes("mobile") || lower.includes("phone") || lower.includes("self service")) {
          replyText =
            "The Shenll HRMS Mobile App (iOS & Android) gives employees real-time access to itemized payslips, shift schedules, geo-fenced punches, and instant leave requests.";
          nextOptions = ["Book a Free 1-on-1 Guided Demo", "Transparent Pricing (₹3.3/emp/day)"];
          nextActionLink = { label: "Explore HRMS Mobile App →", href: "/hrms-mobile-app" };
        } else {
          replyText = `Thank you for asking about "${query}". Shenll HRMS streamlines workforce operations across 12 integrated enterprise modules with 100% Indian statutory compliance and biometric sync. Would you like a tailored 30-minute walkthrough?`;
          nextOptions = ["Book a Free 1-on-1 Guided Demo", "Transparent Pricing (₹3.3/emp/day)"];
          nextActionLink = { label: "Explore All Solutions →", href: "/ai-hrms" };
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text: replyText,
          time: new Date().toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          }),
          options: nextOptions,
          actionLink: nextActionLink,
        },
      ]);
      setIsTyping(false);
    }, 550);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      {/* Floating Chatbot Window in Shenll HRMS Theme */}
      {isOpen && (
        <div
          className={`mb-3.5 bg-white rounded-[28px] sm:rounded-[32px] shadow-[0_20px_60px_-15px_rgba(14,21,27,0.22)] border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 transition-all ${
            isExpanded
              ? "w-[360px] sm:w-[500px] h-[660px] max-h-[90vh]"
              : "w-[350px] sm:w-[410px] h-[580px] max-h-[85vh]"
          }`}
        >
          {/* Header in HRMS Theme */}
          <div className="px-5 py-3.5 bg-white flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-3">
              {/* Shenll Brand Logo Avatar */}
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#087E8B] to-[#19B5A5] p-0.5 shadow-xs flex items-center justify-center flex-shrink-0">
                <div className="w-full h-full bg-[#0E151B] rounded-[10px] flex items-center justify-center p-1.5">
                  <Image
                    src="/favicon.svg"
                    alt="Shenll HRMS"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#19B5A5] rounded-full border-2 border-white" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-[16px] font-bold text-[#0E151B] tracking-tight leading-none">
                    Shenll HRMS
                  </h4>
                  <span className="ron-badge-lime !py-0.5 !px-2 text-[10px] font-bold">
                    AI Copilot
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-medium leading-none">
                  Statutory, Biometric &amp; Payroll Guide
                </p>
              </div>
            </div>

            {/* Header Action Controls */}
            <div className="flex items-center gap-1 text-slate-500">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-[#087E8B] hover:text-[#19B5A5] transition-colors cursor-pointer"
                title="Restart conversation"
                aria-label="Restart conversation"
              >
                <MaterialIcon name="refresh" size={18} />
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                title={isExpanded ? "Collapse view" : "Expand view"}
                aria-label={isExpanded ? "Collapse view" : "Expand view"}
              >
                {isExpanded ? (
                  <MaterialIcon name="close_fullscreen" size={18} />
                ) : (
                  <MaterialIcon name="open_in_full" size={18} />
                )}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                title="Close chat"
                aria-label="Close chat"
              >
                <MaterialIcon name="close" size={20} />
              </button>
            </div>
          </div>

          {/* Date Divider */}
          <div className="relative flex items-center justify-center my-3 px-6">
            <div className="w-full border-t border-slate-200/80" />
            <span className="absolute bg-white px-3 text-[11px] font-medium text-slate-400">
              {todayDate}
            </span>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto px-5 py-1 space-y-4 text-xs font-normal">
            {messages.map((msg, i) => {
              const isAi = msg.sender === "ai";
              const showAiHeader = isAi && (i === 0 || messages[i - 1]?.sender === "user");
              const hasNextAiMessage = isAi && messages[i + 1]?.sender === "ai";

              return (
                <div key={msg.id} className="flex flex-col">
                  {/* Sender label for AI */}
                  {showAiHeader && (
                    <span className="text-[12px] font-semibold text-[#087E8B] mb-1 ml-9 flex items-center gap-1.5">
                      Shenll HRMS
                    </span>
                  )}

                  {isAi ? (
                    <div className="flex items-start gap-2.5">
                      {/* Avatar icon: grouped so consecutive message shows avatar on the final bubble */}
                      <div className="w-6 h-6 flex-shrink-0 mt-1 flex items-center justify-center">
                        {!hasNextAiMessage ? (
                          <div className="w-6 h-6 rounded-md bg-[#0E151B] p-1 flex items-center justify-center shadow-2xs">
                            <Image
                              src="/favicon.svg"
                              alt="Shenll"
                              width={14}
                              height={14}
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-6 h-6" />
                        )}
                      </div>

                      {/* AI Bubble */}
                      <div className="flex-1 flex flex-col items-start">
                        <div className="flex items-end gap-2 max-w-[90%]">
                          <div className="bg-[#F1F5F4] text-[#0E151B] text-[13.5px] sm:text-[14px] leading-relaxed px-4 py-3 rounded-[20px] rounded-tl-[4px] border border-slate-200/40">
                            <p>{msg.text}</p>
                            {msg.actionLink && (
                              <div className="mt-2.5 pt-2 border-t border-slate-200/80">
                                <Link
                                  href={msg.actionLink.href}
                                  onClick={() => setIsOpen(false)}
                                  className="inline-flex items-center gap-1 font-semibold text-[#087E8B] hover:text-[#19B5A5] hover:underline text-[13px]"
                                >
                                  {msg.actionLink.label}
                                </Link>
                              </div>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-400 font-normal pb-0.5 whitespace-nowrap">
                            {msg.time}
                          </span>
                        </div>

                        {/* Interactive Suggestion Pills in HRMS Theme (aligned right) */}
                        {msg.options && msg.options.length > 0 && (
                          <div className="w-full flex flex-col items-end gap-2 mt-3 pl-4">
                            {msg.options.map((opt, optIdx) => (
                              <button
                                key={optIdx}
                                onClick={() => handleSend(opt)}
                                className="border border-[#087E8B]/80 text-[#087E8B] hover:bg-[#EEF3F2] hover:border-[#087E8B] bg-white text-[13px] font-medium px-4 py-2 rounded-full transition-all text-right shadow-2xs cursor-pointer active:scale-98"
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* User Message (Solid brand teal-navy pill on the right) */
                    <div className="flex items-end justify-end gap-2 my-1">
                      <span className="text-[11px] text-slate-400 font-normal pb-0.5 whitespace-nowrap">
                        {msg.time}
                      </span>
                      <div className="bg-gradient-to-r from-[#087E8B] to-[#123B50] text-white text-[13px] sm:text-[13.5px] leading-relaxed px-4 py-2.5 rounded-full shadow-xs text-right font-medium max-w-[85%]">
                        {msg.text}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#0E151B] p-1 flex items-center justify-center shadow-2xs mt-1">
                  <Image
                    src="/favicon.svg"
                    alt="Shenll"
                    width={14}
                    height={14}
                    className="object-contain"
                  />
                </div>
                <div className="bg-[#F1F5F4] text-slate-500 px-4 py-3 rounded-[20px] rounded-tl-[4px] flex items-center gap-1.5 border border-slate-200/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Chat Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 px-4 bg-white border-t border-slate-100 flex items-center gap-2"
          >
            <div className="relative flex-1 flex items-center bg-[#F1F5F4] rounded-full px-4 py-2 border border-transparent focus-within:border-[#087E8B] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#087E8B]/15 transition-all">
              <input
                type="text"
                placeholder="Ask about payroll, attendance, demo..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 text-[13px] text-[#0E151B] placeholder:text-slate-400 bg-transparent outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-full bg-gradient-to-r from-[#087E8B] to-[#19B5A5] hover:from-[#123B50] hover:to-[#087E8B] disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer flex-shrink-0 shadow-2xs"
              aria-label="Send message"
            >
              <MaterialIcon name="send" size={16} className="ml-0.5" />
            </button>
          </form>

          {/* Footer Branding in HRMS Theme */}
          <div className="py-2.5 bg-[#F8FAFC] border-t border-slate-100 flex items-center justify-between px-5 text-[11px] text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <span>Powered by</span>
              <span className="font-bold text-[#0E151B] flex items-center gap-1 tracking-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-[#19B5A5]" />
                Shenll HRMS AI
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918122046761?text=Hello%20Shenll%20HRMS,%20I%20have%20questions%20about%20the%20platform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#1fad53] font-semibold flex items-center gap-1 transition-colors"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon size={14} />
                <span>WhatsApp</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="tel:+918122046761"
                className="text-[#087E8B] hover:text-[#123B50] hover:underline font-semibold flex items-center gap-1"
              >
                <MaterialIcon name="call" size={13} className="text-[#087E8B]" /> Call
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Glossy 3D Floating Sphere Trigger in Shenll HRMS Theme */}
      <div className="relative group">
        {/* Soft Ambient Blurred Pulsing Glow Halo in HRMS Teal/Mint */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#087E8B]/60 via-[#19B5A5]/60 to-teal-400/40 blur-xl opacity-80 group-hover:opacity-100 group-hover:scale-110 animate-pulse transition-all duration-500 pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-15 h-15 rounded-full flex items-center justify-center text-white shadow-[0_14px_35px_rgba(8,126,139,0.45)] group-hover:shadow-[0_18px_45px_rgba(8,126,139,0.6)] transform group-hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden border border-white/35"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, #2DD4BF 0%, #19B5A5 30%, #087E8B 60%, #123B50 100%)",
          }}
          aria-label="Toggle Shenll HRMS Assistant"
        >
          {/* 3D Glass Specular Sheen Overlay */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0) 65%)",
            }}
          />
          {/* Inner Curvature Shadow */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: "inset 0 -6px 14px rgba(0,0,0,0.38)",
            }}
          />

          {isOpen ? (
            <MaterialIcon name="close" size={24} weight={300} className="text-white relative z-10 transition-transform duration-200 rotate-0 hover:rotate-90" />
          ) : (
            <div className="relative z-10 w-8 h-8 flex items-center justify-center">
              {/* Three 4-Pointed Sparkle Stars in Pure White */}
              <svg
                viewBox="0 0 40 40"
                className="w-8 h-8 drop-shadow-md"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main Large Sparkle Star */}
                <path
                  d="M17 5C17 11.627 11.627 17 5 17C11.627 17 17 22.373 17 29C17 22.373 22.373 17 29 17C22.373 17 17 11.627 17 5Z"
                  fill="white"
                />
                {/* Top-Right Medium Sparkle Star */}
                <path
                  d="M29 9C29 12.314 26.314 15 23 15C26.314 15 29 17.686 29 21C29 17.686 31.686 15 35 15C31.686 15 29 12.314 29 9Z"
                  fill="white"
                />
                {/* Bottom-Right Small Sparkle Star */}
                <path
                  d="M29.5 25C29.5 27.209 27.709 29 25.5 29C27.709 29 29.5 30.791 29.5 33C29.5 30.791 31.291 29 33.5 29C31.291 29 29.5 27.209 29.5 25Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
