import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Home,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";
import { facebookAdsService as data } from "@/config/facebook-ads-service";

export function FacebookAdsHero() {
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
        <span className="text-white">Chạy Facebook Ads</span>
      </nav>
      <section className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-surface)] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(37,99,235,.2),transparent_40%),linear-gradient(rgba(37,99,235,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.04)_1px,transparent_1px)] [background-size:auto,34px_34px,34px_34px]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal direction="right">
            <p className="inline-flex rounded-full border border-[var(--service-accent)]/40 px-4 py-2 text-[10px] font-bold tracking-[.13em] text-[var(--service-accent)] uppercase">
              Chạy Facebook Ads
            </p>
            <h1 className="mt-6 text-[clamp(2rem,3vw,2.625rem)] leading-[1.13] font-bold tracking-[-.055em] text-balance">
              Chạy Facebook Ads hiệu quả,{" "}
              <span className="text-[var(--service-accent)]">
                tiếp cận đúng
              </span>{" "}
              khách hàng tiềm năng
            </h1>
            <p className="mt-6 text-sm leading-7 text-[var(--service-muted-strong)] sm:text-base">
              TNSTACK tư vấn và triển khai Facebook Ads giúp doanh nghiệp tăng
              nhận diện, thu hút khách hàng tiềm năng và kiểm soát chi phí theo
              mục tiêu kinh doanh đã thống nhất.
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
            <FacebookDashboardMockup />
          </Reveal>
        </div>
      </section>
      <section
        aria-label="Lợi ích nhanh của Facebook Ads"
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

function FacebookDashboardMockup() {
  return (
    <div
      className="relative mx-auto aspect-[1.15/1] max-w-[38rem]"
      aria-label="Dashboard Facebook Ads minh họa"
    >
      <div className="absolute inset-x-[6%] top-[12%] bottom-[8%] -rotate-2 rounded-2xl border border-[var(--service-accent)]/25 bg-[var(--service-bg)] p-3 shadow-[0_0_48px_rgba(37,99,235,.16)]">
        <div className="h-full rounded-xl border border-[var(--service-accent)]/15 bg-[#0f172a] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FacebookMark />
              <b className="text-xs">Facebook Ads · Minh họa</b>
            </div>
            <span className="rounded bg-[var(--service-accent)] px-2 py-1 text-[7px] font-bold text-[var(--service-on-accent)]">
              Campaign
            </span>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {["Tiếp cận", "Tương tác", "Chuyển đổi", "Chi phí"].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-white/8 bg-white/5 p-2"
              >
                <p className="text-[7px] text-slate-400">{label}</p>
                <div className="mt-2 h-2 rounded-full bg-[var(--service-accent)]/35" />
              </div>
            ))}
          </div>
          <svg
            viewBox="0 0 320 120"
            className="mt-4 h-[48%] w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="fb-hero-area" x1="0" x2="0" y1="0" y2="1">
                <stop
                  offset="0"
                  stopColor="var(--service-accent)"
                  stopOpacity=".3"
                />
                <stop
                  offset="1"
                  stopColor="var(--service-accent)"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            <path
              d="M0 100 C40 90 60 102 95 68 S155 92 190 55 S246 72 278 35 S308 42 320 20 V120 H0Z"
              fill="url(#fb-hero-area)"
            />
            <path
              d="M0 100 C40 90 60 102 95 68 S155 92 190 55 S246 72 278 35 S308 42 320 20"
              fill="none"
              stroke="var(--service-accent)"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[25%] rounded-[1.4rem] border border-[var(--service-accent)]/25 bg-[#f1f5f9] p-2 shadow-xl">
        <div className="aspect-[.62/1] rounded-xl bg-white p-2 text-[#0f172a]">
          <div className="flex items-center gap-1">
            <FacebookMark small />
            <span className="text-[6px] font-bold">Sponsored</span>
          </div>
          <div className="mt-2 aspect-square rounded bg-gradient-to-br from-blue-200 to-blue-100" />
          <div className="mt-2 h-1.5 rounded bg-slate-200" />
          <div className="mt-1 h-1.5 w-2/3 rounded bg-slate-200" />
        </div>
      </div>
      {(
        [
          ["top-0 left-0", Users, "Đúng đối tượng"],
          ["top-1 right-0", Target, "Nhắm mục tiêu"],
          ["bottom-0 left-0", TrendingUp, "Cơ hội tăng trưởng"],
          ["right-0 bottom-[22%]", BarChart3, "Tối ưu liên tục"],
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
    </div>
  );
}

function FacebookMark({ small = false }: { small?: boolean }) {
  return (
    <span
      aria-label="Facebook"
      className={`grid ${small ? "size-4 text-[12px]" : "size-7 text-xl"} place-items-center rounded-full bg-[#1877f2] font-black text-white`}
    >
      f
    </span>
  );
}
