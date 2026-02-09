import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import SpecialtiesSection from "../components/SpecialtiesSection";
import SupportSection from "../components/SupportSection";
import IntroSection from "../components/IntroSection";
import FaqSection from "../components/FaqSection";
import ProfessionalSection from "../components/ProfessionalSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import OurOfficeSection from "@/components/OurOfficeSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <SpecialtiesSection />
      <SupportSection />
      <OurOfficeSection />
      <IntroSection />
      <FaqSection />
      <ProfessionalSection />
      <CtaSection />
      <Footer /> 
    </>
  );
}
