import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import InterestsPreview from '@/components/sections/InterestsPreview';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <InterestsPreview />
      <ContactSection />
    </>
  );
}
