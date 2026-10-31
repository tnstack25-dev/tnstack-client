import { Reveal } from "@/components/motion/reveal";
import { otherServicesPage as data } from "@/config/other-services";

export function OtherServicesBenefits() {
  return (
    <Reveal>
      <section
        aria-label="Lợi ích dịch vụ bổ trợ"
        className="mt-5 grid overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-card)] sm:grid-cols-2 lg:grid-cols-4"
      >
        {data.benefits.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex gap-3 border-[var(--service-accent)]/10 p-5 transition hover:bg-[var(--service-accent)]/4 lg:not-last:border-r"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[var(--service-accent)]/20 bg-[var(--service-accent)]/10 text-[var(--service-accent)]">
              <Icon className="size-5" />
            </span>
            <div>
              <h2 className="text-sm font-bold">{title}</h2>
              <p className="mt-1 text-xs leading-5 text-[var(--service-muted)]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </Reveal>
  );
}
