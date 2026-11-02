import {
  ArrowRight,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Monitor,
  SearchCheck,
  Zap,
} from "lucide-react";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { Container } from "@/components/ui/container";
import { servicesPageConfig } from "@/config/services";

const floatingCards = [
  {
    title: "Tối ưu tốc độ",
    description: "Core Web Vitals",
    icon: Zap,
    className: "top-4 left-[2%] sm:left-[8%]",
  },
  {
    title: "Bảo mật website",
    description: "Kiểm tra & phòng ngừa",
    icon: LockKeyhole,
    className: "top-7 right-0 sm:right-[8%]",
  },
  {
    title: "Thiết kế responsive",
    description: "Mọi kích thước màn hình",
    icon: Monitor,
    className: "-right-5 -bottom-2 sm:bottom-8 sm:right-[8%]",
  },
  {
    title: "SEO & Performance",
    description: "Cấu trúc tối ưu",
    icon: SearchCheck,
    className: "-bottom-2 sm:bottom-8 -left-[5%] sm:left-[8%]",
  },
] as const;

export function ServicesHero() {
  const { verifiedStats } = servicesPageConfig;

  return (
    <section className="relative isolate border-b border-[var(--service-accent)]/10 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        className="absolute inset-0 -z-30 bg-[linear-gradient(rgba(37,99,235,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.05)_1px,transparent_1px)] mask-[linear-gradient(to_bottom,black,transparent_95%)] bg-size-[48px_48px] opacity-35"
        aria-hidden="true"
      />
      <div
        className="absolute -top-48 right-0 -z-20 size-168 rounded-full bg-[var(--service-accent)]/8 blur-[96px]"
        aria-hidden="true"
      />

      <Container className="max-w-360 px-4 md:px-6 xl:px-10">
        <div className="grid items-center gap-7 xl:grid-cols-[1fr_1fr] xl:gap-8">
          <Reveal
            direction="right"
            className="flex flex-col items-center sm:items-start"
          >
            <ServicesSectionLabel>
              Dịch vụ website toàn diện
            </ServicesSectionLabel>
            <h1 className="mt-7 max-w-[23ch] text-center text-[clamp(2rem,4vw,2.875rem)] leading-[1.16] font-bold tracking-tight text-balance text-[var(--service-heading)] sm:text-left">
              Giải pháp website cho{" "}
              <span className="text-[var(--service-accent)]">
                <span className="whitespace-nowrap">doanh nghiệp</span>{" "}
                <span className="whitespace-nowrap">hiện đại</span>
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-[1.75] text-[var(--service-muted)] sm:text-lg">
              TNSTACK cung cấp các dịch vụ thiết kế website, tối ưu hiệu suất,
              xử lý mã độc và giải pháp website chuyên nghiệp, giúp doanh nghiệp
              vận hành an toàn, ổn định và phát triển bền vững.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#dich-vu-website"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[var(--service-accent)] px-7 text-sm font-bold text-[var(--service-on-accent)] shadow-[0_0_32px_rgba(37,99,235,.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--service-accent-hover)] focus-visible:ring-2 focus-visible:ring-[var(--service-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--service-bg)] focus-visible:outline-none"
              >
                Xem các dịch vụ <ArrowRight className="size-4" />
              </a>
              <ContactDialogTrigger className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-[var(--service-accent)]/50 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--service-accent)]/10 focus-visible:ring-2 focus-visible:ring-[var(--service-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--service-bg)] focus-visible:outline-none">
                <MessageCircle className="size-4 text-[var(--service-accent)]" />{" "}
                Liên hệ tư vấn
              </ContactDialogTrigger>
            </div>

            {verifiedStats.length > 0 ? (
              <div className="mt-12 grid max-w-2xl grid-cols-3 divide-x divide-[var(--service-accent)]/12 border-t border-[var(--service-accent)]/10 pt-7">
                {verifiedStats.map((stat) => (
                  <div key={stat.label} className="px-3 first:pl-0 sm:px-6">
                    <p className="text-xl font-bold text-[var(--service-accent)] sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] text-[var(--service-muted)] sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </Reveal>

          <Reveal direction="left" delay={0.12}>
            <div
              className="relative mx-auto min-h-144 w-full max-w-188 sm:min-h-160"
              aria-label="Minh họa dashboard website với hiệu suất, bảo mật và SEO"
            >
              <div
                className="orbit-ring absolute top-12 left-[13%] h-116 w-[72%] rounded-[50%] border border-[var(--service-accent)]/45 shadow-[0_0_32px_rgba(37,99,235,.12)]"
                aria-hidden="true"
              />
              <div
                className="absolute top-20 left-[5%] h-100 w-[88%] -rotate-12 rounded-[50%] border border-[var(--service-accent)]/15"
                aria-hidden="true"
              />

              <div className="absolute top-28 right-[8%] left-[8%] overflow-hidden rounded-3xl border border-[var(--service-accent)]/20 bg-[var(--service-surface)]/95 p-3 shadow-[0_28px_90px_rgba(0,0,0,.5),0_0_60px_rgba(37,99,235,.06)] sm:p-4">
                <div className="portfolio-scan absolute inset-x-0 top-0 z-20 h-px bg-linear-to-r from-transparent via-[var(--service-accent)] to-transparent" />
                <div className="flex items-center justify-between border-b border-white/8 px-2 pb-3">
                  <div className="flex gap-1.5">
                    <span className="size-2 rounded-full bg-[var(--service-accent)]" />
                    <span className="size-2 rounded-full bg-white/15" />
                    <span className="size-2 rounded-full bg-white/15" />
                  </div>
                  <p className="font-mono text-[9px] tracking-[0.16em] text-white/30 uppercase">
                    Dashboard
                  </p>
                </div>
                <div className="grid min-h-80 grid-cols-[3.25rem_1fr] sm:grid-cols-[4rem_1fr]">
                  <div className="border-r border-white/8 py-5">
                    <span className="mx-auto grid size-8 place-items-center rounded-lg bg-[var(--service-accent)]/10 text-[var(--service-accent)]">
                      <Layers3 className="size-4" />
                    </span>
                    <div className="mx-auto mt-8 space-y-4">
                      {[1, 2, 3, 4].map((item) => (
                        <span
                          key={item}
                          className="mx-auto block size-1.5 rounded-full bg-white/15"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="relative overflow-hidden p-5 sm:p-8">
                    <div className="absolute -top-16 -right-12 size-52 rounded-full bg-[var(--service-accent)]/7 blur-3xl" />
                    <p className="font-mono text-[9px] tracking-[0.18em] text-[var(--service-accent)] uppercase">
                      Performance by design
                    </p>
                    <h2 className="mt-4 max-w-sm text-base leading-snug font-semibold tracking-tight text-balance text-[var(--service-heading)] sm:text-xl">
                      Website mạnh hơn. Thương hiệu tiến xa hơn.
                    </h2>
                    <p className="mt-4 max-w-sm text-xs leading-6 text-[var(--service-muted)] sm:text-sm">
                      Thiết kế rõ ràng, nền tảng vững chắc và hiệu suất được tối
                      ưu ngay từ đầu.
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-2">
                      {[
                        ["UX", "76%"],
                        ["SEO", "86%"],
                        ["SPEED", "94%"],
                      ].map(([label, width]) => (
                        <div
                          key={label}
                          className="rounded-xl border border-white/8 bg-white/2.5 p-3"
                        >
                          <span
                            className="block h-1.5 rounded-full bg-[var(--service-accent)]"
                            style={{ width }}
                          />
                          <p className="mt-4 font-mono text-[9px] text-white/35">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="absolute bottom-20 left-[16%] z-10 w-56 rounded-2xl border border-[var(--service-accent)]/20 bg-[var(--service-card)]/95 p-4 shadow-2xl backdrop-blur sm:left-[8%]">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] text-[var(--service-muted)]">
                      PageSpeed tối ưu
                    </p>
                    <p className="mt-1 text-3xl font-bold text-[var(--service-accent)]">
                      90+
                    </p>
                  </div>
                  <div className="flex h-14 items-end gap-1.5">
                    {[35, 52, 44, 72, 88].map((height) => (
                      <span
                        key={height}
                        className="bar-grow w-3 rounded-t-sm bg-[var(--service-accent)]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div> */}

              {floatingCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`float-slow absolute z-20 rounded-2xl border border-[var(--service-accent)]/20 bg-[var(--service-card)]/95 p-4 shadow-2xl backdrop-blur ${card.className}`}
                    style={{ animationDelay: `${index * -1.25}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-[var(--service-accent)]/10 text-[var(--service-accent)]">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold text-[var(--service-heading)]">
                          {card.title}
                        </p>
                        <p className="mt-1 text-[10px] text-[var(--service-muted)]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="absolute right-[12%] bottom-3 z-10 hidden rounded-2xl border border-[var(--service-accent)]/20 bg-[var(--service-card)]/95 p-4 shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <ChartNoAxesCombined className="size-5 text-[var(--service-accent)]" />
                  <div>
                    <p className="text-xs font-semibold">Tăng trưởng</p>
                    <p className="mt-1 text-[10px] text-[var(--service-muted)]">
                      Biểu đồ minh họa
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
