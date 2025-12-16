import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WelcomeSection from "./components/WelcomeSection";
import OurMissionVisionSection from "./components/OurMissionVisionSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Experience from "./components/Experience";
import GetQuote from "./GetQuote";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <OurMissionVisionSection />
      <WhyChooseUs />
      <Experience />
      <GetQuote />
      <ContactUs />
    </div>
  );
}
