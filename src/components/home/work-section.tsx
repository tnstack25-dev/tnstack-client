import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const projects = [
  {
    label: "Website dịch vụ",
    title: "Trải nghiệm rõ ràng, cao cấp cho thương hiệu tư vấn",
    description:
      "Cấu trúc nội dung dẫn dắt từ vấn đề đến giải pháp và lời mời hành động.",
    gradient: "from-[#dbeafe] via-[#f8fafc] to-[#eff6ff]",
    accent: "bg-primary",
    dark: false,
  },
  {
    label: "Landing page chiến dịch",
    title: "Trang đích tập trung cho hoạt động quảng cáo",
    description:
      "Thông điệp nhất quán với, giảm phân tâm và làm nổi bật giá trị cốt lõi.",
    gradient: "from-[#1e293b] via-[#172554] to-[#38bdf8]",
    accent: "bg-accent",
    dark: true,
  },
] as const;

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${project.gradient} p-6 sm:p-8`}
    >
      <div className="absolute top-6 right-6 flex gap-1.5">
        <span className="size-2 rounded-full bg-white/70" />
        <span className="size-2 rounded-full bg-white/45" />
        <span className="size-2 rounded-full bg-white/25" />
      </div>
      <div
        className={`h-full rounded-2xl border p-5 shadow-xl backdrop-blur-sm ${project.dark ? "border-white/10 bg-dark/65" : "border-white/60 bg-white/75"}`}
      >
        <div className="flex items-center justify-between">
          <span className={`h-5 w-20 rounded-md ${project.accent}`} />
          <div className="flex gap-3">
            <span className="h-2 w-10 rounded-full bg-current opacity-15" />
            <span className="h-2 w-10 rounded-full bg-current opacity-15" />
          </div>
        </div>
        <div className="mt-12 max-w-[72%]">
          <div
            className={`h-5 w-24 rounded-full ${project.dark ? "bg-white/20" : "bg-primary-soft"}`}
          />
          <div
            className={`mt-4 h-8 w-full rounded-lg ${project.dark ? "bg-white/85" : "bg-dark/85"}`}
          />
          <div
            className={`mt-2 h-8 w-4/5 rounded-lg ${project.dark ? "bg-white/85" : "bg-dark/85"}`}
          />
          <div
            className={`mt-5 h-3 w-full rounded-full ${project.dark ? "bg-white/15" : "bg-dark/10"}`}
          />
          <div
            className={`mt-2 h-3 w-3/4 rounded-full ${project.dark ? "bg-white/15" : "bg-dark/10"}`}
          />
          <div className={`mt-7 h-9 w-28 rounded-full ${project.accent}`} />
        </div>
        <div
          className={`absolute right-10 bottom-10 hidden size-28 rounded-3xl sm:block ${project.dark ? "bg-white/10" : "bg-primary/10"}`}
        />
      </div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Cách chúng tôi tạo giá trị"
            title="Thiết kế thuyết phục bằng cả hình ảnh lẫn logic"
            description="Mỗi bố cục, thông điệp và tương tác đều được cân nhắc để người dùng hiểu nhanh hơn, tin tưởng hơn và hành động dễ hơn."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-7">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <article className="group">
                <div className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01]">
                  <ProjectVisual project={project} />
                </div>
                <p className="mt-6 text-sm font-bold tracking-wider text-primary uppercase">
                  {project.label}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                  {project.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-16 grid overflow-hidden rounded-[2rem] border border-border bg-background lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#2563eb] p-8 text-white sm:p-10">
            <p className="text-sm font-bold tracking-wider text-white/60 uppercase">
              Tiêu chuẩn bàn giao
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">
              Không chỉ “chạy được”, mà phải sẵn sàng tăng trưởng.
            </h3>
          </div>
          <div className="grid gap-5 p-8 sm:grid-cols-2 sm:p-10">
            {[
              "Responsive trên mọi thiết bị",
              "Cấu trúc SEO nền tảng",
              "Tracking hành vi quan trọng",
              "Tài liệu và hướng dẫn quản trị",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 font-medium">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{" "}
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8 text-center" delay={0.1}>
          <Link
            href="/du-an"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/20 px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
          >
            Khám phá dự án{" "}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
