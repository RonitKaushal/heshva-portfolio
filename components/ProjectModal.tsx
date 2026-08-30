"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles } from "lucide-react";
import { ProjectItem } from "./ProjectsCard";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#221F1E]/50 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#FBEFE9] rounded-[32px] overflow-hidden shadow-2xl border border-[#F0DDD4] z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-[#221F1E]/40 backdrop-blur-md hover:bg-[#221F1E]/70 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image */}
          <div className="relative w-full aspect-[16/10] bg-[#F5E5DC]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#221F1E]/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 right-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#F99B8D] text-[#221F1E] text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-xs text-white/80 font-semibold">{project.year}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{project.name}</h3>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto">
            <p className="text-sm sm:text-base text-[#2A2321]/90 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-6 pt-6 border-t border-[#ECD1C5] grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/60 block mb-1">
                  Medium
                </span>
                <span className="text-sm font-semibold text-[#221F1E]">
                  Generative Spatial AI & 3D Render
                </span>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/60 block mb-1">
                  Exhibition
                </span>
                <span className="text-sm font-semibold text-[#221F1E]">
                  Global Digital Art Series
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#221F1E] hover:bg-[#F99B8D] text-white hover:text-[#221F1E] font-bold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
