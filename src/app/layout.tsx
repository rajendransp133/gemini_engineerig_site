import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://geminiengineeringworks.in/"),
  title: {
    default:
      "Buy PSC & RCC Poles in Tamil Nadu | Gemini Engineering Works, Pudukkottai",
    template: "%s | Gemini Engineering Works",
  },
  description:
    "Buy PSC poles and RCC poles in Tamil Nadu from Gemini Engineering Works, Pudukkottai. Leading manufacturer since 1999. Order RCC poles (9m, 150kg), PSC poles (8m-9m, 200-300kg) in Tamilnadu. TNEB approved supplier. Bulk orders welcome. Call +91 63744 48522.",
  keywords: [
    // PURCHASE - Primary target keywords (placed first for relevance)
    "purchase psc pole tamilnadu",
    "purchase psc pole tamil nadu",
    "purchase psc pole TamilNadu",
    "purchase psc poles tamilnadu",
    "purchase psc poles tamil nadu",
    "purchase rcc pole tamilnadu",
    "purchase rcc pole tamil nadu",
    "purchase rcc poles tamilnadu",
    "purchase electric pole tamilnadu",
    "purchase electric pole tamil nadu",
    "purchase concrete pole tamilnadu",
    // PSC pole - buy variations with ALL location spellings
    "buy psc pole",
    "buy psc poles",
    "buy psc pole tamil nadu",
    "buy psc pole tamilnadu",
    "buy psc pole TamilNadu",
    "buy psc pole Tamilnadu",
    "buy psc poles tamil nadu",
    "buy psc poles tamilnadu",
    "buy psc poles TamilNadu",
    "buy psc poles online",
    "buy psc poles in tamil nadu",
    "buy psc poles in tamilnadu",
    "psc pole suppliers tamil nadu",
    "psc pole suppliers tamilnadu",
    "psc poles tamilnadu",
    "psc poles TamilNadu",
    "psc pole price tamil nadu",
    "psc pole price tamilnadu",
    // RCC pole - buy variations with ALL location spellings
    "buy rcc pole",
    "buy rcc poles",
    "buy rcc pole tamil nadu",
    "buy rcc pole tamilnadu",
    "buy rcc pole TamilNadu",
    "buy rcc pole Tamilnadu",
    "buy rcc poles tamil nadu",
    "buy rcc poles tamilnadu",
    "buy rcc poles TamilNadu",
    "buy rcc poles online",
    "buy rcc poles in tamil nadu",
    "buy rcc poles in tamilnadu",
    "rcc pole suppliers tamil nadu",
    "rcc pole suppliers tamilnadu",
    "rcc poles tamilnadu",
    "rcc poles TamilNadu",
    "rcc pole price tamil nadu",
    "rcc pole price tamilnadu",
    // Electric pole variations
    "buy electric pole",
    "buy electric poles tamil nadu",
    "buy electric pole tamilnadu",
    "buy electric pole TamilNadu",
    "electric pole manufacturers tamil nadu",
    "electric pole manufacturers tamilnadu",
    "electric pole manufacturers TamilNadu",
    "electric poles tamilnadu",
    "electric poles TamilNadu",
    // Concrete pole variations
    "buy concrete pole tamil nadu",
    "buy concrete poles tamilnadu",
    "concrete pole manufacturers tamil nadu",
    "concrete pole suppliers tamilnadu",
    "concrete poles TamilNadu",
    // Order variations
    "order psc pole tamilnadu",
    "order psc pole tamil nadu",
    "order rcc pole tamilnadu",
    "order rcc pole tamil nadu",
    "order electric pole tamilnadu",
    "where to buy psc pole tamilnadu",
    "where to buy rcc pole tamil nadu",
    "where to buy electric pole tamilnadu",
    // For sale variations
    "rcc pole for sale",
    "psc pole for sale",
    "electric pole for sale",
    "rcc poles for sale tamil nadu",
    "rcc poles for sale tamilnadu",
    "psc poles for sale tamil nadu",
    "psc poles for sale tamilnadu",
    // Manufacturers and suppliers - ALL spellings
    "PSC pole manufacturers",
    "RCC pole manufacturers",
    "PSC pole manufacturers tamil nadu",
    "PSC pole manufacturers tamilnadu",
    "PSC pole manufacturers TamilNadu",
    "RCC pole manufacturers tamil nadu",
    "RCC pole manufacturers tamilnadu",
    "RCC pole manufacturers TamilNadu",
    "TNEB pole suppliers",
    "TNEB pole suppliers tamil nadu",
    "TNEB pole suppliers tamilnadu",
    "Pudukkottai pole manufacturers",
    "Tamil Nadu pole manufacturers",
    "TamilNadu pole manufacturers",
    "Tamilnadu pole manufacturers",
    "electricity pole suppliers tamilnadu",
    "infrastructure pole manufacturers",
    // Price related keywords
    "psc pole price",
    "rcc pole price",
    "electric pole price tamil nadu",
    "psc pole rate tamilnadu",
    "rcc pole rate tamil nadu",
    // Product specific
    "RCC base plate manufacturers",
    "RCC base plate tamil nadu",
    "9m RCC poles",
    "9m RCC poles tamilnadu",
    "8m PSC poles",
    "8m PSC poles tamil nadu",
    "9m PSC poles",
    "9m PSC poles tamilnadu",
    "Gemini Engineering Works",
    "pole manufacturing company tamil nadu",
    "electric pole casting yard tamilnadu",
    // Best/Top variations
    "best psc pole manufacturers tamil nadu",
    "best rcc pole suppliers tamilnadu",
    "top electric pole manufacturers TamilNadu",
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
    url: "https://geminiengineeringworks.in/",
    siteName: "Gemini Engineering Works",
    title: "Buy PSC & RCC Poles in Tamil Nadu | Gemini Engineering Works",
    description:
      "Buy PSC poles and RCC poles in Tamil Nadu from Gemini Engineering Works. Leading manufacturer since 1999 in Pudukkottai, Tamilnadu. TNEB approved. Bulk orders welcome.",
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
    title: "Buy PSC & RCC Poles in Tamil Nadu | Gemini Engineering Works",
    description:
      "Buy PSC poles and RCC poles in Tamil Nadu. Leading manufacturer since 1999 in Pudukkottai, Tamilnadu. TNEB approved.",
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
    icon: "/icon.ico",
    apple: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
