import { Reveal } from "@/components/motion/reveal";
import { HostingPricingCard } from "@/components/services/hosting/hosting-pricing-card";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { hostingPlans } from "@/config/hosting-service";

export function HostingPricing() {
  return (
    <section id="bang-gia-hosting" className="scroll-mt-24 py-12">
      <Reveal>
        <ServicesSectionLabel>Bảng giá Hosting</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
          Lựa chọn gói hosting phù hợp với nhu cầu của bạn
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--service-muted)]">
          Các gói hosting được thiết kế phù hợp với nhu cầu sử dụng từ website
          cá nhân đến website doanh nghiệp.
        </p>
      </Reveal>
      <div className="mt-9 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
        {hostingPlans.map((plan) => (
          <HostingPricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
