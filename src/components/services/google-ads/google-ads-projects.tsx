import { ArrowRight, Target } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";

const projects = [
  ["Website nội thất", "Quảng cáo tìm kiếm khách hàng có nhu cầu thiết kế"],
  ["Website du lịch", "Quảng cáo dịch vụ du lịch và đặt tour"],
  ["Website bán hàng", "Quảng cáo sản phẩm và hỗ trợ tối ưu chuyển đổi"],
  ["Website dịch vụ", "Tiếp cận khách hàng đang tìm kiếm dịch vụ"],
] as const;

export function GoogleAdsProjects() {
  return (
    <section className="py-12">
      <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <ServicesSectionLabel>Dự án tiêu biểu</ServicesSectionLabel>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Mẫu chiến dịch Google Ads theo lĩnh vực
          </h2>
          <p className="mt-2 text-xs text-[var(--service-muted)]">
            Các ví dụ minh họa, không phải dự án hoặc kết quả khách hàng đã xác
            minh.
          </p>
        </div>
        <Link
          href="/du-an"
          className="text-sm font-semibold text-[var(--service-accent)]"
        >
          Xem tất cả dự án →
        </Link>
      </Reveal>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map(([title, description], index) => (
          <article
            key={title}
            className="group overflow-hidden rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e293b] to-[var(--service-bg)] p-4">
              <span className="absolute top-3 left-3 z-10 rounded-full bg-[var(--service-bg)]/90 px-2 py-1 text-[9px] text-[var(--service-accent)]">
                DEMO
              </span>
              <div className="absolute inset-x-5 top-9 bottom-5 rounded-t-xl border-[5px] border-[var(--service-bg)] bg-[#f1f5f9] p-2 transition duration-300 group-hover:scale-105">
                <div className="h-3 bg-[#1e293b]" />
                <div
                  className={`mt-2 h-12 ${index % 2 ? "bg-gradient-to-r from-[#4285f4]/70 to-[#dbeafe]" : "bg-gradient-to-r from-[var(--service-surface-strong)] to-[var(--service-accent)]/40"}`}
                />
                <div className="mt-2 grid grid-cols-3 gap-1">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="h-7 rounded bg-[#dbeafe]" />
                  ))}
                </div>
              </div>
              <Target className="absolute right-3 bottom-3 size-5 text-[var(--service-accent)]" />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-1 text-xs leading-5 text-[var(--service-muted)]">
                {description}
              </p>
              <Link
                href="/du-an"
                className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--service-accent)]"
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
