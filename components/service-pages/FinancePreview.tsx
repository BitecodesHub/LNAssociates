"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/site/Navbar";
import {
  ServiceShowcase,
  type ShowcaseItem,
} from "@/components/service-pages/ServiceShowcase";
import { financeServices } from "@/lib/services/finance";

const Footer = dynamic(
  () => import("@/components/site/Footer").then((m) => ({ default: m.Footer })),
  { ssr: false }
);
const ScrollProgress = dynamic(
  () =>
    import("@/components/site/ScrollProgress").then((m) => ({
      default: m.ScrollProgress,
    })),
  { ssr: false }
);
const WhatsAppFab = dynamic(
  () =>
    import("@/components/site/WhatsAppFab").then((m) => ({
      default: m.WhatsAppFab,
    })),
  { ssr: false }
);

const items: ShowcaseItem[] = financeServices.map((service) => ({
  icon: service.icon,
  title: service.title,
  tag: service.tag,
  summary: service.summary,
  highlights: service.highlights,
  href: `/finance/${service.slug}`,
}));

export function FinancePreview() {
  return (
    <main className="relative min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />

      <div className="pt-20 md:pt-24">
        <ServiceShowcase
          theme="green"
          eyebrow="Finance advisory"
          titleLead=""
          titleRest="Finance Services"
          tagline="Partner-led · Lender-ready"
          intro="Six advisory lanes for term loans, working capital, machinery, project finance, mortgage and startup funding — each structured around use-of-funds and built to underwriter standards before it reaches a lender."
          items={items}
          centered
          showRibbon={false}
          coloredTitle
          variant="editorial"
        />
      </div>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
