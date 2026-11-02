import {
  ArrowRight,
  Check,
  MousePointer2,
  Play,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { WordReveal } from "@/components/motion/word-reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const industries = [
  "Thương mại",
  "Giáo dục",
  "Bất động sản",
  "F&B",
  "SaaS",
  "Dịch vụ",
] as const;

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[image:var(--gradient-dark)] pt-16 pb-20 text-white sm:pt-24 sm:pb-28">
      <div className="grid-pattern absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="pulse-soft absolute -top-48 -right-48 -z-10 size-[38rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <Reveal direction="right">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#38bdf8] uppercase">
              <span className="size-2 rounded-full bg-primary" />
              Đối tác tăng trưởng số cho doanh nghiệp
            </div>
            <h1 className="mt-7 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-balance">
              <WordReveal text="Website đẹp là chưa đủ." />
              <WordReveal
                className="block text-[#38bdf8]"
                text="Phải tạo ra khách hàng."
              />
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Chúng tôi kết hợp thiết kế chiến lược, công nghệ và quảng cáo để
              biến mỗi lượt truy cập thành một cơ hội kinh doanh thực sự.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ContactDialogTrigger
                className={buttonVariants({ variant: "dark", size: "lg" })}
              >
                Nhận đề xuất miễn phí <ArrowRight />
              </ContactDialogTrigger>
              <Link
                href="/du-an"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/35 bg-transparent text-white hover:border-white/60 hover:bg-white/10",
                )}
              >
                <Play className="fill-current" /> Xem dự án
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              {[
                "Tư vấn đúng nhu cầu",
                "Chi phí minh bạch",
                "Hỗ trợ sau bàn giao",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="size-4 text-[#38bdf8]" /> {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal
            direction="left"
            delay={0.15}
            className="relative mx-auto w-full max-w-[36rem] lg:mr-0"
          >
            <TiltCard>
              <div className="absolute -inset-5 -z-10 rotate-3 rounded-[2.5rem] bg-accent-soft" />
              <div className="overflow-hidden rounded-[2rem] border border-border bg-background p-3 text-foreground shadow-2xl shadow-dark/15">
                <div className="flex items-center gap-2 border-b border-border px-3 pb-3">
                  <span className="size-2.5 rounded-full bg-[#ff6b5e]" />
                  <span className="size-2.5 rounded-full bg-[#ffbd44]" />
                  <span className="size-2.5 rounded-full bg-[#00ca4e]" />
                  <div className="ml-3 h-6 flex-1 rounded-lg bg-surface" />
                </div>
                <div className="grid gap-3 p-2 pt-5 sm:grid-cols-[0.72fr_1.28fr]">
                  <div className="hidden rounded-2xl bg-dark p-4 text-white sm:block">
                    <div className="size-8 rounded-lg bg-white/15" />
                    <div className="mt-8 space-y-3">
                      <div className="h-2 w-4/5 rounded-full bg-white/70" />
                      <div className="h-2 w-3/5 rounded-full bg-white/20" />
                      <div className="h-2 w-2/3 rounded-full bg-white/20" />
                      <div className="h-2 w-1/2 rounded-full bg-white/20" />
                    </div>
                    <div className="mt-24 rounded-xl bg-[#dbeafe] p-3 text-dark">
                      <p className="text-[10px] font-semibold">Hiệu suất</p>
                      <div className="mt-2 flex items-end gap-1">
                        {[35, 50, 42, 68, 58, 86].map((height, index) => (
                          <span
                            key={height}
                            className="bar-grow w-full rounded-sm bg-primary"
                            style={{
                              height,
                              animationDelay: `${index * 90}ms`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-surface p-5 sm:p-6">
                    <p className="text-xs font-semibold text-primary">
                      TỔNG QUAN TĂNG TRƯỞNG
                    </p>
                    <div className="mt-3 h-7 w-3/4 rounded-lg bg-dark/85" />
                    <div className="mt-2 h-3 w-full rounded-full bg-dark/10" />
                    <div className="mt-1.5 h-3 w-4/5 rounded-full bg-dark/10" />
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-background p-4 shadow-sm">
                        <MousePointer2 className="size-5 text-accent" />
                        <div className="mt-5 h-3 w-3/4 rounded bg-dark/80" />
                        <div className="mt-2 h-2 w-1/2 rounded bg-dark/10" />
                      </div>
                      <div className="rounded-2xl bg-[#2563eb] p-4 text-white shadow-sm">
                        <TrendingUp className="size-5" />
                        <div className="mt-5 h-3 w-3/4 rounded bg-white/80" />
                        <div className="mt-2 h-2 w-1/2 rounded bg-white/30" />
                      </div>
                    </div>
                    <div className="mt-3 rounded-2xl bg-background p-4 shadow-sm">
                      <div className="flex h-24 items-end gap-2">
                        {[28, 42, 34, 55, 48, 72, 88].map((height, index) => (
                          <span
                            key={height}
                            className={
                              index === 6
                                ? "bar-grow w-full rounded-t bg-accent"
                                : "bar-grow w-full rounded-t bg-primary-soft"
                            }
                            style={{
                              height: `${height}%`,
                              animationDelay: `${0.4 + index * 0.08}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="float-slow absolute -bottom-6 -left-5 rounded-2xl border border-border bg-background px-4 py-3 shadow-xl sm:-left-12">
                <p className="text-xs text-muted-foreground">
                  Mọi quyết định đều
                </p>
                <p className="mt-0.5 font-bold text-foreground">
                  Dựa trên dữ liệu
                </p>
              </div>
            </TiltCard>
          </Reveal>
        </div>

        <Reveal className="mt-20 border-t border-border pt-8" delay={0.1}>
          <p className="text-center text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase">
            Giải pháp phù hợp cho nhiều mô hình kinh doanh
          </p>
          <div className="mt-6 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-track flex w-max gap-3 pr-3 text-center text-sm font-semibold text-slate-300">
              {[...industries, ...industries].map((industry, index) => (
                <span
                  key={`${industry}-${index}`}
                  className="w-40 rounded-xl border border-border bg-background/70 px-3 py-3 text-foreground uppercase shadow-sm backdrop-blur-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
