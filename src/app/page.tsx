import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WelcomeSection from "./components/WelcomeSection";
import OurMissionVisionSection from "./components/OurMissionVisionSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProductsSection from "./components/ProductsSection";
import TNEBPoleSection from "./components/TNEBPoleSection";
import Experience from "./components/Experience";
import GetQuote from "./GetQuote";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  title: "Buy PSC & RCC Poles in Tamil Nadu | Gemini Engineering Works, Pudukkottai",
  description:
    "Buy PSC poles and RCC poles in Tamil Nadu from Gemini Engineering Works, Pudukkottai. Leading manufacturer since 1999. Order RCC poles (9m, 150kg), PSC poles (8m-9m, 200-300kg) in Tamilnadu. TNEB approved supplier. Bulk orders welcome. Call +91 63744 48522.",
  keywords: [
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
    // Purchase and order variations
    "purchase rcc pole tamil nadu",
    "purchase psc pole tamilnadu",
    "order rcc pole tamil nadu",
    "order psc pole tamilnadu",
    "where to buy rcc pole tamil nadu",
    "where to buy psc pole tamilnadu",
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
  ],
  openGraph: {
    title: "Buy PSC & RCC Poles in Tamil Nadu | Gemini Engineering Works",
    description:
      "Buy PSC poles and RCC poles in Tamil Nadu from Gemini Engineering Works. Leading manufacturer since 1999 in Pudukkottai, Tamilnadu. TNEB approved. Bulk orders welcome.",
    url: "https://geminiengineeringworks.in",
    type: "website",
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
        <section id="contact" aria-label="Contact Us">
          <ContactUs />
        </section>
        <Footer />
      </div>
    </>
  );
}
