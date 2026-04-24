"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Button } from "@/components/ui/Button";
import type { SectionTheme, ServiceDetail } from "@/lib/services/types";

type ThemeTokens = {
  accent: string;
  accentDeep: string;
  eyebrowText: string;
  heroChip: string;
  heroSurfaceText: string;
  heroSurfaceMuted: string;
  heroSurfaceLine: string;
  numberText: string;
  checkChipBg: string;
  checkChipFg: string;
  pillBorder: string;
  pillBg: string;
  pillText: string;
  ctaPrimaryVariant: "dark" | "primary";
  relatedChip: string;
  relatedHoverText: string;
  linkHoverText: string;
};

const themeTokens: Record<SectionTheme, ThemeTokens> = {
  accounting: {
    accent: "#2563EB",
    accentDeep: "#1D4ED8",
    eyebrowText: "text-[#1D4ED8]",
    heroChip: "border-[#2563EB]/25 bg-[#2563EB]/10 text-[#1D4ED8]",
    heroSurfaceText: "text-white",
    heroSurfaceMuted: "text-white/82",
    heroSurfaceLine: "border-white/15 bg-white/10",
    numberText: "text-[#2563EB]",
    checkChipBg: "bg-[#2563EB]/10",
    checkChipFg: "text-[#1D4ED8]",
    pillBorder: "border-[#2563EB]/25",
    pillBg: "bg-[#2563EB]/[0.06]",
    pillText: "text-[#1D4ED8]",
    ctaPrimaryVariant: "dark",
    relatedChip: "bg-[#2563EB]/10 text-[#1D4ED8]",
    relatedHoverText: "group-hover:text-[#1D4ED8]",
    linkHoverText: "hover:text-[#1D4ED8]",
  },
  finance: {
    accent: "#059669",
    accentDeep: "#047857",
    eyebrowText: "text-[#047857]",
    heroChip: "border-[#059669]/25 bg-[#059669]/10 text-[#047857]",
    heroSurfaceText: "text-white",
    heroSurfaceMuted: "text-white/82",
    heroSurfaceLine: "border-white/15 bg-white/10",
    numberText: "text-[#059669]",
    checkChipBg: "bg-[#059669]/10",
    checkChipFg: "text-[#047857]",
    pillBorder: "border-[#059669]/25",
    pillBg: "bg-[#059669]/[0.06]",
    pillText: "text-[#047857]",
    ctaPrimaryVariant: "dark",
    relatedChip: "bg-[#059669]/10 text-[#047857]",
    relatedHoverText: "group-hover:text-[#047857]",
    linkHoverText: "hover:text-[#047857]",
  },
};

