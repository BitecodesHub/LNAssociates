"use client";

import { ServiceDetailTemplate } from "@/components/service-pages/ServiceDetailTemplate";
import {
  accountingServices,
  getAccountingServiceBySlug,
} from "@/lib/services/accounting";

export function AccountingServiceDetail({ slug }: { slug: string }) {
  const service = getAccountingServiceBySlug(slug);
  if (!service) return null;

  const siblings = accountingServices.filter((s) => s.slug !== service.slug);

  return (
    <ServiceDetailTemplate
      service={service}
      theme="accounting"
      backHref="/accounting"
      sectionLabel="Accounting services"
      siblings={siblings}
    />
  );
}
