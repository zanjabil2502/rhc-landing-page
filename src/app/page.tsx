import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calculator,
  CircleHelp,
  ClipboardList,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MapPin,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  NotebookPen,
  Send,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";
import { FaqTabs } from "@/components/faq-tabs";
import { JsonLd } from "@/components/json-ld";
import { FAQ_GROUPS } from "@/lib/faq";
import { ADDRESS, CITY, MAPS_URL, OG_BASE, PHONE_INTL, SITE_DESCRIPTION, SITE_NAME, SITE_URL, STREET, WA_DAFTAR, WA_DISPLAY, wa } from "@/lib/site";
import { ProgramExplorer } from "@/components/program-explorer";
import { StickyCta } from "@/components/sticky-cta";
import { Testimonials } from "@/components/testimonials";
import { Check, SectionTitle, WaButton, delay, stagger } from "@/components/site-ui";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HERO_FACTS = [
  { icon: GraduationCap, label: "SD & SMP, kelas 1-9" },
  { icon: ShieldCheck, label: "Tentor minimal S1" },
  { icon: ClipboardList, label: "Laporan perkembangan belajar" },
];

const MARQUEE = ["Calistung", "Kelas 3-6 SD", "Kelas 7-9 SMP", "Matematika", "IPA", "Bahasa Inggris", "Persiapan TKA", "Kelas Reguler", "Kelas Privat"];

// PAS: masalah yang sering dirasakan orang tua
const PAINS = [
  { icon: Brain, text: "Anak hafal rumus, tapi bingung begitu soalnya diubah sedikit." },
  { icon: NotebookPen, text: "PR menumpuk, sementara Ayah & Bunda tidak selalu sempat mendampingi." },
  { icon: BookOpen, text: "Materi sekolah sekarang jauh berbeda dengan zaman kita dulu." },
  { icon: CircleHelp, text: "Nilai turun, tapi tidak tahu bagian mana yang belum dipahami." },
];

const FEATURES = [
  { icon: GraduationCap, title: "Tentor Profesional dan Berpengalaman", desc: "Minimal S1, sabar, dan terbiasa mengajar anak SD dan SMP.", color: "text-brand-orange bg-brand-orange/10" },
  { icon: Target, title: "Metode Belajar Efektif & Menyenangkan", desc: "Belajar terasa seru, jadi anak tidak merasa tertekan.", color: "text-red bg-red/10" },
  { icon: TrendingUp, title: "Pemahaman & Prestasi Meningkat", desc: "Fokus ke konsep, fondasi prestasi yang bertahan lama.", color: "text-brand-teal-600 bg-brand-teal/15" },
  { icon: Smile, title: "Suasana Belajar Nyaman & Suportif", desc: "Anak berani bertanya tanpa takut salah.", color: "text-purple bg-purple/10" },
];

const SUBJECTS = [
  { icon: Calculator, label: "MTK", bg: "bg-brand-orange", pop: "var(--color-brand-orange-600)" },
  { icon: FlaskConical, label: "IPA", bg: "bg-green", pop: "var(--color-green-600)" },
  { icon: BookOpen, label: "BING", bg: "bg-purple", pop: "var(--color-purple-600)" },
];

// Sumber: tugas & kualifikasi tentor di poster Open Recruitment
const PARENT_POINTS = [
  { icon: Lightbulb, title: "Paham konsep, bukan sekadar hafal", desc: "Materi sekolah dijelaskan ulang dengan bahasa sederhana sampai anak benar-benar mengerti.", color: "bg-brand-yellow text-navy" },
  { icon: NotebookPen, title: "Dibantu mengerjakan PR", desc: "Tentor mendampingi anak memahami materi dan menyelesaikan PR dari sekolah.", color: "bg-brand-teal text-navy" },
  { icon: ClipboardList, title: "Laporan perkembangan belajar", desc: "Tentor memberikan laporan perkembangan belajar, jadi Anda bisa memantau kemajuan anak.", color: "bg-brand-orange text-white" },
  { icon: ShieldCheck, title: "Tentor terseleksi", desc: "Minimal lulusan S1, menguasai mapel SD & SMP, sabar, ramah, disiplin, dan komunikatif.", color: "bg-purple text-white" },
];

