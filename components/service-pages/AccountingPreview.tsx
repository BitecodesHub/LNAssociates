"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/site/Navbar";
import {
  ServiceShowcase,
  type ShowcaseItem,
} from "@/components/service-pages/ServiceShowcase";
import { accountingServices } from "@/lib/services/accounting";

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

const items: ShowcaseItem[] = accountingServices.map((service) => ({
  icon: service.icon,
  title: service.title,
  tag: service.tag,
  summary: service.summary,
  highlights: service.highlights,
  href: `/accounting/${service.slug}`,
}));

export function AccountingPreview() {
  return (
    <main className="relative min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />

      <div className="pt-20 md:pt-24">
        <ServiceShowcase
          theme="blue"
          eyebrow="Accounting services"
          titleLead=""
          titleRest="Accounting Services"
          tagline="Partner-led · Monthly rhythm"
          intro="Five retainers that keep your finance back-office running on a predictable monthly rhythm."
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
