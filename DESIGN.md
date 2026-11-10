# RH Cemerlang — Design System

Sumber: logo RHC + 5 materi visual (poster promo les, open recruitment tentor, Hari Pahlawan, formulir pendaftaran, infografis IPA).
Karakter brand: **ceria, hangat, ramah anak, tapi tetap kredibel untuk orang tua**. Visualnya seperti poster sekolah: background cream, stiker, pill warna-warni, coretan tangan.

Tagline: _"Bikin kamu paham, bukan sekedar hafal."_

---

## 1. Color

### Brand core (dari logo)
| Token | Hex | Asal | Pemakaian |
|---|---|---|---|
| `brand-orange` | `#EF5B25` | huruf **R** | Primary: headline highlight, section bar, MTK pill, tombol sekunder |
| `brand-teal` | `#4CBE9A` | huruf **H** | Secondary: aksen, judul "Rumbel RH Cemerlang", ilustrasi |
| `brand-yellow` | `#FBBC2E` | huruf **C** | Highlight: banner subtitle, sunburst, badge, bintang |
| `ink` | `#1D1D1B` | wordmark | Teks utama |

### Supporting (dari poster)
| Token | Hex | Pemakaian |
|---|---|---|
| `navy` | `#1F2A5C` | Headline ("Yuk, Les di"), pill section header, footer band |
| `red` | `#E2382A` | CTA utama (Daftar/WhatsApp), headline "RH Cemerlang!" |
| `green` | `#3E9A4E` | Checklist icon, IPA pill, kualifikasi/keuntungan |
| `purple` | `#7B4FC9` | BING pill, aksen kategori ke-4 |
| `whatsapp` | `#25D366` | Hanya ikon WhatsApp |

### Surface
| Token | Hex | Pemakaian |
|---|---|---|
| `cream` | `#FFF8EC` | Background halaman |
| `cream-deep` | `#FDEFD3` | Section alternatif, band kuning lembut |
| `paper` | `#FFFFFF` | Card |
| `line` | `#E9DCC3` | Border tipis / divider |

### Aturan kontras (WCAG)
- Teks putih di `brand-orange` / `red` → **hanya bold ≥18px** (≈3.3–4.2:1). Teks kecil pakai varian `-600`.
- `brand-yellow` **tidak boleh** jadi warna teks di background terang; pakai sebagai background dengan teks `navy`.
- Body text selalu `ink` atau `navy` di atas `cream`/`paper`.

---

## 2. Typography

| Role | Font | Weight | Ciri dari poster |
|---|---|---|---|
| Display / headline | **Baloo 2** | 800 | Rounded, tebal, "chunky" — seperti "Yuk, Les di RH Cemerlang!" |
| Body / UI | **Nunito** | 400 / 600 / 700 | Rounded sans, ramah, mudah dibaca orang tua |
| Handwritten accent | **Caveat** | 600–700 | Tagline, speech bubble ("Bersama RHC, prestasi anak makin berarti!") |
| Wordmark | (pakai SVG logo) | — | Jangan diketik ulang |

Scale (mobile → desktop):
| Token | Size | Pemakaian |
|---|---|---|
| `display` | 40 → 72px, lh 1.05 | Hero headline |
| `h2` | 28 → 40px, lh 1.15 | Judul section |
| `h3` | 20 → 24px | Judul card |
| `body` | 16 → 18px, lh 1.6 | Paragraf |
| `small` | 14px | Caption, alamat |
| `hand` | 22 → 28px | Tagline Caveat |

**Headline treatment "stiker"**: teks display dua warna (navy + red/orange) dengan outline putih tebal + drop shadow lembut:
```css
.sticker-text { paint-order: stroke fill; -webkit-text-stroke: 6px #fff; text-shadow: 0 4px 0 rgb(0 0 0 / .08); }
```

---

## 3. Shape, Border & Shadow

| Token | Value | Pemakaian |
|---|---|---|
| `radius-pill` | `9999px` | Section header pill, CTA, subject chip |
| `radius-card` | `24px` | Card fitur, form section |
| `radius-sm` | `12px` | Input, badge kecil |
| `border-dashed` | `2px dashed` warna brand | Card "Kenapa Memilih" (dashed kuning/cream), stitching di subject pill |
| `border-solid` | `2.5px solid` warna section | Card form/recruitment (outline oranye/hijau/kuning) |
| `shadow-card` | `0 6px 0 rgb(31 42 92 / .06), 0 12px 24px rgb(31 42 92 / .08)` | Card mengambang |
| `shadow-pop` | `0 4px 0 <warna-600>` | Tombol & pill — efek "tombol mainan" 3D |

---

## 4. Signature Components

