import {
  Building2,
  Factory,
  HandCoins,
  Landmark,
  Rocket,
  Warehouse,
} from "lucide-react";
import type { ServiceDetail } from "./types";

export const financeServices: ServiceDetail[] = [
  {
    slug: "term-loan",
    icon: Landmark,
    title: "Term Loan",
    tag: "Growth capital",
    summary:
      "Structured borrowing for expansion plans, capex and business milestones that need more than short-cycle funding.",
    hero: {
      eyebrow: "Finance advisory",
      headline: "Borrow for growth — with the case built before the lender sees it.",
      body: "Term-loan advisory that starts with the use-of-funds, builds the projections and documentation around it, and only then walks the file into the right lender.",
    },
    highlights: [
      "Use-of-funds and repayment ability framed before lender outreach",
      "Projections, ratios and supporting workings prepared in-house",
      "Lender shortlist matched to your stage, sector and ticket size",
      "Sanction-to-disbursement coordination handled with you",
    ],
    process: [
      {
        title: "Understand the need",
        body: "We start with what the loan is actually funding — capex, expansion, refinancing — and structure the request around that.",
      },
      {
        title: "Build the case",
        body: "Projections, repayment workings and supporting documentation are prepared with the same rigour an underwriter applies.",
      },
      {
        title: "Approach the right lender",
        body: "We shortlist lenders based on fit — not whichever has the easiest form — and manage the submission.",
      },
      {
        title: "See it through to disbursement",
        body: "Queries, sanction terms and documentation are coordinated until the funds actually land.",
      },
    ],
    idealFor: [
      "Capex-led expansion",
      "Promoter-funded growth stages",
      "Companies refinancing existing debt",
      "Established businesses adding capacity",
    ],
    cta: {
      eyebrow: "Term loan advisory",
      title: "Make the case before you make the application.",
      body: "Talk to a partner about structuring the borrowing properly — and approaching the lenders that actually fit.",
      primaryLabel: "Request a quote",
      secondaryLabel: "Call the desk",
    },
  },
  {
    slug: "working-capital-loan",
    icon: HandCoins,
    title: "Working Capital Loan",
    tag: "Operating headroom",
    summary:
      "Facilities built around operating cycles, receivable timing and day-to-day liquidity rather than a generic borrowing template.",
    hero: {
      eyebrow: "Finance advisory",
      headline: "Working capital that's sized for your cycle, not a generic template.",
      body: "We frame the working-capital ask around your real operating cycle — receivables, inventory, payables — and prepare the file the way a banker would want to read it.",
    },
    highlights: [
      "Cash credit, overdraft or invoice-discounting structures evaluated against the operating cycle",
      "Drawing power workings, stock statements and MPBF prepared cleanly",
      "Multiple-banking and consortium scenarios advised on",
      "Renewal documentation handled annually — not a yearly fire-drill",
    ],
    process: [
      {
        title: "Map the operating cycle",
        body: "We work backwards from your real receivable, inventory and payable days to size the facility.",
      },
      {
        title: "Pick the structure",
        body: "Cash credit, OD, invoice discounting or a blend — chosen for fit, not familiarity.",
      },
      {
        title: "Prepare the lender file",
        body: "Drawing power workings, projections and supporting statements are built to underwriter standards.",
      },
      {
        title: "Run renewals on cadence",
        body: "Annual renewals stop being a scramble — documentation is maintained through the year.",
      },
    ],
    idealFor: [
      "Trading and distribution businesses",
      "Manufacturing with stock cycles",
      "B2B with long receivable days",
      "Companies outgrowing their current limit",
    ],
    faqs: [
      {
        q: "Can you help with a multiple-banking arrangement?",
        a: "Yes. We advise on whether a single banker, multiple-banking or consortium fits — and prepare the relevant documentation either way.",
      },
      {
        q: "Do you handle renewals or only fresh facilities?",
        a: "Both. Renewals often need more discipline than fresh sanctions because the lender's expectations have grown — we keep that file ready year-round.",
      },
    ],
    cta: {
      eyebrow: "Working capital",
      title: "Stop fighting your operating cycle with the wrong facility.",
      body: "Get a partner-led view on the structure, the size and the lender that actually fit your business.",
      primaryLabel: "Request a quote",
      secondaryLabel: "Call the desk",
    },
  },
  {
    slug: "machinery-loan",
    icon: Factory,
    title: "Machinery Loan",
    tag: "Asset-backed",
    summary:
      "Finance support for equipment purchases where documentation quality and asset positioning often determine lender confidence.",
    hero: {
      eyebrow: "Finance advisory",
      headline: "Equipment finance that closes faster — because the file is built right.",
      body: "Machinery loans hinge on how the asset, the supplier and the repayment ability are presented. We prepare the case so the lender's questions are already answered.",
    },
    highlights: [
      "Asset, supplier and quotation documentation packaged for lender review",
      "Repayment workings tied to the cash-generating capacity of the asset",
      "Subsidy-linked schemes (CGTMSE, CLCSS where applicable) flagged",
      "Coordination through sanction, margin payment and disbursement",
    ],
    process: [
      {
        title: "Confirm the asset and the case",
        body: "We start with the supplier, asset spec and how it improves capacity or unit economics.",
      },
      {
        title: "Frame the repayment",
        body: "Workings tie back to the asset's contribution — not just the company's overall cash flow.",
      },
      {
        title: "Submit to the right lender",
        body: "Lender selection accounts for asset type, sector and any subsidy schemes that change the math.",
      },
      {
        title: "Close out cleanly",
        body: "Margin money, supplier payment and disbursement are sequenced so the asset arrives on schedule.",
      },
    ],
    idealFor: [
      "Manufacturing capex",
      "Print, packaging and processing units",
      "Construction equipment buyers",
      "MSMEs eligible for subsidy schemes",
    ],
    cta: {
      eyebrow: "Equipment finance",
      title: "Get the machinery sanctioned without the documentation drag.",
      body: "A partner-led desk packages the asset, the case and the lender approach — so the file moves.",
      primaryLabel: "Request a quote",
      secondaryLabel: "Call the desk",
    },
  },
  {
    slug: "project-finance",
    icon: Building2,
    title: "Project Finance",
    tag: "Structured planning",
    summary:
      "A more deliberate funding path for businesses expanding capacity, opening new facilities or planning larger execution phases.",
    hero: {
      eyebrow: "Finance advisory",
      headline: "Bigger projects need a deliberate funding plan — not a stretched working-capital line.",
      body: "Project finance work where the funding structure, repayment runway and execution milestones are designed together — before the first lender meeting.",
    },
    highlights: [
      "Project cost, means of finance and DSCR workings prepared in detail",
      "Phasing of debt drawdown matched to construction or commissioning milestones",
      "Promoter contribution and equity structuring advised on",
      "Lender consortium framing where the ticket size warrants it",
    ],
    process: [
      {
        title: "Define the project",
        body: "Scope, cost, timeline and revenue assumptions are stress-tested before they enter a financial model.",
      },
      {
        title: "Structure the funding",
        body: "Debt-equity mix, drawdown phasing and security package are designed for execution reality, not best case.",
      },
      {
        title: "Approach lenders deliberately",
        body: "Bilateral or consortium routes are chosen based on size, sector and lender appetite — not convenience.",
      },
      {
        title: "Coordinate through execution",
        body: "Drawdown requests, milestone certifications and ongoing reporting are managed alongside the project.",
      },
    ],
    idealFor: [
      "Greenfield or brownfield expansion",
      "New facility setup",
      "Multi-phase capex",
      "Companies needing consortium funding",
    ],
    cta: {
      eyebrow: "Project finance",
      title: "Plan the funding the way you'd plan the project.",
      body: "Get a partner-led structure for cost, debt phasing and lender approach — before the first sanction letter.",
      primaryLabel: "Request a quote",
      secondaryLabel: "Call the desk",
    },
  },
  {
    slug: "mortgage-loan",
    icon: Warehouse,
    title: "Mortgage Loan",
    tag: "Collateral strategy",
    summary:
      "Loan-against-property positioning for businesses that want to unlock value without distorting working capital arrangements.",
    hero: {
      eyebrow: "Finance advisory",
      headline: "Unlock property value without breaking your working-capital setup.",
      body: "LAP advisory positioned around use-of-funds and tenure — so the borrowing serves the business plan instead of replacing it with a new constraint.",
    },
    highlights: [
      "Loan-against-property structuring for business or personal need",
      "Property valuation, title and documentation reviewed up front",
      "Tenure and repayment shaped to the actual deployment plan",
      "Lender comparison across banks and NBFCs with realistic timelines",
    ],
    process: [
      {
        title: "Confirm the use of funds",
        body: "Whether it's expansion, refinance or a one-time need, we shape the structure around the actual deployment.",
      },
      {
        title: "Review the property and papers",
        body: "Title, valuation and documentation gaps are surfaced before they become lender objections.",
      },
      {
        title: "Match to the right lender",
        body: "Bank, NBFC, ticket size and tenure are aligned for fit — not the fastest sanction.",
      },
      {
        title: "Close with clarity",
        body: "Sanction, legal vetting and disbursement are coordinated so the timeline is realistic, not optimistic.",
      },
    ],
    idealFor: [
      "Asset-rich, cash-tight businesses",
      "Promoters consolidating loans",
      "Self-employed professionals",
      "Companies funding growth without diluting equity",
    ],
    cta: {
      eyebrow: "Loan against property",
      title: "Borrow against the property — without distorting the business.",
      body: "Get a partner-led view on tenure, lender fit and documentation before the file goes anywhere.",
      primaryLabel: "Request a quote",
      secondaryLabel: "Call the desk",
    },
  },
  {
    slug: "startup-finance",
    icon: Rocket,
    title: "Startup Finance",
    tag: "Early-stage readiness",
    summary:
      "Support for investor-ready decks, documentation and borrowing conversations when younger companies need sharper financial storytelling.",
    hero: {
      eyebrow: "Finance advisory",
      headline: "Founder-stage finance, presented the way investors and lenders read it.",
      body: "We help younger companies turn raw traction and runway numbers into a credible financial story — for VCs, banks, or the next strategic conversation.",
    },
    highlights: [
      "Financial model, unit economics and runway view prepared cleanly",
      "Cap table, ESOP and dilution scenarios mapped out",
      "Investor-grade deck and data-room support",
      "Compliance hygiene that survives an investor's diligence",
    ],
    process: [
      {
        title: "Frame the story",
        body: "Traction, ICP and unit economics are turned into a narrative an investor or banker can follow in five minutes.",
      },
      {
        title: "Build the model",
        body: "A clean financial model with assumptions you can defend — not one that crumbles in the first diligence call.",
      },
      {
        title: "Prep the room",
        body: "Deck, data-room, cap table and compliance basics are organised before outreach starts.",
      },
      {
        title: "Support the conversation",
        body: "We sit alongside you through investor or lender meetings — answering the finance questions you'd rather not navigate alone.",
      },
    ],
    idealFor: [
      "Pre-seed and seed-stage founders",
      "Bootstrapped companies raising for the first time",
      "Startups preparing for diligence",
      "Founders applying for startup credit lines",
    ],
    faqs: [
      {
        q: "Do you only help with VC raises?",
        a: "No. A lot of early-stage founders need this for bank lines, government schemes or strategic conversations — not just venture funding.",
      },
      {
        q: "Can you build the financial model from scratch?",
        a: "Yes. If you don't have a model yet, we build one with you. If you have one, we stress-test it before it leaves the room.",
      },
      {
        q: "Do you support post-raise compliance too?",
        a: "We do. Once you raise, the compliance and reporting load shifts — we can stay on as the ongoing finance and accounting desk.",
      },
    ],
    cta: {
      eyebrow: "Founder-stage finance",
      title: "Walk into the next investor or lender meeting prepared.",
      body: "Get a partner-led desk to shape the model, the deck and the data-room — before the conversation starts.",
      primaryLabel: "Request a quote",
      secondaryLabel: "Call the desk",
    },
  },
];

export function getFinanceServiceBySlug(
  slug: string
): ServiceDetail | undefined {
  return financeServices.find((service) => service.slug === slug);
}

export function getFinanceSlugs(): string[] {
  return financeServices.map((service) => service.slug);
}
