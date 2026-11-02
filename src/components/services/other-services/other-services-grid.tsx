import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { otherServicesPage as data } from "@/config/other-services";
import { OtherServiceCard } from "./other-service-card";

export function OtherServicesGrid() {
  return (
    <section className="py-12">
      <Reveal>
        <ServicesSectionLabel>Danh sách dịch vụ</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
          Các dịch vụ khác tại{" "}
          <span className="text-[var(--service-accent)]">TNSTACK</span>
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--service-muted)]">
          Những giải pháp bổ trợ giúp website hoạt động hiệu quả, an toàn và đáp
          ứng tốt hơn các mục tiêu kinh doanh.
        </p>
      </Reveal>
      <Stagger className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.services.map((service) => (
          <StaggerItem key={service.id}>
            <OtherServiceCard service={service} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
