"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { experiencesData } from "@/lib/data";
import {
  ArrowLeft,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Download,
  ExternalLink,
  Star,
} from "lucide-react";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "Java", "SQL"],
    color: "bg-blue-50 border-blue-200 text-blue-800",
  },
  {
    label: "ML & Data Science",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "SciPy"],
    color: "bg-purple-50 border-purple-200 text-purple-800",
  },
  {
    label: "Data Analysis",
    skills: ["EDA", "Data Cleaning", "Statistical Analysis", "Time-Series Analysis"],
    color: "bg-teal-50 border-teal-200 text-teal-800",
  },
  {
    label: "Visualization",
    skills: ["Matplotlib", "Seaborn", "Streamlit"],
    color: "bg-orange-50 border-orange-200 text-orange-800",
  },
  {
    label: "Database & Tools",
    skills: ["MySQL", "Git", "GitHub", "Jupyter Notebook"],
    color: "bg-rose-50 border-rose-200 text-rose-800",
  },
];

const certifications = [
  {
    title: "AI/ML for Geodata Analysis",
    issuer: "Indian Institute of Remote Sensing (ISRO), Dehradun",
    icon: "🛰️",
  },
  {
    title: "Python for Machine Learning",
    issuer: "Great Learning",
    icon: "🐍",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#F7E7DF] flex flex-col items-center p-3 sm:p-5 md:p-8 font-sans">
      <div className="w-full max-w-[1140px] flex flex-col gap-6 pb-12">
        {/* Header */}
        <div className="w-full bg-[#FBEFE9] rounded-[28px] px-6 py-2 card-shadow border border-[#F2DDD4]/60">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 bg-[#FBEFE9] rounded-[32px] overflow-hidden card-shadow border border-[#F2DDD4]/60 relative min-h-[400px] flex flex-col justify-end p-6"
          >
            <Image
              src="/images/heshva_portrait.jpg"
              alt="Heshva Soni"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#221F1E]/85 via-[#221F1E]/20 to-transparent" />
            <div className="relative z-10 text-white">
              <h2 className="text-2xl font-black">Heshva Soni</h2>
              <p className="text-xs font-semibold text-[#F99B8D] uppercase tracking-wider mt-0.5">
                Research Intern @ SAC-ISRO · B.Tech IT Student
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <div className="flex items-center gap-1.5 text-xs text-white/70">
                  <MapPin className="w-3.5 h-3.5 text-[#F99B8D]" />
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/70">
                  <Star className="w-3.5 h-3.5 text-[#F99B8D]" />
                  <span>CGPA: 8.55 (IAR) · 8.58 (GTU)</span>
                </div>
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
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F99B8D] hover:text-[#221F1E] transition-colors mb-4 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Home</span>
              </Link>
              <h1 className="text-3xl sm:text-4xl font-black text-[#221F1E] tracking-tight leading-tight">
                About{" "}
                <span className="font-serif-italic italic font-normal text-[#2A2321]">
                  Heshva
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#2A2321]/90 leading-relaxed mt-4">
                I&apos;m a passionate data engineer and machine learning researcher, currently interning at the{" "}
                <span className="font-bold text-[#221F1E]">Space Applications Centre, ISRO</span>{" "}
                where I develop Python workflows for satellite soil-moisture analysis. I&apos;m also pursuing my B.Tech in Information Technology at{" "}
                <span className="font-bold text-[#221F1E]">Institute of Advanced Research, Gandhinagar</span>{" "}
                with a CGPA of 8.55.
              </p>
              <p className="text-sm sm:text-base text-[#2A2321]/90 leading-relaxed mt-3">
                From publishing Python packages on PyPI to building gesture-controlled computer vision systems — I love turning complex problems into elegant, data-driven solutions. I thrive at the intersection of research and engineering, and I&apos;m always pushing myself toward the next challenge.
              </p>
            </div>

            {/* Contact + Download CV */}
            <div className="mt-6 pt-5 border-t border-[#ECD1C5] flex flex-wrap items-center gap-3">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#221F1E]">
                  <Mail className="w-3.5 h-3.5 text-[#F99B8D]" />
                  <span>heshvaasoni@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#221F1E]">
                  <Phone className="w-3.5 h-3.5 text-[#F99B8D]" />
                  <span>+91 94298 11299</span>
                </div>
              </div>
              <div className="ml-auto flex gap-2">
                <a
                  href="/Heshva_Soni_Resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#221F1E] hover:bg-[#F99B8D] text-white hover:text-[#221F1E] text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download CV
                </a>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl bg-[#F99B8D] hover:bg-[#F88A7A] text-[#221F1E] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#FBEFE9] rounded-[32px] p-6 sm:p-8 card-shadow border border-[#F2DDD4]/60"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-5">
            <Briefcase className="w-4 h-4 text-[#F99B8D]" />
            <span>Professional Experience</span>
          </div>

          <div className="space-y-4">
            {experiencesData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
                className="p-5 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#221F1E]">{exp.company}</h4>
                    <p className="text-xs font-bold text-[#F99B8D] mt-0.5">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-[#221F1E]/70 block">{exp.timeline}</span>
                    <span className="text-[11px] text-[#221F1E]/50">{exp.location}</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#2A2321]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F99B8D] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 bg-[#FDF7F3] rounded-full text-[11px] font-bold text-[#221F1E]/70 border border-[#ECD1C5]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education + Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#FBEFE9] rounded-[32px] p-6 sm:p-8 card-shadow border border-[#F2DDD4]/60"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-4">
              <GraduationCap className="w-4 h-4 text-[#F99B8D]" />
              <span>Education</span>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="text-sm font-bold text-[#221F1E] leading-snug">
                    Institute of Advanced Research, Gandhinagar
                  </h4>
                  <span className="text-[11px] text-[#221F1E]/50 shrink-0">2024 – 2027</span>
                </div>
                <p className="text-xs font-semibold text-[#F99B8D] mt-1">
                  B.Tech in Information Technology
                </p>
                <p className="text-[11px] font-bold text-[#221F1E]/70 mt-1">CGPA: 8.55</p>
              </div>

              <div className="p-4 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="text-sm font-bold text-[#221F1E] leading-snug">
                    Government Girls Polytechnic
                  </h4>
                  <span className="text-[11px] text-[#221F1E]/50 shrink-0">2021 – 2024</span>
                </div>
                <p className="text-xs font-semibold text-[#F99B8D] mt-1">
                  Diploma in Information Technology
                </p>
                <p className="text-[11px] font-bold text-[#221F1E]/70 mt-1">CGPA: 8.58 · Ahmedabad</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-[#FBEFE9] rounded-[32px] p-6 sm:p-8 card-shadow border border-[#F2DDD4]/60"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-4">
              <Award className="w-4 h-4 text-[#F99B8D]" />
              <span>Certifications</span>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60 flex items-start gap-3"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{cert.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#221F1E] leading-snug">{cert.title}</h4>
                    <p className="text-[11px] text-[#221F1E]/60 mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#FBEFE9] rounded-[32px] p-6 sm:p-8 card-shadow border border-[#F2DDD4]/60"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-5">
            <Code className="w-4 h-4 text-[#F99B8D]" />
            <span>Technical Skills</span>
          </div>

          <div className="flex flex-col gap-4">
            {skillCategories.map(({ label, skills, color }) => (
              <div key={label}>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#221F1E]/50 mb-2">
                  {label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3.5 py-1.5 rounded-2xl text-xs font-bold border shadow-sm hover:scale-105 transition-transform cursor-default ${color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="bg-[#FBEFE9] rounded-[32px] p-6 sm:p-8 card-shadow border border-[#F2DDD4]/60"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/70 mb-4">
            Find Me Online
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/heshvaa", handle: "linkedin.com/in/heshvaa" },
              { label: "GitHub", href: "https://github.com/Heshva", handle: "github.com/Heshva" },
              { label: "Portfolio", href: "https://heshvasoni.vercel.app", handle: "heshvasoni.vercel.app" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#F4E1D7] hover:bg-[#F99B8D] rounded-2xl text-xs font-bold text-[#221F1E] transition-all hover:scale-105 border border-[#ECD1C5] group"
              >
                <span>{s.label}</span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
