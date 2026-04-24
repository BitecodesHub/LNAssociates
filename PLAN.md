# LN Associate — Accounting & Finance Redesign + Reusable Sub-Page Templates

## Context

The LN Associate site is a Next.js 14 App-Router build using Tailwind, Framer Motion, and a tight brand system (red `#E11D2A`, black `#0A0A0A`, Plus Jakarta Sans + Inter). The `/accounting` and `/finance` pages already render — via [AccountingPreview.tsx](components/service-pages/AccountingPreview.tsx) and [FinancePreview.tsx](components/service-pages/FinancePreview.tsx) — but:

1. Neither section has **sub-pages**, whereas the LN Associate audit document specifies individual service detail pages (e.g. `/accounting/cash-flow`, `/finance/term-loan`) are the natural information architecture.
2. Service data is **hard-coded inside the preview components** — there's no reusable source of truth.
3. The user wants **ONE template per section** that, when edited, cascades to every sub-page in that section — so adding, removing, or restyling services is a single-file change.
4. The user wants the two sections to feel **visually differentiated** (Accounting = dark/ink tone, Finance = red advisory tone) while keeping the existing fluid, minimalistic language.

The intended outcome: a data-driven architecture where each section has a single dynamic route, a single template component, and a single typed data module — making the sub-pages trivially extensible and visually consistent.

## Out of scope (explicitly)

- `/business`, `/gst`, `/incometax`, `/audit`, `/contactUs` pages and their sub-pages.
- Copying content verbatim from `lnassociate.com`.
- Price surfacing. Sub-page CTA is "Request a quote / Talk to a partner."

## Architecture

### 1. Data layer — single source of truth per section

- `lib/services/types.ts` — shared `ServiceDetail` type.
- `lib/services/accounting.ts` — array of 5 accounting services.
- `lib/services/finance.ts` — array of 6 finance services.

Each module exports the list plus `getServiceBySlug(slug)` and `getAllSlugs()` helpers.

### 2. ONE dynamic route per section

- `app/accounting/[slug]/page.tsx`
- `app/finance/[slug]/page.tsx`

Each route uses `generateStaticParams`, `generateMetadata`, falls back to `notFound()`, and renders `<ServiceDetailTemplate />`.

### 3. ONE reusable template component (themed)

`components/service-pages/ServiceDetailTemplate.tsx` — single client component for every sub-page in both sections.

Layout: Navbar → Breadcrumb → Hero → Highlights → Process → Ideal-for chips → optional FAQs → Related rail → CTA → Footer.

### 4. Theming — accounting (dark/ink) vs finance (red/advisory)

Token map in the template controls accent surfaces, pill states, check chips, and CTA background. Brand red, typography, motion are unchanged.

### 5. Re-wire the section listing pages

`AccountingPreview` and `FinancePreview` import from the data modules; cards become clickable links to their detail pages. `ServiceGrid` gets an optional `href` per item.

### 6. Service entries to seed

**Accounting (5):** `accounting-and-finalization`, `cash-flow`, `fund-flow`, `payroll-management`, `vendor-payments`.

**Finance (6):** `term-loan`, `working-capital-loan`, `machinery-loan`, `project-finance`, `mortgage-loan`, `startup-finance`.

## Files

**Create:** `lib/services/{types,accounting,finance}.ts`, `app/{accounting,finance}/[slug]/page.tsx`, `components/service-pages/ServiceDetailTemplate.tsx`.

**Edit:** `components/service-pages/{AccountingPreview,FinancePreview,ServicePageSections}.tsx`.

## Verification

1. `npm run dev` — visit `/accounting`, `/finance`, `/accounting/cash-flow`, `/finance/term-loan`, `/accounting/nonexistent`.
2. `npm run build` — TS clean, all 11 sub-routes statically generated.
3. Cascade test: edit template → all sub-pages update. Edit data entry → listing + detail update.

## Success criteria

- `/accounting` and `/finance` cards link to detail pages (5 + 6 = 11 sub-pages total).
- Editing `ServiceDetailTemplate.tsx` cascades to every sub-page.
- Editing a data module updates listing card + detail page together.
- Accounting reads dark/retainer; Finance reads red/advisory; both feel like LN Associate.
- No new dependencies, no homepage regressions.
