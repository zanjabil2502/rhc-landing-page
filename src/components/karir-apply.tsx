"use client";

import { useId, useState } from "react";
import { Check, CheckCheck, MessageCircle, PartyPopper, Send, Target } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { wa } from "@/lib/site";
import { cn } from "@/lib/utils";

// Sumber: poster Open Recruitment Tentor (kualifikasi & format "Nama - Domisili - Pendidikan - Jenjang").
const QUALIFICATIONS = [
  { text: "Minimal S1 semua jurusan" },
  { text: "Menguasai mapel SD & SMP" },
  { text: "Sabar, ramah, dan menyukai anak-anak" },
  { text: "Bertanggung jawab, disiplin, dan komunikatif" },
  { text: "Berdomisili di area penempatan" },
  { text: "Memiliki kendaraan pribadi", note: "diutamakan" },
];

const JENJANG = ["SD", "SMP"];
const MAPEL = ["Calistung", "Matematika", "IPA", "Bahasa Inggris", "Semua mapel SD"];

function verdict(n: number) {
  if (n === 0) return { text: "Centang kualifikasi yang sesuai dengan dirimu.", tone: "text-muted-foreground" };
  if (n <= 3) return { text: "Sedikit lagi! Kualifikasi lain bisa kamu diskusikan dengan admin.", tone: "text-brand-orange-600" };
  if (n <= 5) return { text: "Kamu kandidat yang menjanjikan. Yuk, isi form lamaran di bawah!", tone: "text-brand-teal-600" };
  return { text: "Kamu sangat cocok jadi tentor RH Cemerlang! Kirim lamaranmu sekarang.", tone: "text-green" };
}

