"use client";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import {
  ServiceShowcase,
  type ShowcaseItem,
} from "@/components/service-pages/ServiceShowcase";
import { financeServices } from "@/lib/services/finance";

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

      <div className="pt-28 md:pt-32">
        <ServiceShowcase
          theme="green"
          eyebrow="Finance advisory"
          titleLead="Capital, framed"
          titleRest="with structure."
          tagline="Partner-led · Lender-ready"
          intro="Six advisory lanes for term loans, working capital, machinery, project finance, mortgage and startup funding — each structured around use-of-funds and built to underwriter standards before it reaches a lender."
          items={items}
        />
      </div>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
