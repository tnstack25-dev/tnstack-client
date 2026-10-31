import { ArrowRight, ChartNoAxesCombined } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { websiteOptimizationService as data } from "@/config/website-optimization-service";

export function OptimizationProcess() {
  return (
    <section className="border-y border-[var(--service-accent)]/10 py-12">
      <Reveal>
        <ServicesSectionLabel>Quy trình tối ưu website</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold tracking-[-.04em] sm:text-3xl">
          Quy trình tối ưu website chuyên nghiệp, minh bạch
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-5 md:grid-cols-5">
        {data.process.map(([title, description], i) => (
          <article
            key={title}
            className="group relative grid grid-cols-[3.5rem_1fr] gap-4 md:block"
          >
            <span className="grid size-14 place-items-center rounded-full border border-[var(--service-accent)]/35 bg-[var(--service-surface-strong)] font-bold text-[var(--service-accent)] group-hover:bg-[var(--service-accent)] group-hover:text-[var(--service-on-accent)]">
              0{i + 1}
            </span>
            {i < 4 ? (
              <ArrowRight className="absolute top-5 -right-4 hidden size-4 text-[var(--service-accent)]/45 md:block" />
            ) : null}
            <div className="md:mt-5">
              <ChartNoAxesCombined className="mb-3 hidden size-5 text-[var(--service-accent)] md:block" />
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--service-muted)]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
