"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.5]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-black/[0.04] blur-[120px]" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs text-brand-muted"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white px-3 py-1.5 font-medium text-brand-ink transition-colors hover:border-brand-red/30 hover:text-brand-red"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Home
          </Link>
          <span>/</span>
          <span className="font-medium text-brand-ink">Contact</span>
        </motion.div>

        <div className="mt-8 grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-medium text-brand-ink shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand-red" />
              We reply within 1 business day
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 font-display text-[clamp(2.4rem,6vw,4.4rem)] font-extrabold leading-[1.04] tracking-tight text-brand-black text-balance"
            >
              Let's make your numbers{" "}
              <span className="text-brand-red">make sense</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-5 max-w-2xl text-[17px] leading-relaxed text-brand-muted text-pretty"
            >
              Share a few details below or pick any channel that suits you — a
              partner from our team will personally respond with a tailored
              plan and transparent pricing.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-4"
          >
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                Our promise
              </div>
              <p className="mt-3 font-display text-lg font-bold leading-snug text-brand-black">
                A partner-led response — not a support ticket.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                Your first conversation is always with a founder. No
                gatekeepers, no templates.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
