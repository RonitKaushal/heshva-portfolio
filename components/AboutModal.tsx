"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, GraduationCap, Briefcase, Code, MapPin, CheckCircle2 } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const skills = [
    "Python",
    "Machine Learning",
    "Data Analysis",
    "Time Series Analysis",
    "AI/ML Geodata Analysis",
    "GitHub & Version Control",
    "Applied Deep Learning",
    "Intelligent Software Architecture",
  ];

  const certifications = [
    "Python for Machine Learning (Certificate of Completion)",
    "AI/ML for Geodata Analysis",
    "Blockchain Foundation Program",
    "Regional Hackathon Participation & Stage Finalist",
  ];

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
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-[#F5E2D8] hover:bg-[#EED5CA] text-[#221F1E] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Header Profile */}
            <div className="flex items-center gap-4">
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#F99B8D] shrink-0">
                <Image
                  src="/images/heshva_portrait.jpg"
                  alt="Heshva Soni"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#221F1E]">
                  Heshva Soni
                </h3>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F99B8D] mt-0.5">
                  Research Intern @ SAC-ISRO • IT Student • ML Enthusiast
                </p>
                <div className="flex items-center gap-1 text-xs text-[#221F1E]/60 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Greater Ahmedabad Area, Gujarat, India</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="p-4 bg-[#F5E5DC] rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/70 mb-2">
                Professional Summary
              </h4>
              <p className="text-sm text-[#2A2321]/90 leading-relaxed">
                I bridge the gap between complex data and user-centric applications. Currently pursuing my B.Tech in Information Technology at Institute of Advanced Research (IAR) Gandhinagar, I have completed professional internships focused on Python and Machine Learning. I am a creative problem-solver who isn&apos;t afraid to push the boundaries of AI to build smarter software.
              </p>
            </div>

            {/* Experience Timeline */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-3">
                <Briefcase className="w-4 h-4 text-[#F99B8D]" />
                <span>Professional Experience</span>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-sm font-bold text-[#221F1E]">
                        Space Applications Centre, ISRO
                      </h5>
                      <p className="text-xs font-semibold text-[#F99B8D]">
                        Research Intern
                      </p>
                    </div>
                    <span className="text-xs font-medium text-[#221F1E]/60">
                      June 2026 - Present
                    </span>
                  </div>
                  <p className="text-xs text-[#2A2321]/80 mt-1.5 leading-normal">
                    AI/ML research, Time Series modeling, and satellite geodata analysis.
                  </p>
                </div>

                <div className="p-3.5 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-sm font-bold text-[#221F1E]">InfoLabz</h5>
                      <p className="text-xs font-semibold text-[#F99B8D]">Intern</p>
                    </div>
                    <span className="text-xs font-medium text-[#221F1E]/60">
                      July 2023 - August 2023
                    </span>
                  </div>
                  <p className="text-xs text-[#2A2321]/80 mt-1.5 leading-normal">
                    Python development, Machine Learning algorithms, and data transformation.
                  </p>
                </div>

                <div className="p-3.5 bg-[#F4E1D7] rounded-2xl border border-[#ECD1C5]/60">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-sm font-bold text-[#221F1E]">Techno IT Hub</h5>
                      <p className="text-xs font-semibold text-[#F99B8D]">Intern</p>
                    </div>
                    <span className="text-xs font-medium text-[#221F1E]/60">
                      Sept 2022 - May 2023 (9 mos)
                    </span>
                  </div>
                  <p className="text-xs text-[#2A2321]/80 mt-1.5 leading-normal">
                    Software engineering, backend data management, and client solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-3">
                <GraduationCap className="w-4 h-4 text-[#F99B8D]" />
                <span>Education</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-[#F4E1D7] rounded-2xl">
                  <h5 className="text-xs font-bold text-[#221F1E]">
                    Institute of Advanced Research, Gandhinagar
                  </h5>
                  <p className="text-xs text-[#F99B8D] font-semibold mt-0.5">
                    B.Tech, Information Technology
                  </p>
                  <p className="text-[11px] text-[#221F1E]/60 mt-1">2024 - 2027</p>
                </div>

                <div className="p-3.5 bg-[#F4E1D7] rounded-2xl">
                  <h5 className="text-xs font-bold text-[#221F1E]">
                    Gujarat Technological University (GTU)
                  </h5>
                  <p className="text-xs text-[#F99B8D] font-semibold mt-0.5">
                    Diploma in Information Technology
                  </p>
                  <p className="text-[11px] text-[#221F1E]/60 mt-1">Sept 2021 - June 2024</p>
                </div>
              </div>
            </div>

            {/* Skills & Certifications */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-3">
                <Code className="w-4 h-4 text-[#F99B8D]" />
                <span>Top Skills & Certifications</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#FDF7F3] border border-[#ECD1C5] rounded-full text-xs font-bold text-[#221F1E]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="space-y-1.5 mt-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-xs text-[#2A2321]/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F99B8D] shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#ECD1C5] flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#221F1E] hover:bg-[#F99B8D] text-white hover:text-[#221F1E] font-bold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
