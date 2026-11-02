import {
  ArrowRight,
  Gauge,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";

const ctaFeatures = [
  { label: "Nhanh chóng", icon: Zap },
  { label: "Hiệu quả", icon: Gauge },
  { label: "Bảo mật", icon: ShieldCheck },
  { label: "Tối ưu bền vững", icon: Rocket },
] as const;

export function ServicesCTA() {
  return (
    <section className="py-24 lg:py-28">
      <Container className="max-w-[1440px] px-4 md:px-6 xl:px-10">
        <Reveal className="relative isolate overflow-hidden rounded-3xl border border-[var(--service-accent)]/15 bg-gradient-to-br from-[var(--service-card)] to-[var(--service-bg)] px-7 py-14 sm:px-12 sm:py-16 lg:min-h-[26rem] lg:px-16 lg:py-20">
          <div
            className="absolute right-0 bottom-0 -z-20 h-full w-2/3 [background-image:linear-gradient(rgba(37,99,235,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.1)_1px,transparent_1px)] [mask-image:linear-gradient(to_left,black,transparent)] [background-size:30px_30px] opacity-30"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-2xl">
            <h2 className="max-w-[28ch] text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.18] font-bold tracking-[-0.03em] text-balance text-[var(--service-heading)]">
              Sẵn sàng nâng tầm website{" "}
              <span className="text-[var(--service-accent)]">của bạn?</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--service-muted)]">
              Liên hệ ngay với TNSTACK để được tư vấn giải pháp website phù hợp
              với nhu cầu và định hướng phát triển của doanh nghiệp.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ContactDialogTrigger className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--service-accent)] px-6 text-sm font-bold text-[var(--service-on-accent)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--service-accent-hover)] focus-visible:ring-2 focus-visible:ring-[var(--service-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--service-bg)] focus-visible:outline-none">
                Liên hệ ngay <ArrowRight className="size-4" />
              </ContactDialogTrigger>
              <ContactDialogTrigger className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--service-accent)]/45 px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--service-accent)]/10 focus-visible:ring-2 focus-visible:ring-[var(--service-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--service-bg)] focus-visible:outline-none">
                <Sparkles className="size-4 text-[var(--service-accent)]" /> Xem
                bảng giá
              </ContactDialogTrigger>
            </div>
          </div>

          <div
            className="absolute -right-28 -bottom-56 -z-10 hidden size-[38rem] rounded-full border border-[var(--service-accent)]/30 bg-[radial-gradient(circle_at_40%_32%,rgba(37,99,235,.22),rgba(15,23,42,.15)_48%,transparent_70%)] shadow-[0_0_80px_rgba(37,99,235,.08)] lg:block"
            aria-hidden="true"
          >
            <div className="absolute inset-[14%] rounded-full border border-[var(--service-accent)]/12" />
            <div className="absolute inset-[29%] rounded-full border border-[var(--service-accent)]/10" />
            <div className="absolute top-[12%] bottom-[12%] left-1/2 w-px bg-[var(--service-accent)]/14" />
            <div className="absolute top-1/2 right-[12%] left-[12%] h-px bg-[var(--service-accent)]/14" />
          </div>
          <div className="absolute right-[4%] bottom-8 hidden grid-cols-2 gap-3 xl:grid">
            {ctaFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 rounded-xl border border-[var(--service-accent)]/15 bg-[var(--service-surface)]/90 px-4 py-3 text-xs text-[var(--service-muted-strong)] shadow-xl backdrop-blur"
                  style={{ transform: `translateY(${index % 2 ? 16 : 0}px)` }}
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-[var(--service-accent)]/10 text-[var(--service-accent)]">
                    <Icon className="size-4" />
                  </span>
                  {feature.label}
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
