import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Hero from "./components/Hero";
import WelcomeSection from "./components/WelcomeSection";
import OurMissionVisionSection from "./components/OurMissionVisionSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProductsSection from "./components/ProductsSection";
import TNEBPoleSection from "./components/TNEBPoleSection";
import Experience from "./components/Experience";
import GetQuote from "./GetQuote";
import ContactUs from "./components/ContactUs";
import Footer from "./ui/Footer";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  title:
    "Buy RCC Pole & PSC Pole in TamilNadu (TN) | Buy Electric Poles & Base Plate | Gemini Engineering Works",
  description:
    "Buy RCC pole, PSC pole, electric poles & base plate in TamilNadu (TN). TNEB approved manufacturer since 1999. Buy 9m RCC poles, 8m-9m PSC poles & baseplates in Tamilnadu. Gemini Engineering Works, Pudukkottai. Bulk orders welcome. Call +91 63744 48522.",
  keywords: [
    // BUY - Primary target keywords (highest priority)
    "buy rcc pole tamilnadu",
    "buy rcc pole tamil nadu",
    "buy rcc pole TN",
    "buy psc pole tamilnadu",
    "buy psc pole tamil nadu",
    "buy psc pole TN",
    "buy electric pole tamilnadu",
    "buy electric pole tamil nadu",
    "buy electric pole TN",
    "buy electric poles tamilnadu",
    "buy electric poles tamil nadu",
    "buy electric poles TN",
    "buy baseplate tamilnadu",
    "buy baseplate tamil nadu",
    "buy baseplate TN",
    "buy base plate tamilnadu",
    "buy base plate tamil nadu",
    "buy base plate TN",
    // BUY RCC pole - all variations
    "buy rcc pole",
    "buy rcc poles",
    "buy rcc pole TamilNadu",
    "buy rcc pole Tamilnadu",
    "buy rcc poles tamil nadu",
    "buy rcc poles tamilnadu",
    "buy rcc poles TamilNadu",
    "buy rcc poles TN",
    "buy rcc poles online",
    "buy rcc poles in tamil nadu",
    "buy rcc poles in tamilnadu",
    "buy rcc pole online tamilnadu",
    "rcc pole buy tamilnadu",
    "rcc pole suppliers tamil nadu",
    "rcc pole suppliers tamilnadu",
    "rcc poles tamilnadu",
    "rcc poles TamilNadu",
    "rcc pole price tamil nadu",
    "rcc pole price tamilnadu",
    // BUY PSC pole - all variations
    "buy psc pole",
    "buy psc poles",
    "buy psc pole TamilNadu",
    "buy psc pole Tamilnadu",
    "buy psc poles tamil nadu",
    "buy psc poles tamilnadu",
    "buy psc poles TamilNadu",
    "buy psc poles TN",
    "buy psc poles online",
    "buy psc poles in tamil nadu",
    "buy psc poles in tamilnadu",
    "buy psc pole online tamilnadu",
    "psc pole buy tamilnadu",
    "psc pole suppliers tamil nadu",
    "psc pole suppliers tamilnadu",
    "psc poles tamilnadu",
    "psc poles TamilNadu",
    "psc pole price tamil nadu",
    "psc pole price tamilnadu",
    // BUY Electric pole - all variations
    "buy electric pole",
    "buy electric poles",
    "buy electric pole TamilNadu",
    "buy electric poles tamil nadu",
    "buy electric poles tamilnadu",
    "buy electric poles TamilNadu",
    "buy electric poles online tamilnadu",
    "electric pole buy tamil nadu",
    "electric pole manufacturers tamil nadu",
    "electric pole manufacturers tamilnadu",
    "electric pole manufacturers TamilNadu",
    // BUY Baseplate - all variations
    "buy baseplate",
    "buy baseplates tamilnadu",
    "buy base plate",
    "buy base plates tamilnadu",
    "buy base plates tamil nadu",
    "buy baseplate for electric pole",
    "buy baseplate for pole tamilnadu",
    "buy pole baseplate TN",
    "buy rcc baseplate tamilnadu",
    "buy concrete baseplate tamilnadu",
    "baseplate for electric pole tamilnadu",
    "baseplate supplier tamilnadu",
    "baseplate manufacturer tamil nadu",
    "electric pole baseplate price tamilnadu",
    "pole foundation plate buy tamilnadu",
    // Concrete pole variations
    "buy concrete pole tamil nadu",
    "buy concrete poles tamilnadu",
    "concrete pole manufacturers tamilnadu",
    "concrete poles TamilNadu",
    // PURCHASE variants
    "purchase psc pole tamilnadu",
    "purchase rcc pole tamilnadu",
    "purchase electric pole tamilnadu",
    "purchase baseplate tamilnadu",
    // Order variations
    "order psc pole tamilnadu",
    "order rcc pole tamilnadu",
    "order electric pole tamilnadu",
    "order baseplate tamilnadu",
    "where to buy psc pole tamilnadu",
    "where to buy rcc pole tamilnadu",
    "where to buy electric pole tamilnadu",
    "where to buy baseplate tamilnadu",
    // For sale variations
    "rcc pole for sale tamilnadu",
    "psc pole for sale tamilnadu",
    "electric pole for sale tamilnadu",
    "baseplate for sale tamilnadu",
    "rcc poles for sale tamil nadu",
    "psc poles for sale tamil nadu",
    // Manufacturers and suppliers - ALL spellings
    "PSC pole manufacturers Pudukkottai",
    "RCC pole manufacturers Tamil Nadu",
    "PSC pole manufacturers tamilnadu",
    "PSC pole manufacturers TamilNadu",
    "RCC pole manufacturers tamilnadu",
    "RCC pole manufacturers TamilNadu",
    "TNEB pole suppliers",
    "TNEB pole suppliers tamilnadu",
    "electric pole manufacturers India",
    "concrete pole casting yard",
    "infrastructure pole suppliers tamilnadu",
    // Price related keywords
    "psc pole price tamilnadu",
    "rcc pole price tamil nadu",
    "electric pole price tamilnadu",
    // Best/Top variations
    "best psc pole manufacturers tamil nadu",
    "best rcc pole suppliers tamilnadu",
    "top electric pole manufacturers TamilNadu",
    // TN abbreviation variants
    "buy psc pole TN",
    "buy psc poles TN",
    "buy rcc pole TN",
    "buy rcc poles TN",
    "buy electric pole TN",
    "psc pole manufacturers TN",
    "rcc pole manufacturers TN",
    "electric pole suppliers TN",
    "psc pole price TN",
    "rcc pole price TN",
    "TNEB pole manufacturers TN",
    "buy base plate TN",
    // TANGEDCO keywords (current name of TNEB)
    "TANGEDCO pole suppliers",
    "TANGEDCO pole manufacturers",
    "TANGEDCO approved pole manufacturer",
    "TANGEDCO approved PSC pole",
    "TANGEDCO approved RCC pole",
    "TANGEDCO pole suppliers tamilnadu",
    "TANGEDCO pole price",
    "TANGEDCO standard electric pole",
    // Local Tamil terms (high local intent)
    "current kambam",
    "minsara kambam",
    "current pole tamilnadu",
    "current pole manufacturer",
    "EB pole tamilnadu",
    "EB pole manufacturers tamil nadu",
    "EB pole supplier",
    "buy EB pole tamilnadu",
    "EB pole price",
    // Government scheme keywords
    "DDUGJY poles supplier tamilnadu",
    "Saubhagya scheme poles",
    "rural electrification scheme poles",
    "RGGVY poles supplier tamil nadu",
    "PM KUSUM scheme poles",
    "government tender electric poles tamilnadu",
    "TNEB tender pole supplier",
    "TANGEDCO tender pole manufacturer",
    // Nearby district keywords
    "PSC pole Thanjavur",
    "RCC pole Thanjavur",
    "electric pole Thanjavur",
    "PSC pole Sivagangai",
    "RCC pole Sivagangai",
    "PSC pole Dindigul",
    "RCC pole Dindigul",
    "PSC pole Karur",
    "RCC pole Karur",
    "PSC pole Ramanathapuram",
    "RCC pole Ramanathapuram",
    "PSC pole Nagapattinam",
    "RCC pole Nagapattinam",
    "PSC pole Ariyalur",
    "RCC pole Ariyalur",
    "PSC pole Perambalur",
    "electric pole Erode",
    "PSC pole Theni",
    "electric pole Thoothukudi",
    "RCC pole Virudhunagar",
    "PSC pole Cuddalore",
    "RCC pole Villupuram",
    "PSC pole Kanchipuram",
    "electric pole Tiruvannamalai",
    // Neighbouring state keywords
    "PSC pole Kerala",
    "RCC pole Kerala",
    "electric pole supplier Kerala",
    "PSC pole Karnataka",
    "RCC pole Karnataka",
    "buy PSC pole Pondicherry",
    "RCC pole Puducherry",
    "electric pole supplier Andhra Pradesh",
    // Comparison & informational keywords
    "PSC pole vs RCC pole",
    "difference between PSC and RCC pole",
    "which is better PSC or RCC pole",
    "concrete pole vs steel pole",
    "PSC pole advantages",
    "RCC pole advantages",
    "PSC pole lifespan",
    "RCC pole lifespan",
    // Cost & budget keywords
    "cheapest electric pole tamilnadu",
    "affordable PSC pole tamil nadu",
    "low cost RCC pole tamilnadu",
    "electric pole cost per unit",
    "PSC pole price per piece",
    "RCC pole rate per piece",
    "electric pole price list 2026",
    "PSC pole price list 2026",
    "RCC pole rate list tamilnadu",
    "bulk pole price tamilnadu",
    "wholesale electric pole price",
    // Application-specific keywords
    "highway lighting pole manufacturer",
    "11kv line poles",
    "33kv line poles",
    "440v line poles",
    "transformer pole tamilnadu",
    "electricity distribution pole",
    // Long-tail question keywords
    "how much does an electric pole cost in tamil nadu",
    "how to buy electric pole in tamilnadu",
    "who manufactures electric poles in tamil nadu",
    "electric pole manufacturer near pudukkottai",
    "best electric pole company in tamilnadu",
    "what is the price of 9m PSC pole",
    // Common misspellings & alternate terms
    "buy PCC pole tamilnadu",
    "buy PCC poles tamil nadu",
    "cement pole tamilnadu",
    "buy cement pole tamil nadu",
    "cement pole manufacturer",
    "buy cement pole",
  ],
  openGraph: {
    title:
      "Buy RCC Pole, PSC Pole, Electric Poles & Base Plate in Tamil Nadu (TN) | Gemini Engineering Works",
    description:
      "Buy RCC poles, PSC poles, electric poles & baseplates in Tamil Nadu (TN). TNEB approved manufacturer in Pudukkottai since 1999. Supplying Chennai, Coimbatore, Madurai, Trichy & all TN districts. Wholesale & bulk orders welcome.",
    url: "https://geminiengineeringworks.in",
    type: "website",
    images: [
      {
        url: "https://geminiengineeringworks.in/logo.webp",
        width: 1200,
        height: 630,
        alt: "Gemini Engineering Works - PSC & RCC Electric Pole Manufacturers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://geminiengineeringworks.in/logo.webp"],
  },
  alternates: {
    canonical: "https://geminiengineeringworks.in",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <div>
        {/* Hiring Banner */}
        <a
          href="/jobopening"
          className="flex items-center justify-center gap-1.5 bg-[#eba10e] text-white font-semibold py-2 px-4 hover:bg-amber-600 transition-colors duration-200 whitespace-nowrap overflow-hidden"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse flex-shrink-0" />
          <span className="text-xs sm:text-sm truncate">
            <span className="hidden sm:inline">We&apos;re Hiring! Site Engineer position open — </span>
            <span className="sm:hidden">We&apos;re Hiring! — </span>
            Apply Now →
          </span>
        </a>
        <Navbar />
        <Hero />
        <section id="about" aria-label="About Gemini Engineering Works">
          <WelcomeSection />
        </section>
        <GetQuote />
        <OurMissionVisionSection />
        <WhyChooseUs />
        <section id="products" aria-label="Our Products">
          <ProductsSection />
        </section>
        <TNEBPoleSection />
        <Experience />
        <section id="contact" aria-labelledby="contact-heading">
          <ContactUs />
        </section>
        <Footer />
      </div>
    </>
  );
}
