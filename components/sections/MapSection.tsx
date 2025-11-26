'use client';

import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/LanguageContext';

const NomadMap = dynamic(() => import('@/components/NomadMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-slate-600 border-t-orange-500 rounded-full animate-spin"></div>
        <p className="text-white text-sm">Loading Map...</p>
      </div>
    </div>
  ),
});

export default function MapSection() {
  const { language } = useLanguage();

  return (
    <section className="dark-section py-12 md:py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="h-[280px] md:h-[320px] rounded-xl overflow-hidden card-shadow animate-slide-up">
            <NomadMap />
          </div>
        </div>
      </div>
    </section>
  );
}

