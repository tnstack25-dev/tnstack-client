import { ArrowRight } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { websiteDesignService } from "@/config/website-design-service";

export function ServiceSidebar({
  activeTitle = "Thiết kế website theo yêu cầu",
}: {
  activeTitle?: string;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-card)] p-4">
      <h2 className="px-2 pb-4 text-lg font-bold text-[var(--service-heading)]">
        Danh mục dịch vụ
      </h2>
      <nav aria-label="Danh mục dịch vụ">
        {websiteDesignService.sidebarServices.map(
          ({ title, href, icon: Icon }) => (
            <Link
              key={title}
              href={href as Route}
              aria-current={title === activeTitle ? "page" : undefined}
              className={`group flex items-center gap-3 border-b border-[var(--service-accent)]/8 px-3 py-3.5 text-sm transition last:border-0 ${title === activeTitle ? "rounded-xl border border-[var(--service-accent)]/50 bg-[var(--service-accent)]/8 text-[var(--service-accent)]" : "text-[var(--service-muted-strong)] hover:bg-[var(--service-accent)]/5 hover:text-[var(--service-accent)]"}`}
            >
              <Icon className="size-4 shrink-0" />
              <span className="flex-1">{title}</span>
              <ArrowRight className="size-4 translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          ),
        )}
      </nav>
    </section>
  );
}
