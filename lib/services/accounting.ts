import {
  BadgeIndianRupee,
  BookOpenCheck,
  CircleDollarSign,
  Landmark,
  WalletCards,
} from "lucide-react";
import type { ServiceDetail } from "./types";

export const accountingServices: ServiceDetail[] = [
  {
    slug: "accounting-and-finalization",
    icon: BookOpenCheck,
    title: "Accounting & Finalization",
    tag: "Monthly retainer",
    summary:
      "Month-close discipline, ledgers, reconciliations and year-end readiness designed for promoters who want clean books without building a large in-house team.",
    hero: {
      eyebrow: "Accounting services",
      headline: "Books that close cleanly every month, not just at year-end.",
      body: "We run your accounting on a fixed monthly rhythm — recording, reconciling, and finalizing — so the numbers you act on are the same numbers your auditor signs off on.",
    },
    highlights: [
      "Day-to-day bookkeeping across Tally, Zoho or your existing stack",
      "Bank, vendor and ledger reconciliations on a fixed monthly cadence",
      "Trial balance, P&L and balance-sheet finalization ready for audit",
      "Year-end closing handled with the same team that ran the books",
    ],
    process: [
      {
        title: "Diagnose the current setup",
        body: "We review your books, tools, reporting cadence and approval flow before changing anything.",
      },
      {
        title: "Stabilise the close",
        body: "Reconciliations, recurring entries and ownership of each task are rebuilt around a predictable monthly close.",
      },
      {
        title: "Run the monthly cycle",
        body: "Books, ledgers and reports move on a fixed schedule with partner oversight on exceptions.",
      },
      {
        title: "Finalize for audit",
        body: "Year-end packs, schedules and supporting workings are produced by the same team — no handoff loss.",
      },
    ],
    idealFor: [
      "Founder-led businesses",
      "Companies switching CAs",
      "Teams without a CFO",
      "NRI-owned entities",
    ],
    faqs: [
      {
        q: "Do we have to switch our accounting software?",
        a: "No. We work inside Tally, Zoho Books, QuickBooks or whatever you're already on. We only suggest a change when the current setup is the actual bottleneck.",
      },
      {
        q: "Who actually does the work each month?",
        a: "A dedicated associate runs the day-to-day, with a partner reviewing the close before reports go out.",
      },
    ],
    cta: {
      eyebrow: "Retainer ready",
      title: "Get a clean monthly close — without building a finance team.",
      body: "Talk to a partner about scoping a retainer that fits your transaction volume and reporting cadence.",
      primaryLabel: "Request a quote",
      secondaryLabel: "Call the desk",
    },
  },
  {
    slug: "cash-flow",
    icon: CircleDollarSign,
    title: "Cash Flow",
    tag: "Decision support",
    summary:
      "Short-range visibility on inflows, outflows and working capital pressure so management decisions happen before a crunch, not after it.",
    hero: {
      eyebrow: "Accounting services",
      headline: "See cash pressure two weeks before it becomes a problem.",
      body: "We build a rolling short-range cash view from your real receivables, payables and recurring outflows — so the next vendor payment, payroll or EMI never catches you off guard.",
    },
    highlights: [
      "Rolling 4–13 week cash position, refreshed on a fixed cadence",
      "Receivables and payables aging surfaced alongside cash, not separately",
      "Scenario view for delayed collections, lumpy payouts or capex",
      "Founder-readable summary — no need to interpret a spreadsheet",
    ],
    process: [
      {
        title: "Map the actual cash cycle",
        body: "We start from your bank statements, invoicing pattern and recurring outflows — not from a generic template.",
      },
      {
        title: "Build the rolling view",
        body: "A short-range cash forecast is set up with the assumptions that matter for your business, not theoretical line items.",
      },
      {
        title: "Refresh on cadence",
        body: "The view is updated weekly or fortnightly so decisions are made on a current picture, not last month's data.",
      },
      {
        title: "Flag pressure early",
        body: "We surface tight weeks, collection gaps or upcoming squeezes before they force a reactive decision.",
      },
    ],
    idealFor: [
      "Working-capital-heavy businesses",
      "Project-based revenue",
      "Pre-funding stretches",
      "Promoters managing multiple entities",
    ],
    faqs: [
      {
        q: "Is this different from a P&L or budget?",
        a: "Yes. P&L tells you whether you're profitable; this tells you whether you can pay people next Friday. They're complementary, not the same.",
      },
      {
        q: "How often does this get refreshed?",
        a: "Weekly is the default. Some clients prefer fortnightly, and a few want a daily view during tight stretches — we set the cadence to fit the business.",
      },
      {
        q: "Do you need access to our bank accounts?",
        a: "View-only access or shared statements is enough. We don't need transactional access to build the forecast.",
      },
    ],
    cta: {
      eyebrow: "Cash visibility",
      title: "Stop running cash decisions on instinct.",
      body: "Set up a rolling cash view with a partner-led desk that updates it for you — and tells you when a tight week is coming.",
      primaryLabel: "Request a quote",
      secondaryLabel: "Call the desk",
    },
  },
  {
    slug: "fund-flow",
    icon: Landmark,
    title: "Fund Flow",
    tag: "Board clarity",
    summary:
      "Track where capital is moving across operations, finance and growth initiatives, with founder-readable summaries instead of accounting-heavy noise.",
    hero: {
      eyebrow: "Accounting services",
      headline: "Where the money came from, where it went, and what it built.",
      body: "Fund-flow tracking that turns capital movement into a clear narrative for promoters and boards — not a dense statement only the CA understands.",
    },
    highlights: [
      "Sources and applications of funds across operations, debt and equity",
      "Capex vs working capital deployment shown side by side",
      "Inter-company and promoter movement tracked separately",
      "Board-ready summary in plain language",
    ],
    process: [
      {
        title: "Establish the entities and accounts",
        body: "We map the legal entities, bank accounts and capital sources that need to be tracked together.",
      },
      {
        title: "Categorise capital movement",
        body: "Operating, financing and investing flows are separated cleanly so the picture isn't buried in transaction noise.",
      },
      {
        title: "Build the recurring view",
        body: "A monthly or quarterly fund-flow statement is produced with the same logic each cycle.",
      },
      {
        title: "Translate for the board",
        body: "Each cycle's view ships with a short founder-readable summary of what changed and why.",
      },
    ],
    idealFor: [
      "Multi-entity promoters",
      "Capex-heavy businesses",
      "Companies with external investors",
      "Boards needing quarterly clarity",
    ],
    cta: {
      eyebrow: "Capital clarity",
      title: "Make capital movement legible — to founders and to boards.",
      body: "Talk to a partner about a fund-flow rhythm that fits your reporting cycle and entity structure.",
      primaryLabel: "Request a quote",
      secondaryLabel: "Call the desk",
    },
  },
  {
    slug: "payroll-management",
    icon: BadgeIndianRupee,
    title: "Payroll Management",
    tag: "Recurring operations",
    summary:
      "Salary processing, recurring compliance checkpoints and smoother monthly payroll rhythms that reduce follow-up and employee friction.",
    hero: {
      eyebrow: "Accounting services",
      headline: "Payroll that runs on time, every month, with the compliance work already done.",
      body: "We process payroll end-to-end — calculations, statutory deductions, payslips and filings — so the cycle stops being a recurring fire-drill for your HR or admin team.",
    },
    highlights: [
      "Monthly salary processing with statutory deductions handled",
      "PF, ESI, PT and TDS workings prepared and filed on schedule",
      "Payslips, Form 16 and reimbursement workflows in one rhythm",
      "Onboarding and full-and-final settlement handled cleanly",
    ],
    process: [
      {
        title: "Onboard the current setup",
        body: "We pick up your existing payroll register, salary structure and employee master without disrupting the next cycle.",
      },
      {
        title: "Standardise the cycle",
        body: "Cut-off dates, approval flow and statutory checkpoints are formalised so each month runs on the same script.",
      },
      {
        title: "Run payroll on cadence",
        body: "Calculations, deductions, payslips and filings happen on a fixed schedule with partner-level review.",
      },
      {
        title: "Close the year cleanly",
        body: "Form 16s, annual returns and reconciliations are produced by the same team that ran the year.",
      },
    ],
    idealFor: [
      "10–250 employee teams",
      "Multi-state workforce",
      "Companies without an in-house payroll lead",
      "Founders tired of late-month payroll chaos",
    ],
    faqs: [
      {
        q: "Do you handle statutory filings or just calculations?",
        a: "Both. PF, ESI, PT and TDS workings are calculated and filed on schedule — you don't need a separate compliance vendor.",
      },
      {
        q: "Can you handle multi-state employees?",
        a: "Yes. Professional Tax and state-specific rules are tracked per employee location.",
      },
    ],
    cta: {
      eyebrow: "Payroll, handled",
      title: "Get payroll off your team's plate.",
      body: "A partner-led desk runs the cycle, the compliance and the year-end paperwork — your HR team gets time back.",
      primaryLabel: "Request a quote",
      secondaryLabel: "Call the desk",
    },
  },
  {
    slug: "vendor-payments",
    icon: WalletCards,
    title: "Vendor Payments",
    tag: "Control + cadence",
    summary:
      "Payment scheduling, maker-checker discipline and vendor-facing coordination to keep dues on time and relationships stable.",
    hero: {
      eyebrow: "Accounting services",
      headline: "Vendor payments that go out on schedule — with a clean approval trail.",
      body: "We sit on top of your accounts payable: validating bills, scheduling payouts, running maker-checker controls, and keeping the vendor side of the relationship calm.",
    },
    highlights: [
      "Bill intake, validation and ledger entry handled end-to-end",
      "Payment runs on a defined cadence with maker-checker discipline",
      "TDS, GST and statutory withholding applied at the source",
      "Vendor reconciliations and statement matches on a fixed schedule",
    ],
    process: [
      {
        title: "Set the controls",
        body: "We agree on payment cadence, approval thresholds and the maker-checker chain before the first run.",
      },
      {
        title: "Onboard vendors and bills",
        body: "Existing vendor master, recurring bills and pending payments are picked up without disrupting current cycles.",
      },
      {
        title: "Run scheduled payouts",
        body: "Payments are processed on cadence with statutory deductions handled and a clear trail of approvals.",
      },
      {
        title: "Reconcile and report",
        body: "Vendor statements, ageing and exceptions are surfaced regularly so nothing slips into a quiet backlog.",
      },
    ],
    idealFor: [
      "Businesses with 50+ active vendors",
      "Founders losing time to AP follow-ups",
      "Teams without a dedicated AP person",
      "Multi-location operations",
    ],
    cta: {
      eyebrow: "Accounts payable",
      title: "Run AP like a controlled function, not a reactive one.",
      body: "Set up a payment cadence with the discipline of a maker-checker workflow — and the calm of a partner-led desk.",
      primaryLabel: "Request a quote",
      secondaryLabel: "Call the desk",
    },
  },
];

export function getAccountingServiceBySlug(
  slug: string
): ServiceDetail | undefined {
  return accountingServices.find((service) => service.slug === slug);
}

export function getAccountingSlugs(): string[] {
  return accountingServices.map((service) => service.slug);
}
