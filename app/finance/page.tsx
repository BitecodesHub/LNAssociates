import type { Metadata } from "next";
import { FinancePreview } from "@/components/service-pages/FinancePreview";

export const metadata: Metadata = {
  title: "Finance Advisory — LN Associate",
  description:
    "Preview LN Associate's finance advisory page for term loans, working capital, machinery, project finance, mortgage and startup funding.",
  alternates: { canonical: "/finance" },
};

export default function FinancePage() {
  return <FinancePreview />;
}
