"use client";

import { useRef, useState } from "react";
import { ArrowRight, BookOpen, Calculator, ChevronLeft, ChevronRight, ClipboardList, NotebookPen, Target, User } from "lucide-react";
import { wa } from "@/lib/site";
import { cn } from "@/lib/utils";

// Skenario "Cocok untuk Ayah & Bunda yang..." (bukan testimoni): situasi orang tua + solusi dari layanan RHC yang nyata.
const CASES = [
  { icon: Calculator, who: "anaknya takut matematika", how: "Konsep dijelaskan pelan-pelan dengan contoh sehari-hari, sampai anak berani mengerjakan soal sendiri.", tag: "Kelas 3-6 SD & 7-9 SMP", color: "bg-brand-orange text-white" },
  { icon: ClipboardList, who: "ingin tahu perkembangan belajar anak", how: "Tentor memberikan laporan perkembangan belajar, jadi Anda tahu bagian mana yang sudah dan belum dipahami.", tag: "Semua program", color: "bg-brand-teal text-navy" },
  { icon: BookOpen, who: "anaknya baru mulai belajar membaca", how: "Calistung melatih membaca, menulis, dan berhitung dengan cara yang menyenangkan, tanpa memaksa.", tag: "Calistung", color: "bg-brand-yellow text-navy" },
  { icon: NotebookPen, who: "sibuk dan tidak sempat menemani PR", how: "Tentor mendampingi anak memahami materi dan menyelesaikan PR sekolah, jadi waktu di rumah lebih santai.", tag: "Kelas 3-6 SD", color: "bg-purple text-white" },
  { icon: Target, who: "anaknya akan menghadapi TKA", how: "Latihan soal dan pembahasan terarah supaya anak paham alasannya, bukan sekadar hafal jawabannya.", tag: "TKA", color: "bg-green text-white" },
  { icon: User, who: "anaknya butuh perhatian lebih", how: "Kelas Privat: satu tentor fokus pada satu anak, menyesuaikan kecepatan dan gaya belajarnya.", tag: "Kelas Privat", color: "bg-red text-white" },
];

export function Testimonials() {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const cardWidth = () => {
    const el = track.current?.firstElementChild as HTMLElement | null;
    return el ? el.offsetWidth + 20 : 300; // 20 = gap-5
  };
  const go = (i: number) => {
    const n = Math.max(0, Math.min(CASES.length - 1, i));
    track.current?.scrollTo({ left: n * cardWidth(), behavior: "smooth" });
  };
  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    // di desktop beberapa kartu terlihat sekaligus; kalau sudah mentok kanan, anggap kartu terakhir aktif
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setActive(atEnd ? CASES.length - 1 : Math.round(el.scrollLeft / cardWidth()));
  };

  return (
    <div data-reveal>
      <ul
        ref={track}
        onScroll={onScroll}
        tabIndex={0}
        aria-label="Cocok untuk Ayah dan Bunda"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(active + 1);
          if (e.key === "ArrowLeft") go(active - 1);
        }}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pt-6 pb-4 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-brand-orange md:-mx-6 md:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {CASES.map(({ icon: Icon, who, how, tag, color }, i) => (
          <li
            key={who}
            className={cn(
              "group relative flex w-[85%] shrink-0 snap-start flex-col rounded-[2rem] bg-white p-6 pt-9 shadow-card transition-transform duration-300 hover:-translate-y-1 sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.84rem)]",
              i === active && "lg:-translate-y-1",
            )}
          >
            <span className={cn("absolute -top-5 left-6 grid size-11 place-items-center rounded-2xl shadow-card", color)}>
              <Icon className="size-5 group-hover:animate-wiggle" />
            </span>
            <p className="text-sm font-bold text-muted-foreground">Cocok untuk Ayah & Bunda yang</p>
            <h3 className="mt-1 text-xl leading-snug">{who}</h3>
            <p className="mt-3 flex-1 text-[16px] leading-relaxed text-ink/80">{how}</p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-line pt-4">
              <span className="rounded-full bg-cream-deep px-3 py-1 text-xs font-extrabold text-navy">{tag}</span>
              <a
                href={wa(`Halo admin RH Cemerlang, saya orang tua yang ${who}. Boleh konsultasi program yang cocok?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link -my-2 inline-flex min-h-11 items-center gap-1 px-1 text-sm font-extrabold text-brand-orange-600 hover:underline"
              >
                Konsultasi <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(active - 1)}
          disabled={active === 0}
          aria-label="Sebelumnya"
          className="grid size-11 place-items-center rounded-full border-2 border-navy bg-white text-navy transition-all hover:bg-navy hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-navy"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex">
          {CASES.map((c, i) => (
            // area ketuk 44px, titik visualnya tetap kecil
            <button key={c.who} type="button" onClick={() => go(i)} aria-label={`Kartu ${i + 1}`} aria-current={i === active} className="group grid h-11 min-w-6 place-items-center px-1">
              <span className={cn("block h-2.5 rounded-full transition-all", i === active ? "w-7 bg-brand-orange" : "w-2.5 bg-navy/20 group-hover:bg-navy/40")} />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(active + 1)}
          disabled={active >= CASES.length - 1}
          aria-label="Berikutnya"
          className="grid size-11 place-items-center rounded-full border-2 border-navy bg-white text-navy transition-all hover:bg-navy hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-navy"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
