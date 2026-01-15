import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://geminiengineeringworks.in/"), // Update with your actual domain
  title: {
    default:
      "Buy RCC & PSC Electric Poles Online | Gemini Engineering Works - Pudukkottai, Tamil Nadu",
    template: "%s | Gemini Engineering Works",
  },
  description:
    "Buy RCC & PSC electric poles online from Gemini Engineering Works in Pudukkottai, Tamil Nadu. Leading manufacturer since 1999. Purchase high-quality poles with competitive pricing. Order RCC poles (9m, 150kg), PSC poles (8m-9m, 200-300kg), and RCC base plates. Bulk orders welcome. Call +91 63744 48522.",
  keywords: [
    "buy rcc pole",
    "buy psc pole",
    "buy electric pole",
    "buy pole",
    "buy rcc poles online",
    "buy psc poles online",
    "purchase rcc pole",
    "purchase psc pole",
    "purchase electric pole",
    "order rcc pole",
    "order psc pole",
    "order electric pole",
    "where to buy rcc pole",
    "where to buy psc pole",
    "where to buy electric pole",
    "rcc pole for sale",
    "psc pole for sale",
    "electric pole for sale",
    "PSC pole manufacturers",
    "RCC pole manufacturers",
    "electric pole manufacturers",
    "TNEB pole suppliers",
    "Pudukkottai pole manufacturers",
    "Tamil Nadu pole manufacturers",
    "concrete pole manufacturers",
    "electricity pole suppliers",
    "infrastructure pole manufacturers",
    "RCC base plate manufacturers",
    "9m RCC poles",
    "8m PSC poles",
    "9m PSC poles",
    "Gemini Engineering Works",
    "pole manufacturing company",
    "electric pole casting yard",
  ],
  authors: [{ name: "Gemini Engineering Works" }],
  creator: "Gemini Engineering Works",
  publisher: "Gemini Engineering Works",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://geminiengineeringworks.in/", // Update with your actual domain
    siteName: "Gemini Engineering Works",
    title: "Buy RCC & PSC Electric Poles Online | Gemini Engineering Works",
    description:
      "Buy RCC & PSC electric poles online from Gemini Engineering Works. Leading manufacturer since 1999. Purchase high-quality poles with competitive pricing. Bulk orders welcome.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Gemini Engineering Works - PSC & RCC Electric Pole Manufacturers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy RCC & PSC Electric Poles Online | Gemini Engineering Works",
    description:
      "Buy RCC & PSC electric poles online. Leading manufacturer since 1999. Purchase high-quality poles with competitive pricing.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://geminiengineeringworks.in/", // Update with your actual domain
  },
  category: "Manufacturing",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
