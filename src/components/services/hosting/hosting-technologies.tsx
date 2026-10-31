import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { hostingService as data } from "@/config/hosting-service";

export function HostingTechnologies() {
  return (
    <section className="border-t border-[var(--service-accent)]/10 py-12">
      <Reveal>
        <ServicesSectionLabel>Công nghệ hạ tầng</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
          Hạ tầng hiện đại, hiệu suất vượt trội
        </h2>
      </Reveal>
      <Stagger className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {data.technologies.map(({ title, description, icon: Icon }) => (
          <StaggerItem key={title}>
            <article className="flex h-full gap-3 rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)] p-4 transition duration-300 hover:-translate-y-1 hover:border-[var(--service-accent)]/45">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--service-accent)]/10 text-[var(--service-accent)]">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-1 text-[11px] leading-5 text-[var(--service-muted)]">
                  {description}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
