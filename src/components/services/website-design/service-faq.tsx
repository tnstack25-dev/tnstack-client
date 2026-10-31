"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { websiteDesignService } from "@/config/website-design-service";

export function ServiceFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-card)] p-4">
      <h2 className="px-2 pb-3 text-lg font-bold text-[var(--service-heading)]">
        Câu hỏi thường gặp
      </h2>
      {websiteDesignService.faqs.map((faq, i) => {
        const active = open === i;
        return (
          <div
            key={faq.question}
            className="border-b border-[var(--service-accent)]/10 last:border-0"
          >
            <button
              type="button"
              aria-expanded={active}
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center gap-3 py-4 text-left text-xs font-semibold text-[var(--service-muted-strong)] hover:text-[var(--service-accent)]"
            >
              <span className="flex-1">{faq.question}</span>
              {active ? (
                <Minus className="size-4" />
              ) : (
                <Plus className="size-4" />
              )}
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="pb-4 text-xs leading-5 text-[var(--service-muted)]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
