"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Send, Mail, MapPin } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F99B8D", "#F88A7A", "#FBEFE9", "#221F1E"],
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      onClose();
    }, 2400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("heshvasoni1006@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#221F1E]/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#FBEFE9] rounded-[32px] p-6 sm:p-8 shadow-2xl border border-[#F0DDD4] z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#F5E2D8] hover:bg-[#EED5CA] text-[#221F1E] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F99B8D]">
                Get In Touch
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#221F1E] mt-1">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-[#221F1E]/70 mt-1">
                ML research collaborations, data engineering projects, or opportunities.
              </p>
            </div>

            {/* Direct contact pill */}
            <div className="mb-6 p-3.5 bg-[#F4E1D7] rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#221F1E]">
                <Mail className="w-4 h-4 text-[#F99B8D]" />
                <span>heshvasoni1006@gmail.com</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs font-bold px-3 py-1 bg-[#221F1E] text-white rounded-full hover:bg-[#F99B8D] transition-colors cursor-pointer"
              >
                {isCopied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Form */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center flex flex-col items-center justify-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-[#F99B8D] text-white flex items-center justify-center shadow-lg">
                  <Check className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h4 className="text-xl font-bold text-[#221F1E]">Message Sent!</h4>
                <p className="text-sm text-[#221F1E]/70 max-w-xs">
                  Thank you for reaching out. Heshva will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Smith"
                    className="w-full px-4 py-3 bg-[#FDF7F3] border border-[#ECD1C5] rounded-xl text-sm text-[#221F1E] placeholder:text-[#221F1E]/35 focus:outline-none focus:border-[#F99B8D] focus:ring-1 focus:ring-[#F99B8D] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 bg-[#FDF7F3] border border-[#ECD1C5] rounded-xl text-sm text-[#221F1E] placeholder:text-[#221F1E]/35 focus:outline-none focus:border-[#F99B8D] focus:ring-1 focus:ring-[#F99B8D] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea or inquiry..."
                    className="w-full px-4 py-3 bg-[#FDF7F3] border border-[#ECD1C5] rounded-xl text-sm text-[#221F1E] placeholder:text-[#221F1E]/35 focus:outline-none focus:border-[#F99B8D] focus:ring-1 focus:ring-[#F99B8D] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#F99B8D] hover:bg-[#F88A7A] text-[#221F1E] font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
