"use client";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import {
  ServiceShowcase,
  type ShowcaseItem,
} from "@/components/service-pages/ServiceShowcase";
import { accountingServices } from "@/lib/services/accounting";

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

      <div className="pt-28 md:pt-32">
        <ServiceShowcase
          theme="blue"
          eyebrow="Accounting services"
          titleLead=""
          titleRest="Accounting Services"
          tagline="Partner-led · Monthly rhythm"
          intro="Five retainers that keep your finance back-office running on a predictable monthly rhythm."
          items={items}
          centered
        />
      </div>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
