import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, BookOpenCheck, CalendarClock, ClipboardList, GraduationCap, HeartHandshake, Megaphone, NotebookPen, Pencil, Sparkles, Wallet } from "lucide-react";
import { ApplyForm, QualificationCheck } from "@/components/karir-apply";
import { SectionTitle, delay, stagger } from "@/components/site-ui";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Karier Tentor | RH Cemerlang Banyuwangi",
  description: "Open recruitment tentor SD & SMP di RH Cemerlang Banyuwangi. Minimal S1 semua jurusan, jadwal fleksibel, penghasilan kompetitif. Lamar langsung via WhatsApp.",
};

// Sumber: poster Open Recruitment Tentor
const TUGAS = [
  { icon: BookOpenCheck, title: "Mengajar siswa SD & SMP", desc: "Mendampingi siswa belajar sesuai jenjang dan program." },
  { icon: NotebookPen, title: "Membantu memahami materi & PR", desc: "Menjelaskan konsep sampai paham dan membantu mengerjakan PR." },
  { icon: ClipboardList, title: "Laporan perkembangan belajar", desc: "Memberikan laporan perkembangan belajar siswa kepada orang tua." },
];

const PERKS = [
  { icon: Wallet, title: "Penghasilan kompetitif", color: "bg-brand-yellow text-navy" },
  { icon: CalendarClock, title: "Jadwal fleksibel", color: "bg-brand-teal text-navy" },
  { icon: HeartHandshake, title: "Lingkungan kerja positif", color: "bg-brand-orange text-white" },
];

