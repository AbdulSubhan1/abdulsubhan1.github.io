import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Schibsted_Grotesk } from "next/font/google";
import Script from "next/script";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const schibsted = Schibsted_Grotesk({ variable: "--font-schibsted", subsets: ["latin"] });
const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Abdul Subhan | Frontend-focused full-stack engineer",
  description:
    "Frontend-focused full-stack engineer building bilingual (English and Arabic) Next.js products for insurtech in the UAE and Bahrain: purchase journeys, CRMs with role-based access, and AI developer tooling.",
  openGraph: {
    title: "Abdul Subhan | Frontend-focused full-stack engineer",
    description: "Bilingual Next.js products for the UAE and Bahrain: purchase journeys, CRMs and AI tooling.",
    url: "https://abdulsubhan1.github.io",
    images: ["/policydesk-dashboard.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${schibsted.variable} ${plexArabic.variable} font-sans antialiased`}>
        <SmoothScroll />
        {children}
        {/* Pulse, my own monitor: cookie-free page views, CV and WhatsApp clicks, browser errors */}
        <Script src="https://abdulsubhan-pulse.vercel.app/beacon.js" data-project="portfolio" strategy="afterInteractive" />
      </body>
    </html>
  );
}
