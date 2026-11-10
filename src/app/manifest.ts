import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION } from "@/lib/site";

export const dynamic = "force-static"; // wajib untuk output: "export"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RH Cemerlang Rumah Belajar",
    short_name: "RH Cemerlang",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#fff8ec",
    theme_color: "#fff8ec",
    lang: "id",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
