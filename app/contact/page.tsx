import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficePanel } from "@/components/contact/OfficePanel";
import { FAQStrip } from "@/components/contact/FAQStrip";

export const metadata: Metadata = {
  title: "Contact LN Associate — Ahmedabad Accounting & Tax Consultants",
  description:
    "Reach LN Associate's Ahmedabad office by phone, email, WhatsApp or the enquiry form. Partner-led responses within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />

      <ContactHero />
      <ContactInfoCards />

      <section className="py-14 md:py-20">
        <div className="container grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <OfficePanel />
          </div>
        </div>
      </section>

      <FAQStrip />

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
