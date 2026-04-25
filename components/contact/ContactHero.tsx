"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-8 sm:pt-32 sm:pb-12 md:pt-40 md:pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-plus-sm mask-radial-fade opacity-80" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-red/[0.06] blur-[120px]" />

      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red"
          >
            Get in touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-3 font-display text-[clamp(1.9rem,5.5vw,3.8rem)] font-extrabold leading-[1.08] tracking-tight text-brand-black text-balance"
          >
            Let's make your numbers{" "}
            <span className="text-brand-red">make sense</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-brand-muted sm:text-[16px]"
          >
            Drop a message or reach us directly — a partner replies within one business day.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
