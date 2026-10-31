import { ArrowRight, Check } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

import { servicesPageConfig } from "@/config/services";

type Service = (typeof servicesPageConfig.services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={service.href as Route}
      aria-label={`Xem chi tiết dịch vụ ${service.title}`}
      className="group relative flex h-full min-h-80 flex-col overflow-hidden rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--service-accent)]/45 hover:bg-[var(--service-card-hover)] hover:shadow-[0_18px_55px_rgba(0,0,0,.28),0_0_28px_rgba(37,99,235,.05)] focus-visible:ring-2 focus-visible:ring-[var(--service-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--service-bg)] focus-visible:outline-none"
    >
      <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[var(--service-accent)] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
      <Icon className="size-9 text-[var(--service-accent)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
      <h3 className="mt-7 text-[17px] leading-[1.35] font-semibold text-pretty text-[var(--service-heading)] sm:text-lg">
        {service.title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-[var(--service-muted)]">
        {service.description}
      </p>
      {"items" in service ? (
        <ul className="mt-5 space-y-2.5">
          {service.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs leading-5 text-[var(--service-muted)]"
            >
              <Check className="mt-0.5 size-3.5 shrink-0 text-[var(--service-accent)]" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-[var(--service-accent)] transition-colors group-hover:text-[var(--service-accent-hover)]">
        Xem chi tiết
        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
