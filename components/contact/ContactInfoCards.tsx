"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const cards = [
  {
    icon: Phone,
    title: "Call",
    value: CONTACT.phones[0].number,
    href: CONTACT.phones[0].href,
  },
  {
    icon: Mail,
    title: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: CONTACT.whatsapp.number,
    href: CONTACT.whatsapp.href,
  },
];

export function ContactInfoCards() {
  return (
    <section className="py-2">
      <div className="container">
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {cards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-red/20 hover:shadow-cardHover sm:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                <c.icon className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                  {c.title}
                </p>
                <p className="mt-0.5 truncate text-[13.5px] font-semibold text-brand-black">
                  {c.value}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-brand-red" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
