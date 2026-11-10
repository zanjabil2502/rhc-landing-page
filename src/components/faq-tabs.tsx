"use client";

import { useState } from "react";
import { BookOpen, ClipboardList, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_GROUPS } from "@/lib/faq";
import { cn } from "@/lib/utils";

const ICONS = { umum: Users, program: BookOpen, daftar: ClipboardList } as const;

// ponytail: FAQ per kategori supaya tidak memanjang. Semua panel tetap dirender (yang tidak aktif `hidden`)
// supaya seluruh tanya-jawab ada di HTML untuk mesin pencari dan cocok dengan JSON-LD FAQPage.
export function FaqTabs() {
  const [tab, setTab] = useState<string>(FAQ_GROUPS[0].id);

  return (
    <div data-reveal>
      <div role="tablist" aria-label="Kategori pertanyaan" className="mx-auto mb-6 flex w-fit gap-1 rounded-full border-2 border-line bg-white p-1">
        {FAQ_GROUPS.map(({ id, label }) => {
          const Icon = ICONS[id];
          const active = id === tab;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`faq-tab-${id}`}
              aria-selected={active}
              aria-controls={`faq-panel-${id}`}
              onClick={() => setTab(id)}
              className={cn(
                "inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-extrabold transition-all sm:px-5 sm:text-base",
                active ? "bg-navy text-white shadow-[0_3px_0_var(--color-navy-700)]" : "text-navy hover:bg-cream-deep",
              )}
            >
              <Icon className="hidden size-4 sm:block" /> {label}
            </button>
          );
        })}
      </div>

      {FAQ_GROUPS.map((group) => (
        <div key={group.id} role="tabpanel" id={`faq-panel-${group.id}`} aria-labelledby={`faq-tab-${group.id}`} hidden={group.id !== tab}>
          <Accordion className="gap-3">
            {group.items.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={f.q}
                style={{ animationDelay: `${i * 70}ms` }}
                className={cn("rounded-2xl border-2 border-line bg-white px-5 not-last:border-b-2 hover:border-brand-yellow", group.id === tab && "animate-fade-up")}
              >
                <AccordionTrigger className="py-4 font-heading text-lg font-bold text-navy hover:no-underline">{f.q}</AccordionTrigger>
                {/* keepMounted: jawaban tetap ada di HTML walau accordion tertutup */}
                <AccordionContent keepMounted className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}
