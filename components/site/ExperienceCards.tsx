"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { MapPin, Globe, FileCheck, Award } from "lucide-react";

/* ── Data ─────────────────────────────────────────────────────────── */

interface StatDef {
  to: number;
  suffix: string;
  decimals: number;
  label: string;
  sub: string;
  delay: number;
}

const STATS: StatDef[] = [
  {
    to: 500,
    suffix: "+",
    decimals: 0,
    label: "Clients Served",
    sub: "Across 14 states & 7 countries",
    delay: 0,
  },
  {
    to: 4.8,
    suffix: " / 5",
    decimals: 1,
    label: "Google Rating",
    sub: "50+ verified reviews",
    delay: 0.12,
  },
  {
    to: 10,
    suffix: "+ yrs",
    decimals: 0,
    label: "In Practice",
    sub: "Partner-led since 2016",
    delay: 0.24,
  },
];

const TRUST_PILLS = [
  { icon: MapPin, text: "14 States" },
  { icon: Globe, text: "7 Countries" },
  { icon: FileCheck, text: "10,000+ Filings" },
  { icon: Award, text: "ICAI Certified" },
];

/* ── Counter ──────────────────────────────────────────────────────── */

function Counter({
  inView,
  to,
  decimals = 0,
  className,
}: {
  inView: boolean;
  to: number;
  decimals?: number;
  className?: string;
}) {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-IN")
  );
  const [text, setText] = React.useState(decimals > 0 ? (0).toFixed(decimals) : "0");

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    const unsub = display.on("change", setText);
    return () => { controls.stop(); unsub(); };
  }, [inView, count, display, to]);

  return <span className={className}>{text}</span>;
}

/* ── StatCard ─────────────────────────────────────────────────────── */

const StatCard = React.memo(function StatCard({
  to,
  suffix,
  decimals,
  label,
  sub,
  delay,
}: StatDef) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [coords, setCoords] = React.useState<{ x: number; y: number } | null>(null);

  const handleMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);
  const handleLeave = React.useCallback(() => setCoords(null), []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative overflow-hidden rounded-[28px] border border-black/[0.07] bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-brand-red/25 hover:shadow-cardHover"
    >
      {/* Mouse spotlight */}
      {coords && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity"
          style={{
            background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(200,16,46,0.07), transparent 65%)`,
          }}
        />
      )}


      {/* Big number */}
      <div className="relative z-10 mt-4 flex items-baseline gap-1 leading-none sm:mt-5">
        <Counter
          inView={inView}
          to={to}
          decimals={decimals}
          className="font-display text-[2.2rem] font-extrabold tracking-tight text-brand-red tabular-nums sm:text-[2.8rem]"
        />
        <span className="font-display text-xl font-bold text-brand-black/50 sm:text-2xl">{suffix}</span>
      </div>

      {/* Labels */}
      <div className="relative z-10 mt-2.5">
        <p className="font-display text-[15px] font-bold text-brand-black">{label}</p>
        <p className="mt-0.5 text-[12.5px] text-brand-muted">{sub}</p>
      </div>


      {/* Animated bottom border on hover */}
    </motion.div>
  );
});

/* ── Section ──────────────────────────────────────────────────────── */

export function ExperienceCards() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="numbers"
      className="relative overflow-hidden bg-white py-12 md:py-16"
      aria-labelledby="numbers-title"
    >
      {/* "+" grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'><path d='M20 14v12 M14 20h12' stroke='%23C8102E' stroke-opacity='0.35' stroke-width='1.1' stroke-linecap='round'/></svg>\")",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Fade top & bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"
      />
      {/* Fade left & right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"
      />

      <div className="container relative">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red"
          >
            By the numbers
          </motion.p>

          <motion.h2
            id="numbers-title"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-black md:text-4xl text-balance"
          >
            Experience you can{" "}
            <span className="relative inline-block">
              measure.
              <svg
                aria-hidden
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 100 6"
                preserveAspectRatio="none"
                height="6"
              >
                <motion.path
                  d="M0 4 Q25 1 50 4 Q75 7 100 4"
                  fill="none"
                  stroke="#C8102E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-[14.5px] leading-relaxed text-brand-muted"
          >
            A decade of books closed on time, filings filed right, and founders
            who stayed.
          </motion.p>
        </div>

        {/* Stat cards */}
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mx-auto mt-5 flex max-w-5xl flex-wrap items-center justify-center gap-2"
        >
          {TRUST_PILLS.map(({ icon: PillIcon, text }) => (
            <div
              key={text}
              className="flex cursor-default items-center gap-2 rounded-full border border-black/[0.07] bg-white px-4 py-2 text-[12.5px] font-medium text-brand-ink shadow-sm transition-all duration-200 hover:border-brand-red/30 hover:text-brand-red hover:-translate-y-0.5"
            >
              <PillIcon className="h-3.5 w-3.5 text-brand-red" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
