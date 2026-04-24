import type { Metadata } from "next";
import { AccountingPreview } from "@/components/service-pages/AccountingPreview";

export const metadata: Metadata = {
  title: "Accounting Services — LN Associate",
  description:
    "Preview LN Associate's accounting retainership page for bookkeeping, finalization, payroll, vendor payments and cash flow support.",
  alternates: { canonical: "/accounting" },
};

export default function AccountingPage() {
  return <AccountingPreview />;
}
