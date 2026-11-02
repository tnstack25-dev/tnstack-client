import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { Container } from "@/components/ui/container";
import { servicesPageConfig } from "@/config/services";

export function WhyChooseUs() {
  return (
    <section className="pb-24 lg:pb-28">
      <Container className="max-w-[1440px] px-4 md:px-6 xl:px-10">
        <Reveal className="relative overflow-hidden rounded-3xl border border-[var(--service-accent)]/14 bg-[var(--service-surface)] p-7 sm:p-10 lg:p-12">
          <div
            className="absolute -top-32 left-1/3 size-72 rounded-full bg-[var(--service-accent)]/5 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <ServicesSectionLabel>Vì sao chọn TNStack</ServicesSectionLabel>
            <h2 className="mt-5 max-w-[32ch] text-[clamp(1.75rem,2.7vw,2.125rem)] leading-[1.2] font-bold tracking-[-0.025em] text-balance text-[var(--service-heading)]">
              Đồng hành cùng bạn trên hành trình phát triển website
            </h2>
            <Stagger className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
              {servicesPageConfig.benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <StaggerItem key={benefit.title}>
                    <article className="flex gap-4 lg:block">
                      <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[var(--service-accent)]/25 bg-[var(--service-accent)]/8 text-[var(--service-accent)] shadow-[0_0_26px_rgba(37,99,235,.07)]">
                        <Icon className="size-5" />
                      </span>
                      <div className="lg:mt-5">
                        <h3 className="text-[15px] leading-snug font-semibold text-balance text-[var(--service-heading)] lg:text-sm">
                          {benefit.title}
                        </h3>
                        <p className="mt-2 text-xs leading-5 text-[var(--service-muted)]">
                          {benefit.description}
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
