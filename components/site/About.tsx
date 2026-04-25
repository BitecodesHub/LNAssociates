"use client";

import * as React from "react";
import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
});

function useSpotlight(color = "rgba(200,16,46,0.14)") {
  const [coords, setCoords] = React.useState<{ x: number; y: number } | null>(null);
  const onMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);
  const onLeave = React.useCallback(() => setCoords(null), []);
  const spotlight = coords ? (
    <div
      className="pointer-events-none absolute inset-0 z-0 transition-opacity"
      style={{
        background: `radial-gradient(260px circle at ${coords.x}px ${coords.y}px, ${color}, transparent 70%)`,
      }}
    />
  ) : null;
  return { onMove, onLeave, spotlight };
}

const STRIP = "Compliance-first · Outcome-driven · Always on-time · Partner-led · ";

export function About() {
  const mainSpot  = useSpotlight("rgba(16,24,40,0.045)");
  const foundSpot = useSpotlight("rgba(200,16,46,0.16)");
  const promSpot  = useSpotlight("rgba(200,16,46,0.13)");

  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="container">

        {/* Header */}
        <div className="mb-8 text-center">
          <motion.p
            {...fade(0)}
            className="font-display text-3xl font-bold tracking-tight text-brand-red md:text-4xl"
          >
            About us
          </motion.p>
          <motion.p {...fade(0.06)} className="mt-2 text-[14px] text-brand-muted">
            A one-stop consultancy, built on reliance.
          </motion.p>
        </div>

        <div className="grid gap-4 md:grid-cols-12">

          {/* ── Main card ── */}
          <motion.div
            {...fade(0.05)}
            onMouseMove={mainSpot.onMove}
            onMouseLeave={mainSpot.onLeave}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-black/[0.07] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/20 hover:shadow-cardHover sm:rounded-[28px] sm:p-8 md:col-span-7 md:p-10"
          >
            {mainSpot.spotlight}

            <div className="relative z-10">
              <h2
                id="about-title"
                className="font-display text-2xl font-bold leading-[1.15] tracking-tight text-brand-black sm:text-3xl md:text-[2.4rem] text-balance"
              >
                A decade of delivering{" "}
                <span className="relative inline-block text-brand-red">
                  best-in-class
                  <motion.span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-[3px] origin-left rounded-full bg-brand-red/30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  />
                </span>{" "}
                advisory.
              </h2>

              <p className="mt-5 text-[15px] leading-relaxed text-brand-muted">
                LN Associate is a consultancy firm incorporated in March 2016 — a
                one-stop solution assisting businesses of every size with
                tailor-made accounting, tax, audit and payroll services across
                India and the world.
              </p>
            </div>

            {/* Scrolling marquee strip */}
            <div className="relative z-10 mt-8 overflow-hidden border-t border-black/[0.06] pt-5">
              <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
                {[STRIP, STRIP].map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-4 md:col-span-5">

            {/* Founded card */}
            <motion.div
              {...fade(0.08)}
              onMouseMove={foundSpot.onMove}
              onMouseLeave={foundSpot.onLeave}
              className="relative overflow-hidden rounded-[24px] bg-neutral-800 p-6 transition-all duration-300 hover:-translate-y-1 sm:rounded-[28px] sm:p-7"
            >
              {foundSpot.spotlight}
              <p className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-red">
                Founded
              </p>
              <p className="relative z-10 mt-2 font-display text-[2.4rem] font-bold leading-none tracking-tight text-white sm:text-[2.8rem]">
                2016
              </p>
              <div className="relative z-10 mt-3 h-px w-full bg-white/10" />
              <p className="relative z-10 mt-3 text-[13px] leading-relaxed text-white/60">
                Incorporated March 2016 — still partner-led, still growing.
              </p>
            </motion.div>

            {/* Promise card */}
            <motion.div
              {...fade(0.14)}
              onMouseMove={promSpot.onMove}
              onMouseLeave={promSpot.onLeave}
              className="relative flex flex-1 flex-col overflow-hidden rounded-[24px] bg-neutral-800 p-6 transition-all duration-300 hover:-translate-y-1 sm:rounded-[28px] sm:p-7"
            >
              {promSpot.spotlight}
              <p className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-red">
                Our promise
              </p>
              <blockquote className="relative z-10 mt-4 flex-1 font-display text-[1.05rem] font-semibold italic leading-relaxed text-white">
                "Transforming vision into reality — as your trusted financial
                partner."
              </blockquote>
              <div className="relative z-10 mt-5 h-px w-full bg-white/10" />
              <p className="relative z-10 mt-4 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/40">
                LN Associate · Est. 2016
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
