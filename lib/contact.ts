export const CONTACT = {
  company: "LN Associate",
  tagline: "Your Reliance, Our Assurance",
  phones: [
    { label: "Primary", number: "+91 98989 53563", href: "tel:+919898953563" },
    { label: "Secondary", number: "+91 90997 81323", href: "tel:+919099781323" },
  ],
  email: "info@lnassociate.com",
  whatsapp: {
    number: "+91 98989 53563",
    href: "https://wa.me/919898953563",
  },
  address: {
    lines: [
      "B1102 Sivanta One",
      "Opposite Nalli Sarees, Pritamnagar",
      "Near Paldi Cross Roads",
      "Ahmedabad, Gujarat – 380007",
    ],
    short: "Paldi, Ahmedabad, Gujarat 380007",
    mapsEmbed:
      "https://www.google.com/maps?q=Sivanta+One+B-1102,+opp.+Nalli+Saree,+Pritam+Nagar,+Paldi,+Ahmedabad,+Gujarat+380007&hl=en&z=17&output=embed",
    mapsLink:
      "https://www.google.com/maps/place/LN+Associate/@23.013,72.567,17z",
  },
  hours: [
    { day: "Monday – Friday", time: "10:00 AM – 7:00 PM" },
    { day: "Saturday", time: "10:00 AM – 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    twitter: "https://x.com/AssociateLn",
    facebook: "https://www.facebook.com/share/1Bf4igPsxN/",
    instagram: "https://www.instagram.com/ln_associate",
    linkedin: "https://www.linkedin.com/in/ln-associate-7392a7184/",
  },
  rating: { stars: 4.8, reviews: 23 },
};

export const SERVICE_OPTIONS = [
  "Business Registration",
  "Accounting & Finalization",
  "GST Services",
  "Income Tax",
  "Audit",
  "Finance & Loans",
  "Payroll",
  "Other",
] as const;
