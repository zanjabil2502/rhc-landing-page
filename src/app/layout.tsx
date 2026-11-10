import type { Metadata } from "next";
import { Baloo_2, Caveat, Nunito } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-ui";
import "./globals.css";

const baloo = Baloo_2({ variable: "--font-baloo", subsets: ["latin"], weight: ["600", "800"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["600", "700"] });

export const metadata: Metadata = {
  title: "RH Cemerlang | Les SD & SMP di Banyuwangi",
  description:
    "Rumah belajar SD & SMP di Banyuwangi: Calistung, Kelas 3-6, Kelas 7-9 (MTK, IPA, B. Inggris), dan persiapan TKA. Tentor minimal S1 dan laporan perkembangan belajar untuk orang tua. Konsultasi gratis via WhatsApp.",
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
