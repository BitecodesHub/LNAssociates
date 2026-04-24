import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinanceServiceDetail } from "@/components/service-pages/FinanceServiceDetail";
import {
  getFinanceServiceBySlug,
  getFinanceSlugs,
} from "@/lib/services/finance";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getFinanceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getFinanceServiceBySlug(params.slug);
  if (!service) return { title: "Service not found — LN Associate" };

  return {
    title: `${service.title} — LN Associate`,
    description: service.summary,
    alternates: { canonical: `/finance/${service.slug}` },
  };
}

export default function FinanceServicePage({ params }: Props) {
  const service = getFinanceServiceBySlug(params.slug);
  if (!service) notFound();

  return <FinanceServiceDetail slug={params.slug} />;
}
