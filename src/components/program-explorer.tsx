"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, MessageCircle, Sparkles, User, Users } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { wa } from "@/lib/site";
import { cn } from "@/lib/utils";

// Kelas 1-9 sesuai pilihan "Kelas Anak Saat Ini" di formulir pendaftaran.
const GRADES = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((g) => ({ value: g, label: g <= 6 ? `${g} SD` : `${g} SMP` }));

// ponytail: pemetaan kelas -> program. Calistung untuk kelas 1-2, TKA untuk kelas 6 & 9 (tahun ujian).
const PROGRAMS = [
  { tag: "A", title: "Calistung", grades: [1, 2], forWho: "Anak yang mulai belajar membaca, menulis, dan berhitung.", focus: ["Mengenal huruf & membaca", "Menulis", "Berhitung dasar"], img: "/images/prog-calistung.webp", tone: "orange" },
  { tag: "B", title: "Kelas 3-6 SD", grades: [3, 4, 5, 6], forWho: "Siswa SD kelas 3 sampai 6.", focus: ["Mapel umum sekolah", "Pendampingan PR", "Penguatan konsep dasar"], img: "/images/prog-sd.webp", tone: "teal" },
  { tag: "C", title: "Kelas 7-9 SMP", grades: [7, 8, 9], forWho: "Siswa SMP kelas 7 sampai 9.", focus: ["Matematika", "Bahasa Inggris", "IPA"], img: "/images/prog-smp.webp", tone: "yellow" },
  { tag: "D", title: "TKA", grades: [6, 9], forWho: "Siswa yang menyiapkan Tes Kemampuan Akademik.", focus: ["Latihan soal", "Pembahasan", "Strategi mengerjakan"], img: "/images/prog-tka.webp", tone: "purple" },
] as const;

const TONE = {
  orange: { ring: "border-brand-orange", tab: "bg-brand-orange text-white", dot: "text-brand-orange" },
  teal: { ring: "border-brand-teal", tab: "bg-brand-teal text-navy", dot: "text-brand-teal-600" },
  yellow: { ring: "border-brand-yellow", tab: "bg-brand-yellow text-navy", dot: "text-brand-yellow-600" },
  purple: { ring: "border-purple", tab: "bg-purple text-white", dot: "text-purple" },
};

const CLASS_TYPES = [
  { value: "Reguler", icon: Users, desc: "Belajar bersama teman dalam kelompok, suasananya seru dan anak terbiasa berdiskusi." },
  { value: "Privat", icon: User, desc: "Satu tentor fokus mendampingi satu anak, cocok untuk anak yang butuh perhatian lebih." },
] as const;

type ClassType = (typeof CLASS_TYPES)[number]["value"];

