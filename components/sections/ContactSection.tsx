'use client';

import Card from '@/components/ui/Card';
import { useLanguage } from '@/lib/LanguageContext';

export default function ContactSection() {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-12 md:py-24 dark-section relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/8 rounded-full filter blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info Card */}
          <div className="bg-slate-800 p-8 rounded-xl text-center animate-slide-up">
            <p className="text-sm text-gray-400 mb-2">📧 {t.contact.email}</p>
            <a
              href="mailto:lfrangt.com@gmail.com"
              className="text-lg text-white hover:text-orange-400 transition-colors inline-block break-all"
            >
              lfrangt.com@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
