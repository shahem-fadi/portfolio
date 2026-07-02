import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { WorkSection } from '@/sections/WorkSection';
import { CertificationsSection } from '@/sections/CertificationsSection';

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground relative">
      <div className="noise-bg"></div>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
}
