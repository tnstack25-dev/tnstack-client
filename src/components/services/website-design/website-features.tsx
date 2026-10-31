import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { websiteDesignService } from "@/config/website-design-service";

export function WebsiteFeatures() {
  return (
    <section className="py-12">
      <Reveal>
        <ServicesSectionLabel>Tính năng nổi bật</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold tracking-[-.04em] text-[var(--service-heading)] sm:text-3xl">
          Vì sao nên chọn dịch vụ thiết kế website của{" "}
          <span className="text-[var(--service-accent)]">TNSTACK?</span>
        </h2>
      </Reveal>
      <Stagger className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {websiteDesignService.features.map(
          ({ title, description, icon: Icon }) => (
            <StaggerItem key={title}>
              <article className="group flex h-full gap-4 rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--service-accent)]/45 hover:bg-[var(--service-card-hover)]">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[var(--service-accent)]/25 bg-[var(--service-accent)]/10 text-[var(--service-accent)] transition group-hover:shadow-[0_0_24px_rgba(37,99,235,.15)]">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-bold text-[var(--service-heading)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--service-muted)]">
                    {description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ),
        )}
      </Stagger>
    </section>
  );
}
