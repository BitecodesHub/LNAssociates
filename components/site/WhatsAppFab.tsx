"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/919898953563"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.5 }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand-black px-4 py-3 text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5 md:bottom-7 md:right-7"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-50" />
        <MessageCircle className="relative h-4 w-4" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">
        Chat with us
      </span>
    </motion.a>
  );
}
