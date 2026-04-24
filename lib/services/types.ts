import type { LucideIcon } from "lucide-react";

export type ServiceProcessStep = {
  title: string;
  body: string;
};

export type ServiceFAQ = {
  q: string;
  a: string;
};

export type ServiceCTA = {
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export type ServiceHero = {
  eyebrow: string;
  headline: string;
  body: string;
};

export type ServiceDetail = {
  slug: string;
  icon: LucideIcon;
  title: string;
  tag: string;
  summary: string;
  hero: ServiceHero;
  highlights: string[];
  process: ServiceProcessStep[];
  idealFor: string[];
  faqs?: ServiceFAQ[];
  cta: ServiceCTA;
};

export type SectionTheme = "accounting" | "finance";
