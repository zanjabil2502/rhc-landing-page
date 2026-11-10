"use client";

import { useState } from "react";
import { BookOpen, ClipboardList, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ADDRESS } from "@/lib/site";
import { cn } from "@/lib/utils";

// ponytail: FAQ dibagi per kategori supaya tidak memanjang; 3 pertanyaan per tab.
const GROUPS = [
  {
    id: "umum",
    label: "Umum",
    icon: Users,
    items: [
      { q: "Siapa yang mengajar anak saya?", a: "Tentor kami minimal lulusan S1, menguasai mapel SD & SMP, serta dipilih karena sabar, ramah, menyukai anak-anak, bertanggung jawab, disiplin, dan komunikatif." },
      { q: "Apakah orang tua mendapat kabar perkembangan anak?", a: "Ya. Tentor memberikan laporan perkembangan belajar siswa, sehingga Anda bisa memantau kemajuan anak." },
      { q: "Di mana lokasi RH Cemerlang?", a: `Rumah belajar kami berada di ${ADDRESS}.` },
    ],
  },
  {
    id: "program",
    label: "Program",
    icon: BookOpen,
    items: [
      { q: "Untuk jenjang dan mapel apa saja?", a: "SD dan SMP (kelas 1 sampai 9). Kelas 3-6 SD mendapat pendampingan mapel umum, Kelas 7-9 SMP fokus Matematika, Bahasa Inggris, dan IPA. Ada juga Calistung dan persiapan TKA." },
      { q: "Apakah anak dibantu mengerjakan PR?", a: "Ya. Tentor membantu anak memahami materi dan mengerjakan PR dari sekolah." },
      { q: "Apa beda kelas Reguler dan Privat?", a: "Kelas Reguler belajar bersama teman dalam kelompok, sedangkan kelas Privat didampingi satu tentor secara khusus. Admin akan membantu memilih yang paling cocok." },
    ],
  },
  {
    id: "daftar",
    label: "Pendaftaran",
    icon: ClipboardList,
    items: [
      { q: "Berapa biaya dan bagaimana jadwalnya?", a: "Biaya dan jadwal menyesuaikan program serta pilihan kelas. Hubungi admin lewat WhatsApp untuk informasi lengkap." },
      { q: "Apa saja yang perlu disiapkan?", a: "Data anak (nama, usia, jenis kelamin, kelas), data orang tua/wali (nama, nomor WhatsApp, alamat), serta program dan pilihan kelas yang diinginkan." },
      { q: "Apakah konsultasi dikenakan biaya?", a: "Tidak. Konsultasi lewat WhatsApp gratis dan tanpa kewajiban mendaftar." },
    ],
  },
];

export function FaqTabs() {
  const [tab, setTab] = useState(GROUPS[0].id);
  const group = GROUPS.find((g) => g.id === tab)!;

  return (
    <div data-reveal>
      <div role="tablist" aria-label="Kategori pertanyaan" className="mx-auto mb-6 flex w-fit gap-1 rounded-full border-2 border-line bg-white p-1">
        {GROUPS.map(({ id, label, icon: Icon }) => {
          const active = id === tab;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`faq-tab-${id}`}
              aria-selected={active}
              aria-controls="faq-panel"
              onClick={() => setTab(id)}
              className={cn(
                "inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-extrabold transition-all sm:px-5 sm:text-base",
                active ? "bg-navy text-white shadow-[0_3px_0_var(--color-navy-700)]" : "text-navy hover:bg-cream-deep",
              )}
            >
              <Icon className="hidden size-4 sm:block" /> {label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id="faq-panel" aria-labelledby={`faq-tab-${tab}`}>
        {/* key memaksa remount supaya animasi masuk berjalan & item tertutup saat ganti tab */}
        <Accordion key={tab} className="gap-3">
          {group.items.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={f.q}
              style={{ animationDelay: `${i * 70}ms` }}
              className="animate-fade-up rounded-2xl border-2 border-line bg-white px-5 not-last:border-b-2 hover:border-brand-yellow"
            >
              <AccordionTrigger className="py-4 font-heading text-lg font-bold text-navy hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
