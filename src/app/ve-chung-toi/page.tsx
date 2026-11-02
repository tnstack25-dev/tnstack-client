import {
  ArrowRight,
  BarChart3,
  Blocks,
  Code2,
  Compass,
  Eye,
  HeartHandshake,
  Lightbulb,
  MessageSquareText,
  Sparkles,
  Target,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { WordReveal } from "@/components/motion/word-reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Tìm hiểu cách TNStack kết hợp chiến lược, thiết kế và công nghệ để tạo ra trải nghiệm số hướng đến tăng trưởng.",
};

const disciplines = [
  {
    icon: Compass,
    title: "Chiến lược",
    text: "Bắt đầu từ mục tiêu kinh doanh, khách hàng và vị thế thương hiệu.",
  },
  {
    icon: Sparkles,
    title: "Trải nghiệm",
    text: "Biến thông điệp phức tạp thành hành trình đơn giản và thuyết phục.",
  },
  {
    icon: Code2,
    title: "Công nghệ",
    text: "Xây nền tảng nhanh, ổn định và đủ linh hoạt để phát triển lâu dài.",
  },
  {
    icon: BarChart3,
    title: "Tăng trưởng",
    text: "Đo lường điều quan trọng và liên tục cải thiện bằng dữ liệu thực tế.",
  },
] as const;

const principles = [
  {
    icon: Eye,
    title: "Rõ ràng hơn hào nhoáng",
    text: "Một thiết kế tốt phải giúp khách hàng hiểu nhanh, tìm đúng và hành động dễ dàng.",
  },
  {
    icon: Target,
    title: "Kết quả hơn đầu ra",
    text: "Chúng tôi không chỉ bàn giao số lượng màn hình; mọi hạng mục phải phục vụ một mục tiêu cụ thể.",
  },
  {
    icon: MessageSquareText,
    title: "Đồng hành hơn nhận việc",
    text: "Chúng tôi chủ động đặt câu hỏi, phản biện và chia sẻ góc nhìn thay vì chỉ chờ yêu cầu.",
  },
  {
    icon: Lightbulb,
    title: "Đơn giản hơn phức tạp",
    text: "Quy trình, công nghệ và báo cáo được trình bày bằng ngôn ngữ dễ hiểu và minh bạch.",
  },
] as const;

