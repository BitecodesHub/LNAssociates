"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Calculator,
  Landmark,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

interface ServiceDef {
  icon: React.ElementType;
  num: string;
  title: string;
  tag: string;
  desc: string;
  href: string;
}

const SERVICES: ServiceDef[] = [
  {
    icon: Building2,
    num: "01",
    title: "Business Registration",
    tag: "From ₹1,500",
    desc: "Pvt Ltd, LLP, OPC, MSME, FSSAI, IEC & trademark — we handle every registration so you can launch in days, not months.",
    href: "/contact",
  },
  {
    icon: Calculator,
    num: "02",
    title: "Accounting Services",
    tag: "Monthly Retainer",
    desc: "End-to-end books, cash flow statements, payroll processing and vendor payments — handled with precision every month.",
    href: "/accounting",
  },
  {
    icon: Landmark,
    num: "03",
    title: "Finance Services",
    tag: "Advisory",
    desc: "Term loans, working capital, machinery finance, mortgage & startup funding — we structure the right deal for your stage.",
    href: "/finance",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Audit",
    tag: "Engagement",
    desc: "Internal audit, statutory GST audit and audits specified under other acts — independent, thorough and partner-led.",
    href: "/contact",
  },
];

export function Services() {
  const [active, setActive] = React.useState(0);
  const current = SERVICES[active];

  return (
    <section
      id="services"
      className="relative py-14 md:py-24"
      aria-labelledby="services-title"
    >
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="services-title"
            className="font-display text-2xl font-bold uppercase tracking-[0.1em] text-brand-red sm:text-3xl md:text-4xl"
          >
            What we do
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-brand-muted sm:mt-4 sm:text-[15px]">
            Services tailored to every stage of your business.
          </p>
        </div>

        {/* Split layout */}
        <div className="mt-10 flex flex-col gap-0 sm:mt-14 lg:grid lg:grid-cols-[5fr_1px_7fr]">

          {/* ── Left: numbered list ── */}
          <div className="flex flex-col">
            {SERVICES.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.num}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group relative flex items-center gap-5 py-5 text-left transition-colors duration-200 focus:outline-none"
                >
                  {/* Active red bar */}
                  <motion.div
                    className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-brand-red origin-top"
                    initial={false}
                    animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />

                  <div className="pl-6">
                    {/* Number */}
                    <motion.span
                      animate={{ color: isActive ? "#C8102E" : "rgba(0,0,0,0.22)" }}
                      transition={{ duration: 0.25 }}
                      className="block text-[11px] font-bold tabular-nums"
                    >
                      {s.num}
                    </motion.span>

                    {/* Title */}
                    <motion.span
                      animate={{
                        color: isActive ? "#0a0a0a" : "rgba(0,0,0,0.38)",
                        fontWeight: isActive ? 700 : 400,
                      }}
                      transition={{ duration: 0.25 }}
                      className="mt-0.5 block font-display text-[1.15rem] leading-snug sm:text-[1.35rem]"
                    >
                      {s.title}
                    </motion.span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Divider ── */}
          <div className="hidden lg:block bg-black/[0.07]" />

          {/* ── Right: detail panel ── */}
          <div className="relative mt-10 overflow-hidden lg:mt-0 lg:pl-14 xl:pl-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex h-full flex-col justify-center py-4 lg:py-10"
              >
                {/* Tag */}
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                  {current.tag}
                </p>

                {/* Title */}
                <h3 className="mt-3 font-display text-[1.75rem] font-bold leading-tight tracking-tight text-brand-black sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.4rem]">
                  {current.title}
                </h3>

                {/* Red rule */}
                <div className="mt-4 h-[2px] w-10 rounded-full bg-brand-red sm:mt-6" />

                {/* Description */}
                <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-brand-muted sm:mt-6 sm:text-[15.5px]">
                  {current.desc}
                </p>

                {/* CTA */}
                <Link
                  href={current.href}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-black transition-colors duration-200 hover:text-brand-red sm:mt-8"
                >
                  Get started
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Watermark number */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-2 right-0 select-none font-display text-[5rem] font-extrabold leading-none text-black/[0.04] sm:text-[8rem] md:text-[10rem] lg:text-[13rem]"
                >
                  {current.num}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
