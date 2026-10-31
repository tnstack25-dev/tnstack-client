import {
  ArrowRight,
  Blocks,
  Check,
  FileText,
  Gauge,
  Handshake,
  KeyRound,
  LineChart,
  ShieldCheck,
} from "lucide-react";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const commitments = [
  {
    icon: FileText,
    title: "Phạm vi minh bạch",
    text: "Hạng mục, timeline và chi phí được thống nhất rõ trước khi triển khai.",
  },
  {
    icon: Handshake,
    title: "Phản hồi chủ động",
    text: "Cập nhật tiến độ đều đặn, trao đổi trực tiếp và không để bạn phải đoán.",
  },
  {
    icon: KeyRound,
    title: "Toàn quyền sở hữu",
    text: "Bạn sở hữu source code, nội dung, tài khoản và dữ liệu của dự án.",
  },
  {
    icon: ShieldCheck,
    title: "Hỗ trợ sau bàn giao",
    text: "Có hướng dẫn sử dụng, giai đoạn bảo hành và phương án đồng hành tiếp theo.",
  },
] as const;

const deliverables = [
  { icon: Blocks, label: "Hệ thống giao diện nhất quán" },
  { icon: Gauge, label: "Tối ưu hiệu năng và mobile" },
  { icon: LineChart, label: "Tracking hành vi quan trọng" },
  { icon: FileText, label: "Tài liệu quản trị website" },
] as const;

export function CommitmentSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Một khoản đầu tư có thể kiểm soát"
            title="Bạn biết mình đang nhận được gì — trước, trong và sau dự án"
            description="Chúng tôi loại bỏ sự mơ hồ thường gặp trong các dự án số bằng phạm vi rõ ràng, giao tiếp chủ động và đầu ra có thể kiểm tra."
            align="center"
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <TiltCard className="h-full">
                  <article className="h-full rounded-[1.75rem] border border-border bg-background p-6 transition-shadow hover:shadow-xl hover:shadow-dark/5">
                    <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-7 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-14 grid overflow-hidden rounded-[2.25rem] border border-border bg-surface lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="p-7 sm:p-10 lg:p-12" direction="right">
            <p className="text-sm font-bold tracking-[0.16em] text-primary uppercase">
              Đầu ra thực tế
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">
              Sẵn sàng để vận hành, đo lường và phát triển tiếp
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl bg-background p-4 text-sm font-semibold"
                  >
                    <Icon className="size-5 shrink-0 text-primary" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal
            className="relative isolate flex flex-col justify-center overflow-hidden bg-accent p-7 text-white sm:p-10 lg:p-12"
            direction="left"
            delay={0.1}
          >
            <div className="pulse-soft absolute -top-14 -right-14 -z-10 size-52 rounded-full bg-white/15 blur-2xl" />
            <p className="text-sm font-bold tracking-[0.16em] text-white/65 uppercase">
              Bắt đầu đúng cách
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">
              Nhận đánh giá nhanh cho website hoặc ý tưởng của bạn
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {[
                "Xác định điểm nghẽn chính",
                "Đề xuất hướng ưu tiên",
                "Ước lượng phạm vi phù hợp",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-4" />
                  {item}
                </li>
              ))}
            </ul>
            <ContactDialogTrigger
              className={`${buttonVariants({ variant: "light", size: "lg" })} mt-8 self-start`}
            >
              Nhận đánh giá miễn phí <ArrowRight />
            </ContactDialogTrigger>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