const METHOD = [
  { icon: Sparkles, title: "Visual & mudah diingat", desc: "Materi dirangkum jadi ringkasan bergambar yang menarik, seperti contoh di samping." },
  { icon: Lightbulb, title: "Dekat dengan keseharian", desc: "Konsep dikaitkan dengan hal yang anak temui sehari-hari, jadi lebih masuk akal." },
  { icon: MessagesSquare, title: "Anak berani bertanya", desc: "Suasana yang nyaman membuat anak tidak takut salah dan berani bertanya." },
];

const STEPS = [
  { title: "Chat admin via WhatsApp", desc: "Ceritakan kebutuhan anak. Tanyakan program, jadwal, dan biaya. Gratis, tanpa kewajiban mendaftar." },
  { title: "Isi formulir pendaftaran", desc: "Cukup data anak, data orang tua/wali, dan program pilihan. Hanya butuh beberapa menit." },
  { title: "Anak mulai belajar!", desc: "Anak belajar bersama tentor, dan Ayah & Bunda menerima laporan perkembangannya." },
];

// Sumber: Formulir Pendaftaran Rumbel RH Cemerlang
const REG_DATA = [
  "Nama lengkap & nama panggilan anak",
  "Usia dan jenis kelamin anak",
  "Kelas anak saat ini (1 SD sampai 9 SMP)",
  "Nama & nomor WhatsApp orang tua/wali",
  "Alamat orang tua/wali",
  "Program & pilihan kelas (Reguler/Privat)",
];

export const metadata: Metadata = {
  title: { absolute: "Les Privat SD & SMP di Banyuwangi | RH Cemerlang" },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    ...OG_BASE,
    title: "Les Privat SD & SMP di Banyuwangi | RH Cemerlang",
    description: "Anak paham pelajarannya, Ayah & Bunda tenang memantau perkembangannya. Calistung, Kelas 3-6 SD, Kelas 7-9 SMP, dan TKA. Konsultasi gratis via WhatsApp.",
    url: "/",
  },
};

