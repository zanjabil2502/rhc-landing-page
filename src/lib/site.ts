// Data kontak & navigasi bersama untuk semua halaman.
export const WA_NUMBER = "6282257031533";
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
