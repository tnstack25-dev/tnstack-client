import {
  ArrowRight,
  ChevronRight,
  Cloud,
  Database,
  Headphones,
  Home,
  MonitorCog,
  Settings,
  Wrench,
} from "lucide-react";
import Link from "next/link";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";

export function OtherServicesHero() {
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
          <Home className="size-3.5" /> Trang chủ
        </Link>
        <ChevronRight className="size-3" />
        <Link href="/dich-vu" className="hover:text-[var(--service-accent)]">
          Dịch vụ
        </Link>
        <ChevronRight className="size-3" />
        <span className="text-white">Các dịch vụ khác</span>
      </nav>

      <section className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-surface)] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(37,99,235,.2),transparent_40%),linear-gradient(rgba(37,99,235,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.04)_1px,transparent_1px)] [background-size:auto,34px_34px,34px_34px]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal direction="right">
            <p className="inline-flex rounded-full border border-[var(--service-accent)]/40 px-4 py-2 text-[10px] font-bold tracking-[.13em] text-[var(--service-accent)] uppercase">
              Các dịch vụ khác
            </p>
            <h1 className="mt-6 text-[clamp(2rem,3vw,2.625rem)] leading-[1.13] font-bold tracking-[-.055em] text-balance">
              Giải pháp website toàn diện cho{" "}
              <span className="text-[var(--service-accent)]">
                mọi nhu cầu đặc thù
              </span>
            </h1>
            <p className="mt-6 text-sm leading-7 text-[var(--service-muted-strong)] sm:text-base">
              Ngoài các dịch vụ chính, TNSTACK còn cung cấp nhiều giải pháp
              chuyên sâu giúp website hoạt động hiệu quả hơn, an toàn hơn và đáp
              ứng tốt hơn các yêu cầu đặc thù.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactDialogTrigger className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--service-accent)] px-6 text-sm font-bold text-[var(--service-on-accent)] transition hover:bg-[var(--service-accent-hover)] hover:shadow-[0_0_30px_rgba(37,99,235,.22)]">
                Nhận tư vấn miễn phí <ArrowRight className="size-4" />
              </ContactDialogTrigger>
              <a
                href="#tu-van-dich-vu-khac"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--service-accent)]/40 px-6 text-sm font-semibold transition hover:bg-[var(--service-accent)]/8"
              >
                Xem báo giá
              </a>
            </div>
          </Reveal>
          <Reveal direction="left">
            <SolutionsMockup />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function SolutionsMockup() {
  const floating = [
    ["top-0 left-0", Database, "Khôi phục dữ liệu"],
    ["top-1 right-0", Settings, "Tích hợp marketing"],
    ["bottom-0 left-0", MonitorCog, "Tư vấn giải pháp"],
    ["right-0 bottom-[22%]", Headphones, "Hỗ trợ kỹ thuật"],
  ] as const;

  return (
    <div
      className="relative mx-auto aspect-[1.18/1] max-w-[38rem]"
      aria-label="Hệ sinh thái giải pháp website minh họa"
    >
      <Cloud className="absolute top-[7%] left-[45%] size-20 text-[var(--service-accent)]/45" />
      <div className="absolute inset-x-[12%] top-[12%] bottom-[7%] -rotate-2 rounded-2xl border border-[var(--service-accent)]/30 bg-[var(--service-bg)] p-3 shadow-[0_0_48px_rgba(37,99,235,.17)]">
        <div className="h-full rounded-xl border border-[var(--service-accent)]/15 bg-[#f1f5f9] p-4 text-[#0f172a]">
          <div className="flex items-center justify-between">
            <b className="text-[10px]">TNSTACK SOLUTIONS</b>
            <span className="size-2 rounded-full bg-[#16a34a]" />
          </div>
          <div className="mt-4 grid h-[72%] grid-cols-[4.5rem_1fr] gap-3">
            <div className="space-y-2 rounded-lg bg-[var(--service-card)] p-2">
              {[0, 1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={`h-2 rounded-full ${item === 1 ? "bg-[var(--service-accent)]" : "bg-white/15"}`}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-blue-100 p-2">
                <div className="h-2 w-2/3 rounded bg-blue-400" />
                <div className="mt-3 h-12 rounded bg-white" />
              </div>
              <div className="rounded-lg bg-slate-100 p-2">
                <div className="h-2 w-1/2 rounded bg-slate-300" />
                <div className="mt-3 h-12 rounded bg-white" />
              </div>
              <div className="col-span-2 rounded-lg bg-slate-100 p-2">
                <svg viewBox="0 0 180 50" className="h-full w-full">
                  <path
                    d="M0 44 C30 40 38 47 65 24 S105 37 126 15 S160 20 180 5"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[6%] bottom-[5%] grid size-24 place-items-center rounded-[1.7rem] border border-[var(--service-accent)]/30 bg-[#1e3a8a] shadow-xl">
        <Wrench className="size-12 text-[var(--service-accent)]" />
      </div>
      {floating.map(([position, Icon, title]) => (
        <div
          key={title}
          className={`absolute ${position} flex items-center gap-2 rounded-xl border border-[var(--service-accent)]/25 bg-[var(--service-card)]/95 px-3 py-2 text-[9px] shadow-xl`}
        >
          <Icon className="size-4 text-[var(--service-accent)]" />
          {title}
        </div>
      ))}
    </div>
  );
}
