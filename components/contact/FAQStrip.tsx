"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How quickly do you respond to enquiries?",
    a: "A partner from our team will personally respond within one business day — most enquiries receive a same-day reply during working hours.",
  },
  {
    q: "Do you work with clients outside Ahmedabad?",
    a: "Yes. We serve clients across India and internationally — our processes are fully digital, with secure document sharing and video consultations.",
  },
  {
    q: "How is pricing determined?",
    a: "We share transparent, fixed pricing wherever possible. For recurring services (bookkeeping, payroll, compliance) we issue a monthly retainer scoped to your size and complexity.",
  },
  {
    q: "Can you take over from my current CA / accountant?",
    a: "Absolutely. Transitions are routine — we coordinate document handover, reconcile past filings and set up a clean workflow from month one.",
  },
];

export function FAQStrip() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            Before you ask
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl text-balance">
            Frequently answered on day one.
          </h2>
        </div>

        <div className="mx-auto max-w-3xl rounded-[28px] border border-black/5 bg-white p-2 shadow-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={i !== 0 ? "border-t border-black/5" : ""}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left transition-colors hover:bg-brand-soft"
                >
                  <span className="font-display text-[15.5px] font-bold text-brand-black">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-red/10 text-brand-red"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-brand-muted">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
