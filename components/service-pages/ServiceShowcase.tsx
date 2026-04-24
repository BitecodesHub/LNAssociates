"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

export type ShowcaseItem = {
  icon: LucideIcon;
  title: string;
  tag: string;
  summary: string;
  highlights: readonly string[];
  href: string;
};

type Theme = "red" | "blue" | "green";

const ACCENTS: Record<Theme, string> = {
  red: "#E11D2A",
  blue: "#2563EB",
  green: "#059669",
};

const ACCENTS_DEEP: Record<Theme, string> = {
  red: "#B3141F",
  blue: "#1D4ED8",
  green: "#047857",
};

export function ServiceShowcase({
  theme,
  eyebrow,
  titleLead,
  titleRest,
  tagline,
  intro,
  items,
  centered = false,
}: {
  theme: Theme;
  eyebrow: string;
  titleLead: string;
  titleRest: string;
  tagline: string;
  intro: string;
  items: ShowcaseItem[];
  centered?: boolean;
}) {
  const accent = ACCENTS[theme];
  const accentDeep = ACCENTS_DEEP[theme];

  // Live clock — client-only
  const [clock, setClock] = React.useState<string>("");
  React.useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    setClock(fmt());
    const id = setInterval(() => setClock(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);

  const marqueePool = React.useMemo(
    () => [...items, ...items, ...items],
    [items]
  );

  return (
    <section className="relative">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div
          className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full blur-[150px]"
          style={{ background: `${accent}1F` }}
        />
        <div
          className="absolute -bottom-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-[150px]"
          style={{ background: `${accentDeep}14` }}
        />
        <div
          className="absolute left-1/2 top-1/3 h-[320px] w-[320px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{ background: `${accent}0D` }}
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      </div>

      {/* Operator ribbon */}
      <div className="container">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-black/[0.07] py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/50">
          <span className="flex items-center gap-2">
            <span
              className="relative inline-flex h-1.5 w-1.5 rounded-full"
              style={{ background: accent }}
            >
              <span
                className="absolute inset-0 animate-ping rounded-full opacity-70"
                style={{ background: accent }}
              />
            </span>
            Desk open
          </span>
          <span className="hidden h-3 w-px bg-black/10 sm:block" />
          <span>{eyebrow}</span>
          <span className="hidden h-3 w-px bg-black/10 sm:block" />
          <span className="tabular-nums">
            {String(items.length).padStart(2, "0")} engagements
          </span>
          <span className="ml-auto flex items-center gap-2">
            <span className="h-px w-6 bg-black/15" />
            <span className="tabular-nums text-black/70">
              {clock || "--:--"} IST
            </span>
          </span>
        </div>
      </div>

      {/* Kinetic headline */}
      <div className={"container pt-10 md:pt-16 " + (centered ? "text-center" : "")}>
        <h1
          className={
            "font-display font-extrabold leading-[0.94] tracking-[-0.02em] text-brand-black text-[clamp(2.6rem,7.2vw,6.4rem)] " +
            (centered ? "mx-auto" : "")
          }
        >
          {titleLead && (
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="block"
            >
              {titleLead}
            </motion.span>
          )}
          <motion.span
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative block"
          >
            <span className="relative inline-block">
              {titleRest}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 right-0 -bottom-1 h-[6px] origin-left rounded-full md:-bottom-2 md:h-[8px]"
                style={{
                  background: `linear-gradient(90deg, ${accent} 0%, ${accentDeep} 100%)`,
                }}
              />
            </span>
          </motion.span>
        </h1>

        {centered ? (
          <div className="mt-6 flex flex-col items-center gap-4">
            <p className="max-w-2xl text-[15px] leading-relaxed text-black/60 md:text-[16px]">
              {intro}
            </p>
            {tagline && (
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45">
                {tagline}
              </p>
            )}
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
            <p className="max-w-2xl text-[15px] leading-relaxed text-black/60 md:text-[16px]">
              {intro}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45">
              {tagline}
            </p>
          </div>
        )}
      </div>

      {/* Card grid — every service visible */}
      <div className="container mt-12 md:mt-16">
        <div className="mb-4 flex items-end justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-black/45">
            Service directory
          </p>
          <p className="text-[10px] font-semibold tabular-nums uppercase tracking-[0.22em] text-black/45">
            {String(items.length).padStart(2, "0")} total
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {items.map((item, i) => (
            <ServiceCard
              key={item.title}
              item={item}
              index={i}
              accent={accent}
              accentDeep={accentDeep}
            />
          ))}
        </div>
      </div>

      {/* Marquee ribbon */}
      <div className="relative mt-16 mb-4 overflow-hidden border-y border-black/[0.07] py-5">
        <div className="mask-fade-right flex animate-marquee whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.32em] text-black/40">
          {marqueePool.map((it, i) => (
            <span key={i} className="mx-7 inline-flex items-center gap-3">
              <span
                className="inline-block h-1 w-1 rounded-full"
                style={{ background: accent }}
              />
              {it.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  item,
  index,
  accent,
  accentDeep,
}: {
  item: ShowcaseItem;
  index: number;
  accent: string;
  accentDeep: string;
}) {
  const reduce = useReducedMotion();
  const cardRef = React.useRef<HTMLAnchorElement>(null);

  // Card-local cursor-follow glow
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 80, damping: 20, mass: 0.4 });
  const smy = useSpring(my, { stiffness: 80, damping: 20, mass: 0.4 });
  const gx = useTransform(smx, (v) => `${(v * 100).toFixed(1)}%`);
  const gy = useTransform(smy, (v) => `${(v * 100).toFixed(1)}%`);
  const glow = useMotionTemplate`radial-gradient(260px 260px at ${gx} ${gy}, ${accent}22 0%, transparent 72%)`;

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        ref={cardRef}
        href={item.href}
        onMouseMove={reduce ? undefined : onMove}
        onMouseLeave={() => {
          mx.set(0.5);
          my.set(0.5);
        }}
        className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-black/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_28px_70px_-28px_rgba(10,10,10,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:p-7"
        style={
          {
            "--card-ring": accent,
          } as React.CSSProperties
        }
      >
        {/* gradient border reveal on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[26px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            padding: 1,
            background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* cursor glow */}
        {!reduce && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glow }}
          />
        )}

        {/* top row — icon tile + tag */}
        <div className="relative flex items-start justify-between gap-3">
          <span
            className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-[1.06]"
            style={{
              background: `linear-gradient(135deg, ${accent}14 0%, ${accentDeep}1F 100%)`,
              color: accent,
            }}
          >
            <span
              aria-hidden
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
              }}
            />
            <Icon className="relative h-[20px] w-[20px] transition-colors duration-300 group-hover:text-white" />
          </span>

          <div className="flex items-center gap-2">
            <span
              className="font-display text-[11px] font-bold tabular-nums tracking-[0.18em]"
              style={{ color: accent }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
              style={{
                borderColor: `${accent}33`,
                background: `${accent}0D`,
                color: accentDeep,
              }}
            >
              {item.tag}
            </span>
          </div>
        </div>

        {/* title */}
        <h3 className="relative mt-6 font-display text-[22px] font-bold leading-[1.15] tracking-tight text-brand-black md:text-[24px]">
          {item.title}
        </h3>

        {/* short summary */}
        <p className="relative mt-3 line-clamp-3 text-[14px] leading-relaxed text-black/60">
          {item.summary}
        </p>

        {/* footer — CTA */}
        <div className="relative mt-auto flex items-center justify-between pt-7">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${accent}33 50%, transparent 100%)`,
            }}
          />
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-black transition-colors duration-300 group-hover:text-[color:var(--card-ring)]"
          >
            Open service
          </span>
          <span
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-transparent group-hover:text-white"
            style={{ color: "rgb(10 10 10)" } as React.CSSProperties}
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
              }}
            />
            <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
