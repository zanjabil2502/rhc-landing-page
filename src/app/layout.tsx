import type { Metadata, Viewport } from "next";
import { Baloo_2, Caveat, Nunito } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-ui";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const baloo = Baloo_2({ variable: "--font-baloo", subsets: ["latin"], weight: ["600", "800"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["600", "700"] });

// Metadata default untuk semua halaman; tiap halaman menimpa title/description/canonical-nya sendiri.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Les Privat SD & SMP di Banyuwangi | RH Cemerlang",
    template: "%s | RH Cemerlang",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "education",
  keywords: [
    "les privat Banyuwangi",
    "bimbel Banyuwangi",
    "les SD Banyuwangi",
    "les SMP Banyuwangi",
    "les calistung Banyuwangi",
    "les matematika Banyuwangi",
    "les bahasa Inggris Banyuwangi",
    "persiapan TKA Banyuwangi",
    "rumah belajar Banyuwangi",
    "RH Cemerlang",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: `${SITE_NAME} Rumah Belajar`,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#fff8ec",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${baloo.variable} ${nunito.variable} ${caveat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
