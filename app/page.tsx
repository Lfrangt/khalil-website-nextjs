'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import MapSection from '@/components/sections/MapSection';
import InterestsPreview from '@/components/sections/InterestsPreview';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  useEffect(() => {
    // 确保页面加载时从顶部开始
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <InterestsPreview />
      <MapSection />
      <ContactSection />
    </>
  );
}
