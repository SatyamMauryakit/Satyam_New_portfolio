"use client";
import { Section, GlassCard } from "./Section";
import { Mail, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate an API call
    setTimeout(() => {
      console.log("Form submitted!");
      setIsSending(false);
      // You would typically handle form data submission here
    }, 2000);
  };

  return (
    <Section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Get in Touch
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Contact Info Card */}
          <GlassCard className="flex flex-col justify-between p-8 transition-all duration-300 hover:scale-[1.02] hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10">
            <div>
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="mt-4 text-white/80">
                Have a project in mind or want to collaborate? I’m open to new
                opportunities and would love to hear from you.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="mailto:satyam@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition-colors duration-200 hover:bg-neutral-200"
              >
                <Mail size={20} /> Email Me
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </GlassCard>

          {/* Contact Form Card */}
          <GlassCard className="p-8 transition-all duration-300 hover:scale-[1.02] hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10">
            <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-6">
              <div>
                <label htmlFor="name" className="text-sm text-white/70">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-sky-500/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-sky-500/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-sky-500/50"
                  placeholder="Tell me about your project…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition-colors duration-200 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:bg-neutral-500 disabled:text-white"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}