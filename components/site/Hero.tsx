"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  ShieldCheck,
  Star,
  TrendingUp,
  Receipt,
  CheckCircle2,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const ROTATING_WORDS = ["Accounting", "Tax", "Compliance", "Audit"];

const REVIEW_AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
];

const MARQUEE_ITEMS = [
  "PALDI TEXTILES",
  "SIVANTA GROUP",
  "GK ASSOCIATES",
  "RAJPARA EXPORTS",
  "AHMEDABAD RETAIL",
  "OM INDUSTRIES",
  "NOVUS PHARMA",
];

const MARQUEE_DOUBLED = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-40 md:pb-28"
    >
      {/* Layered background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* "+" grid */}
        <div className="absolute inset-0 bg-plus mask-radial-fade animate-plusDrift opacity-80" />
        {/* Soft red wash, top-left */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full bg-brand-red/[0.06] blur-[140px]"
        />
        {/* Soft cool wash, bottom-right */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute right-[-120px] bottom-[-120px] h-[480px] w-[480px] rounded-full bg-black/[0.04] blur-[140px]"
        />
        {/* Bottom fade so the section blends into next */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="container grid grid-cols-1 items-center gap-10 sm:gap-12 md:gap-10 lg:grid-cols-12 lg:gap-12">
        {/* ---------------------------- Left column ---------------------------- */}
        <div className="min-w-0 lg:col-span-6 xl:col-span-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] font-medium text-brand-ink shadow-sm sm:px-3.5 sm:text-xs"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
            </span>
            <span className="truncate">Trusted since 2016 · 500+ clients served</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-5 font-display text-[clamp(1.75rem,5.5vw,4.6rem)] font-extrabold leading-[1.08] tracking-tight text-brand-black text-balance"
          >
            Your <WordRotator words={ROTATING_WORDS} /> partner for every stage of growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-brand-muted text-pretty sm:text-[17px]"
          >
            From company registration and GST to audits, payroll and
            cross-border advisory — LN Associate is a one-stop consultancy
            turning compliance into a quiet competitive edge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#services" className="group">
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="#founder" className="group">
                <PlayCircle className="h-4 w-4" />
                Meet the founders
              </Link>
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-[11.5px] text-brand-muted sm:mt-10 sm:gap-x-5 sm:gap-y-3 sm:text-xs"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-red sm:h-4 sm:w-4" />
              Compliance-first approach
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="h-3.5 w-3.5 text-brand-red sm:h-4 sm:w-4" />
              Tailor-made for your business
            </div>
            <ReviewsPill />
          </motion.div>

          <ClientsMarquee />
        </div>

        {/* --------------------------- Right visual ---------------------------- */}
        <div className="relative min-w-0 lg:col-span-6 xl:col-span-6">
          <HeroVisual reduce={!!reduce} />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Word rotator                                 */
/* -------------------------------------------------------------------------- */

function WordRotator({ words }: { words: string[] }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={words[index]}
        initial={{ y: "0.6em", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-0.6em", opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative inline-block whitespace-nowrap text-brand-red"
      >
        {words[index]}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-1 -z-10 h-[10px] origin-left rounded-full bg-brand-red/20"
        />
      </motion.span>
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Reviews pill                                 */
/* -------------------------------------------------------------------------- */

function ReviewsPill() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {REVIEW_AVATARS.map((src, i) => (
          <span
            key={i}
            className="relative inline-block h-7 w-7 overflow-hidden rounded-full border-2 border-white bg-neutral-200"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="28px"
              className="object-cover"
            />
          </span>
        ))}
      </div>
      <span className="flex items-center gap-1 font-medium text-brand-ink">
        <Star className="h-3.5 w-3.5 fill-brand-red text-brand-red" />
        4.8
      </span>
      <span>· 23 Google reviews</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Clients marquee                               */
/* -------------------------------------------------------------------------- */

function ClientsMarquee() {
  return (
    <div className="mt-8 max-w-xl sm:mt-12">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-muted sm:text-[10.5px]">
        Trusted by teams at
      </p>
      <div className="mask-fade-right mt-3 overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 opacity-80">
          {MARQUEE_DOUBLED.map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-[13px] font-bold tracking-[0.15em] text-brand-ink/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Hero visual                                 */
/* -------------------------------------------------------------------------- */

function HeroVisual({ reduce }: { reduce: boolean }) {
  // Mouse parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 80, damping: 20, mass: 0.6 });
  const t1x = useTransform(sx, (v) => v * -8);
  const t1y = useTransform(sy, (v) => v * -8);
  const t2x = useTransform(sx, (v) => v * 14);
  const t2y = useTransform(sy, (v) => v * 12);
  const t3x = useTransform(sx, (v) => v * -12);
  const t3y = useTransform(sy, (v) => v * 6);

  const onMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  }, [reduce, x, y]);

  const onLeave = React.useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto aspect-[4/5] w-full max-w-[300px] sm:aspect-[5/6] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Soft pedestal */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-gradient-to-br from-brand-red/10 via-white to-brand-red/5 blur-xl"
      />

      {/* Main photo card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ x: t1x, y: t1y }}
        className="relative h-full w-full overflow-hidden rounded-[36px] bg-brand-black shadow-[0_40px_120px_-40px_rgba(10,10,10,0.45)]"
      >
        <Image
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=1440&fit=crop&auto=format&q=80"
          alt="LN Associate financial advisor reviewing compliance reports"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 520px"
          className="object-cover"
        />
        {/* subtle dark wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/10 to-transparent" />
        <div className="absolute inset-0 [background:linear-gradient(transparent_31px,rgba(255,255,255,0.05)_32px),linear-gradient(90deg,transparent_31px,rgba(255,255,255,0.05)_32px)] bg-[size:32px_32px] opacity-30" />

        {/* bottom label */}
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white sm:inset-x-6 sm:bottom-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur sm:px-2.5 sm:py-1 sm:text-[10px] sm:tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Partner-led service
            </div>
            <p className="mt-2 font-display text-[15px] font-bold leading-tight sm:mt-3 sm:text-lg">
              Compliance, done with craft.
            </p>
          </div>
          <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur sm:flex">
            <Award className="h-5 w-5" />
          </div>
        </div>

        {/* since badge */}
        <SinceBadge />
      </motion.div>

      {/* Floating stat card — top-left */}
      <motion.div
        style={{ x: t2x, y: t2y }}
        initial={{ opacity: 0, y: 30, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-3 top-3 w-[160px] rounded-2xl border border-black/5 bg-white/95 p-3 shadow-[0_22px_60px_-25px_rgba(10,10,10,0.3)] backdrop-blur-sm sm:top-10 sm:w-[240px] sm:rounded-3xl sm:p-5 md:-left-10"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-[10px] font-medium text-brand-muted sm:text-[11px]">
              Tax savings YTD
            </div>
          </div>
          <div className="rounded-full bg-brand-red/10 px-2 py-0.5 text-[10px] font-semibold text-brand-red">
            +12%
          </div>
        </div>
        <div className="mt-2 font-display text-lg font-extrabold text-brand-black sm:mt-2.5 sm:text-2xl">
          ₹ 4,82,000
        </div>
        <MiniChart />
      </motion.div>

      {/* Middle GST card — bottom-right, overlapping */}
      <motion.div
        style={{ x: t3x, y: t3y }}
        initial={{ opacity: 0, y: 30, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-3 bottom-6 w-[170px] rounded-2xl border border-black/5 bg-white/95 p-3 shadow-[0_22px_60px_-25px_rgba(10,10,10,0.3)] backdrop-blur-sm sm:bottom-14 sm:w-[270px] sm:rounded-3xl sm:p-5 md:-right-10"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-black text-white">
            <Receipt className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-brand-muted">
              GST Filing · On track
            </div>
            <div className="font-display text-[13px] font-bold text-brand-black">
              Q1 compliance ready
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {[
            { label: "GSTR-1", val: 100 },
            { label: "GSTR-3B", val: 88 },
            { label: "GSTR-9", val: 62 },
          ].map((r, i) => (
            <div key={r.label}>
              <div className="flex justify-between text-[10.5px] text-brand-muted">
                <span className="font-medium">{r.label}</span>
                <span className="font-semibold text-brand-ink">{r.val}%</span>
              </div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-black/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${r.val}%` }}
                  transition={{
                    duration: 1.1,
                    delay: 0.6 + i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-red to-brand-redDark"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tiny toast — bottom-left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2.5 rounded-full border border-black/5 bg-white/95 px-3.5 py-2 text-[11.5px] font-medium text-brand-ink shadow-card backdrop-blur sm:inline-flex sm:left-8 sm:translate-x-0 md:left-4"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-white">
          <CheckCircle2 className="h-3.5 w-3.5" />
        </span>
        New client onboarded in 48h
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Since badge                                 */
/* -------------------------------------------------------------------------- */

function SinceBadge() {
  return (
    <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 sm:right-5 sm:top-5 sm:h-16 sm:w-16">
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path
            id="circlePath"
            d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0"
          />
        </defs>
        <text fontSize="10.5" fill="white" letterSpacing="2.5" fontWeight="600">
          <textPath href="#circlePath">
            TRUSTED SINCE 2016 · LN ASSOCIATE ·
          </textPath>
        </text>
      </motion.svg>
      <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-brand-red text-white">
        <Star className="h-3.5 w-3.5 fill-white" />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Mini chart                                 */
/* -------------------------------------------------------------------------- */

function MiniChart() {
  const points = [12, 18, 14, 22, 19, 26, 30, 28, 34];
  const max = Math.max(...points);
  return (
    <div className="mt-3 flex h-12 items-end gap-1.5">
      {points.map((p, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: `${(p / max) * 100}%`, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.5 + i * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-2 rounded-sm bg-gradient-to-t from-brand-red to-brand-redDark"
        />
      ))}
    </div>
  );
}