const collaboration = [
  {
    number: "01",
    title: "Chúng ta cùng nhìn một hướng",
    text: "Thống nhất mục tiêu, ưu tiên và cách đo thành công ngay từ đầu.",
  },
  {
    number: "02",
    title: "Bạn luôn thấy tiến độ",
    text: "Mỗi giai đoạn đều có đầu ra rõ ràng, thời điểm phản hồi và người chịu trách nhiệm.",
  },
  {
    number: "03",
    title: "Quyết định có lý do",
    text: "Thiết kế và kỹ thuật được giải thích bằng nhu cầu người dùng, dữ liệu hoặc nguyên tắc chuyên môn.",
  },
  {
    number: "04",
    title: "Bàn giao để bạn làm chủ",
    text: "Tài liệu, quyền sở hữu và kiến thức vận hành đều được chuyển giao đầy đủ.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div
          className="grid-pattern absolute inset-0 -z-20"
          aria-hidden="true"
        />
        <div className="pulse-soft absolute top-0 -right-48 -z-10 size-[34rem] rounded-full bg-primary/10 blur-3xl" />
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <Reveal direction="right">
              <p className="text-sm font-bold tracking-[0.18em] text-primary uppercase">
                Về TNStack
              </p>
              <h1 className="mt-5 max-w-4xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-balance">
                <WordReveal text="Chúng tôi xây trải nghiệm số để doanh nghiệp tiến xa hơn" />
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                TNStack là đối tác thiết kế và công nghệ dành cho những doanh
                nghiệp muốn biến website thành một phần thực sự của hoạt động
                tăng trưởng — không chỉ là nơi để “có mặt trên internet”.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ContactDialogTrigger
                  className={buttonVariants({ variant: "dark", size: "lg" })}
                >
                  Trò chuyện cùng chúng tôi <ArrowRight />
                </ContactDialogTrigger>
                <Link
                  href="/du-an"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Xem cách chúng tôi làm
                </Link>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              <TiltCard className="relative mx-auto aspect-square max-w-[31rem] rounded-[2.5rem] border border-border bg-dark p-8 text-white shadow-2xl shadow-dark/20">
                <div className="absolute inset-8 rounded-full border border-dashed border-white/15" />
                <div className="orbit-ring absolute inset-[24%] rounded-full border border-[var(--brand-on-dark)]/30" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="pulse-soft grid size-32 place-items-center rounded-full bg-primary text-center shadow-2xl shadow-primary/30">
                    <div>
                      <Blocks className="mx-auto size-7" />
                      <p className="mt-2 text-xs font-bold">TNSTACK</p>
                    </div>
                  </div>
                </div>
                {[
                  ["Chiến lược", "left-4 top-1/2 -translate-y-1/2"],
                  ["Thiết kế", "right-4 top-1/2 -translate-y-1/2"],
                  ["Công nghệ", "left-1/2 top-4 -translate-x-1/2"],
                  ["Tăng trưởng", "bottom-4 left-1/2 -translate-x-1/2"],
                ].map(([label, position]) => (
                  <span
                    key={label}
                    className={`absolute ${position} rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-semibold backdrop-blur`}
                  >
                    {label}
                  </span>
                ))}
              </TiltCard>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Một đội ngũ, nhiều góc nhìn"
              title="Kết nối chiến lược, sáng tạo và kỹ thuật trong cùng một quy trình"
              description="Bạn không phải tự điều phối nhiều nhà cung cấp rời rạc. Mỗi chuyên môn cùng giải quyết một bài toán chung và chịu trách nhiệm cho trải nghiệm cuối cùng."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <article className="group h-full rounded-[1.75rem] border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-dark/5">
                    <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="size-5" />
                    </span>
                    <h2 className="mt-7 text-xl font-semibold">{item.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal direction="right">
            <SectionHeading
              eyebrow="Điều chúng tôi tin"
              title="Công việc tốt bắt đầu từ những nguyên tắc đúng"
              description="Đây là cách chúng tôi bảo vệ chất lượng dự án và xây dựng một mối quan hệ hợp tác lâu dài."
            />
            <div className="mt-9 rounded-[1.75rem] bg-[#2563eb] p-7 text-white">
              <HeartHandshake className="size-8" />
              <p className="mt-5 text-lg leading-8 font-medium">
                “Chúng tôi xem thành công của khách hàng là thước đo cho chất
                lượng công việc của mình.”
              </p>
            </div>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <TiltCard className="h-full">
                    <article className="h-full rounded-[1.75rem] border border-border bg-background p-6">
                      <Icon className="size-6 text-accent" />
                      <h2 className="mt-8 text-lg font-semibold">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.text}
                      </p>
                    </article>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="bg-dark py-20 text-white sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Cách chúng ta làm việc cùng nhau"
              title="Không có hộp đen trong dự án"
              description="Bạn tham gia đúng lúc, có đủ thông tin để quyết định và luôn biết bước tiếp theo là gì."
              className="[&_p:last-child]:text-white/55 [&>p:first-child]:text-[var(--brand-on-dark)]"
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-2">
            {collaboration.map((item) => (
              <StaggerItem key={item.number}>
                <article className="group h-full bg-dark p-7 transition-colors hover:bg-white/[0.04] sm:p-9">
                  <span className="font-mono text-sm text-[var(--brand-on-dark)]">
                    {item.number}
                  </span>
                  <h2 className="mt-10 text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 max-w-md leading-7 text-white/55">
                    {item.text}
                  </p>
                  <div className="mt-7 h-px w-10 bg-accent transition-all duration-500 group-hover:w-full" />
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#2563eb] px-7 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="pulse-soft absolute -top-24 -right-20 -z-10 size-72 rounded-full bg-accent/35 blur-3xl" />
            <p className="text-sm font-bold tracking-[0.18em] text-white/65 uppercase">
              Cùng tạo nên điều đáng tự hào
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(1.875rem,3.5vw,2.75rem)] leading-[1.18] font-semibold tracking-[-0.03em] text-balance">
              Bạn có một bài toán khó? Chúng tôi muốn được nghe.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">
              Bắt đầu bằng một cuộc trò chuyện thẳng thắn về mục tiêu, trở ngại
              và điều doanh nghiệp của bạn thực sự cần.
            </p>
            <ContactDialogTrigger
              className={`${buttonVariants({ variant: "light", size: "lg" })} mt-9`}
            >
              Bắt đầu trao đổi <ArrowRight />
            </ContactDialogTrigger>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
