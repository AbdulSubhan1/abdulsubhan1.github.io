import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({ variable: "--font-schibsted", subsets: ["latin"] });
const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Abdul Subhan | Frontend and full-stack engineer",
  description:
    "Frontend and full-stack engineer shipping bilingual (English and Arabic) Next.js products for insurtech in the UAE and Bahrain: purchase journeys, CRMs with role-based access, and AI developer tooling.",
  openGraph: {
    title: "Abdul Subhan | Frontend and full-stack engineer",
    description: "Bilingual Next.js products for the UAE and Bahrain: purchase journeys, CRMs and AI tooling.",
    url: "https://abdulsubhan1.github.io",
    images: ["/policydesk-dashboard.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${schibsted.variable} ${plexArabic.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
