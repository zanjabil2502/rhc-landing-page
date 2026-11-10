import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Semua halaman statis -> export ke out/ lalu disajikan Cloudflare Workers Static Assets (lihat wrangler.jsonc).
  // ponytail: tanpa adapter OpenNext; tambahkan @opennextjs/cloudflare kalau nanti butuh fitur server.
  output: "export",
  images: { unoptimized: true }, // image optimizer Next butuh server; gambar di public/ sudah WebP kecil
  // cacheComponents/partialPrefetching (PPR) dimatikan: tidak kompatibel dengan export dan tidak dibutuhkan situs statis.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
