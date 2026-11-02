import {
  ArrowRight,
  ChevronRight,
  Home,
  Laptop,
  Search,
  Smartphone,
  TimerReset,
} from "lucide-react";
import Link from "next/link";
import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";
import { websiteOptimizationService as data } from "@/config/website-optimization-service";

export function OptimizationHero() {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-xs text-[var(--service-muted)]"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1 hover:text-[var(--service-accent)]"
        >
          <Home className="size-3.5" />
          Trang chủ
        </Link>
        <ChevronRight className="size-3" />
        <Link href="/dich-vu" className="hover:text-[var(--service-accent)]">
          Dịch vụ
        </Link>
        <ChevronRight className="size-3" />
        <span className="text-white">Tối ưu website (SEO & Hiệu suất)</span>
      </nav>
      <section className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-surface)] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(37,99,235,.18),transparent_36%),linear-gradient(rgba(37,99,235,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.045)_1px,transparent_1px)] [background-size:auto,34px_34px,34px_34px]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal direction="right">
            <p className="inline-flex rounded-full border border-[var(--service-accent)]/40 px-4 py-2 text-[10px] font-bold tracking-[.13em] text-[var(--service-accent)] uppercase">
              Tối ưu website (SEO & Hiệu suất)
            </p>
            <h1 className="mt-6 text-[clamp(2rem,3vw,2.625rem)] leading-[1.13] font-bold tracking-[-.055em] text-balance text-[var(--service-heading)]">
              Tối ưu website toàn diện,{" "}
              <span className="text-[var(--service-accent)]">tăng tốc</span> và
              chuẩn SEO
            </h1>
            <p className="mt-6 text-sm leading-7 text-[var(--service-muted-strong)] sm:text-base">
              TNSTACK giúp website tải nhanh hơn, hoạt động ổn định hơn và thân
              thiện với công cụ tìm kiếm. Tối ưu từ cấu trúc kỹ thuật đến trải
              nghiệm người dùng, nhằm hỗ trợ cải thiện thứ hạng và hiệu quả kinh
              doanh.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactDialogTrigger className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--service-accent)] px-6 text-sm font-bold text-[var(--service-on-accent)]">
                Nhận tư vấn miễn phí <ArrowRight className="size-4" />
              </ContactDialogTrigger>
              <ContactDialogTrigger className="h-12 rounded-full border border-[var(--service-accent)]/40 px-6 text-sm font-semibold">
                Xem bảng giá
              </ContactDialogTrigger>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <PerformanceMockup />
          </Reveal>
        </div>
      </section>
      <section
        aria-label="Lợi ích tối ưu"
        className="mt-5 grid overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-card)] sm:grid-cols-2 lg:grid-cols-4"
      >
        {data.benefits.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex gap-3 border-[var(--service-accent)]/10 p-5 lg:not-last:border-r"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--service-accent)]/10 text-[var(--service-accent)]">
              <Icon className="size-5" />
            </span>
            <div>
              <h2 className="text-sm font-bold">{title}</h2>
              <p className="mt-1 text-xs leading-5 text-[var(--service-muted)]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

function PerformanceMockup() {
  return (
    <div className="relative mx-auto aspect-[1.12/1] max-w-[36rem]">
      <div className="absolute inset-x-[9%] top-[12%] bottom-[12%] rotate-2 rounded-2xl border border-[var(--service-accent)]/25 bg-[var(--service-bg)] p-3 shadow-2xl">
        <div className="h-full rounded-xl bg-[#f1f5f9] p-5 text-[#1e293b]">
          <div className="flex items-center justify-between">
            <b className="text-xs">Hiệu suất website</b>
            <span className="text-[9px]">Số liệu minh họa</span>
          </div>
          <div className="mt-7 grid grid-cols-[.7fr_1.3fr] gap-4">
            <div className="grid aspect-square place-items-center rounded-full border-[10px] border-[var(--service-accent)] text-3xl font-bold">
              98
            </div>
            <div className="flex items-end gap-1 border-b border-l border-[#1e40af]/20 p-2">
              {[30, 45, 40, 63, 70, 82, 95].map((h, i) => (
                <i
                  key={i}
                  className="flex-1 rounded-t bg-[#22c55e]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[4%] left-[1%] h-[50%] w-[25%] -rotate-3 rounded-[1.3rem] border-4 border-[#0f172a] bg-[#f1f5f9] p-2">
        <div className="mx-auto h-2 w-8 rounded bg-[#0f172a]" />
        <div className="mt-5 grid aspect-square place-items-center rounded-full border-[7px] border-[var(--service-accent)] text-xl font-bold text-[#1e293b]">
          92
        </div>
      </div>
      {(
        [
          ["top-1 left-2", Search, "Google PageSpeed"],
          ["top-2 right-0", TimerReset, "Thời gian tải"],
          ["bottom-2 right-0", Laptop, "Hiệu suất minh họa"],
        ] as const
      ).map(([c, I, t]) => (
        <div
          key={String(t)}
          className={`absolute ${c} flex items-center gap-2 rounded-xl border border-[var(--service-accent)]/25 bg-[var(--service-card)]/95 px-3 py-2 text-[10px]`}
        >
          <I className="size-4 text-[var(--service-accent)]" />
          {t}
        </div>
      ))}
      <Smartphone className="absolute bottom-0 left-[30%] size-5 text-[var(--service-accent)]/40" />
    </div>
  );
}
