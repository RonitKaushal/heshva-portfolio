"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  image: string;
  year: string;
  description: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "musea",
    name: "Musea",
    category: "Surreal Architecture & Spatial AI",
    image: "/images/musea.jpg",
    year: "2025",
    description:
      "A dreamlike architectural exploration blending plush organic textures with ethereal atmospheric clouds and soft dawn illumination.",
  },
  {
    id: "elara",
    name: "Elara",
    category: "Bio-Pavilion Systems",
    image: "/images/elara.jpg",
    year: "2025",
    description:
      "Futuristic bio-architectural pavilion featuring fluid curved crystal geometries and responsive glowing light frameworks.",
  },
  {
    id: "verve",
    name: "Verve",
    category: "Sculptural Interiors",
    image: "/images/verve.jpg",
    year: "2024",
    description:
      "Minimalist vaulted spaces rendered with tactile pink plaster arches and sculptural backlit stone pedestals.",
  },
  {
    id: "zephyr",
    name: "Zephyr",
    category: "Floating Sanctuary",
    image: "/images/zephyr.jpg",
    year: "2024",
    description:
      "An ethereal floating pavilion resting over tranquil reflective waters under soft pastel twilight sky.",
  },
];

interface ProjectsCardProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({ onSelectProject }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>("musea");

  const activeProject =
    projectsData.find((p) => p.id === activeProjectId) || projectsData[0];
  const inactiveProjects = projectsData.filter((p) => p.id !== activeProjectId);

  const handleProjectClick = (project: ProjectItem) => {
    if (activeProjectId === project.id) {
      if (onSelectProject) onSelectProject(project);
    } else {
      setActiveProjectId(project.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full bg-[#FBEFE9] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col card-shadow card-hover-shadow border border-[#F2DDD4]/60 overflow-hidden"
    >
      {/* Active Project Header: Title + Arrow */}
      <div
        onClick={() => onSelectProject?.(activeProject)}
        className="flex items-center justify-between cursor-pointer group mb-4 select-none"
      >
        <div className="flex items-center gap-2">
          <motion.h3
            key={activeProject.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-2xl font-bold text-[#221F1E] tracking-tight group-hover:text-[#F99B8D] transition-colors duration-300"
          >
            {activeProject.name}
          </motion.h3>
        </div>
        <div className="p-1 text-[#221F1E] group-hover:text-[#F99B8D] transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
        </div>
      </div>

      {/* Featured Project Image Container */}
      <div
        onClick={() => onSelectProject?.(activeProject)}
        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group/img border border-[#F0DDD4]/70 bg-[#F5E5DC]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={activeProject.image}
              alt={activeProject.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
            {/* Soft overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#221F1E]/30 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-xs font-semibold text-white/95 tracking-wide bg-[#221F1E]/40 backdrop-blur-md px-3 py-1 rounded-full">
                View Project Details
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Other Projects Accordion List */}
      <div className="mt-5 flex flex-col">
        {inactiveProjects.map((project, idx) => (
          <div key={project.id} className="flex flex-col">
            <button
              onClick={() => handleProjectClick(project)}
              className="w-full py-3.5 flex items-center justify-between text-left group cursor-pointer transition-colors"
            >
              <span className="text-base sm:text-lg font-bold text-[#221F1E]/90 group-hover:text-[#221F1E] group-hover:translate-x-1 transition-all duration-200">
                {project.name}
              </span>
              <span className="text-xs font-medium text-[#221F1E]/40 group-hover:text-[#F99B8D] transition-colors">
                {project.year}
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
