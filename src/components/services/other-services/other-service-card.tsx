import { Check } from "lucide-react";
import type { OtherService } from "@/config/other-services";
import { OtherServiceButton } from "./other-service-button";

export function OtherServiceCard({ service }: { service: OtherService }) {
  const Icon = service.icon;
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--service-accent)]/45 hover:bg-[var(--service-card-hover)] hover:shadow-[0_20px_48px_rgba(37,99,235,.07)]">
      <span className="grid size-14 place-items-center rounded-2xl border border-[var(--service-accent)]/25 bg-[var(--service-accent)]/10 text-[var(--service-accent)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(37,99,235,.16)]">
        <Icon className="size-7" />
      </span>
      <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--service-muted-strong)]">
        {service.description}
      </p>
      <ul className="mt-5 space-y-3">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-2 text-xs leading-5 text-[var(--service-muted-strong)]"
          >
            <Check className="mt-0.5 size-4 shrink-0 text-[var(--service-accent)]" />
            {feature}
          </li>
        ))}
      </ul>
      <OtherServiceButton service={{ id: service.id, title: service.title }} />
    </article>
  );
}
