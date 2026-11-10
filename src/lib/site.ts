// Data kontak, SEO & navigasi bersama untuk semua halaman.

// URL publik situs (dipakai canonical, sitemap, Open Graph, JSON-LD).
// Default domain produksi; bisa ditimpa lewat env NEXT_PUBLIC_SITE_URL (mis. untuk preview).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://rhc.web.id").replace(/\/$/, "");
export const SITE_NAME = "RH Cemerlang";
// ~155 karakter supaya tidak terpotong di hasil pencarian Google
export const SITE_DESCRIPTION =
  "Les privat & bimbel SD dan SMP di Banyuwangi: Calistung, Matematika, IPA, Bahasa Inggris, TKA. Tentor minimal S1 + laporan perkembangan. Konsultasi gratis.";

// Dasar Open Graph: metadata openGraph di halaman MENIMPA milik layout (bukan digabung), jadi disebar di tiap halaman.
export const OG_BASE = { type: "website", locale: "id_ID", siteName: "RH Cemerlang Rumah Belajar" } as const;

export const WA_NUMBER = "6282257031533";
export const PHONE_INTL = "+6282257031533";
export const STREET = "Jl. Kapten Ilyas No. 20";
export const CITY = "Banyuwangi";
export const WA_DISPLAY = "0822-5703-1533";
export const ADDRESS = "Jl. Kapten Ilyas No. 20, Banyuwangi";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);
export const WA_DAFTAR = "Halo admin RH Cemerlang, saya ingin konsultasi tentang les untuk anak saya.";

export const wa = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { href: "/#keunggulan", label: "Keunggulan" },
  { href: "/#pendampingan", label: "Pendampingan" },
  { href: "/#program", label: "Program" },
  { href: "/#metode", label: "Metode" },
  { href: "/#cocok", label: "Untuk Siapa" },
  { href: "/#cara-daftar", label: "Cara Daftar" },
  { href: "/#faq", label: "FAQ" },
  { href: "/karir", label: "Karier" },
];
