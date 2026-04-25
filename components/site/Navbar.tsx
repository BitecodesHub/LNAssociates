"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Building2,
  Calculator,
  Receipt,
  FileBarChart,
  ShieldCheck,
  Landmark,
  Banknote,
  Wrench,
  HardHat,
  Home,
  Rocket,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

type SubItem = {
  title: string;
  desc?: string;
  icon?: React.ElementType;
  href: string;
  tag?: string;
};

type MenuGroup = {
  heading: string;
  items: SubItem[];
};

type MenuConfig = {
  label: string;
  href: string;
  featured?: { title: string; body: string; href: string };
  groups?: MenuGroup[];
  flat?: SubItem[]; // for simple dropdowns (Finance)
};

const accountingMenu: MenuConfig = {
  label: "Accounting Services",
  href: "/accounting",
  featured: {
    title: "Books done right — every month.",
    body: "Finalization, reporting and filings from a partner-led team.",
    href: "/accounting",
  },
  groups: [
    {
      heading: "Accounting",
      items: [
        { title: "Accounting & Finalization", icon: Calculator, href: "/accounting#services", desc: "Monthly books, ledgers, MIS" },
        { title: "Cash Flow", icon: Calculator, href: "/accounting#services", desc: "Inflow / outflow reporting" },
        { title: "Payroll Management", icon: Calculator, href: "/accounting#services", desc: "Salary, PF, ESIC, TDS" },
        { title: "Vendor Payments", icon: Calculator, href: "/accounting#services", desc: "Scheduling & reconciliation" },
      ],
    },
    {
      heading: "GST",
      items: [
        { title: "GST Registration", icon: Receipt, href: "/#services", tag: "₹3,499" },
        { title: "GST Return Filing", icon: Receipt, href: "/#services", tag: "₹13,000+" },
        { title: "GST Refund", icon: Receipt, href: "/#services" },
        { title: "Annual Return / LUT / Notices", icon: Receipt, href: "/#services" },
      ],
    },
    {
      heading: "Income Tax",
      items: [
        { title: "TDS Return", icon: FileBarChart, href: "/#services", tag: "₹4,999" },
        { title: "Business Return", icon: FileBarChart, href: "/#services" },
        { title: "Salary Return", icon: FileBarChart, href: "/#services" },
        { title: "NRI Returns", icon: FileBarChart, href: "/#services" },
      ],
    },
    {
      heading: "Business & Audit",
      items: [
        { title: "Company / LLP Registration", icon: Building2, href: "/#services", tag: "₹7,999" },
        { title: "FSSAI / MSME / IEC / TM", icon: Building2, href: "/#services" },
        { title: "Internal Audit", icon: ShieldCheck, href: "/#services" },
        { title: "GST Audit & Other Acts", icon: ShieldCheck, href: "/#services" },
      ],
    },
  ],
};

const financeMenu: MenuConfig = {
  label: "Finance Services",
  href: "/finance",
  featured: {
    title: "Funding that fits your plan.",
    body: "Term, working capital, machinery, mortgage & startup finance.",
    href: "/finance",
  },
  flat: [
    { title: "Term Loan", icon: Landmark, href: "/finance#services", desc: "Long-term capital expansion" },
    { title: "Working Capital", icon: Banknote, href: "/finance#services", desc: "Day-to-day liquidity" },
    { title: "Machinery Loan", icon: Wrench, href: "/finance#services", desc: "Equipment financing" },
    { title: "Project Finance", icon: HardHat, href: "/finance#services", desc: "Greenfield / brownfield" },
    { title: "Mortgage Loan", icon: Home, href: "/finance#services", desc: "Loan against property" },
    { title: "Startup Finance", icon: Rocket, href: "/finance#services", desc: "Seed to scale" },
  ],
};

