"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { projectsData, ProjectItem } from "@/lib/data";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Package,
  GitFork,
  Sparkles,
  Code2,
  Layers,
  Zap,
} from "lucide-react";

const tagColors: Record<string, string> = {
  Python: "bg-blue-50 text-blue-700 border-blue-200",
  TensorFlow: "bg-orange-50 text-orange-700 border-orange-200",
  LSTM: "bg-purple-50 text-purple-700 border-purple-200",
  OpenCV: "bg-green-50 text-green-700 border-green-200",
  ISRO: "bg-rose-50 text-rose-700 border-rose-200",
  PyPI: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Streamlit: "bg-red-50 text-red-700 border-red-200",
  Geospatial: "bg-teal-50 text-teal-700 border-teal-200",
};

function getTagClass(tag: string) {
  return tagColors[tag] || "bg-[#F4E1D7] text-[#221F1E] border-[#ECD1C5]";
}

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>("ALL");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const allTags = ["ALL", "Python", "Machine Learning", "Computer Vision", "PyPI", "ISRO", "Deep Learning"];

  const filteredProjects =
    selectedTag === "ALL"
      ? projectsData
      : projectsData.filter((p) =>
          p.tags.some((t) => t.toLowerCase().includes(selectedTag.toLowerCase()))
        );

  return (
    <main className="min-h-screen w-full bg-[#F7E7DF] flex flex-col items-center p-3 sm:p-5 md:p-8 font-sans">
      <div className="w-full max-w-[1240px] flex flex-col gap-6 pb-12">
        {/* Header */}
        <div className="w-full bg-[#FBEFE9] rounded-[28px] px-6 py-2 card-shadow border border-[#F2DDD4]/60">
          <Header />
        </div>

        {/* Page Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full bg-[#FBEFE9] rounded-[32px] p-7 sm:p-10 card-shadow border border-[#F2DDD4]/60 overflow-hidden"
        >
          {/* Decorative gradient blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#F99B8D]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#F89B8D]/8 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F99B8D] hover:text-[#221F1E] transition-colors mb-4 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Home</span>
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#221F1E] tracking-tight leading-[1.05]">
                My{" "}
                <span className="font-serif-italic italic font-normal text-[#2A2321]">
                  Projects
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#2A2321]/75 mt-3 leading-relaxed max-w-lg">
                A curated collection of my work spanning data engineering, deep learning, computer vision, and published open-source packages.
              </p>

              {/* Stats row */}
              <div className="flex items-center gap-5 mt-5">
                {[
                  { icon: Layers, label: `${projectsData.length} Projects` },
                  { icon: Package, label: "1 PyPI Package" },
                  { icon: Code2, label: "Python-First" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-xs font-semibold text-[#221F1E]/70">
                    <Icon className="w-3.5 h-3.5 text-[#F99B8D]" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    selectedTag === tag
                      ? "bg-[#221F1E] text-white shadow-sm border-[#221F1E]"
                      : "bg-[#F5E5DC] text-[#221F1E]/80 hover:bg-[#F99B8D]/25 border-[#ECD1C5]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid (Clean card layout without images or years) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          >
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-[#FBEFE9] rounded-[32px] p-7 sm:p-8 card-shadow card-hover-shadow border border-[#F2DDD4]/60 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Category + Role Badge + Action links */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#F99B8D] text-[#221F1E] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#221F1E]/60 border border-[#ECD1C5] bg-[#FDF7F3] rounded-full px-2.5 py-0.5">
                        {project.role}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.pypi && (
                        <a
                          href={project.pypi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#F4E1D7] text-[#221F1E] hover:bg-[#F99B8D] transition-colors"
                          title="View on PyPI"
                        >
                          <Package className="w-4 h-4" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#F4E1D7] text-[#221F1E] hover:bg-[#F99B8D] transition-colors"
                          title="View on GitHub"
                        >
                          <GitFork className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        onClick={() => setActiveProject(project)}
                        className="p-2 rounded-xl bg-[#F4E1D7] text-[#221F1E] hover:bg-[#221F1E] hover:text-white transition-colors"
                        title="View Details"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Project Name */}
                  <h3
                    onClick={() => setActiveProject(project)}
                    className="text-2xl font-black text-[#221F1E] cursor-pointer group-hover:text-[#F99B8D] transition-colors mt-2"
                  >
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm text-[#2A2321]/85 leading-relaxed mt-3">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#2A2321]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F99B8D] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tags + Inspect CTA */}
                <div className="mt-6 pt-5 border-t border-[#ECD1C5] flex items-center justify-between flex-wrap gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${getTagClass(t)}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-bold uppercase tracking-wider text-[#221F1E] hover:text-[#F99B8D] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>View Modal</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-[#221F1E]/50 text-sm font-semibold">
            No projects match this filter. Try &ldquo;ALL&rdquo; to see everything.
          </div>
        )}
      </div>

      {/* Project Detail Modal (Clean typography without images or years) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 bg-[#221F1E]/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FBEFE9] rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-7 sm:p-9 border border-[#F2DDD4]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-[#ECD1C5] pb-5">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#F99B8D] text-[#221F1E] text-xs font-bold uppercase tracking-wider">
                    {activeProject.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#221F1E] mt-2">
                    {activeProject.name}
                  </h2>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/60 mt-1">
                    {activeProject.role}
                  </p>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="w-9 h-9 rounded-full bg-[#F4E1D7] text-[#221F1E] hover:bg-[#221F1E] hover:text-white transition-colors flex items-center justify-center font-bold text-lg cursor-pointer shrink-0"
                >
                  ×
                </button>
              </div>

              {/* Modal Body */}
              <div className="py-6 flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/70 mb-2">
                    About the Project
                  </h4>
                  <p className="text-sm sm:text-base text-[#2A2321]/90 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/70 mb-3 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#F99B8D]" /> Key Deliverables & Highlights
                  </h4>
                  <div className="space-y-2.5">
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-[#2A2321]/85">
                        <CheckCircle2 className="w-4 h-4 text-[#F99B8D] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/70 mb-3">
                    Technologies & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${getTagClass(t)}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer with Actions */}
              <div className="pt-5 border-t border-[#ECD1C5] flex items-center justify-between flex-wrap gap-3">
                <div className="flex gap-2">
                  {activeProject.pypi && (
                    <a
                      href={activeProject.pypi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-[#F99B8D] hover:bg-[#F88A7A] text-[#221F1E] text-xs font-bold rounded-xl transition-colors"
                    >
                      <Package className="w-3.5 h-3.5" /> View on PyPI
                    </a>
                  )}
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-[#221F1E] text-white hover:bg-[#F99B8D] hover:text-[#221F1E] text-xs font-bold rounded-xl transition-colors"
                    >
                      <GitFork className="w-3.5 h-3.5" /> GitHub Repo
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 rounded-xl bg-[#F4E1D7] hover:bg-[#ECD1C5] text-xs font-bold text-[#221F1E] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
