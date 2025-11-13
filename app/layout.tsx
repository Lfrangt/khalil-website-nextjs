import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Khalil - Cardano DApp Developer",
    template: "%s | Khalil"
  },
  description: "Personal portfolio of Khalil - Cardano DApp Developer, Computer Science Student, and Web3 Explorer. Passionate about blockchain technology, music, and movies.",
  keywords: ["Cardano", "DApp Developer", "Web3", "Blockchain", "Computer Science", "React", "Next.js"],
  authors: [{ name: "Khalil" }],
  creator: "Khalil",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    url: "https://khalil.dev",
    title: "Khalil - Cardano DApp Developer",
    description: "Personal portfolio of Khalil - Cardano DApp Developer, Computer Science Student, and Web3 Explorer",
    siteName: "Khalil Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalil - Cardano DApp Developer",
    description: "Personal portfolio of Khalil - Cardano DApp Developer, Computer Science Student, and Web3 Explorer",
    creator: "@wuhuaguor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