const contactInfo = [
  { icon: Phone, label: "+91 98989 53563", href: "tel:+919898953563" },
  { icon: Mail, label: "info@lnassociate.com", href: "mailto:info@lnassociate.com" },
  { icon: MapPin, label: "Paldi, Ahmedabad, Gujarat", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/*                                   Navbar                                   */
/* -------------------------------------------------------------------------- */

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAnyOpen = open !== null;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleEnter = (label: string | null) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 60);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "pt-2 md:pt-3" : "pt-3 md:pt-5"
      )}
      onMouseLeave={handleLeave}
      onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
    >
      {/* 3-col grid guarantees TRUE centering of middle capsule
          regardless of logo / CTA widths */}
      <div className="container grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 md:grid-cols-[1fr_auto_1fr] md:gap-4">
        {/* Left: Logo (wrapped in a matching capsule for consistent contrast) */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={cn(
            "justify-self-start rounded-full border border-black/5 bg-white/85 px-2.5 py-1 backdrop-blur-xl transition-all duration-300 md:px-3 md:py-1.5",
            scrolled ? "shadow-pill" : "shadow-sm"
          )}
        >
          {/* Compact logo (no tagline) on mobile, full logo on md+ */}
          <div className="md:hidden">
            <Logo compact />
          </div>
          <div className="hidden md:block">
            <Logo />
          </div>
        </motion.div>

        {/* Center Capsule — always perfectly centered */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className={cn(
            "hidden items-center gap-1 justify-self-center rounded-full border border-black/5 bg-white/85 px-2 py-1.5 backdrop-blur-xl transition-all duration-300 md:flex",
            scrolled ? "shadow-pill" : "shadow-sm"
          )}
          aria-label="Primary"
          onMouseLeave={handleLeave}
        >
          <DropdownTrigger
            menu={accountingMenu}
            isOpen={open === accountingMenu.label}
            active={pathname.startsWith("/accounting")}
            isAnyOpen={isAnyOpen}
            onEnter={() => handleEnter(accountingMenu.label)}
          />
          <DropdownTrigger
            menu={financeMenu}
            isOpen={open === financeMenu.label}
            active={pathname.startsWith("/finance")}
            isAnyOpen={isAnyOpen}
            onEnter={() => handleEnter(financeMenu.label)}
          />
          <Link
            href="/contact"
            onMouseEnter={() => handleEnter(null)}
            className={cn(
              "rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors",
              pathname === "/contact"
                ? "bg-brand-black text-white"
                : "text-brand-ink hover:text-brand-red"
            )}
          >
            Contact
          </Link>
        </motion.nav>

        {/* Spacer column on mobile so the burger sits flush right */}
        <div className="md:hidden" aria-hidden />

        {/* Right: CTA */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="hidden justify-self-end md:block"
        >
          <Button asChild variant="primary" size="md">
            <Link href="/contact" className="group">
              Get a Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </motion.div>

        {/* Mobile trigger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-black/10 bg-white/85 backdrop-blur-xl transition-all duration-300 md:hidden",
            scrolled ? "shadow-pill" : "shadow-sm"
          )}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Desktop mega menu — single morphing panel for smooth cross-fade */}
      <MegaDropdown
        open={open}
        accountingMenu={accountingMenu}
        financeMenu={financeMenu}
        onEnter={() => {
          if (closeTimer.current) clearTimeout(closeTimer.current);
        }}
        onLeave={handleLeave}
        close={() => setOpen(null)}
      />

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="container mt-3 md:hidden"
          >
            <MobileSheet
              onClose={() => setMobileOpen(false)}
              accounting={accountingMenu}
              finance={financeMenu}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Dropdown trigger                              */
/* -------------------------------------------------------------------------- */

function DropdownTrigger({
  menu,
  isOpen,
  active,
  isAnyOpen,
  onEnter,
}: {
  menu: MenuConfig;
  isOpen: boolean;
  active: boolean;
  isAnyOpen: boolean;
  onEnter: () => void;
}) {
  const showPill = isOpen || (!isAnyOpen && active);

  return (
    <Link
      href={menu.href}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      aria-haspopup="true"
      aria-expanded={isOpen}
      className={cn(
        "relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-[13.5px] font-medium",
        "transition-colors duration-300",
        showPill ? "text-white" : "text-brand-ink hover:text-brand-red"
      )}
    >
      {showPill && (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-0 -z-0 rounded-full bg-brand-black"
          transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.6 }}
        />
      )}
      <span className="relative z-10">{menu.label}</span>
      <motion.span
        className="relative z-10 inline-flex"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <ChevronDown className="h-3.5 w-3.5" />
      </motion.span>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*                     Morphing mega dropdown (smoother)                      */
/* -------------------------------------------------------------------------- */

function MegaDropdown({
  open,
  accountingMenu,
  financeMenu,
  onEnter,
  onLeave,
  close,
}: {
  open: string | null;
  accountingMenu: MenuConfig;
  financeMenu: MenuConfig;
  onEnter: () => void;
  onLeave: () => void;
  close: () => void;
}) {
  const isOpen = open === accountingMenu.label || open === financeMenu.label;
  const activeKey =
    open === accountingMenu.label
      ? "acc"
      : open === financeMenu.label
        ? "fin"
        : null;

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-full hidden md:block",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Invisible hover bridge between trigger capsule and panel —
          prevents accidental close when the pointer crosses the gap. */}
      <div aria-hidden className="h-3 w-full" />

      <AnimatePresence mode="wait" initial={false}>
        {isOpen && activeKey && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 4, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -2, scale: 0.995 }}
            transition={{
              duration: 0.18,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.14 },
            }}
            className="container"
          >
            <motion.div
              layout
              transition={{ layout: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_30px_80px_-30px_rgba(10,10,10,0.25)]"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeKey}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  {activeKey === "acc" ? (
                    <MegaAccounting menu={accountingMenu} close={close} />
                  ) : (
                    <MegaFinance menu={financeMenu} close={close} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Accounting mega menu                            */
/* -------------------------------------------------------------------------- */

function MegaAccounting({
  menu,
  close,
}: {
  menu: MenuConfig;
  close: () => void;
}) {
  return (
    <div className="grid grid-cols-12">
      {/* Featured */}
      <div className="col-span-4 relative overflow-hidden bg-gradient-to-br from-[#1D4ED8] to-[#1E3A8A] p-7 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_80%_20%,rgba(255,255,255,.12),transparent_55%)]" />
        <p className="relative text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
          Accounting Suite
        </p>
        <h3 className="relative mt-3 font-display text-2xl font-bold leading-tight">
          {menu.featured?.title}
        </h3>
        <p className="relative mt-3 text-sm text-white/75">
          {menu.featured?.body}
        </p>
        <Button
          asChild
          variant="dark"
          size="md"
          className="relative mt-6"
        >
          <Link href={menu.featured?.href || "#services"} onClick={close}>
            Explore all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>

        <div className="relative mt-8 grid grid-cols-3 gap-2 text-[11px] text-white/75">
          <div className="rounded-xl border border-white/15 p-3">
            <div className="font-display text-lg font-bold text-white">500+</div>
            Clients
          </div>
          <div className="rounded-xl border border-white/15 p-3">
            <div className="font-display text-lg font-bold text-white">10+</div>
            Years
          </div>
          <div className="rounded-xl border border-white/15 p-3">
            <div className="font-display text-lg font-bold text-white">4.8★</div>
            Google
          </div>
        </div>
      </div>

      {/* Groups */}
      <motion.div
        className="col-span-8 grid grid-cols-2 gap-x-4 gap-y-6 p-7"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.04, delayChildren: 0.06 } },
        }}
      >
        {menu.groups?.map((g) => (
          <motion.div
            key={g.heading}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">
              {g.heading}
            </p>
            <ul className="space-y-1">
              {g.items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="group flex items-start gap-3 rounded-xl px-2.5 py-2 transition-colors hover:bg-[#2563EB]/[0.06]"
                  >
                    {item.icon && (
                      <div className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#1D4ED8] transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                        <item.icon className="h-4 w-4" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-[13.5px] font-semibold text-brand-black">
                          {item.title}
                        </span>
                        {item.tag && (
                          <span className="rounded-full bg-[#2563EB]/10 px-1.5 py-0.5 text-[9.5px] font-semibold text-[#1D4ED8]">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      {item.desc && (
                        <p className="truncate text-[11.5px] text-brand-muted">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 flex-none text-brand-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#1D4ED8] group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Finance mega menu                             */
/* -------------------------------------------------------------------------- */

function MegaFinance({
  menu,
  close,
}: {
  menu: MenuConfig;
  close: () => void;
}) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 relative overflow-hidden bg-gradient-to-br from-[#059669] to-[#047857] p-7 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_90%_30%,rgba(255,255,255,.35),transparent_55%)]" />
        <p className="relative text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
          Funding Desk
        </p>
        <h3 className="relative mt-3 font-display text-2xl font-bold leading-tight">
          {menu.featured?.title}
        </h3>
        <p className="relative mt-3 text-sm text-white/80">
          {menu.featured?.body}
        </p>
        <Button
          asChild
          variant="dark"
          size="md"
          className="relative mt-6"
        >
          <Link href={menu.featured?.href || "#services"} onClick={close}>
            Talk to an advisor
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <motion.div
        className="col-span-8 grid grid-cols-2 gap-2 p-5"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.035, delayChildren: 0.06 } },
        }}
      >
        {menu.flat?.map((item) => (
          <motion.a
            key={item.title}
            href={item.href}
            onClick={close}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="group flex items-start gap-3 rounded-2xl border border-transparent p-4 transition-all hover:border-black/5 hover:bg-[#059669]/[0.06]"
          >
            {item.icon && (
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-[#059669]/10 text-[#047857] transition-colors group-hover:bg-[#059669] group-hover:text-white">
                <item.icon className="h-5 w-5" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <div className="text-[13.5px] font-semibold text-brand-black">
                {item.title}
              </div>
              {item.desc && (
                <p className="text-[11.5px] text-brand-muted">{item.desc}</p>
              )}
            </div>
            <ArrowUpRight className="h-4 w-4 flex-none text-brand-muted opacity-0 transition-all duration-300 group-hover:text-[#047857] group-hover:opacity-100 group-hover:-translate-y-0.5" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Mobile sheet                                 */
/* -------------------------------------------------------------------------- */

function MobileSheet({
  onClose,
  accounting,
  finance,
}: {
  onClose: () => void;
  accounting: MenuConfig;
  finance: MenuConfig;
}) {
  const [expanded, setExpanded] = React.useState<string | null>("Accounting");
  const toggle = (k: string) => setExpanded(expanded === k ? null : k);

  return (
    <div className="rounded-3xl border border-black/5 bg-white p-3 shadow-card">
      <MobileAccordion
        title="Accounting Services"
        open={expanded === "Accounting"}
        onToggle={() => toggle("Accounting")}
      >
        {accounting.groups?.map((g) => (
          <div key={g.heading} className="px-2 py-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">
              {g.heading}
            </p>
            <ul className="mt-2 space-y-1">
              {g.items.map((i) => (
                <li key={i.title}>
                  <Link
                    href={i.href}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-brand-ink hover:bg-brand-soft"
                  >
                    {i.title}
                    <ArrowUpRight className="h-4 w-4 text-brand-muted" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </MobileAccordion>

      <MobileAccordion
        title="Finance Services"
        open={expanded === "Finance"}
        onToggle={() => toggle("Finance")}
      >
        <ul className="p-2">
          {finance.flat?.map((i) => (
            <li key={i.title}>
              <Link
                href={i.href}
                onClick={onClose}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-brand-ink hover:bg-brand-soft"
              >
                {i.title}
                <ArrowUpRight className="h-4 w-4 text-brand-muted" />
              </Link>
            </li>
          ))}
        </ul>
      </MobileAccordion>

      <Link
        href="/contact"
        onClick={onClose}
        className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-soft"
      >
        Contact
        <ArrowUpRight className="h-4 w-4 text-brand-muted" />
      </Link>

      <div className="mt-2 border-t border-black/5 pt-3">
        <div className="grid gap-1.5 px-2 pb-2">
          {contactInfo.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 rounded-xl px-2 py-1.5 text-[12.5px] text-brand-muted hover:text-brand-red"
            >
              <Icon className="h-3.5 w-3.5 text-brand-red" />
              {label}
            </a>
          ))}
        </div>
        <Button asChild className="m-2 w-[calc(100%-1rem)]">
          <Link href="/contact" onClick={onClose}>
            Get a Quote
          </Link>
        </Button>
      </div>
    </div>
  );
}

function MobileAccordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-soft"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-brand-muted transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
