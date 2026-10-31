import {
  Activity,
  ArrowDown,
  BadgeAlert,
  Gauge,
  MousePointerClick,
  Unplug,
} from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const painPoints = [
  {
    icon: MousePointerClick,
    title: "Có truy cập nhưng ít liên hệ",
    text: "Người dùng chưa thấy đủ lý do để tin tưởng và hành động.",
  },
  {
    icon: Gauge,
    title: "Website chậm và khó dùng",
    text: "Trải nghiệm kém làm lãng phí ngân sách kéo khách về trang.",
  },
  {
    icon: Unplug,
    title: "Các kênh hoạt động rời rạc",
    text: "Website, nội dung và quảng cáo không cùng một thông điệp.",
  },
  {
    icon: BadgeAlert,
    title: "Không biết điểm nghẽn ở đâu",
    text: "Thiếu tracking khiến quyết định dựa vào cảm tính thay vì dữ liệu.",
  },
] as const;

const flow = [
  { step: "01", label: "Thu hút đúng người", detail: "Ads · SEO · Content" },
  { step: "02", label: "Thuyết phục rõ ràng", detail: "UX · Copy · Trust" },
  { step: "03", label: "Chuyển đổi & tối ưu", detail: "CTA · Data · Growth" },
] as const;

export function GrowthSystemSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-15">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Website của bạn có đang bán hàng?"
                title="Đừng để trải nghiệm kém nuốt mất ngân sách marketing"
                description="Một website không rõ thông điệp hoặc thiếu đo lường sẽ khiến mỗi lượt click trở nên đắt hơn. Chúng tôi tìm đúng điểm nghẽn trước khi đề xuất giải pháp."
              />
            </Reveal>
            <Stagger className="mt-9 grid gap-3 sm:grid-cols-2">
              {painPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <div className="group h-full rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-lg hover:shadow-dark/5">
                      <Icon className="size-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="mt-4 text-sm font-bold tracking-wide">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>

          <Reveal direction="left" delay={0.15}>
            <TiltCard className="relative rounded-[2.25rem] border border-border bg-dark p-7 text-white shadow-2xl shadow-dark/15 sm:p-9">
              <div className="pulse-soft absolute top-8 right-8 size-24 rounded-full bg-primary/30 blur-3xl" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-[var(--brand-on-dark)] uppercase">
                    Hệ thống tăng trưởng
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Một hành trình liền mạch
                  </h3>
                </div>
                <Activity className="size-7 text-accent" />
              </div>
              <div className="mt-9 space-y-3">
                {flow.map((item, index) => (
                  <div key={item.step}>
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition-colors hover:bg-white/[0.09]">
                      <div className="flow-sheen absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      <div className="relative flex items-center gap-4">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--brand-on-dark)] font-mono text-xs font-bold text-dark">
                          {item.step}
                        </span>
                        <div>
                          <p className="font-semibold">{item.label}</p>
                          <p className="mt-1 text-xs text-white/45">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                    {index < flow.length - 1 ? (
                      <ArrowDown className="flow-arrow mx-auto my-1.5 size-4 text-[var(--brand-on-dark)]" />
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="mt-7 flex items-center justify-between rounded-2xl bg-primary p-4">
                <p className="text-sm font-semibold">Kết quả có thể đo lường</p>
                <span className="relative flex size-3">
                  <span className="ping-soft absolute inline-flex size-full rounded-full bg-white opacity-60" />
                  <span className="relative inline-flex size-3 rounded-full bg-white" />
                </span>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
