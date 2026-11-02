import { websiteDesignService } from "@/config/website-design-service";

export function WebsiteBenefits() {
  return (
    <section
      aria-label="Lợi ích nổi bật"
      className="grid overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-card)] sm:grid-cols-2 lg:grid-cols-4"
    >
      {websiteDesignService.benefits.map(
        ({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex gap-3 border-[var(--service-accent)]/10 p-5 max-lg:border-b lg:not-last:border-r"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--service-accent)]/10 text-[var(--service-accent)]">
              <Icon className="size-5" />
            </span>
            <div>
              <h2 className="text-sm font-bold text-[var(--service-heading)]">
                {title}
              </h2>
              <p className="mt-1 text-xs leading-5 text-[var(--service-muted)]">
                {description}
              </p>
            </div>
          </article>
        ),
      )}
    </section>
  );
}
