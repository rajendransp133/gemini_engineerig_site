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

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="about">
        <WelcomeSection />
      </section>
      <GetQuote />
      <OurMissionVisionSection />
      <WhyChooseUs />
      <section id="products">
        <ProductsSection />
      </section>
      <TNEBPoleSection />
      <Experience />
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}
