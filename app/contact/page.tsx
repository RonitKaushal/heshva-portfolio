"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ArrowLeft, Mail, MapPin, Send, Check, Globe } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#F99B8D", "#F88A7A", "#FBEFE9", "#221F1E"],
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("heshvasoni1006@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <main className="min-h-screen w-full bg-[#F7E7DF] flex flex-col items-center p-3 sm:p-5 md:p-8 font-sans">
      <div className="w-full max-w-[1080px] flex flex-col gap-6">
        {/* Header */}
        <div className="w-full bg-[#FBEFE9] rounded-[28px] px-6 py-2 card-shadow border border-[#F2DDD4]/60">
          <Header />
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Direct Info & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 bg-[#FBEFE9] rounded-[32px] p-6 sm:p-8 card-shadow border border-[#F2DDD4]/60 flex flex-col justify-between"
          >
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F99B8D] hover:text-[#221F1E] transition-colors mb-3 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Home</span>
              </Link>
              <h1 className="text-3xl sm:text-4xl font-black text-[#221F1E] tracking-tight">
                Let&apos;s <span className="font-serif-italic italic font-normal text-[#2A2321]">Connect</span>
              </h1>
              <p className="text-sm text-[#2A2321]/80 mt-2 leading-relaxed">
                Have an AI/ML idea, research opportunity, or data challenge? Reach out anytime!
              </p>

              {/* Direct Info Pills */}
              <div className="mt-6 space-y-3">
                <div className="p-4 bg-[#F4E1D7] rounded-2xl flex items-center justify-between border border-[#ECD1C5]/60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#F99B8D] text-[#221F1E] flex items-center justify-center font-bold">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#221F1E]/60">
                        Email Me
                      </p>
                      <p className="text-xs font-bold text-[#221F1E]">heshvasoni1006@gmail.com</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-bold px-2.5 py-1 bg-[#221F1E] text-white rounded-lg hover:bg-[#F99B8D] transition-colors cursor-pointer"
                  >
                    {isCopied ? "Copied!" : "Copy"}
                  </button>
                </div>

                <div className="p-4 bg-[#F4E1D7] rounded-2xl flex items-center gap-3 border border-[#ECD1C5]/60">
                  <div className="w-8 h-8 rounded-xl bg-[#F99B8D] text-[#221F1E] flex items-center justify-center font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#221F1E]/60">
                      Location
                    </p>
                    <p className="text-xs font-bold text-[#221F1E]">
                      Greater Ahmedabad Area, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-[#ECD1C5]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/70 mb-3">
                Professional Profiles
              </p>
              <div className="flex gap-2.5">
                <a
                  href="https://www.linkedin.com/in/heshvaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 bg-[#F4E1D7] hover:bg-[#F99B8D] rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-[#221F1E] transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/heshvaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 bg-[#F4E1D7] hover:bg-[#F99B8D] rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-[#221F1E] transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://heshvasoni.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 bg-[#F4E1D7] hover:bg-[#F99B8D] rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-[#221F1E] transition-colors cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                  <span>Portfolio</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 bg-[#FBEFE9] rounded-[32px] p-6 sm:p-8 card-shadow border border-[#F2DDD4]/60 flex flex-col justify-between"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center flex flex-col items-center justify-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#F99B8D] text-white flex items-center justify-center shadow-lg">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold text-[#221F1E]">Message Sent Successfully!</h3>
                <p className="text-sm text-[#221F1E]/70 max-w-sm">
                  Thank you for getting in touch. Heshva will respond to your email as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-[#221F1E]">Send a Message</h3>
                  <p className="text-xs text-[#221F1E]/60">
                    Fill out the fields below and hit send.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 bg-[#FDF7F3] border border-[#ECD1C5] rounded-xl text-sm text-[#221F1E] placeholder:text-[#221F1E]/35 focus:outline-none focus:border-[#F99B8D] focus:ring-1 focus:ring-[#F99B8D] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 bg-[#FDF7F3] border border-[#ECD1C5] rounded-xl text-sm text-[#221F1E] placeholder:text-[#221F1E]/35 focus:outline-none focus:border-[#F99B8D] focus:ring-1 focus:ring-[#F99B8D] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="ML Project Collaboration / Opportunity"
                    className="w-full px-4 py-3 bg-[#FDF7F3] border border-[#ECD1C5] rounded-xl text-sm text-[#221F1E] placeholder:text-[#221F1E]/35 focus:outline-none focus:border-[#F99B8D] focus:ring-1 focus:ring-[#F99B8D] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your idea or message..."
                    className="w-full px-4 py-3 bg-[#FDF7F3] border border-[#ECD1C5] rounded-xl text-sm text-[#221F1E] placeholder:text-[#221F1E]/35 focus:outline-none focus:border-[#F99B8D] focus:ring-1 focus:ring-[#F99B8D] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#F99B8D] hover:bg-[#F88A7A] text-[#221F1E] font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
