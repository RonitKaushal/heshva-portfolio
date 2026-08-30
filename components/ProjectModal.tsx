"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar, Briefcase } from "lucide-react";
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
          <div className="relative w-full aspect-[16/9] bg-[#F5E5DC]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#221F1E]/80 via-[#221F1E]/20 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[#F99B8D] text-[#221F1E] text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-xs text-white/90 font-semibold flex items-center gap-1 bg-[#221F1E]/40 px-2 py-0.5 rounded-full backdrop-blur-md">
                  <Calendar className="w-3 h-3" />
                  {project.timeline}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{project.name}</h3>
              <p className="text-xs sm:text-sm text-white/80 font-medium">{project.role}</p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/60 block mb-1.5">
                Overview & Impact
              </span>
              <p className="text-sm sm:text-base text-[#2A2321]/90 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/60 block mb-2">
                  Key Technical Highlights
                </span>
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2A2321]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#F99B8D] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#ECD1C5] flex items-center justify-end">
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
