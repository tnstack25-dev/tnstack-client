import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { websiteOptimizationService as data } from "@/config/website-optimization-service";

export function OptimizationBenefits() {
  return (
    <section className="py-12">
      <Reveal>
        <ServicesSectionLabel>Tối ưu website là gì?</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold tracking-[-.04em] sm:text-3xl">
          Tối ưu website giúp tăng tốc, tăng khách hàng và phát triển bền vững
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--service-muted)]">
          Tối ưu website là quá trình cải thiện toàn diện về tốc độ, cấu trúc,
          hiệu suất và khả năng thân thiện với công cụ tìm kiếm. Website được
          tối ưu tốt mang lại trải nghiệm mượt mà hơn và hỗ trợ tăng khả năng
          chuyển đổi.
        </p>
      </Reveal>
      <Stagger className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.valueCards.map(({ title, description, icon: Icon }) => (
          <StaggerItem key={title}>
            <article className="group flex h-full gap-4 rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--service-accent)]/45">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--service-accent)]/10 text-[var(--service-accent)]">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--service-muted)]">
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
