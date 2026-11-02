import { ArrowDown, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";

export function BeforeAfterComparison() {
  return (
    <section className="border-t border-[var(--service-accent)]/10 py-12">
      <Reveal>
        <ServicesSectionLabel>Kết quả sau tối ưu</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold tracking-[-.04em] sm:text-3xl">
          Sự khác biệt trước và sau khi tối ưu
        </h2>
        <p className="mt-2 text-xs text-[var(--service-muted)]">
          Số liệu minh họa giao diện báo cáo, không phải kết quả thực tế và
          không áp dụng cho mọi website.
        </p>
      </Reveal>
      <div className="mt-7 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <MetricPanel mode="before" />
        <div className="mx-auto grid size-11 place-items-center rounded-full border border-[var(--service-accent)]/40 bg-[var(--service-accent)]/10 text-[var(--service-accent)]">
          <ArrowRight className="hidden size-5 lg:block" />
          <ArrowDown className="size-5 lg:hidden" />
        </div>
        <MetricPanel mode="after" />
      </div>
    </section>
  );
}

function MetricPanel({ mode }: { mode: "before" | "after" }) {
  const after = mode === "after";
  return (
    <article className="rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)] p-5">
      <span
        className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold ${after ? "bg-[var(--service-accent)]/12 text-[var(--service-accent)]" : "bg-orange-400/10 text-orange-300"}`}
      >
        {after ? "Sau khi tối ưu" : "Trước khi tối ưu"} · Minh họa
      </span>
      <div className="mt-5 grid grid-cols-[.75fr_1.25fr] items-center gap-5 rounded-xl bg-[var(--service-bg)] p-4">
        <div
          className={`grid aspect-square place-items-center rounded-full border-[9px] text-3xl font-bold ${after ? "border-[var(--service-accent)] text-[var(--service-accent)]" : "border-orange-400 text-orange-300"}`}
        >
          {after ? "98" : "42"}
        </div>
        <ul className="space-y-3 text-xs">
          {[
            ["Performance", after ? "98" : "42"],
            ["Accessibility", after ? "95" : "78"],
            ["Best Practices", after ? "100" : "83"],
            ["SEO", after ? "100" : "68"],
          ].map(([k, v]) => (
            <li
              key={k}
              className="flex justify-between border-b border-white/5 pb-2"
            >
              <span className="text-[var(--service-muted)]">{k}</span>
              <b
                className={
                  after ? "text-[var(--service-accent)]" : "text-orange-300"
                }
              >
                {v}
              </b>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
