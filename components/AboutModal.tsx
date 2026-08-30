"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Globe, Sparkles, MapPin } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          className="relative w-full max-w-xl bg-[#FBEFE9] rounded-[32px] overflow-hidden shadow-2xl border border-[#F0DDD4] z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-[#F5E2D8] hover:bg-[#EED5CA] text-[#221F1E] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8 overflow-y-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#F99B8D] shrink-0">
                <Image
                  src="/images/julia_portrait.jpg"
                  alt="Julia Huang"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#221F1E]">Julia Huang</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-[#F99B8D]">
                  AI Architect & Computational Designer
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#2A2321]/90 leading-relaxed">
              <p>
                Julia Huang is an innovative AI artist and architectural designer based in Los Angeles. She explores the intersection of synthetic computational intelligence, surreal environmental forms, and spatial luxury.
              </p>
              <p>
                Her works have been featured in international design biennials, digital exhibitions, and conceptual architecture pavilions, pushing the boundary of how humans imagine future spaces through generative models.
              </p>
            </div>

            {/* Quick stats / highlights */}
            <div className="mt-6 pt-6 border-t border-[#ECD1C5] grid grid-cols-2 gap-3">
              <div className="p-3.5 bg-[#F4E1D7] rounded-2xl">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F99B8D] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>LOCATION</span>
                </div>
                <p className="text-xs font-bold text-[#221F1E]">Los Angeles, CA</p>
              </div>

              <div className="p-3.5 bg-[#F4E1D7] rounded-2xl">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F99B8D] mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>HONORS</span>
                </div>
                <p className="text-xs font-bold text-[#221F1E]">Future Design Fellow &apos;24</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
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
