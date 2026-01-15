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
  title: "Buy RCC & PSC Electric Poles Online | Pudukkottai, Tamil Nadu",
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
    "PSC pole manufacturers Pudukkottai",
    "RCC pole manufacturers Tamil Nadu",
    "TNEB pole suppliers",
    "electric pole manufacturers India",
    "concrete pole casting yard",
    "infrastructure pole suppliers",
  ],
  openGraph: {
    title: "Buy RCC & PSC Electric Poles Online | Gemini Engineering Works",
    description:
      "Buy RCC & PSC electric poles online from Gemini Engineering Works. Leading manufacturer since 1999. Purchase high-quality poles with competitive pricing. Bulk orders welcome.",
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
