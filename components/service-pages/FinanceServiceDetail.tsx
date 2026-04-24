"use client";

import { ServiceDetailTemplate } from "@/components/service-pages/ServiceDetailTemplate";
import {
  financeServices,
  getFinanceServiceBySlug,
} from "@/lib/services/finance";

export function FinanceServiceDetail({ slug }: { slug: string }) {
  const service = getFinanceServiceBySlug(slug);
  if (!service) return null;

  const siblings = financeServices.filter((s) => s.slug !== service.slug);

  return (
    <ServiceDetailTemplate
      service={service}
      theme="finance"
      backHref="/finance"
      sectionLabel="Finance advisory"
      siblings={siblings}
    />
  );
}
