import { Reveal } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { websiteDesignService } from "@/config/website-design-service";

export function WebsiteProcess() {
  return (
    <section className="border-y border-[var(--service-accent)]/10 py-12">
      <Reveal>
        <ServicesSectionLabel>Quy trình thiết kế website</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold tracking-[-.04em] text-[var(--service-heading)] sm:text-3xl">
          Quy trình làm việc chuyên nghiệp, minh bạch
        </h2>
      </Reveal>
      <div className="relative mt-8 grid gap-6 md:grid-cols-5">
        <div className="absolute top-7 right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-[var(--service-accent)]/35 to-transparent md:block" />
        {websiteDesignService.process.map(
          ({ title, description, icon: Icon }, i) => (
            <article
              key={title}
              className="group relative grid grid-cols-[3.5rem_1fr] gap-4 md:block"
            >
              <span className="relative z-10 grid size-14 place-items-center rounded-full border border-[var(--service-accent)]/35 bg-[var(--service-surface-strong)] font-bold text-[var(--service-accent)] shadow-[0_0_20px_rgba(37,99,235,.08)] transition group-hover:bg-[var(--service-accent)] group-hover:text-[var(--service-on-accent)]">
                0{i + 1}
              </span>
              <div className="md:mt-5">
                <Icon className="mb-3 hidden size-5 text-[var(--service-accent)] md:block" />
                <h3 className="text-sm font-bold text-[var(--service-heading)]">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-[var(--service-muted)]">
                  {description}
                </p>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