export function ProgramExplorer() {
  const [grade, setGrade] = useState<number | null>(null);
  const [type, setType] = useState<ClassType>("Reguler");

  const gradeLabel = GRADES.find((g) => g.value === grade)?.label;
  const matched = grade ? PROGRAMS.filter((p) => (p.grades as readonly number[]).includes(grade)) : [];
  const names = matched.map((p) => p.title).join(" dan ");
  const message = grade
    ? `Halo admin RH Cemerlang, anak saya kelas ${gradeLabel}. Saya tertarik program ${names} dengan kelas ${type}. Boleh minta info jadwal dan biayanya?`
    : `Halo admin RH Cemerlang, saya ingin tanya program les dengan kelas ${type} untuk anak saya.`;

  return (
    <>
      {/* Finder */}
      <div data-reveal className="mx-auto mb-12 max-w-4xl rounded-[2rem] border-[2.5px] border-navy/10 bg-white p-5 shadow-card sm:p-7">
        <div className="flex items-center gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-yellow text-navy">
            <Sparkles className="size-6" />
          </span>
          <div>
            <p className="font-heading text-xl font-extrabold text-navy md:text-2xl">Cari program yang pas</p>
            <p className="text-[15px] text-muted-foreground">Pilih kelas anak saat ini, kami tunjukkan programnya.</p>
          </div>
        </div>

        <div role="radiogroup" aria-label="Kelas anak saat ini" className="mt-5 flex flex-wrap gap-2">
          {GRADES.map((g) => {
            const active = grade === g.value;
            return (
              <button
                key={g.value}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setGrade(active ? null : g.value)}
                className={cn(
                  "h-11 min-w-[4.5rem] rounded-full border-2 px-4 font-extrabold transition-all active:scale-95",
                  active ? "border-navy bg-navy text-white shadow-[0_4px_0_var(--color-navy-700)]" : "border-line bg-cream text-navy hover:border-brand-orange hover:text-brand-orange",
                )}
              >
                {g.label}
              </button>
            );
          })}
        </div>

        <div role="radiogroup" aria-label="Pilihan kelas" className="mt-5 grid gap-3 sm:grid-cols-2">
          {CLASS_TYPES.map(({ value, icon: Icon, desc }) => {
            const active = type === value;
            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setType(value)}
                className={cn(
                  "flex gap-3 rounded-2xl border-2 p-4 text-left transition-all",
                  active ? "border-brand-teal bg-brand-teal/10" : "border-line bg-white hover:border-brand-teal/60",
                )}
              >
                <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl transition-colors", active ? "bg-brand-teal text-navy" : "bg-cream-deep text-navy/60")}>
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="flex items-center gap-2 font-heading text-lg font-extrabold text-navy">
                    Kelas {value}
                    {active && <span className="rounded-full bg-brand-teal px-2 py-0.5 text-[11px] font-bold text-navy">Dipilih</span>}
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-muted-foreground">{desc}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div aria-live="polite" className="mt-5 flex flex-col items-start gap-4 rounded-2xl bg-cream-deep p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] leading-snug text-navy">
            {grade ? (
              <>
                Untuk anak <b>kelas {gradeLabel}</b>, program yang cocok: <b className="text-brand-orange-600">{names}</b> (kelas {type}).
              </>
            ) : (
              <>Belum pilih kelas? Tidak apa-apa, admin kami siap membantu memilihkan.</>
            )}
          </p>
          <a
            href={wa(message)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "pop h-11 w-full shrink-0 rounded-full px-5 font-extrabold sm:w-auto")}
          >
            <MessageCircle className="size-5" /> {grade ? "Tanya program ini" : "Tanya admin"}
          </a>
        </div>
      </div>

      {/* Kartu program */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {PROGRAMS.map((p, i) => {
          const isMatch = matched.includes(p);
          const dimmed = grade !== null && !isMatch;
          return (
            <article
              key={p.title}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
              className={cn(
                "group relative flex flex-col rounded-3xl border-[2.5px] bg-white p-3 pt-7 shadow-card hover:-translate-y-2 hover:rotate-[-0.6deg]",
                TONE[p.tone].ring,
                isMatch && "scale-[1.03] ring-4 ring-brand-yellow ring-offset-2 ring-offset-cream-deep",
                dimmed && "scale-[0.97] opacity-45 saturate-50",
              )}
            >
              <span className={cn("absolute -top-4 left-4 z-10 flex items-center gap-2 rounded-full py-1 pr-4 pl-1 text-sm font-extrabold uppercase tracking-wide", TONE[p.tone].tab)}>
                <span className="grid size-7 place-items-center rounded-full bg-white text-navy">{p.tag}</span>
                Program
              </span>
              {isMatch && (
                <span className="absolute -top-4 right-3 z-10 animate-pop-in rounded-full bg-red px-3 py-1 text-xs font-extrabold text-white shadow-[0_3px_0_var(--color-red-600)]">
                  Cocok!
                </span>
              )}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={p.img}
                  alt=""
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
                <h3 className="text-2xl">{p.title}</h3>
                <p className="mt-1 text-[15px] leading-snug text-muted-foreground">
                  <span className="font-bold text-navy">Untuk: </span>
                  {p.forWho}
                </p>
                <ul className="mt-3 flex-1 space-y-1.5 text-[15px]">
                  {p.focus.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span aria-hidden className={cn("text-lg leading-none", TONE[p.tone].dot)}>●</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={wa(`Halo admin RH Cemerlang, saya ingin tanya program ${p.title} (kelas ${type}) untuk anak saya.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-4 inline-flex items-center gap-1.5 font-extrabold text-navy underline-offset-4 hover:text-brand-orange hover:underline"
                >
                  Tanya program ini <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
