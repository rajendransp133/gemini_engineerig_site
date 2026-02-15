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
  title: "PSC & RCC Poles Tamilnadu | TNEB Approved | Gemini Engineering Works",
  description:
    "TNEB approved PSC & RCC poles in Tamilnadu. Gemini Engineering Works, Pudukkottai. Manufacturer since 1999. 9m RCC, 8m-9m PSC poles. Bulk orders. Call +91 63744 48522.",
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
    // Concrete pole variations
    "buy concrete pole tamil nadu",
    "buy concrete poles tamilnadu",
    "concrete pole manufacturers tamilnadu",
    "concrete poles TamilNadu",
    // Order variations
    "order psc pole tamilnadu",
    "order psc pole tamil nadu",
    "order rcc pole tamilnadu",
    "order rcc pole tamil nadu",
    "where to buy psc pole tamilnadu",
    "where to buy rcc pole tamil nadu",
    // For sale variations
    "rcc pole for sale",
    "psc pole for sale",
    "rcc poles for sale tamil nadu",
    "rcc poles for sale tamilnadu",
    "psc poles for sale tamil nadu",
    "psc poles for sale tamilnadu",
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
      "Buy PSC & RCC Poles in Tamil Nadu | TNEB Approved | Gemini Engineering Works",
    description:
      "Buy PSC poles (PSCC) and RCC poles in Tamil Nadu. TNEB approved manufacturer in Pudukkottai since 1999. Supplying Chennai, Coimbatore, Madurai, Trichy & all districts. Wholesale & bulk orders welcome.",
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
