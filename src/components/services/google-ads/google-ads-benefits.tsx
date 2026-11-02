import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { googleAdsService as data } from "@/config/google-ads-service";

export function GoogleAdsBenefits() {
  return (
    <section className="py-12">
      <Reveal>
        <ServicesSectionLabel>Lợi ích khi chạy Google Ads</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
          Vì sao nên chọn dịch vụ chạy Google Ads của TNSTACK?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--service-muted)]">
          Google Ads giúp doanh nghiệp xuất hiện trước khách hàng đang tìm kiếm
          sản phẩm hoặc dịch vụ, từ đó gia tăng cơ hội tiếp cận và chuyển đổi.
        </p>
      </Reveal>
      <Stagger className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {data.benefits.map(({ title, description, icon: Icon }) => (
          <StaggerItem key={title}>
            <article className="h-full rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--service-accent)]/45 hover:shadow-[0_18px_45px_rgba(37,99,235,.07)]">
              <span className="grid size-11 place-items-center rounded-full border border-[var(--service-accent)]/20 bg-[var(--service-accent)]/10 text-[var(--service-accent)]">
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
