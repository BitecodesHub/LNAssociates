import dynamic from "next/dynamic";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ExperienceCards } from "@/components/site/ExperienceCards";

const Services = dynamic(() => import("@/components/site/Services").then((m) => ({ default: m.Services })));
const About = dynamic(() => import("@/components/site/About").then((m) => ({ default: m.About })));
const Founders = dynamic(() => import("@/components/site/Founders").then((m) => ({ default: m.Founders })));
const WhyUs = dynamic(() => import("@/components/site/WhyUs").then((m) => ({ default: m.WhyUs })));
const Footer = dynamic(() => import("@/components/site/Footer").then((m) => ({ default: m.Footer })));
const ScrollProgress = dynamic(
  () => import("@/components/site/ScrollProgress").then((m) => ({ default: m.ScrollProgress })),
  { ssr: false }
);
const WhatsAppFab = dynamic(
  () => import("@/components/site/WhatsAppFab").then((m) => ({ default: m.WhatsAppFab })),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ExperienceCards />
      <Services />
      <About />
      <Founders />
      <WhyUs />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
