"use client";

import { useState } from "react";
import { Mail, Phone, Loader2 } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24 4.8 4.8 0 0 0 3-4.76c0-1.76-.71-3.24-2-4.24a4 4 0 0 0 .2-3 2.7 2.7 0 0 0-2-1c-1 0-2 .76-3 1.76A9 9 0 0 0 12 4.5a9 9 0 0 0-3-.5c-1-1-2-1.76-3-1.76a2.7 2.7 0 0 0-2 1 4 4 0 0 0 .2 3c-1.29 1-2 2.48-2 4.24a4.8 4.8 0 0 0 3 4.76A4.8 4.8 0 0 0 5 18v4" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Message sent successfully. I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        const errData = await res.json();
        setStatus("error");
        setMessage(errData.error || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#050505] py-32 px-6 md:px-12 lg:px-24 z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
            Let&apos;s build<br />something<br />meaningful.
          </h2>
          
          <div className="flex flex-col gap-6 mt-12">
            <a href="mailto:yokeshd59@gmail.com" className="flex items-center gap-4 text-xl text-white/70 hover:text-white transition-colors w-fit">
              <Mail className="w-6 h-6" /> yokeshd59@gmail.com
            </a>
            <a href="tel:+919003386497" className="flex items-center gap-4 text-xl text-white/70 hover:text-white transition-colors w-fit">
              <Phone className="w-6 h-6" /> +91-9003386497
            </a>
            <div className="flex gap-6 mt-8">
              <a href="https://www.linkedin.com/in/yokesh-d-a13905290" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="https://github.com/Yokesh333" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                <GithubIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/60 uppercase tracking-widest">Name</label>
                <input required maxLength={100} type="text" id="name" name="name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/60 uppercase tracking-widest">Email</label>
                <input required maxLength={100} type="email" id="email" name="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-white/60 uppercase tracking-widest">Subject</label>
              <input required maxLength={200} type="text" id="subject" name="subject" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-white/60 uppercase tracking-widest">Message</label>
              <textarea required maxLength={2000} id="message" name="message" rows={5} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors resize-none" />
            </div>

            <button 
              disabled={status === "loading"}
              type="submit" 
              className="mt-4 bg-white text-black py-4 rounded-xl font-semibold tracking-widest uppercase hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p className="text-green-400 text-sm font-medium mt-2 text-center">{message}</p>}
            {status === "error" && <p className="text-red-400 text-sm font-medium mt-2 text-center">{message}</p>}
          </form>
        </div>

      </div>
    </section>
  );
}
