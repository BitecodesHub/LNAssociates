"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  Clock,
  Lock,
  Sparkles,
  Users2,
  TrendingUp,
  Headphones,
  ArrowRight,
} from "lucide-react";

const REASONS = [
  { icon: Clock,      num: "01", title: "On-time, every time",       body: "Filings, audits and deliverables — we stay ahead of every deadline." },
  { icon: Lock,       num: "02", title: "Confidential by default",    body: "Enterprise-grade processes keep your data and documents secure." },
  { icon: Sparkles,   num: "03", title: "Human + digital workflow",   body: "We blend expert judgement with modern tooling for fewer errors." },
  { icon: Users2,     num: "04", title: "Partner-led service",        body: "Your engagement is led by a founder — not passed around teams." },
  { icon: TrendingUp, num: "05", title: "Built for growth",           body: "Our advisory scales from first invoice to first IPO — seamlessly." },
  { icon: Headphones, num: "06", title: "Always reachable",           body: "Phone, email, WhatsApp — real responses from real experts." },
];

export function WhyUs() {
  const [active, setActive] = React.useState<number | null>(null);

  return (
    <section id="why" className="relative overflow-hidden py-14 md:py-24" aria-labelledby="why-title">
      <div className="container">

        {/* ── Centered header above card ── */}
        <div className="mx-auto mb-8 max-w-xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="font-display text-3xl font-bold tracking-tight text-brand-red md:text-4xl"
          >
            Why LN Associate
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.07 }}
            className="mt-2 text-[14px] text-brand-muted"
          >
            We don't just close your books — we help you open new possibilities.
          </motion.p>
        </div>

        {/* ── Dark card ── */}
        <div className="relative overflow-hidden rounded-[28px] bg-brand-black sm:rounded-[40px]">

          {/* Background texture */}
          <div aria-hidden className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_15%_60%,rgba(200,16,46,0.09),transparent_50%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.03),transparent_50%)]" />
          <div aria-hidden className="pointer-events-none absolute inset-0 [background:linear-gradient(transparent_31px,rgba(255,255,255,0.022)_32px),linear-gradient(90deg,transparent_31px,rgba(255,255,255,0.022)_32px)] bg-[size:32px_32px]" />

          {/* Card header */}
          <div className="relative grid gap-6 px-6 pb-6 pt-8 sm:gap-8 sm:px-8 sm:pb-8 sm:pt-10 md:grid-cols-2 md:items-end md:px-12 md:pt-12">
            <motion.h2
              id="why-title"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-display text-2xl font-bold leading-[1.15] text-white sm:text-3xl md:text-[2.6rem] text-balance"
            >
              The reliance behind every reliable business.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex md:justify-end"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-brand-red hover:bg-brand-red"
              >
                Talk to a partner
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-white/[0.07] sm:mx-8 md:mx-12" />

          {/* ── Expanding panels (desktop) ── */}
          <div
            className="relative hidden gap-2 px-8 py-8 md:flex md:px-12 md:py-10"
            style={{ height: "230px" }}
            onMouseLeave={() => setActive(null)}
          >
            {REASONS.map((r, i) => {
              const isActive = active === i;
              return (
                <div
                  key={r.title}
                  onMouseEnter={() => setActive(i)}
                  style={{
                    flex: isActive ? "4 1 0%" : "1 1 0%",
                    transition: "flex 420ms cubic-bezier(0.25, 1, 0.5, 1), border-color 300ms ease, background-color 300ms ease",
                  }}
                  className={
                    "relative cursor-default overflow-hidden rounded-2xl border " +
                    (isActive
                      ? "border-brand-red/40 bg-white/[0.08]"
                      : "border-white/[0.08] bg-white/[0.04] hover:border-white/20")
                  }
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isActive ? (
                      /* ── Expanded ── */
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.28, delay: 0.12, ease: [0.25, 1, 0.5, 1] }}
                        className="flex h-full flex-col p-4"
                      >
                        <span className="text-[10px] font-bold tabular-nums text-brand-red">
                          {r.num}
                        </span>
                        <h3 className="mt-3 font-display text-[15px] font-bold leading-snug text-white">
                          {r.title}
                        </h3>
                        <p className="mt-2 text-[12.5px] leading-relaxed text-white/60">
                          {r.body}
                        </p>
                        <div className="mt-auto flex h-9 w-9 items-center justify-center rounded-xl bg-brand-red text-white">
                          <r.icon className="h-4 w-4" />
                        </div>
                      </motion.div>
                    ) : (
                      /* ── Collapsed ── */
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.12, ease: "easeOut" }}
                        className="flex h-full flex-col p-4"
                      >
                        <span className="text-[10px] font-bold tabular-nums text-brand-red">
                          {r.num}
                        </span>
                        <div className="flex flex-1 items-center justify-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/15 text-brand-red">
                            <r.icon className="h-5 w-5" />
                          </div>
                        </div>
                        <p className="text-center text-[15px] font-semibold leading-snug text-white/85">
                          {r.title}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* ── Stacked list (mobile) ── */}
          <div className="relative divide-y divide-white/[0.07] px-6 pb-6 sm:px-8 sm:pb-8 md:hidden">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-4 py-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-red/15 text-brand-red">
                  <r.icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-bold text-white">{r.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-white/55">{r.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
