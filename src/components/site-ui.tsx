import Image from "next/image";
import Link from "next/link";
import { CircleCheck, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { ADDRESS, NAV, WA_DAFTAR, WA_DISPLAY, wa } from "@/lib/site";
import { cn } from "@/lib/utils";

// Komponen kecil yang dipakai bersama landing & /karir.

export const ctaClass = "h-12 rounded-full px-6 text-base font-extrabold pop";
export const stagger = (i: number) => ({ "--i": i }) as React.CSSProperties;
export const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Rays({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("inline-flex animate-wiggle flex-col gap-1.5", className)}>
      <span className="h-1.5 w-5 -rotate-30 rounded-full bg-brand-yellow" />
      <span className="h-1.5 w-6 rounded-full bg-brand-yellow" />
      <span className="h-1.5 w-5 rotate-30 rounded-full bg-brand-yellow" />
    </span>
  );
}

export function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-10 flex flex-col items-center text-center md:mb-14">
      <div data-reveal="pop" className="flex items-center gap-3">
        <Rays className="hidden -scale-x-100 sm:inline-flex" />
        <h2 className="rounded-[1.75rem] bg-navy px-6 py-2 text-[clamp(1.375rem,5.5vw,2.25rem)] leading-tight text-balance text-white md:px-8">{children}</h2>
        <Rays className="hidden sm:inline-flex" />
      </div>
      {sub && (
        <p data-reveal style={stagger(1)} className="mt-4 max-w-2xl text-base text-balance text-muted-foreground md:text-lg">
          {sub}
        </p>
      )}
    </div>
  );
}

export function WaButton({ text, children, className }: { text: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={wa(text)} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), ctaClass, className)}>
      <MessageCircle className="size-5" />
      {children}
    </a>
  );
}

export function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5 text-[15px] leading-snug">
      <CircleCheck className="mt-0.5 size-5 shrink-0 fill-green text-white" /> {children}
    </li>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link href="/" aria-label="RH Cemerlang, kembali ke beranda">
          <Image src="/images/logo-rhc.webp" alt="RH Cemerlang Rumah Belajar" width={480} height={263} preload className="h-10 w-auto md:h-12" />
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-5 text-[15px] font-bold text-navy xl:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-orange after:transition-transform hover:text-brand-orange hover:after:scale-x-100"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <WaButton text={WA_DAFTAR} className="hidden h-10 px-5 text-sm sm:inline-flex">
            Daftar Sekarang
          </WaButton>
          <MobileNav items={NAV} />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="doodle bg-navy pb-24 text-white [--doodle-color:#fff] [--doodle-opacity:0.04] sm:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center md:flex-row md:justify-between md:px-6 md:text-left">
        <p className="font-hand text-[clamp(1.625rem,6vw,1.875rem)] leading-tight">
          Bikin kamu <span className="text-brand-yellow">paham</span>, bukan sekedar <span className="text-brand-yellow">hafal</span>.
        </p>
        <div className="text-sm text-white/80">
          <p className="font-bold text-white">Rumbel RH Cemerlang</p>
          <p>{ADDRESS}</p>
          <p>WhatsApp {WA_DISPLAY}</p>
          <Link href="/karir" className="mt-2 inline-block font-bold text-brand-yellow underline-offset-4 hover:underline">
            Karier: lowongan tentor
          </Link>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-white/60">© RH Cemerlang, Rumah Belajar</p>
    </footer>
  );
}
