import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ServiceCard } from "@/components/services/service-card";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { Container } from "@/components/ui/container";
import { servicesPageConfig } from "@/config/services";

export function ServicesGrid() {
  return (
    <section
      className="relative scroll-mt-24 py-24 lg:py-28"
      id="dich-vu-website"
    >
      <div
        className="absolute top-0 left-1/2 h-80 w-[70%] -translate-x-1/2 rounded-full bg-[var(--service-accent)]/4 blur-[90px]"
        aria-hidden="true"
      />
      <Container className="relative max-w-[1440px] px-4 md:px-6 xl:px-10">
        <Reveal className="text-center">
          <ServicesSectionLabel>Dịch vụ của TNStack</ServicesSectionLabel>
          <h2 className="mx-auto mt-5 max-w-[32ch] text-[clamp(1.75rem,3vw,2.375rem)] leading-[1.18] font-bold tracking-[-0.03em] text-balance text-[var(--service-heading)]">
            Các dịch vụ website chuyên nghiệp
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--service-muted)]">
            Từ thiết kế, tối ưu, bảo mật đến quản trị và phát triển website —
            TNSTACK đồng hành cùng bạn trong mọi giai đoạn.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {servicesPageConfig.services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
