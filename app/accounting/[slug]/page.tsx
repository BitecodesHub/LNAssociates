import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AccountingServiceDetail } from "@/components/service-pages/AccountingServiceDetail";
import {
  getAccountingServiceBySlug,
  getAccountingSlugs,
} from "@/lib/services/accounting";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAccountingSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getAccountingServiceBySlug(params.slug);
  if (!service) return { title: "Service not found — LN Associate" };

  return {
    title: `${service.title} — LN Associate`,
    description: service.summary,
    alternates: { canonical: `/accounting/${service.slug}` },
  };
}

export default function AccountingServicePage({ params }: Props) {
  const service = getAccountingServiceBySlug(params.slug);
  if (!service) notFound();

  return <AccountingServiceDetail slug={params.slug} />;
}