export function QualificationCheck() {
  const [checked, setChecked] = useState<boolean[]>(() => QUALIFICATIONS.map(() => false));
  const count = checked.filter(Boolean).length;
  const pct = Math.round((count / QUALIFICATIONS.length) * 100);
  const v = verdict(count);

  return (
    <div data-reveal className="rounded-[2rem] border-[2.5px] border-green bg-white p-5 shadow-card sm:p-7">
      <div className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-green text-white">
          <Target className="size-6" />
        </span>
        <div>
          <h3 className="text-xl md:text-2xl">Cek kecocokanmu</h3>
          <p className="text-[15px] text-muted-foreground">Ketuk kualifikasi yang sudah kamu penuhi.</p>
        </div>
      </div>

      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
        {QUALIFICATIONS.map((q, i) => {
          const on = checked[i];
          return (
            <li key={q.text}>
              <button
                type="button"
                role="checkbox"
                aria-checked={on}
                onClick={() => setChecked((c) => c.map((x, j) => (j === i ? !x : x)))}
                className={cn(
                  "flex w-full items-center gap-3 rounded-2xl border-2 p-3 text-left text-[15px] font-semibold transition-all active:scale-[0.98]",
                  on ? "border-green bg-green/10 text-navy" : "border-line bg-cream text-navy/80 hover:border-green/50",
                )}
              >
                <span className={cn("grid size-7 shrink-0 place-items-center rounded-full border-2 transition-all", on ? "scale-110 border-green bg-green text-white" : "border-line bg-white text-transparent")}>
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <span>
                  {q.text}
                  {q.note && <span className="ml-1 text-xs font-bold text-muted-foreground">({q.note})</span>}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-5">
        <div className="flex items-center justify-between text-sm font-bold text-navy">
          <span>
            {count} dari {QUALIFICATIONS.length} terpenuhi
          </span>
          <span>{pct}%</span>
        </div>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-cream-deep" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Tingkat kecocokan">
          <div className="h-full rounded-full bg-gradient-to-r from-brand-yellow via-brand-teal to-green transition-[width] duration-500 ease-out" style={{ width: `${pct}%` }} />
        </div>
        <p aria-live="polite" className={cn("mt-3 flex items-center gap-2 text-[15px] font-bold", v.tone)}>
          {count === QUALIFICATIONS.length && <PartyPopper className="size-5 animate-wiggle" />}
          {v.text}
        </p>
      </div>
    </div>
  );
}

type Form = { nama: string; domisili: string; pendidikan: string; jurusan: string; jenjang: string[]; mapel: string[]; kendaraan: string };
const EMPTY: Form = { nama: "", domisili: "", pendidikan: "S1", jurusan: "", jenjang: [], mapel: [], kendaraan: "" };

function buildMessage(f: Form) {
  return [
    "Halo admin RH Cemerlang, saya ingin melamar sebagai tentor.",
    "",
    `Nama: ${f.nama || "..."}`,
    `Domisili: ${f.domisili || "..."}`,
    `Pendidikan: ${f.pendidikan}${f.jurusan ? ` ${f.jurusan}` : ""}`,
    `Jenjang yang dikuasai: ${f.jenjang.join(" & ") || "..."}`,
    ...(f.mapel.length ? [`Mapel unggulan: ${f.mapel.join(", ")}`] : []),
    ...(f.kendaraan ? [`Kendaraan pribadi: ${f.kendaraan}`] : []),
    "",
    "CV akan saya lampirkan di chat ini. Terima kasih.",
  ].join("\n");
}

const inputClass =
  "h-12 w-full rounded-2xl border-2 border-line bg-white px-4 text-base text-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand-orange aria-invalid:border-red";

function Chip({ on, children, onClick }: { on: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={on}
      onClick={onClick}
      className={cn(
        "inline-flex h-10 items-center gap-1.5 rounded-full border-2 px-4 text-sm font-extrabold transition-all active:scale-95",
        on ? "border-navy bg-navy text-white" : "border-line bg-white text-navy hover:border-brand-orange",
      )}
    >
      {on && <Check className="size-4" strokeWidth={3} />} {children}
    </button>
  );
}

export function ApplyForm() {
  const id = useId();
  const [f, setF] = useState<Form>(EMPTY);
  const [tried, setTried] = useState(false);
  const [sent, setSent] = useState(false);

  const errors = {
    nama: !f.nama.trim(),
    domisili: !f.domisili.trim(),
    jurusan: !f.jurusan.trim(),
    jenjang: f.jenjang.length === 0,
  };
  const valid = !Object.values(errors).some(Boolean);
  const set = <K extends keyof Form>(k: K, v: Form[K]) => setF((p) => ({ ...p, [k]: v }));
  const toggle = (k: "jenjang" | "mapel", v: string) => set(k, f[k].includes(v) ? f[k].filter((x) => x !== v) : [...f[k], v]);
  const message = buildMessage(f);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setTried(true);
    if (!valid) return;
    window.open(wa(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const err = (k: keyof typeof errors) => tried && errors[k];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
      <form data-reveal onSubmit={submit} noValidate className="rounded-[2rem] border-[2.5px] border-brand-orange bg-white p-5 shadow-card sm:p-7">
        <h3 className="text-xl md:text-2xl">Form lamaran</h3>
        <p className="mt-1 text-[15px] text-muted-foreground">Isi singkat, lalu pesan lamaran otomatis tersusun untuk dikirim via WhatsApp.</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="grid gap-1.5 sm:col-span-2" htmlFor={`${id}-nama`}>
            <span className="text-sm font-extrabold text-navy">Nama lengkap *</span>
            <input id={`${id}-nama`} className={inputClass} value={f.nama} onChange={(e) => set("nama", e.target.value)} placeholder="Contoh: Siti Aminah" autoComplete="name" aria-invalid={err("nama") || undefined} />
            {err("nama") && <span className="text-sm font-bold text-red">Nama wajib diisi.</span>}
          </label>
          <label className="grid gap-1.5" htmlFor={`${id}-domisili`}>
            <span className="text-sm font-extrabold text-navy">Domisili *</span>
            <input id={`${id}-domisili`} className={inputClass} value={f.domisili} onChange={(e) => set("domisili", e.target.value)} placeholder="Contoh: Giri, Banyuwangi" aria-invalid={err("domisili") || undefined} />
            {err("domisili") && <span className="text-sm font-bold text-red">Domisili wajib diisi.</span>}
          </label>
          <div className="grid grid-cols-[6.5rem_1fr] gap-2">
            <label className="grid gap-1.5" htmlFor={`${id}-pendidikan`}>
              <span className="text-sm font-extrabold text-navy">Pendidikan *</span>
              <select id={`${id}-pendidikan`} className={inputClass} value={f.pendidikan} onChange={(e) => set("pendidikan", e.target.value)}>
                <option>S1</option>
                <option>S2</option>
                <option>S3</option>
              </select>
            </label>
            <label className="grid gap-1.5" htmlFor={`${id}-jurusan`}>
              <span className="text-sm font-extrabold text-navy">Jurusan *</span>
              <input id={`${id}-jurusan`} className={inputClass} value={f.jurusan} onChange={(e) => set("jurusan", e.target.value)} placeholder="Pend. Matematika" aria-invalid={err("jurusan") || undefined} />
            </label>
            {err("jurusan") && <span className="col-span-2 text-sm font-bold text-red">Jurusan wajib diisi.</span>}
          </div>

          <fieldset className="grid gap-2 sm:col-span-2">
            <legend className="mb-2 text-sm font-extrabold text-navy">Jenjang yang dikuasai *</legend>
            <div className="flex flex-wrap gap-2">
              {JENJANG.map((j) => (
                <Chip key={j} on={f.jenjang.includes(j)} onClick={() => toggle("jenjang", j)}>
                  {j}
                </Chip>
              ))}
            </div>
            {err("jenjang") && <span className="text-sm font-bold text-red">Pilih minimal satu jenjang.</span>}
          </fieldset>

          <fieldset className="grid gap-2 sm:col-span-2">
            <legend className="mb-2 text-sm font-extrabold text-navy">Mapel unggulan</legend>
            <div className="flex flex-wrap gap-2">
              {MAPEL.map((m) => (
                <Chip key={m} on={f.mapel.includes(m)} onClick={() => toggle("mapel", m)}>
                  {m}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset className="grid gap-2 sm:col-span-2">
            <legend className="mb-2 text-sm font-extrabold text-navy">Punya kendaraan pribadi?</legend>
            <div className="flex gap-2">
              {["Ya", "Tidak"].map((k) => (
                <Chip key={k} on={f.kendaraan === k} onClick={() => set("kendaraan", f.kendaraan === k ? "" : k)}>
                  {k}
                </Chip>
              ))}
            </div>
          </fieldset>
        </div>

        <button type="submit" className={cn(buttonVariants(), "pop mt-7 h-12 w-full rounded-full px-6 text-base font-extrabold sm:w-auto")}>
          <Send className="size-5" /> Kirim lamaran via WhatsApp
        </button>
        {tried && !valid && <p className="mt-3 text-sm font-bold text-red">Lengkapi kolom bertanda * dulu ya.</p>}
        {sent && (
          <p className="mt-3 flex items-center gap-2 text-sm font-bold text-green">
            <CheckCheck className="size-5" /> WhatsApp terbuka. Jangan lupa lampirkan CV-mu di chat tersebut.
          </p>
        )}
      </form>

      {/* Pratinjau pesan WhatsApp */}
      <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="lg:sticky lg:top-28 lg:self-start">
        <p className="mb-3 text-sm font-extrabold tracking-wide text-navy uppercase">Pratinjau pesan</p>
        <div className="overflow-hidden rounded-[2rem] border-[6px] border-white bg-[#ECE5DD] shadow-card">
          <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
            <span className="grid size-9 place-items-center rounded-full bg-white/20">
              <MessageCircle className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="font-bold">Admin RH Cemerlang</p>
              <p className="text-xs text-white/75">WhatsApp</p>
            </div>
          </div>
          <div className="min-h-64 p-4">
            <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] p-3 text-[14px] leading-relaxed whitespace-pre-line text-ink shadow-sm">
              {message}
              <span className="mt-1 flex items-center justify-end gap-1 text-[11px] text-ink/50">
                sekarang <CheckCheck className="size-3.5 text-[#34B7F1]" />
              </span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Pesan ini akan terbuka di WhatsApp. Lampirkan CV-mu di chat setelah pesan terkirim.</p>
      </div>
    </div>
  );
}
