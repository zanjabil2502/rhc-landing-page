import { ADDRESS } from "@/lib/site";

export type FaqId = "umum" | "program" | "daftar";
export type FaqGroup = { id: FaqId; label: string; items: { q: string; a: string }[] };

// Satu sumber data FAQ: dipakai tampilan (FaqTabs) dan JSON-LD FAQPage, jadi isinya selalu sama.
export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "umum",
    label: "Umum",
    items: [
      { q: "Siapa yang mengajar anak saya?", a: "Tentor kami minimal lulusan S1, menguasai mapel SD & SMP, serta dipilih karena sabar, ramah, menyukai anak-anak, bertanggung jawab, disiplin, dan komunikatif." },
      { q: "Apakah orang tua mendapat kabar perkembangan anak?", a: "Ya. Tentor memberikan laporan perkembangan belajar siswa, sehingga Anda bisa memantau kemajuan anak." },
      { q: "Di mana lokasi RH Cemerlang?", a: `Rumah belajar kami berada di ${ADDRESS}.` },
    ],
  },
  {
    id: "program",
    label: "Program",
    items: [
      { q: "Untuk jenjang dan mapel apa saja?", a: "SD dan SMP (kelas 1 sampai 9). Kelas 3-6 SD mendapat pendampingan mapel umum, Kelas 7-9 SMP fokus Matematika, Bahasa Inggris, dan IPA. Ada juga Calistung dan persiapan TKA." },
      { q: "Apakah anak dibantu mengerjakan PR?", a: "Ya. Tentor membantu anak memahami materi dan mengerjakan PR dari sekolah." },
      { q: "Apa beda kelas Reguler dan Privat?", a: "Kelas Reguler belajar bersama teman dalam kelompok, sedangkan kelas Privat didampingi satu tentor secara khusus. Admin akan membantu memilih yang paling cocok." },
    ],
  },
  {
    id: "daftar",
    label: "Pendaftaran",
    items: [
      { q: "Berapa biaya dan bagaimana jadwalnya?", a: "Biaya dan jadwal menyesuaikan program serta pilihan kelas. Hubungi admin lewat WhatsApp untuk informasi lengkap." },
      { q: "Apa saja yang perlu disiapkan?", a: "Data anak (nama, usia, jenis kelamin, kelas), data orang tua/wali (nama, nomor WhatsApp, alamat), serta program dan pilihan kelas yang diinginkan." },
      { q: "Apakah konsultasi dikenakan biaya?", a: "Tidak. Konsultasi lewat WhatsApp gratis dan tanpa kewajiban mendaftar." },
    ],
  },
];
