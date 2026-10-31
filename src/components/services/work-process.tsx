import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { Container } from "@/components/ui/container";
import { servicesPageConfig } from "@/config/services";

export function WorkProcess() {
  return (
    <section className="border-y border-[var(--service-accent)]/10 bg-[var(--service-surface)] py-24 lg:py-28">
      <Container className="max-w-[1440px] px-4 md:px-6 xl:px-10">
        <Reveal className="text-center">
          <ServicesSectionLabel>Quy trình làm việc</ServicesSectionLabel>
          <h2 className="mx-auto mt-5 max-w-[32ch] text-[clamp(1.75rem,2.7vw,2.125rem)] leading-[1.2] font-bold tracking-[-0.025em] text-balance text-[var(--service-heading)]">
            Đơn giản · Minh bạch · Hiệu quả
          </h2>
        </Reveal>

        <Stagger className="relative mt-12 grid gap-8 md:grid-cols-5 md:gap-5">
          <div
            className="absolute top-7 bottom-7 left-7 w-px bg-gradient-to-b from-[var(--service-accent)]/10 via-[var(--service-accent)]/40 to-[var(--service-accent)]/10 md:hidden"
            aria-hidden="true"
          />
          <div
            className="absolute top-7 right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-[var(--service-accent)]/40 to-transparent md:block"
            aria-hidden="true"
          />
          {servicesPageConfig.process.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title} className="relative">
                <article className="grid grid-cols-[3.5rem_1fr] gap-4 md:block">
                  <span className="relative z-10 grid size-14 place-items-center rounded-full border border-[var(--service-accent)]/50 bg-[var(--service-card)] text-[var(--service-accent)] shadow-[0_0_22px_rgba(37,99,235,.1)]">
                    <Icon className="size-5" />
                  </span>
                  <div className="md:mt-5">
                    <p className="text-sm font-semibold text-[var(--service-heading)]">
                      {index + 1}. {step.title}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-[var(--service-muted)]">
                      {step.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