// Structured data: bisnis lokal + program + FAQ. Hanya berisi fakta yang juga tampil di halaman.
const ORG_ID = `${SITE_URL}/#organization`;
const PROGRAM_SCHEMA = [
  { name: "Calistung", description: "Belajar membaca, menulis, dan berhitung untuk anak yang baru mulai, kelas 1-2 SD." },
  { name: "Les Kelas 3-6 SD", description: "Pendampingan mapel umum sekolah dasar, bantuan PR, dan penguatan konsep dasar." },
  { name: "Les Kelas 7-9 SMP", description: "Fokus Matematika, Bahasa Inggris, dan IPA untuk siswa SMP." },
  { name: "Persiapan TKA", description: "Latihan soal dan pembahasan terarah untuk Tes Kemampuan Akademik, bisa untuk siswa kelas berapa pun." },
];
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": ORG_ID,
      name: `${SITE_NAME} Rumah Belajar`,
      alternateName: ["Rumbel RH Cemerlang", "RHC", "RH Cemerlang"],
      description: SITE_DESCRIPTION,
      slogan: "Bikin kamu paham, bukan sekedar hafal.",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: [`${SITE_URL}/images/hero.webp`, `${SITE_URL}/images/ortu.webp`],
      telephone: PHONE_INTL,
      address: { "@type": "PostalAddress", streetAddress: STREET, addressLocality: CITY, addressRegion: "Jawa Timur", addressCountry: "ID" },
      areaServed: { "@type": "City", name: "Banyuwangi" },
      knowsLanguage: ["id", "en"],
      contactPoint: { "@type": "ContactPoint", telephone: PHONE_INTL, contactType: "customer service", availableLanguage: ["Indonesian"] },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Program Belajar",
        itemListElement: PROGRAM_SCHEMA.map((p) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Course", name: p.name, description: p.description, provider: { "@id": ORG_ID }, inLanguage: "id" },
        })),
      },
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, inLanguage: "id-ID", publisher: { "@id": ORG_ID } },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_GROUPS.flatMap((g) => g.items).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={STRUCTURED_DATA} />
      <main className="flex-1 overflow-x-clip">
        {/* Hero */}
        <section className="doodle relative overflow-hidden">
          <Star aria-hidden className="absolute top-24 left-[6%] hidden size-7 animate-float fill-brand-yellow text-brand-yellow md:block" style={delay(400)} />
          <Sparkles aria-hidden className="absolute right-[4%] bottom-16 hidden size-8 animate-float text-brand-teal md:block" style={delay(1200)} />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-8 pb-16 sm:pt-12 md:px-6 lg:grid-cols-2 lg:gap-10 lg:pt-16 lg:pb-24">
            <div className="relative text-center lg:text-left">
              <Lightbulb aria-hidden className="absolute -top-2 left-0 hidden size-10 animate-wiggle text-brand-yellow lg:block" strokeWidth={2.25} />
              <span className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-extrabold text-navy shadow-card">
                <Star className="size-4 animate-spin-slow fill-brand-yellow text-brand-yellow" /> Rumah Belajar di Banyuwangi
              </span>
              {/* fluid: 34px @320 ke 72px; di lg kolom setengah jadi ikut vw */}
              <h1 className="mt-5 text-[clamp(2.125rem,10.5vw,4.5rem)] leading-[1.02] lg:text-[clamp(3.25rem,5.1vw,4.5rem)]">
                <span className="sticker block animate-pop-in text-navy" style={delay(120)}>
                  Yuk, Les di
                </span>
                <span className="sticker block animate-pop-in text-red" style={delay(300)}>
                  RH Cemerlang!
                </span>
              </h1>
              <p
                className="mt-6 inline-block max-w-xl -rotate-1 animate-fade-up rounded-2xl bg-brand-yellow px-5 py-2.5 text-base font-extrabold text-balance text-navy shadow-[0_4px_0_var(--color-brand-yellow-600)] sm:text-lg md:text-xl"
                style={delay(480)}
              >
                Anak paham pelajarannya, Ayah & Bunda tenang memantau perkembangannya.
              </p>
              <p className="mx-auto mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-ink/80 lg:mx-0" style={delay(580)}>
                Les SD & SMP di Banyuwangi bersama tentor minimal S1 yang sabar mendampingi, mulai dari Calistung sampai persiapan TKA.
              </p>
              <p className="mt-4 animate-fade-up font-hand text-[clamp(1.625rem,6vw,2rem)] leading-tight text-brand-orange-600" style={delay(680)}>
                Bikin kamu paham, bukan sekedar hafal.
              </p>
              <div className="mt-8 flex animate-fade-up flex-col items-stretch gap-4 sm:flex-row sm:justify-center lg:justify-start" style={delay(780)}>
                <WaButton text={WA_DAFTAR} className="pulse-ring">
                  Konsultasi Gratis
                </WaButton>
                <a href="#program" className={cn(buttonVariants({ variant: "outline" }), "group h-12 rounded-full border-2 border-navy bg-white px-6 text-base font-extrabold text-navy")}>
                  Cari Program <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
                {HERO_FACTS.map(({ icon: Icon, label }, i) => (
                  <li
                    key={label}
                    className="inline-flex animate-fade-up items-center gap-2 rounded-full border-2 border-line bg-white/80 px-3.5 py-1.5 text-sm font-bold text-navy"
                    style={delay(900 + i * 110)}
                  >
                    <Icon className="size-4 text-brand-orange" /> {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-[min(100%,30rem)] animate-fade-up px-3 sm:px-0 lg:max-w-none" style={delay(350)}>
              <div className="absolute -inset-3 rotate-3 animate-float rounded-[2.5rem] bg-brand-teal/30" aria-hidden style={{ animationDuration: "7s" }} />
              <Image
                src="/images/hero.webp"
                alt="Tiga anak SD berseragam belajar bersama dan tertawa di ruang belajar yang terang"
                width={1024}
                height={1024}
                preload
                sizes="(min-width: 1024px) 50vw, 30rem"
                className="relative aspect-square w-full -rotate-2 rounded-[2.5rem] border-[6px] border-white object-cover shadow-card transition-transform duration-500 hover:rotate-0"
              />
              <Send aria-hidden className="absolute -top-6 right-4 size-10 animate-fly text-navy" />
              <div
                className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rotate-2 animate-float rounded-2xl border-2 border-dashed border-navy/40 bg-white px-4 py-2 text-center font-hand text-lg leading-tight text-navy shadow-card sm:w-max sm:text-xl lg:left-auto lg:-right-4 lg:translate-x-0"
                style={delay(800)}
              >
                Bersama RHC, prestasi anak makin berarti!
              </div>
            </div>
          </div>
        </section>

        {/* Pita program berjalan */}
        <div aria-hidden className="-rotate-1 overflow-hidden border-y-4 border-navy bg-brand-yellow py-3">
          <div className="flex w-max animate-marquee gap-8 font-heading text-xl font-extrabold text-navy md:text-2xl">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                {m} <Star className="size-5 fill-red text-red" />
              </span>
            ))}
          </div>
        </div>

        {/* Masalah orang tua (PAS) */}
        <section className="doodle bg-navy py-16 text-white [--doodle-color:#fff] [--doodle-opacity:0.04] md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 data-reveal="pop" className="text-center text-[clamp(1.75rem,6vw,2.75rem)] leading-tight text-balance text-white">
              Apakah Ayah & Bunda <span className="text-brand-yellow">mengalami ini?</span>
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PAINS.map(({ icon: Icon, text }, i) => (
                <li key={text} data-reveal style={stagger(i)} className="group rounded-3xl border-2 border-white/15 bg-white/5 p-5 hover:-translate-y-1 hover:bg-white/10">
                  <Icon className="size-8 text-brand-yellow group-hover:animate-wiggle" strokeWidth={2} />
                  <p className="mt-3 text-[17px] leading-snug font-semibold">{text}</p>
                </li>
              ))}
            </ul>
            <div data-reveal="pop" className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-3xl bg-brand-yellow p-6 text-center text-navy sm:flex-row sm:text-left md:p-7">
              <HeartHandshake className="size-12 shrink-0 animate-float" strokeWidth={2} />
              <p className="text-lg leading-snug font-bold md:text-xl">
                Tenang, Ayah & Bunda tidak sendirian. Di RH Cemerlang, anak didampingi sampai benar-benar paham, dan Anda selalu tahu perkembangannya.
              </p>
            </div>
          </div>
        </section>

        {/* Keunggulan */}
        <section id="keunggulan" className="scroll-mt-20 bg-cream-deep py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle>
              Kenapa Memilih <span className="text-brand-yellow">RH Cemerlang?</span>
            </SectionTitle>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
              {FEATURES.map(({ icon: Icon, title, desc, color }, i) => (
                <div
                  key={title}
                  data-reveal
                  style={stagger(i)}
                  className="group flex flex-col items-center rounded-3xl border-2 border-dashed border-brand-yellow bg-cream p-4 text-center hover:-translate-y-1.5 hover:shadow-card sm:p-6 lg:p-7"
                >
                  <span className={cn("grid size-16 place-items-center rounded-2xl", color)}>
                    <Icon className="size-8 group-hover:animate-wiggle" strokeWidth={2.25} />
                  </span>
                  <h3 className="mt-4 text-[15px] leading-snug sm:text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground sm:text-[15px]">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-col items-center">
              <h3 data-reveal="pop" className="rounded-full bg-navy px-6 py-1.5 text-xl text-white md:text-2xl">
                Mata Pelajaran
              </h3>
              <ul className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6">
                {SUBJECTS.map(({ icon: Icon, label, bg, pop }, i) => (
                  <li key={label} data-reveal="pop" style={stagger(i + 1)}>
                    <span
                      style={{ "--pop": pop, animationDelay: `${i * 600}ms` } as React.CSSProperties}
                      className={cn(
                        "pop flex animate-float items-center gap-3 rounded-full px-6 py-2.5 font-heading text-xl font-extrabold text-white outline-2 -outline-offset-6 outline-dashed outline-white/60 sm:px-7 sm:py-3 sm:text-2xl md:text-3xl",
                        bg,
                      )}
                    >
                      <Icon className="size-7" strokeWidth={2.5} /> {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pendampingan untuk orang tua */}
        <section id="pendampingan" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle sub="Anak didampingi belajar, Ayah & Bunda tetap tahu perkembangannya tanpa harus menebak-nebak.">
              Tenang untuk <span className="text-brand-yellow">Ayah & Bunda</span>
            </SectionTitle>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
              <div data-reveal className="relative mx-auto w-full max-w-2xl lg:max-w-none">
                <div className="absolute -inset-3 -rotate-2 animate-float rounded-[2.25rem] bg-brand-yellow/40" aria-hidden style={{ animationDuration: "8s" }} />
                <Image
                  src="/images/ortu.webp"
                  alt="Tentor menunjukkan buku latihan dan catatan perkembangan belajar anak kepada seorang ibu"
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 45vw, (min-width: 672px) 42rem, 100vw"
                  className="relative aspect-[4/3] w-full rounded-[2rem] border-[6px] border-white object-cover shadow-card"
                />
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {PARENT_POINTS.map(({ icon: Icon, title, desc, color }, i) => (
                  <li key={title} data-reveal style={stagger(i)} className="group flex gap-4 rounded-3xl bg-white p-5 shadow-card hover:-translate-y-1">
                    <span className={cn("grid size-12 shrink-0 place-items-center rounded-2xl", color)}>
                      <Icon className="size-6 group-hover:animate-wiggle" strokeWidth={2.25} />
                    </span>
                    <div>
                      <h3 className="text-lg leading-snug">{title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Program (interaktif) */}
        <section id="program" className="scroll-mt-20 bg-cream-deep py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle sub="Dari belajar membaca pertama sampai persiapan TKA. Semua program tersedia kelas Reguler dan Privat.">
              Program Sesuai <span className="text-brand-yellow">Jenjang Anak</span>
            </SectionTitle>
            <ProgramExplorer />
          </div>
        </section>

        {/* Metode */}
        <section id="metode" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle sub="Prinsip kami sederhana: anak harus mengerti alasannya, bukan sekadar menghafal jawabannya.">
              Paham, <span className="text-brand-yellow">Bukan Hafal</span>
            </SectionTitle>
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
              <ol className="order-2 space-y-5 lg:order-1">
                {METHOD.map(({ icon: Icon, title, desc }, i) => (
                  <li key={title} data-reveal style={stagger(i)} className="group flex gap-4 rounded-3xl border-2 border-dashed border-line bg-white p-5 hover:-translate-y-1 hover:border-brand-yellow">
                    <span className="relative grid size-12 shrink-0 place-items-center rounded-2xl bg-navy text-brand-yellow">
                      <Icon className="size-6 group-hover:animate-wiggle" strokeWidth={2.25} />
                      <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-brand-orange text-xs font-extrabold text-white">{i + 1}</span>
                    </span>
                    <div>
                      <h3 className="text-lg leading-snug">{title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <figure data-reveal="pop" className="order-1 mx-auto w-full max-w-md lg:order-2">
                {/* Watermark sudah tertanam di file gambar. Lapisan transparan di atasnya mencegah drag & "Save image" via klik kanan. */}
                <div className="group/materi relative rotate-1 transition-transform duration-500 select-none hover:rotate-0 hover:scale-[1.02]">
                  <Image
                    src="/images/materi-ipa-energi.webp"
                    alt="Contoh materi RH Cemerlang: infografis IPA Kelas 4 tentang Energi dan Perubahannya"
                    width={900}
                    height={1350}
                    draggable={false}
                    sizes="(min-width: 448px) 28rem, 100vw"
                    className="pointer-events-none w-full rounded-3xl border-[6px] border-white shadow-card"
                  />
                  <div aria-hidden className="absolute inset-0 rounded-3xl" />
                </div>
                <figcaption className="mt-4 text-center font-hand text-xl text-navy">Contoh materi kami: IPA Kelas 4, Energi</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Cocok untuk siapa (carousel skenario orang tua) */}
        <section id="cocok" className="scroll-mt-20 bg-cream-deep py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle sub="Kenali situasinya, kami bantu carikan solusinya. Geser untuk melihat semuanya.">
              Cocok untuk <span className="text-brand-yellow">Ayah & Bunda</span> yang...
            </SectionTitle>
            <Testimonials />
          </div>
        </section>

        {/* Cara daftar */}
        <section id="cara-daftar" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle sub="Mudah, cepat, dan bisa dimulai dari obrolan santai di WhatsApp.">
              Daftar Cuma <span className="text-brand-yellow">3 Langkah</span>
            </SectionTitle>
            <ol className="grid gap-6 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <li key={s.title} data-reveal style={stagger(i)} className="relative rounded-3xl bg-white p-6 pt-10 shadow-card hover:-translate-y-1">
                  <span
                    className="absolute -top-5 left-6 grid size-11 animate-float place-items-center rounded-full bg-brand-orange font-heading text-xl font-extrabold text-white shadow-[0_4px_0_var(--color-brand-orange-600)]"
                    style={delay(i * 500)}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </li>
              ))}
            </ol>

            <div data-reveal className="mx-auto mt-10 max-w-4xl rounded-3xl border-[2.5px] border-brand-teal bg-white p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-teal text-navy">
                  <ClipboardList className="size-6" />
                </span>
                <h3 className="text-xl md:text-2xl">Siapkan data ini saat mendaftar</h3>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {REG_DATA.map((d) => (
                  <Check key={d}>{d}</Check>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ (tab per kategori) */}
        <section id="faq" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <SectionTitle sub="Pilih kategori untuk melihat jawabannya.">
              Pertanyaan <span className="text-brand-yellow">Umum</span>
            </SectionTitle>
            <FaqTabs />
          </div>
        </section>

        {/* CTA kontak */}
        <section id="kontak" className="scroll-mt-20 pb-16 md:pb-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-6 text-center">
              <p data-reveal="pop" className="font-heading text-[clamp(1.625rem,5.5vw,2.5rem)] leading-tight font-extrabold text-balance text-navy">
                Langkah kecil hari ini, <span className="text-red">masa depan cerah</span> untuk anak.
              </p>
              <p data-reveal style={stagger(1)} className="mx-auto mt-3 max-w-2xl text-lg text-balance text-muted-foreground">
                Konsultasi gratis dengan admin kami. Tanya program, jadwal, dan biaya dulu, tanpa kewajiban mendaftar.
              </p>
            </div>
            <div data-reveal className="grid overflow-hidden rounded-[2rem] bg-brand-yellow shadow-card lg:grid-cols-[1.2fr_1fr]">
              <a
                href={wa(WA_DAFTAR)}
                target="_blank"
                rel="noopener noreferrer"
                className="group m-3 flex flex-col items-center gap-3 overflow-hidden rounded-3xl bg-red p-5 text-center text-white shadow-[0_6px_0_var(--color-red-600)] transition-transform hover:translate-y-0.5 sm:m-4 sm:flex-row sm:gap-4 sm:p-6 sm:text-left md:m-6 md:p-8"
              >
                <span className="pulse-ring grid size-16 shrink-0 place-items-center rounded-full bg-white text-[#25D366]">
                  <MessageCircle className="size-9 group-hover:animate-wiggle" strokeWidth={2.5} />
                </span>
                <span>
                  <span className="block text-lg font-bold">Chat Admin Sekarang!</span>
                  <span className="block font-heading text-[clamp(1.5rem,7.5vw,2.25rem)] font-extrabold tracking-wide whitespace-nowrap">{WA_DISPLAY}</span>
                </span>
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-4 px-6 pb-6 text-navy sm:justify-start lg:border-l-2 lg:border-navy/20 lg:py-6">
                <MapPin className="size-10 shrink-0 fill-red text-white group-hover:animate-float" />
                <span className="text-lg font-bold leading-snug md:text-xl">
                  {ADDRESS}
                  <span className="mt-1 block text-sm font-semibold underline underline-offset-4">Buka di Google Maps</span>
                </span>
              </a>
            </div>

            {/* Mini map: embed Google Maps tanpa API key, lazy supaya tidak membebani awal halaman.
                ponytail: pencarian berbasis teks alamat; ganti src dengan embed "Share > Embed a map" dari pin resmi kalau titiknya kurang pas. */}
            <div data-reveal className="relative mt-6 overflow-hidden rounded-[2rem] border-[6px] border-white bg-cream-deep shadow-card">
              <iframe
                title={`Peta lokasi RH Cemerlang, ${ADDRESS}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(`RH Cemerlang, ${ADDRESS}`)}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-64 w-full sm:h-80 lg:h-96"
              />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-navy shadow-card transition-transform hover:-translate-y-0.5"
              >
                <MapPin className="size-4 fill-red text-white" /> Petunjuk arah
              </a>
            </div>

            {/* Teaser karier: detail lowongan ada di /karir */}
            <Link
              href="/karir"
              data-reveal
              className="group mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border-2 border-dashed border-navy/25 bg-white p-5 text-center hover:border-brand-orange sm:flex-row sm:text-left"
            >
              <span className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-navy text-brand-yellow">
                  <Megaphone className="size-5 group-hover:animate-wiggle" />
                </span>
                <span>
                  <span className="block font-heading text-lg font-extrabold text-navy">Lulusan S1 dan suka mengajar anak-anak?</span>
                  <span className="block text-[15px] text-muted-foreground">Kami membuka lowongan tentor SD & SMP.</span>
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-extrabold text-brand-orange-600">
                Lihat lowongan <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>
      </main>

      {/* CTA sticky mobile: menyingkir di section kontak yang sudah punya tombol WhatsApp besar */}
      <StickyCta hideWhen="kontak">
        <WaButton text={WA_DAFTAR} className="pulse-ring w-full">
          Konsultasi Gratis via WhatsApp
        </WaButton>
      </StickyCta>
    </>
  );
}
