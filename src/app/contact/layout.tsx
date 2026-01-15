import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Electric Poles - Contact & Get Quote | Gemini Engineering Works",
  description:
    "Buy RCC & PSC electric poles online. Contact Gemini Engineering Works in Pudukkottai, Tamil Nadu for competitive pricing, bulk orders, and expert consultation. Purchase electric poles - Call +91 63744 48522 or email geminienggworks@gmail.com",
  keywords: [
    "buy electric pole",
    "buy rcc pole",
    "buy psc pole",
    "buy pole contact",
    "purchase electric pole",
    "order electric pole",
    "contact electric pole manufacturers",
    "get quote for PSC poles",
    "RCC pole suppliers contact",
    "TNEB pole quote",
    "bulk pole order",
    "Pudukkottai pole manufacturers contact",
    "where to buy rcc pole",
    "where to buy psc pole",
  ],
  openGraph: {
    title: "Contact Us - Gemini Engineering Works",
    description:
      "Get in touch with Gemini Engineering Works for high-quality PSC & RCC electric poles. Competitive pricing and timely delivery guaranteed.",
    url: "https://geminiengineeringworks.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://geminiengineeringworks.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
