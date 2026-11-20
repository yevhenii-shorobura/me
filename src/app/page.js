import { NavigationBar } from "../../components/navigation-bar";
import { HeroComponent } from "../../components/hero-component";
import { AboutSection } from "../../components/about-section";
import { ShoradoSection } from "../../components/shorado-section";
import { BuildSection } from "../../components/build-section";
import { StackSection } from "../../components/stack-section";
import { LabSection } from "../../components/lab-section";
import { PathSection } from "../../components/path-section";
import { ContactSection } from "../../components/contact-section";
import { ASCIIBlackHoleComponent } from "../../features/acsii-black-hole";
import { LanguageProvider } from "../lib/language-context";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#050102] text-white selection:bg-accent selection:text-white">
        <ASCIIBlackHoleComponent fontSize={8} maxZoom={18.5} scrollHeight="auto">
          <NavigationBar />
          <HeroComponent />
          <AboutSection />
          <ShoradoSection />
          <BuildSection />
          <StackSection />
          <LabSection />
          <PathSection />
          <ContactSection />
        </ASCIIBlackHoleComponent>
      </main>
    </LanguageProvider>
  );
}
