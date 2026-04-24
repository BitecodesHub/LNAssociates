import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { MUIProvider } from "@/components/providers/MUIProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LN Associate — Your Reliance, Our Assurance",
  description:
    "LN Associate is a consultancy firm offering Accounting, Tax Advisory, GST, Audit, Payroll, and Finance services to Indian and international clients.",
  keywords: [
    "LN Associate",
    "Accounting Ahmedabad",
    "GST Consultant",
    "Income Tax",
    "CA Firm",
    "Business Registration",
  ],
  metadataBase: new URL("https://www.lnassociate.com"),
  openGraph: {
    title: "LN Associate — Your Reliance, Our Assurance",
    description:
      "One-stop consultancy for Accounting, GST, Income Tax, Audit, and Finance.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-white text-brand-ink">
        <MUIProvider>{children}</MUIProvider>
      </body>
    </html>
  );
}
