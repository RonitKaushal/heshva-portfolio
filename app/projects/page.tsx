"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { experiencesData, ProjectItem } from "@/lib/data";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Calendar, Tag, Sparkles } from "lucide-react";
import { ProjectModal } from "@/components/ProjectModal";

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>("ALL");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const allTags = ["ALL", "ISRO", "Machine Learning", "Python", "Time Series", "Geodata"];

  const filteredProjects = selectedTag === "ALL"
    ? experiencesData
    : experiencesData.filter((p) =>
        p.tags.some((t) => t.toLowerCase().includes(selectedTag.toLowerCase()))
      );

  return (
    <main className="min-h-screen w-full bg-[#F7E7DF] flex flex-col items-center p-3 sm:p-5 md:p-8 font-sans">
      <div className="w-full max-w-[1240px] flex flex-col gap-6">
        {/* Header */}
        <div className="w-full bg-[#FBEFE9] rounded-[28px] px-6 py-2 card-shadow border border-[#F2DDD4]/60">
          <Header />
        </div>

        {/* Page Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full bg-[#FBEFE9] rounded-[32px] p-6 sm:p-10 card-shadow border border-[#F2DDD4]/60 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F99B8D] hover:text-[#221F1E] transition-colors mb-3 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#221F1E] tracking-tight">
              Featured <span className="font-serif-italic italic font-normal text-[#2A2321]">Experience</span> & Projects
            </h1>
            <p className="text-sm sm:text-base text-[#2A2321]/80 mt-2 leading-relaxed">
              Explorations across Machine Learning algorithms, Time Series Analysis, Geodata observation at SAC-ISRO, and full-stack software development.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedTag === tag
                    ? "bg-[#221F1E] text-white shadow-sm"
                    : "bg-[#F5E5DC] text-[#221F1E]/80 hover:bg-[#F99B8D]/30"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#FBEFE9] rounded-[32px] overflow-hidden card-shadow card-hover-shadow border border-[#F2DDD4]/60 flex flex-col justify-between"
            >
              {/* Card Image */}
              <div
                onClick={() => setActiveModalProject(project)}
                className="relative w-full aspect-[16/9] bg-[#F5E5DC] cursor-pointer overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#221F1E]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#F99B8D] text-[#221F1E] text-xs font-bold uppercase tracking-wider shadow-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/40 backdrop-blur-md text-[#221F1E] group-hover:bg-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black text-[#221F1E]">{project.name}</h3>
                    <span className="text-xs font-semibold text-[#221F1E]/60 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#F99B8D]" />
                      {project.timeline}
                    </span>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F99B8D] mb-3">
                    {project.role}
                  </p>

                  <p className="text-sm text-[#2A2321]/90 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#2A2321]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F99B8D] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags & Action Button */}
                <div className="pt-4 border-t border-[#ECD1C5] flex items-center justify-between flex-wrap gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 bg-[#F4E1D7] rounded-full text-[11px] font-bold text-[#221F1E]/70"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-bold uppercase tracking-wider text-[#221F1E] hover:text-[#F99B8D] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </main>
  );
}
