import {
  Activity,
  ArrowRight,
  CalendarSync,
  ChevronRight,
  Cloud,
  DatabaseBackup,
  Gauge,
  Home,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";
import { websiteMaintenanceService as data } from "@/config/website-maintenance-service";

export function MaintenanceHero() {
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
        <span className="text-white">Bảo trì & quản trị website</span>
      </nav>

      <section className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-surface)] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_32%,rgba(37,99,235,.18),transparent_38%),linear-gradient(rgba(37,99,235,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.04)_1px,transparent_1px)] [background-size:auto,34px_34px,34px_34px]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal direction="right">
            <p className="inline-flex rounded-full border border-[var(--service-accent)]/40 px-4 py-2 text-[10px] font-bold tracking-[.13em] text-[var(--service-accent)] uppercase">
              Bảo trì & quản trị website
            </p>
            <h1 className="mt-6 text-[clamp(2rem,3vw,2.625rem)] leading-[1.13] font-bold tracking-[-.055em] text-balance">
              Bảo trì & quản trị website chuyên nghiệp,{" "}
              <span className="text-[var(--service-accent)]">
                ổn định và an toàn
              </span>
            </h1>
            <p className="mt-6 text-sm leading-7 text-[var(--service-muted-strong)] sm:text-base">
              TNSTACK cung cấp dịch vụ bảo trì và quản trị website chuyên
              nghiệp, giúp website hoạt động ổn định, được cập nhật thường
              xuyên, tăng cường bảo mật và sẵn sàng phát triển lâu dài.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactDialogTrigger className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--service-accent)] px-6 text-sm font-bold text-[var(--service-on-accent)]">
                Nhận tư vấn miễn phí <ArrowRight className="size-4" />
              </ContactDialogTrigger>
              <Link
                href="/lien-he"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--service-accent)]/40 px-6 text-sm font-semibold transition hover:bg-[var(--service-accent)]/8"
              >
                Xem bảng giá
              </Link>
            </div>
          </Reveal>
          <Reveal direction="left">
            <MaintenanceHeroDashboard />
          </Reveal>
        </div>
      </section>

      <section
        aria-label="Lợi ích nhanh của dịch vụ bảo trì"
        className="mt-5 grid overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-card)] sm:grid-cols-2 lg:grid-cols-4"
      >
        {data.highlights.map(({ title, description, icon: Icon }) => (
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

function MaintenanceHeroDashboard() {
  return (
    <div
      className="relative mx-auto aspect-[1.15/1] max-w-[38rem]"
      aria-label="Dashboard quản trị website minh họa"
    >
      <div className="absolute inset-x-[5%] top-[12%] bottom-[8%] -rotate-2 rounded-2xl border border-[var(--service-accent)]/25 bg-[var(--service-bg)] p-3 shadow-[0_0_48px_rgba(37,99,235,.14)]">
        <div className="flex h-full overflow-hidden rounded-xl border border-[var(--service-accent)]/15 bg-[var(--service-card)]">
          <div className="hidden w-[23%] border-r border-[var(--service-accent)]/10 bg-[var(--service-bg)] p-3 sm:block">
            <div className="mb-5 h-3 w-16 rounded-full bg-[var(--service-accent)]/45" />
            {["Tổng quan", "Hiệu suất", "Bảo mật", "Sao lưu", "Báo cáo"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`mb-2 rounded-md px-2 py-2 text-[8px] ${index === 0 ? "bg-[var(--service-accent)]/12 text-[var(--service-accent)]" : "text-[var(--service-muted)]"}`}
                >
                  {item}
                </div>
              ),
            )}
          </div>
          <div className="min-w-0 flex-1 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold">Website Dashboard</p>
              <span className="rounded-md bg-[var(--service-accent)] px-2 py-1 text-[7px] font-bold text-[var(--service-on-accent)]">
                Đang hoạt động
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Uptime", "Hiệu suất", "Bảo mật"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-[var(--service-accent)]/10 bg-[var(--service-surface)] p-2"
                >
                  <p className="text-[7px] text-[var(--service-muted)]">
                    {label}
                  </p>
                  <div className="mt-2 h-2 rounded-full bg-[var(--service-accent)]/25" />
                </div>
              ))}
            </div>
            <div className="relative mt-3 h-[42%] overflow-hidden rounded-lg border border-[var(--service-accent)]/10 bg-[var(--service-bg)]">
              <svg
                viewBox="0 0 300 110"
                className="h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="maintenance-area"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0"
                      stopColor="var(--service-accent)"
                      stopOpacity=".32"
                    />
                    <stop
                      offset="1"
                      stopColor="var(--service-accent)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M0 88 C35 74 52 90 82 62 S126 78 157 46 S203 70 230 36 S270 52 300 20 V110 H0Z"
                  fill="url(#maintenance-area)"
                />
                <path
                  d="M0 88 C35 74 52 90 82 62 S126 78 157 46 S203 70 230 36 S270 52 300 20"
                  fill="none"
                  stroke="var(--service-accent)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Cloud className="absolute top-[8%] right-[2%] size-16 text-[var(--service-accent)]/60" />
      {(
        [
          ["top-0 left-0", CalendarSync, "Cập nhật hệ thống"],
          ["top-1 right-0", ShieldCheck, "Giám sát theo gói"],
          ["bottom-0 left-0", DatabaseBackup, "Sao lưu dữ liệu"],
          ["right-0 bottom-[7%]", Gauge, "Tối ưu hiệu suất"],
        ] as const
      ).map(([position, Icon, title]) => (
        <div
          key={title}
          className={`absolute ${position} flex items-center gap-2 rounded-xl border border-[var(--service-accent)]/25 bg-[var(--service-card)]/95 px-3 py-2 text-[9px] shadow-xl`}
        >
          <Icon className="size-4 text-[var(--service-accent)]" />
          {title}
        </div>
      ))}
      <Activity className="absolute right-[9%] bottom-[20%] size-7 text-[var(--service-accent)]" />
    </div>
  );
}
