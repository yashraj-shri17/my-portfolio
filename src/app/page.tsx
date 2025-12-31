import AchievementsSection from "./Sections/AchievementsSection";
import CertificationsSection from "./Sections/CertificationsSection";
import ContactSection from "./Sections/ContactSection";
import CTABannerSection from "./Sections/CtaBannerSection";
import HeroSection from "./Sections/HeroSection";
import NeuralMindsSection from "./Sections/NeuralMindsSection";
import SkillsSection from "./Sections/SkillsSection";
import ProjectsSection from "./Sections/ProjectsSection";
import AboutMe from "./Sections/AboutMe";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-secondary space-y-20 md:space-y-32">
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <CertificationsSection />
      <div>
        <NeuralMindsSection />
        <CTABannerSection />
        <ContactSection />
      </div>
    </div>
  );
}