export default function KarirPage() {
  return (
    <main className="flex-1 overflow-x-clip">
      {/* Hero */}
      <section className="doodle relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-8 pb-16 sm:pt-12 md:px-6 lg:grid-cols-2 lg:gap-10 lg:pt-16 lg:pb-24">
          <div className="text-center lg:text-left">
            <span className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-navy px-4 py-1.5 text-sm font-extrabold tracking-wide text-brand-yellow uppercase">
              <Megaphone className="size-4 animate-wiggle" /> Open Recruitment
            </span>
            <h1 className="mt-5 text-[clamp(2.25rem,9vw,4.25rem)] leading-[1.02]">
              <span className="sticker block animate-pop-in text-navy" style={delay(120)}>
                Jadi Tentor
              </span>
              <span className="sticker block animate-pop-in text-brand-orange" style={delay(300)}>
                RH Cemerlang
              </span>
            </h1>
            <p className="mt-6 inline-block -rotate-1 animate-fade-up rounded-2xl bg-brand-yellow px-5 py-2.5 text-base font-extrabold text-navy shadow-[0_4px_0_var(--color-brand-yellow-600)] sm:text-lg md:text-xl" style={delay(480)}>
              Untuk mengajar SD & SMP di Banyuwangi
            </p>
            <p className="mx-auto mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-ink/80 lg:mx-0" style={delay(580)}>
              Bergabunglah bersama kami dan jadi bagian dari dunia pendidikan. Bantu anak-anak paham, bukan sekadar hafal.
            </p>
            <div className="mt-8 flex animate-fade-up flex-col items-stretch gap-4 sm:flex-row sm:justify-center lg:justify-start" style={delay(700)}>
              <a href="#lamar" className={cn(buttonVariants(), "pop pulse-ring h-12 rounded-full px-6 text-base font-extrabold")}>
                Lamar Sekarang <ArrowDown className="size-5" />
              </a>
              <a href="#kecocokan" className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full border-2 border-navy bg-white px-6 text-base font-extrabold text-navy")}>
                Cek kecocokanmu
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl animate-fade-up lg:max-w-none" style={delay(350)}>
            <div className="absolute -inset-3 rotate-2 animate-float rounded-[2.5rem] bg-brand-orange/25" aria-hidden style={{ animationDuration: "7s" }} />
            <Image
              src="/images/tentor.webp"
              alt="Tentor berhijab mendampingi siswa SD belajar di ruang belajar yang terang"
              width={1536}
              height={1024}
              preload
              sizes="(min-width: 1024px) 50vw, (min-width: 672px) 42rem, 100vw"
              className="relative aspect-[4/3] w-full -rotate-1 rounded-[2.5rem] border-[6px] border-white object-cover shadow-card"
            />
            <Pencil aria-hidden className="absolute -right-3 -bottom-4 size-12 animate-wiggle text-brand-orange" />
            <Sparkles aria-hidden className="absolute -top-5 left-6 size-9 animate-float text-brand-teal" />
          </div>
        </div>
      </section>

      {/* Jenjang + Tugas */}
      <section className="bg-cream-deep py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle sub="Yang akan kamu kerjakan bersama anak-anak di RH Cemerlang.">
            Mengajar untuk <span className="text-brand-yellow">Jenjang</span>
          </SectionTitle>
          <div className="mx-auto mb-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              { label: "SD", sub: "Sekolah Dasar", cls: "bg-brand-orange text-white shadow-[0_5px_0_var(--color-brand-orange-600)]" },
              { label: "SMP", sub: "Sekolah Menengah Pertama", cls: "bg-green text-white shadow-[0_5px_0_var(--color-green-600)]" },
            ].map((j, i) => (
              <div key={j.label} data-reveal="pop" style={stagger(i)} className={cn("flex items-center gap-4 rounded-3xl p-5", j.cls)}>
                <GraduationCap className="size-10 shrink-0" />
                <div>
                  <p className="font-heading text-3xl font-extrabold">{j.label}</p>
                  <p className="text-sm font-semibold opacity-90">{j.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {TUGAS.map(({ icon: Icon, title, desc }, i) => (
              <li key={title} data-reveal style={stagger(i)} className="group rounded-3xl bg-white p-6 shadow-card hover:-translate-y-1">
                <span className="grid size-12 place-items-center rounded-2xl bg-navy text-brand-yellow">
                  <Icon className="size-6 group-hover:animate-wiggle" />
                </span>
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Keuntungan */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle>
            Yang Kamu <span className="text-brand-yellow">Dapatkan</span>
          </SectionTitle>
          <ul className="grid gap-5 sm:grid-cols-3">
            {PERKS.map(({ icon: Icon, title, color }, i) => (
              <li key={title} data-reveal="pop" style={stagger(i)} className="group flex flex-col items-center rounded-3xl border-2 border-dashed border-brand-yellow bg-white p-7 text-center hover:-translate-y-1.5 hover:shadow-card">
                <span className={cn("grid size-16 place-items-center rounded-2xl", color)}>
                  <Icon className="size-8 group-hover:animate-wiggle" />
                </span>
                <h3 className="mt-4 text-xl">{title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cek kecocokan */}
      <section id="kecocokan" className="scroll-mt-20 bg-cream-deep py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionTitle sub="Kualifikasi dari tim kami. Kendaraan pribadi diutamakan, bukan wajib.">
            Cocok Jadi <span className="text-brand-yellow">Tentor?</span>
          </SectionTitle>
          <QualificationCheck />
        </div>
      </section>

      {/* Lamar */}
      <section id="lamar" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle sub="Isi form, cek pratinjau pesannya, lalu kirim langsung ke WhatsApp admin.">
            Kirim <span className="text-brand-yellow">Lamaran</span>
          </SectionTitle>
          <ApplyForm />
        </div>
      </section>

      {/* CTA sticky mobile */}
      <div className="fixed inset-x-4 bottom-4 z-50 sm:hidden">
        <a href="#lamar" className={cn(buttonVariants(), "pop pulse-ring h-12 w-full rounded-full px-6 text-base font-extrabold")}>
          Lamar Sekarang <ArrowDown className="size-5" />
        </a>
      </div>
    </main>
  );
}
