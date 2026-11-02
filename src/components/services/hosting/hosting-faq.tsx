"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { hostingService as data } from "@/config/hosting-service";

export function HostingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-card)] p-4">
      <h2 className="px-2 pb-3 text-lg font-bold">Câu hỏi thường gặp</h2>
      {data.faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className="border-b border-[var(--service-accent)]/10 last:border-0"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`hosting-faq-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full gap-3 py-4 text-left text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--service-accent)]"
            >
              <span className="flex-1">{faq.question}</span>
              {isOpen ? (
                <Minus className="size-4" />
              ) : (
                <Plus className="size-4" />
              )}
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <p
                id={`hosting-faq-${index}`}
                className="overflow-hidden pb-4 text-xs leading-5 text-[var(--service-muted)]"
              >
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
