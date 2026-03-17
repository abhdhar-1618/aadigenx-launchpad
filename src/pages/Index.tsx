import HeroSection from "@/components/HeroSection";
import WebinarSection from "@/components/WebinarSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import RegistrationSection from "@/components/RegistrationSection";
import TrustStrip from "@/components/TrustStrip";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WebinarSection />
      <AboutSection />
      <ScheduleSection />
      <RegistrationSection />
      <TrustStrip />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
