import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/site/Navbar";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";

const ContactForm = dynamic(() =>
  import("@/components/contact/ContactForm").then((m) => ({ default: m.ContactForm }))
);
const OfficePanel = dynamic(() =>
  import("@/components/contact/OfficePanel").then((m) => ({ default: m.OfficePanel }))
);
const Footer = dynamic(() =>
  import("@/components/site/Footer").then((m) => ({ default: m.Footer }))
);
const ScrollProgress = dynamic(() =>
  import("@/components/site/ScrollProgress").then((m) => ({
    default: m.ScrollProgress,
  }))
);
const WhatsAppFab = dynamic(() =>
  import("@/components/site/WhatsAppFab").then((m) => ({
    default: m.WhatsAppFab,
  }))
);

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

      <section className="py-8 md:py-16">
        <div className="container grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <OfficePanel />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