1. **Section header pill** — pill `navy`, teks putih, kata kunci berwarna `brand-yellow` (mis. "Kenapa Memilih **RH Cemerlang?**"), diapit sunburst rays kuning di kiri-kanan.
2. **Tabbed section card** (dari formulir/recruitment) — card outline berwarna dengan label tab di pojok kiri atas: badge huruf/angka bulat + bar judul uppercase (`A. DATA ANAK` oranye, `B.` teal, `C.` kuning).
3. **Feature card** — cream, border dashed, ilustrasi flat di atas, judul 2–3 baris center.
4. **Subject chip** — pill besar solid (MTK `orange`, IPA `green`, BING `purple`) + ikon + stitching dashed putih di dalam border + `shadow-pop`.
5. **CTA WhatsApp** — blok `red`, ikon WhatsApp, label kecil "Daftar Sekarang!" + nomor besar bold. Ada di hero, mid-page, dan sticky di mobile.
6. **Checklist** — ikon centang di lingkaran `green`, item dipisah garis dashed tipis.
7. **Speech bubble** — bubble putih/border tipis, teks Caveat, untuk testimoni/quote.
8. **Footer band** — strip `navy` dengan tagline Caveat putih (kata "paham"/"hafal" kuning), alamat + WhatsApp.

---

## 5. Decoration & Imagery

- **Doodle set** (stroke navy, fill kuning/oranye): lampu ide, pesawat kertas + jejak dashed, bintang, sunburst rays, pensil, tumpukan buku.
- **Pattern**: motif maze/kufic dari logo → background pattern opacity 5–8%.
- **Bentuk organik**: blob/bush hijau-oranye di sudut, wave kuning di bawah section.
- **Foto/ilustrasi**: anak SD/SMP berseragam, ekspresi ceria, gaya semi-realistis / flat cartoon. Untuk momen nasional (Hari Pahlawan dll.) palet bergeser ke merah-putih + langit biru.
- Maksimal 2–3 doodle per viewport supaya konten tetap terbaca.

---

## 6. Layout & Spacing

- Mobile-first, container `max-w-6xl`, gutter 16px (mobile) / 24px (desktop).
- Spacing basis 4px; jarak antar section `py-16 md:py-24`.
- Grid fitur: 2 kolom mobile → 4 kolom desktop (mengikuti "Kenapa Memilih").
- Headline & section header **center-aligned** (gaya poster); konten detail (checklist, form) left-aligned.

---

## 7. Voice & Copy

- Bahasa Indonesia santai-sopan, menyapa orang tua ("anak Anda") dan anak ("kamu").
- Ajakan pendek berenergi: "Yuk, …!", "Daftar Sekarang!", "Yuk Bergabung Bersama Kami!".
- Nilai jual inti: Tentor profesional · Metode efektif & menyenangkan · Pemahaman & prestasi meningkat · Suasana nyaman & suportif.
- Program: Calistung · Kelas 3–6 (mapel umum) · Kelas 7–9 (MTK, BING, IPA) · TKA · Reguler / Privat.
- Kontak: WhatsApp 0822-5703-1533 · Jl. Kapten Ilyas No. 20, Banyuwangi.

---

## 8. Tailwind v4 tokens

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Caveat:wght@600;700&family=Nunito:wght@400;600;700;800&display=swap");
@import "tailwindcss";

@theme {
  --color-brand-orange: #EF5B25;
  --color-brand-orange-600: #C9441A;
  --color-brand-teal: #4CBE9A;
  --color-brand-teal-600: #2E9A78;
  --color-brand-yellow: #FBBC2E;
  --color-brand-yellow-600: #E09E0B;
  --color-navy: #1F2A5C;
  --color-red: #E2382A;
  --color-red-600: #B92A1E;
  --color-green: #3E9A4E;
  --color-green-600: #2F7A3C;
  --color-purple: #7B4FC9;
  --color-purple-600: #5F38A6;
  --color-whatsapp: #25D366;
  --color-ink: #1D1D1B;
  --color-cream: #FFF8EC;
  --color-cream-deep: #FDEFD3;
  --color-line: #E9DCC3;

  --font-display: "Baloo 2", system-ui, sans-serif;
  --font-sans: "Nunito", system-ui, sans-serif;
  --font-hand: "Caveat", cursive;

  --radius-card: 24px;
  --shadow-card: 0 6px 0 rgb(31 42 92 / .06), 0 12px 24px rgb(31 42 92 / .08);
}

@layer base {
  body { @apply bg-cream text-ink font-sans; }
  h1, h2, h3 { @apply font-display font-extrabold text-navy; }
}
```

Contoh pemakaian:
```html
<h2 class="inline-block rounded-full bg-navy px-6 py-2 text-white">
  Kenapa Memilih <span class="text-brand-yellow">RH Cemerlang?</span>
</h2>

<a class="inline-flex items-center gap-3 rounded-full bg-red px-6 py-3 text-lg font-extrabold text-white shadow-[0_4px_0_var(--color-red-600)] hover:translate-y-0.5 hover:shadow-[0_2px_0_var(--color-red-600)] transition">
  Daftar via WhatsApp
</a>

<span class="rounded-full bg-brand-orange px-5 py-2 font-display text-xl text-white outline-2 outline-dashed outline-white/70 -outline-offset-6 shadow-[0_4px_0_var(--color-brand-orange-600)]">MTK</span>
```
