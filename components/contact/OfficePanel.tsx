"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Star,
  Navigation,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { CONTACT } from "@/lib/contact";

const socials = [
  { icon: Twitter, href: CONTACT.social.twitter, label: "X / Twitter" },
  { icon: Facebook, href: CONTACT.social.facebook, label: "Facebook" },
  { icon: Instagram, href: CONTACT.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: CONTACT.social.linkedin, label: "LinkedIn" },
];

export function OfficePanel() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.08 }}
      className="flex flex-col gap-4"
    >
      {/* Address + map */}
      <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-card">
        <div className="relative aspect-[5/3] w-full overflow-hidden bg-brand-soft">
          <iframe
            title="LN Associate — office location"
            src={CONTACT.address.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 grayscale-[0.15] transition-all duration-500 hover:grayscale-0"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            <MapPin className="h-3.5 w-3.5" />
            Office
          </div>
          <address className="mt-3 not-italic font-display text-[15.5px] font-semibold leading-snug text-brand-black">
            {CONTACT.address.lines.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </address>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href={CONTACT.address.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-black px-4 py-2.5 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <Navigation className="h-3.5 w-3.5" />
              Get directions
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-xs text-brand-muted">
              <Star className="h-3.5 w-3.5 fill-brand-red text-brand-red" />
              <span className="font-semibold text-brand-ink">
                {CONTACT.rating.stars}
              </span>
              · {CONTACT.rating.reviews} Google reviews
            </div>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-card">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
          <Clock className="h-3.5 w-3.5" />
          Hours
        </div>
        <ul className="mt-4 divide-y divide-black/5">
          {CONTACT.hours.map((h) => (
            <li
              key={h.day}
              className="flex items-center justify-between py-2.5 text-sm"
            >
              <span className="font-medium text-brand-ink">{h.day}</span>
              <span
                className={
                  h.time === "Closed"
                    ? "font-semibold text-brand-red"
                    : "font-semibold text-brand-black"
                }
              >
                {h.time}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Social */}
      <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-card">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
          Connect
        </div>
        <p className="mt-2 text-sm text-brand-muted">
          Follow along for tax updates, compliance reminders and client wins.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-brand-muted transition-all hover:border-brand-red/30 hover:bg-brand-red hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
