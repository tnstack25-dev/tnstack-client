import {
  BarChart3,
  Code2,
  Layers3,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    icon: Code2,
    title: "Thiết kế website",
    description:
      "Tốc độ nhanh, responsive, chuẩn SEO và dẫn dắt người dùng đến hành động.",
    tags: ["Landing page", "Website doanh nghiệp", "E-commerce"],
    className: "md:col-span-2 bg-dark text-white",
    iconClassName: "bg-white/10 text-[var(--brand-on-dark)]",
    tagsClassName: "border rounded-full px-3 py-1.5 text-xs font-semibold",
  },
  {
    icon: Target,
    title: "Quảng cáo chuyển đổi",
    description:
      "Chiến dịch Meta, Google và TikTok bám sát mục tiêu doanh thu.",
    tags: ["Media plan", "Creative", "Optimization"],
    className: "bg-accent-soft",
    iconClassName: "bg-white text-accent",
    tagsClassName: "border rounded-full px-3 py-1.5 text-xs font-semibold",
  },
  {
    icon: Search,
    title: "SEO & Content",
    description:
      "Xây nền tảng tìm kiếm và nội dung mang lại lượt truy cập bền vững.",
    tags: ["Technical SEO", "Content plan"],
    className: "bg-accent-soft",
    iconClassName: "bg-white text-primary",
    tagsClassName: "border rounded-full px-3 py-1.5 text-xs font-semibold",
  },
  {
    icon: BarChart3,
    title: "Xử lý mã độc & tracking",
    description:
      "Bảo vệ website khỏi mã độc, spam và thu thập dữ liệu hành vi khách hàng.",
    tags: ["GA4", "GTM", "Dashboard"],
    className: "md:col-span-2 bg-background border border-border",
    iconClassName: "bg-surface text-foreground",
    tagsClassName: "border rounded-full px-3 py-1.5 text-xs font-semibold",
  },
] as const;

export function ServicesSection() {
  return (
    <section className="bg-surface py-20 sm:py-28" id="dich-vu">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="center"
            eyebrow="Năng lực cốt lõi"
            title="Mọi điểm chạm đều phục vụ một mục tiêu kinh doanh"
            description="Không chạy theo xu hướng ngắn hạn. Chúng tôi xây một hệ thống đồng bộ từ nền tảng website đến kênh thu hút khách hàng."
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem
                key={service.title}
                className={
                  service.className.includes("md:col-span-2")
                    ? "md:col-span-2"
                    : undefined
                }
              >
                <article
                  className={`group h-full rounded-4xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${service.className}`}
                >
                  <span
                    className={`grid size-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${service.iconClassName}`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-3 w-full leading-7 ${service.className.includes("bg-dark") ? "text-white/60" : "text-muted-foreground"}`}
                  >
                    {service.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className={`${service.tagsClassName}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Stagger className="mt-5 grid gap-5 rounded-4xl bg-background p-7 sm:grid-cols-3 sm:p-8">
          {[
            {
              icon: Sparkles,
              title: "Thẩm mỹ có chủ đích",
              text: "Thiết kế nổi bật nhưng luôn ưu tiên rõ ràng và dễ sử dụng.",
            },
            {
              icon: Layers3,
              title: "Một hệ thống nhất quán",
              text: "Website, quảng cáo và nội dung nói cùng một tiếng nói thương hiệu.",
            },
            {
              icon: BarChart3,
              title: "Tối ưu liên tục",
              text: "Đo lường, học từ dữ liệu và cải thiện sau mỗi vòng triển khai.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title} className="flex gap-4 sm:px-2">
                <Icon className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
