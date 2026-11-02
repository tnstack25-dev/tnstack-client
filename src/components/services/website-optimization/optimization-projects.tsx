import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";

const projects = [
  ["Website du lịch", "Tối ưu tốc độ tải trang", "from-cyan-950 to-blue-950"],
  ["Website nhà hàng", "Tối ưu Core Web Vitals", "from-blue-950 to-stone-900"],
  ["Website nội thất", "Chuẩn SEO kỹ thuật", "from-slate-800 to-blue-950"],
  [
    "Website bán hàng",
    "Tối ưu trải nghiệm chuyển đổi",
    "from-slate-900 to-blue-950",
  ],
] as const;
export function OptimizationProjects() {
  return (
    <section className="py-12">
      <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <ServicesSectionLabel>Dự án tối ưu tiêu biểu</ServicesSectionLabel>
          <h2 className="mt-4 text-2xl font-bold tracking-[-.04em] sm:text-3xl">
            Một số website minh họa tối ưu
          </h2>
          <p className="mt-2 text-xs text-[var(--service-muted)]">
            Các mẫu dưới đây là dữ liệu demo, không phải dự án khách hàng đã xác
            minh.
          </p>
        </div>
        <Link
          href="/du-an"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--service-accent)]"
        >
          Xem tất cả dự án <ArrowRight className="size-4" />
        </Link>
      </Reveal>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map(([title, desc, theme]) => (
          <article
            key={title}
            className="group overflow-hidden rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)]"
          >
            <div
              className={`relative aspect-[4/3] bg-gradient-to-br ${theme} p-4`}
            >
              <span className="absolute top-3 left-3 rounded-full bg-[var(--service-bg)]/80 px-2 py-1 text-[9px] font-bold text-[var(--service-accent)]">
                DEMO
              </span>
              <div className="absolute inset-x-5 top-8 bottom-5 rounded-t-xl border-4 border-[var(--service-bg)] bg-[#f1f5f9] p-2 transition duration-500 group-hover:scale-105">
                <div className="h-2 bg-[#0f172a]" />
                <div className="mt-2 h-12 rounded bg-gradient-to-r from-[var(--service-surface-strong)] to-[var(--service-accent)]/40" />
                <div className="mt-2 h-8 rounded bg-[#1e40af]/15" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-1 text-xs text-[var(--service-muted)]">{desc}</p>
              <Link
                href="/du-an"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--service-accent)]"
              >
                Xem chi tiết <ArrowRight className="size-3" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
