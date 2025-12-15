import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WelcomeSection from "./components/WelcomeSection";
import OurMissionVisionSection from "./components/OurMissionVisionSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <OurMissionVisionSection />
    </div>
  );
}
