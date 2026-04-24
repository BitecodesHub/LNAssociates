"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const cards = [
  {
    icon: Phone,
    title: "Call us",
    subtitle: "Mon–Sat · 10 AM – 7 PM",
    lines: CONTACT.phones.map((p) => ({ label: p.number, href: p.href })),
  },
  {
    icon: Mail,
    title: "Email us",
    subtitle: "Reply within 1 business day",
    lines: [{ label: CONTACT.email, href: `mailto:${CONTACT.email}` }],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Quickest — right from your phone",
    lines: [{ label: CONTACT.whatsapp.number, href: CONTACT.whatsapp.href }],
  },
  {
    icon: MapPin,
    title: "Visit the office",
    subtitle: "Paldi, Ahmedabad",
    lines: [
      { label: CONTACT.address.short, href: CONTACT.address.mapsLink },
    ],
  },
];

export function ContactInfoCards() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.lines[0].href}
              target={c.lines[0].href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] scale-x-0 bg-brand-red transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-brand-muted opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-brand-red group-hover:opacity-100" />
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-brand-black">
                {c.title}
              </h3>
              <p className="mt-1 text-[11.5px] text-brand-muted">
                {c.subtitle}
              </p>

              <div className="mt-4 space-y-1">
                {c.lines.map((l) => (
                  <p
                    key={l.label}
                    className="text-[13.5px] font-semibold text-brand-black"
                  >
                    {l.label}
                  </p>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