export function ServiceDetailTemplate({
  service,
  theme,
  backHref,
  sectionLabel,
  siblings,
}: {
  service: ServiceDetail;
  theme: SectionTheme;
  backHref: string;
  sectionLabel: string;
  siblings: ServiceDetail[];
}) {
  const tokens = themeTokens[theme];
  const Icon = service.icon;

  return (
    <main className="relative min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-28 md:pt-32">
        <div className="container">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand-muted"
          >
            <Link href="/" className={tokens.linkHoverText}>
              Home
            </Link>
            <span className="text-brand-line">/</span>
            <Link href={backHref} className={tokens.linkHoverText}>
              {sectionLabel}
            </Link>
            <span className="text-brand-line">/</span>
            <span className="text-brand-black">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-14 md:pt-10 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid opacity-[0.32]" />
          <div
            className="absolute right-[-120px] top-12 h-[420px] w-[420px] rounded-full blur-[120px]"
            style={{ background: `${tokens.accent}1F` }}
          />
          <div
            className="absolute left-[-140px] top-48 h-[360px] w-[360px] rounded-full blur-[130px]"
            style={{ background: `${tokens.accentDeep}14` }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
        </div>

        <div className="container grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={
                "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] " +
                tokens.heroChip
              }
            >
              <Icon className="h-3.5 w-3.5" />
              {service.hero.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-5 max-w-3xl font-display text-[clamp(2.1rem,4.4vw,3.8rem)] font-extrabold leading-[1.04] tracking-tight text-brand-black text-balance"
            >
              {service.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="mt-5 max-w-2xl text-[16px] leading-relaxed text-brand-muted text-pretty"
            >
              {service.hero.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Button asChild size="lg">
                <Link href="/contact" className="group">
                  {service.cta.primaryLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+919898953563">{service.cta.secondaryLabel}</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {service.idealFor.map((chip) => (
                <span
                  key={chip}
                  className={
                    "rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] " +
                    `${tokens.pillBorder} ${tokens.pillBg} ${tokens.pillText}`
                  }
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className={
              "relative overflow-hidden rounded-[34px] p-7 md:p-8 lg:col-span-5 " +
              tokens.heroSurfaceText
            }
            style={{
              background: `linear-gradient(135deg, ${tokens.accent} 0%, ${tokens.accentDeep} 100%)`,
            }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_85%_15%,rgba(255,255,255,.22),transparent_55%)]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-white/10 blur-[70px]" />
            <div className="relative">
              <div className={"text-[10px] font-semibold uppercase tracking-[0.2em] " + tokens.heroSurfaceMuted}>
                What this includes
              </div>
              <div className="mt-5 grid gap-3">
                {service.highlights.map((item) => (
                  <div
                    key={item}
                    className={"flex items-start gap-3 rounded-2xl border px-4 py-3 " + tokens.heroSurfaceLine}
                  >
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <p className={"text-sm leading-relaxed " + tokens.heroSurfaceMuted}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="rounded-[34px] border border-black/5 bg-[#FAFAF7] p-7 md:p-9">
            <div className="max-w-2xl">
              <p className={"text-xs font-semibold uppercase tracking-[0.2em] " + tokens.eyebrowText}>
                How we run it
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-black md:text-4xl text-balance">
                A clean rhythm — from first review to ongoing delivery.
              </h2>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-2xl border border-black/5 bg-white p-5 shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className={"font-display text-2xl font-bold " + tokens.numberText}>
                      0{index + 1}
                    </span>
                    <div
                      className={
                        "flex h-8 w-8 items-center justify-center rounded-full " +
                        `${tokens.checkChipBg} ${tokens.checkChipFg}`
                      }
                    >
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

      {/* FAQs (optional) */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-md">
              <p className={"text-xs font-semibold uppercase tracking-[0.2em] " + tokens.eyebrowText}>
                Common questions
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-black md:text-4xl text-balance">
                Quick answers before the first call.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
                If something here doesn&apos;t cover your situation, send a note —
                a partner will respond directly.
              </p>
            </div>
            <div className="grid gap-3">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-[24px] border border-black/5 bg-white p-6 shadow-card"
                >
                  <h3 className="font-display text-lg font-bold text-brand-black">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related rail */}
      {siblings.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex items-end justify-between gap-4">
              <div className="max-w-xl">
                <p className={"text-xs font-semibold uppercase tracking-[0.2em] " + tokens.eyebrowText}>
                  Other {sectionLabel.toLowerCase()}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-black md:text-3xl text-balance">
                  Related ways the desk can help.
                </h2>
              </div>
              <Link
                href={backHref}
                className={
                  "hidden items-center gap-1.5 text-sm font-semibold text-brand-black md:inline-flex " +
                  tokens.linkHoverText
                }
              >
                <ArrowLeft className="h-4 w-4" />
                Back to {sectionLabel.toLowerCase()}
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {siblings.map((sibling) => {
                const SiblingIcon = sibling.icon;
                return (
                  <Link
                    key={sibling.slug}
                    href={`${backHref}/${sibling.slug}`}
                    className="group flex h-full flex-col rounded-[24px] border border-black/5 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={
                          "flex h-10 w-10 items-center justify-center rounded-2xl " +
                          tokens.relatedChip
                        }
                      >
                        <SiblingIcon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight
                        className={
                          "h-4 w-4 text-brand-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 " +
                          tokens.relatedHoverText
                        }
                      />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-brand-black">
                      {sibling.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                      {sibling.summary}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div
            className="relative overflow-hidden rounded-[34px] px-7 py-9 text-white md:px-10 md:py-12"
            style={{
              background: `linear-gradient(135deg, ${tokens.accent} 0%, ${tokens.accentDeep} 100%)`,
            }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_85%_25%,rgba(255,255,255,.3),transparent_45%)]" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {service.cta.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl text-balance">
                  {service.cta.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/82">
                  {service.cta.body}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant={tokens.ctaPrimaryVariant}>
                  <Link href="/contact">{service.cta.primaryLabel}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/35 bg-white/10 text-white hover:bg-white hover:text-brand-black"
                >
                  <Link href="tel:+919898953563">{service.cta.secondaryLabel}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
