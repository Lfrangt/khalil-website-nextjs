'use client';

import Card from '@/components/ui/Card';
import { useLanguage } from '@/lib/LanguageContext';
import dynamic from 'next/dynamic';

// Dynamically import SimpleMap to avoid SSR issues with Mapbox
const SimpleMap = dynamic(() => import('@/components/SimpleMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] md:h-[500px] bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-sm md:text-base text-gray-600">Loading map...</p>
      </div>
    </div>
  ),
});

export default function ContactSection() {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Contact Info Card */}
          <Card>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">{t.contact.email}</span>
                </p>
                <a
                  href="mailto:lfrangt.com@gmail.com"
                  className="text-xl text-gray-900 hover:text-gray-600 transition-colors inline-block break-all"
                >
                  lfrangt.com@gmail.com
                </a>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">{t.contact.location}</span>
                </p>
                <p className="text-xl text-gray-900 mt-2">
                  {t.contact.locationValue}
                </p>
              </div>

              {/* Social Media Links */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 mb-4">
                  {language === 'zh' ? '或通过社交媒体联系我' : 'Or reach me on social media'}
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/lfrangt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all text-sm border border-gray-200 card-shadow"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  <a
                    href="https://twitter.com/wuhuaguor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all text-sm border border-gray-200 card-shadow"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </a>
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all text-sm border border-gray-200 card-shadow group relative"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01.181-.556c1.545-1.25 2.5-3.02 2.5-4.896 0-3.594-3.326-6.477-7.419-6.842l-.644-.002zm-2.71 2.171c.585 0 1.055.48 1.055 1.07 0 .591-.47 1.07-1.055 1.07-.583 0-1.054-.479-1.054-1.07 0-.59.47-1.07 1.054-1.07zm5.53 0c.586 0 1.055.48 1.055 1.07 0 .591-.469 1.07-1.054 1.07-.583 0-1.054-.479-1.054-1.07 0-.59.47-1.07 1.054-1.07z"/>
                    </svg>
                    WeChat
                    <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Khalil6669
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Map */}
          <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden card-shadow">
            <SimpleMap />
          </div>
        </div>
      </div>
    </section>
  );
}
