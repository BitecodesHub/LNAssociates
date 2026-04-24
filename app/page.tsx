import dynamic from "next/dynamic";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ExperienceCards } from "@/components/site/ExperienceCards";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const Services = dynamic(() => import("@/components/site/Services").then((m) => ({ default: m.Services })));
const About = dynamic(() => import("@/components/site/About").then((m) => ({ default: m.About })));
const Founders = dynamic(() => import("@/components/site/Founders").then((m) => ({ default: m.Founders })));
const WhyUs = dynamic(() => import("@/components/site/WhyUs").then((m) => ({ default: m.WhyUs })));
const Footer = dynamic(() => import("@/components/site/Footer").then((m) => ({ default: m.Footer })));

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
