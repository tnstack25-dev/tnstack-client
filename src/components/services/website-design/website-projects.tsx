import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { websiteDesignService } from "@/config/website-design-service";

export function WebsiteProjects() {
  return (
    <section className="py-12">
      <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <ServicesSectionLabel>Mẫu website thiết kế</ServicesSectionLabel>
          <h2 className="mt-4 text-2xl font-bold tracking-[-.04em] text-[var(--service-heading)] sm:text-3xl">
            Một số giao diện minh họa
          </h2>
          <p className="mt-2 text-xs text-[var(--service-muted)]">
            Dữ liệu demo định hướng lĩnh vực, không phải tuyên bố dự án TNStack
            đã thực hiện.
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
        {websiteDesignService.projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)]"
          >
            <div
              className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${project.theme} p-4`}
            >
              <span className="absolute top-3 left-3 rounded-full bg-[var(--service-bg)]/80 px-2.5 py-1 text-[9px] font-bold tracking-wider text-[var(--service-accent)] uppercase">
                Demo
              </span>
              <div className="absolute inset-x-5 top-8 bottom-5 origin-bottom rounded-t-xl border-[4px] border-[var(--service-bg)] bg-[#f1f5f9] p-2 shadow-2xl transition duration-500 group-hover:scale-105">
                <div className="h-2 rounded bg-[#0f172a]" />
                <div className="mt-2 h-12 rounded bg-gradient-to-r from-[#1e40af] to-[var(--service-accent)]/40" />
                <div className="mt-2 grid grid-cols-3 gap-1">
                  {[1, 2, 3].map((n) => (
                    <i key={n} className="h-8 rounded bg-[#1e40af]/20" />
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-[var(--service-heading)]">
                {project.title}
              </h3>
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
