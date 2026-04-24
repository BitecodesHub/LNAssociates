"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FOUNDERS = [
  {
    name: "Jesal Rajpara",
    role: "Co-Founder · Partner",
    since: "In practice since 2008",
    bio: "B.Com (Gujarat University) and CA Intermediate. Previously Audit Manager at G. K. Choksi & Co. with deep expertise in accounting, auditing and taxation.",
    quote: "Numbers tell a story — ours always has a happy ending.",
    image: "/founders/jesal.jpg",
    initials: "JR",
  },
  {
    name: "Dhruv Shah",
    role: "Co-Founder · Partner",
    since: "In practice since 2008",
    bio: "B.Com (Gujarat University), CA & CS Intermediate. Previously Senior Audit Executive at G. K. Choksi & Co., bringing rigour to every engagement.",
    quote: "Compliance isn't a chore — it's the scaffolding for growth.",
    image: "/founders/dhruv.jpg",
    initials: "DS",
  },
];

function useSpotlight() {
  const [coords, setCoords] = React.useState<{ x: number; y: number } | null>(null);
  const onMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);
  const onLeave = React.useCallback(() => setCoords(null), []);
  return { coords, onMove, onLeave };
}

function Avatar({ src, initials }: { src: string; initials: string }) {
  const [hasError, setHasError] = React.useState(false);

  if (!hasError) {
    return (
      <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full bg-neutral-800">
        <Image
          src={src}
          alt={initials}
          fill
          sizes="72px"
          className="object-cover"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  return (
    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-brand-black">
      <span className="font-display text-xl font-bold text-white">{initials}</span>
    </div>
  );
}

export function Founders() {
  return (
    <section
      id="founder"
      className="relative py-16 md:py-24"
      aria-labelledby="founder-title"
    >
      <div className="container">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red"
          >
            Leadership
          </motion.p>
          <motion.h2
            id="founder-title"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-black md:text-4xl text-balance"
          >
            Meet the founders driving the practice.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mt-3 text-[14.5px] leading-relaxed text-brand-muted"
          >
            Two highly-experienced professionals — integrated as a single team,
            obsessed with your outcomes.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <FounderCard key={f.name} {...f} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderCard({
  name,
  role,
  since,
  bio,
  quote,
  image,
  initials,
  delay,
}: (typeof FOUNDERS)[number] & { delay: number }) {
  const spot = useSpotlight();

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={spot.onMove}
      onMouseLeave={spot.onLeave}
      className="group relative overflow-hidden rounded-[28px] border border-black/[0.07] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red/20 hover:shadow-cardHover md:p-8"
    >
      {/* Spotlight */}
      {spot.coords && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity"
          style={{
            background: `radial-gradient(280px circle at ${spot.coords.x}px ${spot.coords.y}px, rgba(200,16,46,0.06), transparent 70%)`,
          }}
        />
      )}

      {/* Top row */}
      <div className="relative z-10 flex items-center gap-4">
        <Avatar src={image} initials={initials} />
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl font-bold text-brand-black">
            {name}
          </h3>
          <p className="mt-0.5 text-[13px] font-semibold text-brand-red">
            {role}
          </p>
          <p className="mt-0.5 text-[12px] text-brand-muted">{since}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 my-5 h-px bg-black/[0.06]" />

      {/* Bio */}
      <p className="relative z-10 text-[14px] leading-relaxed text-brand-muted">
        {bio}
      </p>

      {/* Quote */}
      <div className="relative z-10 mt-5 border-l-[3px] border-brand-red pl-4">
        <p className="font-display text-[14.5px] font-semibold italic leading-snug text-brand-black">
          {quote}
        </p>
      </div>

    </motion.article>
  );
}
