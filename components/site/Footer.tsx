"use client";

import * as React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT } from "@/lib/contact";

const quick = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Founders", href: "/#founder" },
  { label: "Contact", href: "/contact" },
];

const columns = [
  {
    title: "Accounting",
    items: [
      { label: "Accounting & Finalization", href: "/accounting#services" },
      { label: "Cash Flow", href: "/accounting#services" },
      { label: "Payroll", href: "/accounting#services" },
      { label: "Vendor Payments", href: "/accounting#services" },
    ],
  },
  {
    title: "Tax & GST",
    items: [
      { label: "GST Filing", href: "/#services" },
      { label: "GST Refund", href: "/#services" },
      { label: "Income Tax", href: "/#services" },
      { label: "TDS Return", href: "/#services" },
    ],
  },
  {
    title: "Finance",
    items: [
      { label: "Term Loan", href: "/finance#services" },
      { label: "Working Capital", href: "/finance#services" },
      { label: "Mortgage", href: "/finance#services" },
      { label: "Startup Finance", href: "/finance#services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-10 bg-white">
      {/* CTA strip */}
      <div className="container">
        <div className="relative overflow-hidden rounded-[20px] bg-brand-red px-5 py-7 text-white sm:rounded-[32px] sm:px-8 sm:py-10 md:px-14 md:py-14">
          <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_90%_20%,rgba(255,255,255,.3),transparent_45%)]" />
          <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Get in touch
              </p>
              <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl md:text-4xl text-balance">
                Ready to simplify your finance stack?
              </h3>
            </div>
            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
              <Link
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-[13px] font-semibold text-brand-red transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-sm"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="truncate">{CONTACT.email}</span>
              </Link>
              <Link
                href={CONTACT.whatsapp.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-3 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-sm"
              >
                <Phone className="h-4 w-4" />
                WhatsApp us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-10 grid gap-8 pb-8 sm:mt-14 sm:gap-10 sm:grid-cols-2 md:mt-16 md:grid-cols-12">
        <div className="sm:col-span-2 md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-muted">
            A consultancy firm based in Ahmedabad — helping businesses turn
            accounting, tax and compliance into a quiet competitive edge.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Partner-led",
              `${CONTACT.rating.stars}★ Google rating`,
              "Serving India + overseas",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-brand-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2">
            {[
              { icon: Twitter, href: CONTACT.social.twitter },
              { icon: Facebook, href: CONTACT.social.facebook },
              { icon: Instagram, href: CONTACT.social.instagram },
              { icon: Linkedin, href: CONTACT.social.linkedin },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-brand-muted transition-all hover:border-brand-red/30 hover:bg-brand-red hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((c) => (
          <div key={c.title} className="md:col-span-2">
            <h4 className="font-display text-sm font-bold text-brand-black">
              {c.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {c.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-brand-muted transition-colors hover:text-brand-red"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <h4 className="font-display text-sm font-bold text-brand-black">
            Reach us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-brand-muted">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-red" />
              <a href={CONTACT.address.mapsLink} target="_blank" rel="noreferrer" className="hover:text-brand-red">
                {CONTACT.address.short}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-red" />
              <a href={CONTACT.phones[0].href} className="hover:text-brand-red">
                {CONTACT.phones[0].number}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-red" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-brand-red"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-red" />
              <a href={CONTACT.phones[1].href} className="hover:text-brand-red">
                {CONTACT.phones[1].number}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
          <p className="text-xs text-brand-muted">
            © {new Date().getFullYear()} LN Associate. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-xs text-brand-muted">
            {quick.map((q) => (
              <Link key={q.label} href={q.href} className="hover:text-brand-red">
                {q.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
