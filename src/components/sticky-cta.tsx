"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Tombol CTA sticky di mobile yang menyingkir saat section `hideWhen` terlihat (mis. form lamaran),
// supaya tidak menutupi isian. Pakai state React, jadi tidak mengubah DOM sebelum hydration.
export function StickyCta({ hideWhen, children }: { hideWhen: string; children: React.ReactNode }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById(hideWhen);
    if (!target) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { rootMargin: "0px 0px -20% 0px" });
    io.observe(target);
    return () => io.disconnect();
  }, [hideWhen]);

  return (
    <div
      aria-hidden={hidden || undefined}
      className={cn(
        "fixed inset-x-4 bottom-4 z-50 transition-all duration-300 sm:hidden",
        hidden && "pointer-events-none translate-y-24 opacity-0",
      )}
    >
      {children}
    </div>
  );
}
