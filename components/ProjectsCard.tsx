"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { projectsData } from "@/lib/data";

export const ProjectsCard: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(projectsData[0].id);

  const activeProject = projectsData.find((p) => p.id === activeId) || projectsData[0];
  const inactiveProjects = projectsData.filter((p) => p.id !== activeId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full bg-[#FBEFE9] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between card-shadow card-hover-shadow border border-[#F2DDD4]/60 overflow-hidden"
    >
      {/* Active Header: Name + Category */}
      <div className="flex items-start justify-between cursor-pointer group mb-3 select-none">
        <Link href={`/projects#${activeProject.id}`} className="flex flex-col flex-1 min-w-0 pr-2">
          <motion.h3
            key={activeProject.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold text-[#221F1E] tracking-tight group-hover:text-[#F99B8D] transition-colors duration-300 truncate"
          >
            {activeProject.name}
          </motion.h3>
          <motion.span
            key={`${activeProject.id}-cat`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#F99B8D] mt-0.5"
          >
            {activeProject.category}
          </motion.span>
        </Link>
        <Link
          href={`/projects#${activeProject.id}`}
          className="p-1.5 rounded-full bg-[#F4E1D7] text-[#221F1E] hover:bg-[#F99B8D] transition-all duration-300 shrink-0"
        >
          <ArrowUpRight className="w-4 h-4 stroke-[2]" />
        </Link>
      </div>

      {/* Project Preview Card */}
      <Link
        href={`/projects#${activeProject.id}`}
        className="relative w-full flex-1 p-4 sm:p-5 rounded-2xl cursor-pointer group/card border border-[#ECD1C5] bg-[#F5E5DC]/80 hover:bg-[#F5E5DC] transition-all duration-300 flex flex-col justify-between overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col justify-between h-full gap-3"
          >
            <p className="text-xs sm:text-[13px] text-[#2A2321]/85 leading-relaxed line-clamp-3">
              {activeProject.description}
            </p>

            {/* Highlights */}
            <div className="space-y-1.5">
              {activeProject.highlights.slice(0, 2).map((h, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-[11px] sm:text-[11.5px] text-[#2A2321]/80">
                  <CheckCircle2 className="w-3 h-3 text-[#F99B8D] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{h}</span>
                </div>
              ))}
            </div>

            {/* Tag row */}
            <div className="flex items-center justify-between pt-2 border-t border-[#ECD1C5]/70">
              <div className="flex flex-wrap gap-1">
                {activeProject.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-[#FDF7F3] rounded-md text-[10px] font-bold text-[#221F1E]/80 border border-[#ECD1C5]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#F99B8D] flex items-center gap-1 group-hover/card:translate-x-0.5 transition-transform">
                <Sparkles className="w-3 h-3" />
                Explore
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </Link>

      {/* Other Projects List */}
      <div className="mt-3 flex flex-col">
        {inactiveProjects.map((proj, idx) => (
          <div key={proj.id} className="flex flex-col">
            <button
              onClick={() => setActiveId(proj.id)}
              className="w-full py-2 sm:py-2.5 flex items-center justify-between text-left group cursor-pointer"
            >
              <span className="text-xs sm:text-sm font-bold text-[#221F1E]/80 group-hover:text-[#221F1E] group-hover:translate-x-1 transition-all duration-200 truncate pr-2">
                {proj.name}
              </span>
              <span className="text-[10px] sm:text-[10.5px] font-semibold text-[#221F1E]/45 group-hover:text-[#F99B8D] transition-colors shrink-0">
                {proj.category.split("·")[0].trim()}
              </span>
            </button>
            {idx < inactiveProjects.length - 1 && (
              <div className="w-full h-[1px] bg-[#EEDBD2]" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
