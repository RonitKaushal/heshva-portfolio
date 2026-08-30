"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem, experiencesData } from "@/lib/data";

interface ProjectsCardProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({ onSelectProject }) => {
  const [activeId, setActiveId] = useState<string>("isro");

  const activeExperience =
    experiencesData.find((p) => p.id === activeId) || experiencesData[0];
  const inactiveExperiences = experiencesData.filter((p) => p.id !== activeId);

  const handleItemClick = (item: ProjectItem) => {
    if (activeId === item.id) {
      if (onSelectProject) onSelectProject(item);
    } else {
      setActiveId(item.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full bg-[#FBEFE9] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 md:p-7 flex flex-col justify-between card-shadow card-hover-shadow border border-[#F2DDD4]/60 overflow-hidden"
    >
      {/* Active Header: Name + Arrow */}
      <div className="flex items-center justify-between cursor-pointer group mb-3 select-none">
        <Link href={`/projects#${activeExperience.id}`} className="flex flex-col">
          <motion.h3
            key={activeExperience.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-2xl font-bold text-[#221F1E] tracking-tight group-hover:text-[#F99B8D] transition-colors duration-300"
          >
            {activeExperience.name}
          </motion.h3>
        </Link>
        <Link
          href="/projects"
          className="p-1 text-[#221F1E] group-hover:text-[#F99B8D] transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
        </Link>
      </div>

      {/* Featured Artwork/Image Container */}
      <div
        onClick={() => onSelectProject?.(activeExperience)}
        className="relative w-full flex-1 min-h-[140px] max-h-[220px] rounded-2xl overflow-hidden cursor-pointer group/img border border-[#F0DDD4]/70 bg-[#F5E5DC]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExperience.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={activeExperience.image}
              alt={activeExperience.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
            {/* Soft overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#221F1E]/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
              <span className="text-[11px] sm:text-xs font-semibold text-white/95 tracking-wide bg-[#221F1E]/50 backdrop-blur-md px-3 py-1 rounded-full">
                {activeExperience.role} • View Details
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Other Experiences / Projects List */}
      <div className="mt-3 sm:mt-4 flex flex-col justify-end">
        {inactiveExperiences.map((exp, idx) => (
          <div key={exp.id} className="flex flex-col">
            <button
              onClick={() => handleItemClick(exp)}
              className="w-full py-2.5 sm:py-3 flex items-center justify-between text-left group cursor-pointer transition-colors"
            >
              <span className="text-sm sm:text-base font-bold text-[#221F1E]/90 group-hover:text-[#221F1E] group-hover:translate-x-1 transition-all duration-200">
                {exp.name}
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-[#221F1E]/40 group-hover:text-[#F99B8D] transition-colors">
                {exp.timeline.split(" ")[0]}
              </span>
            </button>
            {idx < inactiveExperiences.length - 1 && (
              <div className="w-full h-[1px] bg-[#EEDBD2]" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
