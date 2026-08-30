"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Globe,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  Download,
} from "lucide-react";

export default function ContactPage() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("heshvaasoni@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "heshvaasoni@gmail.com",
      href: "mailto:heshvaasoni@gmail.com",
      action: handleCopyEmail,
      actionLabel: isCopied ? "Copied!" : "Copy",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 94298 11299",
      href: "tel:+919429811299",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: "https://maps.google.com/?q=Ahmedabad,Gujarat,India",
    },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      handle: "linkedin.com/in/heshvaa",
      href: "https://www.linkedin.com/in/heshvaa",
      color: "hover:bg-[#0A66C2] hover:text-white",
    },
    {
      label: "GitHub",
      handle: "github.com/Heshva",
      href: "https://github.com/Heshva",
      color: "hover:bg-[#221F1E] hover:text-white",
    },
    {
      label: "Portfolio",
      handle: "heshvasoni.vercel.app",
      href: "https://heshvasoni.vercel.app",
      color: "hover:bg-[#F99B8D] hover:text-[#221F1E]",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#F7E7DF] flex flex-col items-center p-3 sm:p-5 md:p-8 font-sans">
      <div className="w-full max-w-[1080px] flex flex-col gap-6 pb-12">
        {/* Header */}
        <div className="w-full bg-[#FBEFE9] rounded-[28px] px-6 py-2 card-shadow border border-[#F2DDD4]/60">
          <Header />
        </div>

        {/* Hero + CTA Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left: Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 bg-[#FBEFE9] rounded-[32px] p-7 sm:p-9 card-shadow border border-[#F2DDD4]/60 flex flex-col justify-between"
          >
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F99B8D] hover:text-[#221F1E] transition-colors mb-4 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Home</span>
              </Link>
              <h1 className="text-3xl sm:text-4xl font-black text-[#221F1E] tracking-tight leading-tight">
                Let&apos;s{" "}
                <span className="font-serif-italic italic font-normal text-[#2A2321]">
                  Connect
                </span>
              </h1>
              <p className="text-sm text-[#2A2321]/75 mt-3 leading-relaxed">
                Open to research collaborations, ML opportunities, internships, and interesting conversations. Don&apos;t hesitate to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-8 space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href, action, actionLabel }) => (
                <div
                  key={label}
                  className="p-4 bg-[#F4E1D7] rounded-2xl flex items-center justify-between gap-3 border border-[#ECD1C5]/60"
                >
                  <a
                    href={href}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group flex-1 min-w-0"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F99B8D]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#F99B8D]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#221F1E]/50">{label}</p>
                      <p className="text-xs font-bold text-[#221F1E] truncate group-hover:text-[#F99B8D] transition-colors">{value}</p>
                    </div>
                  </a>
                  {action && (
                    <button
                      onClick={action}
                      className="shrink-0 flex items-center gap-1 text-xs font-bold px-3 py-1.5 bg-[#221F1E] text-white rounded-lg hover:bg-[#F99B8D] hover:text-[#221F1E] transition-colors cursor-pointer"
                    >
                      {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {actionLabel}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Mailto CTA + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 flex flex-col gap-5"
          >
            {/* Big mailto CTA card */}
            <div className="flex-1 bg-[#221F1E] rounded-[32px] p-8 sm:p-10 card-shadow flex flex-col justify-between relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F99B8D]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#F99B8D]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[#F99B8D] text-xs font-bold uppercase tracking-widest">Direct Contact</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 leading-tight">
                  Say{" "}
                  <span className="font-serif-italic italic font-normal text-[#F99B8D]">
                    Hello
                  </span>
                  👋
                </h2>
                <p className="text-white/60 text-sm mt-3 leading-relaxed max-w-sm">
                  The best way to reach me is directly via email. I read every message and respond to opportunities that align with my work in ML, data, and AI research.
                </p>
              </div>

              <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:heshvaasoni@gmail.com?subject=Hello Heshva!"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F99B8D] hover:bg-[#F88A7A] text-[#221F1E] font-bold rounded-xl transition-all hover:scale-105 shadow-lg text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email Me Directly
                </a>
                <a
                  href="/Heshva_Soni_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all text-sm border border-white/20"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#FBEFE9] rounded-[32px] p-6 card-shadow border border-[#F2DDD4]/60">
              <p className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/60 mb-4">
                Professional Profiles
              </p>
              <div className="flex flex-col gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3.5 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60 transition-all group ${s.color}`}
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-black tracking-wider">{s.label}</span>
                      <span className="text-[11px] opacity-60 mt-0.5">{s.handle}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
