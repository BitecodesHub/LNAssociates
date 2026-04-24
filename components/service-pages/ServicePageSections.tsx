"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

type HeroStat = {
  label: string;
  value: string;
};

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  body: string;
  tag: string;
  href?: string;
};

type StepItem = {
  title: string;
  body: string;
};

type ProofItem = {
  title: string;
  body: string;
};

type TrustBandProps = {
  eyebrow: string;
  statement: string;
  chips: string[];
};

type CTAProps = {
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export function ServicePageHero({
  eyebrow,
  title,
  body,
  primaryLabel,
  secondaryLabel,
  secondaryHref,
  stats,
  highlight,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
  secondaryHref: string;
  stats: HeroStat[];
  highlight: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.38]" />
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/[0.035] blur-[130px]" />
        <div className="absolute right-[-100px] top-24 h-[360px] w-[360px] rounded-full bg-brand-black/5 blur-[100px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="container grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.04 }}
            className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.6rem)] font-extrabold leading-[1.02] tracking-tight text-brand-black text-balance"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 max-w-2xl text-[16px] leading-relaxed text-brand-muted text-pretty"
          >
            {body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <Link href="/contact" className="group">
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/5 bg-white/90 px-4 py-4 shadow-card backdrop-blur"
              >
                <div className="font-display text-2xl font-bold text-brand-black">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="lg:col-span-5"
        >
          {highlight}
        </motion.div>
      </div>
    </section>
  );
}

export function ServiceGrid({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: ServiceItem[];
}) {
  const [active, setActive] = React.useState(items[0]?.title ?? "");

  return (
    <section id="services" className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-black md:text-5xl text-balance">
              {title}
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-brand-muted">
            {intro}
          </p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {items.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(item.title)}
              className={
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all " +
                (active === item.title
                  ? "border-brand-black bg-brand-black text-white"
                  : "border-black/10 bg-white text-brand-muted hover:border-brand-red/40 hover:text-brand-red")
              }
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.35fr_0.95fr]">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => {
              const isActive = item.title === active;
              const cardClass =
                "group flex h-full flex-col rounded-[28px] border p-6 transition-all duration-300 " +
                (isActive
                  ? "border-brand-red/30 bg-brand-red/5 shadow-cardHover"
                  : "border-black/5 bg-white shadow-card hover:-translate-y-1 hover:shadow-cardHover");

              const inner = (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={
                        "flex h-11 w-11 items-center justify-center rounded-2xl transition-colors " +
                        (isActive
                          ? "bg-brand-red text-white"
                          : "bg-brand-black/5 text-brand-black group-hover:bg-brand-red group-hover:text-white")
                      }
                    >
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {item.body}
                  </p>
                  {item.href && (
                    <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                      Explore service
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  )}
                </>
              );

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  onMouseEnter={() => setActive(item.title)}
                  onFocus={() => setActive(item.title)}
                  className="h-full"
                >
                  {item.href ? (
                    <Link href={item.href} className={cardClass}>
                      {inner}
                    </Link>
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  )}
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            key={active}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-[32px] bg-brand-black p-7 text-white"
          >
            {items
              .filter((item) => item.title === active)
              .map((item) => (
                <div key={item.title}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                    Currently highlighted
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">
                    {item.body}
                  </p>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                      Engagement fit
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {item.tag} engagements led by a partner, with a clear next-step
                      handoff and direct response through email, phone or WhatsApp.
                    </p>
                  </div>
                  <Link
                    href={item.href ?? "/contact"}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white"
                  >
                    {item.href ? "Open service page" : "Start a conversation"}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export function ServicePageTrustBand({
  eyebrow,
  statement,
  chips,
}: TrustBandProps) {
  return (
    <section className="py-4 md:py-6">
      <div className="container">
        <div className="overflow-hidden rounded-[30px] border border-black/5 bg-white p-5 shadow-card md:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                {eyebrow}
              </p>
              <p className="mt-2 font-display text-xl font-bold leading-snug text-brand-black md:text-2xl">
                {statement}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {chips.map((chip, index) => (
                <motion.div
                  key={chip}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-full border border-black/10 bg-brand-soft px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted"
                >
                  {chip}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessStrip({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string;
  steps: StepItem[];
}) {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="rounded-[34px] border border-black/5 bg-[#FAFAF7] p-7 md:p-9">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                {eyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-black md:text-4xl text-balance">
                {title}
              </h2>
            </div>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-black/5 bg-white p-5 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-brand-black">
                    0{index + 1}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-black">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProofStrip({
  eyebrow,
  title,
  body,
  items,
}: {
  eyebrow: string;
  title: string;
  body: string;
  items: ProofItem[];
}) {
  return (
    <section className="py-12 md:py-16">
      <div className="container grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-[30px] bg-brand-black p-7 text-white md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl text-balance">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/72">
            {body}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
              className="rounded-[28px] border border-black/5 bg-white p-6 shadow-card"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                Proof point
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-brand-black">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SelectorPanel({
  eyebrow,
  title,
  intro,
  options,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  options: Array<{
    key: string;
    label: string;
    summary: string;
    bullets: readonly string[];
  }>;
}) {
  const [active, setActive] = React.useState(options[0]?.key ?? "");
  const current = options.find((option) => option.key === active) ?? options[0];

  return (
    <section className="py-12 md:py-16">
      <div className="container rounded-[34px] border border-black/5 bg-white p-6 shadow-card md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-black md:text-4xl text-balance">
              {title}
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-brand-muted">
            {intro}
          </p>
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-2">
            {options.map((option) => {
              const isActive = option.key === active;
              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setActive(option.key)}
                  className={
                    "rounded-2xl border px-5 py-4 text-left transition-all " +
                    (isActive
                      ? "border-brand-red/20 bg-brand-red/5 shadow-cardHover"
                      : "border-black/5 bg-brand-soft hover:border-black/10 hover:bg-white")
                  }
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-lg font-bold text-brand-black">
                      {option.label}
                    </span>
                    <ArrowUpRight
                      className={
                        "h-4 w-4 transition-transform " +
                        (isActive ? "translate-x-0.5 -translate-y-0.5 text-brand-red" : "text-brand-muted")
                      }
                    />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {option.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {current && (
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-[28px] bg-brand-black p-7 text-white"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                Best fit
              </div>
              <h3 className="mt-3 font-display text-3xl font-bold">
                {current.label}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/72">
                {current.summary}
              </p>
              <div className="mt-6 grid gap-3">
                {current.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-red/15 text-brand-red">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm leading-relaxed text-white/82">{bullet}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ServicePageCTA({
  eyebrow,
  title,
  body,
  primaryLabel,
  secondaryLabel,
}: CTAProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="relative overflow-hidden rounded-[34px] bg-brand-red px-7 py-9 text-white md:px-10 md:py-12">
          <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_85%_25%,rgba(255,255,255,.35),transparent_42%)]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                {eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl text-balance">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/82">
                {body}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="dark">
                <Link href="/contact">{primaryLabel}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/35 bg-white/10 text-white hover:bg-white hover:text-brand-red"
              >
                <Link href="tel:+919898953563">{secondaryLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
