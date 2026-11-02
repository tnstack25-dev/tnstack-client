import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircleMore,
  Phone,
  SearchCheck,
  Send,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { WordReveal } from "@/components/motion/word-reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Chia sẻ mục tiêu website hoặc marketing của bạn với TNStack để nhận định hướng triển khai phù hợp.",
};

const nextSteps = [
  {
    icon: SearchCheck,
    number: "01",
    title: "Tìm hiểu bối cảnh",
    text: "Chúng tôi đọc kỹ nhu cầu, website hiện tại và mục tiêu bạn đang hướng tới.",
  },
  {
    icon: MessageCircleMore,
    number: "02",
    title: "Trao đổi giải pháp",
    text: "Hai bên làm rõ ưu tiên, người dùng mục tiêu, phạm vi và những ràng buộc quan trọng.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Nhận đề xuất rõ ràng",
    text: "Bạn nhận hướng tiếp cận, các hạng mục, timeline và chi phí để đưa ra quyết định.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div
          className="grid-pattern absolute inset-0 -z-20"
          aria-hidden="true"
        />
        <div className="pulse-soft absolute -top-40 -left-48 -z-10 size-[34rem] rounded-full bg-primary/10 blur-3xl" />
        <Container>
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
            <Reveal direction="right">
              <p className="text-sm font-bold tracking-[0.18em] text-primary uppercase">
                Bắt đầu một cuộc trò chuyện
              </p>
              <h1 className="mt-5 max-w-4xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-balance">
                <WordReveal text="Một dự án tốt bắt đầu bằng một câu hỏi đúng" />
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Bạn chưa cần một bản brief hoàn chỉnh. Chỉ cần chia sẻ mục tiêu,
                trở ngại hiện tại và điều bạn muốn thay đổi — chúng tôi sẽ giúp
                làm rõ phần còn lại.
              </p>
              <a
                href="#gui-yeu-cau"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-primary"
              >
                Điền thông tin dự án <ArrowDown className="flow-arrow size-4" />
              </a>
            </Reveal>
            <Reveal direction="left" delay={0.15}>
              <div className="rounded-[2rem] border border-border bg-background p-6 shadow-xl shadow-dark/5 sm:p-8">
                <p className="text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                  Liên hệ trực tiếp
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group flex items-center gap-4 rounded-2xl bg-surface p-4 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                      <Mail className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">
                        Email
                      </span>
                      <span className="mt-0.5 block font-semibold">
                        {siteConfig.contact.email}
                      </span>
                    </span>
                    <ArrowRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone.replaceAll(" ", "")}`}
                    className="group flex items-center gap-4 rounded-2xl bg-surface p-4 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent">
                      <Phone className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">
                        Điện thoại
                      </span>
                      <span className="mt-0.5 block font-semibold">
                        {siteConfig.contact.phone}
                      </span>
                    </span>
                    <ArrowRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={siteConfig.contact.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl bg-surface p-4 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-[#e7f3ff] text-[#0068ff] dark:bg-[#1e3a8a] dark:text-[#6fb0ff]">
                      <MessageCircleMore className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">
                        Zalo
                      </span>
                      <span className="mt-0.5 block font-semibold">
                        Nhắn tin qua Zalo
                      </span>
                    </span>
                    <ArrowRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="mt-6 flex items-start gap-3 border-t border-border pt-6 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p>
                    Trao đổi ban đầu miễn phí, tập trung vào vấn đề thực tế và
                    không ràng buộc.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        id="gui-yeu-cau"
        className="scroll-mt-24 bg-surface py-20 sm:py-28"
      >
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
          <Reveal direction="right">
            <SectionHeading
              eyebrow="Kể chúng tôi nghe về dự án"
              title="Càng hiểu rõ, đề xuất càng sát nhu cầu"
              description="Những thông tin này giúp buổi trao đổi đầu tiên đi thẳng vào điều quan trọng, tiết kiệm thời gian cho cả hai bên."
            />
            <div className="mt-8 space-y-4">
              {[
                "Không cần chuẩn bị tài liệu phức tạp",
                "Có thể trao đổi từ một ý tưởng ban đầu",
                "Mọi thông tin đều được giữ riêng tư",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <CheckCircle2 className="size-5 text-primary" />
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Sau khi bạn liên hệ"
              title="Một quy trình ngắn gọn, không vòng vo"
              description="Mục tiêu của lần trao đổi đầu tiên là xác định xem hai bên có phù hợp và hướng đi nào mang lại giá trị nhất."
              align="center"
            />
          </Reveal>
          <Stagger className="relative mt-14 grid gap-5 md:grid-cols-3">
            {nextSteps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.number}>
                  <article className="group h-full rounded-[1.75rem] border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-dark/5">
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform group-hover:rotate-6">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-mono text-sm text-muted-foreground">
                        {step.number}
                      </span>
                    </div>
                    <h2 className="mt-9 text-xl font-semibold">{step.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {step.text}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <Reveal className="relative isolate overflow-hidden rounded-[2.5rem] bg-dark px-7 py-14 text-white sm:px-12 sm:py-18">
            <div className="pulse-soft absolute -top-20 -right-16 -z-10 size-64 rounded-full bg-primary/35 blur-3xl" />
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold tracking-[0.16em] text-[var(--brand-on-dark)] uppercase">
                  Bạn thích trao đổi trực tiếp?
                </p>
                <h2 className="mt-4 max-w-3xl text-[clamp(1.75rem,3vw,2.625rem)] leading-[1.18] font-semibold tracking-tight text-balance">
                  Gửi email với vài dòng về mục tiêu của bạn
                </h2>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-7 font-semibold text-dark transition-transform hover:-translate-y-0.5"
              >
                <Send className="size-4" />
                Viết email ngay
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
