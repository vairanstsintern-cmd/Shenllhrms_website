import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, companyName, employeeCount, modules, requirements } = body;

    // Strict validation
    if (!name || !email || !phone || !companyName) {
      return NextResponse.json(
        { message: "Please fill in all required fields (Name, Email, Phone, Company)." },
        { status: 400 }
      );
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    // Cleaned phone check
    const cleanPhone = phone.replace(/[\s\-\+]/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { message: "Please enter a valid phone number (at least 10 digits)." },
        { status: 400 }
      );
    }

    // In production, send email to info@shenllhrms.com or forward to CRM/webhook.
    console.log("[Shenll HRMS Demo Lead Received]:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      companyName,
      employeeCount,
      modules,
      requirements,
    });

    return NextResponse.json({
      success: true,
      message: "Demo request received successfully.",
      referenceId: "SHENLL-" + Math.floor(100000 + Math.random() * 900000),
    });
  } catch (err: any) {
    console.error("[Demo Request API Error]:", err);
    return NextResponse.json(
      { message: "Internal server error while processing demo request." },
      { status: 500 }
    );
  }
}
