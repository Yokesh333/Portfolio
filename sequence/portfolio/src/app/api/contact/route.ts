import { NextResponse } from "next/server";
import { Resend } from "resend";

// Prevent deployment failure if key is missing in build time
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'yokeshd59@gmail.com';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (name.length > 100 || email.length > 100 || subject.length > 200 || message.length > 2000) {
      return NextResponse.json({ error: "Input exceeds maximum length limits" }, { status: 400 });
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      // If we are testing locally without an API key, we simulate a success
      console.log("Mock Email Sent:", { name, email, subject, message });
      return NextResponse.json({ success: true, message: "Mock email sent (API key missing)" });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // resend's test sender
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `New Portfolio Contact\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: "Failed to send email via Resend" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
