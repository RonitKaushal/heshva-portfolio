"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import {
  ArrowLeft,
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  MapPin,
  Mail,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  const skills = [
    "Python",
    "Machine Learning",
    "Data Analysis",
    "Time Series Analysis",
    "AI/ML Geodata Analysis",
    "GitHub & Version Control",
    "Data Structures & Algorithms",
    "Model Optimization & Scikit-Learn",
  ];

  const certifications = [
    "Python for Machine Learning — Certificate of Completion",
    "AI/ML for Geodata Analysis — Advanced Specialization",
    "Blockchain Foundation Program — Certificate of Completion",
    "Certificate of Participation & Regional Stage Contender — Hackathons",
  ];

  return (
    <main className="min-h-screen w-full bg-[#F7E7DF] flex flex-col items-center p-3 sm:p-5 md:p-8 font-sans">
      <div className="w-full max-w-[1140px] flex flex-col gap-6">
        {/* Header */}
        <div className="w-full bg-[#FBEFE9] rounded-[28px] px-6 py-2 card-shadow border border-[#F2DDD4]/60">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Portrait Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 bg-[#FBEFE9] rounded-[32px] overflow-hidden card-shadow border border-[#F2DDD4]/60 relative min-h-[380px] flex flex-col justify-end p-6"
          >
            <Image
              src="/images/heshva_portrait.jpg"
              alt="Heshva Soni"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#221F1E]/80 via-transparent to-transparent" />
            <div className="relative z-10 text-white">
              <h2 className="text-2xl font-black">Heshva Soni</h2>
              <p className="text-xs font-semibold text-[#F99B8D] uppercase tracking-wider">
                Research Intern @ SAC-ISRO • IT Student
              </p>
              <div className="flex items-center gap-1.5 text-xs text-white/70 mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#F99B8D]" />
                <span>Greater Ahmedabad Area, Gujarat, India</span>
              </div>
            </div>
          </motion.div>

          {/* Bio Statement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 bg-[#FBEFE9] rounded-[32px] p-7 sm:p-9 card-shadow border border-[#F2DDD4]/60 flex flex-col justify-between"
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
                About <span className="font-serif-italic italic font-normal text-[#2A2321]">Heshva</span>
              </h1>
              <p className="text-sm sm:text-base text-[#2A2321]/90 leading-relaxed mt-4">
                I bridge the gap between complex data and user-centric applications. Currently pursuing my B.Tech at IAR Gandhinagar, I have completed two professional internships focused on Python and Machine Learning, alongside research at SAC-ISRO.
              </p>
              <p className="text-sm sm:text-base text-[#2A2321]/90 leading-relaxed mt-3">
                I am a creative problem-solver who isn&apos;t afraid to push the boundaries of AI to build smarter software. From advancing to regional hackathon stages to maintaining high academic standards, I am driven by continuous learning and technical excellence.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#ECD1C5] flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#221F1E]">
                <Mail className="w-4 h-4 text-[#F99B8D]" />
                <span>heshvasoni1006@gmail.com</span>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2 rounded-xl bg-[#F99B8D] hover:bg-[#F88A7A] text-[#221F1E] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Experience & Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Work Experience */}
          <div className="bg-[#FBEFE9] rounded-[32px] p-6 sm:p-8 card-shadow border border-[#F2DDD4]/60 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#221F1E]/80">
              <Briefcase className="w-4 h-4 text-[#F99B8D]" />
              <span>Professional Experience</span>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm sm:text-base font-bold text-[#221F1E]">
                    Space Applications Centre, ISRO
                  </h4>
                  <span className="text-xs font-semibold text-[#F99B8D]">
                    June 2026 - Present
                  </span>
                </div>
                <p className="text-xs font-bold text-[#221F1E]/80 mt-0.5">Research Intern</p>
                <p className="text-xs text-[#2A2321]/85 mt-2 leading-relaxed">
                  Focusing on Time Series Analysis, geospatial feature learning, and machine learning pipelines for satellite observation datasets.
                </p>
              </div>

              <div className="p-4 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm sm:text-base font-bold text-[#221F1E]">InfoLabz</h4>
                  <span className="text-xs font-semibold text-[#F99B8D]">July 2023 - Aug 2023</span>
                </div>
                <p className="text-xs font-bold text-[#221F1E]/80 mt-0.5">Intern</p>
                <p className="text-xs text-[#2A2321]/85 mt-2 leading-relaxed">
                  Python machine learning engineering, data processing workflows, and statistical classification modeling in Ahmedabad.
                </p>
              </div>

              <div className="p-4 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm sm:text-base font-bold text-[#221F1E]">Techno IT Hub</h4>
                  <span className="text-xs font-semibold text-[#F99B8D]">Sept 2022 - May 2023</span>
                </div>
                <p className="text-xs font-bold text-[#221F1E]/80 mt-0.5">Intern (9 months)</p>
                <p className="text-xs text-[#2A2321]/85 mt-2 leading-relaxed">
                  Full-lifecycle application development, database management, and client software maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="bg-[#FBEFE9] rounded-[32px] p-6 sm:p-8 card-shadow border border-[#F2DDD4]/60 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-3">
                <GraduationCap className="w-4 h-4 text-[#F99B8D]" />
                <span>Education</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60">
                  <h4 className="text-sm font-bold text-[#221F1E]">
                    Institute of Advanced Research, Gandhinagar
                  </h4>
                  <p className="text-xs font-semibold text-[#F99B8D] mt-0.5">
                    Bachelor of Technology - BTech, Information Technology
                  </p>
                  <p className="text-[11px] text-[#221F1E]/60 mt-1">2024 - 2027</p>
                </div>

                <div className="p-4 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60">
                  <h4 className="text-sm font-bold text-[#221F1E]">
                    Gujarat Technological University (GTU)
                  </h4>
                  <p className="text-xs font-semibold text-[#F99B8D] mt-0.5">
                    Diploma in Information Technology
                  </p>
                  <p className="text-[11px] text-[#221F1E]/60 mt-1">Sept 2021 - June 2024</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-3">
                <Award className="w-4 h-4 text-[#F99B8D]" />
                <span>Certifications & Honors</span>
              </div>

              <div className="space-y-2">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#2A2321]/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F99B8D] shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Banner */}
        <div className="bg-[#FBEFE9] rounded-[32px] p-6 sm:p-8 card-shadow border border-[#F2DDD4]/60">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-4">
            <Code className="w-4 h-4 text-[#F99B8D]" />
            <span>Core Technical Arsenal</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-[#FDF7F3] border border-[#ECD1C5] rounded-2xl text-xs font-bold text-[#221F1E] shadow-sm hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
