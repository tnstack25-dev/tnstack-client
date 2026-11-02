import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { websiteOptimizationService as data } from "@/config/website-optimization-service";

export function OptimizationCategories() {
  return (
    <section className="py-12">
      <Reveal>
        <ServicesSectionLabel>Các hạng mục tối ưu</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold tracking-[-.04em] sm:text-3xl">
          Tối ưu toàn diện từ kỹ thuật đến nội dung
        </h2>
      </Reveal>
      <Stagger className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.categories.map(({ title, description, icon: Icon }) => (
          <StaggerItem key={title}>
            <article className="h-full rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--service-accent)]/45">
              <span className="grid size-11 place-items-center rounded-full bg-[var(--service-accent)]/10 text-[var(--service-accent)]">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--service-muted)]">
                {description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
